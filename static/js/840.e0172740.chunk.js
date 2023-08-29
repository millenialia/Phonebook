"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[840],{403:function(r,e,n){var t=n(4836);e.Z=void 0;var o=t(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");e.Z=i},3044:function(r,e,n){n.d(e,{Z:function(){return S}});var t=n(9439),o=n(3366),a=n(7462),i=n(2791),c=n(3733),s=n(4419),u=n(6934),l=n(1402),p=n(9201),d=n(184),f=(0,p.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=n(5878),m=n(1217);function g(r){return(0,m.Z)("MuiAvatar",r)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var h=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],b=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,e){var n=r.ownerState;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})((function(r){var e=r.theme,n=r.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))})),w=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,u.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,e){return e.fallback}})({width:"75%",height:"75%"});var S=i.forwardRef((function(r,e){var n=(0,l.Z)({props:r,name:"MuiAvatar"}),u=n.alt,p=n.children,f=n.className,v=n.component,m=void 0===v?"div":v,S=n.imgProps,Z=n.sizes,k=n.src,y=n.srcSet,M=n.variant,z=void 0===M?"circular":M,W=(0,o.Z)(n,h),j=null,N=function(r){var e=r.crossOrigin,n=r.referrerPolicy,o=r.src,a=r.srcSet,c=i.useState(!1),s=(0,t.Z)(c,2),u=s[0],l=s[1];return i.useEffect((function(){if(o||a){l(!1);var r=!0,t=new Image;return t.onload=function(){r&&l("loaded")},t.onerror=function(){r&&l("error")},t.crossOrigin=e,t.referrerPolicy=n,t.src=o,a&&(t.srcset=a),function(){r=!1}}}),[e,n,o,a]),u}((0,a.Z)({},S,{src:k,srcSet:y})),P=k||y,C=P&&"error"!==N,R=(0,a.Z)({},n,{colorDefault:!C,component:m,variant:z}),O=function(r){var e=r.classes,n={root:["root",r.variant,r.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(n,g,e)}(R);return j=C?(0,d.jsx)(w,(0,a.Z)({alt:u,src:k,srcSet:y,sizes:Z,ownerState:R,className:O.img},S)):null!=p?p:P&&u?u[0]:(0,d.jsx)(x,{ownerState:R,className:O.fallback}),(0,d.jsx)(b,(0,a.Z)({as:m,ownerState:R,className:(0,c.Z)(O.root,f),ref:e},W,{children:j}))}))},4708:function(r,e,n){var t=n(9439),o=n(7462),a=n(2791),i=n(1402),c=n(6199),s=n(184),u=function(r,e){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!r.vars&&{colorScheme:r.palette.mode})},l=function(r){return(0,o.Z)({color:(r.vars||r).palette.text.primary},r.typography.body1,{backgroundColor:(r.vars||r).palette.background.default,"@media print":{backgroundColor:(r.vars||r).palette.common.white}})};e.ZP=function(r){var e=(0,i.Z)({props:r,name:"MuiCssBaseline"}),n=e.children,p=e.enableColorScheme,d=void 0!==p&&p;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(c.Z,{styles:function(r){return function(r){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};n&&r.colorSchemes&&Object.entries(r.colorSchemes).forEach((function(e){var n,o=(0,t.Z)(e,2),i=o[0],c=o[1];a[r.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:null==(n=c.palette)?void 0:n.mode}}));var i=(0,o.Z)({html:u(r,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:r.typography.fontWeightBold},body:(0,o.Z)({margin:0},l(r),{"&::backdrop":{backgroundColor:(r.vars||r).palette.background.default}})},a),c=null==(e=r.components)||null==(e=e.MuiCssBaseline)?void 0:e.styleOverrides;return c&&(i=[i,c]),i}(r,d)}}),n]})}},1889:function(r,e,n){n.d(e,{ZP:function(){return j}});var t=n(3433),o=n(4942),a=n(3366),i=n(7462),c=n(2791),s=n(3733),u=n(1184),l=n(8519),p=n(4419),d=n(6934),f=n(1402),v=n(3967);var m=c.createContext(),g=n(5878),h=n(1217);function b(r){return(0,h.Z)("MuiGrid",r)}var w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=(0,g.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,t.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(r){return"spacing-xs-".concat(r)}))),(0,t.Z)(["column-reverse","column","row-reverse","row"].map((function(r){return"direction-xs-".concat(r)}))),(0,t.Z)(["nowrap","wrap-reverse","wrap"].map((function(r){return"wrap-xs-".concat(r)}))),(0,t.Z)(w.map((function(r){return"grid-xs-".concat(r)}))),(0,t.Z)(w.map((function(r){return"grid-sm-".concat(r)}))),(0,t.Z)(w.map((function(r){return"grid-md-".concat(r)}))),(0,t.Z)(w.map((function(r){return"grid-lg-".concat(r)}))),(0,t.Z)(w.map((function(r){return"grid-xl-".concat(r)}))))),S=n(184),Z=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(r){var e=parseFloat(r);return"".concat(e).concat(String(r).replace(String(e),"")||"px")}function y(r){var e=r.breakpoints,n=r.values,t="";Object.keys(n).forEach((function(r){""===t&&0!==n[r]&&(t=r)}));var o=Object.keys(e).sort((function(r,n){return e[r]-e[n]}));return o.slice(0,o.indexOf(t))}var M=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(r,e){var n=r.ownerState,o=n.container,a=n.direction,i=n.item,c=n.spacing,s=n.wrap,u=n.zeroMinWidth,l=n.breakpoints,p=[];o&&(p=function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r||r<=0)return[];if("string"===typeof r&&!Number.isNaN(Number(r))||"number"===typeof r)return[n["spacing-xs-".concat(String(r))]];var t=[];return e.forEach((function(e){var o=r[e];Number(o)>0&&t.push(n["spacing-".concat(e,"-").concat(String(o))])})),t}(c,l,e));var d=[];return l.forEach((function(r){var t=n[r];t&&d.push(e["grid-".concat(r,"-").concat(String(t))])})),[e.root,o&&e.container,i&&e.item,u&&e.zeroMinWidth].concat((0,t.Z)(p),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==s&&e["wrap-xs-".concat(String(s))]],d)}})((function(r){var e=r.ownerState;return(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(r){var e=r.theme,n=r.ownerState,t=(0,u.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,u.k9)({theme:e},t,(function(r){var e={flexDirection:r};return 0===r.indexOf("column")&&(e["& > .".concat(x.item)]={maxWidth:"none"}),e}))}),(function(r){var e=r.theme,n=r.ownerState,t=n.container,a=n.rowSpacing,i={};if(t&&0!==a){var c,s=(0,u.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof s&&(c=y({breakpoints:e.breakpoints.values,values:s})),i=(0,u.k9)({theme:e},s,(function(r,n){var t,a=e.spacing(r);return"0px"!==a?(0,o.Z)({marginTop:"-".concat(k(a))},"& > .".concat(x.item),{paddingTop:k(a)}):null!=(t=c)&&t.includes(n)?{}:(0,o.Z)({marginTop:0},"& > .".concat(x.item),{paddingTop:0})}))}return i}),(function(r){var e=r.theme,n=r.ownerState,t=n.container,a=n.columnSpacing,i={};if(t&&0!==a){var c,s=(0,u.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof s&&(c=y({breakpoints:e.breakpoints.values,values:s})),i=(0,u.k9)({theme:e},s,(function(r,n){var t,a=e.spacing(r);return"0px"!==a?(0,o.Z)({width:"calc(100% + ".concat(k(a),")"),marginLeft:"-".concat(k(a))},"& > .".concat(x.item),{paddingLeft:k(a)}):null!=(t=c)&&t.includes(n)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(x.item),{paddingLeft:0})}))}return i}),(function(r){var e,n=r.theme,t=r.ownerState;return n.breakpoints.keys.reduce((function(r,o){var a={};if(t[o]&&(e=t[o]),!e)return r;if(!0===e)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,u.P$)({values:t.columns,breakpoints:n.breakpoints.values}),s="object"===typeof c?c[o]:c;if(void 0===s||null===s)return r;var l="".concat(Math.round(e/s*1e8)/1e6,"%"),p={};if(t.container&&t.item&&0!==t.columnSpacing){var d=n.spacing(t.columnSpacing);if("0px"!==d){var f="calc(".concat(l," + ").concat(k(d),")");p={flexBasis:f,maxWidth:f}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},p)}return 0===n.breakpoints.values[o]?Object.assign(r,a):r[n.breakpoints.up(o)]=a,r}),{})}));var z=function(r){var e=r.classes,n=r.container,o=r.direction,a=r.item,i=r.spacing,c=r.wrap,s=r.zeroMinWidth,u=r.breakpoints,l=[];n&&(l=function(r,e){if(!r||r<=0)return[];if("string"===typeof r&&!Number.isNaN(Number(r))||"number"===typeof r)return["spacing-xs-".concat(String(r))];var n=[];return e.forEach((function(e){var t=r[e];if(Number(t)>0){var o="spacing-".concat(e,"-").concat(String(t));n.push(o)}})),n}(i,u));var d=[];u.forEach((function(e){var n=r[e];n&&d.push("grid-".concat(e,"-").concat(String(n)))}));var f={root:["root",n&&"container",a&&"item",s&&"zeroMinWidth"].concat((0,t.Z)(l),["row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==c&&"wrap-xs-".concat(String(c))],d)};return(0,p.Z)(f,b,e)},W=c.forwardRef((function(r,e){var n=(0,f.Z)({props:r,name:"MuiGrid"}),t=(0,v.Z)().breakpoints,o=(0,l.Z)(n),u=o.className,p=o.columns,d=o.columnSpacing,g=o.component,h=void 0===g?"div":g,b=o.container,w=void 0!==b&&b,x=o.direction,k=void 0===x?"row":x,y=o.item,W=void 0!==y&&y,j=o.rowSpacing,N=o.spacing,P=void 0===N?0:N,C=o.wrap,R=void 0===C?"wrap":C,O=o.zeroMinWidth,A=void 0!==O&&O,B=(0,a.Z)(o,Z),D=j||P,E=d||P,F=c.useContext(m),G=w?p||12:F,T={},L=(0,i.Z)({},B);t.keys.forEach((function(r){null!=B[r]&&(T[r]=B[r],delete L[r])}));var H=(0,i.Z)({},o,{columns:G,container:w,direction:k,item:W,rowSpacing:D,columnSpacing:E,wrap:R,zeroMinWidth:A,spacing:P},T,{breakpoints:t.keys}),I=z(H);return(0,S.jsx)(m.Provider,{value:G,children:(0,S.jsx)(M,(0,i.Z)({ownerState:H,className:(0,s.Z)(I.root,u),as:h,ref:e},L))})})),j=W}}]);
//# sourceMappingURL=840.e0172740.chunk.js.map