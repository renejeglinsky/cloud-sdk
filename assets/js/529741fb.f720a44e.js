"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9426],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"sdk-connectivity-http-client",title:"Use the HttpClient Accessor To Configure Requests To Remote Services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"HttpClient",description:"This article describes how the SAP Cloud SDK for Java can be used to prepare instances of HttpClient. This class enables connections to other systems and services like SAP S/4HANA or SAP Business Technology Platform services.",keywords:["sap","cloud","sdk","destination","java","connectivity","http"]},l=void 0,c={unversionedId:"java/features/connectivity/sdk-connectivity-http-client",id:"java/features/connectivity/sdk-connectivity-http-client",title:"Use the HttpClient Accessor To Configure Requests To Remote Services",description:"This article describes how the SAP Cloud SDK for Java can be used to prepare instances of HttpClient. This class enables connections to other systems and services like SAP S/4HANA or SAP Business Technology Platform services.",source:"@site/docs/java/features/connectivity/http-client.mdx",sourceDirName:"java/features/connectivity",slug:"/java/features/connectivity/sdk-connectivity-http-client",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-http-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/connectivity/http-client.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1651048454,formattedLastUpdatedAt:"4/27/2022",frontMatter:{id:"sdk-connectivity-http-client",title:"Use the HttpClient Accessor To Configure Requests To Remote Services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"HttpClient",description:"This article describes how the SAP Cloud SDK for Java can be used to prepare instances of HttpClient. This class enables connections to other systems and services like SAP S/4HANA or SAP Business Technology Platform services.",keywords:["sap","cloud","sdk","destination","java","connectivity","http"]},sidebar:"someSidebar",previous:{title:"Destinations",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-destination-service"},next:{title:"Certificate-based Authentication",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-mtls"}},p={},d=[{value:"General Usage",id:"general-usage",level:2},{value:"Customization",id:"customization",level:2},{value:"Overriding Default Behavior",id:"overriding-default-behavior",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The SAP Cloud SDK offers basic functionality that helps with connecting to other systems and services like SAP S/4HANA Cloud or On-premise edition.\nThe SAP Cloud SDK leverages the existing API of ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpClient")," and applies conveniently managed properties, e.g. according to a specific destination configuration."),(0,o.kt)("p",null,"In the following paragraphs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpClientAccessor")," API and its usage will be described."),(0,o.kt)("h2",{id:"general-usage"},"General Usage"),(0,o.kt)("p",null,"In general an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpClient")," can be instantiated through the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpClientAcessor"),".\nThe SAP Cloud SDK itself uses the accessor class for all internal requests as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"HttpClient client = HttpClientAccessor.getHttpClient();\n")),(0,o.kt)("p",null,"If On-premise the goal is to create a client with properties according to a specific destination, it can be provided as argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'HttpDestination destination = DestinationAccessor.getDestination("my-destination").asHttp();\nHttpClient client = HttpClientAccessor.getHttpClient(destination);\n')),(0,o.kt)("p",null,"When using a destination, the configured destination URL will be used as base path for the subsequent requests for ",(0,o.kt)("inlineCode",{parentName:"p"},"client"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that similar to other accessor-based APIs, the SAP Cloud SDK offers methods with a ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," prefix to allow for optional VAVR-enhanced API access."))),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"When the properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpClient")," are not working for the application, e.g. timeout is too short or too long, then the generation can be customized.\nPlease find the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpClientFactory")," interface and the provided implementation ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultHttpClientFactory"),".\nThey offer a similar method ",(0,o.kt)("inlineCode",{parentName:"p"},"createHttpClient")," with optional destination argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"HttpClientFactory factory = new DefaultHttpClientFactory();\n\nHttpClient genericClient = factory.createHttpClient();\nHttpClient destinationClient = factory.createHttpClient(destination);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultHttpClientFactory")," type offers a static builder, to enable custom properties for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeoutMilliseconds")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxConnectionsPerRoute")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxConnectionsTotal"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"HttpClientFactory customFactory = DefaultHttpClientFactory.builder()\n  .timeoutMilliseconds(60000)\n  .maxConnectionsPerRoute(100)\n  .maxConnectionsTotal(200)\n  .build();\n")),(0,o.kt)("p",null,"When inheriting from ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultHttpClientFactory")," it's possible to provide even deeper customization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'DefaultHttpClientFactory customFactory = new DefaultHttpClientFactory() {\n  @Override\n  protected RequestConfig.Builder getRequestConfigBuilder( HttpDestinationProperties destination ) {\n    return super.getRequestConfigBuilder(destination)\n      .setProxy(new HttpHost("proxy", 8080, "http"));\n  }\n  @Override\n  protected HttpClientBuilder getHttpClientBuilder( HttpDestinationProperties destination ) {\n    return super.getHttpClientBuilder(destination)\n      .setUserAgent("SDK");\n  }\n};\n')),(0,o.kt)("p",null,"It is possible to take advantage of calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"super")," - or use your own objects directly.\nThis inheritance enables custom implementation for the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getHttpClientBuilder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getRequestConfigBuilder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getSocketConfigBuilder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getConnectionManager"))),(0,o.kt)("h2",{id:"overriding-default-behavior"},"Overriding Default Behavior"),(0,o.kt)("p",null,"Now the customization of the HTTP client factory is available and we can adjust the default behavior for the accessor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"HttpClientFactory factory = new MyCustomHttpClientFactory();\nHttpClientAccessor.setHttpClientFactory(factory);\n")),(0,o.kt)("p",null,"From now on the custom factory will be used for every explicit and implicit HTTP request running through the SAP Cloud SDK."))}m.isMDXComponent=!0}}]);