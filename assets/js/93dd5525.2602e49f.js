"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8579],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),s=n(72389),o=n(79443);var u=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(63616),l=n(86010),c="tabItem_1uMI";function d(e){var t,n,s,o=e.lazy,d=e.block,p=e.defaultValue,h=e.values,f=e.groupId,m=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=b[0])?void 0:s.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),w=k.tabGroupChoices,C=k.setTabGroupChoices,T=(0,a.useState)(y),N=T[0],P=T[1],q=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=w[f];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&P(E)}var O=function(e){var t=e.currentTarget,n=q.indexOf(t),r=v[n].value;r!==N&&(x(t),P(r),null!=f&&C(f,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=q.indexOf(e.currentTarget)+1;n=q[r]||q[0];break;case"ArrowLeft":var a=q.indexOf(e.currentTarget)-1;n=q[a]||q[q.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},m)},v.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return q.push(e)},onKeyDown:j,onFocus:O,onClick:O},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},15005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=n(26396),u=n(58215),i=["components"],l={},c=void 0,d={unversionedId:"js/features/odata/common/batch/changeset",id:"js/features/odata/common/batch/changeset",title:"changeset",description:"A changeset is a collection of HTTP POST, PUT, PATCH and DELETE operations - requests built by CreateRequestBuilders, UpdateRequestBuilders, and DeleteRequestBuilders in terms of the SAP Cloud SDK.",source:"@site/docs/js/features/odata/common/batch/changeset.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/changeset",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/changeset",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/changeset.mdx",tags:[],version:"current",lastUpdatedBy:"Christoph Schubert",lastUpdatedAt:1644571383,formattedLastUpdatedAt:"2/11/2022",frontMatter:{}},p=[],h={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A changeset is a collection of HTTP ",(0,s.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"PATCH")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," operations - requests built by ",(0,s.kt)("a",{parentName:"p",href:"#create-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"CreateRequestBuilder"),"s"),", ",(0,s.kt)("a",{parentName:"p",href:"#update-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateRequestBuilder"),"s"),", and ",(0,s.kt)("a",{parentName:"p",href:"#delete-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteRequestBuilder"),"s")," in terms of the SAP Cloud SDK.\nThe order of execution within a changeset is not defined.\nThis differs from the whole batch request itself, where the order is defined.\nTherefore, the requests within one changeset should not depend on each other.\nIf the execution of any request within a changeset fails, the whole changeset will be reflected as an error in the response.\nThe changeset will not be applied, much like a database transaction."),(0,s.kt)("p",null,"Unlike retrieve requests, you can not pass change requests to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," function directly.\nYou have to combine them in a ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset"),", which in turn can be passed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," function.\nOnce a batch request is executed, it returns a list of ",(0,s.kt)("a",{parentName:"p",href:"#responses"},(0,s.kt)("inlineCode",{parentName:"a"},"BatchResponse"),"s"),"."),(0,s.kt)("p",null,"If a changeset was executed successfully, its corresponding response is of type ",(0,s.kt)("inlineCode",{parentName:"p"},"WriteResponses")," and contains a collection of all raw responses to the requests in the changeset.\nIf the execution fails, the response is an ",(0,s.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"."),(0,s.kt)("p",null,"In the example below, we create a list of ",(0,s.kt)("a",{parentName:"p",href:"#update-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateRequestBuilder"),"s")," from a list of addresses.\nWe combine these change requests into one ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset")," and pass it to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request, which we execute against a destination."),(0,s.kt)("p",null,"Once we execute the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request, we get a list of ",(0,s.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which in this example contains one response only, i.e. the one for the changeset."),(0,s.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"major",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi, changeset } =\n  businessPartnerService();\n\nasync function updateAddresses(\n  businessPartnerAddresses: BusinessPartnerAddress[]\n): Promise<BusinessPartnerAddress[]> {\n  // Create update requests\n  const updateRequests = businessPartnerAddresses.map(address =>\n    businessPartnerAddressApi.requestBuilder().update(address)\n  );\n\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  // ...\n}\n"))),(0,s.kt)(u.Z,{value:"deprecated",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async function updateAddresses(\n  businessPartnerAddresses: BusinessPartnerAddress[]\n): Promise<BusinessPartnerAddress[]> {\n  // Create update requests\n  const updateRequests = businessPartnerAddresses.map(address =>\n    BusinessPartnerAddress.requestBuilder().update(address)\n  );\n\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  // ...\n}\n")))))}f.isMDXComponent=!0}}]);