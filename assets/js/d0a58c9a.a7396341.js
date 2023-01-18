"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9421],{3119:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=a(87462),o=(a(67294),a(3905)),n=a(58911),c=a(68744);const i={id:"overview-cloud-sdk-for-java",title:"Java SDK Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d=void 0,r={unversionedId:"overview-cloud-sdk-for-java",id:"version-v3/overview-cloud-sdk-for-java",title:"Java SDK Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",source:"@site/docs-java_versioned_docs/version-v3/overview.mdx",sourceDirName:".",slug:"/overview-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/v3/overview-cloud-sdk-for-java",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/overview.mdx",tags:[],version:"v3",frontMatter:{id:"overview-cloud-sdk-for-java",title:"Java SDK Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",next:{title:"Getting Started",permalink:"/cloud-sdk/docs/java/v3/getting-started"}},u={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Why the SAP Cloud SDK for Java?",id:"why-the-sap-cloud-sdk-for-java",level:2},{value:"Feature Matrix",id:"feature-matrix",level:2}],v={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{mdxType:"MvnBadge"}),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"For a quick start check ",(0,o.kt)("a",{parentName:"p",href:"getting-started"},"getting started")," section."),(0,o.kt)("h2",{id:"why-the-sap-cloud-sdk-for-java"},"Why the SAP Cloud SDK for Java?"),(0,o.kt)("p",null,"The SAP Cloud SDK for Java allows you to develop, extend, and communicate with SAP solutions SAP S/4HANA, SAP SuccessFactors, and many others."),(0,o.kt)("h2",{id:"feature-matrix"},"Feature Matrix"),(0,o.kt)(c.Z,{mdxType:"JavaFeatureTable"}))}p.isMDXComponent=!0},68744:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(67294),o=a(9870),n=a(5884),c=a.n(n),i=a(58627),d=a(2968),r=a(34367),u=a(10215);function l(){const e=s.useMemo((()=>r.R2),[]),t=s.useMemo((()=>d.Ar),[]);return s.createElement(s.Fragment,null,s.createElement(o.D,{remarkPlugins:[i.Z,c()]},"**Legend:** \u2714\ufe0f - Generally Available, \u274c - Not Available, \u2699\ufe0f - Beta, \ud83d\udcc5 - Planned"),s.createElement(u.Z,{columns:t,data:e}))}},10215:(e,t,a)=>{a.d(t,{Z:()=>u});var s=a(87462),o=a(67294),n=a(9870),c=a(79521),i=a(58627),d=a(5884),r=a.n(d);function u(e){let{columns:t,data:a}=e;const{getTableProps:d,getTableBodyProps:u,headerGroups:l,rows:v,prepareRow:p}=(0,c.useTable)({columns:t,data:a});return o.createElement("table",d(),o.createElement("thead",null,l.map((e=>o.createElement("tr",(0,s.Z)({key:e.key},e.getHeaderGroupProps()),e.headers.map((e=>o.createElement("th",(0,s.Z)({key:e.key},e.getHeaderProps()),e.render("Header")))))))),o.createElement("tbody",u(),v.map(((e,t)=>(p(e),o.createElement("tr",(0,s.Z)({key:e.key},e.getRowProps()),e.cells.map((e=>o.createElement("td",(0,s.Z)({key:e.key},e.getCellProps()),o.createElement(n.D,{remarkPlugins:[i.Z,r()]},e.value))))))))))}},34367:(e,t,a)=>{a.d(t,{R2:()=>d});const s="/cloud-sdk/docs",o=":heavy_check_mark:",n=":x:",c=":date:",i="[Request this feature](https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=)",d=[{name:"[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)",category:"Legacy",java:{status:o,docsLink:"",note:""},js:{status:n,docsLink:"",note:"Take a look at the [node-soap](https://github.com/vpulim/node-soap) library"}},{name:"[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)",category:"Legacy",java:{status:o,docsLink:`[docs](${s}/java/features/bapi-and-rfc/overview/)`,note:""},js:{status:n,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)",category:"Legacy",java:{status:o,docsLink:`[docs](${s}/java/features/bapi-and-rfc/overview/)`,note:""},js:{status:n,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[OData v2 typed client](https://www.odata.org/documentation/odata-version-2-0/)",category:"OData",java:{status:o,docsLink:`[docs](${s}/java/features/odata/v2-vdm-client)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)`,note:""}},{name:"[OData v4 typed client](https://www.odata.org/documentation/)",category:"OData",java:{status:o,docsLink:`[docs](${s}/java/features/odata/v4-vdm-client)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)`,note:""}},{name:"Generic not typed OData client",category:"OData",java:{status:o,docsLink:`[docs](${s}/java/features/odata/generic-untyped-odata-client)`,note:""},js:{status:n,docsLink:"",note:`We expose [generic HTTP client](${s}/js/features/connectivity/generic-http-client) aware of connectivity abstractions`}},{name:"[OData code generator](https://www.odata.org/documentation/)",category:"OData",java:{status:o,docsLink:`[docs](${s}/java/features/odata/vdm-generator)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/odata/generate-odata-client)`,note:""}},{name:"OpenAPI 2.0 typed client",category:"OpenAPI",java:{status:o,docsLink:`[docs](${s}/java/features/rest/overview)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI 3.0 typed client",category:"OpenAPI",java:{status:o,docsLink:`[docs](${s}/java/features/rest/overview)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI code generator",category:"OpenAPI",java:{status:o,docsLink:`[docs](${s}/java/features/rest/generate-rest-client)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/openapi/generate-openapi-client)`,note:""}},{name:"Enterprise messaging",category:"Messaging",java:{status:c,docsLink:"",note:"Planned. Depends on CAP"},js:{status:c,docsLink:"",note:"Planned. Depends on CAP"}},{name:"Resilience pattern",category:"Advanced",java:{status:o,docsLink:`[docs](${s}/java/features/resilience/resilience)`,note:""},js:{status:n,docsLink:"",note:i}},{name:"Caching pattern",category:"Advanced",java:{status:o,docsLink:`[docs](${s}/java/features/resilience/resilience)`,note:""},js:{status:n,docsLink:"",note:i}},{name:"[BTP Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)",category:"Environment",java:{status:o,docsLink:`[docs](${s}/java/environments/cloud-foundry)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"[Kubernetes with SAP Gardener](https://gardener.cloud/)",category:"Environment",java:{status:o,docsLink:`[docs](${s}/java/environments/kubernetes-gardener)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes)`,note:""}},{name:"[BTP Kyma Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html)",category:"Environment",java:{status:o,docsLink:`[docs](${s}/java/environments/kubernetes-kyma)`,note:"[Kyma Open Source project](https://kyma-project.io/)"},js:{status:o,docsLink:`[docs](${s}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"Deploy with Confidence (DwC)",category:"Environment",java:{status:o,docsLink:"",note:"Internal only or allow listed"},js:{status:n,docsLink:"",note:i}},{name:"[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)",category:"Environment",java:{status:o,docsLink:"",note:"Not recommended for new projects"},js:{status:n,docsLink:"",note:"Not recommended for new projects"}},{name:"[SAP BTP ABAP Environent](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d62652aa2b4600a0fa136de0789648.html)",category:"Environment",java:{status:n,docsLink:"",note:"Out of scope"},js:{status:n,docsLink:"",note:"Out of scope"}},{name:"[BTP CF Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html)",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/sdk-connectivity-destination-service)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Destination Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF XSUAA Service](https://sap.github.io/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service)",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)",category:"Connectivity",java:{status:o,docsLink:"",note:""},js:{status:o,docsLink:"",note:""}},{name:"Authentication",category:"Connectivity",java:{status:o,docsLink:"",note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)`,note:""}},{name:"Multi-tenancy",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/multi-tenancy/thread-context)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"Proxy",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"HTTP Client wrapper",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/http-client)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/generic-http-client)`,note:""}},{name:"[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)",category:"Connectivity",java:{status:o,docsLink:"",note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/on-premise#principal-propagation)`,note:""}},{name:"[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/-destination-service#connect-to-sap-s4hana-on-premise)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/on-premise)`,note:""}},{name:"CLI",category:"CLI",java:{status:o,docsLink:"",note:"Via a Maven plugin "},js:{status:":warning:",docsLink:`[docs](${s}/js/features/cli/overview)`,note:""}},{name:"MDI",category:"MDI",java:{status:o,docsLink:"",note:"Internal only or allow listed"},js:{status:n,docsLink:"",note:i}}]},2968:(e,t,a)=>{a.d(t,{Ar:()=>o,JE:()=>n,WV:()=>s,qW:()=>c});const s=[{Header:"Feature",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],o=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}],n=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],c=[{Header:"Environment",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}]},58911:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(67294);const o=function(e){let{align:t}=e;return s.createElement("span",{className:t?"col text--right":""},s.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},s.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);