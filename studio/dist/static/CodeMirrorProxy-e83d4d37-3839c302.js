import{r as l,cg as P,j as F,ch as B,ci as O,cj as h,k as c,a2 as w}from"./sanity-f7bad2b2.js";import{E as f,H as z,s as q,S as M,a as G,D as E,R as J,t as a,b as m,l as W}from"./index-d3697828.js";var Q=e=>{var{theme:t,settings:o={},styles:n=[]}=e,r={".cm-gutters":{}},i={};o.background&&(i.backgroundColor=o.background),o.foreground&&(i.color=o.foreground),(o.background||o.foreground)&&(r["&"]=i),o.fontFamily&&(r["&.cm-editor .cm-scroller"]={fontFamily:o.fontFamily}),o.gutterBackground&&(r[".cm-gutters"].backgroundColor=o.gutterBackground),o.gutterForeground&&(r[".cm-gutters"].color=o.gutterForeground),o.gutterBorder&&(r[".cm-gutters"].borderRightColor=o.gutterBorder),o.caret&&(r[".cm-content"]={caretColor:o.caret},r[".cm-cursor, .cm-dropCursor"]={borderLeftColor:o.caret});var s={};o.gutterActiveForeground&&(s.color=o.gutterActiveForeground),o.lineHighlight&&(r[".cm-activeLine"]={backgroundColor:o.lineHighlight},s.backgroundColor=o.lineHighlight),r[".cm-activeLineGutter"]=s,o.selection&&(r["&.cm-focused .cm-selectionBackground, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"]={backgroundColor:o.selection}),o.selectionMatch&&(r["& .cm-selectionMatch"]={backgroundColor:o.selectionMatch});var u=f.theme(r,{dark:t==="dark"}),d=z.define(n),g=[u,q(d)];return g};function K(){const e=O();return l.useMemo(()=>{const{code:t}=e.sanity.fonts,{base:o,card:n,dark:r,syntax:i}=e.sanity.color;return Q({theme:r?"dark":"light",settings:{background:n.enabled.bg,foreground:n.enabled.code.fg,lineHighlight:n.enabled.bg,fontFamily:t.family,caret:o.focusRing,selection:h(o.focusRing,.2),selectionMatch:h(o.focusRing,.4),gutterBackground:n.disabled.bg,gutterForeground:n.disabled.code.fg,gutterActiveForeground:n.enabled.fg},styles:[{tag:[a.heading,a.heading2,a.heading3,a.heading4,a.heading5,a.heading6],color:n.enabled.fg},{tag:a.angleBracket,color:n.enabled.code.fg},{tag:a.atom,color:i.keyword},{tag:a.attributeName,color:i.attrName},{tag:a.bool,color:i.boolean},{tag:a.bracket,color:n.enabled.code.fg},{tag:a.className,color:i.className},{tag:a.comment,color:i.comment},{tag:a.definition(a.typeName),color:i.function},{tag:[a.definition(a.variableName),a.function(a.variableName),a.className,a.attributeName],color:i.function},{tag:[a.function(a.propertyName),a.propertyName],color:i.function},{tag:a.keyword,color:i.keyword},{tag:a.null,color:i.number},{tag:a.number,color:i.number},{tag:a.meta,color:n.enabled.code.fg},{tag:a.operator,color:i.operator},{tag:a.propertyName,color:i.property},{tag:[a.string,a.special(a.brace)],color:i.string},{tag:a.tagName,color:i.className},{tag:a.typeName,color:i.keyword}]})},[e])}const U=[{name:"groq",loader:()=>c(()=>import("./index-62bdef27.js"),["static/index-62bdef27.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js"]).then(e=>{let{javascript:t}=e;return t({jsx:!1})})},{name:"javascript",loader:()=>c(()=>import("./index-62bdef27.js"),["static/index-62bdef27.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js"]).then(e=>{let{javascript:t}=e;return t({jsx:!1})})},{name:"jsx",loader:()=>c(()=>import("./index-62bdef27.js"),["static/index-62bdef27.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js"]).then(e=>{let{javascript:t}=e;return t({jsx:!0})})},{name:"typescript",loader:()=>c(()=>import("./index-62bdef27.js"),["static/index-62bdef27.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js"]).then(e=>{let{javascript:t}=e;return t({jsx:!1,typescript:!0})})},{name:"tsx",loader:()=>c(()=>import("./index-62bdef27.js"),["static/index-62bdef27.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js"]).then(e=>{let{javascript:t}=e;return t({jsx:!0,typescript:!0})})},{name:"php",loader:()=>c(()=>import("./index-59b0f780.js"),["static/index-59b0f780.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js","static/index-4590d0c3.js","static/index-62bdef27.js"]).then(e=>{let{php:t}=e;return t()})},{name:"sql",loader:()=>c(()=>import("./index-11ad35a3.js"),["static/index-11ad35a3.js","static/index-d3697828.js","static/sanity-f7bad2b2.js","static/index-b7a5c312.js"]).then(e=>{let{sql:t}=e;return t()})},{name:"mysql",loader:()=>c(()=>import("./index-11ad35a3.js"),["static/index-11ad35a3.js","static/index-d3697828.js","static/sanity-f7bad2b2.js","static/index-b7a5c312.js"]).then(e=>{let{sql:t,MySQL:o}=e;return t({dialect:o})})},{name:"json",loader:()=>c(()=>import("./index-97618ce9.js"),["static/index-97618ce9.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js"]).then(e=>{let{json:t}=e;return t()})},{name:"markdown",loader:()=>c(()=>import("./index-fc6876d6.js"),["static/index-fc6876d6.js","static/index-d3697828.js","static/sanity-f7bad2b2.js","static/index-4590d0c3.js","static/index-b7a5c312.js","static/index-62bdef27.js"]).then(e=>{let{markdown:t}=e;return t()})},{name:"java",loader:()=>c(()=>import("./index-cf1e5ad2.js"),["static/index-cf1e5ad2.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js"]).then(e=>{let{java:t}=e;return t()})},{name:"html",loader:()=>c(()=>import("./index-4590d0c3.js"),["static/index-4590d0c3.js","static/index-b7a5c312.js","static/index-d3697828.js","static/sanity-f7bad2b2.js","static/index-62bdef27.js"]).then(e=>{let{html:t}=e;return t()})},{name:"csharp",loader:()=>c(()=>import("./clike-3f6f5c72.js"),[]).then(e=>{let{csharp:t}=e;return m.define(t)})},{name:"sh",loader:()=>c(()=>import("./shell-86dd1d99.js"),[]).then(e=>{let{shell:t}=e;return m.define(t)})},{name:"css",loader:()=>c(()=>import("./css-ae0ae1d0.js"),[]).then(e=>{let{css:t}=e;return m.define(t)})},{name:"scss",loader:()=>c(()=>import("./css-ae0ae1d0.js"),[]).then(e=>{let{css:t}=e;return m.define(t)})},{name:"sass",loader:()=>c(()=>import("./sass-fe9762d1.js"),["static/sass-fe9762d1.js","static/css-ae0ae1d0.js"]).then(e=>{let{sass:t}=e;return m.define(t)})},{name:"ruby",loader:()=>c(()=>import("./ruby-e88f1f8d.js"),[]).then(e=>{let{ruby:t}=e;return m.define(t)})},{name:"python",loader:()=>c(()=>import("./python-37bee3fe.js"),[]).then(e=>{let{python:t}=e;return m.define(t)})},{name:"xml",loader:()=>c(()=>import("./xml-4783b4a1.js"),[]).then(e=>{let{xml:t}=e;return m.define(t)})},{name:"yaml",loader:()=>c(()=>import("./yaml-95012b83.js"),[]).then(e=>{let{yaml:t}=e;return m.define(t)})},{name:"golang",loader:()=>c(()=>import("./go-8a088acb.js"),[]).then(e=>{let{go:t}=e;return m.define(t)})},{name:"text",loader:()=>{}},{name:"batch",loader:()=>{}}],p="cm-highlight-line",k=M.define(),y=M.define(),x=G.define({create(){return E.none},update(e,t){e=e.map(t.changes);for(const o of t.effects)o.is(k)&&(e=e.update({add:[A.range(o.value)]})),o.is(y)&&(e=e.update({filter:n=>n!==o.value}));return e},toJSON(e,t){const o=[],n=e.iter();for(;n.value;){const r=t.doc.lineAt(n.from).number;o.includes(r)||o.push(r),n.next()}return o},fromJSON(e,t){const o=t.doc.lines,n=e.filter(r=>r<=o).map(r=>A.range(t.doc.line(r).from));return E.none.update({add:n})},provide:e=>f.decorations.from(e)}),A=E.line({class:p}),S={highlight:x};function X(e){const{themeCtx:t}=e,o={color:t.theme.color.dark[t.tone]},n={color:t.theme.color.light[t.tone]};return f.baseTheme({".cm-lineNumbers":{cursor:"default"},".cm-line.cm-line":{position:"relative"},[".".concat(p,"::before")]:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:-3,content:"''",boxSizing:"border-box"},["&dark .".concat(p,"::before")]:{background:h(o.color.muted.caution.pressed.bg,.5)},["&light .".concat(p,"::before")]:{background:h(n.color.muted.caution.pressed.bg,.75)}})}const Y=e=>{const t=X({themeCtx:e.theme});return[x,e.readOnly?[]:W({domEventHandlers:{mousedown:(o,n)=>{const r=o.state.doc.lineAt(n.from);let i=!1;return o.state.field(x).between(r.from,r.to,(s,u,d)=>{if(d)return i=!0,!1}),i?o.dispatch({effects:y.of(r.from)}):o.dispatch({effects:k.of(r.from)}),e!=null&&e.onHighlightChange&&e.onHighlightChange(o.state.toJSON(S).highlight),!0}}}),t]};function Z(e,t){const o=e.state.doc,n=o.lines,r=Array.from({length:n},(i,s)=>s+1);e.dispatch({effects:r.map(i=>{const s=o.line(i);return t!=null&&t.includes(i)?k.of(s.from):y.of(s.from)})})}function $(e){const{fontSize:t}=e,o=O();return l.useMemo(()=>{const{code:n}=o.sanity.fonts,{fontSize:r,lineHeight:i}=n.sizes[t]||n.sizes[2];return f.baseTheme({"&":{fontSize:w(r)},"& .cm-scroller":{lineHeight:"".concat(i/r," !important")}})},[t,o])}function ee(){const e=P();return l.useMemo(()=>{const t={color:e.theme.color.dark[e.tone]},o={color:e.theme.color.light[e.tone]};return f.baseTheme({"&.cm-editor":{height:"100%"},"&.cm-editor.cm-focused":{outline:"none"},"&.cm-editor.cm-focused .cm-matchingBracket":{backgroundColor:"transparent"},"&.cm-editor.cm-focused .cm-nonmatchingBracket":{backgroundColor:"transparent"},"&dark.cm-editor.cm-focused .cm-matchingBracket":{outline:"1px solid ".concat(t.color.base.border)},"&dark.cm-editor.cm-focused .cm-nonmatchingBracket":{outline:"1px solid ".concat(t.color.base.border)},"&light.cm-editor.cm-focused .cm-matchingBracket":{outline:"1px solid ".concat(o.color.base.border)},"&light.cm-editor.cm-focused .cm-nonmatchingBracket":{outline:"1px solid ".concat(o.color.base.border)},"& .cm-lineNumbers .cm-gutterElement":{minWidth:"32px !important",padding:"0 8px !important"},"& .cm-gutter.cm-foldGutter":{width:"0px !important"},"&dark .cm-gutters":{color:"".concat(h(t.color.card.enabled.code.fg,.5)," !important"),borderRight:"1px solid ".concat(h(t.color.base.border,.5))},"&light .cm-gutters":{color:"".concat(h(o.color.card.enabled.code.fg,.5)," !important"),borderRight:"1px solid ".concat(h(o.color.base.border,.5))}})},[e])}const ne=l.forwardRef(function(t,o){const{basicSetup:n,highlightLines:r,languageMode:i,onHighlightChange:s,readOnly:u,value:d,...g}=t,L=P(),D=K(),[b,I]=l.useState(void 0),C=ee(),T=$({fontSize:1}),v=te(i),R=l.useMemo(()=>Y({onHighlightChange:s,readOnly:u,theme:L}),[s,u,L]),N=l.useMemo(()=>{const _=[C,T,R,f.lineWrapping];return v?[..._,v]:_},[T,R,v,C]);l.useEffect(()=>{b&&Z(b,r??[])},[b,r,d]);const V=l.useMemo(()=>({json:{doc:d??"",selection:{main:0,ranges:[{anchor:0,head:0}]},highlight:r??[]},fields:S}),[]),j=l.useCallback(_=>{I(_)},[]),H=l.useMemo(()=>n??{highlightActiveLine:!1},[n]);return F(J,{...g,value:d,ref:o,extensions:N,theme:D,onCreateEditor:j,initialState:V,basicSetup:H})});function te(e){const t=l.useContext(B),[o,n]=l.useState();return l.useEffect(()=>{var r;const u=[...(r=t==null?void 0:t.codeModes)!=null?r:[],...U].find(g=>g.name===e);u!=null&&u.loader||console.warn("Found no codeMode for language mode ".concat(e,", syntax highlighting will be disabled."));let d=!0;return Promise.resolve(u==null?void 0:u.loader()).then(g=>{d&&n(g)}).catch(g=>{console.error("Failed to load language mode ".concat(e),g),d&&n(void 0)}),()=>{d=!1}},[e,t]),o}export{ne as default};
