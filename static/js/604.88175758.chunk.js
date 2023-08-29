"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[604],{8604:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var a=n(2791),o=n(9434),r=n(3634),i="NOT_FOUND";var c=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},a=n.equalityCheck,o=void 0===a?c:a,r=n.maxSize,s=void 0===r?1:r,l=n.resultEqualityCheck,d=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var a=t.length,o=0;o<a;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),u=1===s?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:i},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(d):function(e,t){var n=[];function a(e){var a=n.findIndex((function(n){return t(e,n.key)}));if(a>-1){var o=n[a];return a>0&&(n.splice(a,1),n.unshift(o)),o.value}return i}return{get:a,put:function(t,o){a(t)===i&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(s,d);function p(){var t=u.get(arguments);if(t===i){if(t=e.apply(null,arguments),l){var n=u.getEntries(),a=n.find((function(e){return l(e.value,t)}));a&&(t=a.value)}u.put(arguments,t)}return t}return p.clearCache=function(){return u.clear()},p}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function d(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var o=function(){for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];var r,i=0,c={memoizeOptions:void 0},s=a.pop();if("object"===typeof s&&(c=s,s=a.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var d=c,u=d.memoizeOptions,p=void 0===u?n:u,m=Array.isArray(p)?p:[p],v=l(a),f=e.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(m)),h=e((function(){for(var e=[],t=v.length,n=0;n<t;n++)e.push(v[n].apply(null,arguments));return r=f.apply(null,e)}));return Object.assign(h,{resultFunc:s,memoizedResultFunc:f,dependencies:v,lastResult:function(){return r},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var u=d(s),p=function(e){return e.contacts.items},m=function(e){return e.filter},v=u([p,m],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.value.toLowerCase())}))})),f=function(e){return e.contacts.error},h=function(e){return e.contacts.isLoading},g=n(6382),b=n(6151),y=n(3601),Z=n(4554),x=n(890),C=n(1614),S="ContactForm_contactForm__y0Rca",j=n(184),A=function(){var e=(0,o.I0)(),t=(0,o.v9)(p);return(0,j.jsx)(C.Z,{className:S,children:(0,j.jsxs)(Z.Z,{component:"form",action:"add contact",onSubmit:function(n){n.preventDefault();var a=n.currentTarget.elements.name.value,o={name:a,number:n.currentTarget.elements.number.value,id:(0,g.x0)()};(function(e){return!t.find((function(t){return t.name===e}))||(alert("".concat(e," is already in contacts")),!1)})(a)&&e((0,r.uK)(o)),n.currentTarget.reset()},noValidate:!0,sx:{mt:2},children:[(0,j.jsx)(x.Z,{component:"h1",variant:"h5",children:"Add contact"}),(0,j.jsx)(y.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,j.jsx)(y.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Number",type:"tel",id:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,j.jsx)(b.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})})},I=n(4942),w=n(3366),z=n(7462),R=n(3733),N=n(4419),k=n(2065),F=n(6934),L=n(1402),_=n(335),O=n(4036),P=n(5878),M=n(1217);function G(e){return(0,M.Z)("MuiIconButton",e)}var T=(0,P.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),V=["edge","children","className","color","disabled","disableFocusRipple","size"],q=(0,F.ZP)(_.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,O.Z)(n.color))],n.edge&&t["edge".concat((0,O.Z)(n.edge))],t["size".concat((0,O.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,z.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,k.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t,n=e.theme,a=e.ownerState,o=null==(t=(n.vars||n).palette)?void 0:t[a.color];return(0,z.Z)({},"inherit"===a.color&&{color:"inherit"},"inherit"!==a.color&&"default"!==a.color&&(0,z.Z)({color:null==o?void 0:o.main},!a.disableRipple&&{"&:hover":(0,z.Z)({},o&&{backgroundColor:n.vars?"rgba(".concat(o.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,k.Fq)(o.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===a.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===a.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,I.Z)({},"&.".concat(T.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),B=a.forwardRef((function(e,t){var n=(0,L.Z)({props:e,name:"MuiIconButton"}),a=n.edge,o=void 0!==a&&a,r=n.children,i=n.className,c=n.color,s=void 0===c?"default":c,l=n.disabled,d=void 0!==l&&l,u=n.disableFocusRipple,p=void 0!==u&&u,m=n.size,v=void 0===m?"medium":m,f=(0,w.Z)(n,V),h=(0,z.Z)({},n,{edge:o,color:s,disabled:d,disableFocusRipple:p,size:v}),g=function(e){var t=e.classes,n=e.disabled,a=e.color,o=e.edge,r=e.size,i={root:["root",n&&"disabled","default"!==a&&"color".concat((0,O.Z)(a)),o&&"edge".concat((0,O.Z)(o)),"size".concat((0,O.Z)(r))]};return(0,N.Z)(i,G,t)}(h);return(0,j.jsx)(q,(0,z.Z)({className:(0,R.Z)(g.root,i),centerRipple:!0,focusRipple:!p,disabled:d,ref:t,ownerState:h},f,{children:r}))})),E=n(7247),D="Contact_contact__4zmlP",W=function(e){var t=e.contact,n=(0,o.I0)();return(0,j.jsxs)(Z.Z,{sx:{mt:2},className:D,children:[(0,j.jsxs)(x.Z,{children:[t.name,": ",t.number]}),(0,j.jsx)(B,{type:"button",onClick:function(){return n((0,r.GK)(t.id))},id:t.id,children:(0,j.jsx)(E.Z,{})})]})},H=n(493),J=n(627),K=n(9103),U=n(162),X=n(2071),$=n(9480);function Q(e){return(0,M.Z)("MuiListItem",e)}var Y=(0,P.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var ee=(0,P.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function te(e){return(0,M.Z)("MuiListItemSecondaryAction",e)}(0,P.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var ne=["className"],ae=(0,F.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,z.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),oe=a.forwardRef((function(e,t){var n=(0,L.Z)({props:e,name:"MuiListItemSecondaryAction"}),o=n.className,r=(0,w.Z)(n,ne),i=a.useContext($.Z),c=(0,z.Z)({},n,{disableGutters:i.disableGutters}),s=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,N.Z)(a,te,n)}(c);return(0,j.jsx)(ae,(0,z.Z)({className:(0,R.Z)(s.root,o),ownerState:c,ref:t},r))}));oe.muiName="ListItemSecondaryAction";var re=oe,ie=["className"],ce=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],se=(0,F.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,z.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,z.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,I.Z)({},"& > .".concat(ee.root),{paddingRight:48}),(t={},(0,I.Z)(t,"&.".concat(Y.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,I.Z)(t,"&.".concat(Y.selected),(0,I.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,k.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(Y.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,k.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,I.Z)(t,"&.".concat(Y.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,I.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Y.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,k.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,k.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),le=(0,F.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),de=a.forwardRef((function(e,t){var n=(0,L.Z)({props:e,name:"MuiListItem"}),o=n.alignItems,r=void 0===o?"center":o,i=n.autoFocus,c=void 0!==i&&i,s=n.button,l=void 0!==s&&s,d=n.children,u=n.className,p=n.component,m=n.components,v=void 0===m?{}:m,f=n.componentsProps,h=void 0===f?{}:f,g=n.ContainerComponent,b=void 0===g?"li":g,y=n.ContainerProps,Z=(y=void 0===y?{}:y).className,x=n.dense,C=void 0!==x&&x,S=n.disabled,A=void 0!==S&&S,I=n.disableGutters,k=void 0!==I&&I,F=n.disablePadding,O=void 0!==F&&F,P=n.divider,M=void 0!==P&&P,G=n.focusVisibleClassName,T=n.secondaryAction,V=n.selected,q=void 0!==V&&V,B=n.slotProps,E=void 0===B?{}:B,D=n.slots,W=void 0===D?{}:D,H=(0,w.Z)(n.ContainerProps,ie),ee=(0,w.Z)(n,ce),te=a.useContext($.Z),ne=a.useMemo((function(){return{dense:C||te.dense||!1,alignItems:r,disableGutters:k}}),[r,te.dense,C,k]),ae=a.useRef(null);(0,U.Z)((function(){c&&ae.current&&ae.current.focus()}),[c]);var oe=a.Children.toArray(d),de=oe.length&&(0,K.Z)(oe[oe.length-1],["ListItemSecondaryAction"]),ue=(0,z.Z)({},n,{alignItems:r,autoFocus:c,button:l,dense:ne.dense,disabled:A,disableGutters:k,disablePadding:O,divider:M,hasSecondaryAction:de,selected:q}),pe=function(e){var t=e.alignItems,n=e.button,a=e.classes,o=e.dense,r=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",r&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,N.Z)(i,Q,a)}(ue),me=(0,X.Z)(ae,t),ve=W.root||v.Root||se,fe=E.root||h.root||{},he=(0,z.Z)({className:(0,R.Z)(pe.root,fe.className,u),disabled:A},ee),ge=p||"li";return l&&(he.component=p||"div",he.focusVisibleClassName=(0,R.Z)(Y.focusVisible,G),ge=_.Z),de?(ge=he.component||p?ge:"div","li"===b&&("li"===ge?ge="div":"li"===he.component&&(he.component="div")),(0,j.jsx)($.Z.Provider,{value:ne,children:(0,j.jsxs)(le,(0,z.Z)({as:b,className:(0,R.Z)(pe.container,Z),ref:me,ownerState:ue},H,{children:[(0,j.jsx)(ve,(0,z.Z)({},fe,!(0,J.X)(ve)&&{as:ge,ownerState:(0,z.Z)({},ue,fe.ownerState)},he,{children:oe})),oe.pop()]}))})):(0,j.jsx)($.Z.Provider,{value:ne,children:(0,j.jsxs)(ve,(0,z.Z)({},fe,{as:ge,ref:me},!(0,J.X)(ve)&&{ownerState:(0,z.Z)({},ue,fe.ownerState)},he,{children:[oe,T&&(0,j.jsx)(re,{children:T})]}))})})),ue={contactList:"ContactList_contactList__UFVCg"},pe=function(){var e=(0,o.v9)(v);return(0,j.jsx)(C.Z,{className:ue.contactList,children:(0,j.jsx)(H.Z,{className:ue.contactNameList,children:e.map((function(e){return(0,j.jsx)(de,{children:(0,j.jsx)(W,{contact:e})},e.id)}))})})},me=n(4808),ve="Filter_filter__vxThR",fe=function(){var e=(0,o.I0)(),t=(0,o.v9)(m);return(0,j.jsx)(C.Z,{className:ve,children:(0,j.jsxs)(Z.Z,{component:"form",action:"filter contact",noValidate:!0,sx:{mt:2},children:[(0,j.jsx)(x.Z,{component:"h2",variant:"h5",children:"Find contacts by name"}),(0,j.jsx)(y.Z,{margin:"normal",label:"Name",fullWidth:!0,id:"filter",name:"filter",autoComplete:"name",onChange:function(t){var n=t.currentTarget.value;e((0,me.T)(n))},value:t.value,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})})},he="Contacts_contactForms__STQDk",ge="Contacts_error__A35WM",be=n(5088),ye=function(){var e=(0,o.I0)(),t=(0,o.v9)(h),n=(0,o.v9)(f);return(0,a.useEffect)((function(){e((0,r.yF)())}),[e]),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:he,children:[(0,j.jsx)(A,{}),n?(0,j.jsx)("b",{className:ge,children:n}):(0,j.jsx)(fe,{})]}),t&&!n&&(0,j.jsx)(be.a,{}),(0,j.jsx)(pe,{})]})}},7247:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),i=(0,o.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i}}]);
//# sourceMappingURL=604.88175758.chunk.js.map