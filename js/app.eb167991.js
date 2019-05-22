(function(e){function t(t){for(var i,a,l=t[0],s=t[1],u=t[2],c=0,d=[];c<l.length;c++)a=l[c],o[a]&&d.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/satoshis_place_upload/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("br"),n("UploadSingleFile"),n("FlashMessage")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n  Here you can upload files to "),n("a",{attrs:{href:"https://satoshis.place"}},[e._v(" Satoshi's Place.")]),n("br"),e._v("\n  Upload your file and a QR-code / lightning invoice will appear (if all goes well).\n  "),n("br"),e._v("\n  I do not charge any fees, the invoice is paid directly to Satoshi's Place.\n  "),n("br"),e._v("\n  X and Y coordinates are for the top left corner. Works best with .jpg images.\n  "),n("br"),e._v("\n  If you found this tool useful, please consider "),n("a",{attrs:{href:"https://tippin.me/@kiwiidb"}},[e._v(" tippin me some ⚡.")])])}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"large-12 medium-12 small-12 cell"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.spURL,expression:"spURL"}],attrs:{type:"radio",id:"one",value:"https://win.lightning-lottery.com/upload"},domProps:{checked:e._q(e.spURL,"https://win.lightning-lottery.com/upload")},on:{change:function(t){e.spURL="https://win.lightning-lottery.com/upload"}}}),n("label",{attrs:{for:"one"}},[e._v("Mainnet")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.spURL,expression:"spURL"}],attrs:{type:"radio",id:"two",value:"https://win.lightning-lottery.com/testnet_upload"},domProps:{checked:e._q(e.spURL,"https://win.lightning-lottery.com/testnet_upload")},on:{change:function(t){e.spURL="https://win.lightning-lottery.com/testnet_upload"}}}),n("label",{attrs:{for:"two"}},[e._v("Testnet")]),n("br"),n("br"),n("br"),n("label",[e._v("File\n      "),n("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}})]),n("br"),n("label",[e._v("X Coordinate\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.x,expression:"x"}],ref:"X",attrs:{type:"number",id:"X",default:"450"},domProps:{value:e.x},on:{input:function(t){t.target.composing||(e.x=t.target.value)}}})]),n("br"),n("label",[e._v("Y Coordinate\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.y,expression:"y"}],ref:"Y",attrs:{type:"number",id:"Y",default:"450"},domProps:{value:e.y},on:{input:function(t){t.target.composing||(e.y=t.target.value)}}})]),n("br"),n("label",[e._v("Width\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.w,expression:"w"}],ref:"w",attrs:{type:"number",id:"w",default:"100"},domProps:{value:e.w},on:{input:function(t){t.target.composing||(e.w=t.target.value)}}})]),n("br"),n("label",[e._v("Height\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.h,expression:"h"}],ref:"h",attrs:{type:"number",id:"h",default:"100"},domProps:{value:e.h},on:{input:function(t){t.target.composing||(e.h=t.target.value)}}})]),n("br"),n("button",{on:{click:function(t){return e.submitFile()}}},[e._v("Submit")])]),n("br"),n("qrcode-vue",{directives:[{name:"show",rawName:"v-show",value:""!=e.invoice,expression:"invoice != ''"}],attrs:{id:"second",value:e.invoice,size:"250"}}),n("a",{directives:[{name:"show",rawName:"v-show",value:""!=e.invoice,expression:"invoice != ''"}],staticClass:"button",attrs:{href:"lightning:"+e.invoice}},[e._v("Open in wallet")])],1)},l=[],s=n("bc3a"),u=n.n(s),p=n("d7b0"),c={data:function(){return{spURL:"https://win.lightning-lottery.com/upload",file:"",x:"450",y:"450",w:"100",h:"100",invoice:""}},components:{QrcodeVue:p["a"]},methods:{submitFile:function(){var e=this,t=new FormData;t.append("file",this.file),t.append("x",this.x),t.append("y",this.y),t.append("w",this.w),t.append("h",this.h),u.a.post(this.spURL,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){200==t.status&&(e.invoice=t.data.invoice.paymentRequest)}).catch(function(t){e.flashMessage.error({title:"Something went wrong, stay craeful",message:t,icon:!1,clickable:!1})})},handleFileUpload:function(){this.file=this.$refs.file.files[0]}}},d=c,f=n("2877"),v=Object(f["a"])(d,a,l,!1,null,null,null),h=v.exports,m={name:"app",components:{UploadSingleFile:h}},g=m,b=(n("034f"),Object(f["a"])(g,o,r,!1,null,null,null)),w=b.exports,y=n("5926"),_=n.n(y);i["a"].use(_.a),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(w)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.eb167991.js.map