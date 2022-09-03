(this.webpackJsonpform_crud=this.webpackJsonpform_crud||[]).push([[0],{124:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(83),i=a.n(r),o=(a(97),a(19)),c=a(20),l=a(22),u=a(21),d=a(26),h=a.n(d),m=a(37),p=(a(99),a(7)),b=a(29),j=a(33),x=a.n(j),f=a(0),g=s.a.createContext(),O="DELETE_CONTACT",v="ADD_CONTACT",y="UPDATE_CONTACT",k=function(e,t){switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload})),loading:!0});case v:return Object(b.a)(Object(b.a)({},e),{},{contacts:[t.payload].concat(Object(p.a)(e.contacts))});case y:return Object(b.a)(Object(b.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={contacts:[],albums:[],dispatch:function(t){return e.setState((function(e){return k(e,t)}))}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,this.setState({contacts:t.data}),e.next=6,x.a.get("https://jsonplaceholder.typicode.com/albums");case 6:a=e.sent,this.setState({albums:a.data});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)(g.Provider,{value:this.state,children:this.props.children})}}]),a}(n.Component),C=g.Consumer,N=(a(124),function(){return Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("div",{})})}),S=a(31),I=a(41),P=a.n(I),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showInforItem:!1,loading:!1},e.onDeleteClick=function(){var e=Object(m.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",t),e.next=3,x.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:e.sent,P.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(P.a.fire("Deleted!","Your file has been deleted.","success"),a({type:O,payload:t}))}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(c.a)(a,[{key:"onShowClick",value:function(e,t){this.setState({showInforItem:!this.state.showInforItem})}},{key:"render",value:function(){var e=this,t=this.props.con,a=t.id,n=t.name,s=t.email,r=t.phone,i=this.state,o=i.showInforItem;return i.loading?Object(f.jsx)(N,{}):Object(f.jsx)(C,{children:function(t){var i=t.dispatch;return Object(f.jsxs)("div",{className:"card mb-2 h-100",children:[Object(f.jsxs)("h4",{children:[n,Object(f.jsx)("i",{onClick:e.onShowClick.bind(e,a),className:"fas fa-sort-down"}),Object(f.jsx)("i",{onClick:e.onDeleteClick.bind(e,a,i),className:"pl-2 pb-2 fas fa-times custum-icon_plus"}),Object(f.jsx)(S.b,{to:"/editcontact/".concat(a),children:Object(f.jsx)("i",{className:"fas fa-pen icon-plus"})})]}),o&&Object(f.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(f.jsx)("li",{className:"list-group-item",children:s}),Object(f.jsx)("li",{className:"list-group-item",children:r}),Object(f.jsx)("li",{className:"list-group-item",children:Object(f.jsx)(S.b,{to:"/detailcontact/".concat(a),children:"Click me"})})]})]})}})}}]),a}(n.Component),E=(a(81),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.branding;return Object(f.jsx)("div",{style:{marginBottom:"3rem"},children:Object(f.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger py-0",style:{height:"60px"},children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("a",{href:"/",className:"navbar-brand",children:e}),Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(S.b,{className:"nav-link",to:"/",href:"#",children:[Object(f.jsx)("i",{class:"fas fa-home"})," Home"]})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(S.b,{className:"nav-link",to:"/contact-manager/addcontact",href:"#",children:[Object(f.jsx)("i",{class:"fas fa-file-signature"})," Add Contact"]})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(S.b,{className:"nav-link",to:"/album",href:"#",children:[Object(f.jsx)("i",{class:"fas fa-images"})," Album"]})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(S.b,{className:"nav-link",to:"/about",href:"#",children:[Object(f.jsx)("i",{class:"fas fa-info-circle"})," About"]})})]})})]})})})}}]),a}(n.Component));function L(){return Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:"404 ! PAGE NOT FOUND "})})}var D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(f.jsx)(C,{children:function(e){var t=e.contacts;return Object(f.jsxs)(s.a.Fragment,{children:[t.length>0&&t.map((function(e){return Object(f.jsx)(T,{con:e},e.id)})),0===t.length&&Object(f.jsx)("p",{children:"List Empty"})]})}})}}]),a}(n.Component),A=a(4),q=a(53),B=a.n(q);function M(e){var t=e.label,a=e.name,n=e.value,s=e.onChange,r=e.placeholder,i=e.type,o=e.error;return Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:a,children:t}),Object(f.jsx)("input",{type:i,name:a,className:B()("form-control form-control-lg",{"is-invalid":o}),placeholder:r,value:n,onChange:s}),o&&Object(f.jsx)("div",{className:"invalid-feedback",children:o})]})}M.defaultProps={type:"text"};var F=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,W=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onChange=function(t){var a=e.state,n=a.name,s=a.email,r=a.phone;e.setState(Object(A.a)({},t.target.name,t.target.value)),""!==n?""!==s?F.test(String(s).toLowerCase())?""!==r?W.test(r)||e.setState({errors:{phone:"Phone not match"}}):e.setState({errors:{phone:"Phone is required"}}):e.setState({errors:{email:"Email not match"}}):e.setState({errors:{email:"Email is required"}}):e.setState({errors:{name:"Name is required"}})},e.onSubmit=function(){var t=Object(m.a)(h.a.mark((function t(a,n){var s,r,i,o,c,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),s=e.state,r=s.name,i=s.email,o=s.phone,s.loading,""!==r){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==i){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(F.test(String(i).toLowerCase())){t.next=11;break}return e.setState({errors:{email:"Email not match"}}),t.abrupt("return");case 11:if(""!==o){t.next=14;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 14:if(W.test(o)){t.next=17;break}return e.setState({errors:{phone:"Phone not match"}}),t.abrupt("return");case 17:return c={name:r,email:i,phone:o},P.a.fire("Th\xe0nh c\xf4ng!","Th\xeam ng\u01b0\u1eddi d\xf9ng th\xe0nh c\xf4ng!","success"),t.prev=19,t.next=22,x.a.post("https://jsonplaceholder.typicode.com/users",c);case 22:l=t.sent,a({type:v,payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/"),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(19),console.log("error: "+t.t0);case 31:case"end":return t.stop()}}),t,null,[[19,28]])})));return function(e,a){return t.apply(this,arguments)}}(),e.state={name:"",email:"",phone:"",errors:{},loading:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),setTimeout((function(){e.setState({loading:!1})}),100)}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,s=t.phone,r=t.errors,i=t.loading;return Object(f.jsx)(C,{children:function(t){var o=t.dispatch;return Object(f.jsxs)("div",{className:"card mb-3",children:[Object(f.jsx)("div",{className:"card-header",children:"Add contact"}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("form",{action:"",onSubmit:e.onSubmit.bind(e,o),children:[i?Object(f.jsx)(N,{}):Object(f.jsxs)("div",{children:[Object(f.jsx)(M,{type:"text",name:"name",placeholder:"eg: Le Huu Do",value:a,onChange:e.onChange,label:"Name",error:r.name}),Object(f.jsx)(M,{type:"text",name:"email",placeholder:"eg: example@example.com",value:n,onChange:e.onChange,label:"Email",error:r.email}),Object(f.jsx)(M,{type:"text",name:"phone",placeholder:"eg: 123-456-789 or 123.456.789",value:s,onChange:e.onChange,label:"Phone",error:r.phone})]}),Object(f.jsx)("input",{type:"submit",value:"Add contact",className:"btn btn-light btn-block"})]})})]})}})}}]),a}(n.Component),_=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,$=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onChange=function(t){var a=e.state,n=a.name,s=a.email,r=a.phone;e.setState(Object(A.a)({},t.target.name,t.target.value)),""!==n?""!==s?_.test(String(s).toLowerCase())?""!==r?$.test(r)||e.setState({errors:{phone:"Phone not match"}}):e.setState({errors:{phone:"Phone is required"}}):e.setState({errors:{email:"Email not match"}}):e.setState({errors:{email:"Email is required"}}):e.setState({errors:{name:"Name is required"}})},e.onSubmit=function(){var t=Object(m.a)(h.a.mark((function t(a,n){var s,r,i,o,c,l,u;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),s=e.state,r=s.name,i=s.email,o=s.phone,s.loading,""!==r){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==i){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(_.test(String(i).toLowerCase())){t.next=11;break}return e.setState({errors:{email:"Email not match"}}),t.abrupt("return");case 11:if(""!==o){t.next=14;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 14:if($.test(o)){t.next=17;break}return e.setState({errors:{phone:"Phone not match"}}),t.abrupt("return");case 17:return c={name:r,email:i,phone:o},l=e.props.match.params.id,t.prev=19,t.next=22,x.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),c);case 22:u=t.sent,P.a.fire("Th\xe0nh c\xf4ng!","C\u1eadp nh\u1eadp ng\u01b0\u1eddi d\xf9ng th\xe0nh c\xf4ng!","success"),a({type:y,payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/"),t.next=32;break;case 29:t.prev=29,t.t0=t.catch(19),console.log("error: "+t.t0);case 32:case"end":return t.stop()}}),t,null,[[19,29]])})));return function(e,a){return t.apply(this,arguments)}}(),e.state={name:"",email:"",phone:"",errors:{},loading:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,x.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,console.log(a),this.setState({name:n.name,email:n.email,phone:n.phone});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,s=t.phone,r=t.errors,i=t.loading;return Object(f.jsx)(C,{children:function(t){var o=t.dispatch;return Object(f.jsxs)("div",{className:"card mb-3",children:[Object(f.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("form",{action:"",onSubmit:e.onSubmit.bind(e,o),children:[i?Object(f.jsx)(N,{}):Object(f.jsxs)("div",{children:[Object(f.jsx)(M,{type:"text",name:"name",placeholder:"eg: Le Huu Do",value:a,onChange:e.onChange,label:"Name",error:r.name}),Object(f.jsx)(M,{type:"text",name:"email",placeholder:"eg: example@example.com",value:n,onChange:e.onChange,label:"Email",error:r.email}),Object(f.jsx)(M,{type:"text",name:"phone",placeholder:"eg: 123-456-789 or 123.456.789",value:s,onChange:e.onChange,label:"Phone",error:r.phone})]}),Object(f.jsx)("input",{type:"submit",value:"Edit contact",className:"btn btn-light btn-block"})]})})]})}})}}]),a}(n.Component);function H(e){return Object(f.jsx)(C,{children:function(t){return t.contacts.filter((function(t){return t.id==e.match.params.id})).map((function(e){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("h3",{children:["ID: ",e.id]}),Object(f.jsxs)("h3",{children:[Object(f.jsx)("span",{style:{color:"green"},children:"Name: "}),e.name]}),Object(f.jsxs)("h3",{children:["Email: ",e.email]}),Object(f.jsxs)("h3",{children:["Phone: ",e.phone]}),Object(f.jsx)("h1",{className:"display-4",children:"About me"}),Object(f.jsx)("p",{className:"d-flex p-2",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi commodi optio, expedita magnam dolore rerum, consequatur veniam repellendus sit, deserunt laudantium ratione ab eligendi ducimus libero non iure! Iste."}),Object(f.jsx)("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"",style:{width:"50%",height:"400px"}}),Object(f.jsx)("p",{className:"d-flex p-2 flex-row-reverse",children:Object(f.jsx)("span",{className:"py-3 align-items-starts d-flex w-50",children:"Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})}),Object(f.jsx)("img",{src:"https://picsum.photos/200/300",alt:"",style:{width:"50%",height:"400px"}}),Object(f.jsx)("p",{className:"d-flex p-2 flex-row-reverse",children:Object(f.jsx)("span",{className:"py-3 align-items-end d-flex w-50",children:"Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})})]})}))}})}var Y=a(10);function G(e){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"display-4",children:"About Contact you can get anything here!"}),Object(f.jsx)("p",{className:"d-flex p-2",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi commodi optio, expedita magnam dolore rerum, consequatur veniam repellendus sit, deserunt laudantium ratione ab eligendi ducimus libero non iure! Iste."}),Object(f.jsx)("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"",style:{width:"50%",height:"400px"}}),Object(f.jsx)("p",{className:"d-flex p-2 flex-row-reverse",children:Object(f.jsx)("span",{className:"py-3 align-items-starts d-flex w-50",children:"Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})}),Object(f.jsx)("img",{src:"https://picsum.photos/200/300",alt:"",style:{width:"50%",height:"400px"}}),Object(f.jsx)("p",{className:"d-flex p-2 flex-row-reverse",children:Object(f.jsx)("span",{className:"py-3 align-items-end d-flex w-50",children:"Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})})]})}var J=a(178),R=a(181),U=a(179),K=a(173),Q=a(180),X=a(8),Z=a(177),ee=a(176),te=a(175),ae=a(84),ne=a.n(ae),se=(Object(X.a)(ee.a)((function(e){var t=e.theme;return Object(b.a)(Object(b.a)({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={currentPage:1,postsPerPage:9},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsx)(C,{children:function(t){var a=t.albums,n=e.state.currentPage*e.state.postsPerPage,s=n-e.state.postsPerPage,r=a.slice(s,n);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Z.a,{sx:{flexGrow:1,marginBottom:"3rem"},children:Object(f.jsx)(te.a,{container:!0,spacing:2,columns:12,children:r&&r.length>0&&r.map((function(e){return Object(f.jsx)(te.a,{item:!0,xs:4,children:Object(f.jsxs)(J.a,{sx:{maxWidth:345,height:"230px"},children:[Object(f.jsxs)(U.a,{children:[Object(f.jsx)(Q.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.title}),Object(f.jsx)(Q.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles"})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(K.a,{size:"small",children:"Share"}),Object(f.jsx)(K.a,{size:"small",children:Object(f.jsx)(S.b,{to:"/detailalbum/".concat(e.userId,"/").concat(e.id),children:"Read more..."})})]})]})},e.id)}))})}),Object(f.jsx)("div",{className:"pagination",style:{display:"flex",justifyContent:"center",marginBottom:"5rem"},children:Object(f.jsx)(ne.a,{activePage:e.state.currentPage,totalItemsCount:a.length,onChange:function(t){return e.setState({currentPage:t})},pageRangeDisplayed:10,nextPageText:"Trang sau",prevPageText:"Trang tr\u01b0\u1edbc",firstPageText:"Trang \u0111\u1ea7u",lastPageText:"Trang cu\u1ed1i",itemClass:"page-item",linkClass:"page-link"})})]})}})}}]),a}(n.Component));function re(e){return Object(f.jsx)(C,{children:function(t){var a=t.contacts,n=t.albums,s=a.filter((function(t){return t.id==e.match.params.userId})),r=n.filter((function(t){return t.id==e.match.params.id}));console.log(typeof r);var i=Object.values(r).concat(Object.values(s));console.log(i);var o=[Object(b.a)(Object(b.a)({},i[0]),i[1])];return console.log(o),o.map((function(e){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("h1",{children:[Object(f.jsx)("span",{style:{color:"green"},children:"Author: "}),e.name]}),Object(f.jsx)("h1",{className:"display-4",children:e.title}),Object(f.jsx)("p",{className:"d-flex p-2",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi commodi optio, expedita magnam dolore rerum, consequatur veniam repellendus sit, deserunt laudantium ratione ab eligendi ducimus libero non iure! Iste."}),Object(f.jsx)("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"",style:{width:"50%",height:"400px"}}),Object(f.jsx)("p",{className:"d-flex p-2 flex-row-reverse",children:Object(f.jsx)("span",{className:"py-3 align-items-starts d-flex w-50",children:"Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})}),Object(f.jsx)("img",{src:"https://picsum.photos/200/300",alt:"",style:{width:"50%",height:"400px"}}),Object(f.jsx)("p",{className:"d-flex p-2 flex-row-reverse",children:Object(f.jsx)("span",{className:"py-3 align-items-end d-flex w-50",children:"Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})})]})}))}})}var ie=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return this.state.loading?Object(f.jsx)(N,{}):Object(f.jsx)(s.a.Fragment,{children:Object(f.jsx)(w,{children:Object(f.jsxs)(S.a,{children:[Object(f.jsx)(E,{branding:"Contact Manager"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(Y.c,{children:[Object(f.jsx)(Y.a,{exact:!0,path:"/",component:D}),Object(f.jsx)(Y.a,{path:"/about",component:G}),Object(f.jsx)(Y.a,{exact:!0,path:"/detailalbum/:userId/:id",component:re}),Object(f.jsx)(Y.a,{exact:!0,path:"contact-manager/addcontact",component:V}),Object(f.jsx)(Y.a,{exact:!0,path:"/detailcontact/:id",component:H}),Object(f.jsx)(Y.a,{exact:!0,path:"/editcontact/:id",component:z}),Object(f.jsx)(Y.a,{exact:!0,path:"/album",component:se}),Object(f.jsx)(Y.a,{component:L})]})})]})})})}}]),a}(n.Component),oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,182)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))},ce=a(85),le=a.n(ce);i.a.render(Object(f.jsx)(w,{store:le.a,children:Object(f.jsx)(ie,{})}),document.getElementById("root")),oe()},85:function(e,t){},97:function(e,t,a){},99:function(e,t,a){}},[[147,1,2]]]);
//# sourceMappingURL=main.8bfc8a83.chunk.js.map