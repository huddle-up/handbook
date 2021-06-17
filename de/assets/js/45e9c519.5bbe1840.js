(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[795],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7764:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3},d={unversionedId:"host/configuration",id:"host/configuration",isDocsHomePage:!1,title:"Configuration",description:"The configuration of HuddleUp is achieved through environment variables and configuration files. They are separated between the client and the frontend application.",source:"@site/docs/host/configuration.md",sourceDirName:"host",slug:"/host/configuration",permalink:"/handbook/de/docs/host/configuration",editUrl:"https://github.com/huddle-up/handbook/edit/master/docs/host/configuration.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSideBar",previous:{title:"Install on Ubuntu",permalink:"/handbook/de/docs/host/install-ubuntu"},next:{title:"Conference Providers",permalink:"/handbook/de/docs/host/conference-providers"}},p=[{value:"External services",id:"external-services",children:[{value:"Video conference provider",id:"video-conference-provider",children:[]},{value:"Identity provider",id:"identity-provider",children:[]}]},{value:"Translations",id:"translations",children:[{value:"Predefined Tags",id:"predefined-tags",children:[]}]},{value:"Reference",id:"reference",children:[{value:"Client Configuration",id:"client-configuration",children:[]},{value:"Backend Configuration",id:"backend-configuration",children:[]}]}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The configuration of ",(0,l.kt)("em",{parentName:"p"},"HuddleUp")," is achieved through environment variables and configuration files. They are separated between the ",(0,l.kt)("strong",{parentName:"p"},"client")," and the ",(0,l.kt)("strong",{parentName:"p"},"frontend")," application."),(0,l.kt)("h2",{id:"external-services"},"External services"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HuddleUp")," depends on two external services: A provider for the video conference functionality, and an identity provider which is used for user authentication."),(0,l.kt)("h3",{id:"video-conference-provider"},"Video conference provider"),(0,l.kt)("p",null,"See section ",(0,l.kt)("a",{parentName:"p",href:"/handbook/de/docs/host/conference-providers"},"Conference Providers")),(0,l.kt)("h3",{id:"identity-provider"},"Identity provider"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HuddleUp")," supports any service that supports ",(0,l.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," (OIDC). A commonly used provider is ",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/openid-connect"},"Google"),". If you want more control, you can use a service like ",(0,l.kt)("a",{parentName:"p",href:"https://auth0.com/authentication"},"Auth0")," which provides a free offer that should be enough for the expected user count of a ",(0,l.kt)("em",{parentName:"p"},"HuddleUp")," installation."),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HuddleUp")," can support multiple languages. You can configure which language should be the default and which additional languages should be supported. The currently available languages and their language codes are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"English (",(0,l.kt)("inlineCode",{parentName:"li"},"en"),")"),(0,l.kt)("li",{parentName:"ul"},"Deutsch (",(0,l.kt)("inlineCode",{parentName:"li"},"de"),")")),(0,l.kt)("h3",{id:"predefined-tags"},"Predefined Tags"),(0,l.kt)("p",null,"To give users guidance on topics, you can configure ",(0,l.kt)("em",{parentName:"p"},"HuddleUp")," to create a set of predefined tags. These tags can be defined in a ",(0,l.kt)("inlineCode",{parentName:"p"},"tags.json")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"config/api")," folder. On startup, ",(0,l.kt)("em",{parentName:"p"},"HuddleUp")," will create any tag that is defined in this file. There is an example file located there which you can copy, or you can create a new file. It should follow the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config/api/tags.json"',title:'"config/api/tags.json"'},'{\n  "tags": [\n    "Your tag #1",\n    "Another tag",\n    // ...\n  ]\n}\n')),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"client-configuration"},"Client Configuration"),(0,l.kt)("p",null,"The configuration for the client should be placed as a ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"config/client")," folder. There is an ",(0,l.kt)("inlineCode",{parentName:"p"},".env.example")," file available for reference. Below is a list of available variables."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Base options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_HOST")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The base URL of the client (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"https://huddle.huddle-up.org"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_API_URI")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The base URL of the backend (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"https://api.huddle.huddle-up.org"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Translations")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_I18N_DEFAULT_LOCALE")),(0,l.kt)("td",{parentName:"tr",align:null},"The default language used, specified with the language code (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"de"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"en"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_I18N_AVAILABLE_LOCALES")),(0,l.kt)("td",{parentName:"tr",align:null},"All languages used, specified as a comma-separated list (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},'"de,en"'),"). This ",(0,l.kt)("strong",{parentName:"td"},"must")," include the default language."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"en"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"OpenID Connect")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_OIDC_CLIENT_ID")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The id of your OIDC client."),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_OIDC_CLIENT_SECRET")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The secret of your OIDC client."),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_OIDC_ISSUER")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The domain of the issuer (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"huddle-up.eu.auth0.com"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_OIDC_REDIRECT_URI")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The URL where the Identity Provider should redirect users to on successfull login. This should ",(0,l.kt)("strong",{parentName:"td"},"always")," include the path ",(0,l.kt)("inlineCode",{parentName:"td"},"/login/callback")," (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"https://huddle.huddle-up.org/login/callback"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_OIDC_SCOPE")),(0,l.kt)("td",{parentName:"tr",align:null},"The scope requested from the OIDC provider. If specified, it ",(0,l.kt)("strong",{parentName:"td"},"must")," at least include ",(0,l.kt)("inlineCode",{parentName:"td"},"openid email profile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openid email profile"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_OIDC_PROVIDER_NAME")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The name used to display to the user at login. This will be used in a sentence like 'Login with NAME'"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_OIDC_PROVIDER_ICON")),(0,l.kt)("td",{parentName:"tr",align:null},"The icon used to display at login. Can be one of the following values: ",(0,l.kt)("inlineCode",{parentName:"td"},"email"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"facebook"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"github")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"account"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"account"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Meetings")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_RULES_MAXIMUM_PARTICIPANTS")),(0,l.kt)("td",{parentName:"tr",align:null},"The default value for the maximum amount of users in a meeting."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10"))))),(0,l.kt)("h3",{id:"backend-configuration"},"Backend Configuration"),(0,l.kt)("p",null,"The configuration for the backend should be placed as a ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"config/api")," folder. There is an ",(0,l.kt)("inlineCode",{parentName:"p"},".env.example")," file available for reference. Below is a list of available variables."),(0,l.kt)("p",null,"For video conference provider specific variables, see the ",(0,l.kt)("a",{parentName:"p",href:"/handbook/de/docs/host/conference-providers"},"provider section")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Base options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_PORT")),(0,l.kt)("td",{parentName:"tr",align:null},"The port that the backend should listen on."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_LOG_DIR")),(0,l.kt)("td",{parentName:"tr",align:null},"The location where errors should be logged to. If you specify a custom log directory, make sure it exists and is writeable by the system user running the backend."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"appdirectory/logs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Database")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_DB_USERNAME")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The database username"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_DB_PASSWORD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The password of the database user"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_DB_DATABASE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The name of the database"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_DB_HOST")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The hostname of the database"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_DB_PORT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The port of the database"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_DB_SYNCHRONIZE")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the database should be synchronized automatically instead of migrations. ",(0,l.kt)("strong",{parentName:"td"},"Important"),": This option should only be used during development and ",(0,l.kt)("em",{parentName:"td"},"not")," in production."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Authentication")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_AUTH_SECRET")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The secret used to sign the internal JWT tokens. Make sure the secret is complex enough."),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_AUTH_OIDC_ISSUER_DOMAIN")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". The domain of the OIDC issuer (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"huddle-up.eu.auth0.com"),"). This is required to verify identity tokens."),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_AUTH_OIDC_AUDIENCE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required"),". This identical to the ",(0,l.kt)("inlineCode",{parentName:"td"},"REACT_APP_OIDC_CLIENT_ID")," of the frontend and required to verify identity tokens."),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Meetings")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HU_MEETINGS_PREPARATION_TIME")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of minutes before a meeting starts, that the host is allowed to create the conference."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10"))))))}m.isMDXComponent=!0}}]);