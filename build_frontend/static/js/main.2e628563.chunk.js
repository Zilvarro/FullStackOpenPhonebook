(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t.n(a),o=t(14),r=t.n(o),i=(t(19),t(3)),u=t(4),d=t.n(u),l="/api/persons",s={getAll:function(){return d.a.get(l)},create:function(e){return d.a.post(l,e)},update:function(e,n){return d.a.put("".concat(l,"/").concat(e),n)},delete:function(e){return d.a.delete("".concat(l,"/").concat(e))}},b=t(0),j=function(e){var n=e.value,t=e.onChange;return Object(b.jsxs)("div",{children:["filter shown with ",Object(b.jsx)("input",{value:n,onChange:t})]})},f=function(e){var n=e.onSubmit,t=e.nameValue,a=e.onNameChange,c=e.numberValue,o=e.onNumberChange;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:t,onChange:a}),"number: ",Object(b.jsx)("input",{value:c,onChange:o})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var n=e.persons,t=e.handleDelete;return n.map((function(e){return Object(b.jsxs)("p",{children:[e.name," ",e.number," ",Object(b.jsx)("button",{onClick:t.bind(undefined,e),children:"delete"})]},e.name)}))},m=function(e){var n=e.notification;if(!n)return null;var t={color:n.color,background:"lightgrey",fontSize:"24px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return Object(b.jsx)("div",{style:t,children:n.message})},p=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),u=r[0],d=r[1],l=Object(a.useState)(""),p=Object(i.a)(l,2),O=p[0],g=p[1],v=Object(a.useState)(""),x=Object(i.a)(v,2),w=x[0],C=x[1],S=Object(a.useState)(null),k=Object(i.a)(S,2),y=k[0],D=k[1];Object(a.useEffect)((function(){s.getAll().then((function(e){c(e.data)}))}),[]);var N=t.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())})),V=function(e,n){D({message:e,color:n}),setTimeout((function(){D(null)}),5e3)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(m,{notification:y}),Object(b.jsx)(j,{value:O,onChange:function(e){g(e.target.value)}}),Object(b.jsx)("h2",{children:"add a new"}),Object(b.jsx)(f,{onSubmit:function(e){e.preventDefault();var n={name:u,number:w},a=t.find((function(e){return e.name===u}));u&&w?a?window.confirm("".concat(a.name," is already added to phonebook, replace the old number with a new one?"))&&(n.id=a.id,s.update(a.id,n).then((function(e){c(t.map((function(e){return e.id===a.id?n:e}))),d(""),C(""),V("Updated ".concat(n.name),"green")})).catch((function(e){V("Information of ".concat(n.name," has already been removed from server"),"red"),c(t.filter((function(e){return e.id!==a.id})))}))):s.create(n).then((function(e){c(t.concat(e.data)),d(""),C(""),V("Added ".concat(n.name),"green")})):alert("Please enter a name and phonenumber")},nameValue:u,numberValue:w,onNameChange:function(e){d(e.target.value)},onNumberChange:function(e){C(e.target.value)}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(h,{persons:N,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&s.delete(e.id).then((function(n){var a=t.filter((function(n){return n.id!==e.id}));c(a),V("Deleted ".concat(e.name),"green")}))}})]})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2e628563.chunk.js.map