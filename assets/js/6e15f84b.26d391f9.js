"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1411],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||u;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<u;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),u="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),u=n(86010),o=n(72389),l=n(67392),s=n(7094),i=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),P=T.tabGroupChoices,N=T.setTabGroupChoices,j=(0,a.useState)(k),w=j[0],x=j[1],E=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=P[b];null!=C&&C!==w&&h.some((function(e){return e.value===C}))&&x(C)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==w&&(O(t),x(r),null!=b&&N(b,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var u,o=E.indexOf(e.currentTarget)-1;n=null!=(u=E[o])?u:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:I,onClick:I},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},15927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),o=n(65488),l=n(85162),s=["components"],i={},c=void 0,p={unversionedId:"js/features/odata/common/operations/update",id:"js/features/odata/common/operations/update",title:"update",description:"The Update request builder allows you to send PUT or PATCH requests.",source:"@site/docs/js/features/odata/common/operations/update.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/update",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/update",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/update.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1655810051,formattedLastUpdatedAt:"6/21/2022",frontMatter:{}},d={},m=[],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"The Update request builder allows you to send ",(0,u.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,u.kt)("inlineCode",{parentName:"p"},"PATCH")," requests.\nBy default, ",(0,u.kt)("inlineCode",{parentName:"p"},"PATCH")," is used to only update the changed fields:"),(0,u.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,u.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().update(businessPartner);\n"))),(0,u.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder().update(businessPartner);\n")))),(0,u.kt)("p",null,"In the example above only the changed fields of the given ",(0,u.kt)("inlineCode",{parentName:"p"},"businessPartner")," instance are sent to the ",(0,u.kt)("inlineCode",{parentName:"p"},"BusinessPartner")," service using ",(0,u.kt)("inlineCode",{parentName:"p"},"PATCH"),"."),(0,u.kt)("p",null,"To update the whole entity use ",(0,u.kt)("inlineCode",{parentName:"p"},"replaceWholeEntityWithPut"),":"),(0,u.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,u.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .update(businessPartner)\n  .replaceWholeEntityWithPut();\n"))),(0,u.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .replaceWholeEntityWithPut();\n")))),(0,u.kt)("p",null,"This will send a ",(0,u.kt)("inlineCode",{parentName:"p"},"PUT")," request and thereby replace the whole entity."),(0,u.kt)("p",null,"Entities can only be updated if ",(0,u.kt)("a",{parentName:"p",href:"#handling-of-etags"},"ETags")," match.\nIf you want to force an update of the entity regardless of the ETag configure the request to ignore version identifiers with ",(0,u.kt)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),":"),(0,u.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,u.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .update(businessPartner)\n  .ignoreVersionIdentifier();\n"))),(0,u.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .ignoreVersionIdentifier();\n")))))}b.isMDXComponent=!0}}]);