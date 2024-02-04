"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[87442],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(t),c=a,f=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const i={id:"extend-jmx",title:"JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},l=void 0,o={unversionedId:"advanced/extend-jmx",id:"advanced/extend-jmx",title:"JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",description:"\u4ece\u81ea\u5b9a\u4e49\u76d1\u63a7\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/extend-jmx.md",sourceDirName:"advanced",slug:"/advanced/extend-jmx",permalink:"/zh-cn/docs/advanced/extend-jmx",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/extend-jmx.md",tags:[],version:"current",frontMatter:{id:"extend-jmx",title:"JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},sidebar:"docs",previous:{title:"SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/zh-cn/docs/advanced/extend-ssh"},next:{title:"SNMP\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/zh-cn/docs/advanced/extend-snmp"}},p={},m=[{value:"JMX\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",id:"jmx\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",level:3},{value:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f",id:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f",level:3},{value:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",level:3},{value:"\u76d1\u63a7\u6a21\u7248YML",id:"\u76d1\u63a7\u6a21\u7248yml",level:3}],s={toc:m};function d(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ece",(0,a.kt)("a",{parentName:"p",href:"extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7\u53ef\u4ee5\u8ba9\u6211\u4eec\u5f88\u65b9\u4fbf\u7684\u901a\u8fc7\u914d\u7f6e JMX Mbean Object \u5c31\u80fd\u76d1\u63a7\u91c7\u96c6\u5230\u6211\u4eec\u60f3\u76d1\u63a7\u7684 Mbean \u6307\u6807     ")),(0,a.kt)("h3",{id:"jmx\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"},"JMX\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"),(0,a.kt)("p",null,"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u7aefJAVA\u5e94\u7528\u66b4\u9732JMX\u670d\u52a1"),"\u3011->\u3010",(0,a.kt)("strong",{parentName:"p"},"HertzBeat\u76f4\u8fde\u5bf9\u7aefJMX\u670d\u52a1"),"\u3011->\u3010",(0,a.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u914d\u7f6e\u7684 Mbean Object \u6570\u636e"),"\u3011->\u3010",(0,a.kt)("strong",{parentName:"p"},"\u6307\u6807\u6570\u636e\u63d0\u53d6"),"\u3011   "),(0,a.kt)("p",null,"\u7531\u6d41\u7a0b\u53ef\u89c1\uff0c\u6211\u4eec\u81ea\u5b9a\u4e49\u4e00\u4e2aJMX\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\uff0c\u9700\u8981\u914d\u7f6eJMX\u8bf7\u6c42\u53c2\u6570\uff0c\u914d\u7f6e\u83b7\u53d6\u54ea\u4e9b\u6307\u6807\uff0c\u914d\u7f6e\u67e5\u8be2Object\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f"},"\u6570\u636e\u89e3\u6790\u65b9\u5f0f"),(0,a.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e\u76d1\u63a7\u6a21\u7248YML\u7684\u6307\u6807",(0,a.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"aliasFields"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"jmx")," \u534f\u8bae\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"objectName")," \u6765\u548c\u5bf9\u7aef\u7cfb\u7edf\u66b4\u9732\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Mbean"),"\u5bf9\u8c61\u4fe1\u606f\u6620\u5c04\u89e3\u6790\u3002"),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4"},"\u81ea\u5b9a\u4e49\u6b65\u9aa4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HertzBeat\u9875\u9762")," -> ",(0,a.kt)("strong",{parentName:"p"},"\u76d1\u63a7\u6a21\u7248\u83dc\u5355")," -> ",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u589e\u76d1\u63a7\u7c7b\u578b")," -> ",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML")," -> ",(0,a.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u4fdd\u5b58\u5e94\u7528")," -> ",(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65b0\u76d1\u63a7\u7c7b\u578b\u6dfb\u52a0\u76d1\u63a7")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4771).Z,width:"4064",height:"2166"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u76d1\u63a7\u6a21\u7248\u7684\u914d\u7f6e\u7528\u6cd5\uff0c\u8bf7\u6ce8\u610f\u770b\u4f7f\u7528\u6ce8\u91ca\u3002   "),(0,a.kt)("h3",{id:"\u76d1\u63a7\u6a21\u7248yml"},"\u76d1\u63a7\u6a21\u7248YML"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49 ",(0,a.kt)("em",{parentName:"p"},"\u76d1\u63a7\u7c7b\u578b\u7684\u540d\u79f0(\u56fd\u9645\u5316), \u8bf7\u6c42\u53c2\u6570\u7ed3\u6784\u5b9a\u4e49(\u524d\u7aef\u9875\u9762\u6839\u636e\u914d\u7f6e\u81ea\u52a8\u6e32\u67d3UI), \u91c7\u96c6\u6307\u6807\u4fe1\u606f, \u91c7\u96c6\u534f\u8bae\u914d\u7f6e")," \u7b49\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5373\u6211\u4eec\u901a\u8fc7\u81ea\u5b9a\u4e49\u8fd9\u4e2aYML\uff0c\u914d\u7f6e\u5b9a\u4e49\u4ec0\u4e48\u76d1\u63a7\u7c7b\u578b\uff0c\u524d\u7aef\u9875\u9762\u9700\u8981\u8f93\u5165\u4ec0\u4e48\u53c2\u6570\uff0c\u91c7\u96c6\u54ea\u4e9b\u6027\u80fd\u6307\u6807\uff0c\u901a\u8fc7\u4ec0\u4e48\u534f\u8bae\u53bb\u91c7\u96c6\u3002")),(0,a.kt)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"example_jvm")," \u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528JMX\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002    "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\n# \u76d1\u63a7\u7c7b\u578b\u6240\u5c5e\u7c7b\u522b\uff1aservice-\u5e94\u7528\u670d\u52a1 program-\u5e94\u7528\u7a0b\u5e8f db-\u6570\u636e\u5e93 custom-\u81ea\u5b9a\u4e49 os-\u64cd\u4f5c\u7cfb\u7edf bigdata-\u5927\u6570\u636e mid-\u4e2d\u95f4\u4ef6 webserver-web\u670d\u52a1\u5668 cache-\u7f13\u5b58 cn-\u4e91\u539f\u751f network-\u7f51\u7edc\u76d1\u63a7\u7b49\u7b49\ncategory: service\n# The monitoring type eg: linux windows tomcat mysql aws...\n# \u76d1\u63a7\u7c7b\u578b eg: linux windows tomcat mysql aws...\napp: example_jvm\n# The monitoring i18n name\n# \u76d1\u63a7\u7c7b\u578b\u56fd\u9645\u5316\u540d\u79f0\nname:\n  zh-CN: \u81ea\u5b9a\u4e49JVM\u865a\u62df\u673a\n  en-US: CUSTOM JVM\n# Input params define for monitoring(render web ui by the definition)\n# \u76d1\u63a7\u6240\u9700\u8f93\u5165\u53c2\u6570\u5b9a\u4e49(\u6839\u636e\u5b9a\u4e49\u6e32\u67d3\u9875\u9762UI)\nparams:\n  # field-param field key\n  # field-\u5b57\u6bb5\u540d\u79f0\u6807\u8bc6\u7b26\n  - field: host\n    # name-param field display i18n name\n    # name-\u53c2\u6570\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-param field type(most mapping the html input type)\n    # type-\u5b57\u6bb5\u7c7b\u578b,\u6837\u5f0f(\u5927\u90e8\u5206\u6620\u5c04input\u6807\u7b7etype\u5c5e\u6027)\n    type: host\n    # required-true or false\n    # \u662f\u5426\u662f\u5fc5\u8f93\u9879 true-\u5fc5\u586b false-\u53ef\u9009\n    required: true\n  # field-param field key\n  # field-\u53d8\u91cf\u5b57\u6bb5\u6807\u8bc6\u7b26\n  - field: port\n    # name-param field display i18n name\n    # name-\u53c2\u6570\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    # type-\u5b57\u6bb5\u7c7b\u578b,\u6837\u5f0f(\u5927\u90e8\u5206\u6620\u5c04input\u6807\u7b7etype\u5c5e\u6027)\n    type: number\n    # when type is number, range is required\n    # \u5f53type\u4e3anumber\u65f6,\u7528range\u8868\u793a\u8303\u56f4\n    range: '[0,65535]'\n    # required-true or false\n    # required-\u662f\u5426\u662f\u5fc5\u8f93\u9879 true-\u5fc5\u586b false-\u53ef\u9009\n    required: true\n    # default value\n    # \u7aef\u53e3\u9ed8\u8ba4\u503c\n    defaultValue: 9999\n  # field-param field key\n  # field-\u53d8\u91cf\u5b57\u6bb5\u6807\u8bc6\u7b26\n  - field: url\n    # name-param field display i18n name\n    # name-\u53c2\u6570\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n    name:\n      zh-CN: JMX URL\n      en-US: JMX URL\n    # type-param field type(most mapping the html input type)\n    # type-\u5b57\u6bb5\u7c7b\u578b,\u6837\u5f0f(\u5927\u90e8\u5206\u6620\u5c04input\u6807\u7b7etype\u5c5e\u6027)\n    type: text\n    # required-true or false\n    # required-\u662f\u5426\u662f\u5fc5\u8f93\u9879 true-\u5fc5\u586b false-\u53ef\u9009\n    required: false\n    # hide param-true or false\n    # \u662f\u5426\u9690\u85cf\u5b57\u6bb5 true or false\n    hide: true\n    # param field input placeholder\n    # \u53c2\u6570\u8f93\u5165\u6846\u63d0\u793a\u4fe1\u606f\n    placeholder: 'service:jmx:rmi:///jndi/rmi://host:port/jmxrmi'\n  # field-param field key\n  # field-\u53d8\u91cf\u5b57\u6bb5\u6807\u8bc6\u7b26\n  - field: username\n    # name-param field display i18n name\n    # name-\u53c2\u6570\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    # type-param field type(most mapping the html input type)\n    # type-\u5b57\u6bb5\u7c7b\u578b,\u6837\u5f0f(\u5927\u90e8\u5206\u6620\u5c04input\u6807\u7b7etype\u5c5e\u6027)\n    type: text\n    # when type is text, use limit to limit string length\n    # \u5f53type\u4e3atext\u65f6,\u7528limit\u8868\u793a\u5b57\u7b26\u4e32\u9650\u5236\u5927\u5c0f\n    limit: 20\n    # required-true or false\n    # required-\u662f\u5426\u662f\u5fc5\u8f93\u9879 true-\u5fc5\u586b false-\u53ef\u9009\n    required: false\n    # hide param-true or false\n    # \u662f\u5426\u9690\u85cf\u5b57\u6bb5 true or false\n    hide: true\n  # field-param field key\n  # field-\u53d8\u91cf\u5b57\u6bb5\u6807\u8bc6\u7b26\n  - field: password\n    # name-param field display i18n name\n    # name-\u53c2\u6570\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    # type-param field type(most mapping the html input tag)\n    # type-\u5b57\u6bb5\u7c7b\u578b,\u6837\u5f0f(\u5927\u90e8\u5206\u6620\u5c04input\u6807\u7b7etype\u5c5e\u6027)\n    type: password\n    # required-true or false\n    # required-\u662f\u5426\u662f\u5fc5\u8f93\u9879 true-\u5fc5\u586b false-\u53ef\u9009\n    required: false\n    # hide param-true or false\n    # \u662f\u5426\u9690\u85cf\u5b57\u6bb5 true or false\n    hide: true\n# collect metrics config list\n# \u91c7\u96c6\u6307\u6807\u914d\u7f6e\u5217\u8868\nmetrics:\n  # metrics - basic\n  # \u76d1\u63a7\u6307\u6807 - basic\n  - name: basic\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    # \u6307\u6807\u91c7\u96c6\u8c03\u5ea6\u4f18\u5148\u7ea7(0->127)->(\u4f18\u5148\u7ea7\u9ad8->\u4f4e) \u4f18\u5148\u7ea7\u4f4e\u7684\u6307\u6807\u4f1a\u7b49\u4f18\u5148\u7ea7\u9ad8\u7684\u6307\u6807\u91c7\u96c6\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u5ea6, \u76f8\u540c\u4f18\u5148\u7ea7\u7684\u6307\u6807\u4f1a\u5e76\u884c\u8c03\u5ea6\u91c7\u96c6\n    # \u4f18\u5148\u7ea7\u4e3a0\u7684\u6307\u6807\u4e3a\u53ef\u7528\u6027\u6307\u6807,\u5373\u5b83\u4f1a\u88ab\u9996\u5148\u8c03\u5ea6,\u91c7\u96c6\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u8c03\u5ea6\u5176\u5b83\u6307\u6807,\u91c7\u96c6\u5931\u8d25\u5219\u4e2d\u65ad\u8c03\u5ea6\n    priority: 0\n    # collect metrics content\n    # \u5177\u4f53\u76d1\u63a7\u6307\u6807\u5217\u8868\n    fields:\n      # field-metric name, type-metric type(0-number,1-string), unit-metric unit('%','ms','MB'), instance-if is metrics unique identifier\n      # field-\u6307\u6807\u540d\u79f0, type-\u6307\u6807\u7c7b\u578b(0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32), unit-\u6307\u6807\u5355\u4f4d('%','ms','MB'), instance-\u662f\u5426\u662f\u6307\u6807\u96c6\u5408\u552f\u4e00\u6807\u8bc6\u7b26\u5b57\u6bb5\n      - field: VmName\n        type: 1\n      - field: VmVendor\n        type: 1\n      - field: VmVersion\n        type: 1\n      - field: Uptime\n        type: 0\n        unit: ms\n    # the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    # \u7528\u4e8e\u76d1\u63a7\u7684\u534f\u8bae\uff0c\u4f8b: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: jmx\n    # the config content when protocol is jmx\n    jmx:\n      # host: ipv4 ipv6 domain\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # port\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      # jmx mbean object name\n      # jmx mbean \u5bf9\u8c61\u540d\u79f0\n      objectName: java.lang:type=Runtime\n      url: ^_^url^_^\n\n  - name: memory_pool\n    priority: 1\n    fields:\n      - field: name\n        type: 1\n        label: true\n      - field: committed\n        type: 0\n        unit: MB\n      - field: init\n        type: 0\n        unit: MB\n      - field: max\n        type: 0\n        unit: MB\n      - field: used\n        type: 0\n        unit: MB\n    units:\n      - committed=B->MB\n      - init=B->MB\n      - max=B->MB\n      - used=B->MB\n    # (optional)metrics field alias name, it is used as an alias field to map and convert the collected data and metrics field\n    # (\u53ef\u9009)\u76d1\u63a7\u6307\u6807\u522b\u540d, \u505a\u4e3a\u4e2d\u95f4\u5b57\u6bb5\u4e0e\u91c7\u96c6\u6570\u636e\u5b57\u6bb5\u548c\u6307\u6807\u5b57\u6bb5\u6620\u5c04\u8f6c\u6362\n    aliasFields:\n      - Name\n      - Usage->committed\n      - Usage->init\n      - Usage->max\n      - Usage->used\n    # mapping and conversion expressions, use these and aliasField above to calculate metrics value\n    # (\u53ef\u9009)\u6307\u6807\u6620\u5c04\u8f6c\u6362\u8ba1\u7b97\u8868\u8fbe\u5f0f,\u4e0e\u4e0a\u9762\u7684\u522b\u540d\u4e00\u8d77\u4f5c\u7528,\u8ba1\u7b97\u51fa\u6700\u7ec8\u9700\u8981\u7684\u6307\u6807\u503c\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - name=Name\n      - committed=Usage->committed\n      - init=Usage->init\n      - max=Usage->max\n      - used=Usage->used\n    protocol: jmx\n    jmx:\n      # host: ipv4 ipv6 domain\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # port\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      objectName: java.lang:type=MemoryPool,name=*\n      url: ^_^url^_^\n")))}d.isMDXComponent=!0},4771:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/extend-point-1-0175fbb6d4bd1105c2596f7ccae83938.png"}}]);