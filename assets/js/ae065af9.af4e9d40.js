"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4359],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=g(n),m=a,u=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(u,l(l({ref:t},p),{},{components:n})):o.createElement(u,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var g=2;g<r;g++)l[g]=n[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return g},toc:function(){return c}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"Logging",sidebar_label:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},s=void 0,g={unversionedId:"js/features/logging",id:"js/features/logging",title:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",source:"@site/docs/js/features/logging.mdx",sourceDirName:"js/features",slug:"/js/features/logging",permalink:"/cloud-sdk/docs/js/features/logging",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/logging.mdx",tags:[],version:"current",lastUpdatedBy:"Mauricio Tamez",lastUpdatedAt:1656936448,formattedLastUpdatedAt:"7/4/2022",frontMatter:{title:"Logging",sidebar_label:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},sidebar:"someSidebar",previous:{title:"Error Handling",permalink:"/cloud-sdk/docs/js/features/error-handling"},next:{title:"Shared ESLint configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration"}},p={},c=[{value:"Creating a Logger",id:"creating-a-logger",level:2},{value:"Use a Logger",id:"use-a-logger",level:2},{value:"Logging Exceptions",id:"logging-exceptions",level:2},{value:"Exception Logger",id:"exception-logger",level:2},{value:"What Happens Under the Hood",id:"what-happens-under-the-hood",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-a-logger"},"Creating a Logger"),(0,r.kt)("p",null,"The SAP Cloud SDK provides an easy way to create a logger:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createLogger } from '@sap-cloud-sdk/util';\n\nconst myLogger = createLogger('my-message-context');\n")),(0,r.kt)("p",null,"The string argument in the ",(0,r.kt)("inlineCode",{parentName:"p"},"createLogger")," is the identifier for the logger and you should use a separate message context for each logical part of your application.\nSince it is used to group messages or set the log level per context."),(0,r.kt)("h2",{id:"use-a-logger"},"Use a Logger"),(0,r.kt)("p",null,"The logger provides the usual log methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.debug('Here is some debug.');\nmyLogger.info('Here is some info.');\nmyLogger.warn('Here is a warning.');\nmyLogger.error('Here is a error.');\n")),(0,r.kt)("p",null,"The default value for the log level is ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),".\nIn the example above the first line would not appear in the logs.\nYou can set the log level either on creation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const myLogger = createLogger({\n  messageContext: 'my-message-context',\n  level: 'info'\n});\n")),(0,r.kt)("p",null,"or later in you application via the ",(0,r.kt)("inlineCode",{parentName:"p"},"setLogLevel()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setLogLevel('error', 'my-message-context');\n")),(0,r.kt)("h2",{id:"logging-exceptions"},"Logging Exceptions"),(0,r.kt)("p",null,"In the example above a string was passed to the logging method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.info('Here is some info.');\n")),(0,r.kt)("p",null,"and in the logs, you would find a related entry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TimeStamp [INFO] my-message-context The message you provided.\n")),(0,r.kt)("p",null,"However, you can also pass an error object also known as an exception to the log statement.\nIn this case, the log statement will contain only the message of the exception for all log functions except for ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"myLogger.error(err)")," is called with an error object it will also log the stack trace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.error(new Error('Log this message and stack.')\n")),(0,r.kt)("h2",{id:"exception-logger"},"Exception Logger"),(0,r.kt)("p",null,"The SAP Cloud SDK enables an exception logger once you create a logger instance somewhere in your project.\nThe exception logger logs unhandled exceptions as if you would log the error manually.\nIn other words, the exception logger does the following for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  someMethodThrowing();\n} catch (err) {\n  logger.error(err);\n  throw err;\n}\n")),(0,r.kt)("p",null,"You can disable this functionality with the ",(0,r.kt)("inlineCode",{parentName:"p"},"disableExceptionLogger()")," method."),(0,r.kt)("h2",{id:"what-happens-under-the-hood"},"What Happens Under the Hood"),(0,r.kt)("p",null,"The SAP Cloud SDK logger instances are based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"winston"),".\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"logger")," instance is created from a central container that knows all existing loggers.\nVia the ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," the SAP Cloud SDK provides methods per message context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLogger('my-message-context'); // get logger if present\nsetLogLevel('error', 'my-message-context'); // set log level\nsetLogFormat(logFormat.kibana, 'my-message-context'); // set log format\n")),(0,r.kt)("p",null,"or global methods for all loggers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setGlobalLogLevel('warn'); // set the global log level to warn\nsetGlobalLogFormat(logFormat.kibana); // set the global log format to kibana\nmuteLoggers(); // mute all loggers completely\nunmuteLogger(); // unmute all loggers\n")),(0,r.kt)("p",null,"The SAP Cloud SDK sets the log level ",(0,r.kt)("strong",{parentName:"p"},"during the creation of a logger")," based on the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"log level for a specific message context or logger - ",(0,r.kt)("inlineCode",{parentName:"li"},"setLogLevel('info', messageContextOrLogger)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"level")," field in ",(0,r.kt)("inlineCode",{parentName:"li"},"createLogger")," - ",(0,r.kt)("inlineCode",{parentName:"li"},'createLogger({..., level: "info"})')),(0,r.kt)("li",{parentName:"ol"},"global log level - ",(0,r.kt)("inlineCode",{parentName:"li"},"setGlobalLogLevel('info')")),(0,r.kt)("li",{parentName:"ol"},"default log level - ",(0,r.kt)("inlineCode",{parentName:"li"},"info"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"setGlobalLogLevel")," will not only affect the creation of the next logger, but also the log level of all existing loggers."))),(0,r.kt)("p",null,"The SAP Cloud SDK sets the log format based on the following order of priority:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"log format for a specific message context or logger - ",(0,r.kt)("inlineCode",{parentName:"li"},"setLogFormat(logFormat.local, messageContextOrLogger)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"format")," field in ",(0,r.kt)("inlineCode",{parentName:"li"},"createLogger")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"createLogger({..., format: logFormat.local})")),(0,r.kt)("li",{parentName:"ol"},"global log format - ",(0,r.kt)("inlineCode",{parentName:"li"},"setGlobalLogFormat(logFormat.local)")),(0,r.kt)("li",{parentName:"ol"},"default log format - set ",(0,r.kt)("inlineCode",{parentName:"li"},"NODE_ENV=production")," to get ",(0,r.kt)("inlineCode",{parentName:"li"},"kibana"),", otherwise ",(0,r.kt)("inlineCode",{parentName:"li"},"local"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"setGlobalLogFormat")," will not only affect the creation of the next logger, but also the log format of all existing loggers."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"nodejs_buildpack")," sets ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV=production")," by default.\nTherefore, Node.js applications deployed on Cloud Foundry using ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs_buildpack")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"kibana")," as the default log format."))),(0,r.kt)("p",null,"In case you see a need for higher flexibility of the logging instance feel free to create an issue in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"repository")," or make a contribution."))}m.isMDXComponent=!0}}]);