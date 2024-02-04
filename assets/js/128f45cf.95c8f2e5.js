"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[120],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var r=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=r.createContext({}),p=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,m=t.parentName,u=n(t,["components","mdxType","originalType","parentName"]),s=p(a),c=l,b=s["".concat(m,".").concat(c)]||s[c]||h[c]||o;return a?r.createElement(b,i(i({ref:e},u),{},{components:a})):r.createElement(b,i({ref:e},u))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,i=new Array(o);i[0]=s;var n={};for(var m in e)hasOwnProperty.call(e,m)&&(n[m]=e[m]);n.originalType=t,n.mdxType="string"==typeof t?t:l,i[1]=n;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},99276:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const o={title:"HertzBeat v1.4.2 released, custom notice template!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},i=void 0,n={permalink:"/blog/2023/11/12/hertzbeat-v1.4.2",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2023-11-12-hertzbeat-v1.4.2.md",source:"@site/blog/2023-11-12-hertzbeat-v1.4.2.md",title:"HertzBeat v1.4.2 released, custom notice template!",description:"What is HertzBeat?",date:"2023-11-12T00:00:00.000Z",formattedDate:"November 12, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:5.19,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat v1.4.2 released, custom notice template!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},prevItem:{title:"HertzBeat v1.4.3 released, prometheus-compatible!",permalink:"/blog/2023/12/11/hertzbeat-v1.4.3"},nextItem:{title:"HertzBeat v1.4.1 released, better experience!",permalink:"/blog/2023/09/26/hertzbeat-v1.4.1"}},m={authorsImageUrls:[void 0]},p=[{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:3},{value:"Features",id:"features",level:3},{value:"HertzBeat&#39;s 1.4.2 version release!",id:"hertzbeats-142-version-release",level:3},{value:"Install quickly via docker",id:"install-quickly-via-docker",level:3},{value:"What&#39;s Changed",id:"whats-changed",level:3},{value:"New Contributors",id:"new-contributors",level:2},{value:"\u26c4 Supported",id:"-supported",level:2},{value:"<strong>Download Link</strong>",id:"download-link",level:3}],u={toc:p};function h(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat")," is an open source, real-time monitoring system with custom monitoring, high performance cluster and agentless capabilities."),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Combines ",(0,l.kt)("strong",{parentName:"li"},"monitoring, alarm, and notification")," features into one platform, and supports monitoring for web service, program, database, cache, os, webserver, middleware, bigdata, cloud-native, network, custom and more."),(0,l.kt)("li",{parentName:"ul"},"Easy to use and agentless, offering full web-based operations for monitoring and alerting with just a few clicks, all at zero learning cost."),(0,l.kt)("li",{parentName:"ul"},"Makes protocols such as ",(0,l.kt)("inlineCode",{parentName:"li"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," configurable, allowing you to collect any metrics by simply configuring the template ",(0,l.kt)("inlineCode",{parentName:"li"},"YML")," file online. Imagine being able to quickly adapt to a new monitoring type like K8s or Docker simply by configuring online with HertzBeat."),(0,l.kt)("li",{parentName:"ul"},"High performance, supports horizontal expansion of multi-collector clusters, multi-isolated network monitoring and cloud-edge collaboration."),(0,l.kt)("li",{parentName:"ul"},"Provides flexible alarm threshold rules and timely notifications delivered via  ",(0,l.kt)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Email")," ",(0,l.kt)("inlineCode",{parentName:"li"},"DingDing")," ",(0,l.kt)("inlineCode",{parentName:"li"},"WeChat")," ",(0,l.kt)("inlineCode",{parentName:"li"},"FeiShu")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhook")," ",(0,l.kt)("inlineCode",{parentName:"li"},"SMS"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"HertzBeat's powerful customization, multi-type support, high performance, easy expansion, and low coupling, aims to help developers and teams quickly build their own monitoring system.",(0,l.kt)("br",{parentName:"p"}),"\n","We also provide ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"SaaS Monitoring Cloud")),", users no longer need to deploy a cumbersome monitoring system to monitor their resources. ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"Get started online for free")),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzBeat",src:a(97554).Z,width:"2814",height:"1772"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Github: ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Gitee: ",(0,l.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))),(0,l.kt)("h3",{id:"hertzbeats-142-version-release"},"HertzBeat's 1.4.2 version release!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"support custom notice template"),(0,l.kt)("li",{parentName:"ul"},"support push metrics monitoring(beta)"),(0,l.kt)("li",{parentName:"ul"},"support using Huawei Cloud OBS to store monitoring templates yml"),(0,l.kt)("li",{parentName:"ul"},"support emqx monitoring and udp port monitoring"),(0,l.kt)("li",{parentName:"ul"},"more features , fix multiple bugs and so on")),(0,l.kt)("h3",{id:"install-quickly-via-docker"},"Install quickly via docker"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Just one command to get started:")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"or use quay.io (if dockerhub network connect timeout)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Access ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:1157")," to start, default account: ",(0,l.kt)("inlineCode",{parentName:"p"},"admin/hertzbeat"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploy collector clusters"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector tancloud/hertzbeat-collector\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name")," : set the collector unique identity name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e MANAGER_HOST=127.0.0.1")," : set the main hertzbeat server ip."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," : set the main hertzbeat server port, default 1158.")),(0,l.kt)("p",null,"Detailed config refer to ",(0,l.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Install HertzBeat via Docker")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"whats-changed"},"What's Changed"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Welcome to explore more new version updates, thanks to the hard work of the community partners, love \ud83d\udc97!")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bugfix counting wrong tasks num of collector by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1265"},"https://github.com/dromara/hertzbeat/pull/1265")),(0,l.kt)("li",{parentName:"ul"},"[ospp]"," add push style collector by @vinci-897 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1222"},"https://github.com/dromara/hertzbeat/pull/1222")),(0,l.kt)("li",{parentName:"ul"},"add 1.4.1 version doc by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1263"},"https://github.com/dromara/hertzbeat/pull/1263")),(0,l.kt)("li",{parentName:"ul"},"support using Huawei Cloud OBS to store custom define yml file by @gcdd1993 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1266"},"https://github.com/dromara/hertzbeat/pull/1266")),(0,l.kt)("li",{parentName:"ul"},"[doc]"," add more contact channel by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1272"},"https://github.com/dromara/hertzbeat/pull/1272")),(0,l.kt)("li",{parentName:"ul"},"bugfix app-tomcat memory_pool unit mb  by @rbsrcy in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1268"},"https://github.com/dromara/hertzbeat/pull/1268")),(0,l.kt)("li",{parentName:"ul"},"add rbsrcy as a contributor for code by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1271"},"https://github.com/dromara/hertzbeat/pull/1271")),(0,l.kt)("li",{parentName:"ul"},"[doc]"," update docker.md by @ruanliang-hualun in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1270"},"https://github.com/dromara/hertzbeat/pull/1270")),(0,l.kt)("li",{parentName:"ul"},"add ruanliang-hualun as a contributor for doc by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1274"},"https://github.com/dromara/hertzbeat/pull/1274")),(0,l.kt)("li",{parentName:"ul"},"bugfix jmx memory_pool unit and time unit error by @rbsrcy in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1273"},"https://github.com/dromara/hertzbeat/pull/1273")),(0,l.kt)("li",{parentName:"ul"},"bugfix old version monitor alert has no monitor name by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1278"},"https://github.com/dromara/hertzbeat/pull/1278")),(0,l.kt)("li",{parentName:"ul"},"support edit monitor in monitor detail page by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1282"},"https://github.com/dromara/hertzbeat/pull/1282")),(0,l.kt)("li",{parentName:"ul"},"reset alert converge reduce cache when restored alert trigger by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1281"},"https://github.com/dromara/hertzbeat/pull/1281")),(0,l.kt)("li",{parentName:"ul"},"[ospp]"," add push style collector doc by @vinci-897 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1267"},"https://github.com/dromara/hertzbeat/pull/1267")),(0,l.kt)("li",{parentName:"ul"},"bugfix threshold availability automatically carries threshold parameters by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1285"},"https://github.com/dromara/hertzbeat/pull/1285")),(0,l.kt)("li",{parentName:"ul"},"[ospp]"," support custom notice template by @Eden4701 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1233"},"https://github.com/dromara/hertzbeat/pull/1233")),(0,l.kt)("li",{parentName:"ul"},"add Eden4701 as a contributor for code by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1287"},"https://github.com/dromara/hertzbeat/pull/1287")),(0,l.kt)("li",{parentName:"ul"},"bugfix AvailableAlertDefineInit - query did not return a unique result by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1288"},"https://github.com/dromara/hertzbeat/pull/1288")),(0,l.kt)("li",{parentName:"ul"},"upgrade to version angular 15 by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1291"},"https://github.com/dromara/hertzbeat/pull/1291")),(0,l.kt)("li",{parentName:"ul"},"support push style for multiple messages by @vinci-897 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1292"},"https://github.com/dromara/hertzbeat/pull/1292")),(0,l.kt)("li",{parentName:"ul"},"update hertzbeat upgrade help doc by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1294"},"https://github.com/dromara/hertzbeat/pull/1294")),(0,l.kt)("li",{parentName:"ul"},"feat alert converge, define, silence support search query by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1300"},"https://github.com/dromara/hertzbeat/pull/1300")),(0,l.kt)("li",{parentName:"ul"},"feature:support monitoring udp port availability by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1295"},"https://github.com/dromara/hertzbeat/pull/1295")),(0,l.kt)("li",{parentName:"ul"},"support emqx monitor by @vinci-897 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1302"},"https://github.com/dromara/hertzbeat/pull/1302")),(0,l.kt)("li",{parentName:"ul"},"add an explicit tag filter by @vinci-897 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1303"},"https://github.com/dromara/hertzbeat/pull/1303")),(0,l.kt)("li",{parentName:"ul"},"add hertzbeat icon by @zqr10159 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1305"},"https://github.com/dromara/hertzbeat/pull/1305")),(0,l.kt)("li",{parentName:"ul"},"[doc]"," update kafka help doc by @XiaTian688 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1308"},"https://github.com/dromara/hertzbeat/pull/1308")),(0,l.kt)("li",{parentName:"ul"},"add XiaTian688 as a contributor for doc by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1309"},"https://github.com/dromara/hertzbeat/pull/1309")),(0,l.kt)("li",{parentName:"ul"},"support webhook custom template by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1306"},"https://github.com/dromara/hertzbeat/pull/1306")),(0,l.kt)("li",{parentName:"ul"},"set ssh param connect reused default false by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1310"},"https://github.com/dromara/hertzbeat/pull/1310")),(0,l.kt)("li",{parentName:"ul"},"upgrade greptimedb to v0.4 by @liyin in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1311"},"https://github.com/dromara/hertzbeat/pull/1311")),(0,l.kt)("li",{parentName:"ul"},"add liyin as a contributor for code by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1313"},"https://github.com/dromara/hertzbeat/pull/1313")),(0,l.kt)("li",{parentName:"ul"},"add some emqx monitoring metrics by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1312"},"https://github.com/dromara/hertzbeat/pull/1312")),(0,l.kt)("li",{parentName:"ul"},"feature: app-mysql.yml by @a-little-fool in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1316"},"https://github.com/dromara/hertzbeat/pull/1316")),(0,l.kt)("li",{parentName:"ul"},"modify default IoTDB version config to V_1_0 by @Ceilzcx in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1315"},"https://github.com/dromara/hertzbeat/pull/1315")),(0,l.kt)("li",{parentName:"ul"},"bugfix timestamp is null by @qyaaaa in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1246"},"https://github.com/dromara/hertzbeat/pull/1246")),(0,l.kt)("li",{parentName:"ul"},"[hertzbeat]"," release hertzbeat version v1.4.2 by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1317"},"https://github.com/dromara/hertzbeat/pull/1317")),(0,l.kt)("li",{parentName:"ul"},"bugfix alarm time span match in silence and notice by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1318"},"https://github.com/dromara/hertzbeat/pull/1318")),(0,l.kt)("li",{parentName:"ul"},"update available alert threshold trigger times default 2 by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1324"},"https://github.com/dromara/hertzbeat/pull/1324")),(0,l.kt)("li",{parentName:"ul"},"bugfix rabbitmq contains duplicated metric by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1322"},"https://github.com/dromara/hertzbeat/pull/1322")),(0,l.kt)("li",{parentName:"ul"},"[alerter]"," optimize the encoding of how to add Extern Alarm Manage API(#1320) by @SurryChen in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1325"},"https://github.com/dromara/hertzbeat/pull/1325")),(0,l.kt)("li",{parentName:"ul"},"bugfix webhook post body error and alarm recover exception by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1327"},"https://github.com/dromara/hertzbeat/pull/1327")),(0,l.kt)("li",{parentName:"ul"},"build hertzbeat package with jdk runtime by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1328"},"https://github.com/dromara/hertzbeat/pull/1328"))),(0,l.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@rbsrcy made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1268"},"https://github.com/dromara/hertzbeat/pull/1268")),(0,l.kt)("li",{parentName:"ul"},"@XiaTian688 made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1308"},"https://github.com/dromara/hertzbeat/pull/1308")),(0,l.kt)("li",{parentName:"ul"},"@liyin made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1311"},"https://github.com/dromara/hertzbeat/pull/1311"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/compare/v1.4.1...v1.4.2"},"https://github.com/dromara/hertzbeat/compare/v1.4.1...v1.4.2")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"-supported"},"\u26c4 Supported"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,l.kt)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,l.kt)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,l.kt)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,l.kt)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,l.kt)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,l.kt)("li",{parentName:"ul"},"Notifications support ",(0,l.kt)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Mail")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Pinning")," ",(0,l.kt)("inlineCode",{parentName:"li"},"WeChat")," ",(0,l.kt)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,l.kt)("inlineCode",{parentName:"li"},"SMS")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhook")," ",(0,l.kt)("inlineCode",{parentName:"li"},"ServerChan"),".")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Github: ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Gitee: ",(0,l.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat")),"  "),(0,l.kt)("h3",{id:"download-link"},(0,l.kt)("strong",{parentName:"h3"},"Download Link")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"hertzbeat server")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-1.4.2.tar.gz"},"hertzbeat-1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-1.4.2.zip"},"hertzbeat-1.4.2.zip")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-linux_amd64_1.4.2.tar.gz"},"hertzbeat-linux_amd64_1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-linux_arm64_1.4.2.tar.gz"},"hertzbeat-linux_arm64_1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-macos_arm64_1.4.2.tar.gz"},"hertzbeat-macos_arm64_1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-macos_amd64_1.4.2.tar.gz"},"hertzbeat-macos_amd64_1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-windows64_1.4.2.zip"},"hertzbeat-windows64_1.4.2.zip"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"hertzbeat collector")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-1.4.2.tar.gz"},"hertzbeat-collector-1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-1.4.2.zip"},"hertzbeat-collector-1.4.2.zip")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-linux_amd64_1.4.2.tar.gz"},"hertzbeat-collector-linux_amd64_1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-linux_arm64_1.4.2.tar.gz"},"hertzbeat-collector-linux_arm64_1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-macos_arm64_1.4.2.tar.gz"},"hertzbeat-collector-macos_arm64_1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-macos_amd64_1.4.2.tar.gz"},"hertzbeat-collector-macos_amd64_1.4.2.tar.gz")),(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-windows64_1.4.2.zip"},"hertzbeat-collector-windows64_1.4.2.zip"))))}h.isMDXComponent=!0},97554:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/hertzbeat-arch-758b3f08da56310b5f1fe1d1bfd99d82.png"}}]);