(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1064:function(e,t,r){"use strict";r(489)},1083:function(e,t,r){"use strict";r.r(t);var s=r(26),n=r(450),a=(r(69),r(455),r(1023),r(8),r(1025),r(1031),r(1032),r(1034),r(1035),r(1036),r(1039),r(1040),r(1041),r(1042),r(1043),r(1044),r(1045),r(1046),r(1048),r(1049),r(1050),r(1051),r(1052),r(1053),r(1054),r(1055),r(1059),r(1060),r(1061),r(1062),r(266),r(112)),c=r(143),i=r(1074),o=r(1063),l=r.n(o),u={data:function(){return{expire:!1,src:"",date:"",ctrl:parseInt(localStorage.getItem("ctrl"))||""}},mounted:function(){clearInterval(this.ctrl)},watch:{show:function(e){e&&this.getImg()}},computed:Object(n.a)({},Object(a.e)({show:function(e){return e.qrcodeShow}})),methods:{getImg:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var r,s,n,a,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return clearInterval(e.ctrl),(r=localStorage.getItem("scene"))?e.scene=r:(e.scene=Object(i.a)(),localStorage.setItem("scene",e.scene)),e.expire=!1,t.next=6,Object(c.b)({scene:e.scene});case 6:for(s=t.sent,n=new Uint8Array(s),a="",o=n.byteLength,l=0;l<o;l++)a+=String.fromCharCode(n[l]);e.src="data:image/png;base64,"+window.btoa(a),e.date=new Date,e.checkLogin();case 14:case"end":return t.stop()}}),t)})))()},checkLogin:function(){var e=this;this.ctrl=setInterval(Object(s.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.e)({scene:e.scene});case 2:200===(r=t.sent).code&&r.data&&r.data.username&&(e.$store.commit("setUserInfo",r.data),e.$store.commit("setToken",r.token),e.$store.commit("setRefreshToken",r.refreshToken),e.hide()),Math.abs(l()(e.date).diff(l()()))>12e4&&(clearInterval(e.ctrl),e.expire=!0);case 6:case"end":return t.stop()}}),t)}))),2e3),localStorage.setItem("ctrl",this.ctrl)},hide:function(){clearInterval(this.ctrl),this.$store.commit("setCodeShow",!1)}}},d=(r(1064),r(29)),m=Object(d.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{on:{click:e.hide}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"info"},[e._v("打开微信扫一扫")]),e._v(" "),r("div",{staticClass:"box"},[r("div",{staticClass:"qrcode"},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.src,expression:"src"}],staticClass:"box-img",attrs:{src:e.src,alt:"qrcode"}}),e._v(" "),e.expire?r("div",{staticClass:"tips-mask"},[r("p",[e._v("小程序二维码状态已过期")])]):e._e()]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.expire,expression:"expire"}],staticClass:"resend",on:{click:function(t){return t.stopPropagation(),e.getImg.apply(null,arguments)}}},[e._v("重新获取二维码")])])]),e._v(" "),r("div",{staticClass:"mask"})]):e._e()}),[],!1,null,"1fb1386a",null);t.default=m.exports},489:function(e,t,r){}}]);