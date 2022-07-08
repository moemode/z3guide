(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[592],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var i=2;i<l;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3066:(e,t,n)=>{"use strict";n.d(t,{Z:()=>W});var o=n(3117),r=n(7294),l=n(2389),c=n(6010),a=n(2949),s=n(6668);function i(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(7594),p=n.n(u);const m=/title=(?<quote>["'])(?<title>.*?)\1/,d=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:o}=f[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function y(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:l}=t;if(l&&d.test(l)){const e=l.match(d).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=r[0].className,o=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(f),t)}}(o,r),a=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<a.length;){const e=a[p].match(c);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=p+",":u[t]?s[u[t]].start=p:m[t]&&(s[m[t]].range+=s[m[t]].start+"-"+(p-1)+","),a.splice(p,1)}n=a.join("\n");const y={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{null!=y[e]||(y[e]=[]),y[e].push(t)}))})),{lineClassNames:y,code:n}}var b=n(5281);const h="codeBlockContainer_Ckt0";function v(e){let{as:t,...n}=e;const l=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const l=t[o];l&&"string"==typeof r&&(n[l]=r)})),n}(i());return r.createElement(t,(0,o.Z)({},n,{style:l,className:(0,c.Z)(n.className,h,b.k.common.codeBlock)}))}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){let{children:t,className:n}=e;return r.createElement(v,{as:"pre",tabIndex:0,className:(0,c.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:k.codeBlockLines},t))}const N={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var w={Prism:n(7410).Z,theme:N};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},C.apply(this,arguments)}var j=/\r\n|\r|\n/,O=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},L=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},T=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=C({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=C({},n,{backgroundColor:null}),r};function x(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const P=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?T(e.theme,e.language):void 0;return t.themeDict=n})),B(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,l=C({},x(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(l.style=c.plain),void 0!==r&&(l.style=void 0!==l.style?C({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),B(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return l[n[0]];var c=o?{display:"inline-block"}:{},a=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[c].concat(a))}})),B(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,l=e.token,c=C({},x(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?C({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),B(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,l=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],l=0,c=0,a=[],s=[a];c>-1;){for(;(l=o[c]++)<r[c];){var i=void 0,u=t[c],p=n[c][l];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=L(u,p.type),p.alias&&(u=L(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(j),d=m.length;a.push({types:u,content:m[0]});for(var f=1;f<d;f++)O(a),s.push(a=[]),a.push({types:u,content:m[f]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return O(a),s}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),S="codeLine_lJS_",I="codeLineNumber_Tfdd",_="codeLineContent_feaV";function A(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:a,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,c.Z)(n,l&&S)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},s({token:e,key:t})))));return r.createElement("span",i,l?r.createElement(r.Fragment,null,r.createElement("span",{className:I}),r.createElement("span",{className:_},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var Z=n(5999);const R={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function D(e){let{code:t,className:n}=e;const[o,l]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),s=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const l=document.getSelection();let c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),c&&(l.removeAllRanges(),l.addRange(c)),r&&r.focus()}(t),l(!0),a.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,Z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,Z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,R.copyButton,o&&R.copyButtonCopied),onClick:s},r.createElement("span",{className:R.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:R.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:R.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const z="wordWrapButtonIcon_Bwma",H="wordWrapButtonEnabled_EoeP";function M(e){let{className:t,onClick:n,isEnabled:o}=e;const l=(0,Z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&H),"aria-label":l,title:l},r.createElement("svg",{className:z,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function V(e){var t;let{children:n,className:l="",metastring:a,title:u,showLineNumbers:p,language:d}=e;const{prism:{defaultLanguage:f,magicComments:g}}=(0,s.L)(),b=null!=(t=null!=d?d:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(l))?t:f,h=i(),E=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),l=(0,r.useRef)(null),c=(0,r.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[l,e]),a=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");o(n)}),[l]);return(0,r.useEffect)((()=>{a()}),[e,a]),(0,r.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:c}}(),N=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(m))?void 0:n.groups.title)?t:""}(a)||u,{lineClassNames:B,code:C}=y(n,{metastring:a,language:b,magicComments:g}),j=null!=p?p:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(a);return r.createElement(v,{as:"div",className:(0,c.Z)(l,b&&!l.includes("language-"+b)&&"language-"+b)},N&&r.createElement("div",{className:k.codeBlockTitle},N),r.createElement("div",{className:k.codeBlockContent},r.createElement(P,(0,o.Z)({},w,{theme:h,code:C,language:null!=b?b:"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:l}=e;return r.createElement("pre",{tabIndex:0,ref:E.codeBlockRef,className:(0,c.Z)(t,k.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,c.Z)(k.codeBlockLines,j&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(A,{key:t,line:e,getLineProps:o,getTokenProps:l,classNames:B[t],showLineNumbers:j})))))})),r.createElement("div",{className:k.buttonGroup},(E.isEnabled||E.isCodeScrollable)&&r.createElement(M,{className:k.codeButton,onClick:()=>E.toggle(),isEnabled:E.isEnabled}),r.createElement(D,{className:k.codeButton,code:C}))))}function W(e){let{children:t,...n}=e;const c=(0,l.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof a?V:E;return r.createElement(s,(0,o.Z)({key:String(c)},n),a)}},7689:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294),r=n(3066);function l(e){let{result:t}=e;const n="z3-ran"===t.status,r=""===t.output;return o.createElement("div",null,o.createElement("b",null,"Output:"),o.createElement("br",null),o.createElement("pre",null,n?"":o.createElement("span",{style:{color:"red"}},o.createElement("b",null,"Error: "),o.createElement("br",null)),n?r?"--Output is empty--":t.output:t.error))}function c(e){let{inputRef:t,editable:n,onChange:l}=e;const c=o.createElement(r.Z,{language:"lisp",showLineNumbers:!0},t);return o.createElement("div",{contentEditable:n,onInput:e=>{l(e.target.innerText)}},c)}function a(e){let{onClick:t}=e;return o.createElement("button",{className:"button button--primary",onClick:t},"Run")}function s(e){let{onClick:t}=e;return o.createElement("button",{className:"button button--primary",onClick:t},"Run (with edit)")}function i(e){let{input:t}=e;const{code:n,result:r}=t,[i,u]=(0,o.useState)(n),p=(0,o.useRef)(i),[m,d]=(0,o.useState)(!1),[f,g]=(0,o.useState)(r);return o.createElement("div",null,m?o.createElement("div",null):o.createElement(a,{onClick:()=>{d(!m)}}),m?o.createElement(s,{onClick:()=>{window.getSelection().removeAllRanges();const e={...r};let t="new code is: \n"+i;e.output=t,g(e),p.current=i}}):o.createElement("div",null),o.createElement(c,{inputRef:p.current,editable:m,onChange:u}),m?o.createElement(l,{result:f}):o.createElement("div",null))}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,l]=t;if(o&&l){o=parseInt(o),l=parseInt(l);const e=o<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=o;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);