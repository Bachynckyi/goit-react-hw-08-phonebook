"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[399],{399:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return k},default:function(){return w}});var a=n(885),r="ContactForm_addInput__F4gYD",s="ContactForm_label__eteY1",c="ContactForm_form__zqkUM",o="ContactForm_button_submit__qrJSB",i=n(791),l=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},u=n(434),m=n(52),d=n(184),h=function(){var e=(0,u.I0)(),t=(0,i.useState)(""),n=(0,a.Z)(t,2),h=n[0],f=n[1],p=(0,i.useState)(""),x=(0,a.Z)(p,2),_=x[0],b=x[1],j=(0,u.v9)((function(e){return e.contacts.items})).map((function(e){return e.name})),v=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":f(a);break;case"number":b(a);break;default:return}},C=function(){f(""),b("")};return(0,d.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),j.some((function(e){return e.toLowerCase()===h.toLowerCase()})))return alert("".concat(h," is already in contacts"));var n={id:l(),name:h,number:_};e(m.uK(n)),C()},className:c,children:[(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:s,children:["Name",(0,d.jsx)("input",{value:h,onChange:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Please enter name",className:r})]})}),(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:s,children:["Number",(0,d.jsx)("input",{value:_,onChange:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Please enter number",className:r})]})}),(0,d.jsx)("button",{type:"submit",className:o,children:"Add Contact"})]})},f="ContactItem_item__kyiId",p="ContactItem_butonDelete__3d5QI",x="ContactItem_number__PoJ6x",_=function(e){var t=e.name,n=e.number,a=e.id,r=(0,u.I0)();return(0,d.jsxs)("li",{className:f,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:(0,d.jsxs)("span",{children:[t,":"]})}),(0,d.jsx)("span",{className:x,children:n})]}),(0,d.jsx)("button",{className:p,type:"button",onClick:function(){r(m.GK(a))},children:"Delete"})]})},b="ContactList_contactList__lfyFV",j=function(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.contacts.items})),n=(0,u.v9)((function(e){return e.contacts.filter})),a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.number.includes(n)})),r=(0,u.v9)((function(e){return e.auth.token}));return(0,i.useEffect)((function(){e((0,m.yF)(r))}),[e,r]),(0,d.jsx)("ol",{className:b,children:0!==a.length?a.map((function(e){return(0,d.jsx)(_,{id:e.id,name:e.name,number:e.number},e.id)})):(0,d.jsx)("li",{className:f,children:"There is no one contact"})})},v="Filter_SearchBox__1bD+-",C="Filter_SearchBox_label__Hkxs6",g="Filter_SearchBox_input__30jLw",y=n(538),N=function(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.contacts.filter}));return(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("h4",{className:C,children:"You can find contacts by name or number"}),(0,d.jsx)("input",{className:g,type:"text",placeholder:"Please enter name",value:t,onChange:function(t){return e((0,y.xO)(t.currentTarget.value))}})]})},k=function(){return(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,d.jsx)("h2",{style:{marginTop:"10px",marginBottom:"10px",fontSize:30,color:"grey"},children:"Please add contact"}),(0,d.jsx)(h,{}),(0,d.jsx)("h3",{style:{marginTop:"10px",marginBottom:"10px",fontSize:30,color:"#0000ff"},children:"Your contacts"}),(0,d.jsx)(N,{}),(0,d.jsx)(j,{})]})},w=k}}]);
//# sourceMappingURL=399.4a2addc7.chunk.js.map