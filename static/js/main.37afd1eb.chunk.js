(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3nMqJ",modal:"ErrorModal_modal__1c_kM",header:"ErrorModal_header__38rRj",content:"ErrorModal_content__rHznn",actions:"ErrorModal_actions__AC_Dp"}},11:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(19),n(10)),u=n(3),m=n(6),s=n.n(m),i=function(e){return r.a.createElement("div",{className:"".concat(s.a.card," ").concat(e.className)},e.children)},d=n(7),E=n.n(d),f=function(e){return r.a.createElement("button",{className:E.a.button,type:e.type||"button",onClick:e.onClick},e.children)},p=n(2),_=n.n(p),b=n(1),g=n.n(b),v=function(e){return r.a.createElement("div",{className:g.a.backdrop,onClick:e.onConfirm})},C=function(e){return r.a.createElement(i,{className:g.a.modal},r.a.createElement("header",{className:g.a.header},r.a.createElement("h2",null,e.title)),r.a.createElement("div",{className:g.a.content},r.a.createElement("p",null,e.message)),r.a.createElement("footer",{className:g.a.actions},r.a.createElement(f,{onClick:e.onConfirm},"Close")))},h=function(e){return r.a.createElement(r.a.Fragment,null,_.a.createPortal(r.a.createElement(v,{onConfirm:e.onConfirm}),document.getElementById("backdrop-root")),_.a.createPortal(r.a.createElement(C,{title:e.title,message:e.message,onConfirm:e.onConfirm}),document.getElementById("overlay-root")))},k=n(8),y=n.n(k),N=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useState)(),o=Object(u.a)(c,2),l=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(h,{title:l.title,message:l.message,onConfirm:function(){m(null)}}),r.a.createElement(i,{className:y.a.input},r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var r=t.current.value,c=n.current.value;0!==r.trim().length&&0!==c.trim().length?+c<1?m({title:"Invalid Age",message:"Please enter a valid age greater than 0"}):(e.onAddUser(r,c),t.current.value="",n.current.value=""):m({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)"})}},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{id:"username",type:"text",ref:t}),r.a.createElement("label",{htmlFor:"age"},"Age"),r.a.createElement("input",{id:"age",type:"number",ref:n}),r.a.createElement(f,{type:"submit"},"Add User"))))},A=n(9),j=n.n(A),x=function(e){return r.a.createElement(i,{className:j.a.users},r.a.createElement("ul",null,e.users.map(function(e,t){return r.a.createElement("li",{key:"person-".concat(t)},e.name," (",e.age," years old)")})))};var M=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(N,{onAddUser:function(e,t){c(function(n){return[].concat(Object(l.a)(n),[{name:e,age:t}])})}}),r.a.createElement(x,{users:n}))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(M,null))},6:function(e,t,n){e.exports={card:"Card_card__32GBl"}},7:function(e,t,n){e.exports={button:"Button_button__AUAZP"}},8:function(e,t,n){e.exports={input:"AddUser_input__1P68q"}},9:function(e,t,n){e.exports={users:"UsersList_users__3D6S3"}}},[[11,2,1]]]);
//# sourceMappingURL=main.37afd1eb.chunk.js.map