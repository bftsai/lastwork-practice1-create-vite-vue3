import{S as r}from"./sweetalert2-ZIaHzjpx.js";import{_ as l,o as m,c as d,b as s,d as g,a as n,F as _,r as i}from"./index-bU5vsY7l.js";import{L as b}from"./Loading-lWsKwGVs.js";const v="https://ec-course-api.hexschool.io/",x={data(){return{}},methods:{async logout(){try{const e=(await this.axios.post(`${v}v2/logout`)).data;console.log(e),e.success&&(document.cookie="hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC",r.fire({title:e.message,icon:"success",showConfirmButton:!1,timer:1500}),this.$router.push({name:"member"}))}catch(e){r.fire({title:e.response.message,icon:"error",showConfirmButton:!1,timer:1500}),document.cookie="hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC",this.$router.push({name:"member"})}}},mounted(){}},$={class:"navbar navbar-expand-lg"},k={class:"container"},T=s("a",{class:"navbar-brand",href:"#"},"Navbar",-1),L=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),N={class:"collapse navbar-collapse",id:"navbarNav"},C={class:"navbar-nav"},w=g('<li class="nav-item"><a class="nav-link fs-md-4 fs-6 active" aria-current="page" href="#">Home</a></li><li class="nav-item"><a class="nav-link fs-md-4 fs-6" href="#">Features</a></li><li class="nav-item"><a class="nav-link fs-md-4 fs-6" href="#">Pricing</a></li>',3),B={class:"nav-item"};function y(e,a,h,u,c,o){return m(),d("nav",$,[s("div",k,[T,L,s("div",N,[s("ul",C,[w,s("li",B,[s("a",{class:"nav-link fs-md-4 fs-6",onClick:a[0]||(a[0]=(...t)=>o.logout&&o.logout(...t))},"Log Out")])])])])])}const P=l(x,[["render",y]]),J="https://ec-course-api.hexschool.io/",U={data(){return{isLoading:!1}},emits:["emit-member","emit-dashboard-page"],components:{Navbar:P,Loading:b},methods:{isMemberPage(){location.href.split("#/")[1]==="member"?this.$emit("emit-member",!1):this.$emit("emit-member",!0)},isDashboardPage(){this.$emit("emit-dashboard-page")},async logout(){try{this.isLoading=!0;const e=(await this.axios.post(`${J}v2/logout`)).data;console.log(e),this.isLoading=!1,e.success&&(document.cookie="hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC",r.fire({title:e.message,icon:"success",showConfirmButton:!1,timer:1500}),this.$router.push("member"))}catch(e){console.log(e.response),this.isLoading=!1,document.cookie="hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC",this.$router.push("member")}}},created(){this.isMemberPage(),this.isDashboardPage()}},D={class:"container-fluid"};function F(e,a,h,u,c,o){const t=i("Loading"),p=i("Navbar"),f=i("router-view");return m(),d(_,null,[n(t,{"prop-boolean":c.isLoading},null,8,["prop-boolean"]),n(p),s("div",D,[n(f)])],64)}const E=l(U,[["render",F]]);export{E as default};
