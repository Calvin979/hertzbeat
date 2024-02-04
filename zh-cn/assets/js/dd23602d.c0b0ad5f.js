"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[47873],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),u=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(r),k=n,f=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return r?a.createElement(f,i(i({ref:e},d),{},{components:r})):a.createElement(f,i({ref:e},d))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},53371:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={id:"airflow",title:"\u76d1\u63a7\uff1aApache Airflow\u76d1\u63a7",sidebar_label:"Apache Airflow",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","Apache Airflow\u76d1\u63a7"]},i=void 0,o={unversionedId:"help/airflow",id:"help/airflow",title:"\u76d1\u63a7\uff1aApache Airflow\u76d1\u63a7",description:"\u5bf9Apache Airflow\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/airflow.md",sourceDirName:"help",slug:"/help/airflow",permalink:"/zh-cn/docs/help/airflow",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/airflow.md",tags:[],version:"current",frontMatter:{id:"airflow",title:"\u76d1\u63a7\uff1aApache Airflow\u76d1\u63a7",sidebar_label:"Apache Airflow",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","Apache Airflow\u76d1\u63a7"]},sidebar:"docs",previous:{title:"Apache Hive",permalink:"/zh-cn/docs/help/hive"},next:{title:"Tomcat\u76d1\u63a7",permalink:"/zh-cn/docs/help/tomcat"}},p={},u=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1aairflow_health",id:"\u6307\u6807\u96c6\u5408airflow_health",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aairflow_version",id:"\u6307\u6807\u96c6\u5408airflow_version",level:4}],d={toc:u};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5bf9Apache Airflow\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002")),(0,n.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bf9\u5916\u63d0\u4f9b\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a8080")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8fde\u63a5\u672a\u54cd\u5e94\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528HTTPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,n.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,n.kt)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,n.kt)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,n.kt)("h4",{id:"\u6307\u6807\u96c6\u5408airflow_health"},"\u6307\u6807\u96c6\u5408\uff1aairflow_health"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metadatabase"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.kt)("td",{parentName:"tr",align:null},"metadatabase\u5065\u5eb7\u60c5\u51b5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scheduler"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.kt)("td",{parentName:"tr",align:null},"scheduler\u5065\u5eb7\u60c5\u51b5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"triggerer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.kt)("td",{parentName:"tr",align:null},"triggerer\u5065\u5eb7\u60c5\u51b5")))),(0,n.kt)("h4",{id:"\u6307\u6807\u96c6\u5408airflow_version"},"\u6307\u6807\u96c6\u5408\uff1aairflow_version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.kt)("td",{parentName:"tr",align:null},"Airflow\u7248\u672c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"git_version"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.kt)("td",{parentName:"tr",align:null},"Airflow git\u7248\u672c")))))}m.isMDXComponent=!0}}]);