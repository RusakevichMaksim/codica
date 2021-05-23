(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{61:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(20),r=a.n(c),i=(a(61),a(6)),s=a(23),o=a(27),d=a.n(o),l=a(34),u=a(32),m=a(19),p=a(46),j=a.n(p).a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),h=function(e){return j.get("weather?q=".concat(e,"&appid=").concat("968cb1decfce0d451e6ef8dfe6e0713c","&units=metric")).then((function(e){return e.data}))},b=" SET-WEATHER-DATA",O="SET-CITY-NAME",f="SET-CITY-DATA",x="UPDATE-CITY_DATA",_="DELETE_CITY",y={fetching:!1,id:null,citySelected:"",cityGroup:[{id:703448,lat:50.4333,lon:30.5167,name:"Kyiv",temp:19.55,feels_like:19,humidity:60,temp_max:20,temp_min:15}]},g=function(e,t){for(var a=0;a<t.length;a++)if(t[a].id===e)return!0;return!1},C=function(e){return{type:O,data:e}},v=function(e){return function(){var t=Object(l.a)(d.a.mark((function t(a,n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(e);case 3:c=t.sent,a((n={id:c.id,lon:c.coord.lon,lat:c.coord.lat,name:c.name,temp:c.main.temp,feels_like:c.main.feels_like,humidity:c.main.humidity,temp_max:c.main.temp_max,temp_min:c.main.temp_min},{type:f,newItem:n})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Oops");case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(m.a)(Object(m.a)({},e),{},{id:t.data});case O:return Object(m.a)(Object(m.a)({},e),{},{citySelected:t.data});case f:return g(t.newItem.id,e.cityGroup)?e:Object(m.a)(Object(m.a)({},e),{},{cityGroup:[].concat(Object(u.a)(e.cityGroup),[t.newItem])});case x:var a=e.cityGroup.findIndex((function(e){return e.name.toLowerCase()===t.newItem.name.toLowerCase()}));return Object.assign({},e,{cityGroup:e.cityGroup.slice(0,a).concat([t.newItem]).concat(e.cityGroup.slice(a+1))});case _:var n=e.cityGroup.findIndex((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}));return Object(m.a)(Object(m.a)({},e),{},{cityGroup:[].concat(Object(u.a)(e.cityGroup.slice(0,n)),Object(u.a)(e.cityGroup.slice(n+1)))});default:return e}},w=a(118),k=a(110),T=a(116),G=a(112),I=a(113),E=a(2),S=Object(k.a)({buttonUpdate:{backgroundColor:"orange"},buttonDelete:{backgroundColor:"red"},card:{height:"100%",display:"flex",flexDirection:"column"},cardContent:{flexGrow:1}}),A=function(e){var t=e.name,a=e.temp,c=e.update,r=e.deleted,s=S();Object(n.useEffect)((function(){}));var o=Object(i.f)();return Object(E.jsx)(w.a,{className:s.card,onClick:function(e){o.push("/city/".concat(t))},children:Object(E.jsxs)(G.a,{className:s.cardContent,children:[Object(E.jsxs)(I.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["City name: ",Object(E.jsxs)("span",{className:"cardData",children:[" ",t]})]}),Object(E.jsxs)(I.a,{children:["Temperature value: ",Object(E.jsxs)("span",{className:"cardData",children:[" ",a]})]}),Object(E.jsxs)("div",{className:"button__wrapper",children:[Object(E.jsx)(T.a,{className:s.buttonUpdate,onClick:function(e){e.stopPropagation(),c(t)},size:"small",children:"Update"}),Object(E.jsx)(T.a,{className:s.buttonDelete,onClick:function(e){e.stopPropagation(),r(t)},size:"small",children:"Delete"})]})]})})},D=a(117),L=a(114),R=a(115),W={getWeatherThunkCreator:v,updateWeatherThunkCreator:function(e){return function(){var t=Object(l.a)(d.a.mark((function t(a,n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(e);case 3:c=t.sent,a((n={id:c.id,lon:c.coord.lon,lat:c.coord.lat,name:c.name,temp:c.main.temp,feels_like:c.main.feels_like,humidity:c.main.humidity,temp_max:c.main.temp_max,temp_min:c.main.temp_min},{type:x,newItem:n})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Oops");case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}()},setCityNameAC:C,deleteCityAC:function(e){return{type:_,name:e}}},F=Object(k.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},inputGrid:{paddingTop:e.spacing(0),paddingBottom:e.spacing(8)},buttonSetCIty:{backgroundColor:"green",color:"white",marginLeft:"10px"},input:{backgroundColor:"white",borderRight:"3px",color:"black"}}})),P=Object(s.b)((function(e){return{id:e.weatherReducer.id,name:e.weatherReducer.citySelected,cityGroup:e.weatherReducer.cityGroup}}),W)((function(e){var t=e.name,a=e.cityGroup,c=e.getWeatherThunkCreator,r=e.updateWeatherThunkCreator,i=e.setCityNameAC,s=e.deleteCityAC;Object(n.useEffect)((function(){a.map((function(e){r(e.name)}))}),[]);var o=F();return Object(E.jsxs)("main",{children:[Object(E.jsx)(L.a,{className:o.cardGrid,maxWidth:"md",children:Object(E.jsx)(R.a,{container:!0,spacing:4,children:a?a.map((function(e,a){return Object(E.jsx)(R.a,{item:!0,xs:12,sm:6,md:4,children:Object(E.jsx)(A,{name:e.name,temp:e.temp,update:r,deleted:s},t+a)},t+a)})):Object(E.jsx)(E.Fragment,{})})}),Object(E.jsx)(L.a,{className:o.inputGrid,maxWidth:"md",children:Object(E.jsxs)("div",{children:[Object(E.jsx)(D.a,{className:o.input,value:t,onChange:function(e){return i(e.target.value)},placeholder:"set city name"}),Object(E.jsx)(T.a,{className:o.buttonSetCIty,onClick:function(){c(t)},size:"small",children:"Add"})]})})]})})),U=a(22),B={getWeatherThunkCreator:v,setCityNameAC:C},J=Object(U.c)(Object(s.b)((function(e){return{cityGroup:e.weatherReducer.cityGroup}}),B),i.g)((function(e){var t=e.match.params.CityName,a={id:0,lat:0,lon:0,name:"",temp:0,feels_like:0,humidity:0,temp_max:0,temp_min:0};return e.cityGroup.map((function(e){e.name===t&&(a=e)})),Object(E.jsxs)("div",{className:"details__wrapper",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"details__name",children:" City Name"}),Object(E.jsx)("span",{className:"details__data",children:t})," "]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"details__name",children:" Current temperature"}),Object(E.jsx)("span",{className:"details__data",children:a.temp})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"details__name",children:"Feels like temperature"}),Object(E.jsx)("span",{className:"details__data",children:a.feels_like})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"details__name",children:"humidity"}),Object(E.jsx)("span",{className:"details__data",children:a.humidity})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"details__name",children:" temp_max"}),Object(E.jsx)("span",{className:"details__data",children:a.temp_max})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"details__name",children:" temp_min"}),Object(E.jsx)("span",{className:"details__data",children:a.temp_min})]})]})})),Y=function(){return Object(E.jsx)("div",{children:Object(E.jsxs)(i.c,{children:[Object(E.jsx)(i.a,{exact:!0,path:"/",children:Object(E.jsx)(P,{})}),Object(E.jsx)(i.a,{path:"/City/:CityName?",children:Object(E.jsx)(J,{})})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},M=a(29),X=a(51),q=Object(U.b)({weatherReducer:N}),H=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.c,V=Object(U.d)(q,H,K(Object(U.a)(X.a)));V.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(V.getState())})),window.store=V;var Q=V;r.a.render(Object(E.jsx)(M.a,{children:Object(E.jsx)(s.a,{store:Q,children:Object(E.jsx)(Y,{})})}),document.getElementById("root")),z()}},[[87,1,2]]]);
//# sourceMappingURL=main.031b708b.chunk.js.map