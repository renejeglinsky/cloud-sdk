"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(65488),r=n(85162);const s={id:"multi-tenant-application",title:"Introduction to multi-tenant concepts",sidebar_label:"Multi-Tenant Application",description:"Introduction to the development of multi-tenant applications using the SAP Cloud SDK.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial","tenancy","tenant","SaaS"]},l=void 0,p={unversionedId:"tutorials/multi-tenant-application",id:"tutorials/multi-tenant-application",title:"Introduction to multi-tenant concepts",description:"Introduction to the development of multi-tenant applications using the SAP Cloud SDK.",source:"@site/docs-js/tutorials/multi-tenant-application.mdx",sourceDirName:"tutorials",slug:"/tutorials/multi-tenant-application",permalink:"/cloud-sdk/docs/js/tutorials/multi-tenant-application",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/tutorials/multi-tenant-application.mdx",tags:[],version:"current",frontMatter:{id:"multi-tenant-application",title:"Introduction to multi-tenant concepts",sidebar_label:"Multi-Tenant Application",description:"Introduction to the development of multi-tenant applications using the SAP Cloud SDK.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial","tenancy","tenant","SaaS"]},sidebar:"docsJsSidebar",previous:{title:"Change Address Data",permalink:"/cloud-sdk/docs/js/tutorials/address-manager/change"},next:{title:"Release Policy",permalink:"/cloud-sdk/docs/js/release-policy"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"The Application",id:"the-application",level:2},{value:"Deploy the Application",id:"deploy-the-application",level:3},{value:"Call the Service",id:"call-the-service",level:3},{value:"The Approuter",id:"the-approuter",level:2},{value:"Deploy the Approuter",id:"deploy-the-approuter",level:3},{value:"Call the Service via the Approuter",id:"call-the-service-via-the-approuter",level:3},{value:"The Subscription",id:"the-subscription",level:2},{value:"Creating a Subscription",id:"creating-a-subscription",level:3},{value:"Removing a Subscription",id:"removing-a-subscription",level:3},{value:"Real World View",id:"real-world-view",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The code discussed in this guide can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cf-multi-tenant-application"},"samples repository"),".\nThe idea behind this tutorial is to explain the main concepts of multi-tenant applications and how to implement them on SAP BTP.\nThe code in the example is not a copy-paste solution for productive use but a didactic sample.\nYou need to adjust things like application names or routes for your use case."),(0,i.kt)("p",null,"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-tenant application")," is more or less a synonym for a software as a service (SaaS) offering.\nThe idea behind this architecture is that the consumers share the application resources, so they are used more effectively.\nOn SAP BTP, organizations are modeled by subaccounts, and multi-tenant applications are subscribed per subaccount.\nThese organizations are potentially different companies or strongly separated parts of one company.\nIn any case, each organization has its subaccount on SAP BTP and subscribes to a multi-tenant application."),(0,i.kt)("p",null,"Some vocabulary is necessary to understand the next chapters of this tutorial:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provider account")," - The SAP BTP account which hosts the actual application.\nThis account is under the control of the application developer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subscriber accounts")," - The accounts using the application.\nThese accounts are controlled by the consumer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tenant-aware service")," - a service which separates the data of different ",(0,i.kt)("inlineCode",{parentName:"li"},"subscriber accounts")," rigorously.\nIf you build a multi-tenant application, all services handling account specific data need to be tenant-aware services.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial is not a complete guide on the multi-tenancy topic in SAP.\nIt rather covers only points where the SAP Cloud SDK team saw the need of a more detailed guide with samples.\nHave a look at the following guides and tutorials offering detailed information:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/saphanaacademy/generator-saphanaacademy-saas"},"SAP-Hana-Academy")," contains a complete SaaS example for CF and K8s."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/5e8a2b74e4f2442b8257c850ed912f48.html"},"multi-tenant application documentation")," contains all technical details for development."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/01c5f9ba7d6847aaaf069d153b981b51.html"},"approuter documentation")," explains the approuter concepts."),(0,i.kt)("li",{parentName:"ul"},"There are many blogs talking about multi-tenant application development: For example, the blog from ",(0,i.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2018/10/25/using-saas-registry-to-develop-multitenant-application-on-sap-cloud-platform-cloud-foundry-environment/"},"Sandeep provides a good overview")," or ",(0,i.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2022/08/27/fundamentals-of-multitenancy-in-sap-btp/"},"the blog from Raja is also a good starting point"),"."),(0,i.kt)("li",{parentName:"ul"},"This tutorial skips important topics like ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/2291aea5e22440f7a161bdeb9c16b664.html"},"Custom domains")," or ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/56a71531fc154717bf221f9e293ba215.html"},"Role and authorization concepts"),"."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that the subscriber and provider account need to be in the same global account.\nIn case you want to offer a service across global accounts you may follow the ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2022/03/11/consumability-across-global-btp-accounts-via-custom-service-brokers/"},"service broker approach")," which has other limitations.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To execute this tutorial, you need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Two CF subaccounts in the same global account to represent provider and subscriber accounts."),(0,i.kt)("li",{parentName:"ul"},"The provider account needs some quota:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To host two applications (sample application and approuter)"),(0,i.kt)("li",{parentName:"ul"},"To create a service instance for the destination and XSUAA service"))),(0,i.kt)("li",{parentName:"ul"},"You need a basic understanding of SAP BTP and the ",(0,i.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorials/cp-cf-download-cli.html"},"Cloud Foundry CLI"),".")),(0,i.kt)("h2",{id:"the-application"},"The Application"),(0,i.kt)("p",null,"The application is a minimal example which contains only one endpoint containing business logic.\nThis endpoint will call the destination service using the SAP Cloud SDK.\nSince the destination service is tenant aware, it can be used to illustrate service usage within your multi-tenant application.\nYou can find the application code in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cf-multi-tenant-application"},"multi-tenant-app folder"),".\nThe relevant application logic and configuration is located in the following three files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"application.ts")," file, the different endpoints are defined.\nFor now, only the ",(0,i.kt)("inlineCode",{parentName:"li"},"/service")," endpoint is relevant, which represents our multi-tenant service."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"manifest.yml")," file, the route to the application is given and the used services are defined."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"service-endpoint.ts")," a tenant-aware service (destination service) is called and tenant information is collected.\nThe endpoint represents the service offering for the subscriber accounts.")),(0,i.kt)(o.Z,{groupId:"code-files",defaultValue:"application.ts",values:[{label:"application.ts",value:"application.ts"},{label:"manifest.yml",value:"manifest.yml"},{label:"service-endpoint.ts",value:"service-endpoint.ts"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"application.ts",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as bodyParser from 'body-parser';\nimport express from 'express';\nimport { serviceRoute } from './service-endpoint';\nimport { dependencyRoute } from './dependencies-endpoint';\nimport { subscribeRoute, unsubscribeRoute } from './subscription-endpoint';\n\nclass App {\n  public app: express.Application;\n\n  constructor() {\n    this.app = express();\n    this.config();\n    this.routes();\n  }\n\n  private config(): void {\n    this.app.use(bodyParser.json());\n    this.app.use(bodyParser.urlencoded({ extended: false }));\n  }\n\n  private routes(): void {\n    const router = express.Router();\n\n    router.get('/service', serviceRoute);\n    router.get('/dependencies', dependencyRoute);\n    router.put('/subscription/:subscriberTenantId', subscribeRoute);\n    router.delete('/subscription/:subscriberTenantId', unsubscribeRoute);\n    router.get('/index.html', (req, res) => {\n      res.sendFile(join(__dirname, 'index.html'));\n    });\n    this.app.use('/', router);\n  }\n}\n\nexport default new App().app;\n"))),(0,i.kt)(r.Z,{value:"manifest.yml",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"applications:\n    - name: multi-tenant-app\n    path: .\n    memory: 256M\n    buildpacks:\n        - nodejs_buildpack\n    services:\n        - destination\n        - xsuaa\n    routes:\n        - route: 'multi-tenant-app.cfapps.YOUR_REGION.hana.ondemand.com'\n"))),(0,i.kt)(r.Z,{value:"service-endpoint.ts",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Request, Response } from 'express';\nimport {\n  decodeJwt,\n  getDestination,\n  retrieveJwt,\n  subscriberFirst\n} from '@sap-cloud-sdk/connectivity';\nimport { createLogger } from '@sap-cloud-sdk/util';\n\nconst logger = createLogger('destination');\n\nexport async function serviceRoute(req: Request, res: Response) {\n  try {\n    const jwt = retrieveJwt(req);\n    const tenantId = jwt\n      ? decodeJwt(jwt).zid\n      : `No jwt given - provider tenant`;\n    const destination = await getDestination({\n      destinationName: 'myDestination',\n      selectionStrategy: subscriberFirst,\n      jwt\n    });\n    if (destination) {\n      res.status(200).send(\n        `You are on tenant: ${tenantId}.\n           The destination description is: ${destination.originalProperties.Description}`\n      );\n    } else {\n      res.status(404).send(`Destination with name 'myDestination' not found.`);\n    }\n  } catch (e) {\n    logger.error(e);\n    res.status(500).send('Error in retrieving destination - look at the logs.');\n  }\n}\n")))),(0,i.kt)("h3",{id:"deploy-the-application"},"Deploy the Application"),(0,i.kt)("p",null,"Before you can deploy the application, you need to create a service instance for the destination and XSUAA service in your account.\nThere is an ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-sercurity.json")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"service-config")," folder to create the XSUAA instance.\nAlign the name of your service instances with the ones in the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml"),".\nAlso, adjust the route to use the region of your CF, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"cfapps.us10.hana.ondemand.com"),", and the route path to make it unique in the region."),(0,i.kt)("p",null,"Now, log into CF using the CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"cf login")," and enter the account information of the provider account.\nNavigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-tenant-app")," folder and execute ",(0,i.kt)("inlineCode",{parentName:"p"},"cf push")," to deploy the application."),(0,i.kt)("h3",{id:"call-the-service"},"Call the Service"),(0,i.kt)("p",null,"In our example, the service is reachable via (for you the URL will be different depending on landscape):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET https://multi-tenant-app.cfapps.YOUR_REGION.hana.ondemand.com/service\n")),(0,i.kt)("p",null,"The implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"service-endpoint.ts")," does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extracts a JSON web token (JWT) from the request."),(0,i.kt)("li",{parentName:"ul"},"Fetches a destination with the name ",(0,i.kt)("inlineCode",{parentName:"li"},"myDestination")," using the destination service.")),(0,i.kt)("p",null,"Since there is no destination with that name, the service will return ",(0,i.kt)("inlineCode",{parentName:"p"},"404"),"."),(0,i.kt)("p",null,"Create a destination with the name in your provider account and also enter some description for that destination.\nAfter the destination is created, the service should return:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"No jwt given in request. Provider tenant used. The destination description is: Provider Destination Description\n")),(0,i.kt)("h2",{id:"the-approuter"},"The Approuter"),(0,i.kt)("p",null,"The response shows that there is no JWT attached to the request.\nThis task is done by the application router, the XSUAA, and the identity provider (IdP).\nJust think of the approuter as an application taking requests and initiating the authorization flow with the XSUAA and IdP.\nOnce the user enters their credentials, the request is sent to the target with the JWT issued for the user and account."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"More information on the approuter topic can be found in ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/guides/approuter"},"this guide"),".")),(0,i.kt)("p",null,"In a productive case, the approuter may redirect requests to multiple applications.\nIn our simple example, there is just one route."),(0,i.kt)("p",null,"The approuter does not require code, only configuration.\nYou can find all files in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cf-multi-tenant-application/approuter"},"approuter folder"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"manifest.yml")," file contains the config for the approuter"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"xs-app.json")," file contains the config for the route resolution.")),(0,i.kt)(o.Z,{groupId:"code-files",defaultValue:"manifest.yml",values:[{label:"manifest.yml",value:"manifest.yml"},{label:"xs-app.json",value:"xs-app.json"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"manifest.yml",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'applications:\n- name: approuter\nroutes:\n- route: \'route-prefix-YOUR_SUBDOMAIN.cfapps.YOUR_REGION.hana.ondemand.com\'\npath: .\nmemory: 128M\nbuildpacks:\n- nodejs_buildpack\nenv:\nTENANT_HOST_PATTERN: \'route-prefix-(.*).cfapps.YOUR_REGION.hana.ondemand.com\'\ndestinations: >\n[\n{"name":"multi-tenant-app","url":"https://multi-tenant-app.cfapps.YOUR_REGION.hana.ondemand.com","forwardAuthToken":true}\n]\nservices:\n- xsuaa\n- destination\n'))),(0,i.kt)(r.Z,{value:"xs-app.json",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "welcomeFile": "index.html",\n  "routes": [\n    {\n      "source": "(.*)",\n      "target": "/$1",\n      "destination": "multi-tenant-app"\n    }\n  ]\n}\n')))),(0,i.kt)("h3",{id:"deploy-the-approuter"},"Deploy the Approuter"),(0,i.kt)("p",null,"Please adjust the route property in the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," file.\nReplace the placeholders for subdomain and region.\nLog into the provider account using ",(0,i.kt)("inlineCode",{parentName:"p"},"cf login")," and call ",(0,i.kt)("inlineCode",{parentName:"p"},"cf push")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"approuter")," directory.\nThis deploys the approuter.\nOnce the approuter is deployed, you will see it running as a separate application next to your ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-tenant-app"),"."),(0,i.kt)("p",null,"When you open the approuter application you see one route created by the manifest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nGET https://route-prefix-YOUR_SUBDOMAIN.cfapps.YOUR_REGION.hana.ondemand.com/\n\n")),(0,i.kt)("p",null,"When you follow this route, you will get redirected to the ",(0,i.kt)("inlineCode",{parentName:"p"},"welcomeFile")," defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-app.json"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," is located in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cf-multi-tenant-application/multi-tenant-app"},"application"),".\nHow did the routing work:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In our simple scenario, the ",(0,i.kt)("inlineCode",{parentName:"li"},"xs-app.json")," file defines only one route consisting of a ",(0,i.kt)("inlineCode",{parentName:"li"},"source"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"target"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"destination"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"li"},"source")," is a regex and the target defines which capturing group is used in the destination.\nIn our example ",(0,i.kt)("inlineCode",{parentName:"li"},"https://route-prefix-YOUR_SUBDOMAIN.cfapps.YOUR_REGION.hana.ondemand.com/SOME_VALUE")," will lead to ",(0,i.kt)("inlineCode",{parentName:"li"},"SOME_VALUE")," as the capturing group and ",(0,i.kt)("inlineCode",{parentName:"li"},"SOME_VALUE")," is attached to the destination.\nThere are many more options to the routing config explained ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/c103fb414988447ead2023f768096dcc.html"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"manifest.yml")," defines the available destinations for the approuter.\nThe destination ",(0,i.kt)("inlineCode",{parentName:"li"},"multi-tenant-app")," points to the URL of our application.\nTherefore ",(0,i.kt)("inlineCode",{parentName:"li"},"https://route-prefix-YOUR_SUBDOMAIN.cfapps.YOUR_REGION.hana.ondemand.com/SOME_VALUE")," goes to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://multi-tenant-app.cfapps.YOUR_REGION.hana.ondemand.com/SOME_VALUE"))),(0,i.kt)("h3",{id:"call-the-service-via-the-approuter"},"Call the Service via the Approuter"),(0,i.kt)("p",null,"The reason for introducing the approuter was the missing JWT in the request.\nIf you call the service via the approuter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nGET https://route-prefix-YOUR_SUBDOMAIN.cfapps.YOUR_REGION.hana.ondemand.com/service\n\n")),(0,i.kt)("p",null,"you will see a response like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nYou are on tenant: a89ea924-d9c2-4gaf-84fb-3ffcff123456. The destination description is: Provider Destination Description\n\n")),(0,i.kt)("p",null,"which shows that the request contains a JWT issued for the provider account."),(0,i.kt)("h2",{id:"the-subscription"},"The Subscription"),(0,i.kt)("p",null,"Up to now, you called the application via the provider account.\nIn this chapter you learn how to call the service from a different account."),(0,i.kt)("p",null,"The first thing to do is to create an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SaaS provisioning service")," in your provider account.\nYou can find the ",(0,i.kt)("inlineCode",{parentName:"p"},"saas-registry-config.json")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cf-multi-tenant-application"},"samples repository"),".\nThis makes the service subscribable from other accounts.\nYou need to adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"providerTenantId")," to contain your ID and the ",(0,i.kt)("inlineCode",{parentName:"p"},"appUrls")," to match your region and application URL.\nWithin the ",(0,i.kt)("inlineCode",{parentName:"p"},"saas-registry-config.json")," two URLs are mentioned: the ",(0,i.kt)("inlineCode",{parentName:"p"},"getDependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onSubscription"),"."),(0,i.kt)(o.Z,{groupId:"code-files",defaultValue:"saas-registry-config.json",values:[{label:"saas-registry-config.json",value:"saas-registry-config.json"},{label:"dependencies-endpoint.ts",value:"dependencies-endpoint.ts"},{label:"subscription-endpoint.ts",value:"subscription-endpoint.ts"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"saas-registry-config.json",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "xsappname": "xs-multi-tenant-sample-app",\n  "appName": "multi-tenant-app",\n  "providerTenantId": "YOUR_TENANT_GUID",\n  "displayName": "multi tenant example application",\n  "appUrls": {\n    "getDependencies": "https://multi-tenant-app.cfapps.YOUR_REGION.hana.ondemand.com/dependencies",\n    "onSubscription": "https://multi-tenant-app.cfapps.YOUR_REGION.hana.ondemand.com/subscription/{tenantId}"\n  }\n}\n'))),(0,i.kt)(r.Z,{value:"dependencies-endpoint.ts",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Request, Response } from 'express';\nimport * as xsenv from '@sap/xsenv';\n\nconst relevantServices = ['destination'];\n\nexport function dependencyRoute(req: Request, res: Response): void {\n  res.status(200).send(\n    relevantServices\n      .map(s => {\n        const services = xsenv.filterCFServices({ label: s });\n\n        return services && services.length\n          ? {\n              appId:\n                services[0].credentials.xsappname ||\n                services[0].credentials.uaa.xsappname,\n              appName: s\n            }\n          : null;\n      })\n      .filter(elem => elem)\n  );\n}\n"))),(0,i.kt)(r.Z,{value:"subscription-endpoint.ts",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Request, Response } from 'express';\nimport { createLogger } from '@sap-cloud-sdk/util';\nimport { executeHttpRequest } from '@sap-cloud-sdk/http-client';\nimport {\n  bindRoute,\n  createRoute,\n  deleteRoute,\n  getLandscape,\n  getCfGuids\n} from './subscription-util';\n\nconst logger = createLogger('subscription');\nconst appRouterName = 'approuter';\n\nexport async function subscribeRoute(req: Request, res: Response) {\n  try {\n    const subscribedSubdomain = req.body.subscribedSubdomain;\n    const subscriberRoute = `https://route-prefix-${subscribedSubdomain}.${getLandscape()`;\n    logger.info(`subscribe: ${subscriberRoute}`);\n\n    const guids = await getCfGuids(appRouterName);\n    const routeGuid = await createRoute(subscribedSubdomain, guids);\n    await bindRoute(routeGuid, guids);\n\n    res.status(200).send(subscriberRoute);\n  } catch (e) {\n    res.status(500).send(e.message);\n  }\n}\n\nexport async function unsubscribeRoute(req: Request, res: Response) {\n  const subscribedSubdomain = req.body.subscribedSubdomain;\n  logger.info(`un-subscribe: ${subscribedSubdomain}`);\n  await deleteRoute(subscribedSubdomain);\n  res.status(200).send('Unsubscribed.');\n}\n")))),(0,i.kt)("p",null,"These two endpoints are the entry point for the SAP BTP platform to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create and delete a subscription to the application"),(0,i.kt)("li",{parentName:"ul"},"Obtain the services used by the application")),(0,i.kt)("p",null,"In our example the application uses the destination service.\nThe application has a binding to a service instance, so it is clear that the application may call the service.\nHowever, the subscriber account does not know anything about the internal details of the application.\nTherefore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/dependencies")," endpoint provides the information that the destination service may be used also from the subscriber account."),(0,i.kt)("p",null,"Remember to add all SAP BTP services used by your application in the response of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/blob/2b31c670f6bcd4b89a9d1c8b88fd20974d1d5470/samples/cf-multi-tenant-application/multi-tenant-app/src/dependencies-endpoint.ts#L6"},"dependencies endpoint"),".\nIf you do not do that, you retrieve a ",(0,i.kt)("inlineCode",{parentName:"p"},"403")," error from the XSUAA when you request a service token on behalf of a subscriber account."),(0,i.kt)("h3",{id:"creating-a-subscription"},"Creating a Subscription"),(0,i.kt)("p",null,"After you have created an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SaaS provisioning service")," in the provider account, you can create a subscription via the user interface.\nA subscription is a route to the provider application, including the unique subdomain of the subscriber account.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," of the approuter defines how to extract the subscriber account from the URL.\nA route like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET https://route-prefix-YOUR_SUBDOMAIN.cfapps.YOUR_REGION.hana.ondemand.com/service\n")),(0,i.kt)("p",null,"would mean that the subscriber account is ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"YOUR_SUBDOMAIN")),".\nTo automate the onboarding of new accounts, the script in ",(0,i.kt)("inlineCode",{parentName:"p"},"subscription-endpoint.ts")," does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It creates a route"),(0,i.kt)("li",{parentName:"ul"},"Binds the created route to the approuter."),(0,i.kt)("li",{parentName:"ul"},"Returns the route URL so that it can appear in the subscriber account.")),(0,i.kt)("p",null,"The creation of the route uses the ",(0,i.kt)("a",{parentName:"p",href:"https://v3-apidocs.cloudfoundry.org/version/3.126.0/index.html"},"CF API"),".\nUnfortunately, there is no out-of-the-box access of this API when you are in the context of an application.\nThe code assumes a destination with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"cf-api")," in the sample implementation which contains the access data for the CF API:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cf-api"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authentication"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OAuth2Password"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"user"),(0,i.kt)("td",{parentName:"tr",align:null},"a user with permission to the provider account")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"password of this user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client secret"),(0,i.kt)("td",{parentName:"tr",align:null},"empty string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"token service URL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://login.cf.YOUR_REGION.hana.ondemand.com/oauth/token"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://api.cf.YOUR_REGION.hana.ondemand.com"))))),(0,i.kt)("p",null,"You have to adjust the URL and token service URL to for your region e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.cf.us10.hana.ondemand.com"),".\nOnce the destination is present, you can subscribe to the application and routes are created automatically."),(0,i.kt)("p",null,"Log into your second SAP BTP account.\nGo to ",(0,i.kt)("strong",{parentName:"p"},"Service->Instances and Subscriptions")," and create a subscription to the ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-tenant-app"),".\nOnce the application is subscribed, you can have a look at the approuter in the provider account.\nYou should see a second route with the subdomain of the subscriber.\nIf you call the new route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET https://route-prefix-someSubscriberDomain.cfapps.YOUR_REGION.hana.ondemand.com/service\n")),(0,i.kt)("p",null,"you will see a response with the tenant ID from the subscriber account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are on tenant: a89ea924-d9c2-4gaf-84fb-3ffcff7891011. The destination description is: Provider Destination Description.\n")),(0,i.kt)("p",null,"The approuter has extracted the subscriber subdomain from the URL and issued a token for this account.\nAs an application developer, you can use the token to determine the account which currently calls your code."),(0,i.kt)("h3",{id:"removing-a-subscription"},"Removing a Subscription"),(0,i.kt)("p",null,"If the consumer deletes the subscription, the SAP BTP will invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," method on the subscription-endpoint.\nThe code will remove the route from the approuter and make the application unreachable for that consumer.\nThe details of the implementation can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscription-endpoint.ts")," of the sample application."),(0,i.kt)("h2",{id:"real-world-view"},"Real World View"),(0,i.kt)("p",null,"The presented example is totally artificial.\nThis chapter elaborate a bit on what an actual multi-tenant application would look like and how the SAP Cloud SDK helps you.\nDifferent consumer are divided by their unique application URL including their subdomain.\nHowever, up to now, nothing subscriber-specific is happening in the implementation."),(0,i.kt)("p",null,"To get an idea create a destination in the subscriber account with the same name ",(0,i.kt)("inlineCode",{parentName:"p"},"myDestination")," with a different description e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscriber Destination"),".\nA call to the same ",(0,i.kt)("inlineCode",{parentName:"p"},"/service")," endpoint will lead now :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are on tenant: a89ea924-d9c2-4gaf-84fb-3ffcff7891011. The destination description is: Subscriber Destination.\n")),(0,i.kt)("p",null,"The destination of the subscriber account is used at runtime, because the call in the ",(0,i.kt)("inlineCode",{parentName:"p"},"service-endpoint.ts")," uses the selection strategy ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nYou can change this by using ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/api/2.9.0/variables/sap_cloud_sdk_connectivity.DestinationSelectionStrategies"},"different selection strategies"),".\nThis enables consumers to maintain their custom destination used within a multi-tenant application.\nThe destination from the provider account could be seen as a fallback."),(0,i.kt)("p",null,"This is only one example of a tenant-aware service.\nImagine a database with a ",(0,i.kt)("inlineCode",{parentName:"p"},"tenantId")," column to store consumer specific configuration.\nYou can extract the value from the JWT as shown in the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const jwt = retrieveJwt(req);\nconst tenantId = jwt ? decodeJwt(jwt).zid : `No jwt given - Provider Tenant?`;\n//do something for the specific tenantId\n")))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),i=n(67294),o=n(86010),r=n(72389),s=n(67392),l=n(7094),p=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:m,groupId:h,className:f}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,l.U)(),[T,w]=(0,i.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==T&&k.some((t=>t.value===e))&&w(e)}const R=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==T&&(S(t),w(a),null!=h&&y(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:R},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,i.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,r.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);