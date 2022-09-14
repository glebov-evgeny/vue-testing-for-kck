(function(){"use strict";var t={8555:function(t,e,r){var a=r(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("SHeader"),e("main",{staticClass:"main"},[e("router-view")],1),e("SFooter")],1)},n=[],s=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"container header__container"},[e("p",{staticClass:"header__title"},[t._v("Тестовое задание")])])])}],l={name:"SHeader"},u=l,c=r(1001),d=(0,c.Z)(u,s,o,!1,null,null,null),f=d.exports,_=function(){var t=this;t._self._c;return t._m(0)},p=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container footer__container"},[e("p",{staticClass:"footer__title"},[t._v("КСК.TЗ")])])])}],m={name:"SFooter"},v=m,h=(0,c.Z)(v,_,p,!1,null,null,null),S=h.exports,b={components:{SFooter:S,SHeader:f}},C=b,y=(0,c.Z)(C,i,n,!1,null,null,null),g=y.exports,x=r(2631),D=function(){var t=this,e=t._self._c;return e("section",{staticClass:"intro"},[e("div",{staticClass:"intro__box container"},[e("div",{staticClass:"intro__filters"},[e("SFilter",{attrs:{options:t.filterData},on:{updateFilter:t.onUpdateFilter,updateSearch:t.onUpdateSearch}})],1),e("div",{staticClass:"intro__content"},[e("div",{staticClass:"intro__header"},[e("div",{staticClass:"intro__header-wrapper"},[e("SSort",{attrs:{options:t.sortData},on:{updateSort:t.onUpdateSort}})],1),e("STabs")],1),e("div",{staticClass:"intro__body"},[t._m(0),e("transition-group",{attrs:{name:"list-animation"}},t._l(t.filteredInfoData,(function(t){return e("SItem",{key:t.id,attrs:{title:t.id,"txt-date":t.dateItem,"txt-number":t.number,"txt-order":t.typeOrderRu}})})),1)],1)])])])},O=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table"},[e("div",{staticClass:"table__item"},[t._v("ID")]),e("div",{staticClass:"table__item"},[t._v("Номер накладной")]),e("div",{staticClass:"table__item"},[t._v("Тип заказа")]),e("div",{staticClass:"table__item"},[t._v("Дата создания")]),e("div",{staticClass:"table__item"})])}],w=r(3822),k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card__row"},[t._v(t._s(t.title))]),e("div",{staticClass:"card__row"},[t._v(t._s(t.txtNumber))]),e("div",{staticClass:"card__row"},[t._v(t._s(t.txtOrder))]),e("div",{staticClass:"card__row"},[t._v(t._s(t.txtDate))]),e("div",{staticClass:"card__row"},[e("button",{staticClass:"card__row-dots",on:{click:function(e){t.isVisible=!t.isVisible}}},[e("img",{attrs:{src:r(6459),alt:"dots"}})]),t.isVisible?e("button",{staticClass:"card__row-delete",on:{click:function(e){return t.deleteInfoCard(t.title)}}},[e("img",{attrs:{src:r(1673),alt:"delete"}}),t._v(" удалить ")]):t._e()])])},I=[],F={name:"SItem",data(){return{isVisible:!1}},props:["title","txtNumber","txtOrder","txtDate"],methods:{...(0,w.OI)(["deleteInfoCard"])}},P=F,T=(0,c.Z)(P,k,I,!1,null,"30a2611e",null),Z=T.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter"},[e("h2",{staticClass:"filter__title"},[t._v(t._s(this.title))]),e("label",{staticClass:"filter__label",attrs:{for:"infoNumber"}},[e("span",{staticClass:"filter__label-text"},[t._v(t._s(t.filterTitle_01)+":")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.numberFilter,expression:"numberFilter",modifiers:{trim:!0}}],staticClass:"filter__input",attrs:{placeholder:"Введите фрагмент",id:"infoNumber",name:"infoNumber",type:"text"},domProps:{value:t.numberFilter},on:{input:[function(e){e.target.composing||(t.numberFilter=e.target.value.trim())},t.changeOption],blur:function(e){return t.$forceUpdate()}}})]),e("label",{staticClass:"filter__label",attrs:{for:"infoOrder"}},[e("span",{staticClass:"filter__label-text"},[t._v(t._s(t.filterTitle_02)+":")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filterSelected,expression:"filterSelected"}],staticClass:"filter__select",attrs:{name:"",id:"infoOrder"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filterSelected=e.target.multiple?r:r[0]},t.changeOptionFilter]}},[e("option",{attrs:{value:"default",selected:""}},[t._v("Выберите из списка")]),t._l(this.options,(function(r,a){return e("option",{key:a,domProps:{value:r.typeOrder}},[t._v(" "+t._s(r.typeOrderRu)+" ")])}))],2)])])},U=[],R={name:"SFilter",props:{options:{type:Array,default:()=>[]}},data(){return{title:"Фильтр",filterTitle_01:"Номер накладной",filterTitle_02:"Тип заказа",numberFilter:"",filterSelected:"default"}},methods:{changeOption(t){this.$emit("updateSearch",t.target.value)},changeOptionFilter(t){this.$emit("updateFilter",t.target.value)}}},N=R,j=(0,c.Z)(N,L,U,!1,null,null,null),A=j.exports,$=function(){var t=this,e=t._self._c;return e("label",{staticClass:"filter__label",attrs:{for:"infoSort"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filterSort,expression:"filterSort"}],staticClass:"filter__select",attrs:{name:"",id:"infoSort"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filterSort=e.target.multiple?r:r[0]},t.changeOption]}},[e("option",{attrs:{value:"default",selected:""}},[t._v("Сортировка")]),t._l(this.options,(function(r,a){return e("option",{key:a,domProps:{value:r.value}},[t._v(" "+t._s(r.txt)+" ")])}))],2)])},V=[],H={name:"SSort",props:{options:{type:Array,default:()=>[]}},data(){return{filterSort:"default"}},methods:{changeOption(t){this.$emit("updateSort",t.target.value)}}},M=H,B=(0,c.Z)(M,$,V,!1,null,null,null),E=B.exports,J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs"},[e("router-link",{staticClass:"tabs__item",attrs:{to:{name:"main"}}},[e("img",{attrs:{src:r(9944),alt:"main-row"}})]),e("router-link",{staticClass:"tabs__item",attrs:{to:{name:"table"}}},[e("img",{attrs:{src:r(3274),alt:"main-column"}})])],1)},q=[],z={name:"STabs"},G=z,K=(0,c.Z)(G,J,q,!1,null,null,null),Q=K.exports,W={name:"MainPage",data(){return{filterData:[{typeOrder:"Pickup",typeOrderRu:"Самовывоз"},{typeOrder:"Delivery",typeOrderRu:"Доставка"},{typeOrder:"Pick-point",typeOrderRu:"Пункт самовывоза"}],sortData:[{txt:"По возрастанию",value:"sort_max"},{txt:"По убыванию",value:"sort_min"}],filterSelected:"default",filterSort:"default",filterSearch:""}},components:{SItem:Z,SFilter:A,STabs:Q,SSort:E},computed:{...(0,w.Se)(["getInfoData"]),filteredInfoData(){let t=[...this.getInfoData];return this.filterSearch&&(t=t.filter((t=>t.number.toLowerCase().includes(this.filterSearch.toLowerCase())))),this.filterSelected&&"default"!==this.filterSelected&&(t=t.filter((t=>t.type===this.filterSelected))),this.filterSort&&"default"!==this.filterSort&&("sort_max"===this.filterSort&&t.sort(((t,e)=>{const r=t.number.toLowerCase(),a=e.number.toLowerCase();return r<a?-1:r>a?1:0})),"sort_min"===this.filterSort&&t.sort(((t,e)=>{const r=t.number.toLowerCase(),a=e.number.toLowerCase();return r>a?-1:r<a?1:0}))),t}},methods:{...(0,w.nv)(["loadInfo"]),onUpdateFilter(t){this.filterSelected=t},onUpdateSearch(t){this.filterSearch=t},onUpdateSort(t){this.filterSort=t,console.log(this.filterSort)}},created(){this.loadInfo()}},X=W,Y=(0,c.Z)(X,D,O,!1,null,null,null),tt=Y.exports,et=function(){var t=this,e=t._self._c;return e("section",{staticClass:"intro"},[e("div",{staticClass:"intro__box container"},[e("div",{staticClass:"intro__filters"},[e("SFilter",{attrs:{options:t.filterData},on:{updateFilter:t.onUpdateFilter,updateSearch:t.onUpdateSearch}})],1),e("div",{staticClass:"intro__content"},[e("div",{staticClass:"intro__header"},[e("div",{staticClass:"intro__header-wrapper"},[e("SSort",{attrs:{options:t.sortData},on:{updateSort:t.onUpdateSort}})],1),e("STabs")],1),e("div",{staticClass:"intro__body"},[t._m(0),e("transition-group",{attrs:{name:"list-animation"}},t._l(t.filteredInfoData,(function(t){return e("SItem",{key:t.id,attrs:{title:t.id,"txt-date":t.dateItem,"txt-number":t.number,"txt-order":t.typeOrderRu}})})),1)],1)])])])},rt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table"},[e("div",{staticClass:"table__item"},[t._v("ID")]),e("div",{staticClass:"table__item"},[t._v("Номер накладной")]),e("div",{staticClass:"table__item"},[t._v("Тип заказа")]),e("div",{staticClass:"table__item"},[t._v("Дата создания")]),e("div",{staticClass:"table__item"})])}],at={name:"MainPage",data(){return{filterData:[{typeOrder:"Pickup",typeOrderRu:"Самовывоз"},{typeOrder:"Delivery",typeOrderRu:"Доставка"},{typeOrder:"Pick-point",typeOrderRu:"Пункт самовывоза"}],sortData:[{txt:"По возрастанию",value:"sort_max"},{txt:"По убыванию",value:"sort_min"}],filterSelected:"default",filterSort:"default",filterSearch:""}},components:{SItem:Z,SFilter:A,STabs:Q,SSort:E},computed:{...(0,w.Se)(["getInfoData"]),filteredInfoData(){let t=[...this.getInfoData];return this.filterSearch&&(t=t.filter((t=>t.number.toLowerCase().includes(this.filterSearch.toLowerCase())))),this.filterSelected&&"default"!==this.filterSelected&&(t=t.filter((t=>t.type===this.filterSelected))),this.filterSort&&"default"!==this.filterSort&&("sort_max"===this.filterSort&&t.sort(((t,e)=>{const r=t.number.toLowerCase(),a=e.number.toLowerCase();return r<a?-1:r>a?1:0})),"sort_min"===this.filterSort&&t.sort(((t,e)=>{const r=t.number.toLowerCase(),a=e.number.toLowerCase();return r>a?-1:r<a?1:0}))),t}},methods:{...(0,w.nv)(["loadInfo"]),onUpdateFilter(t){this.filterSelected=t},onUpdateSearch(t){this.filterSearch=t},onUpdateSort(t){this.filterSort=t,console.log(this.filterSort)}},created(){this.loadInfo()}},it=at,nt=(0,c.Z)(it,et,rt,!1,null,null,null),st=nt.exports,ot=function(){var t=this,e=t._self._c;return e("h1",[t._v("404")])},lt=[],ut={name:"NotFoundPage"},ct=ut,dt=(0,c.Z)(ct,ot,lt,!1,null,"13aa07d7",null),ft=dt.exports;a.ZP.use(x.ZP);const _t=[{name:"main",component:tt,path:"/"},{name:"table",component:st,path:"/table"},{name:"notFound",component:ft,path:"*"}],pt=new x.ZP({routes:_t});var mt=pt,vt=JSON.parse('[{"id":"01-ОБ/2022","number":"159-F","type":"Pickup","creationDate":"2022-07-15T10:21:35.315271"},{"id":"02-ОБ/2022","number":"a-35","type":"Delivery","creationDate":"2022-07-25T15:37:45.084291"},{"id":"03-ОБ/2022","number":"B-411","type":"Pick-point","creationDate":"2022-08-01T09:11:26.264541"},{"id":"04-ОБ/2022","number":"35-Ad","type":"Pickup","creationDate":"2022-08-01T21:41:19.353652"},{"id":"05-ОБ/2022","number":"Ah-510","type":"Pick-point","creationDate":"2022-08-12T18:01:51.526705"}]');a.ZP.use(w.ZP);var ht=new w.ZP.Store({state:{currentData:[],filteredData:[]},getters:{getInfoData(t){return t.currentData?t.currentData:[]},getFilterData(t){return t.currentData.map((t=>({infoType:t.type,typeOrderRu:t.typeOrderRu,isCheck:!1})))}},mutations:{updateData(t,e){t.currentData=e},deleteInfoCard(t,e){t.currentData=t.currentData.filter((t=>t.id!==e))}},actions:{loadInfo(t){t.commit("updateData",vt.map((t=>{let e=null;return e="Pickup"===t.type?"Самовывоз":"Delivery"===t.type?"Доставка":"Пункт самовывоза",{...t,dateItem:new Date(t.creationDate).toLocaleString().replace(",",""),typeOrderRu:e}})))}}});a.ZP.config.productionTip=!1,new a.ZP({router:mt,store:ht,render:t=>t(g)}).$mount("#app")},1673:function(t,e,r){t.exports=r.p+"img/delete.46c0b0ea.svg"},6459:function(t,e,r){t.exports=r.p+"img/dots.aa33b1b5.svg"},9944:function(t,e,r){t.exports=r.p+"img/tab-01.cc016fe3.svg"},3274:function(t,e,r){t.exports=r.p+"img/tab-02.a71f63e1.svg"}},e={};function r(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,a,i,n){if(!a){var s=1/0;for(c=0;c<t.length;c++){a=t[c][0],i=t[c][1],n=t[c][2];for(var o=!0,l=0;l<a.length;l++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(o=!1,n<s&&(s=n));if(o){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[a,i,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/vue-testing-for-kck/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,s=a[0],o=a[1],l=a[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(l)var c=l(r)}for(e&&e(a);u<s.length;u++)n=s[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(c)},a=self["webpackChunkvue_cards_ksk"]=self["webpackChunkvue_cards_ksk"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(8555)}));a=r.O(a)})();
//# sourceMappingURL=app.2360a609.js.map