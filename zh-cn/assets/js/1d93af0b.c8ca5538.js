"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[10562],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},i=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,i=k(t,["components","mdxType","originalType","parentName"]),u=m(a),N=r,c=u["".concat(d,".").concat(N)]||u[N]||o[N]||l;return a?n.createElement(c,p(p({ref:e},i),{},{components:a})):n.createElement(c,p({ref:e},i))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=u;var k={};for(var d in e)hasOwnProperty.call(e,d)&&(k[d]=e[d]);k.originalType=t,k.mdxType="string"==typeof t?t:r,p[1]=k;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44443:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>k,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={id:"docker",title:"\u76d1\u63a7\uff1aDocker \u76d1\u63a7",sidebar_label:"Docker \u5bb9\u5668\u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u5bb9\u5668\u76d1\u63a7","Docker\u5bb9\u5668\u76d1\u63a7"]},p=void 0,k={unversionedId:"help/docker",id:"version-v1.3.x/help/docker",title:"\u76d1\u63a7\uff1aDocker \u76d1\u63a7",description:"\u5bf9Docker\u5bb9\u5668\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3.x/help/docker.md",sourceDirName:"help",slug:"/help/docker",permalink:"/zh-cn/docs/v1.3.x/help/docker",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3.x/help/docker.md",tags:[],version:"v1.3.x",frontMatter:{id:"docker",title:"\u76d1\u63a7\uff1aDocker \u76d1\u63a7",sidebar_label:"Docker \u5bb9\u5668\u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u5bb9\u5668\u76d1\u63a7","Docker\u5bb9\u5668\u76d1\u63a7"]},sidebar:"docs",previous:{title:"Hadoop",permalink:"/zh-cn/docs/v1.3.x/help/hadoop"},next:{title:"Kubernetes \u76d1\u63a7",permalink:"/zh-cn/docs/v1.3.x/help/kubernetes"}},d={},m=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:2},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1asystem",id:"\u6307\u6807\u96c6\u5408system",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1acontainers",id:"\u6307\u6807\u96c6\u5408containers",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1astats",id:"\u6307\u6807\u96c6\u5408stats",level:4}],i={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9Docker\u5bb9\u5668\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002")),(0,r.kt)("h2",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8981\u76d1\u63a7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker")," \u4e2d\u7684\u5bb9\u5668\u4fe1\u606f\uff0c\u5219\u9700\u8981\u6309\u7167\u4e00\u4e0b\u6b65\u9aa4\u6253\u5f00\u7aef\u53e3\uff0c\u8ba9\u91c7\u96c6\u8bf7\u6c42\u83b7\u53d6\u5230\u5bf9\u5e94\u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\u3001\u7f16\u8f91docker.server\u6587\u4ef6\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vi /usr/lib/systemd/system/docker.service\n")),(0,r.kt)("p",null,"\u627e\u5230 ",(0,r.kt)("strong",{parentName:"p"},"[Service]")," \u8282\u70b9\uff0c\u4fee\u6539 ExecStart \u5c5e\u6027\uff0c\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"-H tcp://0.0.0.0:2375")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u76f8\u5f53\u4e8e\u5bf9\u5916\u5f00\u653e\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},"2375")," \u7aef\u53e3\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u60c5\u51b5\u4fee\u6539\u6210\u5176\u4ed6\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\u3001\u91cd\u65b0\u52a0\u8f7dDocker\u914d\u7f6e\u751f\u6548\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload \nsystemctl restart docker \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u8bb0\u5f97\u5728\u670d\u52a1\u5668\u4e2d\u53f0\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"strong"},"2375")," \u7aef\u53e3\u53f7\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\u3001\u5982\u679c\u4e0a\u8ff0\u65b9\u6cd5\u4e0d\u884c\u5219\uff1a")),(0,r.kt)("p",null,"\u5728\u670d\u52a1\u5668\u5185\u90e8\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"2375")," \u7aef\u53e3\u53f7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"firewall-cmd --zone=public --add-port=2375/tcp --permanent\nfirewall-cmd --reload\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bf9\u5916\u63d0\u4f9b\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a2375\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u83b7\u53d6Docker\u670d\u52a1\u5668API\u63a5\u53e3\u65f6\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5668\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u662f\u76d1\u63a7\u6240\u6709\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u7528\u6237\u540d\uff0c\u53ef\u9009")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5bc6\u7801\uff0c\u53ef\u9009")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5URL\uff0c\u53ef\u9009\uff0c\u82e5\u914d\u7f6e\uff0c\u5219URL\u91cc\u9762\u7684\u6570\u636e\u5e93\u540d\u79f0\uff0c\u7528\u6237\u540d\u5bc6\u7801\u7b49\u53c2\u6570\u4f1a\u8986\u76d6\u4e0a\u9762\u914d\u7f6e\u7684\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.kt)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408system"},"\u6307\u6807\u96c6\u5408\uff1asystem"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"docker\u672c\u7248\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"os"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u7248\u672c \u4f8b\u5982\uff1alinux x86_64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root_dir"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"docker\u6587\u4ef6\u5939\u76ee\u5f55 \u4f8b\u5982\uff1a/var/lib/docker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"containers"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u603b\u6570\uff08\u5728\u8fd0\u884c+\u672a\u8fd0\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"containers_running"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668\u6570\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"containers_paused"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6682\u505c\u4e2d\u7684\u5bb9\u5668\u6570\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"images"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u666f\u8c61\u7684\u603b\u6570\u76ee\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ncpu"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"NCPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mem_total"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5360\u7528\u7684\u5185\u5b58\u603b\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u65f6\u95f4")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408containers"},"\u6307\u6807\u96c6\u5408\uff1acontainers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u4e2d\u5bb9\u5668\u7684ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u4e2d\u7684\u5bb9\u5668\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u4f7f\u7528\u7684\u955c\u50cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u4e2d\u7684\u9ed8\u8ba4\u542f\u52a8\u547d\u4ee4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u4e2d\u5bb9\u5668\u7684\u8fd0\u884c\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u4e2d\u7684\u66f4\u65b0\u65f6\u95f4")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408stats"},"\u6307\u6807\u96c6\u5408\uff1astats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u4e2d\u7684\u540d\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"available_memory"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u53ef\u4ee5\u5229\u7528\u7684\u5185\u5b58\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_memory"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u5df2\u7ecf\u4f7f\u7528\u7684\u5185\u5b58\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memory_usage"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u7684\u5185\u5b58\u4f7f\u7528\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpu_delta"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u5df2\u7ecf\u4f7f\u7528\u7684CPU\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_cpus"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668\u53ef\u4ee5\u4f7f\u7528\u7684CPU\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpu_usage"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker\u5bb9\u5668CPU\u4f7f\u7528\u7387")))))}o.isMDXComponent=!0}}]);