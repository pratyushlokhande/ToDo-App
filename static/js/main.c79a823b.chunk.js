(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),a=n(13),s=n.n(a),i=n(3),r=(n(19),n(11)),u=n(14),j=n(6),l=n(4),b=n(0),d=function(t){var e=t.toDo,n=t.setToDo,o=Object(c.useState)(""),a=Object(i.a)(o,2),s=a[0],d=a[1],O=Object(u.uuid)();return Object(b.jsxs)("div",{className:"input-container",children:[Object(b.jsx)("input",{onChange:function(t){return d(t.target.value)},onKeyPress:function(t){return function(t){"Enter"===t.key&&(n([].concat(Object(r.a)(e),[{key:O,value:s}])),d(""))}(t)},type:"text",value:s,placeholder:"Enter Note"}),Object(b.jsx)("button",{onClick:function(){n([].concat(Object(r.a)(e),[{key:O,value:s}])),d("")},className:"input-button",children:Object(b.jsx)(j.a,{size:"lg",icon:l.b})})]})},O=function(t){var e=t.toDo,n=t.setToDo,o=t.toDoItem,a=Object(c.useState)(!1),s=Object(i.a)(a,2),r=s[0],u=s[1],d=function(){var t=new Date;return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},O=Object(c.useState)(d()),v=Object(i.a)(O,2),h=v[0],x=v[1];if(""===o.value){var f=["\ud83d\ude0e","\ud83e\udd37\u200d\u2642\ufe0f","\ud83d\udcad","\ud83d\udc40","\ud83d\ude2c","\ud83d\ude44","\ud83d\ude2f","\u2753","\u2754","\ud83d\ude0b","\ud83e\udd14","\ud83e\udd28","\ud83d\ude09"];o.value=f[Math.floor(Math.random()*f.length)]}return Object(b.jsxs)("div",{className:"item-container ".concat(r?"completed":""),children:[Object(b.jsxs)("div",{className:"todo",children:[Object(b.jsx)("div",{className:"todo-content",children:o.value}),Object(b.jsx)("div",{className:"date-time",children:h})]}),Object(b.jsxs)("div",{className:"todo-btn",children:[Object(b.jsx)("button",{onClick:function(){u(!r),x(d())},children:Object(b.jsx)(j.a,{size:"lg",icon:r?l.c:l.a})}),Object(b.jsx)("button",{onClick:function(){return n(e.filter((function(t){return t.key!==o.key})))},children:Object(b.jsx)(j.a,{size:"lg",icon:l.d})})]})]})},v=function(t){var e=t.toDo,n=t.setToDo;return Object(b.jsx)("div",{className:"list-container",children:e.map((function(t){return Object(b.jsx)(O,{toDo:e,setToDo:n,toDoItem:t},t.key)}))})};var h=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"app-title",children:"TODO"}),Object(b.jsx)(d,{toDo:n,setToDo:o}),Object(b.jsx)(v,{toDo:n,setToDo:o})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),a(t),s(t)}))};s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),x()}},[[29,1,2]]]);
//# sourceMappingURL=main.c79a823b.chunk.js.map