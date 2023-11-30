"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9289],{81731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=a(87462),s=(a(67294),a(3905)),o=a(58911),i=(a(68744),a(44996)),r=a(50941);const c={id:"overview-cloud-sdk-for-java",title:"Java SDK Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d=void 0,l={unversionedId:"overview-cloud-sdk-for-java",id:"version-v5/overview-cloud-sdk-for-java",title:"Java SDK Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",source:"@site/docs-java_versioned_docs/version-v5/overview.mdx",sourceDirName:".",slug:"/overview-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/v5/overview-cloud-sdk-for-java",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v5/overview.mdx",tags:[],version:"v5",frontMatter:{id:"overview-cloud-sdk-for-java",title:"Java SDK Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",next:{title:"Getting Started",permalink:"/cloud-sdk/docs/java/v5/getting-started"}},u={},p=[{value:"Quick Start",id:"quick-start",level:2},{value:"Why the SAP Cloud SDK for Java?",id:"why-the-sap-cloud-sdk-for-java",level:2},{value:"Main Features of the SAP Cloud SDK for Java",id:"main-features-of-the-sap-cloud-sdk-for-java",level:2},{value:"Connectivity",id:"connectivity",level:3},{value:"OData and OpenAPI",id:"odata-and-openapi",level:3},{value:"Resilience",id:"resilience",level:3},{value:"Multitenancy",id:"multitenancy",level:3},{value:"Further Information",id:"further-information",level:2},{value:"Supported Platforms and Environments",id:"supported-platforms-and-environments",level:3},{value:"Supported Java Versions",id:"supported-java-versions",level:3},{value:"Supported Frameworks",id:"supported-frameworks",level:3},{value:"Availability and Licensing",id:"availability-and-licensing",level:3},{value:"Release Schedule",id:"release-schedule",level:3},{value:"Support",id:"support",level:3}],v={toc:p};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{mdxType:"MvnBadge"}),(0,s.kt)("h2",{id:"quick-start"},"Quick Start"),(0,s.kt)("p",null,"For a quick start check out the ",(0,s.kt)("a",{parentName:"p",href:"getting-started"},"getting started")," section."),(0,s.kt)("h2",{id:"why-the-sap-cloud-sdk-for-java"},"Why the SAP Cloud SDK for Java?"),(0,s.kt)("p",null,"The SAP Cloud SDK for Java makes it easy to build highly connected, resilient, multi tenant SaaS applications on the SAP Business Technology Platform (SAP BTP).\nIt enables you to perform outbound requests using various protocols while only writing the business logic."),(0,s.kt)("p",null,"For example, with the SAP Cloud SDK for Java you can connect to an SAP S/4HANA (Cloud) system via OData with only a few lines of code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'Destination destination = DestinationAccessor.getDestination("my-s4-system");\n\nList<BusinessPartner> businessPartners = new DefaultBusinessPartnerService()\n                .getAllBusinessPartner()\n                .top(5)\n                .executeRequest(destination);\n')),(0,s.kt)("p",null,"This example uses the pre-generated OData client together with the destination API to interact with the ",(0,s.kt)("a",{parentName:"p",href:"https://api.sap.com/api/API_BUSINESS_PARTNER/overview"},"Business Partner Service")," of SAP S/4HANA Cloud."),(0,s.kt)("p",null,"The image below shows a typical architecture of an application built with the SAP Cloud SDK:"),(0,s.kt)(r.Z,{alt:"General architecture",sources:{light:(0,i.Z)("img/general-architecture_light.svg"),dark:(0,i.Z)("img/general-architecture_dark.svg")},className:"center",width:"80%",mdxType:"ThemedImage"}),(0,s.kt)("h2",{id:"main-features-of-the-sap-cloud-sdk-for-java"},"Main Features of the SAP Cloud SDK for Java"),(0,s.kt)("p",null,"The SAP Cloud SDK for Java brings a wide variety of features to power your business application."),(0,s.kt)("p",null,"At its core, the SAP Cloud SDK for Java integrates the SAP BTP Destination and Connectivity services with powerful clients (e.g. OData) in a multi tenant and resilient manner.\nThis integration reduces the code for typical outbound requests down to just a few statements."),(0,s.kt)("p",null,"The image below visualises the main components of the SAP Cloud SDK for Java."),(0,s.kt)(r.Z,{alt:"Core packages",sources:{light:(0,i.Z)("img/java-sdk-overview.png"),dark:(0,i.Z)("img/java-sdk-overview.png")},className:"center",width:"80%",mdxType:"ThemedImage"}),(0,s.kt)("h3",{id:"connectivity"},"Connectivity"),(0,s.kt)("p",null,"The SAP Cloud SDK for Java provides an API that abstracts the details of establishing connections to other systems: The ",(0,s.kt)("a",{parentName:"p",href:"features/connectivity/destination-service"},"Destination API"),".\nThis API makes it easy to connect to cloud and On-Premise systems with various authentication methods.\nUnder the hood the SAP Cloud SDK handles all the necessary authorization and token flows that are necessary for the specific destination."),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"features/connectivity/destination-service#accessing-destinations"},"access destinations defined in the SAP BTP Cockpit")," directly in your code.\nOr you can define your own destinations, for example to ",(0,s.kt)("a",{parentName:"p",href:"features/connectivity/destination-service#skip-destination-creation-step-for-certain-authentication-types-on-cloud-foundry"},"connect to SAP BTP services"),"."),(0,s.kt)("p",null,"You can then use these destinations to perform REST (OpenAPI or OData), RFC or SOAP requests.\nOr you can ",(0,s.kt)("a",{parentName:"p",href:"features/connectivity/http-client#general-usage"},"get a ready-made Http Client")," for a destination to execute your own requests."),(0,s.kt)("h3",{id:"odata-and-openapi"},"OData and OpenAPI"),(0,s.kt)("p",null,"The SAP Cloud SDK for Java also provides an easy and convenient type safe way to consume OData and OpenAPI services in your applications."),(0,s.kt)(r.Z,{alt:"IDE support for VDM",sources:{light:(0,i.Z)("img/ide-support-for-vdm-light.gif"),dark:(0,i.Z)("img/ide-support-for-vdm-dark.gif")},className:"center",width:"80%",mdxType:"ThemedImage"}),(0,s.kt)("p",null,"You can use a pre-generated OData client that contains all services of ",(0,s.kt)("a",{parentName:"p",href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"},"SAP S/4HANA Cloud")," and ",(0,s.kt)("a",{parentName:"p",href:"https://api.sap.com/package/S4HANAOPAPI?section=Artifacts"},"SAP S/4HANA On-premise"),"."),(0,s.kt)("p",null,"Or you can generate your own API client for ",(0,s.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-client"},"OData")," or ",(0,s.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/js/features/openapi/generate-client"},"OpenAPI")," using the respective generators provided by the SAP Cloud SDK.\nYou can also find detailed steps and a usage examples on the ",(0,s.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP Business Accelerator Hub"),"."),(0,s.kt)(r.Z,{alt:"API Business Hub",sources:{light:(0,i.Z)("img/api_business_hub.png"),dark:(0,i.Z)("img/api_business_hub.png")},className:"center",width:"100%",mdxType:"ThemedImage"}),(0,s.kt)("h3",{id:"resilience"},"Resilience"),(0,s.kt)("p",null,"To ensure that applications can handle and recover from potential failures, the SAP Cloud SDK for Java provides abstractions for frequently used resilience patterns.\nThese patterns include caching, timeouts, retires, rate limiters, circuit breakers and bulkheads.\nYou can build a ",(0,s.kt)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," to define which patterns you need and then use the ",(0,s.kt)("inlineCode",{parentName:"p"},"ResilienceDecorator")," to apply them to your operations."),(0,s.kt)("p",null,"For example, to configure a timeout of 100 ms for an operation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'TimeLimiterConfiguration timeLimiterConfig =\n        TimeLimiterConfiguration.of().timeoutDuration(Duration.ofMillis(100));\nResilienceConfiguration resilienceConfiguration =\n        ResilienceConfiguration.empty("my-resilience-config")\n          .timeLimiterConfiguration(timeLimiterConfig);\n\nResilienceDecorator.executeSupplier(() -> operation(), configuration);\n')),(0,s.kt)("p",null,"You can find more details in our dedicated guide on ",(0,s.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/features/resilience"},"Resilience"),"."),(0,s.kt)("h3",{id:"multitenancy"},"Multitenancy"),(0,s.kt)("p",null,"Multitenancy enables a single instance of an application to serve multiple technically separated user groups.\nTo achieve this the SAP Cloud SDK for Java applies all its features in a tenant and user aware manner by default.\nFor example, fetching a destination with the SAP Cloud SDK will fetch and cache it for the ",(0,s.kt)("em",{parentName:"p"},"current tenant"),"."),(0,s.kt)("p",null,"You can access the current tenant or user and other information via the dedicated accessors, for example ",(0,s.kt)("inlineCode",{parentName:"p"},"TenantAccessor")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"PrincipalAccessor"),".\nThis enables you to run any code in a tenant aware manner."),(0,s.kt)("p",null,"This is achieved using the concept of ",(0,s.kt)("inlineCode",{parentName:"p"},"ThreadContext")," and you can read more about this on the dedicated guide on ",(0,s.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/features/multi-tenancy/thread-context"},"Multitenancy"),"."),(0,s.kt)("h2",{id:"further-information"},"Further Information"),(0,s.kt)("h3",{id:"supported-platforms-and-environments"},"Supported Platforms and Environments"),(0,s.kt)("p",null,"The SAP Cloud SDK abstracts away from details of the underlying platform the application is running upon.\nThis enables applications to adopt platform changes or fully switch to a different platform without any code changes."),(0,s.kt)("p",null,"Currently supported environments are :"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html"},"SAP BTP Cloud Foundry")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"K8S")," , ",(0,s.kt)("a",{parentName:"li",href:"https://gardener.cloud/"},"K8S with SAP Gardener")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html"},"SAP BTP Kyma")),(0,s.kt)("li",{parentName:"ol"},"Deploy with Confidence (For SAP internal customers only)")),(0,s.kt)("h3",{id:"supported-java-versions"},"Supported Java Versions"),(0,s.kt)("p",null,"The SAP Cloud SDK for Java runs with Java 17."),(0,s.kt)("p",null,"Support for apps built on TomEE / Tomcat will come after the release of SAP Java Buildpack 2."),(0,s.kt)("h3",{id:"supported-frameworks"},"Supported Frameworks"),(0,s.kt)("p",null,"The SAP Cloud SDK can be integrated into applications based on ",(0,s.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"SAP Cloud Application Programming Model")," version ",(0,s.kt)("inlineCode",{parentName:"p"},"2.4.0")," or higher, ",(0,s.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-framework"},"Spring 6")," or ",(0,s.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"Spring Boot 3"),"."),(0,s.kt)("h3",{id:"availability-and-licensing"},"Availability and Licensing"),(0,s.kt)("p",null,"All libraries are available on ",(0,s.kt)("a",{parentName:"p",href:"https://central.sonatype.dev/search?namespace=com.sap.cloud.sdk"},"Maven Central")," under the ",(0,s.kt)("a",{parentName:"p",href:"https://tools.eu1.hana.ondemand.com/developer-license-3_1.txt"},"SAP Developer license"),".\nThe license of clients generated with any of the SAP Cloud SDK code generators depends on the used service spec license."),(0,s.kt)("h3",{id:"release-schedule"},"Release Schedule"),(0,s.kt)("p",null,"We usually release minor versions bi-weekly."),(0,s.kt)("p",null,"We intend to release a new major version of the SAP Cloud SDK for Java every twelve months.\nFor details, check the ",(0,s.kt)("a",{parentName:"p",href:"release-policy"},"release policy"),"."),(0,s.kt)("h3",{id:"support"},"Support"),(0,s.kt)("p",null,"The SAP Cloud SDK is actively supported via various internal and external channels which you can find ",(0,s.kt)("a",{parentName:"p",href:"support"},"here"),"."))}m.isMDXComponent=!0},68744:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(87317),o=a(98126),i=a(57561),r=a(2968),c=a(34367),d=a(10215);function l(){const e=n.useMemo((()=>c.R2),[]),t=n.useMemo((()=>r.Ar),[]);return n.createElement(n.Fragment,null,n.createElement(s.D,{remarkPlugins:[i.Z,o.Z]},"**Legend:** \u2714\ufe0f - Generally Available, \u274c - Not Available, \u2699\ufe0f - Beta, \ud83d\udcc5 - Planned"),n.createElement(d.Z,{columns:t,data:e}))}},10215:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),s=a(67294),o=a(87317),i=a(79521),r=a(57561),c=a(98126);function d(e){let{columns:t,data:a}=e;const{getTableProps:d,getTableBodyProps:l,headerGroups:u,rows:p,prepareRow:v}=(0,i.useTable)({columns:t,data:a});return s.createElement("table",d(),s.createElement("thead",null,u.map((e=>s.createElement("tr",(0,n.Z)({key:e.key},e.getHeaderGroupProps()),e.headers.map((e=>s.createElement("th",(0,n.Z)({key:e.key},e.getHeaderProps()),e.render("Header")))))))),s.createElement("tbody",l(),p.map(((e,t)=>(v(e),s.createElement("tr",(0,n.Z)({key:e.key},e.getRowProps()),e.cells.map((e=>s.createElement("td",(0,n.Z)({key:e.key},e.getCellProps()),s.createElement(o.D,{remarkPlugins:[r.Z,c.Z]},e.value))))))))))}},34367:(e,t,a)=>{a.d(t,{R2:()=>d});const n="/cloud-sdk/docs",s=":heavy_check_mark:",o=":x:",i=":date:",r=":warning:",c="[Request this feature](https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=)",d=[{name:"[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)",category:"Legacy",java:{status:r,docsLink:"",note:"Deprecated since 4.13.0"},js:{status:o,docsLink:"",note:"Take a look at the [node-soap](https://github.com/vpulim/node-soap) library"}},{name:"[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)",category:"Legacy",java:{status:s,docsLink:`[docs](${n}/java/features/bapi-and-rfc/overview/)`,note:""},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)",category:"Legacy",java:{status:s,docsLink:`[docs](${n}/java/features/bapi-and-rfc/overview/)`,note:""},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[OData v2 typed client](https://www.odata.org/documentation/odata-version-2-0/)",category:"OData",java:{status:s,docsLink:`[docs](${n}/java/features/odata/v2-vdm-client)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)`,note:""}},{name:"[OData v4 typed client](https://www.odata.org/documentation/)",category:"OData",java:{status:s,docsLink:`[docs](${n}/java/features/odata/v4-vdm-client)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)`,note:""}},{name:"Generic not typed OData client",category:"OData",java:{status:s,docsLink:`[docs](${n}/java/features/odata/generic-untyped-odata-client)`,note:""},js:{status:o,docsLink:"",note:`We expose [generic HTTP client](${n}/js/features/connectivity/generic-http-client) aware of connectivity abstractions`}},{name:"[OData code generator](https://www.odata.org/documentation/)",category:"OData",java:{status:s,docsLink:`[docs](${n}/java/features/odata/vdm-generator)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/odata/generate-odata-client)`,note:""}},{name:"OpenAPI 2.0 typed client",category:"OpenAPI",java:{status:s,docsLink:`[docs](${n}/java/features/rest/overview)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI 3.0 typed client",category:"OpenAPI",java:{status:s,docsLink:`[docs](${n}/java/features/rest/overview)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI code generator",category:"OpenAPI",java:{status:s,docsLink:`[docs](${n}/java/features/rest/generate-rest-client)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/openapi/generate-openapi-client)`,note:""}},{name:"Enterprise messaging",category:"Messaging",java:{status:i,docsLink:"",note:"Planned. Depends on CAP"},js:{status:i,docsLink:"",note:"Planned. Depends on CAP"}},{name:"Resilience pattern",category:"Advanced",java:{status:s,docsLink:`[docs](${n}/java/features/resilience/resilience)`,note:""},js:{status:o,docsLink:"",note:c}},{name:"Caching pattern",category:"Advanced",java:{status:s,docsLink:`[docs](${n}/java/features/resilience/resilience)`,note:""},js:{status:o,docsLink:"",note:c}},{name:"[BTP Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)",category:"Environment",java:{status:s,docsLink:`[docs](${n}/java/environments/cloud-foundry)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"[Kubernetes with SAP Gardener](https://gardener.cloud/)",category:"Environment",java:{status:s,docsLink:`[docs](${n}/java/environments/kubernetes-gardener)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes)`,note:""}},{name:"[BTP Kyma Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html)",category:"Environment",java:{status:s,docsLink:`[docs](${n}/java/environments/kubernetes-kyma)`,note:"[Kyma Open Source project](https://kyma-project.io/)"},js:{status:s,docsLink:`[docs](${n}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"Deploy with Confidence (DwC)",category:"Environment",java:{status:s,docsLink:"",note:"Internal only or allow listed"},js:{status:o,docsLink:"",note:c}},{name:"[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)",category:"Environment",java:{status:r,docsLink:"",note:"Deprecated since 4.17.0"},js:{status:o,docsLink:"",note:"Not recommended for new projects"}},{name:"[SAP BTP ABAP Environent](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d62652aa2b4600a0fa136de0789648.html)",category:"Environment",java:{status:o,docsLink:"",note:"Out of scope"},js:{status:o,docsLink:"",note:"Out of scope"}},{name:"[BTP CF Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html)",category:"Connectivity",java:{status:s,docsLink:`[docs](${n}/java/features/connectivity/destination-service)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Destination Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)",category:"Connectivity",java:{status:s,docsLink:`[docs](${n}/java/features/connectivity/destination-service)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF XSUAA Service](https://sap.github.io/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service)",category:"Connectivity",java:{status:s,docsLink:`[docs](${n}/java/features/connectivity/destination-service)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)",category:"Connectivity",java:{status:s,docsLink:"",note:""},js:{status:s,docsLink:"",note:""}},{name:"Authentication",category:"Connectivity",java:{status:s,docsLink:"",note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)`,note:""}},{name:"Multi-tenancy",category:"Connectivity",java:{status:s,docsLink:`[docs](${n}/java/features/multi-tenancy/thread-context)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"Proxy",category:"Connectivity",java:{status:s,docsLink:`[docs](${n}/java/features/connectivity/destination-service)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"HTTP Client wrapper",category:"Connectivity",java:{status:s,docsLink:`[docs](${n}/java/features/connectivity/http-client)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/generic-http-client)`,note:""}},{name:"[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)",category:"Connectivity",java:{status:s,docsLink:"",note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/on-premise#principal-propagation)`,note:""}},{name:"[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)",category:"Connectivity",java:{status:s,docsLink:`[docs](${n}/java/features/connectivity/destination-service#connect-to-sap-s4hana-on-premise)`,note:""},js:{status:s,docsLink:`[docs](${n}/js/features/connectivity/on-premise)`,note:""}},{name:"MDI",category:"MDI",java:{status:s,docsLink:"",note:"Internal only or allow listed"},js:{status:o,docsLink:"",note:c}}]},2968:(e,t,a)=>{a.d(t,{Ar:()=>s,JE:()=>o,WV:()=>n,qW:()=>i});const n=[{Header:"Feature",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],s=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}],o=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],i=[{Header:"Environment",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}]},58911:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);const s=function(e){let{align:t}=e;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},n.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);