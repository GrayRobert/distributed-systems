(function(e){function t(t){for(var n,i,r=t[0],c=t[1],l=t[2],u=0,g=[];u<r.length;u++)i=r[u],o[i]&&g.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(g.length)g.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},o={1:0},a=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;a.push([3,0]),s()})({3:function(e,t,s){e.exports=s("Vtdi")},"O+TD":function(e,t,s){},QvMW:function(e,t,s){},Vtdi:function(e,t,s){"use strict";s.r(t);s("yt8O"),s("VRzm");var n=s("Kw5r"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("Chat")],1)},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"column"},["Connected"!=e.connected?s("div",{staticClass:"connecting",style:{color:e.connectingErrorColour}},[s("span",{domProps:{innerHTML:e._s(e.connected)}})]):e._e(),1==e.showUserPage?s("div",{staticClass:"chat-container"},[s("h1",{staticClass:"title"},[e._v("Type your username")]),s("form",{attrs:{id:"usernameForm",name:"usernameForm"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",id:"name",placeholder:"Username",autocomplete:"off"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),s("button",{staticClass:"accent username-submit",on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v("Start Chatting")])])]):s("div",{staticClass:"chat-container",attrs:{id:"chat-page"}},[s("ul",{attrs:{id:"messageArea"}},[e._l(e.orderedMessages,function(t){return[s("li",{key:t.timeStamp,class:t.cssClass},["CHAT"===t.type?s("i",{style:"background-color: "+t.avatarColor},[e._v(e._s(t.sender[0]))]):e._e(),"CHAT"===t.type?s("span",[e._v(e._s(t.sender))]):e._e(),s("p",[e._v(e._s(t.content))]),s("span",{staticClass:"time"},[e._v(e._s(e._f("moment")(t.sent,"dddd, MMMM Do YYYY HH:mm:ss"))+" "),"CHAT"===t.type?s("span",{staticClass:"tick-green"},[e._v("✓")]):e._e()])])]}),e._l(e.filteredUnsentMessages,function(t){return[s("li",{key:t.timeStamp,class:t.cssClass},["CHAT"===t.type?s("i",{style:"background-color: "+t.avatarColor},[e._v(e._s(t.sender[0]))]):e._e(),"CHAT"===t.type?s("span",[e._v(e._s(t.sender))]):e._e(),s("p",[e._v(e._s(t.content))]),s("span",{staticClass:"time"},[e._v(e._s(e._f("moment")(t.sent,"dddd, MMMM Do YYYY HH:mm:ss"))+" "),"CHAT"===t.type?s("span",{staticClass:"tick-orange"},[e._v("✓")]):e._e()])])]})],2)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"column"},[0==e.showUserPage?s("div",{staticClass:"messageInput"},[s("form",{attrs:{id:"messageForm",name:"messageForm"}},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.messageBody,expression:"messageBody"}],attrs:{type:"text",id:"message",placeholder:"Type a message...",autocomplete:"off"},domProps:{value:e.messageBody},on:{input:function(t){t.target.composing||(e.messageBody=t.target.value)}}}),s("button",{staticClass:"primary",on:{click:function(t){return t.preventDefault(),e.send(t)}}},[e._v("Send")])])])]):e._e()])])])},r=[],c=(s("rGqo"),s("RW0V"),s("a1Th"),s("Vd3H"),s("7nxj")),l=s.n(c),d=s("LvDl"),u=s.n(d),g=s("aCH8"),m=s.n(g),h="ws://chatappus.com:8443/chat-socket",p="/app/chat.sendMessage",f="/topic/public",v="/app/chat.addUser",C="/app/chat.getMissedMessages",y=["#800080","#B445FE","#A55FEB","#8678E9","#4985D6","#2FAACE","#F900F9","#DD75DD","#BD5CFE","#AE70ED"];function b(e){for(var t=0,s=0;s<e.length;s++)t=10*t+e.charCodeAt(s);var n=Math.abs(t%y.length);return y[n]}Array.prototype.inArray=function(e){for(var t=0;t<this.length;t++)if(e(this[t]))return!0;return!1},Array.prototype.pushIfNotExist=function(e,t){this.inArray(t)||this.push(e)};var M={name:"chat",data:function(){return{userName:null,connected:"Connected",connectingErrorColour:"green",showUserPage:!0,socket:null,stompClient:null,messages:[],resendMessages:[],messageBody:"",isConnected:!1,bottom:"bottom"}},computed:{orderedMessages:function(){var e=u.a.orderBy(this.messages,"sent","ASC");return e.sort(function(e,t){return t.lastMessageId&&e.lastMessageId&&t.lastMessageId==e.lastMessageId?0:t.lastMessageId&&t.lastMessageId>e.id?-1:t.lastMessageId&&t.lastMessageId<e.id?1:t.id>e.id?-1:t.id<e.id?1:void 0}),e},orderedResendMessages:function(){return u.a.orderBy(this.resendMessages,"sent","ASC")},filteredUnsentMessages:function(){return this.isConnected?null:u.a.orderBy(this.resendMessages,"sent","ASC")},getLastChatMessage:function(){var e=u.a.map(this.orderedMessages,function(e){if("CHAT"==e.type)return e});return e=u.a.without(e,void 0),u.a.last(e)}},created:function(){this.connectToAPI()},methods:{send:function(){if(this.messageBody){console.log("Last message is: "+this.getLastChatMessage.id);var e={sender:this.userName,content:this.messageBody,sent:new Date,type:"CHAT",hash:"",lastMessageId:this.getLastChatMessage.id},t=m()(e.sender+e.content+e.sent.toString()+e.type+Math.random());e.hash=t;var s=this.stompClient.begin();this.stompClient.send(p,{transaction:s.id},JSON.stringify(e)),console.log("sending message "+this.messageBody),this.isConnected?(s.commit(),console.log("Transaction commited, with id: "+s.id)):(s.abort(),console.log("Transaction aborted, with id: "+s.id),e.cssClass="chat-message",e.avatarColor=b(e.sender),this.resendMessages.push(e)),this.messageBody=null,window.scrollTo(0,document.body.scrollHeight+1e3)}},reSendMessages:function(){if(this.isConnected&&this.resendMessages.length>0){console.log("Retrying Messages: ");var e=this.orderedResendMessages;try{for(var t=Object.keys(e),s=0;s<t.length;s++){var n=t[s],o=this.stompClient.begin();console.log("Re-sending messages: "+n,e[n]);var a=e[n];a.reSent=new Date,this.stompClient.send(p,{transaction:o.id},JSON.stringify(a)),this.isConnected?(console.log("Transaction commited, with id: "+o.id),o.commit()):(console.log("Transaction aborted, with id: "+o.id),o.abort())}this.resendMessages=[]}catch(e){console.log("Could not re-send messages: "+e)}}},getMissedMessages:function(){var e=this.stompClient.begin();this.stompClient.send(C,{transaction:e.id},JSON.stringify({sender:this.userName,type:"MISSED_MESSAGES",sent:new Date})),this.isConnected?(console.log("Transaction commited, with id: "+e.id),e.commit()):(console.log("Transaction aborted, with id: "+e.id),e.abort())},connectToAPI:function(){var e=this;if(!this.isConnected)try{this.stompClient=l.a.client(h),this.stompClient.heartbeat.outgoing=1e4,this.stompClient.heartbeat.incoming=1e4,this.stompClient.connect({},function(t){e.onConnected(t)},function(t){e.onError(t)}),this.stompClient.reconnect_delay=5e3}catch(e){console.log("Coundn't connect to API "+e)}},login:function(){var e=this.stompClient.begin();this.stompClient.send(v,{transaction:e.id},JSON.stringify({sender:this.userName,type:"JOIN",sent:new Date})),this.isConnected?(e.commit(),console.log("Transaction commited, with id: "+e.id)):(e.abort(),console.log("Transaction aborted, with id: "+e.id)),this.showUserPage=!1,this.getMissedMessages()},onConnected:function(e){var t=this;console.log("Connected Frame is: "+e),this.connected="Connected",this.isConnected=!0,this.reSendMessages(),null!=this.userName&&this.getMissedMessages(),this.stompClient.subscribe(f,function(e){t.onMessageReceived(e)})},onMessageReceived:function(e){var t=JSON.parse(e.body);"JOIN"===t.type?(t.content=t.sender+" joined!",t.cssClass="event-message"):"LEAVE"===t.type?(t.content=t.sender+" left!",t.cssClass="event-message"):(t.cssClass="chat-message",t.avatarColor=b(t.sender)),t.recipient===this.userName&&"TIME"===t.type&&(t.cssClass="event-message",this.messages.push(t)),t.recipient===this.userName&&"CHAT"===t.type?t.hash?this.messages.pushIfNotExist(t,function(e){return e.hash===t.hash}):this.messages.pushIfNotExist(t,function(e){return e.id===t.id}):null===t.recipient&&null!=t.content&&this.messages.push(t),window.scrollTo(0,document.body.scrollHeight+1e3)},onError:function(e){this.connected="Trying to establish connection to messaging server...",this.connectingErrorColour="red",console.log(e),this.isConnected=!1}}},_=M,w=(s("ot7r"),s("KHd+")),T=Object(w["a"])(_,i,r,!1,null,null,null),A=T.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navbar sticky-top box"},[s("ul",[s("li",{staticClass:"left"},[s("a",{attrs:{href:"#"}},[s("menu-icon",{attrs:{fillColor:"#FF0000"}})],1)]),e._m(0),s("li",{staticClass:"right"},[s("a",{attrs:{href:"#"}},[s("account-outline",{attrs:{fillColor:"#FF0000"}})],1)])])])},N=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"title"},[s("a",{attrs:{href:"#"}},[s("object",{staticStyle:{"vertical-align":"middle"},attrs:{data:"/img/icons/chatappus-379x349-transp.svg",type:"image/svg+xml",height:"30"}},[s("img",{attrs:{src:"yourfallback.jpg"}})]),s("span",[e._v("ChatAppUs")])])])}],E={name:"navbar"},O=E,I=(s("aSqk"),Object(w["a"])(O,S,N,!1,null,null,null)),k=I.exports,x={name:"app",components:{Navbar:k,Chat:A}},D=x,H=Object(w["a"])(D,o,a,!1,null,null,null),j=H.exports,F=s("lIOY");Object(F["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});s("1I2w");var B=s("QLpu"),P=s("l8+Y"),Y=s("Lq01"),J=s.n(Y);n["a"].component("menu-icon",B["a"]),n["a"].component("account-outline",P["a"]),n["a"].use(J.a),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)},el:"#app",components:{"menu-icon":B["a"],"account-outline":P["a"]}})},aSqk:function(e,t,s){"use strict";var n=s("QvMW"),o=s.n(n);o.a},ot7r:function(e,t,s){"use strict";var n=s("O+TD"),o=s.n(n);o.a}});
//# sourceMappingURL=app.2e3f7990.js.map