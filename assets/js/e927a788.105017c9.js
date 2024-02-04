"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[4413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,d=m["".concat(s,".").concat(u)]||m[u]||h[u]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"alert_enterprise_wechat_app",title:"Alert Enterprise Wechat App notification",sidebar_label:"Alert Enterprise Wechat App notification",keywords:["open source monitoring tool","open source alerter","open source Enterprise Wechat App notification"]},o=void 0,p={unversionedId:"help/alert_enterprise_wechat_app",id:"help/alert_enterprise_wechat_app",title:"Alert Enterprise Wechat App notification",description:"After the threshold is triggered send alarm information and notify the recipient by enterprise WeChat App.",source:"@site/docs/help/alert_enterprise_wechat_app.md",sourceDirName:"help",slug:"/help/alert_enterprise_wechat_app",permalink:"/docs/help/alert_enterprise_wechat_app",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/alert_enterprise_wechat_app.md",tags:[],version:"current",frontMatter:{id:"alert_enterprise_wechat_app",title:"Alert Enterprise Wechat App notification",sidebar_label:"Alert Enterprise Wechat App notification",keywords:["open source monitoring tool","open source alerter","open source Enterprise Wechat App notification"]},sidebar:"docs",previous:{title:"Console address in alarm template",permalink:"/docs/help/alert_console"},next:{title:"Alert Huawei Cloud SMN Notifications",permalink:"/docs/help/alert_smn"}},s={},c=[{value:"Operation steps",id:"operation-steps",level:3},{value:"Enterprise WeChat App common issues",id:"enterprise-wechat-app-common-issues",level:3}],l={toc:c};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by enterprise WeChat App.      ")),(0,a.kt)("h3",{id:"operation-steps"},"Operation steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u3010Enterprise Wechat backstage\u3011-> \u3010App Management\u3011-> \u3010Create an app\u3011-> \u3010Set App message\u3011->\u3010Copy AgentId and Secret adding successfully\u3011"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:r(32707).Z,width:"2628",height:"1488"}),"     "),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select Enterprise WeChat App notification method\u3011->\u3010Set Enterprise WeChat ID,Enterprise App ID and Enterprise App Secret \u3011-> \u3010Confirm\u3011"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:r(16884).Z,width:"3274",height:"1660"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011"),"  ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."),"   ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:r(19574).Z,width:"3354",height:"1498"}),"    "),(0,a.kt)("h3",{id:"enterprise-wechat-app-common-issues"},"Enterprise WeChat App common issues"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enterprise WeChat App did not receive the alarm notification.  ",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Please check if the user has application permissions.",(0,a.kt)("br",{parentName:"p"}),"\n","Please check if the enterprise application callback address settings are normal.",(0,a.kt)("br",{parentName:"p"}),"\n","Please check if the server IP is on the enterprise application whitelist.")))),(0,a.kt)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}h.isMDXComponent=!0},32707:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/alert-wechat-1-41ce7fd19a9bec5be36ca0f81b1e87bc.jpg"},16884:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/alert-wechat-2-33d1c23b6078143ef22a03989bddba9a.jpg"},19574:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/alert-wechat-3-f35f80dd541ae0aa27512fcd2357485f.jpg"}}]);