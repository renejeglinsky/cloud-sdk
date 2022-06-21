"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[981],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(67294),n=r(86010),i="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,o),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(87462),n=r(67294),i=r(86010),o=r(72389),l=r(67392),s=r(7094),u=r(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var z=(0,s.U)(),T=z.tabGroupChoices,D=z.setTabGroupChoices,S=(0,n.useState)(g),w=S[0],N=S[1],C=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=T[v];null!=j&&j!==w&&y.some((function(e){return e.value===j}))&&N(j)}var P=function(e){var t=e.currentTarget,r=C.indexOf(t),a=y[r].value;a!==w&&(E(t),N(a),null!=v&&D(v,String(a)))},O=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a,n=C.indexOf(e.currentTarget)+1;r=null!=(a=C[n])?a:C[0];break;case"ArrowLeft":var i,o=C.indexOf(e.currentTarget)-1;r=null!=(i=C[o])?i:C[C.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),o?(0,n.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},8527:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=r(65488),l=r(85162),s=["components"],u={},c=void 0,d={unversionedId:"js/features/odata/common/entity/custom-de-serializers",id:"js/features/odata/common/entity/custom-de-serializers",title:"custom-de-serializers",description:"Since version 2 of the SAP Cloud SDK you can customize how the data you get from a service is deserialized and serialize when sending it back to the service.",source:"@site/docs/js/features/odata/common/entity/custom-de-serializers.mdx",sourceDirName:"js/features/odata/common/entity",slug:"/js/features/odata/common/entity/custom-de-serializers",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/custom-de-serializers",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/custom-de-serializers.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1655810051,formattedLastUpdatedAt:"6/21/2022",frontMatter:{}},p={},m=[{value:"Using (De-)Serializers for Temporal",id:"using-de-serializers-for-temporal",level:4}],f={toc:m};function v(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("p",null,"Since version 2 of the SAP Cloud SDK you can customize how the data you get from a service is ",(0,i.kt)("em",{parentName:"p"},"deserialized")," and ",(0,i.kt)("em",{parentName:"p"},"serialize")," when sending it back to the service."),(0,i.kt)("p",null,"To influence (de-)serialization you have to provide your custom (de-)serializers to a service."),(0,i.kt)("p",null,"A (de-)serializer is an object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"DeSerializer")," that defines the following callback functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deserialize"),": Takes a value as given by the service and returns a deserialized value, i.e. its represenation in code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serialize"),": Takes a deserialized value and transforms it to the format and type expected by the service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serializeToUri")," (optional): For some EDM types the serialized format differs between values in a payload and URI.\nThis function takes a deserialized value and transforms it to a string with the format expected by the service for URIs.\nThe second parameter of this callback function references the ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize")," function, which can optionally be used as a basis for URI serialization.\nIf this function is not specified, the URI serialization defaults to the ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize")," function.")),(0,i.kt)("p",null,"The type ",(0,i.kt)("inlineCode",{parentName:"p"},"DeSerializer")," has one generic parameter, that represents the deserialized type."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const doubleDeSerializer: DeSerializer<number> = {\n  deserialize: (val: string) => Number(val),\n  serialize: (val: number) => val.toString(),\n  serializeToUri: (value, serialize) => `${serialize(value)}D`\n};\n")),(0,i.kt)("p",null,"The example above shows a simplified version of the SAP Cloud SDK default (de-)serializer for the EDM type ",(0,i.kt)("inlineCode",{parentName:"p"},"Edm.Double"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"deserialize")," function converts the raw value to a number.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"serialize")," function converts the deserialized value to a string.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"serializeToUri")," function makes use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"serialize"),' function and appends a "D" at the end of the string.'),(0,i.kt)("p",null,"To specify custom (de-)serializers for a service, you have to pass an object to the service function, that maps from EDM type(s) to your custom (de-)serializer.\nAll unspecified EDM types are still (de-)serialized using the SAP Cloud SDK defaults."),(0,i.kt)("p",null,"Example, using the above ",(0,i.kt)("inlineCode",{parentName:"p"},"doubleDeSerializer")," for the business partner service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const customDeSerializers = { 'Edm.Double': doubleDeSerializer };\nconst { businessPartnerApi } = businessPartnerService(customDeSerializers);\n")),(0,i.kt)("p",null,"All requests against the ",(0,i.kt)("inlineCode",{parentName:"p"},"businessPartnerApi")," will now use the custom (de-)serializers for ",(0,i.kt)("inlineCode",{parentName:"p"},'"Edm.Double"')," and the default (de-)serializers for all other EDM types."),(0,i.kt)("h4",{id:"using-de-serializers-for-temporal"},"Using (De-)Serializers for Temporal"),(0,i.kt)("p",null,"The SAP Cloud SDK currently uses Moment.js to handle dates and time.\nMoment.js makes up a major portion of the SAP Cloud SDK's dependencies and it is not actively developed anymore.\nWe did't want to replace Moment.js with another library, but rather use the capabilities of the JavaScript language.\n",(0,i.kt)("a",{parentName:"p",href:"https://tc39.es/proposal-temporal/docs/"},"Temporal")," is a stage 3 proposal for a date/time API in ECMAScript.\nAt the time, there is polyfill available, but it is not recommended for productive use.\nOnce it is recommended for productive use, the SAP Cloud SDK will adapt it as a default.\nHowever, for non-productive use cases, you can exchange the default date/time handling with Temporal-based (de-)serializers as of today.\nFor this we provide the Temporal-based (de-)serializers as a separate npm package, ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/temporal-de-serializers"),"."),(0,i.kt)("p",null,"Adapt your code to use this package, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { temporalDeSerializersV2 } from '@sap-cloud-sdk/temporal-de-serializers';\nconst { businessPartnerApi } = businessPartnerService(temporalDeSerializersV2);\n\nbusinessPartnerApi\n  .entityBuilder()\n  .organizationFoundationDate(\n    Temporal.PlainDateTime.from('1995-12-07T03:24:30')\n  )\n  .build();\n"))),(0,i.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},"Custom (de-)serialization is available starting with version 2 of the SAP Cloud SDK for JavaScript.")))}v.isMDXComponent=!0}}]);