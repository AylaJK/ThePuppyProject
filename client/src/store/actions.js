import { Account, Ping } from "@/api";

export default {
  apiUnavailable(context) {
    context.commit("apiUnavailable");
    let polling;
    polling = setInterval(
      function() {
        Ping()
          .then(() => {
            clearInterval(polling);
            context.commit("apiAvailable");
          })
          .catch(() => {});
      }.bind(polling),
      5000
    );
    context.commit("auctions/deleteRealtimeData");
  },
  signin(context, username) {
    return Account.login(username).then(user => {
      context.commit("setUser", user);
    });
  },
  signout(context) {
    context.commit("setUser", null);
  }
};
