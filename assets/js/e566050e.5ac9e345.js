"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(20807);n(65488),n(85162);const o={id:"http-client",title:"Perform HTTP Requests",sidebar_label:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},s=void 0,l={unversionedId:"features/connectivity/http-client",id:"features/connectivity/http-client",title:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",source:"@site/docs-js/features/connectivity/generic-http-client.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/http-client",permalink:"/cloud-sdk/docs/js/v3/features/connectivity/http-client",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/connectivity/generic-http-client.mdx",tags:[],version:"current",frontMatter:{id:"http-client",title:"Perform HTTP Requests",sidebar_label:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Proxies",permalink:"/cloud-sdk/docs/js/v3/features/connectivity/proxies"},next:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/v3/features/connectivity/on-premise"}},p={},u=[{value:"When to Use What?",id:"when-to-use-what",level:2},{value:"<code>executeHttpRequest</code>",id:"executehttprequest",level:2},{value:"CSRF Token Fetching",id:"csrf-token-fetching",level:3},{value:"Parameter Encoding",id:"parameter-encoding",level:3},{value:"Customized Parameter Encoding",id:"customized-parameter-encoding",level:4},{value:"<code>executeHttpRequestWithOrigin()</code>",id:"executehttprequestwithorigin",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains how to execute arbitrary HTTP requests using the SAP Cloud SDK for JavaScript.\nThe HTTP client provided by the SAP Cloud SDK provides some convenience features which are explained in detail in this guide."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use an OData API, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/odata/execute-request"},"Executing a request using a generated OData client")," page.\nIn case you want to use an OpenAPI client, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/openapi/execute-request"},"Execute a Request Using a Generated OpenAPI Client")," page.")),(0,r.kt)("h2",{id:"when-to-use-what"},"When to Use What?"),(0,r.kt)("p",null,"The SAP Cloud SDK for JavaScript can generate clients for ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/odata/execute-request"},"OData")," and ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/openapi/execute-request"},"OpenAPI"),".\nUse generated clients for OData or OpenAPI services, if possible."),(0,r.kt)("p",null,"Generated clients provide convenience features such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type-safe response objects"),(0,r.kt)("li",{parentName:"ul"},"Convenient handling of filter, select and expand conditions"),(0,r.kt)("li",{parentName:"ul"},"Built-in ",(0,r.kt)("inlineCode",{parentName:"li"},"ETag")," versions handling")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Be sure to check if the clients for OData or OpenAPI support your use case.\nFor example, the OData client does not support the ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")," operation.")),(0,r.kt)("p",null,"The generic HTTP client is based on the open-source ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com"},"axios HTTP client"),", but provides convenience features which are specific to working on SAP Business Technology Platform, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v3/features/connectivity/destinations"},"Destination lookup")),(0,r.kt)("li",{parentName:"ul"},"Connections to ",(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v3/features/connectivity/on-premise"},"SAP S/4HANA On-Premise")," via the connectivity service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v3/features/connectivity/proxies"},"Web proxies"))),(0,r.kt)("h2",{id:"executehttprequest"},(0,r.kt)("inlineCode",{parentName:"h2"},"executeHttpRequest")),(0,r.kt)("p",null,"The most basic way to use the SAP Cloud SDK HTTP client is the function ",(0,r.kt)(i.Z,{slug:"functions/sap_cloud_sdk_http_client.executeHttpRequest",name:"executeHttpRequest",mdxType:"LinkToLatestJsApiDocs"}),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, httpRequestOptions): Promise<HttpResponse>;\n")),(0,r.kt)("p",null,"It takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"destination")," argument is of type ",(0,r.kt)("inlineCode",{parentName:"li"},"DestinationOrFetchOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This can either be a ",(0,r.kt)(i.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.Destination",name:"destination object",mdxType:"LinkToLatestJsApiDocs"})," which was already fetched or an ",(0,r.kt)(i.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.DestinationFetchOptions",name:"object containing a destination name and an optional JWT",mdxType:"LinkToLatestJsApiDocs"})))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"requestConfig")," argument is of type ",(0,r.kt)(i.Z,{slug:"types/sap_cloud_sdk_http_client.HttpRequestConfig",name:"HttpRequestConfig",mdxType:"LinkToLatestJsApiDocs"}),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This parameter is optional"),(0,r.kt)("li",{parentName:"ul"},"The default value is a ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," request"))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"httpRequestOptions")," argument is of type ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpRequestOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This parameter is optional"),(0,r.kt)("li",{parentName:"ul"},"The default value is a request with ",(0,r.kt)("a",{parentName:"li",href:"#csrf-token-fetching"},"automatic CSRF token fetching"))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This guide provides code snippets.\nFully executable example code can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/http-client-examples"},"SAP-samples/cloud-sdk-js repository on GitHub"),".")),(0,r.kt)("p",null,"In the most simple form, the function can be invoked like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await executeHttpRequest({\n  url: 'https://example.com'\n});\n")),(0,r.kt)("p",null,"In the example above, since the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," value is not provided, the SDK treats it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request.\nTo perform a different operation, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," to the required value, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," parameters have an overlap in the keys they accept.\nFor example, both have a ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," property.\nFor keys that exist for both objects, the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," takes precedence.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function returns a promise of type ",(0,r.kt)(i.Z,{slug:"interfaces/sap_cloud_sdk_http_client.HttpResponse",name:"HttpResponse",mdxType:"LinkToLatestJsApiDocs"}),"."),(0,r.kt)("h3",{id:"csrf-token-fetching"},"CSRF Token Fetching"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-Site Request Forgery (CSRF)")," is a common type of attack on web applications.\nThe HTTP client provided by SAP Cloud SDK allows to automatically retrieve a CSRF token for HTTP APIs which support this."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Fetching CSRF token is automatically enabled for all requests that typically might change data, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," requests.\nIt is not available for ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests.")),(0,r.kt)("p",null,"Fetching the CSRF token can be enabled or disabled via the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpRequestOptions.fetchCsrfToken")," parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function.\nSee its ",(0,r.kt)(i.Z,{slug:"interfaces/sap_cloud_sdk_http_client.HttpRequestOptions",name:"API documentation",mdxType:"LinkToLatestJsApiDocs"})," for details."),(0,r.kt)("p",null,"For example, to avoid CSRF token fetching when doing a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," request, disable it like in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await executeHttpRequest(\n  {\n    url: `https://example.com`\n  },\n  {\n    method: 'post'\n  },\n  {\n    fetchCsrfToken: false\n  }\n);\n")),(0,r.kt)("h3",{id:"parameter-encoding"},"Parameter Encoding"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Percent-encoding"},"URL encoding")," allows using characters as part of the URL which normally would cause issues such as spaces.\nFor example, the space character is replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"%20"),"."),(0,r.kt)("p",null,"The HTTP client automatically takes care of encoding parameters except for ",(0,r.kt)("em",{parentName:"p"},"custom parameters"),".\nCustom parameters can be useful when you need control exactly how values are transmitted to the backend system."),(0,r.kt)("h4",{id:"customized-parameter-encoding"},"Customized Parameter Encoding"),(0,r.kt)("p",null,"If you need to customize parameter encoding, you can provide your own function to do the transformation.\nThis feature is meant for cases where backends have special requirements for the encoding that don't work with the default URL-encoding done by the HTTP client.\nYou should usually avoid this as it adds additional complexity to the application code."),(0,r.kt)("p",null,"The example below shows how to do a string replace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const myCustomParameterEncodingFunction: ParameterEncoder = function (\n  params: Record<string, any>\n): Record<string, any> {\n  const encodedParams: Record<string, any> = {};\n\n  for (const key in params) {\n    // Customize your required encoding logic here\n    encodedParams[key] = params[key].toString().replace('x', 'y');\n  }\n\n  return encodedParams;\n};\n\nconst response = await executeHttpRequest(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get',\n    params: {\n      param1: 'a/bx',\n      param2: 'x1'\n    },\n    // Pass your custom encoding function\n    parameterEncoder: myCustomParameterEncodingFunction\n  }\n);\n")),(0,r.kt)("p",null,"The HTTP request in this example will contain the parameter values ",(0,r.kt)("inlineCode",{parentName:"p"},"a/by")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y1")," because the parameter encoder function replaced the ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,r.kt)("h2",{id:"executehttprequestwithorigin"},(0,r.kt)("inlineCode",{parentName:"h2"},"executeHttpRequestWithOrigin()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequestWithOrigin()")," function is a variation of ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," which allows more fine-grained control over configuration precedence."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The term "origin" as it is used in the context of this guide does ',(0,r.kt)("strong",{parentName:"p"},"not")," refer to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin"},'a URL as in the "same-origin policy"'),".\nInstead it refers to the ",(0,r.kt)("em",{parentName:"p"},"origin")," or ",(0,r.kt)("em",{parentName:"p"},"source")," of HTTP client configuration.")),(0,r.kt)("p",null,"This function may be helpful in situations where you want to define the priority of headers and parameters, for example if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to enforce a hard-coded API key or JWT and ignore the ones from the destination"),(0,r.kt)("li",{parentName:"ul"},"You want a default query parameter, which can be overwritten by the destination properties")),(0,r.kt)("p",null,"Headers and query parameters with the same name are prioritized in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"custom")),(0,r.kt)("li",{parentName:"ol"},"Destination related headers/query parameters"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"requestConfig"))),(0,r.kt)("p",null,"In this example the HTTP request will contain the URL parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"myParam")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-param")," and the HTTP header ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-header"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await executeHttpRequestWithOrigin(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get',\n    headers: {\n      custom: { apiKey: 'custom-header' },\n      requestConfig: { apiKey: 'default-header' }\n    },\n    params: {\n      custom: { myParam: 'custom-param' },\n      requestConfig: { myParam: 'default-param' }\n    }\n  }\n);\n")))}d.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),s=n(67392),l=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:N}=(0,l.U)(),[b,C]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=h){const e=T[h];null!=e&&e!==b&&g.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==b&&(P(t),C(a),null!=h&&N(h,String(a)))},q=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},k)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>w.push(e),onKeyDown:q,onClick:x},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":b===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},20807:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(63081);const i=function(e){let{slug:t,name:n}=e;return a.createElement("a",{href:`/cloud-sdk/api/${r.Z[0]}/${t}`},n)}}}]);