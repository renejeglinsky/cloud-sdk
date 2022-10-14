"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905)),i=n(58911);const r={id:"scp-workflow-rest-api",title:"Type-Safe Client for SAP Workflow service",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Workflow service",description:"Learn how to access the SAP BTP Workflow REST API with the type-safe client from the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","rest","scp","workflow"]},l=void 0,s={unversionedId:"features/rest/clients/scp-workflow-rest-api",id:"features/rest/clients/scp-workflow-rest-api",title:"Type-Safe Client for SAP Workflow service",description:"Learn how to access the SAP BTP Workflow REST API with the type-safe client from the SAP Cloud SDK for Java",source:"@site/docs-java/features/rest/clients/scp-workflow-rest-api.mdx",sourceDirName:"features/rest/clients",slug:"/features/rest/clients/scp-workflow-rest-api",permalink:"/cloud-sdk/docs/java/features/rest/clients/scp-workflow-rest-api",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/rest/clients/scp-workflow-rest-api.mdx",tags:[],version:"current",frontMatter:{id:"scp-workflow-rest-api",title:"Type-Safe Client for SAP Workflow service",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Workflow service",description:"Learn how to access the SAP BTP Workflow REST API with the type-safe client from the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","rest","scp","workflow"]},sidebar:"docsJavaSidebar",previous:{title:"Generate a Typed OpenAPI Client",permalink:"/cloud-sdk/docs/java/features/rest/generate-rest-client"},next:{title:"SAP Business Rules service",permalink:"/cloud-sdk/docs/java/features/rest/clients/btp-business-rules-rest-api"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Example Use Case for This Guide",id:"example-use-case-for-this-guide",level:2},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Consume the SAP Workflow REST API in SAP BTP Cloud Foundry environment",id:"consume-the-sap-workflow-rest-api-in-sap-btp-cloud-foundry-environment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Cloud Foundry Configuration",id:"cloud-foundry-configuration",level:3},{value:"Bind App to SAP Business Technology Platform Workflow Service instance",id:"bind-app-to-sap-business-technology-platform-workflow-service-instance",level:4},{value:"Identifying Necessary OAuth Scopes",id:"identifying-necessary-oauth-scopes",level:5},{value:"Create Service Instance Configuration",id:"create-service-instance-configuration",level:5},{value:"Create Service Instance",id:"create-service-instance",level:5},{value:"Bind your App to Service Instance",id:"bind-your-app-to-service-instance",level:5},{value:"Develop Your App",id:"develop-your-app",level:3},{value:"Dependency Assumptions",id:"dependency-assumptions",level:4},{value:"Add SAP Workflow Service Dependency To Your Project",id:"add-sap-workflow-service-dependency-to-your-project",level:4},{value:"Invoke the Java Client Library",id:"invoke-the-java-client-library",level:3},{value:"Create Destination",id:"create-destination",level:4},{value:"Invoke the SAP BTP Workflow API",id:"invoke-the-sap-btp-workflow-api",level:4},{value:"Capabilities and Limitations",id:"capabilities-and-limitations",level:2},{value:"Capabilities and Benefits",id:"capabilities-and-benefits",level:3},{value:"Known Limitations",id:"known-limitations",level:3},{value:"Additional Information",id:"additional-information",level:2},{value:"Creating HTTP Destinations Manually",id:"creating-http-destinations-manually",level:3},{value:"Take Note of API endpoint and OAuth Credentials",id:"take-note-of-api-endpoint-and-oauth-credentials",level:3},{value:"Create HTTP Destination",id:"create-http-destination",level:3},{value:"Create Destination Programmatically",id:"create-destination-programmatically",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{mdxType:"MvnBadge"}),(0,a.kt)("admonition",{title:"Generally Available",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This library is released for ",(0,a.kt)("strong",{parentName:"p"},"productive usage")," as of November 19, 2020.")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/product/WORKFLOW_SERVICE/Cloud/en-US"},"SAP Workflow service")," is available on the Cloud Foundry environment ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2019/04/03/workflow-and-business-rules-now-available-in-cloud-foundry-environment-of-sap-cloud-platform/"},"since April 2019"),".\nIt helps you build, run, and manage workflows to model processes that span from simple approval steps to complex business scenarios with several involved parties."),(0,a.kt)("p",null,"Imagine a business scenario involving multiple parties, complex validation logic, and parallel execution flows.\n",(0,a.kt)("strong",{parentName:"p"},"SCP Workflow service")," solves exactly this problem.\nTo benefit from features offered by the REST API of the SAP BTP Workflow service you can leverage the type-safe client library provided by the ",(0,a.kt)("strong",{parentName:"p"},"SAP Cloud SDK")," and discover it via your IDE or ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/df943e71122448caaf3c49f5ffd80627.html"},"manually integrate it into your application"),"."),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2018/01/09/sap-cloud-platform-workflow-developer-center/"},"this blog post")," for an overview of all resources about the SAP BTP Workflow Service."),(0,a.kt)("h2",{id:"example-use-case-for-this-guide"},"Example Use Case for This Guide"),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"We need to model a business workflow involving multiple parties, complex validation logic, and parallel flows execution together with other business logic in your app hosted on the SAP Business Technology Platform."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Use SAP Workflow service and its REST API.\nYou can do workflow modeling using a convenient visual editor and call the SAP BTP Workflow REST API via type-safe client library module provided by the SAP Cloud SDK for Java.\nAdditionally, you'll get other benefits from the SAP Cloud SDK like destinations and authentication handling, complete type-safety, multi-tenancy, easy resilience, and caching configuration."),(0,a.kt)("h2",{id:"consume-the-sap-workflow-rest-api-in-sap-btp-cloud-foundry-environment"},"Consume the SAP Workflow REST API in SAP BTP Cloud Foundry environment"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Add the latest version of the ",(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"},"SAP Cloud SDK")," to your Java application dependencies or ",(0,a.kt)("a",{parentName:"p",href:"../../../getting-started"},"generate a new one from archetypes that we provide"),"."),(0,a.kt)("p",null,"After we have an SAP Cloud SDK-based Java app, we can invoke the SAP BTP Workflow REST API in our business logic.\nMore specifically, we are interested in retrieving a list of all workflow definitions that exist in the connected SAP BTP Workflow service instance which corresponds to the API endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/workflow-definitions"),".\nYou can find it under the section ",(0,a.kt)("inlineCode",{parentName:"p"},"Workflow Definitions")," on the left-hand side of your CF cockpit."),(0,a.kt)("h3",{id:"cloud-foundry-configuration"},"Cloud Foundry Configuration"),(0,a.kt)("p",null,"Let's look in detail at all necessary steps of Cloud Foundry configuration to run this scenario."),(0,a.kt)("h4",{id:"bind-app-to-sap-business-technology-platform-workflow-service-instance"},"Bind App to SAP Business Technology Platform Workflow Service instance"),(0,a.kt)("p",null,"Refer to the documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/e8d88dd056f14c75af59e68d6b20345f.html"},"help.sap.com")," for the full picture.\nWe'll outline the essentials with the assumption that you understand or have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Which Cloud Foundry subaccount and space you want to use"),(0,a.kt)("li",{parentName:"ul"},"You have access to the SAP BTP Workflow Service feature"),(0,a.kt)("li",{parentName:"ul"},"You possess all necessary authorizations on Cloud Foundry"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../guides/cf-cli"},"You have installed the Cloud Foundry Command Line Interface (CLI) on your machine"),".")),(0,a.kt)("h5",{id:"identifying-necessary-oauth-scopes"},"Identifying Necessary OAuth Scopes"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The SAP BTP Workflow REST API is protected and requires authenticating with an OAuth 2.0 access token.\nEach particular API endpoint requires the client to provide an access token valid for the respective endpoint.\nThe token must be issued for the respective OAuth scope that corresponds to the desired API endpoint.")),(0,a.kt)("p",null,"Let's figure out which OAuth scope is relevant for our application.\nFor that, we have to check ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/api/SAP_CP_Workflow_CF/resource"},"SCP Workflow API documentation")," to find out that the endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/workflow-definitions")," is assigned to the scope ",(0,a.kt)("inlineCode",{parentName:"p"},"WORKFLOW_DEFINITION_GET"),"."),(0,a.kt)("h5",{id:"create-service-instance-configuration"},"Create Service Instance Configuration"),(0,a.kt)("p",null,"Open a text editor and create a JSON file with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "authorities": ["WORKFLOW_DEFINITION_GET"]\n}\n')),(0,a.kt)("p",null,"Remember where you've saved the file, you'll need it later."),(0,a.kt)("h5",{id:"create-service-instance"},"Create Service Instance"),(0,a.kt)("p",null,"Open the command line and authenticate at your Cloud Foundry organization by invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"cf login"),"."),(0,a.kt)("p",null,"Consider specifying the respective ",(0,a.kt)("strong",{parentName:"p"},"subaccount"),", ",(0,a.kt)("strong",{parentName:"p"},"organization"),", and ",(0,a.kt)("strong",{parentName:"p"},"space")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"cf target")," if necessary."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to navigate to the directory that contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," configuration file we created before and run the following to create the service instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cf create-service workflow standard my-workflow -c <path-to-json-file>\n")),(0,a.kt)("p",null,'This command creates an instance of the SAP BTP Workflow Service in the CF space that your CLI points to.\nMore specifically, it uses the service plan "standard" and takes the ',(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," configuration into account.\nNote that we named the service instance ",(0,a.kt)("inlineCode",{parentName:"p"},"my-workflow"),".\nIf you have chosen a different name, please, remember the name as you'll need it for your deployment descriptor ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.yml")," later on."),(0,a.kt)("p",null,"Once the service instance creation is finished, you can see the service instance in your CF space under ",(0,a.kt)("inlineCode",{parentName:"p"},"Services")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Instances")," in the left-hand side menu."),(0,a.kt)("h5",{id:"bind-your-app-to-service-instance"},"Bind your App to Service Instance"),(0,a.kt)("p",null,"Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.yml")," in your project and mention your service instance under ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"applications:\n  - name: awesome-app\n    memory: 1024M\n    timeout: 600\n    random-route: false\n    path: application/target/awesome-app-application.war\n    buildpacks:\n      - sap_java_buildpack\n    env:\n      TARGET_RUNTIME: tomee7\n      SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO}'\n      JBP_CONFIG_SAPJVM_MEMORY_SIZES: metaspace:128m..\n    services:\n      - my-destination\n      - my-workflow\n    routes:\n      - route: <omitted-on-purpose>\n")),(0,a.kt)("p",null,"This ensures that the ",(0,a.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," environment variable of the CF application gets enhanced with an additional entry containing the connection details of the newly bound workflow service.\nNow, redeploy your app with ",(0,a.kt)("inlineCode",{parentName:"p"},"cf push"),"."),(0,a.kt)("h3",{id:"develop-your-app"},"Develop Your App"),(0,a.kt)("h4",{id:"dependency-assumptions"},"Dependency Assumptions"),(0,a.kt)("p",null,"We assume that you have a Java project using the SAP Cloud SDK.\nIf not, we recommend going ahead and ",(0,a.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/getting-started"},"creating one from one of the Maven archetypes"),".\nYou should also have ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"Apache Maven")," installed and be able to successfully run ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean install")," from the root of your project."),(0,a.kt)("p",null,"Make sure that you have the SAP Cloud SDK Bill-of-Material (BOM) in your ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of your ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," structure like on the example below."),(0,a.kt)("admonition",{title:"Always use the latest version of SAP Cloud SDK",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Current version is: ",(0,a.kt)(i.Z,{mdxType:"MvnBadge"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>com.sap.cloud.sdk</groupId>\n      <artifactId>sdk-bom</artifactId>\n      <version>4.XX.X</version>\n      <type>pom</type>\n      <scope>import</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n")),(0,a.kt)("h4",{id:"add-sap-workflow-service-dependency-to-your-project"},"Add SAP Workflow Service Dependency To Your Project"),(0,a.kt)("p",null,"You can refer to the Java client library for the SAP BTP Workflow service with the following Maven dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>com.sap.cloud.sdk.services</groupId>\n    <artifactId>scp-workflow-cf</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"After adding the dependency to your ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file, run ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean install")," to let ",(0,a.kt)("inlineCode",{parentName:"p"},"Maven")," install it."),(0,a.kt)("h3",{id:"invoke-the-java-client-library"},"Invoke the Java Client Library"),(0,a.kt)("h4",{id:"create-destination"},"Create Destination"),(0,a.kt)("p",null,"Let's create a Java representation of this destination.\nYou can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ScpCfServiceDestinationLoader.getDestinationForService")," to create a destination by reading properties from the ",(0,a.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," environment variable entry for the workflow service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'final HttpDestination destination =\n                ScpCfServiceDestinationLoader.getDestinationForService(\n                        ScpCfServiceDestinationLoader.CfServices.WORKFLOW,\n                        "my-workflow");\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ScpCfServiceDestinationLoader.getDestinationForService")," API currently only works out of the box for a handful of services.\nFor other services, the alternative would be to create a Destination manually in CF using values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," and then accessing the destination using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DestinationAccessor"),".\nFor details refer to ",(0,a.kt)("a",{parentName:"p",href:"scp-workflow-rest-api#additional-information"},"Additional information")," section.")),(0,a.kt)("h4",{id:"invoke-the-sap-btp-workflow-api"},"Invoke the SAP BTP Workflow API"),(0,a.kt)("p",null,"Now we can make the first call to SAP BTP Workflow API by invoking the method to get the list of all existing workflow definitions.\nFor that, we pass the HTTP destination as an argument to the constructor of the API class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"final List<WorkflowDefinition> workflowDefinitions =\n        new WorkflowDefinitionsApi(httpDestination).queryDefinitions();\n")),(0,a.kt)("p",null,"This is how we call the SAP BTP Workflow REST API in a type-safe manner and benefit from type-safe access to the resulting response objects.\nFor instance, we can read particular details about each workflow definition.\nWe'll log them for demonstration purposes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"workflowDefinitions.forEach(workflowDefinition -> {\n    log.info(workflowDefinition.getName());\n    log.info(workflowDefinition.getVersion());\n    log.info(workflowDefinition.getCreatedAt().toString());\n});\n")),(0,a.kt)("p",null,"Another benefit is that the SAP BTP Workflow API library allows us to inspect all jobs related to a particular workflow definition together with many other properties.\nYou can check the SAP BTP Workflow API's model definition on the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/package/SAPCPWorkflowAPIs?section=Artifacts"},"SAP API Business Hub")," or use your IDE to discover available properties via its auto-complete function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"final WorkflowDefinition workflowDefinition = workflowDefinitions.get(0);\nworkflowDefinition.getJobs().forEach(job -> {\n    log.info(job.getId());\n    log.info(job.getPurpose().toString());\n});\n")),(0,a.kt)("h2",{id:"capabilities-and-limitations"},"Capabilities and Limitations"),(0,a.kt)("h3",{id:"capabilities-and-benefits"},"Capabilities and Benefits"),(0,a.kt)("p",null,"The Java client library for SAP BTP Workflow enables the developer to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Invoke the REST API in a type-safe and convenient manner"),(0,a.kt)("li",{parentName:"ul"},"Provides Java abstractions for all REST API endpoints along with the respective model classes"),(0,a.kt)("li",{parentName:"ul"},"Relieves the developer from all the ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP-related")," development work like interpreting ",(0,a.kt)("inlineCode",{parentName:"li"},"status codes"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON de-/serialization"),", etc"),(0,a.kt)("li",{parentName:"ul"},"It lets the developer focus on the business logic instead of coding low-level API calls"),(0,a.kt)("li",{parentName:"ul"},"We keep the library up to date with the latest Workflow API specification which simplifies the maintainability of your app's code"),(0,a.kt)("li",{parentName:"ul"},"We integrate the SAP BTP Workflow library with SAP Cloud SDK capabilities, such as tenant-aware destination retrieval and many more")),(0,a.kt)("h3",{id:"known-limitations"},"Known Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We support SAP Workflow service API only on the SAP BTP Cloud Foundry environment.\nThe SAP Business Technology Platform Neo environment is ",(0,a.kt)("strong",{parentName:"li"},"Not supported!"))),(0,a.kt)("h2",{id:"additional-information"},"Additional Information"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please note the steps outlined in the below section are only required if you chose to skip using the convenience API ",(0,a.kt)("inlineCode",{parentName:"p"},"ScpCfServiceDestinationLoader.getDestinationForService")," introduced ",(0,a.kt)("a",{parentName:"p",href:"scp-workflow-rest-api#create-destination"},"here")," and instead would like to use ",(0,a.kt)("inlineCode",{parentName:"p"},"DestinationAccessor")," for e.g. while trying to use generated clients of other services.")),(0,a.kt)("h3",{id:"creating-http-destinations-manually"},"Creating HTTP Destinations Manually"),(0,a.kt)("p",null,"To create HTTP destinations manually in CF from the values read from ",(0,a.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," of the CF application, please follow the below steps.\nThe steps below can be continued in this example from the ",(0,a.kt)("a",{parentName:"p",href:"scp-workflow-rest-api#bind-your-app-to-service-instance"},"Bind your App to Service Instance")," section."),(0,a.kt)("h3",{id:"take-note-of-api-endpoint-and-oauth-credentials"},"Take Note of API endpoint and OAuth Credentials"),(0,a.kt)("p",null,"Once the app is bound to the SAP Workflow service (here in our example) and app deployment has finished, go to your CF space and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Services\\Instances and Subscriptions"),".\nYou should see the service instance you created along with the information that is bound to your application."),(0,a.kt)("p",null,"Click on the service instance name, for instance ",(0,a.kt)("inlineCode",{parentName:"p"},"my-workflow"),", in the upcoming screen you should see the headline ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Instance: my-workflow - Referencing Apps"),".\nMake sure that the entry that belongs to your app is selected in the table below, given that multiple apps are bound to the same service instance."),(0,a.kt)("p",null,"Consider the ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," content below the table.\nFor your convenience, we recommend copying that ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," to a text editor.\nHere is a quick example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "endpoints": {\n    "workflow_odata_url": "foo",\n    "workflow_rest_url": "bar"\n  },\n  "html5-apps-repo": {\n    "app_host_id": "foo"\n  },\n  "uaa": {\n    "uaadomain": "bar",\n    "tenantmode": "dedicated",\n    "sburl": "bar",\n    "clientid": "foo",\n    "verificationkey": "bar",\n    "apiurl": "foo",\n    "xsappname": "bar",\n    "identityzone": "foo",\n    "identityzoneid": "bar",\n    "clientsecret": "foo",\n    "tenantid": "bar",\n    "url": "foo"\n  },\n  "sap.cloud.service": "com.sap.bpm.workflow",\n  "saasregistryappname": "workflow",\n  "content_endpoint": "foo"\n}\n')),(0,a.kt)("p",null,"Next look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," content and collect the values for the following ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"workflow_rest_url")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientsecret"))),(0,a.kt)("p",null,"You'll need these values in the next step."),(0,a.kt)("h3",{id:"create-http-destination"},"Create HTTP Destination"),(0,a.kt)("p",null,"Go to your CF subaccount, navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Connectivity\\Destinations")," in the left-hand side menu, and create a new HTTP destination with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Workflow-Api"),(0,a.kt)("li",{parentName:"ul"},"Type: HTTP"),(0,a.kt)("li",{parentName:"ul"},"URL: The value of ",(0,a.kt)("inlineCode",{parentName:"li"},"workflow_rest_url")),(0,a.kt)("li",{parentName:"ul"},"Proxy Type: Internet"),(0,a.kt)("li",{parentName:"ul"},"Authentication: OAuth2ClientCredentials"),(0,a.kt)("li",{parentName:"ul"},"Client ID: The value of ",(0,a.kt)("inlineCode",{parentName:"li"},"clientid")),(0,a.kt)("li",{parentName:"ul"},"Client Secret: The value of ",(0,a.kt)("inlineCode",{parentName:"li"},"clientsecret")),(0,a.kt)("li",{parentName:"ul"},"Token Service URL: The value of ",(0,a.kt)("inlineCode",{parentName:"li"},"url")," appended by ",(0,a.kt)("inlineCode",{parentName:"li"},"/oauth/token?grant_type=client_credentials"))),(0,a.kt)("p",null,"Click Save.\nRestart your app by navigating to ",(0,a.kt)("inlineCode",{parentName:"p"},"Spaces\\<you-space-name>\\Applications"),".\nChose your app from the list by clicking on the link with its name and find the restart button on the page that loads."),(0,a.kt)("h3",{id:"create-destination-programmatically"},"Create Destination Programmatically"),(0,a.kt)("p",null,"The invocation of the workflow client remains the same, the only difference in code is while trying to fetch the destination.\nThe name of the HTTP destination that we configured in the SAP BTP cockpit is Workflow-API.\nLet's create a Java representation of this destination."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'final String destinationName = "Workflow-Api";\nfinal HttpDestination httpDestination = DestinationAccessor.getDestination(destinationName).asHttp();\n')),(0,a.kt)("p",null,"That's it, the invocation to the java client library would remain the ",(0,a.kt)("a",{parentName:"p",href:"scp-workflow-rest-api#invoke-the-scp-workflow-api"},"same")," and no more changes are required."),(0,a.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,a.kt)("p",null,"This video tutorial by the developer advocate team of SAP Business Technology Platform will help you get up to speed with SAP Cloud SDK for Java and Workflow service API in 60 minutes."),(0,a.kt)("div",{class:"sdk-video-container"},(0,a.kt)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/ug2UcXK2lH4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}u.isMDXComponent=!0},58911:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);const a=function(e){let{align:t}=e;return o.createElement("span",{className:t?"col text--right":""},o.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},o.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);