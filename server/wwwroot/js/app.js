webpackJsonp([4],{11:function(e,n,t){"use strict";n.a={}},14:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),r=t(12),a=t(5),u=t(21),c=t(44);t.n(c);t(15),o.a.config.productionTip=!1,o.a.use(r.k),t(42),r.k.start(function(){new o.a({el:"#q-app",router:a.a,store:u.a,render:function(e){return e(t(46).default)}})})},15:function(e,n){},20:function(e,n,t){function o(e){var n=r[e];return n?t.e(n[1]).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./Error404.vue":[51,2],"./Hello.vue":[52,1],"./Map.vue":[53,0]};o.keys=function(){return Object.keys(r)},o.id=20,e.exports=o},21:function(e,n,t){"use strict";var o=t(22),r=t.n(o),a=t(1),u=t(41),c=(t(5),!window.location.host.includes("localhost")),i=c?"//food-tossup.herokuapp.com/":"//localhost:5000/",s=r.a.create({baseURL:i+"api/",timeout:4e3,withCredentials:!0});a.a.use(u.a);var l=new u.a.Store({state:{userLocation:{}},mutations:{handleError:function(e,n){console.error(n)},setUserLocation:function(e,n){e.userLocation=n}},actions:{getPlaces:function(e){var n=e.commit;e.dispatch;s("places").then(function(e){console.log("place res",e)}).catch(function(e){n("handleError",e)})}}});n.a=l},43:function(e,n){},45:function(e,n){},46:function(e,n,t){"use strict";function o(e){t(47)}Object.defineProperty(n,"__esModule",{value:!0});var r=t(11),a=t(48),u=t(13),c=o,i=u(r.a,a.a,!1,c,null,null);n.default=i.exports},47:function(e,n){},48:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},r=[],a={render:o,staticRenderFns:r};n.a=a},5:function(e,n,t){"use strict";function o(e){return function(){return t(20)("./"+e+".vue")}}var r=t(1),a=t(19);r.a.use(a.a),n.a=new a.a({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:o("Hello"),children:[{path:"map",component:o("Map")}]},{path:"*",component:o("Error404")}]})}},[14]);