(function(t){function e(e){for(var a,i,l=e[0],s=e[1],c=e[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("VueJS Sequencer")]),n("span",{staticClass:"font-weight-light"},[t._v("GABBAY | SABLON | DIABI")])]),n("v-spacer"),n("v-btn",{attrs:{text:"",href:"https://github.com/raphaelgabbay/VueJS_Sequencer",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("Github repo")])])],1),n("v-content",[n("HelloWorld")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Description",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),n("v-btn",{on:{click:t.addElement}},[t._v("Ajouter")]),n("v-btn",{on:{click:t.login}},[t._v("Connexion")])],1)],1),n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",tile:""}},t._l(t.todos,function(e,a){return n("v-list-item",{key:e.id},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n            "+t._s(e.name)+"\n          ")]),n("v-list-item-subtitle",[t._v("\n            "+t._s(e.description)+"\n            "),n("v-btn",{on:{click:function(e){return t.rmElement(a)}}},[t._v("Remove")])],1)],1)],1)}),1)],1)],1)},l=[],s={data:()=>({valid:!1,name:"",description:"",todos:[],url:""}),methods:{async login(){const t=await this.axios.post(this.url+"/api/login",{login:"admin",password:"changethispassword"});console.log("response is:",t)},logout(){},addElement(){this.todos.push({id:this.todos.length,name:this.name,description:this.description}),console.log("ajouté !")},rmElement(t){console.log("index",t),this.todos.splice(t,1)}}},c=s,u=n("2877"),p=n("6544"),d=n.n(p),v=n("8336"),f=n("b0af"),m=n("62ad"),b=n("a523"),h=n("4bd4"),g=n("a722"),y=n("da13"),_=n("5d23"),x=n("0fd9"),w=n("8654"),V=Object(u["a"])(c,i,l,!1,null,null,null),O=V.exports;d()(V,{VBtn:v["a"],VCard:f["a"],VCol:m["a"],VContainer:b["a"],VForm:h["a"],VLayout:g["a"],VListItem:y["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:x["a"],VTextField:w["a"]});var j={name:"App",components:{HelloWorld:O},data:()=>({})},S=j,k=n("7496"),C=n("40dc"),A=n("a75b"),B=n("2fa4"),P=n("2a7f"),T=Object(u["a"])(S,o,r,!1,null,null,null),E=T.exports;d()(T,{VApp:k["a"],VAppBar:C["a"],VBtn:v["a"],VContent:A["a"],VSpacer:B["a"],VToolbarTitle:P["a"]});var I=n("f309");a["a"].use(I["a"]);var L=new I["a"]({icons:{iconfont:"mdi"}}),q=n("bc3a"),J=n.n(q),M=n("a7fe"),$=n.n(M);a["a"].config.productionTip=!1,J.a.defaults.withCredentials=!0,a["a"].use($.a,J.a),new a["a"]({vuetify:L,render:t=>t(E)}).$mount("#app")}});
//# sourceMappingURL=app.bb89a362.js.map