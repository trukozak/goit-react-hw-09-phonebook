(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{109:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(36);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},110:function(t,e,n){"use strict";n(0);var r,a=n(22),c=n(23).a.section(r||(r=Object(a.a)(["\n  font-size: 20px;\n  .sectionTitle {\n    color: teal;\n    padding-left: 15px;\n    padding-right: 15px;\n    margin: 10px auto;\n  }\n"]))),i=n(1);e.a=function(t){var e=t.children,n=t.title;return Object(i.jsxs)(c,{children:[Object(i.jsx)("h2",{className:"sectionTitle",children:n.toUpperCase()}),e]})}},112:function(t,e,n){"use strict";n.r(e);var r,a,c,i=n(0),o=n(2),s=n(15),u=n(109),b=n(12),l=n(19),d=n.n(l),p=n(24),j=n(21),f=n.n(j),m=n(8),O=n(28),x=function(t){return t.items.contacts},h=function(t){return t.items.filter},v=function(t){return t.items.loading},g=Object(O.a)([x,h],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),y=n(22),k=n(23),w=k.a.div(r||(r=Object(y.a)(["\n  padding: 20px 10px;\n  margin: 10px;\n  border: 2px solid;\n  .inputName {\n    width: 300px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: block;\n    \n  }\n  .btnAdd {\n    display: block;\n    margin-top: 30px;\n    padding: 3px 5px;\n    border-radius: 6px;\n    cursor: pointer;\n    background-color: transparent;\n    &:hover {\n      background-color: teal;\n    }\n  }\n"]))),A=n(1),C={name:"",number:""},N=function(){var t=Object(i.useState)(C),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(b.b)(),c=Object(b.c)(x);Object(i.useEffect)((function(){a(function(){var t=Object(p.a)(d.a.mark((function t(e,n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(m.i)()),t.prev=1,t.next=4,f.a.get("/contacts",{headers:{Authorization:"Bearer ".concat(n().auth.idToken)}});case 4:r=t.sent,a=r.data,e(Object(m.j)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(m.h)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}())}),[a]);var l=function(t){var e=t.target,n=e.name,a=e.value;r((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(o.a)({},n,a))}))};return Object(A.jsx)(w,{children:Object(A.jsxs)("form",{onSubmit:function(t){var e;if(t.preventDefault(),c.find((function(t){return t.name.toLowerCase()===n.name.toLowerCase()})))return alert("".concat(n.name," is already in contacts."));a((e=Object(s.a)({},n),function(){var t=Object(p.a)(d.a.mark((function t(n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(m.b)()),t.prev=1,t.next=4,f.a.post("/contacts",e);case 4:r=t.sent,a=r.data,n(Object(m.c)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Object(m.a)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())),r(Object(s.a)({},C))},children:[Object(A.jsxs)("label",{children:["Name",Object(A.jsx)("input",{className:"inputName",type:"text",name:"name",pattern:"^[A-ZA-Z\u0410-\u042f\u0410-\u042f]+(([' -][A-ZA-Z\u0410-\u042f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n.name,onChange:l})]}),Object(A.jsxs)("label",{children:["Number",Object(A.jsx)("input",{className:"inputName",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n.number,onChange:l})]}),Object(A.jsx)("button",{type:"submit",className:"btnAdd",children:"Add contact"})]})})},F=k.a.div(a||(a=Object(y.a)(["\n  margin-left: 10px;\n  .inputFilter {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: block;\n  }\n"]))),S=function(){var t=Object(b.b)(),e=Object(b.c)(h);return Object(A.jsx)(F,{children:Object(A.jsxs)("label",{className:"labelFilter",children:["Find contacts by name:",Object(A.jsx)("input",{className:"inputFilter",type:"text",name:"filter",value:e,onChange:function(e){t(Object(m.d)(e.target.value))}})]})})},L=k.a.div(c||(c=Object(y.a)(["\npadding-left: 30px;\nlist-style:cursor;\n  .btnDelete {\n    padding: 2px;\n    margin: 5px 10px;\n    border-radius: 6px;\n    background-color: transparent;\n    cursor: pointer;\n    &:hover {\n      background-color: tomato;\n    }\n  }\n"]))),Z=function(t){var e=t.name,n=t.number,r=t.id,a=Object(b.b)();return Object(A.jsx)(L,{children:Object(A.jsxs)("li",{children:[e,Object(A.jsx)("span",{children:": "}),n,Object(A.jsx)("button",{className:"btnDelete",type:"button",onClick:function(){a(function(t){return function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(m.f)()),e.prev=1,e.next=4,f.a.delete("/contacts/".concat(t));case 4:n(Object(m.g)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(m.e)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(r))},children:"Delete"})]})})},z=n(46),D=function(){var t=Object(b.c)(g),e=Object(b.c)(v);return Object(A.jsx)(A.Fragment,{children:e?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(z.a,{}),Object(A.jsx)("h2",{children:"Loading Contacts..."})]}):Object(A.jsx)("ul",{children:t.map((function(t){return Object(A.jsx)(Z,Object(s.a)(Object(s.a)({},t),{},{id:t.id}),t.id)}))})})},T=n(110);e.default=function(){return Object(A.jsxs)(T.a,{title:"",children:[Object(A.jsx)(N,{}),Object(A.jsx)(S,{}),Object(A.jsx)(D,{})]})}}}]);
//# sourceMappingURL=4.3bd156b0.chunk.js.map