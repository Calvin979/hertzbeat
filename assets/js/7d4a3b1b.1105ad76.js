"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[89697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(m,o(o({ref:t},h),{},{components:r})):n.createElement(m,o({ref:t},h))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"alert_threshold_expr",title:"Threshold trigger expression",sidebar_label:"Threshold trigger expression"},o=void 0,s={unversionedId:"help/alert_threshold_expr",id:"help/alert_threshold_expr",title:"Threshold trigger expression",description:"When we configure the threshold alarm, we need to configure the threshold trigger expression. The system calculates whether to trigger the alarm according to the expression and the monitoring index value. Here is a detailed introduction to the use of the expression.",source:"@site/docs/help/alert_threshold_expr.md",sourceDirName:"help",slug:"/help/alert_threshold_expr",permalink:"/docs/help/alert_threshold_expr",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/alert_threshold_expr.md",tags:[],version:"current",frontMatter:{id:"alert_threshold_expr",title:"Threshold trigger expression",sidebar_label:"Threshold trigger expression"},sidebar:"docs",previous:{title:"Threshold alarm configuration",permalink:"/docs/help/alert_threshold"},next:{title:"Alert email notification",permalink:"/docs/help/alert_email"}},l={},p=[{value:"Operators supported by expressions",id:"operators-supported-by-expressions",level:4},{value:"Supported environment variables",id:"supported-environment-variables",level:4},{value:"Expression setting case",id:"expression-setting-case",level:4}],h={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When we configure the threshold alarm, we need to configure the threshold trigger expression. The system calculates whether to trigger the alarm according to the expression and the monitoring index value. Here is a detailed introduction to the use of the expression.    ")),(0,a.kt)("h4",{id:"operators-supported-by-expressions"},"Operators supported by expressions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"equals(str1,str2) \n==\n<\n<=\n>\n>=\n!=\n( )\n+\n-\n&&\n||\n")),(0,a.kt)("p",null,"Rich operators allow us to define expressions freely.",(0,a.kt)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0f For the equality of string, please use ",(0,a.kt)("inlineCode",{parentName:"p"},"equals(str1,str2)"),", while for the equality judgment of number, please use == or != "),(0,a.kt)("h4",{id:"supported-environment-variables"},"Supported environment variables"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Environment variables, i.e. supported variables such as Metric values, are used in the expression. When the threshold value is calculated and judged, the variables will be replaced with actual values for calculation.   ")),(0,a.kt)("p",null,"Non fixed environment variables\uff1aThese variables will change dynamically according to the monitoring Metric object we choose. For example, if we choose ",(0,a.kt)("strong",{parentName:"p"},"response time Metric of website monitoring"),", the environment variables will have ",(0,a.kt)("inlineCode",{parentName:"p"},"responseTime - This is the response time variable"),(0,a.kt)("br",{parentName:"p"}),"\n","If we want to set ",(0,a.kt)("strong",{parentName:"p"},"when the response time of website monitoring is greater than 400")," to trigger an alarm\uff0cthe expression is ",(0,a.kt)("inlineCode",{parentName:"p"},"responseTime>400")),(0,a.kt)("p",null,"Fixed environment variables(Rarely used)\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"instance : Row instance value"),(0,a.kt)("br",{parentName:"p"}),"\n","This variable is mainly used to calculate multiple instances. For example, we collected ",(0,a.kt)("inlineCode",{parentName:"p"},"usage"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"usage is non fixed environment variables"),") of disk C and disk D, but we only want to set the alarm when ",(0,a.kt)("strong",{parentName:"p"},"the usage of C disk is greater than 80"),". Then the expression is ",(0,a.kt)("inlineCode",{parentName:"p"},'equals(instance,"c")&&usage>80')," "),(0,a.kt)("h4",{id:"expression-setting-case"},"Expression setting case"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Website monitoring -> Trigger alarm when the response time is greater than or equal to 400ms",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"responseTime>=400"),"    "),(0,a.kt)("li",{parentName:"ol"},"API monitoring -> Trigger alarm when the response time is greater than 3000ms",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"responseTime>3000"),"   "),(0,a.kt)("li",{parentName:"ol"},"Entire site monitoring -> Trigger alarm when URL(instance) path is ",(0,a.kt)("inlineCode",{parentName:"li"},"https://baidu.com/book/3")," and the response time is greater than 200ms",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},'equals(instance,"https://baidu.com/book/3")&&responseTime>200'),"     "),(0,a.kt)("li",{parentName:"ol"},"MYSQL monitoring -> status Metric group -> Trigger alarm when hreads_running(number of running threads) Metric is greater than 7",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"threads_running>7"),"   ")),(0,a.kt)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}c.isMDXComponent=!0}}]);