(this["webpackJsonpfrontend_part2-notes"]=this["webpackJsonpfrontend_part2-notes"]||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(15),o=e.n(r),i=e(6),a=e(3),u=e(2),s=function(t){var n=t.note,e=t.toggleImportance,r=n.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsx)("button",{onClick:e,children:r})]})},j=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},l=e(4),d=e.n(l),f="/api/notes",b=function(){return d.a.get(f).then((function(t){return t.data}))},O=function(t){return d.a.post(f,t).then((function(t){return t.data}))},m=function(t,n){return d.a.put("".concat(f,"/").concat(t),n).then((function(t){return t.data}))},p=(e(39),function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})}),h=function(){var t=Object(u.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],o=Object(u.useState)(""),l=Object(a.a)(o,2),d=l[0],f=l[1],h=Object(u.useState)(null),x=Object(a.a)(h,2),v=x[0],g=x[1],S=Object(u.useState)(!0),k=Object(a.a)(S,2),y=k[0],w=k[1];Object(u.useEffect)((function(){b().then((function(t){r(t)}))}),[]);var N=y?e:e.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(j,{message:v}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:d,date:(new Date).toISOString(),important:Math.random()>.5};O(n).then((function(t){r(e.concat(t)),f("")}))},children:[Object(c.jsxs)("div",{children:["add note: ",Object(c.jsx)("input",{value:d,onChange:function(t){f(t.target.value)}})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return w(!y)},children:["show ",y?"important":"all"]})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:" add "})})]}),Object(c.jsx)("ul",{children:N.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(i.a)(Object(i.a)({},n),{},{important:!n.important});m(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){g("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){g(null)}),5e3),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(c.jsx)(p,{})]})};o.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9facf1aa.chunk.js.map