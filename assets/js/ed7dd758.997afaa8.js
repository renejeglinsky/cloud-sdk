"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2738],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||a;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=n(44996),l=["components"],s={id:"how-to-write-documentation",title:"Documentation Guidelines",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Documentation How To",description:"Writing is an art!",keywords:["sap","cloud","sdk"]},u=void 0,d={unversionedId:"dzen/how-to-write-documentation",id:"dzen/how-to-write-documentation",title:"Documentation Guidelines",description:"Writing is an art!",source:"@site/docs/dzen/how-to-write-docs.mdx",sourceDirName:"dzen",slug:"/dzen/how-to-write-documentation",permalink:"/cloud-sdk/docs/dzen/how-to-write-documentation",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/dzen/how-to-write-docs.mdx",tags:[],version:"current",lastUpdatedBy:"Mauricio Tamez",lastUpdatedAt:1656936448,formattedLastUpdatedAt:"7/4/2022",frontMatter:{id:"how-to-write-documentation",title:"Documentation Guidelines",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Documentation How To",description:"Writing is an art!",keywords:["sap","cloud","sdk"]}},c={},m=[{value:"SAP Cloud SDK Documentation Guidelines",id:"sap-cloud-sdk-documentation-guidelines",level:2},{value:"Markdown Hints",id:"markdown-hints",level:2},{value:"Take Ownership",id:"take-ownership",level:2},{value:"General Notes on Writing",id:"general-notes-on-writing",level:2},{value:"Basic Recommendations About Writing",id:"basic-recommendations-about-writing",level:3},{value:"Write as You Speak",id:"write-as-you-speak",level:4},{value:"Use Simple Words",id:"use-simple-words",level:4},{value:"More Active Case",id:"more-active-case",level:4},{value:"Use Short Sentences",id:"use-short-sentences",level:4},{value:"Use Examples",id:"use-examples",level:4},{value:"Build Upon the Context",id:"build-upon-the-context",level:4},{value:"Use Spelling and Grammar Checking",id:"use-spelling-and-grammar-checking",level:4},{value:"&quot;Steal&quot; Relentlessly",id:"steal-relentlessly",level:4},{value:"Ask for Review",id:"ask-for-review",level:4},{value:"Avoid Variant Reading",id:"avoid-variant-reading",level:4},{value:"Minimum Viable Product",id:"minimum-viable-product",level:4},{value:"Inverted Pyramid Style",id:"inverted-pyramid-style",level:4}],p={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sap-cloud-sdk-documentation-guidelines"},"SAP Cloud SDK Documentation Guidelines"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you can write code, you can write docs.")),(0,a.kt)("h2",{id:"markdown-hints"},"Markdown Hints"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start your page with ",(0,a.kt)("inlineCode",{parentName:"li"},"H2")," because ",(0,a.kt)("inlineCode",{parentName:"li"},"H1")," is for ",(0,a.kt)("inlineCode",{parentName:"li"},"title")," specified in the ",(0,a.kt)("inlineCode",{parentName:"li"},"meta-header")),(0,a.kt)("li",{parentName:"ul"},"If you need ",(0,a.kt)("inlineCode",{parentName:"li"},"Tabs")," or other react components, hoist them to the top of the page after the ",(0,a.kt)("inlineCode",{parentName:"li"},"meta-header")),(0,a.kt)("li",{parentName:"ul"},"Consider creating snippets for your editor for the most used components like: ",(0,a.kt)("inlineCode",{parentName:"li"},"meta-header"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"admonitions"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"tabs"),", etc"),(0,a.kt)("li",{parentName:"ul"},"Run docs locally to ensure your page looks nice.\nSome design ideas in your head may look different with additional context.")),(0,a.kt)("h2",{id:"take-ownership"},"Take Ownership"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you see a typo, fix it and make a pull request"),(0,a.kt)("li",{parentName:"ul"},"If updating your or someone else's article takes less than 10-15 minutes - just do it."),(0,a.kt)("li",{parentName:"ul"},"If something can't be fixed by you - notify the author or the respective team.")),(0,a.kt)("h2",{id:"general-notes-on-writing"},"General Notes on Writing"),(0,a.kt)("p",null,"People who do not write frequently often struggle with putting words on paper.\nIt's normal.\nA mental-ease will come with practice."),(0,a.kt)("h3",{id:"basic-recommendations-about-writing"},"Basic Recommendations About Writing"),(0,a.kt)("h4",{id:"write-as-you-speak"},"Write as You Speak"),(0,a.kt)("p",null,"Imagine you're explaining what the SAP Cloud SDK does to a friend with enough tech background but without SAP context."),(0,a.kt)("p",null,"Many people think writing is different from speaking.\nNot that much.\nSpeaking is the most natural way to transfer information for humans.\nWrite as if you're chatting to someone, answering questions, or asking questions to yourself.\nThen edit where there's a lack of structure."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Such texts are much easier to read and comprehend than those written in cumbersome and complicated ways.")),(0,a.kt)("h4",{id:"use-simple-words"},"Use Simple Words"),(0,a.kt)("p",null,"Don't try to out-smart yourself.\nUse the most common and simple words to get your point across.\nCheck what others use, if you are not sure.\nBe consistent.\nGoogle a couple of options if in doubt.\nBe careful with acronyms, they may be unknown."),(0,a.kt)("h4",{id:"more-active-case"},"More Active Case"),(0,a.kt)("p",null,"Passive voice:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Resilience is increased when using circuit breakers.")),(0,a.kt)("p",null,"Active voice:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Circuit breakers increase resilience.")),(0,a.kt)("p",null,"Active voice helps the reader identify actor, action, and cause.\nYou should prefer the active voice when writing documentation.\nPassive voice can be acceptable when used sparingly."),(0,a.kt)("h4",{id:"use-short-sentences"},"Use Short Sentences"),(0,a.kt)("p",null,"Make sentences as long as needed, but as short as possible.\nIf you have a second subordinate clause, you should think about splitting the sentence."),(0,a.kt)("h4",{id:"use-examples"},"Use Examples"),(0,a.kt)("p",null,"Examples are more helpful than abstract terms following each other.\nA good example helps connect dots between concepts and builds stronger understanding."),(0,a.kt)("h4",{id:"build-upon-the-context"},"Build Upon the Context"),(0,a.kt)("p",null,"Similar to defining a function for a code, reusing context allows us to reuse already introduced concepts.\nIt makes the explanation more concise, easy to read, and allows for scalable writing.\nMake sure there's just enough context introduced and provide links or reminders where it might be lacking."),(0,a.kt)("h4",{id:"use-spelling-and-grammar-checking"},"Use Spelling and Grammar Checking"),(0,a.kt)("p",null,"Linting, code style, static analysis, and typos - writing is no different from coding here.\nI found 16 issues in this document after checking it with the free version of ",(0,a.kt)("a",{parentName:"p",href:"https://www.grammarly.com/"},"Grammarly"),"."),(0,a.kt)("h4",{id:"steal-relentlessly"},'"Steal" Relentlessly'),(0,a.kt)("p",null,"Think about if someone has already documented what you now want to document.\nUse it as an example!\nTake parts of it if relevant.\nBe mindful and check copyrights if copying too much.\nBookmark a couple of favorite documentation web-sites and visit them for inspiration.\nThink of Google Cloud SDK, GraphQL, React, etc."),(0,a.kt)("h4",{id:"ask-for-review"},"Ask for Review"),(0,a.kt)("p",null,"Open a pull request and let us help you."),(0,a.kt)("h4",{id:"avoid-variant-reading"},"Avoid Variant Reading"),(0,a.kt)("p",null,"Make sure you'll be understood one way and one way only.\nFor example, try to understand and make a single interpretation for ",(0,a.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_ControlInformationtypeodatatype"},"odata.type meta field"),".\nDon't spend too much time on it."),(0,a.kt)("h4",{id:"minimum-viable-product"},"Minimum Viable Product"),(0,a.kt)("p",null,"Don't be hard on yourself.\nMake something imperfect and improve with every iteration.\nAny documentation is better than no documentation.\nUse feedback to iterate.\nInvolve collaborators.\nNone of us are professional writers."),(0,a.kt)("h4",{id:"inverted-pyramid-style"},"Inverted Pyramid Style"),(0,a.kt)("p",null,"Think a bit before getting to the text editor.\nOr start with an outline.\nSame as with structuring your class methods and variables it makes eventual writing much simpler and often faster.\nHere's a method from the journalism world called ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)"},"inverted pyramid"),".\nIt might be useful for documentation, in the same way, it's useful for news."),(0,a.kt)("img",{alt:"Inverted Pyramid of writing",src:(0,r.Z)("img/docs/inverted-pyramid.png")}))}h.isMDXComponent=!0}}]);