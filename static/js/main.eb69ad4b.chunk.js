(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,n,t){},34:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t(0),r=t.n(c),s=t(10),o=t.n(s),i=(t(33),t(34),t(20)),l=(t(35),t(25)),j=t(24),u=t(27),b=t(12),d=t.n(b),O=t(23),m=t(26),f=t.n(m);var h=function(e){var n=function(){var e=Object(O.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("isGoogleUser",JSON.stringify({login:!0,token:n.accessToken,email:n.profileObj.email,name:n.profileObj.name})),console.log(n),console.log(n.profileObj.email),window.location.reload(!1);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),t=function(){var e=Object(O.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(f.a,{clientId:"17134391804-9ofvalms637k71u7s45gl4i21o1sjp6j.apps.googleusercontent.com",buttonText:"LOGIN WITH GOOGLE",onSuccess:n,onFailure:t})})},x=t(19),g=t(13);function p(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(g.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(a.jsx)(g.a.Brand,{href:"#",children:"React-Bootstrap"}),Object(a.jsx)(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(g.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsx)(x.a,{className:"mr-auto"}),Object(a.jsx)(x.a,{children:Object(a.jsx)(x.a.Link,{href:"#",children:e.name})})]})]})})}var v=t(11);var k=function(e){return Object(a.jsxs)(v.a,{bg:"default",text:"dark",style:{width:"18rem"},className:"mb-2",children:[Object(a.jsx)(v.a.Header,{children:"Profile"}),Object(a.jsxs)(v.a.Body,{children:[Object(a.jsxs)(v.a.Title,{children:[" ",e.name," "]}),Object(a.jsxs)(v.a.Title,{children:[" ",e.email," "]})]})]})};t(43);function S(e){return Object(a.jsx)(j.a,{className:"p-3",children:Object(a.jsxs)(l.a,{children:[Object(a.jsxs)("h1",{className:"header",children:["Welcome To ",e.name]}),Object(a.jsx)(k,{name:e.name,email:e.email}),Object(a.jsx)(u.a,{onClick:w,children:"Logout"})]})})}function w(e){e.preventDefault(),localStorage.removeItem("isGoogleUser"),window.location.reload(!1)}function N(e){return Object(a.jsx)(j.a,{className:"p-3",children:Object(a.jsxs)(l.a,{children:[Object(a.jsxs)("h1",{className:"header",children:["Welcome To ",e.name]}),Object(a.jsx)(h,{})]})})}function I(e){return e.isLoggedIn?Object(a.jsx)(S,{name:e.name,email:e.email}):Object(a.jsx)(N,{name:e.name})}var T=function(e){var n=Object(c.useState)(!1),t=Object(i.a)(n,2),r=t[0],s=t[1],o=Object(c.useState)(null),l=Object(i.a)(o,2),j=l[0],u=l[1],b=Object(c.useState)("Guest"),d=Object(i.a)(b,2),O=d[0],m=d[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("isGoogleUser"));e&&e.login&&(s(e.login),u(e.email),m(e.name))}),[O,j,r]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{name:O}),Object(a.jsx)(I,{isLoggedIn:r,name:O,email:j})]})};var L=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(T,{})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),F()}},[[44,1,2]]]);
//# sourceMappingURL=main.eb69ad4b.chunk.js.map