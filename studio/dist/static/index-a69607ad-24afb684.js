import{s as b,a0 as x,r as l,q as d,P as j,j as o,bY as v,ag as H,cv as I,$ as k,aJ as B,ah as E,a$ as g}from"./sanity-f7bad2b2.js";import{useDeskTool as y}from"./index-aba2361f-47f7f219.js";import"./index-90bbb00c.js";var u;function C(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function O(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=y();return!(n!=null&&n.length)&&!i?null:o(H,{actions:o(I,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(k,{as:B,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const L=b(x)(u||(u=C([`
  position: relative;
`])));function T(t){const{children:e}=t,{collapsed:s}=g();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function G(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...P}=s,[c,h]=l.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(O,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(T,{children:[v.isValidElementType(a)&&l.createElement(a,{...r,...P,ref:h,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{G as default};
