"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},13908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},s=void 0,u={unversionedId:"release-policy",id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",description:"This release policy only applies to the SAP Cloud SDK for JavaScript.",source:"@site/docs-js/release-policy.mdx",sourceDirName:".",slug:"/release-policy",permalink:"/cloud-sdk/docs/js/release-policy",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/release-policy.mdx",tags:[],version:"current",frontMatter:{id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"docsJsSidebar",previous:{title:"Multi-Tenant Application",permalink:"/cloud-sdk/docs/js/tutorials/multi-tenant-application"},next:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap"}},d={},p=[{value:"Planned Major Release Schedule",id:"planned-major-release-schedule",level:2},{value:"Minor and Major Release Policy",id:"minor-and-major-release-policy",level:2},{value:"Timelines",id:"timelines",level:3},{value:"Upgrading to a New Minor Version",id:"upgrading-to-a-new-minor-version",level:3},{value:"Upgrading to a New Major Version",id:"upgrading-to-a-new-major-version",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Fixes and Maintenance",id:"fixes-and-maintenance",level:3},{value:"Support and Feedback",id:"support-and-feedback",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"relevance",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This release policy only applies to the SAP Cloud SDK for JavaScript.\nIt's not relevant for the SAP Cloud SDK for Java!")),(0,n.kt)("h2",{id:"planned-major-release-schedule"},"Planned Major Release Schedule"),(0,n.kt)("p",null,"The SAP Cloud SDK for JavaScript follows ",(0,n.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Link to Announcement"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"March 2019"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Released GA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"February 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/release-notes-sap-cloud-sdk-for-javascript-and-typescript"},"Version 2.x"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Planned"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Q1/Q2 2023"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TBD")))),(0,n.kt)("h2",{id:"minor-and-major-release-policy"},"Minor and Major Release Policy"),(0,n.kt)("h3",{id:"timelines"},"Timelines"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We release a new ",(0,n.kt)("strong",{parentName:"li"},"minor version")," every 2 weeks, assuming new functionality or fixes are available."),(0,n.kt)("li",{parentName:"ul"},"We release a new ",(0,n.kt)("strong",{parentName:"li"},"major version")," every 6 to 12 months."),(0,n.kt)("li",{parentName:"ul"},"A few months before the major release, we announce the expected changes and planned release date.")),(0,n.kt)("h3",{id:"upgrading-to-a-new-minor-version"},"Upgrading to a New Minor Version"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upgrade to a new ",(0,n.kt)("strong",{parentName:"li"},"minor release version")," should not involve any effort because we do not introduce breaking changes.")),(0,n.kt)("admonition",{title:"TypeScript version bumps",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We regularly upgrade TypeScript to the latest stable version.\nIn rare cases this can lead to compilation errors for projects using TypeScript.\nThe solution is usually upgrading TypeScript to the latest stable version.")),(0,n.kt)("h3",{id:"upgrading-to-a-new-major-version"},"Upgrading to a New Major Version"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,n.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size.")),(0,n.kt)("h3",{id:"documentation"},"Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The documentation is always up to date with the ",(0,n.kt)("strong",{parentName:"li"},"latest major release"),"."),(0,n.kt)("li",{parentName:"ul"},"We will use tabs to demonstrate a difference between the versions where required.")),(0,n.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"major",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nMajor version documentation\n\n"))),(0,n.kt)(o.Z,{value:"deprecated",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nDeprecated version documentation\n\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We will maintain documentation for the two most recent versions."),(0,n.kt)("li",{parentName:"ul"},"With every new major version release the oldest documented version is removed from the documentation portal.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We will always provide a branch with the latest snapshot of the documentation before the major version release.\nYou can use that branch to host documentation for the earlier version locally.")),(0,n.kt)("h3",{id:"fixes-and-maintenance"},"Fixes and Maintenance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We provide new features and fixes only for the ",(0,n.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for JavaScript.")),(0,n.kt)("h3",{id:"support-and-feedback"},"Support and Feedback"),(0,n.kt)("p",null,"We are happy to hear from you and usually respond within one day.\nCheck our ",(0,n.kt)("a",{parentName:"p",href:"/docs/overview/get-support"},"support channels")," and chose the one that works best for you."))}m.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),u=a(12466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a;const{lazy:o,block:c,defaultValue:m,values:f,groupId:v,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[j,S]=(0,n.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=v){const e=N[v];null!=e&&e!==j&&y.some((t=>t.value===e))&&S(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),r=y[a].value;r!==j&&(P(t),S(r),null!=v&&w(v,String(r)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;a=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var n;const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,o.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}}}]);