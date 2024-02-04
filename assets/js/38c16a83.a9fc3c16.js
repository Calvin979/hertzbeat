"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[39419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,g=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"alert_telegram",title:"Alert Telegram Bot Notification",sidebar_label:"Alert Telegram bot notification",keywords:["open source monitoring tool","open source alerter","open source Telegram bot notification"]},i=void 0,l={unversionedId:"help/alert_telegram",id:"version-v1.3.x/help/alert_telegram",title:"Alert Telegram Bot Notification",description:"Send an alarm message after the threshold is triggered, and notify the recipient through the Telegram robot.",source:"@site/versioned_docs/version-v1.3.x/help/alert_telegram.md",sourceDirName:"help",slug:"/help/alert_telegram",permalink:"/docs/v1.3.x/help/alert_telegram",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.3.x/help/alert_telegram.md",tags:[],version:"v1.3.x",frontMatter:{id:"alert_telegram",title:"Alert Telegram Bot Notification",sidebar_label:"Alert Telegram bot notification",keywords:["open source monitoring tool","open source alerter","open source Telegram bot notification"]},sidebar:"docs",previous:{title:"Alert Slack Webhook Notification",permalink:"/docs/v1.3.x/help/alert_slack"},next:{title:"Alert enterprise Wechat notification",permalink:"/docs/v1.3.x/help/alert_wework"}},s={},c=[{value:"Steps",id:"steps",level:2},{value:"Create a bot in Telegram, get Bot Token and UserId",id:"create-a-bot-in-telegram-get-bot-token-and-userid",level:3},{value:"Add an alarm notification person to HertzBeat, the notification method is Telegram Bot",id:"add-an-alarm-notification-person-to-hertzbeat-the-notification-method-is-telegram-bot",level:3},{value:"Telegram Bot Notification FAQ",id:"telegram-bot-notification-faq",level:3}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Send an alarm message after the threshold is triggered, and notify the recipient through the Telegram robot.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"create-a-bot-in-telegram-get-bot-token-and-userid"},"Create a bot in Telegram, get Bot Token and UserId"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://t.me/BotFather"},"@BotFather")," to create your own bot and get an access token ",(0,a.kt)("inlineCode",{parentName:"li"},"Token"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"telegram-bot",src:r(40893).Z,width:"497",height:"524"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Get the ",(0,a.kt)("inlineCode",{parentName:"li"},"User ID")," of the recipient")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use the recipient account you want to notify to send a message to the newly created Bot account"),",\nVisit ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.telegram.org/bot<TOKEN>/getUpdates"),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"use the Bot Token from the previous step to replace the <TOKEN>")),", and respond to the first in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Json")," data A ",(0,a.kt)("inlineCode",{parentName:"p"},"result.message.from.id")," value is the recipient's ",(0,a.kt)("inlineCode",{parentName:"p"},"User ID")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "ok": true,\n     "result": [\n         {\n             "update_id": 632299191,\n             "message": {\n                 "from":{\n                     "id": "User ID"\n                 },\n                 "chat":{\n                 },\n                 "date": 1673858065,\n                 "text": "111"\n             }\n         }\n     ]\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Record and save the ",(0,a.kt)("inlineCode",{parentName:"li"},"Token")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"User Id")," we got")),(0,a.kt)("h3",{id:"add-an-alarm-notification-person-to-hertzbeat-the-notification-method-is-telegram-bot"},"Add an alarm notification person to HertzBeat, the notification method is Telegram Bot"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u3010Alarm Notification\u3011->\u3010Add Recipient\u3011->\u3010Select Telegram Robot Notification Method\u3011->\u3010Set Robot Token and UserId\u3011-> \u3010OK\u3011"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:r(8248).Z,width:"3804",height:"1160"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f ","[Add notification strategy]"," -> ","[Associate the recipient just set]"," -> ","[OK]"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note \u26a0\ufe0f Adding a new recipient does not mean that it has taken effect and can receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, specify which messages are sent to which recipients"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:r(89906).Z,width:"3778",height:"1284"})),(0,a.kt)("h3",{id:"telegram-bot-notification-faq"},"Telegram Bot Notification FAQ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Telegram did not receive the robot warning notification")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please check whether the alarm information has been triggered in the alarm center",(0,a.kt)("br",{parentName:"p"}),"\n","Please check whether the robot Token and UserId are configured correctly, and whether the alarm policy association has been configured",(0,a.kt)("br",{parentName:"p"}),"\n","UserId should be the UserId of the recipient of the message   ")),(0,a.kt)("p",null,"Other questions can be fed back through the communication group ISSUE!"))}m.isMDXComponent=!0},89906:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/alert-notice-policy-a44e898a35d581c7bb8f52bd2499387f.png"},40893:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/telegram-bot-1-e6f0d00c5bc63442aaafadaf7e342955.png"},8248:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/telegram-bot-2-039d3aac3929dbb813e3547e707384ce.png"}}]);