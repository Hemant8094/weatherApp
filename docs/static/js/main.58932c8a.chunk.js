(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(5),o=n.n(i),r=(n(14),n(3)),s=n(7),d=n.n(s),u=n(1),l="e1461eecf79ff00c247b492b3126160c",h="https://api.openweathermap.org/data/2.5/",j="309db41e077b4164a4456ec8c3d7bf68",b="https://newsapi.org/v2/top-headlines?country";var p=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)((new Date).toLocaleTimeString()),o=Object(r.a)(i,2),s=o[0],p=o[1],f=Object(a.useState)({}),m=Object(r.a)(f,2),y=m[0],O=m[1],g=Object(a.useState)({}),x=Object(r.a)(g,2),v=x[0],w=x[1],S=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t,n;t=e.coords.latitude,n=e.coords.longitude,fetch("".concat(h,"weather?lat=").concat(t,"&lon=").concat(n,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){O(e),console.log(e)}))})):alert("Your browser does not support location tracking, or permission is denied.")};return Object(a.useEffect)((function(){var e;S(),e="IN",fetch("".concat(b,"=").concat(e,"&category=business&apiKey=").concat(j)).then((function(e){return e.json()})).then((function(e){return w(e)})),console.log(v)}),[]),Object(a.useEffect)((function(){setInterval((function(){return p((new Date).toLocaleTimeString())}),1e3)}),[s]),Object(u.jsx)("div",{className:"undefined"!==typeof y.main&&"Rain"===y.weather[0].main?"App rainny":"undefined"!==typeof y.main&&"Clouds"===y.weather[0].main?"App cloudy":"undefined"!==typeof y.main&&"Clear"===y.weather[0].main?"App sunny":"undefined"!==typeof y.main&&"Haze"===y.weather[0].main||"undefined"!==typeof y.main&&"Mist"===y.weather[0].main?"App Haze":"undefined"!==typeof y.main&&"Smoke"===y.weather[0].main?"App smoke":"undefined"!==typeof y.main&&"Snow"===y.weather[0].main?"App Snow":"App",children:Object(u.jsxs)("main",{children:[Object(u.jsx)("div",{className:"search-box",children:Object(u.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(h,"weather?q=").concat(n,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){c(""),O(e),console.log(e)}))}})}),"undefined"!==typeof y.main?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"location-box",children:[Object(u.jsxs)("div",{className:"location",children:[y.name,", ",y.sys.country," "]}),Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(u.jsxs)("div",{className:"date-box",children:[Object(u.jsx)("div",{className:"Date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)}(new Date)}),Object(u.jsx)("div",{className:"Date",children:s})]})})]}),Object(u.jsxs)("div",{className:"weather-box",children:[Object(u.jsxs)("div",{className:"temp",children:["  ",Math.round(y.main.temp),"\xb0C"]}),Object(u.jsx)("div",{className:"weather-type",children:y.weather[0].main})]})]}):Object(u.jsxs)("div",{className:"error-box",children:[Object(u.jsx)(d.a,{style:{width:"75px",height:"75px"}}),Object(u.jsx)("div",{children:" Something Went Wrong"}),Object(u.jsxs)("p",{children:["Please, check your internet connection ",Object(u.jsx)("br",{}),"Or",Object(u.jsx)("br",{}),"  Enter valid city name "]})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),f()}},[[25,1,2]]]);
//# sourceMappingURL=main.58932c8a.chunk.js.map