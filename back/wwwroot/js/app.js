webpackJsonp([6],{11:function(t,e,n){"use strict";e.a={}},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),a=n(12),r=n(5),u=n(21),c=n(42),i=n.n(c),s=n(46);n.n(s);n(15),o.default.config.productionTip=!1,o.default.use(a.r),o.default.component("v-map",i.a.Map),o.default.component("v-tilelayer",i.a.TileLayer),o.default.component("v-marker",i.a.Marker),o.default.component("v-popup",i.a.Popup),n(44),a.r.start(function(){new o.default({el:"#q-app",router:r.a,store:u.a,render:function(t){return t(n(48).default)}})})},15:function(t,e){},20:function(t,e,n){function o(t){var e=a[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./Error404.vue":[53,4],"./Full.vue":[54,1],"./Hello.vue":[55,3],"./Main.vue":[56,2],"./Map.vue":[57,0]};o.keys=function(){return Object.keys(a)},o.id=20,t.exports=o},21:function(t,e,n){"use strict";var o=n(22),a=n.n(o),r=n(1),u=n(41),c=n(5),i=!window.location.host.includes("localhost"),s=i?"//food-tossup.herokuapp.com/":"//localhost:3000/",l=a.a.create({baseURL:s+"api/",timeout:4e3,withCredentials:!0});r.default.use(u.a);var f=new u.a.Store({state:{userLocation:{},places:{},chosen:{},center:""},mutations:{handleError:function(t,e){console.error(e)},setUserLocation:function(t,e){t.userLocation=e},setPlaces:function(t,e){t.places=e},setChosen:function(t,e){e.coordinates.lat=e.coordinates.latitude,e.coordinates.lng=e.coordinates.longitude,t.chosen=e}},actions:{getPlaces:function(t,e){var n=t.commit;t.dispatch;l.post("places",e).then(function(t){n("setPlaces",t.data.data);var e=Math.floor(Math.random()*t.data.data.length);n("setChosen",t.data.data[e])}).catch(function(t){n("handleError",t)})},getMap:function(t){t.commit,t.dispatch;c.a.push("map")},getFull:function(t){t.commit,t.dispatch;c.a.push("full")}}});e.a=f},45:function(t,e){},47:function(t,e){},48:function(t,e,n){"use strict";function o(t){n(49)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),r=n(50),u=n(13),c=o,i=u(a.a,r.a,!1,c,null,null);e.default=i.exports},49:function(t,e){},5:function(t,e,n){"use strict";function o(t){return function(){return n(20)("./"+t+".vue")}}var a=n(1),r=n(19);a.default.use(r.a),e.a=new r.a({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:o("Hello"),children:[{path:"map",component:o("Map")},{path:"full",component:o("Full")}]},{path:"*",component:o("Error404")}]})},50:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},a=[],r={render:o,staticRenderFns:a};e.a=r}},[14]);