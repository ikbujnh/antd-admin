(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){"use strict";var n=a(240);t.a=new n.EventEmitter2},236:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return b});a(100);var n=a(28),r=(a(54),a(17)),l=a(23),c=a(24),i=a(20),o=a(25),u=a(26),s=a(15),m=a(0),d=a.n(m),f=a(237),p=a(241);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var b=function(t){Object(o.a)(u,t);var a=h(u);function u(e){var t;return Object(l.a)(this,u),(t=a.call(this,e)).state={name:"\u7236\u7ec4\u4ef6A"},t.bindRef=t.bindRef.bind(Object(i.a)(t)),t.btnClick=t.btnClick.bind(Object(i.a)(t)),t.btnClick2=t.btnClick2.bind(Object(i.a)(t)),t.btnClick3=t.btnClick3.bind(Object(i.a)(t)),t.btnClick4=t.btnClick4.bind(Object(i.a)(t)),t.btnClick5=t.btnClick5.bind(Object(i.a)(t)),t.changeName=t.changeName.bind(Object(i.a)(t)),t}return Object(c.a)(u,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.name;return d.a.createElement("div",null,d.a.createElement("p",null,"I am ",e),d.a.createElement("p",null,"\u6b63\u5728\u64cd\u4f5c\u7684\u5b50\u7ec4\u4ef6\u540d\u79f0\uff1a",this.child&&this.child.state.name||""),d.a.createElement(f.a,{triggerRef:this.bindRef,parentName:e}),d.a.createElement(p.a,{parentName:e}),d.a.createElement(n.a,{className:"m-t"},d.a.createElement(r.a,{type:"primary",onClick:this.btnClick},"\u8c03\u7528\u5b50\u7ec4\u4ef61\u7684\u65b9\u6cd5")),d.a.createElement(n.a,{className:"m-t-lg"},d.a.createElement(r.a,{type:"primary",onClick:this.btnClick2},"\u83b7\u53d6\u5b50\u7ec4\u4ef61\u7684\u5c5e\u6027")),d.a.createElement(n.a,{className:"m-t-lg"},d.a.createElement(r.a,{type:"primary",onClick:this.btnClick3},"\u66f4\u6539\u5b50\u7ec4\u4ef6\u7684\u540d\u79f0\u4e3achild1")),d.a.createElement(n.a,{className:"m-t-lg"},d.a.createElement(r.a,{type:"primary",onClick:this.btnClick5},"\u66f4\u6539\u5b50\u7ec4\u4ef6\u7684\u540d\u79f0\u4e3achild2")),d.a.createElement(n.a,{className:"m-t-lg"},d.a.createElement(r.a,{type:"primary",onClick:this.btnClick4},"\u66f4\u6539\u7236\u7ec4\u4ef6\u7684\u540d\u79f0\u4e3a\u7236\u7ec4\u4ef6B")))}},{key:"bindRef",value:function(e){this.child=e}},{key:"btnClick",value:function(){this.child.getValuefromChild()}},{key:"btnClick2",value:function(){var t=this.child.state.name;e.console.log("my name is "+t)}},{key:"btnClick3",value:function(){this.changeName("child1")}},{key:"btnClick4",value:function(){this.setState({name:"\u7236\u7ec4\u4ef6B"}),this.child.setState({parentName:"\u7236\u7ec4\u4ef6B"})}},{key:"btnClick5",value:function(){this.child.changeName("child2")}},{key:"changeName",value:function(e){this.child.setState({name:e})}}]),u}(m.Component)}).call(this,a(57))},237:function(e,t,a){"use strict";(function(e){var n=a(23),r=a(24),l=a(20),c=a(25),i=a(26),o=a(15),u=a(0),s=a.n(u),m=a(238),d=a(129);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var p=function(t){Object(c.a)(i,t);var a=f(i);function i(e){var t;return Object(n.a)(this,i),(t=a.call(this,e)).state={name:"\u5b50\u7ec4\u4ef61",parentName:e.parentName},t.props.triggerRef(Object(l.a)(t)),t.changeName=t.changeName.bind(Object(l.a)(t)),d.a.on("changeFirstName",t.changeName),t}return Object(r.a)(i,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){m.a.removeListener(this.eventEmitter)}},{key:"getValuefromChild",value:function(){e.console.log("child1 method called by parent.")}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.parentName;return s.a.createElement("div",null,"I am ",t,", parent is ",a)}},{key:"changeName",value:function(e){this.setState({name:e})}}]),i}(u.Component);t.a=p}).call(this,a(57))},238:function(e,t,a){"use strict";var n=a(239);t.a=new n.EventEmitter},241:function(e,t,a){"use strict";(function(e){a(54);var n=a(17),r=a(23),l=a(24),c=a(20),i=a(25),o=a(26),u=a(15),s=a(0),m=a.n(s),d=a(129);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var p=function(t){Object(i.a)(o,t);var a=f(o);function o(e){var t;return Object(r.a)(this,o),(t=a.call(this,e)).state={name:"\u5b50\u7ec4\u4ef62",parentName:e.parentName},t.props.triggerRef&&t.props.triggerRef(Object(c.a)(t)),t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){}},{key:"getValuefromChild",value:function(){e.console.log("child1 method called by parent.")}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.parentName;return m.a.createElement("div",null,m.a.createElement("div",null,"I am ",t,", parent is ",a),m.a.createElement("div",{className:"m-t"},m.a.createElement(n.a,{type:"primary",onClick:this.btnClick1},"\u4fee\u6539\u5b50\u7ec4\u4ef61\u7684\u540d\u79f0")))}},{key:"btnClick1",value:function(){d.a.emit("changeFirstName","child1_2")}}]),o}(s.Component);t.a=p}).call(this,a(57))},248:function(e,t,a){e.exports=a(489)},277:function(e,t,a){},489:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),l=(a(253),a(14)),c=a(0),i=a.n(c),o=a(43),u=a(48),s=a(75),m=a(58),d=a(224),f="UPDATE_MODAL";function p(e){return{type:f,data:e}}var h={loading:!1,loadingPage:!1,loadingTable:!1,loadingForm:!1,loadingModal:!1,modalTip:"",pageWarn:""},b="CLEAN_USERLIST",y="UPDATE_USERLIST",g=[{key:0,userId:1,userName:"\u8bf8\u845b\u4eae",gender:0,role:0,age:26,tel:15023712789,createTime:"2019-06-16 10:10:10"},{key:1,userId:2,userName:"\u59b2\u5df1",gender:1,role:0,age:17,tel:123456789,createTime:"2019-06-16 10:10:10"},{key:2,userId:3,userName:"\u8d75\u4e91",gender:0,role:3,age:23,tel:13523712789,createTime:"2019-06-16 10:10:10"},{key:3,userId:4,userName:"\u7504\u59ec",gender:1,age:16,role:0,tel:17723712789,createTime:"2019-06-16 10:10:10"},{key:4,userId:5,userName:"\u5f20\u98de",gender:0,role:4,age:25,tel:19223712789,createTime:"2019-06-16 10:10:10"},{key:5,userId:6,userName:"\u8521\u6587\u59ec",gender:1,role:4,age:18,tel:15123712789,createTime:"2019-06-16 10:10:10"},{key:6,userId:7,userName:"\u963f\u8f72",gender:0,role:3,age:23,tel:111123712789,createTime:"2019-06-16 10:10:10"},{key:7,userId:8,userName:"\u5ae6\u5a25",gender:1,role:3,age:16,tel:11923712789,createTime:"2019-06-16 10:10:10"},{key:8,userId:9,userName:"\u5415\u5e03",gender:0,role:2,age:23,tel:11023712789,createTime:"2019-06-16 10:10:10"},{key:9,userId:10,userName:"\u8288\u6708",gender:1,role:4,age:19,tel:17923712789,createTime:"2019-06-16 10:10:10"},{key:10,userId:11,userName:"\u51ef",gender:0,role:5,age:23,tel:19923712789,createTime:"2019-06-16 10:10:10"},{key:11,userId:12,userName:"\u516c\u5b59\u79bb",gender:1,role:1,age:15,tel:19023712789,createTime:"2019-06-16 10:10:10"},{key:12,userId:13,userName:"\u5b59\u609f\u7a7a",gender:0,role:3,age:23,tel:18823712789,createTime:"2019-06-16 10:10:10"}];function v(e){return{type:y,data:e}}var E={content:[],pageSize:10,total:0},k=Object(s.c)({modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object.assign({},e,t.data);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=[];switch(t.type){case y:return t.data?(a=t.data.map(function(e,t){return Object.assign({key:t},e)}),Object.assign({},e,{content:a},{total:a.length})):e;case b:return Object.assign({},E);default:return e}},routing:m.routerReducer});var O,j=Object(m.routerMiddleware)(u.d),w=Object(s.a)(d.a,j)(s.d);O=w(k,{});var C=Object(m.syncHistoryWithStore)(u.d,O),N=a(243),_=a.n(N),x=(a(269),a(140),a(90)),R=(a(178),a(94)),T=(a(273),a(226)),I=a(23),S=a(24),D=a(20),U=a(25),M=a(26),V=a(15),P=(a(275),a(133));a(277);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var A=P.a.Content;var z=function(e){Object(U.a)(a,e);var t=L(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).handleTipClose=n.handleTipClose.bind(Object(D.a)(n)),n}return Object(S.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.modal,n=t.children,r=null;return a.pageWarn&&(r=i.a.createElement(T.a,{className:"m-b",message:a.pageWarn,type:"warning",closable:!0,onClose:function(){return e.handleTipClose({pageWarn:""})}})),i.a.createElement(x.a,{spinning:a.loading},i.a.createElement("div",{className:"app-layout"},i.a.createElement(R.a,{title:"\u63d0\u793a\u4fe1\u606f",visible:!!a.modalTip,onCancel:function(){return e.handleTipClose({modalTip:""})},footer:null},i.a.createElement("p",null,a.modalTip)),i.a.createElement(P.a,null,i.a.createElement(P.a,null,i.a.createElement(A,{style:{padding:24,background:"#fff"}},r,n)))))}},{key:"handleTipClose",value:function(e){(0,this.props.dispatch)(p(e))}}]),a}(c.Component),F=Object(o.b)(function(e){return{modal:e.modal}})(z),W=(a(54),a(17)),H=(a(192),a(9));function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var G=function(e){Object(U.a)(a,e);var t=B(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).handleBackClick=n.handleBackClick.bind(Object(D.a)(n)),n}return Object(S.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"app-info"},i.a.createElement("h1",{className:"app-info-title"},i.a.createElement(H.a,{type:"frown",style:{marginRight:5}}),"\u6211\u4eec\u627e\u4e0d\u5230\u8fd9\u4e2a\u9875\u9762"),i.a.createElement("div",{className:"app-info-msg"},"\u975e\u5e38\u62b1\u6b49,\u6211\u4eec\u6682\u65f6\u65e0\u6cd5\u63d0\u4f9b\u8fd9\u4e2a\u9875\u9762\u7684\u8bbf\u95ee."),i.a.createElement("div",{className:"app-info-btn"},i.a.createElement(W.a,{type:"primary",size:"large",icon:"left-circle-o",onClick:this.handleBackClick},"\u8fd4\u56de")))}},{key:"handleBackClick",value:function(){(0,this.props.dispatch)(Object(m.goBack)())}}]),a}(c.Component),q=Object(o.b)()(G),X=(a(217),a(130)),J=(a(491),a(245)),Y=(a(332),a(230)),$=(a(158),a(39)),K=(a(193),a(132)),Q=(a(112),a(38));function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var ee=Q.a.Option,te=function(e){Object(U.a)(a,e);var t=Z(a);function a(e){var n;return Object(I.a)(this,a),n=t.call(this,e),function(e){var t={watermark_txt:"text",watermark_x:20,watermark_y:20,watermark_rows:20,watermark_cols:20,watermark_x_space:100,watermark_y_space:50,watermark_color:"#aaa",watermark_alpha:.4,watermark_fontsize:"15px",watermark_font:"\u5fae\u8f6f\u96c5\u9ed1",watermark_width:210,watermark_height:80,watermark_angle:15};Object.assign(t,e);var a,n,r=document.createDocumentFragment(),l=Math.max(document.body.scrollWidth,document.body.clientWidth),c=l-.015*l,i=Math.max(document.body.scrollHeight,document.body.clientHeight)+450;(0===t.watermark_cols||parseInt(t.watermark_x+t.watermark_width*t.watermark_cols+t.watermark_x_space*(t.watermark_cols-1))>c)&&(t.watermark_cols=parseInt((c-t.watermark_x+t.watermark_x_space)/(t.watermark_width+t.watermark_x_space)),t.watermark_x_space=parseInt((c-t.watermark_x-t.watermark_width*t.watermark_cols)/(t.watermark_cols-1))),(0===t.watermark_rows||parseInt(t.watermark_y+t.watermark_height*t.watermark_rows+t.watermark_y_space*(t.watermark_rows-1))>i)&&(t.watermark_rows=parseInt((t.watermark_y_space+i-t.watermark_y)/(t.watermark_height+t.watermark_y_space)),t.watermark_y_space=parseInt((i-t.watermark_y-t.watermark_height*t.watermark_rows)/(t.watermark_rows-1)));for(var o=0;o<t.watermark_rows;o++){n=t.watermark_y+(t.watermark_y_space+t.watermark_height)*o;for(var u=0;u<t.watermark_cols;u++){a=t.watermark_x+(t.watermark_width+t.watermark_x_space)*u;var s=document.createElement("div");s.id="mask_div"+o+u,s.className="mask_div";var m=document.createElement("div");m.appendChild(document.createTextNode(t.watermark_txt0));var d=document.createElement("div");d.appendChild(document.createTextNode(t.watermark_txt1));var f=document.createElement("div");f.appendChild(document.createTextNode(t.watermark_txt2)),t.watermark_txt0&&s.appendChild(m),t.watermark_txt1&&s.appendChild(d),t.watermark_txt2&&s.appendChild(f),s.style.webkitTransform="rotate(-"+t.watermark_angle+"deg)",s.style.MozTransform="rotate(-"+t.watermark_angle+"deg)",s.style.msTransform="rotate(-"+t.watermark_angle+"deg)",s.style.OTransform="rotate(-"+t.watermark_angle+"deg)",s.style.transform="rotate(-"+t.watermark_angle+"deg)",s.style.visibility="",s.style.position="absolute",s.style.left=a+"px",s.style.top=n+"px",s.style.overflow="hidden",s.style.zIndex="9999",s.style.pointerEvents="none",s.style.opacity=t.watermark_alpha,s.style.fontSize=t.watermark_fontsize,s.style.fontFamily=t.watermark_font,s.style.color=t.watermark_color,s.style.textAlign="center",s.style.width=t.watermark_width+"px",s.style.height=t.watermark_height+"px",s.style.display="block",r.appendChild(s)}}document.body.appendChild(r)}({watermark_txt0:"admin ",watermark_txt2:(new Date).toLocaleString()}),n}return Object(S.a)(a,[{key:"render",value:function(){return i.a.createElement($.a,{style:{marginTop:32}},i.a.createElement($.a.Item,{label:"\u6570\u5b57\u8f93\u5165\u6846",labelCol:{span:8},wrapperCol:{span:8}},i.a.createElement(K.a,{min:1,max:10,defaultValue:3}),i.a.createElement("span",{className:"ant-form-text"}," \u53f0\u673a\u5668"),i.a.createElement("a",{href:"https://ant.design"},"\u94fe\u63a5\u6587\u5b57")),i.a.createElement($.a.Item,{label:"\u5f00\u5173",labelCol:{span:8},wrapperCol:{span:8}},i.a.createElement(Y.a,{defaultChecked:!0})),i.a.createElement($.a.Item,{label:"\u6ed1\u52a8\u8f93\u5165\u6761",labelCol:{span:8},wrapperCol:{span:8}},i.a.createElement(J.a,{defaultValue:70})),i.a.createElement($.a.Item,{label:"\u9009\u62e9\u5668",labelCol:{span:8},wrapperCol:{span:8}},i.a.createElement(Q.a,{defaultValue:"lucy",style:{width:192}},i.a.createElement(ee,{value:"jack"},"jack"),i.a.createElement(ee,{value:"lucy"},"lucy"),i.a.createElement(ee,{value:"disabled",disabled:!0},"disabled"),i.a.createElement(ee,{value:"yiminghe"},"yiminghe"))),i.a.createElement($.a.Item,{label:"\u65e5\u671f\u9009\u62e9\u6846",labelCol:{span:8},wrapperCol:{span:8}},i.a.createElement(X.a,null)),i.a.createElement($.a.Item,{wrapperCol:{span:8,offset:8}},i.a.createElement(W.a,{type:"primary",htmlType:"submit"},"\u786e\u5b9a"),i.a.createElement(W.a,{style:{marginLeft:8}},"\u53d6\u6d88")))}}]),a}(c.Component),ae=(a(100),a(28)),ne=(a(118),a(33)),re=(a(157),a(59)),le=a(13),ce=a.n(le),ie="/client",oe={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}};function ue(e){return e.location.query||{}}function se(e){return Object.keys(e).map(function(t){return{text:e[t],value:t}})}function me(e){var t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate(),n=e.getHours()<10?"0"+e.getHours():e.getHours(),r=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),l=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return e.getFullYear()+"-"+t+"-"+a+" "+n+":"+r+":"+l}var de=a(67),fe=a.n(de);function pe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var he=$.a.Item,be=Q.a.Option,ye=X.a.RangePicker,ge=function(e){Object(U.a)(a,e);var t=pe(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).state={moreOption:!1},n.handleSubmit=n.handleSubmit.bind(Object(D.a)(n)),n}return Object(S.a)(a,[{key:"handleSubmit",value:function(e){var t=this.props,a=t.onSubmit,n=t.form;e&&e.preventDefault(),n.validateFields(function(e,t){e||a(t)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,n=t.defaultValue,r=a.getFieldDecorator,l=this.state.moreOption;return i.a.createElement($.a,{onSubmit:this.handleSubmit,className:"user-search-group"},i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:8},i.a.createElement(he,Object.assign({label:"\u7528\u6237ID"},oe),r("userId",{initialValue:n.userId?n.userId:""})(i.a.createElement(re.a,{allowClear:!0})))),i.a.createElement(ne.a,{span:8},i.a.createElement(he,Object.assign({label:"\u7528\u6237\u6635\u79f0"},oe),r("userName",{initialValue:n.userName?n.userName:""})(i.a.createElement(re.a,{allowClear:!0})))),i.a.createElement(ne.a,{span:8},i.a.createElement(he,Object.assign({label:"\u6027\u522b"},oe),r("gender",{initialValue:n.gender?n.gender:""})(i.a.createElement(Q.a,{allowClear:!0},i.a.createElement(be,{value:""},"\u5168\u90e8"),se(fe.a.gender).map(function(e,t){return i.a.createElement(be,{value:e.value,key:t},e.text)})))))),i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:8},i.a.createElement(he,Object.assign({label:"\u89d2\u8272"},oe),r("role",{initialValue:n.role?n.role:""})(i.a.createElement(Q.a,{allowClear:!0},i.a.createElement(be,{value:""},"\u5168\u90e8"),se(fe.a.roles).map(function(e,t){return i.a.createElement(be,{value:e.value,key:t},e.text)}))))),i.a.createElement(ne.a,{span:8},i.a.createElement(he,Object.assign({label:"\u5e74\u9f84"},oe),r("age",{initialValue:n.age?n.age:""})(i.a.createElement(re.a,{allowClear:!0})))),i.a.createElement(ne.a,{span:8},i.a.createElement(he,Object.assign({label:"\u624b\u673a\u53f7"},oe),r("tel",{initialValue:n.tel?n.tel:""})(i.a.createElement(re.a,{allowClear:!0}))))),l?i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:8},i.a.createElement(he,Object.assign({label:"\u521b\u5efa\u65f6\u95f4"},oe),r("createTime",{initialValue:n.createTime?n.createTime:""})(i.a.createElement(ye,{className:"wd-ten-percent",allowClear:!0,showTime:{hideDisabledOptions:!0,defaultValue:[ce()("00:00:00","HH:mm:ss"),ce()("23:59:59","HH:mm:ss")]}}))))):null,i.a.createElement(ae.a,null,i.a.createElement("div",{className:"pull-right"},i.a.createElement(W.a,{className:"m-r-sm",onClick:function(){e.setState({moreOption:!l})}},i.a.createElement("span",{className:"p-r-sm"},"\u66f4\u591a\u7b5b\u9009\u6761\u4ef6"),l?i.a.createElement(H.a,{type:"up"}):i.a.createElement(H.a,{type:"down"})),i.a.createElement(W.a,{className:"m-l",type:"primary",htmlType:"submit",loading:!1},"\u67e5\u8be2"))))}}]),a}(c.Component),ve=$.a.create()(ge);function Ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var ke=$.a.Item,Oe=Q.a.Option,je=function(e){Object(U.a)(a,e);var t=Ee(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(D.a)(n)),n}return Object(S.a)(a,[{key:"handleSubmit",value:function(e){var t=this.props,a=t.form,n=t.onSubmit;e&&e.preventDefault(),a.validateFields(function(e,t){e||n(t)})}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.onCloseModal,n=e.userInfo,r=t.getFieldDecorator;return i.a.createElement($.a,{onSubmit:this.handleSubmit},n&&n.userId?i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:24},i.a.createElement(ke,Object.assign({label:"\u7528\u6237Id"},oe),r("userId",{rules:[{required:!0,message:"\u7528\u6237Id\u4e0d\u80fd\u4e3a\u7a7a\uff01"}],initialValue:n&&n.userId||""})(i.a.createElement(re.a,{disabled:!0}))))):null,i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:24},i.a.createElement(ke,Object.assign({label:"\u6635\u79f0"},oe),r("userName",{rules:[{required:!0,message:"\u6635\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01"}],initialValue:n&&n.userName||""})(i.a.createElement(re.a,null))))),i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:24},i.a.createElement(ke,Object.assign({label:"\u6027\u522b"},oe),r("gender",{initialValue:n&&n.gender>=0?n.gender:""})(i.a.createElement(Q.a,null,i.a.createElement(Oe,{value:""},"\u8bf7\u9009\u62e9"),i.a.createElement(Oe,{value:0},"\u7537"),i.a.createElement(Oe,{value:1},"\u5973")))))),i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:24},i.a.createElement(ke,Object.assign({label:"\u89d2\u8272"},oe),r("role",{initialValue:(n&&n.role)>=0?n.role.toString():""})(i.a.createElement(Q.a,null,i.a.createElement(Oe,{value:""},"\u8bf7\u9009\u62e9"),se(fe.a.roles).map(function(e,t){return i.a.createElement(Oe,{value:e.value,key:t},e.text)})))))),i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:24},i.a.createElement(ke,Object.assign({label:"\u5e74\u9f84"},oe),r("age",{initialValue:n&&n.age||0})(i.a.createElement(K.a,{min:0,max:150,className:"wd-ten-percent"}))))),i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:24},i.a.createElement(ke,Object.assign({label:"\u624b\u673a\u53f7"},oe),r("tel",{initialValue:n&&n.tel||""})(i.a.createElement(re.a,null))))),i.a.createElement(ae.a,{className:"m-b"},i.a.createElement("div",{className:"text-right"},i.a.createElement(W.a,{className:"m-l",onClick:function(){a()}},"\u53d6\u6d88"),i.a.createElement(W.a,{className:"m-l",type:"primary",htmlType:"submit"},"\u786e\u5b9a"))))}}]),a}(c.Component),we=$.a.create()(je),Ce=(a(490),a(244)),Ne=(a(430),a(234));function _e(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var xe=function(e){Object(U.a)(a,e);var t=_e(a);function a(e){return Object(I.a)(this,a),t.call(this,e)}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleShowModal,a=e.handleDelUser,n=[{title:"\u5e8f\u53f7",dataIndex:"id",key:"id",render:function(e,t,a){return i.a.createElement("span",null,a+1)}},{title:"\u7528\u6237\u6635\u79f0",dataIndex:"userName",key:"userName"},{title:"\u6027\u522b",dataIndex:"gender",key:"gender",render:function(e){return fe.a.gender[e]}},{title:"\u89d2\u8272",dataIndex:"role",key:"role",render:function(e){return fe.a.roles[e]}},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u624b\u673a\u53f7",dataIndex:"tel",key:"tel"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createTime",key:"createTime"},{title:"\u64cd\u4f5c",key:"action",render:function(e,n){return i.a.createElement("span",null,i.a.createElement("a",{href:"javacript:void(0);",rel:"noopener noreferrer",onClick:function(){t("editUser",n)}},"\u7f16\u8f91 ",n.name),i.a.createElement(Ne.a,{type:"vertical"}),i.a.createElement("a",{href:"javacript:void(0);",rel:"noopener noreferrer",onClick:function(){a(n)}},"\u5220\u9664"))}}];return i.a.createElement("div",null,i.a.createElement(Ce.a,Object.assign({columns:n},this.props)))}}]),a}(c.Component),Re=Object(o.b)()(xe);function Te(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var Ie=function(e){Object(U.a)(a,e);var t=Te(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).state={modalType:"",curUser:{}},n.handleGetList=n.handleGetList.bind(Object(D.a)(n)),n.handleSearch=n.handleSearch.bind(Object(D.a)(n)),n.handleShowModal=n.handleShowModal.bind(Object(D.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(D.a)(n)),n.handleAddUser=n.handleAddUser.bind(Object(D.a)(n)),n.handleUpdateUser=n.handleUpdateUser.bind(Object(D.a)(n)),n.handleDelUser=n.handleDelUser.bind(Object(D.a)(n)),n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.handleGetList()}},{key:"componentWillUnmount",value:function(){(0,this.props.dispatch)({type:b})}},{key:"handleGetList",value:function(e){var t,a=this.props,n=a.dispatch,r=a.routing,l=Object.assign({},ue(r),e);Object.keys(l).forEach(function(e){"undefined"!==l[e]&&void 0!==l[e]&&null!==l[e]&&""!==l[e]&&0!==l[e].length||delete l[e]}),n(function(e){return function(t){t(p({loadingTable:!0}));var a=e,n=a.createTime,r=n&&n[0]?n[0]:"",l=n&&n[1]?n[1]:"";delete a.pageNum,delete a.page,delete a.createTime;var c=function(e,t){return t.filter(function(t){return Object.keys(e).every(function(a){return String(t[a]).toLowerCase().includes(String(e[a]).trim().toLowerCase())})})}(a,g);""!==r&&""!==l&&(c=c.filter(function(e){return Date.parse(e.createTime.replace(/-/g,"/"))>=r&&Date.parse(e.createTime.replace(/-/g,"/"))<=l})),t(v(c)),t(p({loadingTable:!1}))}}(l)),function(e){var t=Object.prototype.hasOwnProperty;if(null==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;if("object"!==typeof e)return!0;for(var a in e)if(t.call(e,a))return!1;return!0}(e)||n(Object(m.push)((t="/user/?"+function(e){var t="";for(var a in e)t+=a+"="+encodeURIComponent(e[a])+"&";return t=t.replace(/&$/,"")}(l),/^\//.test(t)||(t="/"+t),ie+t)))}},{key:"handleSearch",value:function(e){this.handleGetList(Object.assign({},e,{page:1,pageNum:10}))}},{key:"handleShowModal",value:function(e,t){this.setState({modalType:e,curUser:t})}},{key:"handleCloseModal",value:function(){this.setState({modalType:""})}},{key:"handleAddUser",value:function(e){var t=this,a=this.props.dispatch,n=e,r=me(new Date);n.createTime=r,a(function(e,t){return function(a){a(p({loadingTable:!0}));var n=g;e.key=n.length,e.userId=n.length+1,n.unshift(e),a(v(n)),a(p({loadingTable:!1})),t&&t()}}(n,function(){t.setState({modalType:""},function(){t.handleGetList()})}))}},{key:"handleUpdateUser",value:function(e){var t=this,a=this.props.dispatch,n=e,r=me(new Date);n.createTime=r,a(function(e,t){return function(a){a(p({loadingTable:!0}));var n=g.filter(function(t){return t.userId!==e.userId}),r=g.filter(function(t){return t.userId===e.userId});r=Object.assign({},r,e),n.unshift(r),g=n,a(v(n)),a(p({loadingTable:!1})),t&&t()}}(n,function(){t.setState({modalType:""},function(){t.handleGetList()})}))}},{key:"handleDelUser",value:function(e){var t=this,a=this.props.dispatch,n=e,r=function(){t.setState({modalType:""},function(){t.handleGetList()})};R.a.confirm({title:"\u5220\u9664\u786e\u8ba4",content:"\u786e\u8ba4\u8981\u5220\u9664\u5417?",onOk:function(){a(function(e,t){return function(a){a(p({loadingTable:!0}));var n=g.filter(function(t){return t.userId!==e.userId});g=n,a(v(n)),a(p({loadingTable:!1})),t&&t()}}(n,r))}})}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.routing,r=a.modal,l=a.users,c=r.loadingForm,o=this.state,u=o.modalType,s=o.curUser;return i.a.createElement(x.a,{spinning:c},i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:24},i.a.createElement("h1",{className:"pull-left"},"\u82f1\u96c4\u5217\u8868"),i.a.createElement("div",{className:"text-right"},i.a.createElement(W.a,{type:"primary",ghost:!0,className:"m-l",onClick:function(){t.handleShowModal("addUser")}},"\u65b0\u589e\u82f1\u96c4")))),i.a.createElement(ve,{onSubmit:this.handleSearch,defaultValue:ue(n)}),i.a.createElement(Re,{dataSource:l.content,handleShowModal:this.handleShowModal,handleDelUser:this.handleDelUser,pagination:(e=l,{total:e.total,pageSize:e.pageSize||10,showSizeChanger:!1,showTotal:function(e){return"\u5171\u6709 ".concat(e," \u6761\u8bb0\u5f55")},pageSizeOptions:["10","50","100"]})}),i.a.createElement(R.a,{visible:"addUser"===u,title:"\u65b0\u589e\u82f1\u96c4",width:700,footer:null,onCancel:this.handleCloseModal},"addUser"===u?i.a.createElement(we,{onCloseModal:this.handleCloseModal,onSubmit:this.handleAddUser}):null),i.a.createElement(R.a,{visible:"editUser"===u,title:"\u7f16\u8f91\u82f1\u96c4",width:700,footer:null,onCancel:this.handleCloseModal},"editUser"===u?i.a.createElement(we,{onCloseModal:this.handleCloseModal,onSubmit:this.handleUpdateUser,userInfo:s}):null))}}]),a}(c.Component),Se=Object(o.b)(function(e,t){return{modal:e.modal,routing:t,users:e.user||[]}})(Ie);function De(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var Ue=[{title:"\u5e8f\u53f7",dataIndex:"id",key:"id"},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u6027\u522b",dataIndex:"gender",key:"gender"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u73ed\u7ea7",dataIndex:["grade","class"],col:2,key:"grade-class"},{title:"\u624b\u673a\u53f7",dataIndex:"tel",key:"tel"},{title:"\u5165\u5b66\u65f6\u95f4",dataIndex:"schoolTime",key:"schoolTime"}],Me=[{key:"1",id:"1",name:"\u5f20\u4e09",gender:"\u7537",age:32,grade:"\u521d\u4e00",class:"3\u73ed",tel:18015678679,schoolTime:"2019-11-11"},{key:"2",id:"2",name:"\u674e\u56db",gender:"\u5973",age:42,grade:"\u521d\u4e00",class:"4\u73ed",tel:18015678679,schoolTime:"2019-11-11"},{key:"3",id:"3",name:"\u738b\u4e94",gender:"\u7537",age:42,grade:"\u521d\u4e8c",class:"1\u73ed",tel:18015678679,schoolTime:"2019-11-11"},{key:"4",id:"4",name:"\u8d75\u516d",gender:"\u5973",age:42,grade:"\u521d\u4e8c",class:"2\u73ed",schoolTime:"2019-11-11"},{key:"5",id:"5",name:"\u7530\u4e03",gender:"\u5973",age:42,grade:"\u521d\u4e09",class:"1\u73ed",tel:18015678679}],Ve=function(e){Object(U.a)(a,e);var t=De(a);function a(e){return Object(I.a)(this,a),t.call(this,e)}return Object(S.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"custom-table"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,Ue.map(function(e){return i.a.createElement("th",{key:e.key,colSpan:e.col||1},e.title)}))),i.a.createElement("tbody",null,Me.map(function(e){return i.a.createElement("tr",{key:e.key},Ue.map(function(t){if(Array.isArray(t.dataIndex)){var a=[];return t.dataIndex.map(function(t){return a.push(i.a.createElement("td",{key:t},e[t]||"")),!0}),a}return i.a.createElement("td",{key:t.dataIndex},e[t.dataIndex]||"")}))}))))}}]),a}(c.Component),Pe=Object(o.b)()(Ve);function Le(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var Ae=function(e){Object(U.a)(a,e);var t=Le(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).state={modalType:"",curUser:{}},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(ae.a,{className:"m-b"},i.a.createElement(ne.a,{span:24},i.a.createElement("h1",{className:"pull-left"},"\u5b66\u751f\u5217\u8868"))),i.a.createElement(Pe,null),i.a.createElement("div",{className:"custom-table"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u5e8f\u53f7"),i.a.createElement("th",null,"\u59d3\u540d"),i.a.createElement("th",null,"\u6027\u522b"),i.a.createElement("th",null,"\u5e74\u9f84"),i.a.createElement("th",{colSpan:"2"},"\u73ed\u7ea7"),i.a.createElement("th",null,"\u624b\u673a\u53f7"),i.a.createElement("th",null,"\u5165\u5b66\u65f6\u95f4"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"1"),i.a.createElement("td",null,"\u5f20\u4e09"),i.a.createElement("td",null,"\u7537"),i.a.createElement("td",null,"18"),i.a.createElement("td",null,"\u5927\u4e00"),i.a.createElement("td",null,"3\u73ed"),i.a.createElement("td",null,"18015678679"),i.a.createElement("td",null,"2019-11-11")),i.a.createElement("tr",null,i.a.createElement("td",null,"2"),i.a.createElement("td",null,"\u674e\u56db"),i.a.createElement("td",null,"\u7537"),i.a.createElement("td",null,"18"),i.a.createElement("td",null,"\u5927\u4e00"),i.a.createElement("td",null,"3\u73ed"),i.a.createElement("td",null,"18015678679"),i.a.createElement("td",null,"2019-11-11")),i.a.createElement("tr",null,i.a.createElement("td",null,"3"),i.a.createElement("td",null,"\u738b\u4e94"),i.a.createElement("td",null,"\u7537"),i.a.createElement("td",null,"18"),i.a.createElement("td",null,"\u5927\u4e00"),i.a.createElement("td",null,"3\u73ed"),i.a.createElement("td",null),i.a.createElement("td",null,"2019-11-11")),i.a.createElement("tr",null,i.a.createElement("td",null,"4"),i.a.createElement("td",null,"\u8d75\u516d"),i.a.createElement("td",null,"\u7537"),i.a.createElement("td",null,"18"),i.a.createElement("td",null,"\u5927\u4e00"),i.a.createElement("td",null,"3\u73ed"),i.a.createElement("td",null,"18015678679"),i.a.createElement("td",null))))))}}]),a}(c.Component),ze=Object(o.b)()(Ae),Fe=a(236),We=a(242),He=a.n(We);function Be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(V.a)(e);if(t){var r=Object(V.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(M.a)(this,a)}}var Ge=function(e){Object(U.a)(a,e);var t=Be(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).state={data:{id:0,label:"XXX\u80a1\u4efd\u6709\u9650\u516c\u53f8",children:[{id:1,label:"\u6280\u672f\u90e8",children:[{id:4,label:"\u540e\u7aef\u5de5\u7a0b\u5e08"},{id:5,label:"\u524d\u7aef\u5de5\u7a0b\u5e08"},{id:6,label:"\u8fd0\u7ef4\u5de5\u7a0b\u5e08"}]},{id:2,label:"\u4eba\u4e8b\u90e8"},{id:3,label:"\u9500\u552e\u90e8"}]},horizontal:!1,collapsable:!0,expandAll:!0,labelClassName:"bg-white"},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.horizontal,n=e.collapsable,r=e.expandAll,l=e.labelClassName;return i.a.createElement("div",{className:"m-t-lg text-center"},i.a.createElement(He.a,{data:t,horizontal:a,collapsable:n,labelClassName:l,expandAll:r,renderContent:function(e){return e.label}}))}}]),a}(c.Component),qe=i.a.createElement(l.a,{locale:_.a},i.a.createElement(o.a,{store:O},i.a.createElement(u.c,{history:C},i.a.createElement(u.b,{path:"client",component:F},i.a.createElement(u.a,{component:q}),i.a.createElement(u.b,{path:"demo",component:te}),i.a.createElement(u.b,{path:"user",component:Se}),i.a.createElement(u.b,{path:"custom-list",component:ze}),i.a.createElement(u.b,{path:"parent",component:Fe.a}),i.a.createElement(u.b,{path:"org-tree",component:Ge}),i.a.createElement(u.b,{path:"*",component:q})))));r.a.render(qe,document.getElementById("root"))},67:function(e,t){t.gender={0:"\u7537",1:"\u5973"},t.roles={0:"\u6cd5\u5e08",1:"\u5c04\u624b",2:"\u5766\u514b",3:"\u523a\u5ba2",4:"\u8f85\u52a9",5:"\u6218\u58eb"}}},[[248,1,2]]]);
//# sourceMappingURL=main.54a25507.chunk.js.map