(function(e){function t(t){for(var s,a,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)a=i[p],o[a]&&d.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},o={1:0},r=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([3,0]),n()})({3:function(e,t,n){e.exports=n("Vtdi")},"O+TD":function(e,t,n){},QvMW:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("yt8O"),n("VRzm");var s=n("Kw5r"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Chat")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column"},["Connected"!=e.connected?n("div",{staticClass:"connecting",style:{color:e.connectingErrorColour}},[n("span",{domProps:{innerHTML:e._s(e.connected)}})]):e._e(),1==e.showUserPage?n("div",{staticClass:"chat-container"},[n("h1",{staticClass:"title"},[e._v("Type your username")]),n("form",{attrs:{id:"usernameForm",name:"usernameForm"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",id:"name",placeholder:"Username",autocomplete:"off"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),n("button",{staticClass:"accent username-submit",on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v("Start Chatting")])])]):n("div",{staticClass:"chat-container",attrs:{id:"chat-page"}},[n("ul",{attrs:{id:"messageArea"}},[e._l(e.messages,function(t){return[n("li",{key:t.timeStamp,class:t.cssClass},["CHAT"===t.type?n("i",{style:"background-color: "+t.avatarColor},[e._v(e._s(t.sender[0]))]):e._e(),n("span",[e._v(e._s(t.sender))]),n("p",[e._v(e._s(t.content))])])]})],2)])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[0==e.showUserPage?n("div",{staticClass:"messageInput"},[n("form",{attrs:{id:"messageForm",name:"messageForm"}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.messageBody,expression:"messageBody"}],attrs:{type:"text",id:"message",placeholder:"Type a message...",autocomplete:"off"},domProps:{value:e.messageBody},on:{input:function(t){t.target.composing||(e.messageBody=t.target.value)}}}),n("button",{staticClass:"primary",on:{click:function(t){return t.preventDefault(),e.send(t)}}},[e._v("Send")])])])]):e._e()])])])},i=[],c=n("zH15"),l=n.n(c),u=n("dNE1"),p=n.n(u),d="http://api.chatappus.com:8090/chat-socket",m="/app/chat.sendMessage",f="/topic/public",g="/app/chat.addUser",v=["#800080","#872187","#9A03FE","#892EE4","#3923D6","#2966B8","#23819C","#BF00BF","#BC2EBC","#A827FE","#9B4EE9","#6755E3","#2F74D0","#2897B7","#DB00DB","#D54FD5","#B445FE","#A55FEB","#8678E9","#4985D6","#2FAACE","#F900F9","#DD75DD","#BD5CFE","#AE70ED","#9588EC","#6094DB","#44B4D5"];function h(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n);var s=Math.abs(t%v.length);return v[s]}var C={name:"chat",data:function(){return{userName:null,connected:"Connected",connectingErrorColour:"green",showUserPage:!0,stompClient:null,messages:[]}},created:function(){var e=this,t=new l.a(d);this.stompClient=p.a.over(t),this.stompClient.connect({},function(t){e.onConnected(t)},function(t){e.onError(t)})},methods:{send:function(){if(console.log("sending message "+this.messageBody),this.messageBody&&this.stompClient){var e={sender:this.userName,content:this.messageBody,type:"CHAT"};this.stompClient.send(m,{},JSON.stringify(e)),this.messageBody=null}},login:function(){this.stompClient.send(g,{},JSON.stringify({sender:this.userName,type:"JOIN"})),this.showUserPage=!1},onConnected:function(e){var t=this;console.log(e),this.connected="Connected",this.stompClient.subscribe(f,function(e){t.onMessageReceived(e)})},onMessageReceived:function(e){var t=JSON.parse(e.body);"JOIN"===t.type?(t.content=t.sender+" joined!",t.cssClass="event-message"):"LEAVE"===t.type?(t.content=t.sender+" left!",t.cssClass="event-message"):(t.cssClass="chat-message",t.avatarColor=h(t.sender)),this.messages.push(t)},onError:function(e){this.connected="Could not connect to messaging server. Please <strong>refresh</strong> this page to try again!",this.connectingErrorColour="red",console.log(e)}}},y=C,b=(n("ot7r"),n("KHd+")),_=Object(b["a"])(y,a,i,!1,null,null,null),E=_.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar sticky-top box"},[n("ul",[n("li",{staticClass:"left"},[n("a",{attrs:{href:"#"}},[n("menu-icon",{attrs:{fillColor:"#FF0000"}})],1)]),e._m(0),n("li",{staticClass:"right"},[n("a",{attrs:{href:"#"}},[n("account-outline",{attrs:{fillColor:"#FF0000"}})],1)])])])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"title"},[n("a",{attrs:{href:"#"}},[n("object",{staticStyle:{"vertical-align":"middle"},attrs:{data:"/img/icons/chatappus-379x349-transp.svg",type:"image/svg+xml",height:"30"}},[n("img",{attrs:{src:"yourfallback.jpg"}})]),n("span",[e._v("ChatAppUs")])])])}],F={name:"navbar"},O=F,D=(n("aSqk"),Object(b["a"])(O,w,B,!1,null,null,null)),N=D.exports,j={name:"app",components:{Navbar:N,Chat:E}},x=j,k=Object(b["a"])(x,o,r,!1,null,null,null),A=k.exports,P=n("lIOY");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("1I2w");var S=n("QLpu"),M=n("l8+Y");s["a"].component("menu-icon",S["a"]),s["a"].component("account-outline",M["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(A)},el:"#app",components:{"menu-icon":S["a"],"account-outline":M["a"]}})},aSqk:function(e,t,n){"use strict";var s=n("QvMW"),o=n.n(s);o.a},ot7r:function(e,t,n){"use strict";var s=n("O+TD"),o=n.n(s);o.a}});
//# sourceMappingURL=app.9f85b78e.js.map