(this["webpackJsonplearn-speak"]=this["webpackJsonplearn-speak"]||[]).push([[0],{108:function(e,t,a){e.exports=a(143)},113:function(e,t,a){},114:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),i=(a(113),a(114),a(40)),o=a(62),d=a(12),s="speak/LOGIN_ACTION",u="speak/CHANGE_TYPE",p="speak/CHANGE_SEARCH",f="speak/CLICK_FOLDER",m="speak/CLICK_PLAY",h="speak/CLICK_FILE",g="speak/CLICK_ALL",y="speak/FOLDER_ADD",E="speak/FOLDER_DEL",k="speak/FILE_ADD",b="speak/FILE_DEL",x="speak/MUSIC_START",I="speak/MUSIC_STOP",w="speak/MUSIC_END",v={loginAction:function(e,t){return{type:s,payload:{id:e,pw:t}}},changeType:function(e){return{type:u,payload:{type:e}}},changeSearch:function(e){return{type:p,payload:{text:e}}},clickFolder:function(e,t){return{type:f,payload:{id:e,opened:t}}},clickPlay:function(e,t,a){return{type:m,payload:{folderId:e,fileId:t,playBefore:a}}},clickFile:function(e,t,a){return{type:h,payload:{folderId:e,fileId:t,checked:a}}},clickAll:function(e){return{type:g,payload:{checked:e}}},folderAdd:function(e,t){return{type:y,payload:{name:e,category:t}}},folderDel:function(){return{type:E}},fileAdd:function(e,t,a){return{type:k,payload:{folderId:e,name:t,text:a}}},fileDel:function(e,t){return{type:b,payload:{folderId:e,fileId:t}}},musicStart:function(){return{type:x}},musicStop:function(){return{type:I}},musicEnd:function(){return{type:w}}},C={folders:[{folderId:1,name:"\u679c\u7269",opened:!0,count:0,category:"secondary"},{folderId:2,name:"\u3053\u3063\u3066\u308a\u7cfb",opened:!0,count:0,category:"action"},{folderId:3,name:"\u98f2\u307f\u7269",opened:!1,count:0,category:"disabled"},{folderId:4,name:"\u30d1\u30b9\u30bf",opened:!1,count:0,category:"primary"},{folderId:5,name:"\u30e9\u30fc\u30e1\u30f3",opened:!1,count:0,category:"secondary"},{folderId:6,name:"\u56fd\u540d",opened:!1,count:0,category:"error"}],files:[{folderId:1,fileId:1,name:"\u308a\u3093\u3054",text:"apple",checked:!1,listening:!1,indicate:!0},{folderId:1,fileId:2,name:"\u3076\u3069\u3046",text:"grape",checked:!1,listening:!1,indicate:!0},{folderId:1,fileId:3,name:"\u30b7\u30e3\u30f3\u30d1\u30f3",text:"Champagne",checked:!1,listening:!1,indicate:!0},{folderId:1,fileId:4,name:"\u3057\u3087\u3046\u3086",text:"Soy sauce",checked:!1,listening:!1,indicate:!0},{folderId:2,fileId:1,name:"\u5869",text:"salt",checked:!1,listening:!1,indicate:!0},{folderId:2,fileId:2,name:"\u8c5a\u9aa8",text:"pork bone",checked:!1,listening:!1,indicate:!0},{folderId:2,fileId:3,name:"\u9d8f",text:"chicken",checked:!1,listening:!1,indicate:!0},{folderId:3,fileId:1,name:"\u9178\u8fa3\u6e6f\u9eba",text:"hot and sour noodles",checked:!1,listening:!1,indicate:!0},{folderId:3,fileId:2,name:"\u30c8\u30f3\u30ab\u30c4",text:"pork cutlet",checked:!1,listening:!1,indicate:!0},{folderId:3,fileId:3,name:"\u30e9\u30fc\u30e1\u30f3",text:"ramen",checked:!1,listening:!1,indicate:!0},{folderId:3,fileId:4,name:"\u65e5\u672c\u9152",text:"Japanese sake",checked:!1,listening:!1,indicate:!0},{folderId:3,fileId:5,name:"\u30ef\u30a4\u30f3",text:"Wine",checked:!1,listening:!1,indicate:!0}],type:"light",loginAuth:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return t.payload.id&&t.payload.pw?e.loginAuth=!0:e.loginAuth=!1,Object(d.a)({},e);case u:return e.type=t.payload.type,Object(d.a)({},e);case p:return t.payload.text?e.files.filter((function(e){return e.text.includes(t.payload.text)})).forEach((function(e){e.indicate=!1})):e.files.forEach((function(e){e.indicate=!0})),Object(d.a)({},e);case f:return e.folders.forEach((function(e){e.folderId===t.payload.id&&(e.opened=!e.opened)})),Object(d.a)({},e);case m:var a=t.payload.folderId,n=t.payload.folderId,l=t.payload.playBefore;return a&&n&&e.files.filter((function(e){return e.folderId===a&&e.fileId===n})).forEach((function(e){e.listening=l})),Object(d.a)({},e);case h:var r=e.files.filter((function(e){return e.folderId===t.payload.folderId&&e.fileId===t.payload.fileId}));return r[0].checked=!t.payload.checked,Object(d.a)({},e);case g:var c=e.folders.filter((function(e){return!0===e.opened})),o=[c.map((function(e){return e.folderId}))];return e.files.forEach((function(e){o[0].includes(e.folderId)&&(e.checked=t.payload.checked)})),Object(d.a)({},e);case y:var v={folderId:e.folders.length+1,name:t.payload.name,opened:!1,count:0,category:t.payload.category};return Object(d.a)(Object(d.a)({},e),{},{folders:[].concat(Object(i.a)(e.folders),[v])});case E:return alert("folder.del"),Object(d.a)({},e);case k:var O=e.files.filter((function(e){return e.folderId===t.payload.folderId})),S={folderId:t.payload.folderId,fileId:O.length+1,name:t.payload.name,text:t.payload.text,checked:!1,listening:!1,indicate:!0};return Object(d.a)(Object(d.a)({},e),{},{files:[].concat(Object(i.a)(e.files),[S])});case b:return e.files=e.files.filter((function(e){return!(e.folderId===t.payload.folderId&&e.fileId===t.payload.fileId)})),Object(d.a)({},e);case x:return alert("music.start"),Object(d.a)({},e);case I:return alert("music.stop"),Object(d.a)({},e);case w:return alert("music.end"),Object(d.a)({},e);default:return e}},S={loginAction:v.loginAction,changeType:v.changeType,changeSearch:v.changeSearch,clickFolder:v.clickFolder,clickPlay:v.clickPlay,clickFile:v.clickFile,clickAll:v.clickAll,folderAdd:v.folderAdd,folderDel:v.folderDel,fileAdd:v.fileAdd,fileDel:v.fileDel,musicStart:v.musicStart,musicStop:v.musicStop,musicEnd:v.musicEnd},A=a(98),j=a(190),F=a(4),L=a(144),T=a(15),N=a(193),D=a(182),P=a(177),R=a(46),B=a(181),z=a(176),_=Object(F.a)((function(e){return{root:{width:"100%",height:"100%"},inputZone:{width:"60%",height:"60%",paddingTop:"60px",textAlign:"center",margin:"0 auto",border:"2px solid #666666",borderRadius:"12px",boxShadow:"3px 3px 3px #666666"},media:{height:140}}}))((function(e){var t=e.classes,a=e.loginAuth,n=e.loginAction,r=l.a.useState(""),c=Object(T.a)(r,2),i=c[0],o=c[1],d=l.a.useState(""),s=Object(T.a)(d,2),u=s[0],p=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{className:t.root},l.a.createElement("div",{className:t.inputZone},l.a.createElement(z.a,Object.assign({in:!0},{timeout:2e3},{disableStrictModeCompat:!0}),l.a.createElement(R.a,{variant:"h1",component:"h2"},"Learn Speak")),l.a.createElement(P.a,null,l.a.createElement(N.a,{id:"mail-address",label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",type:"mail-address",style:{marginTop:"12px"},value:i,onChange:function(e){o(e.target.value)}}),l.a.createElement(N.a,{id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",type:"password",style:{marginTop:"12px"},value:u,onChange:function(e){p(e.target.value)}}),l.a.createElement(B.a,{variant:"contained",color:"secondary",style:{marginTop:"24px"},onClick:function(){""!==i&&""!==u||a?n(i,u):alert("\u5165\u529b\u3057\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001\u3082\u3057\u304f\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002")}},"\u30ed\u30b0\u30a4\u30f3"),l.a.createElement(D.a,{href:"#",onClick:function(){alert("\u30d2\u30f3\u30c8\uff1a\u4e21\u65b9\u306b\u5165\u529b\u3057\u3066\u307f\u3088\u3046\uff01")},style:{fontSize:"14px",marginTop:"8px"}},"\u30ed\u30b0\u30a4\u30f3\u306b\u56f0\u3063\u305f\u5834\u5408")))))})),G=a(35),H=a(10),M=a(183),W=a(184),K=a(145),U=a(101),J=a(83),Y=a.n(J),Z=a(88),$=a.n(Z),q=a(187),Q=a(85),V=a.n(Q),X=a(86),ee=a.n(X),te=a(87),ae=a.n(te),ne=a(84),le=a.n(ne),re=a(186),ce=a(99),ie=a(185),oe=Object(F.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,flexGrow:1},nested:{paddingLeft:e.spacing(4)},menuButton:{marginRight:e.spacing(2)},title:Object(G.a)({flexGrow:1,display:"none",textAlign:"left"},e.breakpoints.up("sm"),{display:"block"}),search:Object(G.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(H.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(H.b)(e.palette.common.white,.25)},marginLeft:0,width:"50%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(G.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}))((function(e){var t=e.classes,a=e.type,n=e.loginAction,r=e.changeSearch,c=e.changeType,i=l.a.useState("dark"===a),o=Object(T.a)(i,2),d=o[0],s=o[1],u=l.a.useState(null),p=Object(T.a)(u,2),f=p[0],m=p[1];return l.a.createElement(M.a,{position:"static"},l.a.createElement(W.a,null,l.a.createElement(K.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(e){m(e.currentTarget)}},l.a.createElement(Y.a,null)),l.a.createElement(ce.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:function(){m(null)}},l.a.createElement(ie.a,{onClick:function(){window.confirm("\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002\n\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")&&n("","")}},"\u30ed\u30b0\u30a2\u30a6\u30c8",l.a.createElement(le.a,null))),l.a.createElement(R.a,{className:t.title,variant:"h6",noWrap:!0},"Learn Speak"),l.a.createElement(re.a,{defaultChecked:!0,color:"default",inputProps:{"aria-label":"checkbox with default color"},checked:d,onChange:function(){s(!d),c(d?"light":"dark")}}),l.a.createElement(q.a,{color:"primary","aria-label":"Open Twitter",size:"small",style:{marginRight:"4px"},onClick:function(){window.confirm("\u958b\u767a\u8005\u306eTwitter\u3092\u958b\u304d\u307e\u3059\u3002\n\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")&&(document.location.href="https://twitter.com/nakapooooon")}},l.a.createElement(V.a,{color:"action",style:{color:"#CCCCCC"}})),l.a.createElement(q.a,{color:"primary","aria-label":"Open Instagram",size:"small",style:{marginRight:"4px"},onClick:function(){window.confirm("\u958b\u767a\u8005\u306eInstagram\u3092\u958b\u304d\u307e\u3059\u3002\n\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")&&(document.location.href="https://www.instagram.com/nakapooooon/?hl=ja")}},l.a.createElement(ee.a,{color:"action",style:{color:"#CCCCCC"}})),l.a.createElement(q.a,{color:"primary","aria-label":"Open GitHub",size:"small",onClick:function(){window.confirm("GitHub\u306e\u958b\u767a\u30ea\u30dd\u30b8\u30c8\u30ea\u3078\u9077\u79fb\u3057\u307e\u3059\u3002\n\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")&&(document.location.href="https://github.com/nakapon9517/learn-speak")}},l.a.createElement(ae.a,{color:"action",style:{color:"#CCCCCC"}})),l.a.createElement("div",{className:t.search},l.a.createElement("div",{className:t.searchIcon},l.a.createElement($.a,null)),l.a.createElement(U.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){r(e.target.value)}}))))})),de=a(180),se=a(146),ue=a(188),pe=a(189),fe=a(89),me=a.n(fe),he=a(90),ge=a.n(he),ye=a(91),Ee=a.n(ye),ke=a(11),be=a.n(ke),xe=a(195),Ie=a(178),we=a(60),ve=a.n(we),Ce=a(191),Oe=a(92),Se=a.n(Oe),Ae=function(e){switch(e){case"action":return l.a.createElement(be.a,{color:"action"});case"disabled":return l.a.createElement(be.a,{color:"disabled"});case"primary":return l.a.createElement(be.a,{color:"primary"});case"secondary":return l.a.createElement(be.a,{color:"secondary"});case"error":return l.a.createElement(be.a,{color:"error"});default:return l.a.createElement(be.a,null)}},je=Object(F.a)((function(e){return{root:{maxWidth:360,backgroundColor:e.palette.background.paper,display:"block"},formControl:{margin:e.spacing(1),minWidth:300,display:"inline-block"}}}))((function(e){var t=e.classes,a=e.folders,r=e.clickFolder,c=e.folderAdd,i=l.a.useState(!0),o=Object(T.a)(i,2),d=o[0],s=o[1],u=l.a.useState(!1),p=Object(T.a)(u,2),f=p[0],m=p[1],h=l.a.useState(""),g=Object(T.a)(h,2),y=g[0],E=g[1],k=l.a.useState("action"),b=Object(T.a)(k,2),x=b[0],I=b[1];Object(n.useEffect)((function(){m(f)}),[f]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{style:{width:"100%",marginLeft:"16px",display:"inline-block"}},l.a.createElement(P.a,{style:{width:"60%",display:"inline-block"}},l.a.createElement(xe.a,{htmlFor:"input-folder"},"Add Sound Box"),l.a.createElement(Ie.a,{id:"input-folder",style:{width:"100%"},value:y,onChange:function(e){E(e.target.value)}})),l.a.createElement(P.a,{style:{width:"16%",display:"inline-block",marginLeft:"12px",marginTop:"18px"}},l.a.createElement(Ce.a,{id:"demo-simple-select",labelId:"demo-simple-select-label",style:{width:"100%",height:"30px"},value:x,onChange:function(e){I(e.target.value)}},l.a.createElement(ie.a,{value:"action"},l.a.createElement(be.a,{color:"action"})),l.a.createElement(ie.a,{value:"disabled"},l.a.createElement(be.a,{color:"disabled"})),l.a.createElement(ie.a,{value:"primary"},l.a.createElement(be.a,{color:"primary"})),l.a.createElement(ie.a,{value:"secondary"},l.a.createElement(be.a,{color:"secondary"})),l.a.createElement(ie.a,{value:"error"},l.a.createElement(be.a,{color:"error"})))),l.a.createElement("span",{style:{float:"right",marginRight:"28px",marginTop:"12px",marginBottom:"4px"}},l.a.createElement(q.a,{color:"default","aria-label":"add",size:"small",onClick:function(){var e,t;t=x,(e=y)&&""!==e?(c(e,t),E(""),I(""),alert("\u767b\u9332\u3057\u307e\u3057\u305f\u3002")):alert("\u30d5\u30a9\u30eb\u30c0\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")}},l.a.createElement(ve.a,null)))),l.a.createElement(de.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.root},l.a.createElement(se.a,{style:{width:"80%"},button:!0,onClick:function(){s(!d)}},l.a.createElement("span",{style:{marginRight:"12px"}},l.a.createElement(me.a,null)),l.a.createElement(ue.a,{primary:"Sound Box"}),d?l.a.createElement(ge.a,null):l.a.createElement(Ee.a,null)),l.a.createElement(pe.a,{in:d,timeout:"auto",unmountOnExit:!0},l.a.createElement(de.a,{component:"div",disablePadding:!0,style:{marginLeft:"20px"}},a.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:e.folderId+e.name},l.a.createElement(se.a,{style:{width:"90%"},button:!0,onClick:function(){r(e.folderId,e.opened)}},l.a.createElement("span",{style:{marginRight:"12px"}},Ae(e.category)),l.a.createElement(ue.a,{style:{overflow:"hidden"},primary:e.name}),e.opened?l.a.createElement(Se.a,null):""))}))))))})),Fe=a(39),Le=a.n(Fe),Te=a(61),Ne=a(192),De=a(95),Pe=a.n(De),Re=a(96),Be=a.n(Re),ze=a(94),_e=a.n(ze),Ge=a(93),He=a.n(Ge);function Me(e){return We.apply(this,arguments)}function We(){return(We=Object(Te.a)(Le.a.mark((function e(t){var a;return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("SpeechSynthesisUtterance"in window)){e.next=10;break}return(a=new SpeechSynthesisUtterance(t)).lang="ja-JP",a.rate=1,a.pitch=1,e.next=7,window.speechSynthesis.speak(a);case 7:return e.abrupt("return",!0);case 10:return alert("Speech synthesis(\u97f3\u58f0\u5408\u6210) API\u306b\u306f\u672a\u5bfe\u5fdc\u3067\u3059."),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ke=function(e){switch(e){case"action":return l.a.createElement(be.a,{color:"action",style:{fontSize:"20px"}});case"disabled":return l.a.createElement(be.a,{color:"disabled",style:{fontSize:"20px"}});case"primary":return l.a.createElement(be.a,{color:"primary",style:{fontSize:"20px"}});case"secondary":return l.a.createElement(be.a,{color:"secondary",style:{fontSize:"20px"}});case"error":return l.a.createElement(be.a,{color:"error",style:{fontSize:"20px"}});default:return l.a.createElement(be.a,null)}},Ue=Object(F.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,display:"block",paddingRight:"10px"},title:{width:"20%",overflow:"hidden",textOverflow:"ellipsis"},text:{width:"40%",marginLeft:"8px",overflow:"hidden",textOverflow:"ellipsis"},iconButtonGroup:{width:"16%",textAlign:"right",display:"inline-block"},iconButton:{}}}))((function(e){var t=e.classes,a=e.folders,n=e.files,r=e.clickPlay,c=e.clickFile,i=e.clickAll,o=e.fileAdd,d=e.fileDel,s=l.a.useState(!1),u=Object(T.a)(s,2),p=u[0],f=u[1],m=l.a.useState(""),h=Object(T.a)(m,2),g=h[0],y=h[1],E=l.a.useState(""),k=Object(T.a)(E,2),b=k[0],x=k[1],I=l.a.useState(a[0].folderId),w=Object(T.a)(I,2),v=w[0],C=w[1],O=a.filter((function(e){return e.opened})).map((function(e){return e.folderId})),S=n.filter((function(e){return-1!==O.indexOf(e.folderId)&&e.indicate})),A=function(e,t,l,c){if(0===e||0===t){r(e,t,!0);var i=[a.filter((function(e){return!0===e.opened})).map((function(e){return e.folderId}))],o=n.filter((function(e){return i[0].includes(e.folderId)&&e.checked}));o.length>0?o.forEach((function(e){Me(e.name),Me(e.text)})):alert("1\u3064\u4ee5\u4e0a\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002")}else Object(Te.a)(Le.a.mark((function e(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Me(l),Me(c);case 2:case"end":return e.stop()}}),e)})))()};return l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{style:{width:"96%",marginLeft:"16px",display:"inline-block"}},l.a.createElement(P.a,{style:{height:"24px",marginTop:"11px"}},l.a.createElement(Ne.a,{edge:"start",checked:p,tabIndex:-1,onClick:function(){var e=!p;f(e),i(e)}})),l.a.createElement(P.a,{style:{width:"28%",display:"inline-block"}},l.a.createElement(xe.a,null,"Name"),l.a.createElement(Ie.a,{id:"input-name",style:{width:"100%"},value:g,onChange:function(e){y(e.target.value)},autoComplete:"false"})),l.a.createElement(P.a,{style:{width:"34%",display:"inline-block",marginLeft:"12px"}},l.a.createElement(xe.a,null,"Text"),l.a.createElement(Ie.a,{id:"input-text",style:{width:"100%"},value:b,onChange:function(e){x(e.target.value)},autoComplete:"false"})),l.a.createElement(P.a,{style:{width:"16%",display:"inline-block",marginLeft:"12px"}},l.a.createElement(Ce.a,{id:"demo-simple-select",style:{width:"100%",height:"30px",marginTop:"18px"},value:v,onChange:function(e){C(e.target.value)}},a.map((function(e){return l.a.createElement(ie.a,{value:e.folderId,key:e.folderId+e.name},l.a.createElement(se.a,{style:{height:"24px",overflow:"hidden",fontSize:"8px"}},Ke(e.category),"\u3000",l.a.createElement(ue.a,{primary:e.name})))})))),l.a.createElement("span",{style:{float:"right",marginRight:"4px",marginTop:"8px"}},l.a.createElement(q.a,{color:"default","aria-label":"add",size:"small",style:{marginLeft:"4px",marginRight:"8px",marginBottom:"4px"},onClick:function(){g&&""!==g?b&&""!==b?(o(v,g,b),y(""),x(""),C(a[0].folderId),alert("\u767b\u9332\u3057\u307e\u3057\u305f\u3002")):alert("Text\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"):alert("Name\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")}},l.a.createElement(ve.a,null)),l.a.createElement(B.a,{variant:"contained",color:"secondary",size:"small",endIcon:l.a.createElement(_e.a,null),onClick:function(){A(0,0,"","")}},"Play"))),l.a.createElement(de.a,{component:"nav",className:t.root},S.map((function(e,a){return l.a.createElement(l.a.Fragment,{key:String(e.folderId)+"-"+String(e.fileId)},l.a.createElement(se.a,{key:e.fileId,role:void 0,dense:!0,button:!0,divider:!0},l.a.createElement(Ne.a,{edge:"start",checked:e.checked,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":"checkbox-list-label-".concat(e.fileId)},color:"default",onClick:function(){c(e.folderId,e.fileId,e.checked)}}),l.a.createElement(ue.a,{id:"checkbox-list-name-".concat(e.fileId),primary:e.name,className:t.title}),l.a.createElement(ue.a,{id:"checkbox-list-text-".concat(e.fileId),primary:e.text,className:t.text}),l.a.createElement("div",{className:t.iconButtonGroup},l.a.createElement(K.a,{edge:"end",size:"small",className:t.iconButton},e.listening?l.a.createElement(He.a,{name:"line-scale",color:"gray",fadeIn:"none",className:t.iconButton}):""),l.a.createElement(K.a,{edge:"end",size:"small",className:t.iconButton,onClick:function(){A(e.folderId,e.fileId,e.name,e.text)}},l.a.createElement(Pe.a,null)),l.a.createElement(K.a,{edge:"end",size:"small",className:t.iconButton,onClick:function(){window.confirm("\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")&&(d(e.folderId,e.fileId),alert("\u524a\u9664\u3057\u307e\u3057\u305f\u3002"))}},l.a.createElement(Be.a,null)))))}))))})),Je=Object(F.a)((function(){return{flex:{display:"flex"},login:{width:"100vw",height:"100vh"},sidebar:{width:"40%",height:"100%",minHeight:"calc(100vh - 70px)",border:"0.8px solid gray",margin:"5px"},body:{width:"100%",height:"100%",minHeight:"calc(100vh - 70px)",margin:"4px 4px 4px 0px",border:"0.8px solid gray"},foot:{height:"10px",textAlign:"right",margin:"10px"}}}))((function(e){var t=e.classes,a=e.folders,n=e.files,r=e.type,c=e.loginAuth,i=e.loginAction,o=e.changeType,d=e.changeSearch,s=e.clickFolder,u=e.clickPlay,p=e.clickFile,f=e.clickAll,m=e.folderAdd,h=e.fileAdd,g=e.fileDel,y=Object(A.a)({palette:{type:"dark"===r?"dark":"light",background:{default:"#000fff"}},typography:{button:{textTransform:"none"},fontSize:11,fontFamily:["Montserrat","\u6e38\u30b4\u30b7\u30c3\u30af","YuGothic","\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN W3","Hiragino Kaku Gothic ProN","\u30e1\u30a4\u30ea\u30aa","Meiryo","sans - serif"].join(",")},mixins:{toolbar:{minHeight:56}},props:{MuiList:{dense:!0}}});return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{theme:y},l.a.createElement(j.a,{theme:y},l.a.createElement("div",{style:"dark"===r?{backgroundColor:"#424242"}:{backgroundColor:"#fff"}},c?l.a.createElement(l.a.Fragment,null,l.a.createElement(oe,{type:r,loginAction:i,changeSearch:d,changeType:o}),l.a.createElement("div",{className:t.flex},l.a.createElement(L.a,{className:t.sidebar},l.a.createElement(je,{folders:a,clickFolder:s,folderAdd:m})),l.a.createElement(L.a,{className:t.body},l.a.createElement(Ue,{folders:a,files:n,clickPlay:u,clickFile:p,clickAll:f,fileAdd:h,fileDel:g})))):l.a.createElement(L.a,{className:t.login},l.a.createElement(_,{loginAction:i,loginAuth:c}))))))})),Ye=Object(o.b)((function(e){return{folders:Object(i.a)(e.speak.folders),files:Object(i.a)(e.speak.files),type:e.speak.type,loginAuth:e.speak.loginAuth}}),(function(e){return{loginAction:function(t,a){e(S.loginAction(t,a))},changeType:function(t){e(S.changeType(t))},changeSearch:function(t){e(S.changeSearch(t))},clickFolder:function(t,a){e(S.clickFolder(t,a))},clickPlay:function(t,a,n){e(S.clickPlay(t,a,n))},clickFile:function(t,a,n){e(S.clickFile(t,a,n))},clickAll:function(t){e(S.clickAll(t))},folderAdd:function(t,a){e(S.folderAdd(t,a))},folderDel:function(){e(S.folderDel())},fileAdd:function(t,a,n){e(S.fileAdd(t,a,n))},fileDel:function(t,a){e(S.fileDel(t,a))},musicStart:function(){e(S.musicStart())},musicStop:function(){e(S.musicStop())},musicEnd:function(){e(S.musicEnd())}}}))(Je),Ze=Object(F.a)((function(){return{}}))((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ye,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=a(34),qe=a(97),Qe=a.n(qe),Ve=Object($e.b)({speak:O}),Xe=Object($e.c)(Qe()())($e.d)(Ve);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,{store:Xe},l.a.createElement(Ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.666d950c.chunk.js.map