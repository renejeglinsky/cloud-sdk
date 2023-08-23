"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={id:"upgrade-to-version-3",title:"How to upgrade to version 3 of the SAP Cloud SDK for JavaScript",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Upgrade to version 3",description:"This document will guide you through the upgrade process from version 2 to 3."},r="How to Upgrade to Version 3 of the SAP Cloud SDK for JavaScript \x3c!-- omit from toc --\x3e",l={unversionedId:"guides/upgrade-to-version-3",id:"guides/upgrade-to-version-3",title:"How to upgrade to version 3 of the SAP Cloud SDK for JavaScript",description:"This document will guide you through the upgrade process from version 2 to 3.",source:"@site/docs-js/guides/upgrade-to-version-3.mdx",sourceDirName:"guides",slug:"/guides/upgrade-to-version-3",permalink:"/cloud-sdk/docs/js/guides/upgrade-to-version-3",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/guides/upgrade-to-version-3.mdx",tags:[],version:"current",frontMatter:{id:"upgrade-to-version-3",title:"How to upgrade to version 3 of the SAP Cloud SDK for JavaScript",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Upgrade to version 3",description:"This document will guide you through the upgrade process from version 2 to 3."},sidebar:"docsJsSidebar",previous:{title:"Kubernetes with SAP Kyma",permalink:"/cloud-sdk/docs/js/environments/kyma"},next:{title:"Connecting to External Systems from BAS",permalink:"/cloud-sdk/docs/js/guides/bas"}},s={},p=[{value:"Overview  omit from toc ",id:"overview--omit-from-toc-",level:2},{value:"Update Your Project Dependencies",id:"update-your-project-dependencies",level:2},{value:"Important Dependency Updates  omit from toc ",id:"important-dependency-updates--omit-from-toc-",level:3},{value:"Update to Node 18 or Newer",id:"update-to-node-18-or-newer",level:2},{value:"Replace Removed Functionality",id:"replace-removed-functionality",level:2},{value:"Package <code>@sap-cloud-sdk/http-client</code>  omit from toc ",id:"package-sap-cloud-sdkhttp-client--omit-from-toc-",level:3},{value:"Package <code>@sap-cloud-sdk/util</code>  omit from toc ",id:"package-sap-cloud-sdkutil--omit-from-toc-",level:3},{value:"Package <code>@sap-cloud-sdk/connectivity</code>  omit from toc ",id:"package-sap-cloud-sdkconnectivity--omit-from-toc-",level:3},{value:"Package <code>@sap-cloud-sdk/generator</code>  omit from toc ",id:"package-sap-cloud-sdkgenerator--omit-from-toc-",level:3},{value:"Package <code>@sap-cloud-sdk/openapi-generator</code>  omit from toc ",id:"package-sap-cloud-sdkopenapi-generator--omit-from-toc-",level:3},{value:"Package <code>@sap-cloud-sdk/odata-common</code>  omit from toc ",id:"package-sap-cloud-sdkodata-common--omit-from-toc-",level:3},{value:"Switch to Middlewares for Timeouts",id:"switch-to-middlewares-for-timeouts",level:2},{value:"Update Transpilation Options in OData Client Generator",id:"update-transpilation-options-in-odata-client-generator",level:2},{value:"Use Service Function instead of API Constructor",id:"use-service-function-instead-of-api-constructor",level:2},{value:"Adjust Operation Names Starting With <code>_</code> in Generated OData Clients",id:"adjust-operation-names-starting-with-_-in-generated-odata-clients",level:2},{value:"Adjust Conflict Resolution in OData Client Generation",id:"adjust-conflict-resolution-in-odata-client-generation",level:2},{value:"Use <code>optionsPerService</code> in OData Client Generator",id:"use-optionsperservice-in-odata-client-generator",level:2},{value:"Set <code>basePath</code> in <code>options-per-service.json</code>",id:"set-basepath-in-options-per-servicejson",level:2},{value:"Use <code>operations</code> instead of <code>actionImports</code> and <code>functionImports</code>",id:"use-operations-instead-of-actionimports-and-functionimports",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-upgrade-to-version-3-of-the-sap-cloud-sdk-for-javascript--omit-from-toc-"},"How to Upgrade to Version 3 of the SAP Cloud SDK for JavaScript "),(0,i.kt)("h2",{id:"overview--omit-from-toc-"},"Overview "),(0,i.kt)("p",null,"This document will guide you through the steps necessary to upgrade to version 3 of the SAP Cloud SDK. Depending on your project, some steps might not be applicable. The To-Do list is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#update-your-project-dependencies"},"Update Your Project Dependencies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#update-to-node-18-or-newer"},"Update to Node 18 or Newer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#replace-removed-functionality"},"Replace Removed Functionality")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#switch-to-middlewares-for-timeouts"},"Switch to Middlewares for Timeouts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#update-transpilation-options-in-odata-client-generator"},"Update Transpilation Options in OData Client Generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-service-function-instead-of-api-constructor"},"Use Service Function instead of API Constructor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adjust-operation-names-starting-with-_-in-generated-odata-clients"},"Adjust Operation Names Starting With ",(0,i.kt)("inlineCode",{parentName:"a"},"_")," in Generated OData Clients")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adjust-conflict-resolution-in-odata-client-generation"},"Adjust Conflict Resolution in OData Client Generation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-optionsperservice-in-odata-client-generator"},"Use ",(0,i.kt)("inlineCode",{parentName:"a"},"optionsPerService")," in OData Client generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#set-basepath-in-options-per-servicejson"},"Set ",(0,i.kt)("inlineCode",{parentName:"a"},"basePath")," in ",(0,i.kt)("inlineCode",{parentName:"a"},"options-per-service.json"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-operations-instead-of-actionimports-and-functionimports"},"Use ",(0,i.kt)("inlineCode",{parentName:"a"},"operations")," instead of ",(0,i.kt)("inlineCode",{parentName:"a"},"actionImports")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"functionImports")))),(0,i.kt)("h2",{id:"update-your-project-dependencies"},"Update Your Project Dependencies"),(0,i.kt)("p",null,"Search for occurrences of ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/[some module]")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," files.\nReplace the version numbers with ",(0,i.kt)("inlineCode",{parentName:"p"},"^3"),".\nDepending on if you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," in the directories of your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," files to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn.lock")," file."),(0,i.kt)("p",null,"Running your tests or deploying your application might fail at this point in time if you need to adapt to any breaking changes.\nWe recommend updating your applications in one commit or pull request and making sure everything still works using your existing test suite."),(0,i.kt)("h3",{id:"important-dependency-updates--omit-from-toc-"},"Important Dependency Updates "),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios HTTP client")," has been updated from version 0.27 to 1.2."),(0,i.kt)("h2",{id:"update-to-node-18-or-newer"},"Update to Node 18 or Newer"),(0,i.kt)("p",null,"All SAP Cloud SDK for JavaScript libraries now support node 18 (LTS) as the ",(0,i.kt)("strong",{parentName:"p"},"minimum")," node version.\nIf you are using a node version older than 18, update your runtime environment to a newer version.\nOn Cloud Foundry you can do this by ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/buildpacks/node/index.html#runtime"},"setting the node engine in your ",(0,i.kt)("inlineCode",{parentName:"a"},"package.json")),".\nNote, that the transpilation target of the SDK changed from ",(0,i.kt)("inlineCode",{parentName:"p"},"es2019")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"es2021"),"."),(0,i.kt)("h2",{id:"replace-removed-functionality"},"Replace Removed Functionality"),(0,i.kt)("p",null,"Most of the removed functionality had been deprecated in version 2.\nThe following sub-sections describe affected modules, functions and interfaces with instructions on how to replace them."),(0,i.kt)("h3",{id:"package-sap-cloud-sdkhttp-client--omit-from-toc-"},"Package ",(0,i.kt)("inlineCode",{parentName:"h3"},"@sap-cloud-sdk/http-client")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"executeHttpRequest()")," function overload, that accepted ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpRequestConfigWithOrigin")," as a parameter, is removed. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"executeHttpRequestWithOrigin()")," instead.")),(0,i.kt)("h3",{id:"package-sap-cloud-sdkutil--omit-from-toc-"},"Package ",(0,i.kt)("inlineCode",{parentName:"h3"},"@sap-cloud-sdk/util")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"logger")," on the interface ",(0,i.kt)("inlineCode",{parentName:"li"},"LoggerOptions")," was not used and is removed from the interface. There is no replacement."),(0,i.kt)("li",{parentName:"ul"},"The function ",(0,i.kt)("inlineCode",{parentName:"li"},"variadicArgumentToArray")," is replaced by the function ",(0,i.kt)("inlineCode",{parentName:"li"},"transformVariadicArgumentToArray"),".")),(0,i.kt)("h3",{id:"package-sap-cloud-sdkconnectivity--omit-from-toc-"},"Package ",(0,i.kt)("inlineCode",{parentName:"h3"},"@sap-cloud-sdk/connectivity")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The generic type parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"JwtKeysT")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"JwtKeyMapping")," is now narrowed to extend ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The property ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," interface is now optional.\nIt is only present for HTTP destinations and not for Mail destinations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IsolationStrategy")," enum is replaced by a union type of the same name."),(0,i.kt)("p",{parentName:"li"},"Make changes to your tenant isolation strategy like in this example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},".execute({\n  destinationName: 'DESTINATION',\n  useCache: true,\n  isolationStrategy: IsolationStrategy.Tenant\n})\n")),(0,i.kt)("p",{parentName:"li"},"to"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},".execute({\n  destinationName: 'DESTINATION',\n  useCache: true,\n  isolationStrategy: 'tenant'\n})\n")))),(0,i.kt)("h3",{id:"package-sap-cloud-sdkgenerator--omit-from-toc-"},"Package ",(0,i.kt)("inlineCode",{parentName:"h3"},"@sap-cloud-sdk/generator")," "),(0,i.kt)("p",null,"The deprecated option ",(0,i.kt)("inlineCode",{parentName:"p"},"generateCSN")," is removed.\nIf you need a schema notation (CSN) of your service use the ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/guides/using-services?q=edmx#import-api"},"cds import")," command directly."),(0,i.kt)("p",null,"The options ",(0,i.kt)("inlineCode",{parentName:"p"},"versionInPackageJson")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"licenseInPackageJson"),", that allowed setting custom values in generated ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," files are removed.\nWhen the ",(0,i.kt)("inlineCode",{parentName:"p"},"packageJson")," option is enabled, a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file with version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0")," and license ",(0,i.kt)("inlineCode",{parentName:"p"},"UNLICENSED")," is created.\nUse the ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," option to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," with custom values."),(0,i.kt)("p",null,"The following deprecated options were renamed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"forceOverwrite")," becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"overwrite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generatePackageJson")," becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"packageJson")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"writeReadme")," becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"readme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processesJsGeneration")," becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"transpilationProcesses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputDir")," becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"input"))),(0,i.kt)("p",null,"The new ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," option now also accepts file paths and glob patterns."),(0,i.kt)("p",null,"The deprecated ",(0,i.kt)("inlineCode",{parentName:"p"},"generateNpmrc")," option of the generator is removed.\nUse the ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," option to add a ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," to the generated code if needed."),(0,i.kt)("p",null,"The internal options ",(0,i.kt)("inlineCode",{parentName:"p"},"sdkAfterVersionScript"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"s4HanaCloud")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"packageVersion")," of the generator are removed.\nThese were hidden options never meant for external usage and there is no replacement."),(0,i.kt)("p",null,"The types for paths in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GeneratorOptions")," are changed from ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.PathLike")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),".\nIn case you passed a buffer object please resolve it to a string before passing it to the SAP Cloud SDK."),(0,i.kt)("h3",{id:"package-sap-cloud-sdkopenapi-generator--omit-from-toc-"},"Package ",(0,i.kt)("inlineCode",{parentName:"h3"},"@sap-cloud-sdk/openapi-generator")," "),(0,i.kt)("p",null,"The deprecated generator options ",(0,i.kt)("inlineCode",{parentName:"p"},"versionInPackageJson"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"packageVersion")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"licenseInPackageJson")," are removed.\nWhen the ",(0,i.kt)("inlineCode",{parentName:"p"},"packageJson")," option is enabled, a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file with version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0")," and license ",(0,i.kt)("inlineCode",{parentName:"p"},"UNLICENSED")," is created.\nUse the ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," option to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," with custom values."),(0,i.kt)("p",null,"The OpenAPI generator now uses the same code as the OData generator to resolve paths.\nIn case you experience problems with the new implementation enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"verbose")," flag to investigate what the paths resolve to now."),(0,i.kt)("h3",{id:"package-sap-cloud-sdkodata-common--omit-from-toc-"},"Package ",(0,i.kt)("inlineCode",{parentName:"h3"},"@sap-cloud-sdk/odata-common")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When creating entities with the ",(0,i.kt)("inlineCode",{parentName:"li"},"fromJson()")," method, the ",(0,i.kt)("inlineCode",{parentName:"li"},"_customFields")," property is no longer considered. Add custom properties as root level properties in your object instead.")),(0,i.kt)("p",null,"Old example, not working anymore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_customFields": {\n    "myCustomField": "myCustomValue"\n  }\n}\n')),(0,i.kt)("p",null,"New example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "myCustomField": "myCustomValue"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Content-type" HTTP headers cannot be passed as a string in the constructor of the ',(0,i.kt)("inlineCode",{parentName:"li"},"ODataRequestConfig"),' anymore.\nInstead, pass an object to the constructor with "content-type" as a key and the header value as a value, e.g. ',(0,i.kt)("inlineCode",{parentName:"li"},"{ 'content-type': 'some-value' }"),".")),(0,i.kt)("h2",{id:"switch-to-middlewares-for-timeouts"},"Switch to Middlewares for Timeouts"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout()")," method was removed from the request builder and the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout")," option was removed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function.\nIf you want to set a timeout for a request, use the new timeout middleware:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { timeout } from '@sap-cloud-sdk/resilience';\n\nexecuteHttpRequest(myDestination, {\n  method: 'get',\n  middleware: [timeout()]\n});\n\nmyRequestBuilder.getAll().middleware([timeout()]).execute(myDestination);\n")),(0,i.kt)("p",null,"You find a detailed guide on the general ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/js/v3/features/middleware"},"middleware concept")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/js/v3/guides/resilience"},"resilience middlewares")," in particular on the documentation portal."),(0,i.kt)("h2",{id:"update-transpilation-options-in-odata-client-generator"},"Update Transpilation Options in OData Client Generator"),(0,i.kt)("p",null,"By default, the OData generator will only generate TypeScript code.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"generateJs")," option has been replaced with the ",(0,i.kt)("inlineCode",{parentName:"p"},"transpile")," option.\nTo generate JavaScript code, enable transpilation by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"transpile")," option."),(0,i.kt)("p",null,"A new option, ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig"),", can be used to either pass a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," configuration file or use a default config from the SDK.\nThis flag should be used together with ",(0,i.kt)("inlineCode",{parentName:"p"},"transpile"),"."),(0,i.kt)("h2",{id:"use-service-function-instead-of-api-constructor"},"Use Service Function instead of API Constructor"),(0,i.kt)("p",null,"You should use the ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/js/features/odata/execute-request#general-request-structure"},"service function")," to get an instance of your API object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { myEntityService } from './outputDir/my-service';\n\nconst { myEntityApi } = myEntityService();\nreturn myEntityApi.requestBuilder().getAll().execute(destination);\n")),(0,i.kt)("p",null,"This way, a getter initializes references to navigation properties of the API.\nIf you call the API constructor directly like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const myEntityApi = new MyEntityApi();\n")),(0,i.kt)("p",null,"the navigation properties are not correctly initialized, leading to potential errors.\nThe visibility of the constructor is now changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"private")," to avoid its unintended usage.\nIf you used the constructor directly change your code to use the service function e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"myEntityService()")," in the example above."),(0,i.kt)("h2",{id:"adjust-operation-names-starting-with-_-in-generated-odata-clients"},"Adjust Operation Names Starting With ",(0,i.kt)("inlineCode",{parentName:"h2"},"_")," in Generated OData Clients"),(0,i.kt)("p",null,"Rules for naming OData operations (actions or functions) when generating clients have changed slightly.\nIf an operation begins with an underscore symbol(",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"), it is removed in the generated client's code."),(0,i.kt)("p",null,"To adjust the names for unbound operations, search in ",(0,i.kt)("inlineCode",{parentName:"p"},"function-import.ts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"action-import.ts")," files in your generated client's code for operations starting with an ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),".\nSimilarly, to adjust the names of bound operations of an entity, search in the respective entity's ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," file, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"BusinessPartner.ts"),"."),(0,i.kt)("h2",{id:"adjust-conflict-resolution-in-odata-client-generation"},"Adjust Conflict Resolution in OData Client Generation"),(0,i.kt)("p",null,"In the past, object names changed to resolve conflicts with protected JavaScript keywords or non-unique names.\nThis has changed and the generation process will now fail with an error message indicating the changed name.\nYou can still generate in such a case by enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipValidation")," option.\nThe generator will add postfixes like ",(0,i.kt)("inlineCode",{parentName:"p"},"_1")," to resolve the conflict if the option is enabled."),(0,i.kt)("h2",{id:"use-optionsperservice-in-odata-client-generator"},"Use ",(0,i.kt)("inlineCode",{parentName:"h2"},"optionsPerService")," in OData Client Generator"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceMapping")," option in the OData generator has been renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"optionsPerService"),", addtionally its alias ",(0,i.kt)("inlineCode",{parentName:"p"},"-s")," has been removed.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"service-mapping.json")," file is now named ",(0,i.kt)("inlineCode",{parentName:"p"},"options-per-service.json"),".\nThe file will no longer be generated into the input directory by default, unlike previous versions."),(0,i.kt)("p",null,"If the generator should consider options, it is ",(0,i.kt)("strong",{parentName:"p"},"mandatory")," to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"optionsPerService")," argument.\nYou can set the value to either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The file path containing the options per service (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"options.json"),").\nIf the file does not exist, it will be created and initialized.\nIf the file exists, missing or partial service options will be added with the default values."),(0,i.kt)("li",{parentName:"ul"},"The directory from which the file is read/created (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"someDir"),". This will read/create a file named ",(0,i.kt)("inlineCode",{parentName:"li"},"options-per-service.json")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"someDir"),")")),(0,i.kt)("p",null,"Also, the properties in the configuration have changed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The option ",(0,i.kt)("inlineCode",{parentName:"li"},"serviceName")," is removed.\nA value for the documentation header is derived from the directory name."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"npmPackageName")," is renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"packageName")," to align with the OpenApi generator.\nNote that the default values for the ",(0,i.kt)("inlineCode",{parentName:"li"},"directoryName")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"packageName")," have changed."),(0,i.kt)("li",{parentName:"ul"},"The keys change to the relative paths of the service specifications.")),(0,i.kt)("p",null,"Here is an example how the options change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'//Old Format\n{\n  "API-TEST_SRV": {\n    "directoryName": "test-service",\n    "basePath": "/odata/test-service",\n    "npmPackageName": "npm-package-test-service",\n    "serviceName": "some-text-used-in-documentation-service"\n  }\n}\n\n//New Format\n{\n  "../test-resources/odata-spec/API-TEST_SRV.edmx": {\n    "packageName": "npm-package-test-service",\n    "directoryName": "test-service",\n    "basePath": "/odata/test-service"\n  }\n}\n')),(0,i.kt)("p",null,"In case you have problems finding the relative path or adjusting the property names please do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove the exising ",(0,i.kt)("inlineCode",{parentName:"li"},"options-per-service.json")," file."),(0,i.kt)("li",{parentName:"ul"},"Re-run the generator.\nThis will generate a fresh file with the new relative paths and new property names with default values."),(0,i.kt)("li",{parentName:"ul"},"Adjust the default values for packageName, directoryName and basePath with values fitting your needs.")),(0,i.kt)("h2",{id:"set-basepath-in-options-per-servicejson"},"Set ",(0,i.kt)("inlineCode",{parentName:"h2"},"basePath")," in ",(0,i.kt)("inlineCode",{parentName:"h2"},"options-per-service.json")),(0,i.kt)("p",null,"By default, generation of OData clients will fail if the ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," cannot be determined at the time of generation.\nThe generator will determine the path from the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"basePath")," property in the ",(0,i.kt)("inlineCode",{parentName:"li"},"options-per-service.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".edmx")," service specification, or"),(0,i.kt)("li",{parentName:"ul"},"swagger file")),(0,i.kt)("p",null,"in the above mentioned order."),(0,i.kt)("p",null,"To allow generation in spite of missing ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath"),", set the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipValidation")," option to true.\nThis will generate the client successfully with ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("h2",{id:"use-operations-instead-of-actionimports-and-functionimports"},"Use ",(0,i.kt)("inlineCode",{parentName:"h2"},"operations")," instead of ",(0,i.kt)("inlineCode",{parentName:"h2"},"actionImports")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"functionImports")),(0,i.kt)("p",null,"Unbound actions and functions, were previously represented as separate service properties, ",(0,i.kt)("inlineCode",{parentName:"p"},"actionImports")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"functionImports"),", of generated clients.\nThey are now represented by one common property, ",(0,i.kt)("inlineCode",{parentName:"p"},"operations"),"."),(0,i.kt)("p",null,"Instead of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { myService } from './generated/my-service';\n\n// Operations are split into functions and actions\nconst { functionImports, actionImports } = myService();\nconst { myFunction } = functionImports;\nconst { myAction } = actionImports;\n")),(0,i.kt)("p",null,"Use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { myService } from './generated/my-service';\n\n// Operations are merged in one property\nconst { operations } = myService();\nconst { myFunction, myAction } = operations;\n")),(0,i.kt)("p",null,"To allow generation in spite of a missing ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath"),", set the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipValidation")," option to true.\nThis will generate the client successfuly with the ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."))}c.isMDXComponent=!0}}]);