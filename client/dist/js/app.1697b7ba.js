(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)i=s[l],r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},i={app:0},r={app:0},o=[];function s(t){return u.p+"js/"+({"account~auction":"account~auction",account:"account",auction:"auction",auctionlist:"auctionlist",dog:"dog",doglist:"doglist",user:"user",userlist:"userlist"}[t]||t)+"."+{"account~auction":"7a283f36",account:"3114a093",auction:"dd06d392",auctionlist:"057daaed",dog:"fb81ebc4",doglist:"6962427c",user:"db83ad30",userlist:"036f259c"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"account~auction":1,account:1,auctionlist:1,dog:1,doglist:1,user:1,userlist:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="css/"+({"account~auction":"account~auction",account:"account",auction:"auction",auctionlist:"auctionlist",dog:"dog",doglist:"doglist",user:"user",userlist:"userlist"}[t]||t)+"."+{"account~auction":"f49d7fb7",account:"65bafc41",auction:"31d6cfe0",auctionlist:"b562c6fb",dog:"0a56fb13",doglist:"fe9586fa",user:"894eeb42",userlist:"efd6dcdd"}[t]+".css",r=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.request=a,delete i[t],f.parentNode.removeChild(f),n(o)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){i[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"118c":function(t,e,n){},"19f0":function(t,e,n){},"22f4":function(t,e,n){"use strict";var a=n("19f0"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"Account",function(){return ut}),n.d(a,"Auctions",function(){return dt}),n.d(a,"Dogs",function(){return mt}),n.d(a,"Ping",function(){return pt}),n.d(a,"Users",function(){return gt});n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"sticky-top"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("The Puppy Project")]),t._m(0),n("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarCollapse"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("NavbarLink",{attrs:{to:"/",exact:""}},[t._v("Home")]),n("NavbarLink",{attrs:{to:"/auctions"}},[t._v("Auctions")]),n("NavbarLink",{attrs:{to:"/dogs"}},[t._v("Dogs")])],1),n("div",{staticClass:"d-flex"},[n("NavbarStatus",{staticClass:"ml-3"}),n("NavbarAccount",{staticClass:"ml-3"})],1)])],1)]),n("main",[n("router-view")],1),t._m(1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"text-muted"},[n("div",{staticClass:"container"},[n("div",{staticClass:"d-flex justify-content-center"},[n("small",[t._v("CPSC 559 - Group 2")])])])])}],s=n("cebc"),u=n("2f62"),c=n("308d"),l=n("6bb5"),d=n("4e2b"),f=n("d225"),m=n("b0b4"),p=function(){function t(e,n,a){Object(f["a"])(this,t),this.dispatch=e,this.period=n,this.store=a,this.interval=null}return Object(m["a"])(t,[{key:"setStore",value:function(t){this.store=t}},{key:"errorHandler",value:function(t){switch(t.status){case 418:break;case 521:default:this.store.dispatch("apiUnavailable")}}},{key:"startPolling",value:function(){var t=this;if(!this.interval){var e=function(){t.store.dispatch(t.dispatch).catch(function(e){return t.errorHandler(e)})};e(),this.interval=setInterval(e.bind(this),this.period)}}},{key:"stopPolling",value:function(){null!==this.interval&&(clearInterval(this.interval),this.interval=null)}}]),t}(),h=new p("auctions/fetchAll",3e3),g=new p("bids/fetchAll",15e3),v=new p("dogs/fetchAll",15e3),b=new p("users/fetchAll",15e3),y=function(t){function e(t,n,a){return Object(f["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).call(this,t,n,a))}return Object(d["a"])(e,t),Object(m["a"])(e,[{key:"errorHandler",value:function(){}}]),e}(p),O=new y("pingAPI",5e3);function w(t){h.setStore(t),g.setStore(t),v.setStore(t),O.setStore(t),b.setStore(t)}var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"dropdown",staticClass:"account dropdown"},[n("button",{staticClass:"btn btn-outline-secondary my-2 my-sm-0 dropdown-toggle",attrs:{type:"button",id:"accountMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t.loggedin?[t._v("\n      "+t._s(t.username)+"\n    ")]:[t._v("\n      Login\n    ")]],2),n("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"accountMenuButton"}},[t.loggedin?[n("router-link",{staticClass:"dropdown-item",attrs:{"active-class":"active",to:"/account"}},[t._v("My Account")]),n("div",{staticClass:"dropdown-divider"}),n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onLogoutClick(e)}}},[t._v("Log Out")])]:[n("form",{staticClass:"px-4 py-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"loginDropdownFormUsername"}},[t._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signinUsername,expression:"signinUsername"}],ref:"loginUsername",staticClass:"form-control",class:{"is-invalid":t.loginError},attrs:{type:"text",id:"loginDropdownFormUsername",placeholder:"username"},domProps:{value:t.signinUsername},on:{input:function(e){e.target.composing||(t.signinUsername=e.target.value)}}}),t.loginError?n("div",{staticClass:"invalid-feedback"},[t._v("\n            "+t._s(t.loginError)+"\n          ")]):t._e()]),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.onSigninSubmit(e)}}},[t._v("\n          Sign in\n        ")])]),n("div",{staticClass:"dropdown-divider"}),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("New around here? Create an account")])]],2)])},j=[],A={name:"navbaraccount",data:function(){return{signinUsername:null,loginError:null}},computed:Object(s["a"])({},Object(u["c"])(["userId","username"]),Object(u["b"])(["loggedin"])),methods:{resetSigninForm:function(){this.signinUsername=null},onSigninSubmit:function(){var t=this;this.loginError=null,this.$store.dispatch("signin",this.signinUsername).then(function(){t.resetSigninForm(),t.$router.push({name:"account"})}).catch(function(e){e.data&&e.data.details?t.loginError=e.data.details:t.loginError=e.msg})},onLogoutClick:function(){var t=this;this.$store.dispatch("signout").then(function(){t.$router.push({name:"home"})})}},mounted:function(){var t=this;$(this.$refs.dropdown).on("shown.bs.dropdown",function(){t.loggedin||t.$nextTick(function(){return t.$refs.loginUsername.focus()})})},beforeDestroy:function(){$(this.$refs.dropdown).off("shown.bs.dropdown")}},P=A,k=(n("80cf"),n("2877")),x=Object(k["a"])(P,C,j,!1,null,null,null),_=x.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.apiAvailable?t._e():n("div",{staticClass:"status"},[n("span",{staticClass:"h-100 d-flex align-items-center"},[n("i",{directives:[{name:"show",rawName:"v-show",value:t.refreshing,expression:"refreshing"}],staticClass:"fas fa-spinner fa-spin"}),n("a",{directives:[{name:"show",rawName:"v-show",value:!t.refreshing,expression:"!refreshing"}],ref:"tooltip",attrs:{href:"#","data-toggle":"tooltip","data-placement":"bottom","data-html":"true",title:"<b>Offline mode is on</b><div>Looks like you're not connected to the Internet. Changes you make in offline mode will be synced when you reconnect.</div>"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.refreshNow(e)}}},[n("i",{staticClass:"fas fa-exclamation-triangle"})])])])},E=[],S={name:"NavbarStatus",data:function(){return{refreshing:!1}},computed:Object(s["a"])({},Object(u["c"])(["apiAvailable"])),watch:{apiAvailable:function(t){var e=this;t||this.$nextTick(function(){return $(e.$refs.tooltip).tooltip()})}},methods:{refreshNow:function(){var t=this;this.refreshing=!0,setTimeout(function(){t.refreshing=!1},3e3)}},mounted:function(){var t=this;this.apiAvailable||this.$nextTick(function(){return $(t.$refs.tooltip).tooltip()})}},U=S,R=(n("22f4"),Object(k["a"])(U,I,E,!1,null,null,null)),N=R.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",t._b({staticClass:"nav-item",attrs:{tag:"li","active-class":"active"}},"router-link",t.$attrs,!1),[n("a",{staticClass:"nav-link"},[t._t("default")],2)])},T=[],B={},D=Object(k["a"])(B,q,T,!1,null,null,null),L=D.exports,z={components:{NavbarAccount:_,NavbarStatus:N,NavbarLink:L},computed:Object(s["a"])({},Object(u["c"])(["apiAvailable"]),Object(u["b"])(["loggedin"])),watch:{apiAvailable:function(t){t?this.apiIsAvailable():this.apiIsUnavailable()},loggedin:function(){this.loggedin&&this.apiAvailable?g.startPolling():g.stopPolling()}},methods:{apiIsAvailable:function(){O.stopPolling(),h.startPolling(),v.startPolling(),b.startPolling(),this.loggedin&&g.startPolling()},apiIsUnavailable:function(){O.startPolling(),h.stopPolling(),g.stopPolling(),v.stopPolling(),b.stopPolling()}},mounted:function(){w(this.$store),this.apiAvailable?this.apiIsAvailable():this.apiIsUnavailable()},beforeDestroy:function(){h.stopPolling(),g.stopPolling(),v.stopPolling(),O.stopPolling(),b.stopPolling()}},M=z,F=Object(k["a"])(M,r,o,!1,null,null,null),H=F.exports,V=n("8c4f"),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex p-3 mx-auto flex-column text-center"},[a("div",{staticClass:"inner cover"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("h1",{staticClass:"display-4"},[t._v("The Puppy Project")]),a("p",{staticClass:"lead"},[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium\n        facilisis neque, non molestie ipsum convallis sit amet. Vestibulum sed\n        felis ut purus auctor malesuada. Curabitur facilisis turpis ac lorem\n        scelerisque imperdiet. Cras ligula neque, pulvinar ut rhoncus vitae,\n        bibendum vitae ipsum. Ut ac maximus quam. Curabitur a posuere enim.\n        Duis malesuada est in urna hendrerit, at euismod eros sollicitudin.\n        Nullam a augue id ex tincidunt convallis. Aliquam nec congue eros,\n        vitae elementum turpis. In hac habitasse platea dictumst. Ut non quam\n        aliquam, maximus tortor vel, eleifend nisl. Fusce vulputate mauris mi,\n        et suscipit lectus gravida eu. Praesent sodales, mauris quis dignissim\n        rutrum, nisi ipsum scelerisque ipsum, vel tristique ex risus eget\n        erat. Curabitur finibus velit purus, vitae sodales nibh imperdiet sit\n        amet. Morbi porta risus fringilla, iaculis arcu ornare, feugiat\n        libero.\n      ")]),a("p",[a("router-link",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{to:"/auctions"}},[t._v("View Auctions")]),t._v("\n         \n        "),a("router-link",{staticClass:"btn btn-secondary my-2 my-sm-0",attrs:{to:"/dogs"}},[t._v("View Dogs")])],1)])])])},G=[],K={},Q=Object(k["a"])(K,J,G,!1,null,null,null),W=Q.exports;i["a"].use(V["a"]);var X=new V["a"]({base:"",routes:[{path:"/",name:"home",component:W},{path:"/auctions",name:"auctionlist",component:function(){return n.e("auctionlist").then(n.bind(null,"951f"))}},{path:"/auctions/:id",name:"auction",component:function(){return Promise.all([n.e("account~auction"),n.e("auction")]).then(n.bind(null,"e261"))}},{path:"/dogs",name:"doglist",component:function(){return n.e("doglist").then(n.bind(null,"0db3"))}},{path:"/dogs/:id",name:"dog",component:function(){return n.e("dog").then(n.bind(null,"6811"))}},{path:"/users",name:"userlist",component:function(){return n.e("userlist").then(n.bind(null,"ab3a"))}},{path:"/users/:id",name:"user",component:function(){return n.e("user").then(n.bind(null,"1511"))}},{path:"/account",name:"account",component:function(){return Promise.all([n.e("account~auction"),n.e("account")]).then(n.bind(null,"77be"))}}]}),Y=n("bfa9"),Z=n("bc3a"),tt=n.n(Z),et=n("795b"),nt=n.n(et),at={recieved:function(t){return console.log("API ERROR (Response):",t.response),nt.a.reject({msg:"Bad server response. Please try again later.",data:t.response.data,status:t.response.status,error:t})},notRecieved:function(t){return console.log("API ERROR (No Response):",t.config.method,t.config.url),nt.a.reject({msg:"Could not connect to the API server. Please try again later",status:521,error:t})},otherError:function(t){return console.log("API ERROR: Something happened in setting up the request that triggered an Error",t),nt.a.reject({msg:"Something went wrong, please try again later.",status:418,error:t})}};function it(t){return t.response?at.recieved(t):t.request?at.notRecieved(t):at.otherError(t)}var rt=tt.a.create({baseURL:"http://ec2-3-88-0-236.compute-1.amazonaws.com:975/"});rt.interceptors.response.use(function(t){return t.data},function(t){return it(t)});var ot=rt,st=function(){function t(){Object(f["a"])(this,t),this.basepath="account"}return Object(m["a"])(t,[{key:"login",value:function(t){return ot.get(this.basepath+"/login/user?username="+t)}},{key:"create",value:function(t){return ot.post(this.basepath,{username:t})}},{key:"getBids",value:function(t){return ot.get(this.basepath+"/"+t+"/bids")}}]),t}(),ut=new st,ct=(n("a481"),function(){function t(e){Object(f["a"])(this,t),this.basepath=e.replace(/\/$/,"")}return Object(m["a"])(t,[{key:"getAll",value:function(){return ot.get(this.basepath)}},{key:"get",value:function(t){return ot.get(this.basepath+"/"+t)}},{key:"create",value:function(t){return ot.post(this.basepath,t)}},{key:"update",value:function(t,e){return ot.patch(this.basepath+"/"+t,e)}},{key:"search",value:function(t){return ot.get(this.basepath+"/search",{params:t})}}]),t}()),lt=function(t){function e(){return Object(f["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).call(this,"auctions/"))}return Object(d["a"])(e,t),Object(m["a"])(e,[{key:"bid",value:function(t,e){return ot.post(this.basepath+"/"+t,e)}}]),e}(ct),dt=new lt,ft=function(t){function e(){return Object(f["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).call(this,"dogs/"))}return Object(d["a"])(e,t),e}(ct),mt=new ft;function pt(){return ot.get("dogs")}var ht=function(t){function e(){return Object(f["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).call(this,"users/"))}return Object(d["a"])(e,t),e}(ct),gt=new ht,vt={apiUnavailable:function(t){t.state.apiAvailable&&(t.commit("apiUnavailable"),t.commit("auctions/deleteRealtimeData"))},pingAPI:function(t){return pt().then(function(){t.commit("apiAvailable")})},signin:function(t,e){return ut.login(e).then(function(e){t.commit("setUser",e)})},signout:function(t){t.commit("setUser",null)},createAccount:function(t,e){return ut.create(e).then(function(e){t.commit("setUser",e)})}},bt=n("a8db"),yt=n("dd61"),Ot=n.n(yt),wt=n("52b3"),Ct=n.n(wt);function jt(t){var e=t.id;return"item_".concat(e)}var At={state:function(){return{items:{},ids:[]}},getters:{items:function(t){return Ot()(t.ids,function(e){return t.items[jt({id:e})]})},itemById:function(t){return function(e){return t.items[jt({id:e})]}}},mutations:{updateOrCreate:function(t,e){var n=jt(e);i["a"].set(t.items,n,e),-1===t.ids.indexOf(e.id)&&t.ids.push(e.id)},batchUpdateOrCreate:function(t,e){for(var n=0;n<e.length;n++)At.mutations.updateOrCreate(t,e[n])},remove:function(t,e){if(-1!==t.ids.indexOf(e)){var n=t.ids.indexOf(e);i["a"].delete(t.ids,n);var a=jt({id:e});i["a"].delete(t.items,a)}},batchRemove:function(t,e){for(var n=0;n<e.length;n++)At.mutations.remove(t,e[n])},synchronize:function(t,e){var n=Ct()(t.ids,e,function(t,e){return t===e.id});At.mutations.batchRemove(t,n),At.mutations.batchUpdateOrCreate(t,e)}}},Pt=n("9380"),kt=n.n(Pt),xt=n("bfc7"),_t=n.n(xt),It={all:At.getters.items,byId:At.getters.itemById,byDog:function(t,e){return function(t){return kt()(e.all,{dogId:t})}}},Et=Object(s["a"])({},At.mutations,{deleteRealtimeData:function(t){for(var e=0;e<t.ids.length;e++){var n=t.ids[e],a=jt({id:n}),r=t.items[a];i["a"].set(r,"startPrice",null),i["a"].set(r,"highestBid",null),i["a"].set(r,"expirationTime",null)}}}),St={fetchAll:function(t){return dt.getAll().then(function(e){return t.commit("batchUpdateOrCreate",e),t.dispatch("active/synchronize",e)})},fetch:function(t,e){return dt.get(e).then(function(e){t.commit("updateOrCreate",e)})},create:function(t,e){return dt.create(e).then(function(e){t.commit("updateOrCreate",e)})},update:function(t,e){var n=e.id,a=Object(bt["a"])(e,["id"]);return dt.update(n,a).then(function(e){t.commit("updateOrCreate",e)})},checkRemoval:function(t){var e=_t()(t.state.active.ids,t.state.archive.ids),n=Ct()(t.state.ids,e);n.length&&t.commit("batchRemove",n)},placeBid:function(t,e){var n=e.auctionId,a=Object(bt["a"])(e,["auctionId"]);return dt.bid(n,a)}},Ut={state:function(){return{ids:[]}},mutations:{add:function(t,e){-1===t.ids.indexOf(e)&&t.ids.push(e)},batchAdd:function(t,e){for(var n=0;n<e.length;n++)Ut.mutations.add(t,e[n])},remove:function(t,e){-1!==t.ids.indexOf(e)&&i["a"].delete(t.ids,t.ids.indexOf(e))},batchRemove:function(t,e){for(var n=0;n<e.length;n++)Ut.mutations.remove(t,e[n])},synchronize:function(t,e){var n=Ct()(t.ids,e);Ut.mutations.batchRemove(t,n),Ut.mutations.batchAdd(t,e)}},getters:{all:function(t,e,n){return Ot()(t.ids,function(t){return n.auctions.items[jt({id:t})]})},byId:function(t,e,n,a){return function(e){return-1===t.ids.indexOf(e)?null:a["auctions/byId"](e)}},byDog:function(t,e){return function(t){return kt()(e.all,{dogId:t})}}}},$t=Object(s["a"])({namespaced:!0},Ut,{actions:{synchronize:function(t,e){return t.commit("synchronize",Ot()(e,function(t){return t.id})),t.dispatch("auctions/checkRemoval",null,{root:!0})}}}),Rt=Object(s["a"])({namespaced:!0},Ut,{actions:{require:function(t,e){return-1!==t.state.ids.indexOf(e)?nt.a.resolve():(t.commit("add",e),dt.get(e).then(function(e){t.commit("auctions/updateOrCreate",e,{root:!0})}).catch(function(){}))},release:function(t,e){return-1!==t.state.ids.indexOf(e)&&t.commit("remove",e),t.dispatch("auctions/checkRemoval",null,{root:!0})}}}),Nt={namespaced:!0,state:At.state,mutations:Et,getters:It,actions:St,modules:{active:$t,archive:Rt}},qt={all:At.getters.items,byId:At.getters.itemById},Tt={fetchAll:function(t){return ut.getBids(t.rootState.userId).then(function(e){for(var n=Ct()(e,t.state.ids,function(t,e){return e===t.id}),a=0;a<n.length;a++)t.dispatch("auctions/archive/require",n[a].auctionId,{root:!0});for(var i=Ct()(t.state.ids,e,function(t,e){return t===e.id}),r=0;r<i.length;r++){var o=t.getters.byId(i[r]);t.dispatch("auctions/archive/release",o.auctionId,{root:!0})}t.commit("synchronize",e)})}},Bt={namespaced:!0,state:At.state,mutations:At.mutations,getters:qt,actions:Tt},Dt={all:At.getters.items,byId:At.getters.itemById,byOwner:function(t){return function(e){return kt()(At.getters.items(t),{ownerId:e})}}},Lt={fetchAll:function(t){return mt.getAll().then(function(e){t.commit("synchronize",e)})},fetch:function(t,e){return mt.get(e).then(function(e){t.commit("updateOrCreate",e)})},create:function(t,e){return mt.create(e).then(function(e){t.commit("updateOrCreate",e)})},update:function(t,e){var n=e.id,a=Object(bt["a"])(e,["id"]);return mt.update(n,a).then(function(e){t.commit("updateOrCreate",e)})}},zt={namespaced:!0,state:At.state,mutations:At.mutations,getters:Dt,actions:Lt},Mt={all:At.getters.items,byId:At.getters.itemById},Ft={fetchAll:function(t){return gt.getAll().then(function(e){t.commit("synchronize",e)})},fetch:function(t,e){return gt.get(e).then(function(e){t.commit("updateOrCreate",e)})}},Ht={namespaced:!0,state:At.state,mutations:At.mutations,getters:Mt,actions:Ft};i["a"].use(u["a"]);var Vt=new Y["a"]({storage:window.localStorage}),Jt=new u["a"].Store({state:{userId:null,username:null,apiAvailable:!0,apiErrors:[]},mutations:{setUser:function(t,e){e?(t.userId=e.id,t.username=e.username):(t.userId=null,t.username=null)},apiAvailable:function(t){t.apiAvailable=!0},apiUnavailable:function(t){t.apiAvailable=!1},addAPIError:function(t,e){t.apiErrors.push(e)},removeAPIError:function(t,e){var n=t.apiErrors.indexOf(e);n>=0&&i["a"].delete(t.apiErrors,n)},clearAPIErrors:function(t){t.apiErrors=[]}},getters:{loggedin:function(t){return null!==t.userId&&void 0!==t.userId}},actions:vt,modules:{auctions:Nt,bids:Bt,dogs:zt,users:Ht},plugins:[Vt.plugin]});i["a"].prototype.$api=a,i["a"].config.productionTip=!1,new i["a"]({router:X,store:Jt,render:function(t){return t(H)}}).$mount("#app")},"80cf":function(t,e,n){"use strict";var a=n("118c"),i=n.n(a);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1697b7ba.js.map