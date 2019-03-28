package auction;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bid.Bid;
import bid.BidDao;
import io.javalin.Handler;
import user.UserDao;

public class AuctionController {

  private static AuctionDao auctionDao = new AuctionDao();
  private static BidDao bidDao = new BidDao();

  public static Handler getAll = ctx -> ctx.json(auctionDao.getAll());

  public static Handler get = ctx -> {
    Integer id = Integer.parseInt(ctx.pathParam(":id"));
    Auction auction = auctionDao.get(id);
    if (auction == null) {
      Map<String, Object> message = new HashMap<>();
      message.put("status", 404);
      message.put("details", "auction not found for id: " + id.toString());
      ctx.status(404).json(message);
    } else {
      ctx.json(auction);
    }
  };

  /**
   * JSON Body format:
   * {
   *   "bidderId": 3,
   *   "amount": 12.34
   * }
   */
  public static Handler placeBid = ctx -> {
    Integer auctionId = Integer.parseInt(ctx.pathParam(":id"));
    Auction auction = auctionDao.get(auctionId);
    if (auction == null) {
      Map<String, Object> message = new HashMap<>();
      message.put("status", 404);
      message.put("details", "auction not found for id: " + auctionId.toString());
      ctx.status(404).json(message);
    } else {
      if (auction.getCompleted()) {
        Map<String, Object> message = new HashMap<>();
        message.put("status", 403);
        message.put("details", "auction with id: " + auctionId.toString() + " has already been completed");
        ctx.status(403).json(message);
        return;
      }

      Bid newBid = ctx.validatedBodyAsClass(Bid.class).getOrThrow();
      newBid.setAuctionId(auctionId);
      List<String> errors = newBid.validate();

      if (new UserDao().get(newBid.getBidderId()) == null) {
        errors.add("user not found for id: " + newBid.getBidderId().toString());
      }

      if (!errors.isEmpty()) {
        Map<String, Object> errorsMap = new HashMap<>();
        errorsMap.put("status", 400);
        errorsMap.put("errors", errors);
        ctx.status(400).json(errorsMap);
        return;
      }

      // get the current highest bid
      Bid highestBid = null;
      List<Bid> bids = bidDao.bidsForAuction(auction);
      for (Bid bid : bids) {
        if (highestBid == null) {
          highestBid = bid;
        } else if (bid.getAmount() > highestBid.getAmount()) {
          highestBid = bid;
        }
      }

      // Place the bid if it's higher than the current bid, otherwise give an error
      if (highestBid == null || newBid.getAmount() > highestBid.getAmount()) {
        Bid placedBid = bidDao.save(newBid);

        // Make sure this is the only bid at the given price
        bids = bidDao.bidsForAuction(auction);
        List<Bid> equalValueBids = new ArrayList<>();

        for (Bid bid : bids) {
          if (bid.getAmount().equals(placedBid.getAmount())) {
            equalValueBids.add(bid);
          }
        }

        // There's at least one duplicate bid, if placedBid has a higher id than any of the other bids, delete itself
        if (equalValueBids.size() > 1) {
          for (Bid bid : equalValueBids) {
            if (bid.getId() > placedBid.getId()) {
              bidDao.delete(placedBid);

              errors.add("bid amount not higher than the current highest bid");
              Map<String, Object> errorsMap = new HashMap<>();
              errorsMap.put("status", 409);
              errorsMap.put("errors", errors);
              ctx.status(409).json(errorsMap);
              return;
            }
          }
        } else {
          ctx.json(placedBid);
        }

      } else {
        errors.add("bid amount not higher than the current highest bid");
        Map<String, Object> errorsMap = new HashMap<>();
        errorsMap.put("status", 409);
        errorsMap.put("errors", errors);
        ctx.status(409).json(errorsMap);
      }
    }
  };

  /**
   * JSON Body Syntax:
   * {
   *   "dogId": 1,
   *   "expirationTime": 1553378626,
   *   "startPrice": 10.0,
   *   "name": "my fabulous dog auction"
   * }
   *
   * Note: expirationTime is a UTC timestamp in seconds
   */
  public static Handler create = ctx -> {
    Auction newAuction = ctx.bodyAsClass(Auction.class);
    List<String> errors = newAuction.validate();

    if (!errors.isEmpty()) {
      Map<String, Object> errorsMap = new HashMap<>();
      errorsMap.put("status", 400);
      errorsMap.put("errors", errors);
      ctx.status(400).json(errorsMap);
      return;
    }

    // Check to see if there's already an active auction for that dog
    if (auctionDao.activeAuctionForDogId(newAuction.getDogId()) != null)
      errors.add("active auction already exists for dogId: " + newAuction.getDogId().toString());

    if (!errors.isEmpty()) {
      Map<String, Object> errorsMap = new HashMap<>();
      errorsMap.put("status", 409);
      errorsMap.put("errors", errors);
      ctx.status(409).json(errorsMap);
    } else {
      Auction savedAuction = auctionDao.save(newAuction);
      ctx.json(savedAuction);
    }
  };

  public static void endAuctions() {

  }
}