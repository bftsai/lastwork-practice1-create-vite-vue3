import{S as C}from"./sweetalert2-TNNTiBzs.js";import{e as W,f as ut,g as K,h as B,i as Q,j as At,k as mt,l as ht,_ as Y,o as w,c as P,a as E,w as tt,b as e,m as R,n as D,p as N,F as G,q as nt,s as et,v as at,t as kt,r as V,u as O,x as xt}from"./index-yooDshOT.js";import{d as X,s as Mt,c as Ct,l as Nt,z as St,F as Dt,a as Lt,E as Vt,r as Ot,e as It,i as Ut,b as $t}from"./zh_TW-B6TEuQxI.js";import{L as Bt}from"./Loading-_Tkbwue5.js";var _t={exports:{}},st={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var lt;function Ft(){return lt||(lt=1,function(i,t){(function(a,o){i.exports=o(W(),ut(),K())})(B,function(a,o,s){const l="backdrop",d="fade",u="show",m=`mousedown.bs.${l}`,f={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class h extends o{constructor(r){super(),this._config=this._getConfig(r),this._isAppended=!1,this._element=null}static get Default(){return f}static get DefaultType(){return _}static get NAME(){return l}show(r){if(!this._config.isVisible){s.execute(r);return}this._append();const y=this._getElement();this._config.isAnimated&&s.reflow(y),y.classList.add(u),this._emulateAnimation(()=>{s.execute(r)})}hide(r){if(!this._config.isVisible){s.execute(r);return}this._getElement().classList.remove(u),this._emulateAnimation(()=>{this.dispose(),s.execute(r)})}dispose(){this._isAppended&&(a.off(this._element,m),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const r=document.createElement("div");r.className=this._config.className,this._config.isAnimated&&r.classList.add(d),this._element=r}return this._element}_configAfterMerge(r){return r.rootElement=s.getElement(r.rootElement),r}_append(){if(this._isAppended)return;const r=this._getElement();this._config.rootElement.append(r),a.on(r,m,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(r){s.executeAfterTransition(r,this._getElement(),this._config.isAnimated)}}return h})}(st)),st.exports}var z={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function pt(){return rt||(rt=1,function(i,t){(function(a,o){o(t,W(),Q(),K())})(B,function(a,o,s,l){const d=(u,m="hide")=>{const f=`click.dismiss${u.EVENT_KEY}`,_=u.NAME;o.on(document,f,`[data-bs-dismiss="${_}"]`,function(h){if(["A","AREA"].includes(this.tagName)&&h.preventDefault(),l.isDisabled(this))return;const n=s.getElementFromSelector(this)||this.closest(`.${_}`);u.getOrCreateInstance(n)[m]()})};a.enableDismissTrigger=d,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})})}(z,z.exports)),z.exports}var it={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ct;function qt(){return ct||(ct=1,function(i,t){(function(a,o){i.exports=o(W(),Q(),ut())})(B,function(a,o,s){const l="focustrap",u=".bs.focustrap",m=`focusin${u}`,f=`keydown.tab${u}`,_="Tab",h="forward",n="backward",r={autofocus:!0,trapElement:null},y={autofocus:"boolean",trapElement:"element"};class k extends s{constructor(b){super(),this._config=this._getConfig(b),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return r}static get DefaultType(){return y}static get NAME(){return l}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),a.off(document,u),a.on(document,m,b=>this._handleFocusin(b)),a.on(document,f,b=>this._handleKeydown(b)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,a.off(document,u))}_handleFocusin(b){const{trapElement:M}=this._config;if(b.target===document||b.target===M||M.contains(b.target))return;const T=o.focusableChildren(M);T.length===0?M.focus():this._lastTabNavDirection===n?T[T.length-1].focus():T[0].focus()}_handleKeydown(b){b.key===_&&(this._lastTabNavDirection=b.shiftKey?n:h)}}return k})}(it)),it.exports}var ot={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var dt;function Rt(){return dt||(dt=1,function(i,t){(function(a,o){i.exports=o(At(),Q(),K())})(B,function(a,o,s){const l=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",d=".sticky-top",u="padding-right",m="margin-right";class f{constructor(){this._element=document.body}getWidth(){const h=document.documentElement.clientWidth;return Math.abs(window.innerWidth-h)}hide(){const h=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,u,n=>n+h),this._setElementAttributes(l,u,n=>n+h),this._setElementAttributes(d,m,n=>n-h)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,u),this._resetElementAttributes(l,u),this._resetElementAttributes(d,m)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(h,n,r){const y=this.getWidth(),k=x=>{if(x!==this._element&&window.innerWidth>x.clientWidth+y)return;this._saveInitialAttribute(x,n);const b=window.getComputedStyle(x).getPropertyValue(n);x.style.setProperty(n,`${r(Number.parseFloat(b))}px`)};this._applyManipulationCallback(h,k)}_saveInitialAttribute(h,n){const r=h.style.getPropertyValue(n);r&&a.setDataAttribute(h,n,r)}_resetElementAttributes(h,n){const r=y=>{const k=a.getDataAttribute(y,n);if(k===null){y.style.removeProperty(n);return}a.removeDataAttribute(y,n),y.style.setProperty(n,k)};this._applyManipulationCallback(h,r)}_applyManipulationCallback(h,n){if(s.isElement(h)){n(h);return}for(const r of o.find(h,this._element))n(r)}}return f})}(ot)),ot.exports}/*!
  * Bootstrap modal.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,t){(function(a,o){i.exports=o(mt(),W(),Q(),Ft(),pt(),qt(),K(),Rt())})(B,function(a,o,s,l,d,u,m,f){const _="modal",n=".bs.modal",r=".data-api",y="Escape",k=`hide${n}`,x=`hidePrevented${n}`,b=`hidden${n}`,M=`show${n}`,T=`shown${n}`,L=`resize${n}`,U=`click.dismiss${n}`,$=`mousedown.dismiss${n}`,c=`keydown.dismiss${n}`,H=`click${n}${r}`,g="modal-open",A="fade",F="show",Z="modal-static",bt=".modal.show",Et=".modal-dialog",yt=".modal-body",vt='[data-bs-toggle="modal"]',wt={backdrop:!0,focus:!0,keyboard:!0},Pt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class I extends a{constructor(p,v){super(p,v),this._dialog=s.findOne(Et,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new f,this._addEventListeners()}static get Default(){return wt}static get DefaultType(){return Pt}static get NAME(){return _}toggle(p){return this._isShown?this.hide():this.show(p)}show(p){this._isShown||this._isTransitioning||o.trigger(this._element,M,{relatedTarget:p}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(g),this._adjustDialog(),this._backdrop.show(()=>this._showElement(p)))}hide(){!this._isShown||this._isTransitioning||o.trigger(this._element,k).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(F),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){o.off(window,n),o.off(this._dialog,n),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new l({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new u({trapElement:this._element})}_showElement(p){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const v=s.findOne(yt,this._dialog);v&&(v.scrollTop=0),m.reflow(this._element),this._element.classList.add(F);const S=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,o.trigger(this._element,T,{relatedTarget:p})};this._queueCallback(S,this._dialog,this._isAnimated())}_addEventListeners(){o.on(this._element,c,p=>{if(p.key===y){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),o.on(window,L,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),o.on(this._element,$,p=>{o.one(this._element,U,v=>{if(!(this._element!==p.target||this._element!==v.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(g),this._resetAdjustments(),this._scrollBar.reset(),o.trigger(this._element,b)})}_isAnimated(){return this._element.classList.contains(A)}_triggerBackdropTransition(){if(o.trigger(this._element,x).defaultPrevented)return;const v=this._element.scrollHeight>document.documentElement.clientHeight,S=this._element.style.overflowY;S==="hidden"||this._element.classList.contains(Z)||(v||(this._element.style.overflowY="hidden"),this._element.classList.add(Z),this._queueCallback(()=>{this._element.classList.remove(Z),this._queueCallback(()=>{this._element.style.overflowY=S},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const p=this._element.scrollHeight>document.documentElement.clientHeight,v=this._scrollBar.getWidth(),S=v>0;if(S&&!p){const q=m.isRTL()?"paddingLeft":"paddingRight";this._element.style[q]=`${v}px`}if(!S&&p){const q=m.isRTL()?"paddingRight":"paddingLeft";this._element.style[q]=`${v}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(p,v){return this.each(function(){const S=I.getOrCreateInstance(this,p);if(typeof p=="string"){if(typeof S[p]>"u")throw new TypeError(`No method named "${p}"`);S[p](v)}})}}return o.on(document,H,vt,function(Tt){const p=s.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&Tt.preventDefault(),o.one(p,M,q=>{q.defaultPrevented||o.one(p,b,()=>{m.isVisible(this)&&this.focus()})});const v=s.findOne(bt);v&&I.getInstance(v).hide(),I.getOrCreateInstance(p).toggle(this)}),d.enableDismissTrigger(I),m.defineJQueryPlugin(I),I})})(_t);var Wt=_t.exports;const Kt=ht(Wt),ft={methods:{showModal(){const i=new Kt(this.$refs.modal,{keyboard:!1});this.modal=i,this.modal.show()},hideModal(){this.tempProduct={},this.$emit("emit-hideModal"),this.modal.hide()}}},Yt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20background-image:%20none;%20display:%20block;%20shape-rendering:%20auto;'%20width='50px'%20height='50px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3ccircle%20cx='50'%20cy='50'%20r='32'%20stroke-width='8'%20stroke='%23fe718d'%20stroke-dasharray='50.26548245743669%2050.26548245743669'%20fill='none'%20stroke-linecap='round'%3e%3canimateTransform%20attributeName='transform'%20type='rotate'%20repeatCount='indefinite'%20dur='1s'%20keyTimes='0;1'%20values='0%2050%2050;360%2050%2050'%3e%3c/animateTransform%3e%3c/circle%3e%3c!--%20[ldio]%20generated%20by%20https://loading.io/%20--%3e%3c/svg%3e",zt="https://ec-course-api.hexschool.io/",Jt="bftsai";X("required",Ot);X("email",It);X("integer",Ut);X("regex",$t);Mt("zh_TW");Ct({generateMessage:Nt({zh_TW:St}),validateOnInput:!0});const jt={data(){return{modal:{},tempProduct:{},imageUrl:"",loading:!1}},props:{product:{type:Object,default(){return{}}},editProduct:{type:Object,default(){return{}}}},components:{VForm:Dt,VField:Lt,ErrorMessage:Vt},mixins:[ft],watch:{product(){this.tempProduct=JSON.parse(JSON.stringify(this.product)),this.imageUrl="";const i=document.querySelector("#imageUpload");i.value=""},editProduct(){this.tempProduct=JSON.parse(JSON.stringify(this.editProduct))}},methods:{isImage(){var i;return this.tempProduct.imageUrl&&((i=this.tempProduct)==null?void 0:i.imagesUrl.length)>=1?!0:"請至少新增兩張產品圖片"},async getImageUrl(i){try{this.loading=!0;const t=i.target.files[0],a=new FormData;a.append("file-to-upload",t);const o=(await this.axios.post(`${zt}v2/api/${Jt}/admin/upload`,a)).data;o.success&&(this.imageUrl=o.imageUrl),this.loading=!1}catch(t){console.log(t.response),this.loading=!1}},addImage(){this.tempProduct.imageUrl?this.tempProduct.imagesUrl.push(this.imageUrl):this.tempProduct.imageUrl=this.imageUrl,this.imageUrl=""},sendProduct(){var i;try{(i=this.tempProduct)!=null&&i.id?(this.tempProduct.is_enabled!==!0&&!this.tempProduct.is_enabled?this.tempProduct.is_enabled=0:this.tempProduct.is_enabled===!0&&(this.tempProduct.is_enabled=1),console.log("path",this.tempProduct),this.$emit("emit-path-product",this.tempProduct)):(this.tempProduct.is_enabled===!0?this.tempProduct.is_enabled=1:this.tempProduct.is_enabled=0,console.log("new",this.tempProduct),this.$emit("emit-post-product",this.tempProduct)),this.tempProduct={}}catch(t){console.log(t)}}},mounted(){}},Gt={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal","data-bs-backdrop":"static","data-bs-keyboard":"false"},Qt={class:"modal-content border-0"},Xt={class:"modal-header"},Ht=e("h5",{class:"modal-title fs-md-4 fs-6 fw-bold"},"新增產品",-1),Zt={class:"modal-body"},te={class:"row"},ee={class:"col-sm-4"},se={key:0,class:"mb-3"},ie=["src"],oe={class:"mb-3"},ne={for:"imageInput",class:"d-flex flex-column"},ae={class:"mb-3"},le={for:"imageUpload",class:"d-flex flex-column"},re={class:"d-flex align-items-center"},ce=["disabled"],de={key:0,src:Yt,alt:"loading"},ue={key:1,class:"mb-3"},me=["src"],he=["src"],_e={class:"col-sm-8"},pe={class:"mb-3"},fe={for:"title",class:"d-flex flex-column"},ge={class:"row"},be={class:"col-sm-6"},Ee={class:"mb-3"},ye={for:"category",class:"d-flex flex-column"},ve={class:"col-sm-6"},we={class:"mb-3"},Pe={for:"unit",class:"d-flex flex-column"},Te={class:"row"},Ae={class:"col-sm-6"},ke={class:"mb-3"},xe={for:"origin_price",class:"d-flex flex-column"},Me={class:"col-sm-6"},Ce={class:"mb-3"},Ne={for:"price",class:"d-flex flex-column"},Se={class:"mb-3"},De={for:"description",class:"d-flex flex-column"},Le={class:"mb-3"},Ve={for:"content",class:"d-flex flex-column"},Oe={class:"mb-3"},Ie={for:"is_enabled",class:"d-flex align-items-center"},Ue=["checked"],$e={class:"modal-footer"},Be=e("button",{type:"submit",class:"btn btn-primary"},"Save changes",-1);function Fe(i,t,a,o,s,l){const d=V("v-field"),u=V("error-message"),m=V("v-form");return w(),P("div",Gt,[E(m,{class:"modal-dialog modal-xl",onSubmit:l.sendProduct,novalidate:""},{default:tt(({errors:f})=>{var _,h,n,r,y,k,x,b,M,T,L,U,$;return[e("div",Qt,[e("div",Xt,[Ht,e("button",{type:"button",class:"btn btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=(...c)=>i.hideModal&&i.hideModal(...c))},"X")]),e("div",Zt,[e("div",te,[e("div",ee,[s.imageUrl?(w(),P("div",se,[e("img",{src:s.imageUrl,alt:"主圖照片",class:"object-fit-cover w-100"},null,8,ie)])):R("",!0),e("div",oe,[e("label",ne,[D(" 輸入圖片網址 "),E(d,{name:"image",class:N({"is-invalid":f.image}),id:"imageInput",type:"text",placeholder:"請輸入圖片連結",modelValue:s.imageUrl,"onUpdate:modelValue":t[1]||(t[1]=c=>s.imageUrl=c),disabled:((h=(_=s.tempProduct)==null?void 0:_.imagesUrl)==null?void 0:h.length)>=5,rules:l.isImage},null,8,["class","modelValue","disabled","rules"]),E(u,{name:"image",class:"invalid-feedback"}),e("span",{class:N(["text-danger",{"d-none":((r=(n=s.tempProduct)==null?void 0:n.imagesUrl)==null?void 0:r.length)!==5}])},"上傳照片數量已滿",2)])]),e("div",ae,[e("label",le,[D(" 或 上傳圖片 "),e("div",re,[e("input",{id:"imageUpload",type:"file",disabled:((k=(y=s.tempProduct)==null?void 0:y.imagesUrl)==null?void 0:k.length)>=5,onChange:t[2]||(t[2]=(...c)=>l.getImageUrl&&l.getImageUrl(...c))},null,40,ce),s.loading?(w(),P("img",de)):R("",!0)]),e("span",{class:N(["text-danger",{"d-none":((b=(x=s.tempProduct)==null?void 0:x.imagesUrl)==null?void 0:b.length)!==5}])},"上傳照片數量已滿",2)])]),s.tempProduct.imageUrl?(w(),P("div",ue,[(M=s.tempProduct)!=null&&M.imageUrl?(w(),P("img",{key:0,class:"w-45 me-3 mb-3",src:(T=s.tempProduct)==null?void 0:T.imageUrl,alt:""},null,8,me)):R("",!0),(w(!0),P(G,null,nt(s.tempProduct.imagesUrl,(c,H)=>(w(),P("img",{src:c,alt:"附圖 key",key:"key"+H,class:"w-45 me-3"},null,8,he))),128))])):R("",!0),e("button",{type:"button",class:N(["btn btn-outline-primary w-100",{disabled:((U=(L=s.tempProduct)==null?void 0:L.imagesUrl)==null?void 0:U.length)===5}]),onClick:t[3]||(t[3]=(...c)=>l.addImage&&l.addImage(...c))},"新增圖片",2)]),e("div",_e,[e("div",pe,[e("label",fe,[D(" 標題 "),E(d,{name:"標題",class:N({"is-invalid":f.標題}),id:"title",type:"text",placeholder:"請輸入標題",modelValue:s.tempProduct.title,"onUpdate:modelValue":t[4]||(t[4]=c=>s.tempProduct.title=c),rules:"required"},null,8,["class","modelValue"]),E(u,{name:"標題",class:"invalid-feedback"})])]),e("div",ge,[e("div",be,[e("div",Ee,[e("label",ye,[D(" 分類 "),E(d,{name:"分類",class:N({"is-invalid":f.分類}),id:"category",type:"text",placeholder:"請輸入分類",modelValue:s.tempProduct.category,"onUpdate:modelValue":t[5]||(t[5]=c=>s.tempProduct.category=c),rules:"required"},null,8,["class","modelValue"]),E(u,{name:"分類",class:"invalid-feedback"})])])]),e("div",ve,[e("div",we,[e("label",Pe,[D(" 單位 "),E(d,{name:"單位",class:N({"is-invalid":f.單位}),id:"unit",type:"text",placeholder:"請輸入單位",modelValue:s.tempProduct.unit,"onUpdate:modelValue":t[6]||(t[6]=c=>s.tempProduct.unit=c),rules:"required"},null,8,["class","modelValue"]),E(u,{name:"單位",class:"invalid-feedback"})])])])]),e("div",Te,[e("div",Ae,[e("div",ke,[e("label",xe,[D(" 原價 "),E(d,{name:"原價",class:N({"is-invalid":f.原價}),id:"origin_price",type:"number",placeholder:"請輸入原價",modelValue:s.tempProduct.origin_price,"onUpdate:modelValue":t[7]||(t[7]=c=>s.tempProduct.origin_price=c),rules:"required|integer"},null,8,["class","modelValue"]),E(u,{name:"原價",class:"invalid-feedback"})])])]),e("div",Me,[e("div",Ce,[e("label",Ne,[D(" 售價 "),E(d,{name:"售價",class:N({"is-invalid":f.售價}),id:"price",type:"number",placeholder:"請輸入售價",modelValue:s.tempProduct.price,"onUpdate:modelValue":t[8]||(t[8]=c=>s.tempProduct.price=c),rules:"required|integer"},null,8,["class","modelValue"]),E(u,{name:"售價",class:"invalid-feedback"})])])])]),e("div",Se,[e("label",De,[D(" 產品描述 "),E(d,{name:"產品描述",rules:"required",modelValue:s.tempProduct.description,"onUpdate:modelValue":t[10]||(t[10]=c=>s.tempProduct.description=c)},{default:tt(()=>[et(e("textarea",{name:"產品描述",class:N({"is-invalid":f.產品描述}),id:"description",cols:"30",rows:"3",placeholder:"請輸入產品描述","onUpdate:modelValue":t[9]||(t[9]=c=>s.tempProduct.description=c)},null,2),[[at,s.tempProduct.description]]),E(u,{name:"產品描述",class:"invalid-feedback"})]),_:2},1032,["modelValue"])])]),e("div",Le,[e("label",Ve,[D(" 說明內容 "),E(d,{name:"說明內容",rules:"required",modelValue:s.tempProduct.content,"onUpdate:modelValue":t[12]||(t[12]=c=>s.tempProduct.content=c)},{default:tt(()=>[et(e("textarea",{name:"content",class:N({"is-invalid":f.說明內容}),id:"content",cols:"30",rows:"3",placeholder:"請輸入產品說明內容","onUpdate:modelValue":t[11]||(t[11]=c=>s.tempProduct.content=c)},null,2),[[at,s.tempProduct.content]]),E(u,{name:"說明內容",class:"invalid-feedback"})]),_:2},1032,["modelValue"])])]),e("div",Oe,[e("label",Ie,[et(e("input",{type:"checkbox",name:"is_enabled",id:"is_enabled",class:"me-2",checked:($=s.tempProduct)==null?void 0:$.is_enabled,"onUpdate:modelValue":t[13]||(t[13]=c=>s.tempProduct.is_enabled=c)},null,8,Ue),[[kt,s.tempProduct.is_enabled]]),D(" 是否啟用 ")])])])])]),e("div",$e,[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:t[14]||(t[14]=(...c)=>i.hideModal&&i.hideModal(...c))},"Close"),Be])])]}),_:1},8,["onSubmit"])],512)}const qe=Y(jt,[["render",Fe]]),Re={data(){return{tempProduct:{}}},mixins:[ft],props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=JSON.parse(JSON.stringify(this.product))}},methods:{sendProduct(){this.$emit("emit-deleteProduct",this.tempProduct),this.tempProduct={}}}},We={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal","data-bs-backdrop":"static","data-bs-keyboard":"false"},Ke={class:"modal-dialog"},Ye={class:"modal-content"},ze={class:"modal-header"},Je=e("h5",{class:"modal-title fs-md-4 fs-6 fw-bold text-danger"},"Delete Product",-1),je={class:"modal-body d-flex flex-column"},Ge=e("h2",{class:"fs-md-5 fs-6 mb-3"},"是否要刪除此商品？",-1),Qe=e("h3",{class:"fs-6"},"商品資訊：",-1),Xe=["src"],He={class:"modal-footer"};function Ze(i,t,a,o,s,l){return w(),P("div",We,[e("div",Ke,[e("div",Ye,[e("div",ze,[Je,e("button",{type:"button",class:"btn btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=(...d)=>i.hideModal&&i.hideModal(...d))},"X")]),e("div",je,[Ge,Qe,e("p",null,"ID："+O(s.tempProduct.id),1),e("p",null,"Title："+O(s.tempProduct.title),1),e("p",null,"Category："+O(s.tempProduct.category),1),e("img",{src:s.tempProduct.imageUrl,alt:"商品圖片",class:"w-50 align-self-center object-fit-cover"},null,8,Xe)]),e("div",He,[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:t[1]||(t[1]=(...d)=>i.hideModal&&i.hideModal(...d))},"Close"),e("button",{type:"button",class:"btn btn-danger text-primary",onClick:t[2]||(t[2]=(...d)=>l.sendProduct&&l.sendProduct(...d))},"Delete Product")])])])],512)}const ts=Y(Re,[["render",Ze]]);var gt={exports:{}};/*!
  * Bootstrap toast.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,t){(function(a,o){i.exports=o(mt(),W(),pt(),K())})(B,function(a,o,s,l){const d="toast",m=".bs.toast",f=`mouseover${m}`,_=`mouseout${m}`,h=`focusin${m}`,n=`focusout${m}`,r=`hide${m}`,y=`hidden${m}`,k=`show${m}`,x=`shown${m}`,b="fade",M="hide",T="show",L="showing",U={animation:"boolean",autohide:"boolean",delay:"number"},$={animation:!0,autohide:!0,delay:5e3};class c extends a{constructor(g,A){super(g,A),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return $}static get DefaultType(){return U}static get NAME(){return d}show(){if(o.trigger(this._element,k).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(b);const A=()=>{this._element.classList.remove(L),o.trigger(this._element,x),this._maybeScheduleHide()};this._element.classList.remove(M),l.reflow(this._element),this._element.classList.add(T,L),this._queueCallback(A,this._element,this._config.animation)}hide(){if(!this.isShown()||o.trigger(this._element,r).defaultPrevented)return;const A=()=>{this._element.classList.add(M),this._element.classList.remove(L,T),o.trigger(this._element,y)};this._element.classList.add(L),this._queueCallback(A,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(T),super.dispose()}isShown(){return this._element.classList.contains(T)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(g,A){switch(g.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=A;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=A;break}}if(A){this._clearTimeout();return}const F=g.relatedTarget;this._element===F||this._element.contains(F)||this._maybeScheduleHide()}_setListeners(){o.on(this._element,f,g=>this._onInteraction(g,!0)),o.on(this._element,_,g=>this._onInteraction(g,!1)),o.on(this._element,h,g=>this._onInteraction(g,!0)),o.on(this._element,n,g=>this._onInteraction(g,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(g){return this.each(function(){const A=c.getOrCreateInstance(this,g);if(typeof g=="string"){if(typeof A[g]>"u")throw new TypeError(`No method named "${g}"`);A[g](this)}})}}return s.enableDismissTrigger(c),l.defineJQueryPlugin(c),c})})(gt);var es=gt.exports;const ss=ht(es),is={name:"Toast",data(){return{toast:{}}},props:["msg",""],methods:{closeToast(){console.dir(this.$refs.toast)}},mounted(){const i=this.$refs.toast;new ss(i,{delay:1e3}).show()}},os={class:"toast bg-dark",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},ns={class:"toast-header"},as={class:"me-auto"},ls=e("strong",{class:"me-auto"},"Bootstrap",-1),rs={key:0,class:"toast-body"};function cs(i,t,a,o,s,l){return w(),P("div",os,[e("div",ns,[e("span",{class:N([`bg-${a.msg.style}`,"p-2 d-inline-block"])},null,2),e("strong",as,O(a.msg.title),1),ls,e("button",{type:"button",class:"btn btn-close p-0","data-bs-dismiss":"toast","aria-label":"Close",onClick:t[0]||(t[0]=(...d)=>l.closeToast&&l.closeToast(...d))},"X")]),a.msg.content?(w(),P("div",rs,O(a.msg.content),1)):R("",!0)],512)}const ds=Y(is,[["render",cs]]),us={data(){return{message:[],message1:""}},components:{Toast:ds},inject:["emitter"],mounted(){this.emitter.on("push-message",i=>{const{style:t="success",title:a,content:o}=i;this.message.push({style:t,title:a,content:o})}),this.emitter.on("add-message",i=>{this.message1=i})}},ms={class:"toast-container position-absolute pe-3 top-0 end-0"};function hs(i,t,a,o,s,l){const d=V("Toast"),u=V("toast");return w(),P("div",ms,[(w(!0),P(G,null,nt(s.message,(m,f)=>(w(),xt(d,{key:f,msg:m},null,8,["msg"]))),128)),E(u)])}const _s=Y(us,[["render",hs]]),J="https://ec-course-api.hexschool.io/",j="bftsai",ps={data(){return{products:[],pagination:{},tempProduct:{},isLoading:!1}},inject:["emitter"],components:{ProductModal:qe,DeleteModal:ts,ToastList:_s,Loading:Bt},methods:{async checkLogin(){try{this.isLoading=!0;const i=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization=i;const t=(await this.axios.post("https://ec-course-api.hexschool.io//v2/api/user/check")).data;this.isLoading=!1,t.success?this.getProducts(1):this.$router.push({name:"member"})}catch(i){this.isLoading=!1,console.log(i),this.$router.push({name:"member"})}},async getProducts(i){try{this.isLoading=!0;const t=(await this.axios.get(`${J}v2/api/${j}/admin/products?page=${i}`)).data;t.success?(C.fire({title:"已取得產品列表!",icon:"success",showConfirmButton:!1,timer:1500}),this.products=t.products,this.pagination=t.pagination):C.fire({title:"Error!",icon:"error",showConfirmButton:!1,timer:1500}),this.isLoading=!1,console.log(this.products,this.pagination)}catch(t){console.log(t.response),this.isLoading=!1,C.fire({title:"Error!",icon:"error",showConfirmButton:!1,timer:1500}),this.$router.push({name:"member"})}},async postProduct(i){try{this.$refs.productModal.hideModal(),this.isLoading=!0;const t=(await this.axios.post(`${J}v2/api/${j}/admin/product`,{data:i})).data;this.isLoading=!1,t.success?(C.fire({title:t.message,icon:"success",showConfirmButton:!1,timer:1500}),this.getProducts(1)):C.fire({title:t.message,icon:"error",showConfirmButton:!1,timer:1500}),this.tempProduct={}}catch(t){this.isLoading=!1,console.log(t.response),C.fire({title:t.response,icon:"error",showConfirmButton:!1,timer:1500}),this.tempProduct={}}},async pathProduct(i){try{this.$refs.productModal.hideModal(),this.isLoading=!0;const t=i.id,a=(await this.axios.put(`${J}v2/api/${j}/admin/product/${t}`,{data:i})).data;this.isLoading=!1,a.success?(C.fire({title:a.message,icon:"success",showConfirmButton:!1,timer:1500}),this.getProducts(1)):C.fire({title:a.message,icon:"error",showConfirmButton:!1,timer:1500}),console.log(a),this.tempProduct={}}catch(t){this.isLoading=!1,console.log(t.response),C.fire({title:t.response,icon:"error",showConfirmButton:!1,timer:1500}),this.tempProduct={}}},async deleteProduct(i){try{this.$refs.deleteModal.hideModal(),this.isLoading=!0;const t=(await this.axios.delete(`${J}v2/api/${j}/admin/product/${i.id}`)).data;this.isLoading=!1,t.success?(C.fire({title:t.message,icon:"success",showConfirmButton:!1,timer:1500}),this.getProducts(1)):C.fire({title:t.message,icon:"error",showConfirmButton:!1,timer:1500})}catch(t){this.isLoading=!1,console.log(t.response),C.fire({title:t.response,icon:"error",showConfirmButton:!1,timer:1500})}},openAddProductModal(){this.tempProduct={imageUrl:"",imagesUrl:[]},this.$refs.productModal.showModal()},openEditProductModal(i){this.tempProduct=i,this.$refs.productModal.showModal()},deleteProductModal(i){this.tempProduct=i,this.$refs.deleteModal.showModal()},hideModal(){this.tempProduct={}},successToast(){this.emitter.emit("push-message",{style:"success",title:"更新成功"})},errorToast(){this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:"更新失敗內容"})}},created(){},mounted(){this.checkLogin()}},fs=e("h1",null,"Products List",-1),gs={class:"text-end"},bs={class:"table-dark table table-hover mt-4"},Es=e("thead",null,[e("tr",{class:"line-height-60"},[e("th",{width:"120"},"分類"),e("th",null,"產品名稱"),e("th",{class:"text-center",width:"120"},"原價"),e("th",{class:"text-center",width:"120"},"售價"),e("th",{class:"text-center",width:"100"},"是否啟用"),e("th",{class:"text-center",width:"210"},"編輯")])],-1),ys={class:"text-end"},vs={class:"text-end"},ws={class:"text-center"},Ps={key:0,class:"text-success"},Ts={key:1,class:"text-secondary"},As=["onClick"],ks=["onClick"];function xs(i,t,a,o,s,l){const d=V("Loading"),u=V("ToastList"),m=V("ProductModal"),f=V("DeleteModal");return w(),P(G,null,[E(d,{"prop-boolean":s.isLoading},null,8,["prop-boolean"]),E(u),e("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=(..._)=>l.successToast&&l.successToast(..._))},"showToast"),e("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=(..._)=>l.errorToast&&l.errorToast(..._))},"showToast"),fs,e("div",gs,[e("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(..._)=>l.openAddProductModal&&l.openAddProductModal(..._))},"增加產品")]),e("table",bs,[Es,e("tbody",null,[(w(!0),P(G,null,nt(s.products,_=>(w(),P("tr",{class:"line-height-60",key:_.id},[e("td",null,O(_.category),1),e("td",null,O(_.title),1),e("td",ys,O(_.origin_price),1),e("td",vs,O(_.price),1),e("td",ws,[_.is_enabled?(w(),P("span",Ps,"啟用")):(w(),P("span",Ts,"未啟用"))]),e("td",null,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm me-3",onClick:h=>l.openEditProductModal(_)},"編輯",8,As),e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:h=>l.deleteProductModal(_)},"刪除",8,ks)])]))),128))])]),E(m,{ref:"productModal",product:s.tempProduct,"edit-product":s.tempProduct,onEmitPostProduct:l.postProduct,onEmitPathProduct:l.pathProduct,onEmitHideModal:l.hideModal},null,8,["product","edit-product","onEmitPostProduct","onEmitPathProduct","onEmitHideModal"]),E(f,{ref:"deleteModal",product:s.tempProduct,onEmitHideModal:l.hideModal,onEmitDeleteProduct:l.deleteProduct},null,8,["product","onEmitHideModal","onEmitDeleteProduct"])],64)}const Ds=Y(ps,[["render",xs]]);export{Ds as default};