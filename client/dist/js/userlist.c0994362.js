(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userlist"],{"206b":function(t,s,e){},2957:function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card userCard"},[e("div",{staticClass:"card-body"},[e("router-link",{attrs:{to:{name:"user",params:{id:t.user.id}}}},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.user.username))])])],1)])},n=[],a={name:"UserCard",props:{user:Object}},i=a,u=(e("c865"),e("2877")),c=Object(u["a"])(i,r,n,!1,null,null,null);s["a"]=c.exports},ab3a:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("h1",[t._v("Users List")]),e("CardList",{attrs:{items:t.users},scopedSlots:t._u([{key:"default",fn:function(t){var s=t.item;return[e("UserCard",{attrs:{user:s}})]}}])})],1)},n=[],a=e("cebc"),i=e("2f62"),u=e("c995"),c=e("2957"),o={name:"userlist",components:{CardList:u["a"],UserCard:c["a"]},computed:Object(a["a"])({},Object(i["b"])({users:"users/all"}))},l=o,m=e("2877"),f=Object(m["a"])(l,r,n,!1,null,null,null);s["default"]=f.exports},bef4:function(t,s,e){"use strict";var r=e("cb57"),n=e.n(r);n.a},c865:function(t,s,e){"use strict";var r=e("206b"),n=e.n(r);n.a},c995:function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{ref:"ul"},t._l(t.items,function(s){return e("li",{key:s.id,staticClass:"masonry-item my-2"},[t._t("default",null,{item:s})],2)}),0)},n=[],a={name:"cardlist",props:{items:Array},methods:{masonryInit:function(){$(this.$refs.ul).masonry({itemSelector:".masonry-item",columnWidth:270,gutter:10})},masonryDestroy:function(){$(this.$refs.ul).masonry("destroy")},masonryReflow:function(){$(this.$refs.ul).masonry("reloadItems").masonry("layout")}},mounted:function(){this.masonryInit()},updated:function(){this.masonryReflow()},beforeDestroy:function(){this.masonryDestroy()}},i=a,u=(e("bef4"),e("2877")),c=Object(u["a"])(i,r,n,!1,null,"c066ba10",null);s["a"]=c.exports},cb57:function(t,s,e){}}]);
//# sourceMappingURL=userlist.c0994362.js.map