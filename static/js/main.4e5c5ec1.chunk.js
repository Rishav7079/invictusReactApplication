(this.webpackJsonpinvictus=this.webpackJsonpinvictus||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(6),c=n.n(s),r=(n(12),n(4)),o=n(7),l=(n.p,n(13),n(0));function u(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(l.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}function d(e){var t=e.array;return console.log(t),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h3",{className:"my-4 text-center",children:"Most frequently occurring words "}),0===t.length?Object(l.jsx)("h1",{className:"text-center",children:"Please enter a number"}):t[0].map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:e})," ",Object(l.jsx)("hr",{})]})}))]})}function b(e){var t=e.findMostFrequent,n=Object(a.useState)(""),i=Object(r.a)(n,2),s=i[0],c=i[1];return Object(l.jsx)("div",{className:"container my-4",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("clicked submit",s),s?(t(s),c("")):alert("Number field cannot be blank")},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"num",className:"form-label",children:Object(l.jsx)("h3",{children:"Enter the value of N"})}),Object(l.jsx)("input",{type:"number",className:"form-control",id:"num",value:s,onChange:function(e){return c(e.target.value)},"aria-describedby":"emailHelp"})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})})}var m=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{title:"Invictus"}),Object(l.jsx)(b,{findMostFrequent:function(e){var t="Invictus is the leading organization in the field of Safety and Compliance consulting. With several Fortune 500 organizations and Govt. agencies as its clientele, Invictus has touched over 20 million lives. Our clients include Microsoft, Adobe, Walmart, British Telecom, Canon, Pepsi, Sony, Maruti, TCS, Infosys, McKinsey and many more. Invictus is now making a leap in the field of smart technology solutions to enhance the overall safety quotient of individuals as well as organizations. With the safety and compliance industry in a hyper growth mode, we are aiming to become the number 1 safety and compliance tech brand in the next few years We are in a rapid growth phase and are looking for individuals with drive and vision to associate with us to take us forward in our journey. What we promise to everyone at Invictus is a dynamic and intellectually stimulating environment with the flexibility to experiment. In addition to working on exciting tech, you would also have the satisfaction of creating a safer &amp; smarter society of tomorrow Looking for talented engineers to build Web and App projects using latest technologies develop BACKEND services using technologies like nodejs, redis, mysql, memcached, mongodb, elastic search develop FRONTEND in collaboration with UI/UX designer(s) using technologies like Reactjs, Nextjs, React Native work on Data Analytics work on Amazon AWS, Amazon EC2, Amazon Elasticache, Amazon ElasticSearch, Amazon Lambda and Serverless".split(" "),a={};t.forEach((function(e){a.hasOwnProperty(e)?a[e]++:a[e]=1}));var s=Object.keys(a).map((function(e){return[e," frequency->",a[e]]}));s.sort((function(e,t){return t[2]-e[2]}));var c=s.sort((function(e,t){return t[1]-e[1]})).slice(0,e);console.log(c),i([].concat(Object(o.a)(n),[c]))}}),Object(l.jsx)(d,{array:n})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.4e5c5ec1.chunk.js.map