(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1150:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(129),_clientLogger=__webpack_require__(70),_configFilename=__webpack_require__(1151);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1151:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(220),storybook_amp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(753);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_amp__WEBPACK_IMPORTED_MODULE_1__.withAmpDecorator),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({actions:{argTypesRegex:"^on[A-Z].*"},amp:{isEnabled:!0,styles:""},layout:"fullscreen"})},122:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PUBLICATION_UK}));const PUBLICATION_UK="indy100.com"},1334:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(220).configure)([__webpack_require__(1335)],module,!1)}).call(this,__webpack_require__(106)(module))},1335:function(module,exports,__webpack_require__){var map={"./Article/AMP/ArticlePage.stories.js":1336,"./Article/WEB/ArticleAds.stories.js":1460,"./Article/WEB/ArticlePage.stories.js":1446,"./Other/Components/LoginSidebar.stories.js":1447,"./Other/Components/TrendingListItem.stories.js":1448,"./Other/Pages/Profile.stories.js":1450,"./Other/Pages/Register.stories.js":1451,"./Section/SectionPage.stories.js":1464};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1335},1336:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AMPArticlePageStory",(function(){return AMPArticlePageStory})),__webpack_require__.d(__webpack_exports__,"ArticleContentStory",(function(){return ArticleContentStory}));var _helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_fixtures_mockArticleWithEmbeds__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(287),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);const ArticlePage=__webpack_require__(411).default;__webpack_exports__.default={title:"Article/AMP/Page",component:ArticlePage};const AMPArticlePageStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_0__.a,{localsOverrides:{cleanAmp:!0},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ArticlePage,{})});AMPArticlePageStory.storyName="Full article page",AMPArticlePageStory.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]};const ArticleContentStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_0__.a,{localsOverrides:{cleanAmp:!0},articleOverrides:{...Object(_fixtures_mockArticleWithEmbeds__WEBPACK_IMPORTED_MODULE_1__.a)()},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ArticlePage,{})});ArticleContentStory.storyName="Article embed page",ArticleContentStory.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]},AMPArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/ArticlePage.stories.js"]={name:"AMPArticlePageStory",docgenInfo:AMPArticlePageStory.__docgenInfo,path:"stories/Article/AMP/ArticlePage.stories.js"}),ArticleContentStory.__docgenInfo={description:"",methods:[],displayName:"ArticleContentStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/ArticlePage.stories.js"]={name:"ArticleContentStory",docgenInfo:ArticleContentStory.__docgenInfo,path:"stories/Article/AMP/ArticlePage.stories.js"})},1349:function(module,exports,__webpack_require__){const ampTemplateModule=__webpack_require__(532),templateHTML=ampTemplateModule.default({styles:"",title:"Indy Storybook"});ampTemplateModule.default=()=>({replace:(storyCodeMarker,content)=>templateHTML.replace("</head>",'\n<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Lato:400,700|Roboto+Slab:400,700&display=swap" />\n\n<script async custom-element="amp-timeago" src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"><\/script>\n<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>\n\n<script>\n// fix time to 01/07/2020\nDate = class extends Date {\n  constructor(options) {\n    super(options ?? 1593558000000);\n  }\n};\n<\/script>\n<style type="text/css">\n[id^="jwplayer"] {\n  background: hotpink;\n  position: relative;\n}\n\n[id^="jwplayer"]:before {\n  content: "VIDEO PLAYER";\n  font-family: sans-serif;\n  font-weight: bold;\n  text-align: center;\n  font-size: 30px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: calc(50% - 15px);\n  left: 0;\n  color: white;\n}\n\n.show-in-storybook {\n  display: flex !important; /* Override [amp-access][amp-access-hide] */\n}\n</style></head>').replace('<script async custom-element="amp-autocomplete" src="https://cdn.ampproject.org/v0/amp-autocomplete-0.1.js"><\/script>',"").replace(storyCodeMarker,content).replace(/<excessremovablewrapper>/g,"").replace(/<\/excessremovablewrapper>/g,"")})},1356:function(module,exports,__webpack_require__){var map={"./af":569,"./af.js":569,"./ar":570,"./ar-dz":571,"./ar-dz.js":571,"./ar-kw":572,"./ar-kw.js":572,"./ar-ly":573,"./ar-ly.js":573,"./ar-ma":574,"./ar-ma.js":574,"./ar-sa":575,"./ar-sa.js":575,"./ar-tn":576,"./ar-tn.js":576,"./ar.js":570,"./az":577,"./az.js":577,"./be":578,"./be.js":578,"./bg":579,"./bg.js":579,"./bm":580,"./bm.js":580,"./bn":581,"./bn-bd":582,"./bn-bd.js":582,"./bn.js":581,"./bo":583,"./bo.js":583,"./br":584,"./br.js":584,"./bs":585,"./bs.js":585,"./ca":586,"./ca.js":586,"./cs":587,"./cs.js":587,"./cv":588,"./cv.js":588,"./cy":589,"./cy.js":589,"./da":590,"./da.js":590,"./de":591,"./de-at":592,"./de-at.js":592,"./de-ch":593,"./de-ch.js":593,"./de.js":591,"./dv":594,"./dv.js":594,"./el":595,"./el.js":595,"./en-au":596,"./en-au.js":596,"./en-ca":597,"./en-ca.js":597,"./en-gb":598,"./en-gb.js":598,"./en-ie":599,"./en-ie.js":599,"./en-il":600,"./en-il.js":600,"./en-in":601,"./en-in.js":601,"./en-nz":602,"./en-nz.js":602,"./en-sg":603,"./en-sg.js":603,"./eo":604,"./eo.js":604,"./es":605,"./es-do":606,"./es-do.js":606,"./es-mx":607,"./es-mx.js":607,"./es-us":608,"./es-us.js":608,"./es.js":605,"./et":609,"./et.js":609,"./eu":610,"./eu.js":610,"./fa":611,"./fa.js":611,"./fi":612,"./fi.js":612,"./fil":613,"./fil.js":613,"./fo":614,"./fo.js":614,"./fr":615,"./fr-ca":616,"./fr-ca.js":616,"./fr-ch":617,"./fr-ch.js":617,"./fr.js":615,"./fy":618,"./fy.js":618,"./ga":619,"./ga.js":619,"./gd":620,"./gd.js":620,"./gl":621,"./gl.js":621,"./gom-deva":622,"./gom-deva.js":622,"./gom-latn":623,"./gom-latn.js":623,"./gu":624,"./gu.js":624,"./he":625,"./he.js":625,"./hi":626,"./hi.js":626,"./hr":627,"./hr.js":627,"./hu":628,"./hu.js":628,"./hy-am":629,"./hy-am.js":629,"./id":630,"./id.js":630,"./is":631,"./is.js":631,"./it":632,"./it-ch":633,"./it-ch.js":633,"./it.js":632,"./ja":634,"./ja.js":634,"./jv":635,"./jv.js":635,"./ka":636,"./ka.js":636,"./kk":637,"./kk.js":637,"./km":638,"./km.js":638,"./kn":639,"./kn.js":639,"./ko":640,"./ko.js":640,"./ku":641,"./ku.js":641,"./ky":642,"./ky.js":642,"./lb":643,"./lb.js":643,"./lo":644,"./lo.js":644,"./lt":645,"./lt.js":645,"./lv":646,"./lv.js":646,"./me":647,"./me.js":647,"./mi":648,"./mi.js":648,"./mk":649,"./mk.js":649,"./ml":650,"./ml.js":650,"./mn":651,"./mn.js":651,"./mr":652,"./mr.js":652,"./ms":653,"./ms-my":654,"./ms-my.js":654,"./ms.js":653,"./mt":655,"./mt.js":655,"./my":656,"./my.js":656,"./nb":657,"./nb.js":657,"./ne":658,"./ne.js":658,"./nl":659,"./nl-be":660,"./nl-be.js":660,"./nl.js":659,"./nn":661,"./nn.js":661,"./oc-lnc":662,"./oc-lnc.js":662,"./pa-in":663,"./pa-in.js":663,"./pl":664,"./pl.js":664,"./pt":665,"./pt-br":666,"./pt-br.js":666,"./pt.js":665,"./ro":667,"./ro.js":667,"./ru":668,"./ru.js":668,"./sd":669,"./sd.js":669,"./se":670,"./se.js":670,"./si":671,"./si.js":671,"./sk":672,"./sk.js":672,"./sl":673,"./sl.js":673,"./sq":674,"./sq.js":674,"./sr":675,"./sr-cyrl":676,"./sr-cyrl.js":676,"./sr.js":675,"./ss":677,"./ss.js":677,"./sv":678,"./sv.js":678,"./sw":679,"./sw.js":679,"./ta":680,"./ta.js":680,"./te":681,"./te.js":681,"./tet":682,"./tet.js":682,"./tg":683,"./tg.js":683,"./th":684,"./th.js":684,"./tk":685,"./tk.js":685,"./tl-ph":686,"./tl-ph.js":686,"./tlh":687,"./tlh.js":687,"./tr":688,"./tr.js":688,"./tzl":689,"./tzl.js":689,"./tzm":690,"./tzm-latn":691,"./tzm-latn.js":691,"./tzm.js":690,"./ug-cn":692,"./ug-cn.js":692,"./uk":693,"./uk.js":693,"./ur":694,"./ur.js":694,"./uz":695,"./uz-latn":696,"./uz-latn.js":696,"./uz.js":695,"./vi":697,"./vi.js":697,"./x-pseudo":698,"./x-pseudo.js":698,"./yo":699,"./yo.js":699,"./zh-cn":700,"./zh-cn.js":700,"./zh-hk":701,"./zh-hk.js":701,"./zh-mo":702,"./zh-mo.js":702,"./zh-tw":703,"./zh-tw.js":703};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1356},1360:function(module,exports){},1362:function(module,exports){},1372:function(module,exports){},1374:function(module,exports){},139:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);const GlobalStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`
  .amp-form-submitting {
    .form-submit {
      outline: none;
      .btn-text {
        display: none;
      }
      .btn-loader {
        display: inline-block;
      }
    }
  }
`,Fieldwrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  margin: 16px 0;
`,SubmitButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button`
  display: block;
  margin: 0 auto;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  color: ${props=>props.theme.color.contrastLight};
  font-size: 16px;
  font-weight: 500;
  border-radius: 23px;
  width: 100%;
  background-color: ${props=>props.theme.color.primary};
  text-transform: uppercase;
  outline: 0;
  padding: 12px 24px;

  &:hover {
    background-color: ${props=>props.theme.color.primaryDark};
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .btn-loader {
    display: none;
    border: 2px solid ${props=>props.theme.color.contrastLight};
    border-radius: 50%;
    border-top: 2px solid ${props=>props.theme.color.contrastGrey};
    width: 14px;
    height: 14px;
    top: 5px;
    position: relative;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  &.disabled-submit {
    display: none;
  }
  form.submit-once.amp-form-submit-success &,
  form.not-completed & {
    &.form-submit {
      display: none;
    }
    &.disabled-submit {
      display: block;
      background: ${props=>props.theme.color.formDisabled};
      color: ${props=>props.theme.color.contrastLight};
      cursor: initial;
      user-select: none;
    }
  }

  form.validate:not(.user-valid) & {
    &.form-submit {
      background: ${props=>props.theme.color.formDisabled};
      box-shadow: 0 1px 0 0 ${props=>props.theme.color.borderLight};
      cursor: initial;
      user-select: none;
    }
  }
`,Submit=({className:className,children:children})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Fieldwrapper,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(GlobalStyle,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(SubmitButton,{className:"form-submit",name:"submitBtn",type:"submit",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"btn-text",children:children||"Submit"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"btn-loader"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SubmitButton,{className:"disabled-submit",disabled:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"btn-text",children:children||"Submit"})})]});Submit.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(Submit)``},1399:function(module,exports){},140:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(3),RequestProvider=__webpack_require__(10),Helmet=__webpack_require__(42),jsx_runtime=__webpack_require__(0);const Frame=styled_components_browser_esm.default.iframe`
  display: none;
  visibility: hidden;
`,GTM=({res:{locals:{configuration:configuration,cleanAmp:cleanAmp}}})=>{var _configuration$gtm;const gtmContainerId=null==configuration||null===(_configuration$gtm=configuration.gtm)||void 0===_configuration$gtm?void 0:_configuration$gtm.containerId;return gtmContainerId&&!cleanAmp?Object(jsx_runtime.jsx)("noscript",{children:Object(jsx_runtime.jsx)(Frame,{src:"https://www.googletagmanager.com/ns.html?id="+gtmContainerId,height:0,width:0})}):null};GTM.propTypes={res:prop_types_default.a.object.isRequired},GTM.__docgenInfo={description:"",methods:[],displayName:"GTM",props:{res:{type:{name:"object"},required:!0,description:""}}};var library_GTM=Object(RequestProvider.withRequest)(GTM);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/GTM.js"]={name:"GTM",docgenInfo:GTM.__docgenInfo,path:"app/component/library/GTM.js"});var MPU=__webpack_require__(74),Styles=__webpack_require__(5);var react=__webpack_require__(1),crypto_browserify=__webpack_require__(779),crypto_browserify_default=__webpack_require__.n(crypto_browserify),bundle_min=__webpack_require__(780),bundle_min_default=__webpack_require__.n(bundle_min),collection=__webpack_require__(51);const commonProps={width:collection.j,height:collection.b,layout:collection.d,sizes:collection.i,heights:collection.c,media:collection.e,placeholder:collection.h,fallback:collection.a,noloading:collection.f,on:collection.g};const AmpScript=({children:children,...props})=>Object(jsx_runtime.jsx)("amp-script",{...props,children:children});AmpScript.propTypes={...commonProps,src:prop_types_default.a.string,script:prop_types_default.a.string,sandbox:prop_types_default.a.oneOf(["allow-forms"]),"max-age":prop_types_default.a.string},AmpScript.__docgenInfo={description:"",methods:[],displayName:"AmpScript",props:{src:{type:{name:"string"},required:!1,description:""},script:{type:{name:"string"},required:!1,description:""},sandbox:{type:{name:"enum",value:[{value:"'allow-forms'",computed:!1}]},required:!1,description:""},"max-age":{type:{name:"string"},required:!1,description:""}},composes:["./props/Common"]};var Script=AmpScript;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Script.js"]={name:"AmpScript",docgenInfo:AmpScript.__docgenInfo,path:"app/component/library/AMP/Script.js"});let buildAllHash=(()=>{let hashes=[];return hash=>(hashes.includes(hash)||hashes.push(hash),hashes.join(" "))})();var hoc_withScript=(WrappedComponent,scriptProps)=>(snippet,...exprs)=>Object(RequestProvider.withRequest)(props=>{const script=exprs.reduce((result,expr,index)=>result+("function"==typeof expr?expr(props):expr)+snippet[index+1],snippet[0]),prefix=null!=scriptProps&&scriptProps.script?scriptProps.script+"-":"script-",minified=bundle_min_default.a.minify(script),hash=(script=>"sha384-"+crypto_browserify_default.a.createHash("sha384").update(script,"utf-8").digest("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"))(minified.code),allHash=buildAllHash(hash),[id]=Object(react.useState)(`${prefix}${hash.slice(-6)}`);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Script,{...scriptProps,script:id,children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}),Object(jsx_runtime.jsx)("script",{type:"text/plain",target:"amp-script",id:id,dangerouslySetInnerHTML:{__html:minified.code}}),Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("meta",{name:"amp-script-src",content:allHash}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-script",src:"https://cdn.ampproject.org/v0/amp-script-0.1.js"})]})]})});const SectionsList=styled_components_browser_esm.default.ul`
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: end;
  justify-content: flex-start;
  width: 100%;
  border-top: 2px solid ${props=>props.theme.color.font};

  @media ${Styles.c.maxLaptop} {
    .menu-visible & {
      display: flex;
      flex-direction: column;
      position: fixed;
      right: 0;
      top: 62px;
      width: 288px;
    }
  }
  @media ${Styles.c.maxTablet} {
    .menu-visible & {
      top: 48px;
    }
  }
  @media ${Styles.c.laptop} {
    border-top-width: 0;
    display: flex;
  }
`,ListItem=styled_components_browser_esm.default.li`
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
  border-bottom: 2px solid ${props=>props.theme.color.font};
  border-left: 6px solid #666;
  min-width: 100%;
  box-sizing: border-box;

  @media ${Styles.c.laptop} {
    float: left;
    border-left-width: 0;
    border-bottom-width: 0;
    border-top-color: ${props=>props.theme.color.black};
    border-top-style: solid;
    border-right: 1px solid #555;
    max-height: 66px;
    overflow: hidden;
    min-width: 69px;
    box-sizing: unset;
  }
  @media ${Styles.c.desktop} {
    min-width: 78px;
  }
  ${Object.keys(Styles.d).map(item=>`\n    &.border-style-${item} {\n      @media ${Styles.c.maxLaptop} {\n        border-left-color: #${Styles.d[item]};\n      }\n    }\n`)}
`,SectionLink=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.white};
  text-transform: uppercase;
  display: block;
  font-size: 18px;
  line-height: 3.5;
  font-family: ${props=>props.theme.fontFamily.primaryFont};

  @media (hover: hover) {
    &:hover {
      border-left-width: 8px;
    }
  }

  @media ${Styles.c.laptop} {
    line-height: 68px;
    font-size: 10px;
    border-top: 4px solid #666;
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${props=>props.theme.color.sidebarFontColor};
    -webkit-transition: border-top 0.2s ease 0s;
    transition: border-top 0.2s ease 0s;

    &:hover {
      border-left-width: 0;
      border-top-width: 8px;
    }
  }

  @media ${Styles.c.desktop} {
    font-size: 12px;
  }

  ${Object.keys(Styles.d).map(item=>`\n    &.border-style-${item} {\n      @media ${Styles.c.laptop} {\n        border-top-color: #${Styles.d[item]};\n      }\n      @media ${Styles.c.maxLaptop} {\n        border-left-color: #${Styles.d[item]};\n      }\n    }\n`)}
`,SectionMenu=({menu:{menu:menu},className:className})=>Object(jsx_runtime.jsx)(SectionsList,{classname:className,children:menu&&menu.map(({title:title,path:path},index)=>Object(jsx_runtime.jsx)(ListItem,{className:"border-style-"+title.toLowerCase(),children:Object(jsx_runtime.jsx)(SectionLink,{href:path,"data-vars-url":path,"data-vars-text":title,className:"nav-link border-style-"+title.toLowerCase(),children:title})},title+index))});SectionMenu.propTypes={menu:prop_types_default.a.object,className:prop_types_default.a.string};hoc_withScript(SectionMenu)`
const links = document.querySelectorAll('.link');
links.forEach(async (link) => {
  link.addEventListener('click', async () => {
    const event_name = 'Navigation Link Click';
    const linkText = link.innerHTML;

    const reportSuiteID = '${props=>{var _props$res$locals$con;return null===(_props$res$locals$con=props.res.locals.configuration.adobe)||void 0===_props$res$locals$con?void 0:_props$res$locals$con.reportSuiteId}}';
    const cacheBuster =
      's' + Math.floor(10000000000000 + Math.random() * 90000000000000);
    const queryParameters = [
      '?AQB=1',
      'ndh=0',
      't=' +
        (function () {
          let today = new Date();
          return (
            today.getDate() +
            '/' +
            today.getMonth() +
            '/' +
            today.getFullYear() +
            ' ' +
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds() +
            ' ' +
            today.getDay() +
            ' ' +
            today.getTimezoneOffset()
          );
        })(),
      'g=' + location.href.substring(0, 255),
      '-g=' + location.href.substring(255),
      'events=event37',
      'c6=' + linkText,
      'c7=Visible Nav',
      'pe=lnk_o',
      'pev2=' + event_name,
      'k=N',
      'AQE=1',
    ].join('&');

    let analyticsURL = [
      'https://ssc.independent.co.uk/b/ss/',
      reportSuiteID,
      '/1/JS-2.17.0/',
      cacheBuster,
      queryParameters,
    ].join('');

    const img = document.createElement('amp-img');
    img.setAttribute('src', encodeURI(analyticsURL));
    img.setAttribute('layout', 'fixed');
    img.setAttribute('width', '1');
    img.setAttribute('height', '1');
    img.style.position = 'absolute';
    document.body.appendChild(img);
  });
});
`;var Menu_SectionMenu=Object(RequestProvider.withRequest)(({...props})=>Object(jsx_runtime.jsx)(SectionMenu,{...props}));const LoginNavButton=styled_components_browser_esm.default.div`
  font-size: ${props=>props.theme.fontSize.menu};
  font-weight: ${props=>props.theme.fontWeight.bold};
  display: flex;
  height: 100%;
  text-transform: uppercase;
  color: ${props=>props.theme.color.white};
  @media ${Styles.c.laptop} {
    padding-top: 5px;
  }
  button {
    padding: 0px 15px;
    height: 100%;
    align-items: center;
    text-transform: uppercase;
    outline: 0;
    &:hover {
      color: ${props=>props.theme.color.greyContrast};
    }
    @media ${Styles.c.tablet} {
      padding: 0px 19px;
    }
  }
`,LoginButton=({className:className})=>Object(jsx_runtime.jsxs)(LoginNavButton,{className:className,children:[Object(jsx_runtime.jsx)("button",{on:"tap:sidebar.open","amp-access":"NOT loggedIn",children:"Login"}),Object(jsx_runtime.jsx)("button",{on:"tap:sidebar.open","amp-access":"loggedIn","amp-access-hide":"true",children:Object(jsx_runtime.jsx)("div",{dangerouslySetInnerHTML:{__html:'\n<svg width="30" id="Layer_1" version="1.1" viewBox="246.778 2.177 702.344 837.536" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px"><g><title>Person</title><path d="M726.651,406.079c62.539-39.586,103.701-106.838,103.701-183.31 c0-121.781-104.544-220.592-233.496-220.592s-233.496,98.81-233.496,220.592c0,79.335,44.697,148.253,111.274,187.126 c-127.016,46.345-227.855,157.316-227.855,285.856c0,169.477,66.244,142.37,367.756,142.37 c302.519,0,334.588,24.087,334.588-145.39C949.04,546.224,851.986,445.905,726.651,406.079z" fill="#F9F9F9" id="svg_1"></path></g></svg>\n'}})})]});LoginButton.propTypes={className:prop_types_default.a.string},LoginButton.__docgenInfo={description:"",methods:[],displayName:"LoginButton",props:{className:{type:{name:"string"},required:!1,description:""}}};var Header_LoginButton=LoginButton;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header/LoginButton.js"]={name:"LoginButton",docgenInfo:LoginButton.__docgenInfo,path:"app/component/library/Header/LoginButton.js"});const HeaderWrapper=styled_components_browser_esm.default.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${props=>props.theme.color.darkContrast};
  top: 0;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.12);
  height: 48px;
  padding-left: 9px;
  box-sizing: border-box;

  @media ${Styles.c.tablet} {
    height: 62px;
  }
  @media ${Styles.c.laptop} {
    height: 72px;
    padding-left: 12px;
  }
`,LogoWrapper=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`,LogoIndy100=styled_components_browser_esm.default.a`
  margin-right: 10px;
  @media ${Styles.c.laptop} {
    margin-right: 10px;
  }
  @media ${Styles.c.desktop} {
    margin-right: 19px;
  }

  svg {
    width: 95px;
    @media ${Styles.c.mobileM} {
      width: 105px;
    }
    @media ${Styles.c.laptop} {
      width: 120px;
    }
    @media ${Styles.c.desktop} {
      width: 144px;
    }
  }
`,IndependentStamp=styled_components_browser_esm.default.a`
  svg {
    height: 25px;
    @media ${Styles.c.mobileM} {
      height: 30px;
    }
    @media ${Styles.c.laptop} {
      height: 35px;
    }
    @media ${Styles.c.desktop} {
      height: 40px;
    }
  }
`,Menu=Object(styled_components_browser_esm.default)(Menu_SectionMenu)`
  justify-content: flex-end;
  width: 90%;
`,MenuLoginWrapper=styled_components_browser_esm.default.nav`
  display: flex;
  background: ${props=>props.theme.color.darkContrast};
`,HamburgerMenu=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  svg {
    width: 24px;
    height: 16px;
  }
  @media ${Styles.c.laptop} {
    display: none;
  }
`,MenuButton=styled_components_browser_esm.default.button`
  display: flex;
  align-items: center;
  outline: none;
  padding: 16px;

  @media ${Styles.c.tablet} {
    padding: 16px 23px;
  }
`,Header=props=>{const{menu:menu,isWishList:isWishList}=props;return Object(jsx_runtime.jsxs)(HeaderWrapper,{children:[Object(jsx_runtime.jsxs)(LogoWrapper,{children:[Object(jsx_runtime.jsx)(LogoIndy100,{href:"/",dangerouslySetInnerHTML:{__html:isWishList?'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695 260.6"><path d="M0,0H695V260.6H0Z" style="fill:#191919"/><path d="M454.4,69.6c0-9.8.1-30.9,15.3-30.9,15.6,0,15.2,21,15.3,30.9h39.5c0-31-20.7-55.9-54.7-55.9s-54.7,25-54.7,55.9Z" style="fill:#fff"/><path d="M568.9,75.6c0,9.8.1,30.9,15.3,30.9,15.6,0,15.2-21,15.3-30.9H639c0,31-20.7,55.9-54.7,55.9s-54.7-25-54.7-55.9Z" style="fill:#fff"/><path d="M568.9,69.6c0-9.8.1-30.9,15.3-30.9,15.6,0,15.2,21,15.3,30.9H639c0-31-20.7-55.9-54.7-55.9s-54.7,25-54.7,55.9Z" style="fill:#fff"/><path d="M454.4,75.6c0,9.8.1,30.9,15.3,30.9,15.6,0,15.2-21,15.3-30.9h39.5c0,31-20.7,55.9-54.7,55.9s-54.7-25-54.7-55.9Z" style="fill:#fff"/><path d="M368.3,69.6V43.5l-8.6,4.9h-6.5V27.3l25-12h28.6V69.6Z" style="fill:#fff"/><path d="M406.8,105.9V75.6H368.5v30.7a4,4,0,0,1-4,4h-10v20h64.6v-20h-8.3a4,4,0,0,1-4-4" style="fill:#fff"/><path d="M45.8,106.9h6.5v24.4H5.1V106.9h6.5V73H5.1V48.6H45.8Z" style="fill:#ec1a2e"/><path d="M108.7,106.9h6.5V82.5c0-3.4-.7-5.8-2.2-7.3s-3.6-2.2-6.5-2.2-5,.7-6.5,2.2-2.2,3.9-2.2,7.3v24.4h6.5v24.4H57V106.9h6.5V73H57V48.6H97.7V58.7c1.2-1.2,2.5-2.5,4-3.9a31.61,31.61,0,0,1,5.3-3.9,36.74,36.74,0,0,1,6.9-3.1,27.32,27.32,0,0,1,8.9-1.3c8.1,0,14.6,2.9,19.3,8.7s7.1,14.9,7.1,27.3v24.4h6.5v24.4H108.4l.3-24.4Z" style="fill:#ec1a2e"/><path d="M212,40h-8.8V15.6h43v91.3h6.5v24.4H212V121.2a30.63,30.63,0,0,1-3.6,3.9,34.25,34.25,0,0,1-5.1,3.9,35.62,35.62,0,0,1-6.5,3.1,24.53,24.53,0,0,1-7.8,1.3c-10.3,0-18-3.8-23-11.4s-7.5-18.3-7.5-32S161,65.5,166,58s12.7-11.4,23-11.4a22,22,0,0,1,7.8,1.3,30.08,30.08,0,0,1,6.5,3.1,34.25,34.25,0,0,1,5.1,3.9,30.63,30.63,0,0,1,3.6,3.9ZM194.7,97.4c0,3.4.7,5.8,2.2,7.3s3.6,2.2,6.5,2.2,5-.7,6.5-2.2,2.2-3.9,2.2-7.3V82.5c0-3.4-.7-5.8-2.2-7.3s-3.6-2.2-6.5-2.2-5,.7-6.5,2.2-2.2,3.9-2.2,7.3Z" style="fill:#ec1a2e"/><path d="M296.2,97.4c0,3.4.7,5.8,2.2,7.3s3.6,2.2,6.5,2.2,5-.7,6.5-2.2,2.2-3.9,2.2-7.3V73h-8V48.6h42.2v74.3c0,14.9-3.7,25.8-11.2,32.9s-18.7,10.6-33.5,10.6a155.28,155.28,0,0,1-20.7-1.4,109.35,109.35,0,0,1-17-3.5V137.1c5.5,1,10.6,1.7,15.5,2.2s10.5.7,16.7.7q8.1,0,12-2.4c2.7-1.6,4-5,4-10v-6.2a52.57,52.57,0,0,1-4.1,4,31.61,31.61,0,0,1-5.3,3.9,36.74,36.74,0,0,1-6.9,3.1,30.3,30.3,0,0,1-8.9,1.3c-8.1,0-14.6-2.9-19.3-8.7S262,110.1,262,97.7V73.3h-6.5V48.9h40.7Z" style="fill:#ec1a2e"/><circle cx="26.5" cy="25.3" r="17" style="fill:#ec1a2e"/><path d="M650.2,131.5H633.1L672.4,13.7h17.1Z" style="fill:#eb1d30"/><path d="M126.2,175v23.2h-6.4l5.1,29.2h1.4L137.2,175h27.5l11.5,52.4h1.4l4.7-29.2h-6.5V175h41.8v23.2h-6.1l-13.7,55.5H155.6l-5.1-23.8h-1.4l-4.8,23.8H102.5L88.1,198.2H82.2V175Z" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:2px"/><path d="M262.9,230.5h6.2v23.2h-45V230.5h6.2V198.2h-6.2V175h38.8Z" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:2px"/><path d="M277.2,231.6q10.65,1.5,17.4,2.1c4.5.3,8.1.5,10.8.5,4.1,0,6.9-.3,8.2-1a3,3,0,0,0,2-2.7,2.91,2.91,0,0,0-2.1-2.7,38.8,38.8,0,0,0-8.8-1.9c-9.8-1.3-17.5-4.1-23.2-8.5s-8.4-10.5-8.4-18.4a25.24,25.24,0,0,1,2-10.3,20.2,20.2,0,0,1,6.4-8.2,34.45,34.45,0,0,1,11.2-5.5,61.05,61.05,0,0,1,16.5-2,134.55,134.55,0,0,1,18.9,1.2,75.78,75.78,0,0,1,14,3.1v19.2c-4.5-.6-9.1-1-13.7-1.4s-9-.6-13.2-.6a31.45,31.45,0,0,0-8.4.8c-1.6.5-2.5,1.4-2.5,2.6a2.41,2.41,0,0,0,.4,1.5,3.44,3.44,0,0,0,1.6,1.1,15.91,15.91,0,0,0,3.3.8,51.84,51.84,0,0,0,5.4.6c11,1,19,3.7,24.2,8s7.8,10.5,7.8,18.5c0,8.4-2.9,15-8.6,19.8s-14.8,7.3-27,7.3a130.59,130.59,0,0,1-19.6-1.3,87.56,87.56,0,0,1-14.5-3.1V231.4Z" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:2px"/><path d="M402.9,230.5h6.2V207.3q0-4.8-2.1-6.9c-1.4-1.4-3.4-2.1-6.2-2.1s-4.8.7-6.2,2.1-2.1,3.7-2.1,6.9v23.2h6.2v23.2h-45V230.5h6.2V166.8h-6.2V143.6h38.8v41.1c1.1-1.1,2.4-2.4,3.8-3.7a24,24,0,0,1,5-3.7,33.6,33.6,0,0,1,6.6-2.9,27.7,27.7,0,0,1,8.5-1.2c7.8,0,13.9,2.7,18.4,8.3s6.7,14.2,6.7,26v23.2h6.2v23.2h-45Z" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:2px"/><path d="M453.6,143.5h38.8v87h6.2v23.2h-45V230.5h6.2V166.8h-6.2Z" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:2px"/><path d="M543.1,230.5h6.2v23.2h-45V230.5h6.2V198.2h-6.2V175h38.8Z" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:2px"/><path d="M555.7,231.6q10.65,1.5,17.4,2.1c4.5.3,8.1.5,10.8.5,4.1,0,6.9-.3,8.2-1a3,3,0,0,0,2-2.7,2.91,2.91,0,0,0-2.1-2.7,38.8,38.8,0,0,0-8.8-1.9c-9.8-1.3-17.5-4.1-23.2-8.5s-8.4-10.5-8.4-18.4a25.24,25.24,0,0,1,2-10.3,20.2,20.2,0,0,1,6.4-8.2,34.45,34.45,0,0,1,11.2-5.5,61.05,61.05,0,0,1,16.5-2,134.55,134.55,0,0,1,18.9,1.2,75.78,75.78,0,0,1,14,3.1v19.2c-4.5-.6-9.1-1-13.7-1.4s-9-.6-13.2-.6a31.45,31.45,0,0,0-8.4.8c-1.6.5-2.5,1.4-2.5,2.6a2.41,2.41,0,0,0,.4,1.5,3.44,3.44,0,0,0,1.6,1.1,15.91,15.91,0,0,0,3.3.8,51.84,51.84,0,0,0,5.4.6c11,1,19,3.7,24.2,8s7.8,10.5,7.8,18.5c0,8.4-2.9,15-8.6,19.8s-14.8,7.3-27,7.3a130.59,130.59,0,0,1-19.6-1.3,87.56,87.56,0,0,1-14.5-3.1V231.4Z" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:2px"/><path d="M667.7,175h19.1v23.2H667.7v23.2q0,4.8,2.1,6.9c1.4,1.4,3.4,2.1,6.2,2.1a54.64,54.64,0,0,0,11.8-1.3v22.2a81.15,81.15,0,0,1-10.8,3,71.91,71.91,0,0,1-13.5,1.3,45.26,45.26,0,0,1-12.8-1.6,20.82,20.82,0,0,1-9.4-5.3,24.22,24.22,0,0,1-5.9-9.9,47.22,47.22,0,0,1-2.1-15.2V198h-6.2V174.8c3.8,0,6.5-1,8.2-2.9a10.77,10.77,0,0,0,2.6-7.4v-6.4h30Z" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:2px"/><circle cx="244.4" cy="153.3" r="17" style="fill:#fff"/><circle cx="525.3" cy="153.3" r="17" style="fill:#fff"/></svg>\n':'\n<svg viewBox="0 0 595.3 212.9" xmlns="http://www.w3.org/2000/svg"><path class="st0" d="M342.4 125.7c0 1.6-2.4 4.3-4.3 4.3h-8.7v18.4h60.4V130h-7.5c-1.7 0-4.1-2.7-4.1-4.3V97.2h-35.8v28.5zM437.1 128.1c-9.6 0-14.2-9.3-14.2-31h-36.7c.5 34.6 23.1 53 50.9 53 28 0 50.6-18.3 51.1-53h-36.7c-.1 21.7-4.8 31-14.4 31zM542.3 128.1c-9.6 0-14.2-9.3-14.2-31h-36.7c.5 34.6 23.1 53 50.9 53 28 0 50.6-18.3 51.1-53h-36.7c-.1 21.7-4.8 31-14.4 31z" fill="#fdfdfe"/><g><path class="st0" fill="#fdfdfe" d="M378.2 41.3h-26.6l-23.3 11.2V72h5.7l8.4-4.6v24.5h35.8zM437.1 63c9.4 0 14.1 8.4 14.4 28.9h36.7c-.5-34.1-23.8-52.2-51.1-52.2-27.1 0-50.4 18.1-50.9 52.2h36.7c.2-20.5 4.8-28.9 14.2-28.9zM542.3 63c9.4 0 14.1 8.4 14.4 28.9h36.7c-.5-34.1-23.8-52.2-51.1-52.2-27.1 0-50.4 18.1-50.9 52.2h36.7c.3-20.5 4.9-28.9 14.2-28.9z"/></g><g><path class="st1" d="M41.2 127h6.2v23H2.8v-23H9V95H2.8V72h38.4v55zM99.5 127h6.2v-23c0-3.2-.7-5.5-2-6.9-1.4-1.4-3.4-2.1-6.1-2.1-2.7 0-4.7.7-6.1 2.1-1.4 1.4-2 3.7-2 6.9v23h6.2v23H51v-23h6.2V95H51V72h38.4v9.5c1.1-1.1 2.4-2.4 3.8-3.7 1.4-1.4 3.1-2.6 5-3.7s4.1-2.1 6.5-2.9c2.4-.8 5.2-1.2 8.4-1.2 7.7 0 13.7 2.7 18.2 8.2 4.4 5.5 6.7 14 6.7 25.7v23h6.2v23H99.5V127zM196 63.9h-8.3v-23h40.5V127h6.2v23H196v-9.5c-.8 1.1-2 2.4-3.4 3.7-1.4 1.4-3 2.6-4.8 3.7-1.8 1.1-3.9 2.1-6.2 2.9-2.3.8-4.7 1.2-7.4 1.2-9.7 0-17-3.6-21.7-10.7-4.7-7.2-7.1-17.2-7.1-30.2s2.4-23.1 7.1-30.2c4.7-7.2 11.9-10.7 21.7-10.7 2.6 0 5.1.4 7.4 1.2 2.3.8 4.3 1.8 6.2 2.9 1.8 1.1 3.4 2.4 4.8 3.7 1.4 1.4 2.5 2.6 3.4 3.7V63.9zM179.8 118c0 3.2.7 5.5 2 6.9 1.4 1.4 3.4 2.1 6.1 2.1 2.7 0 4.7-.7 6.1-2.1 1.4-1.4 2-3.7 2-6.9v-14c0-3.2-.7-5.5-2-6.9-1.4-1.4-3.4-2.1-6.1-2.1-2.7 0-4.7.7-6.1 2.1-1.4 1.4-2 3.7-2 6.9v14zM274.6 118c0 3.2.7 5.5 2 6.9 1.4 1.4 3.4 2.1 6.1 2.1 2.7 0 4.7-.7 6.1-2.1 1.4-1.4 2-3.7 2-6.9V95h-7.6V72H323v70.1c0 14-3.5 24.4-10.6 31-7.1 6.6-17.6 10-31.6 10-6.7 0-13.3-.4-19.6-1.3-6.3-.9-11.7-2-16.1-3.3v-23c5.1.9 10 1.6 14.7 2 4.6.4 9.9.6 15.8.6 5 0 8.8-.8 11.4-2.3 2.5-1.5 3.8-4.7 3.8-9.5v-5.9c-1.1 1.2-2.4 2.5-3.9 3.8-1.5 1.3-3.1 2.5-5 3.6s-4 2.1-6.5 2.9c-2.4.8-5.2 1.2-8.4 1.2-7.7 0-13.7-2.7-18.2-8.2-4.4-5.5-6.7-14-6.7-25.7V95h-6.2V72h38.4l.3 46z" fill="#eb1e30"/></g><path class="st1" d="M22.1 34.7c8.9 0 16 7.2 16 16 0 8.9-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16z" fill="#eb1e30"/></svg>\n'},"aria-label":"Back to homepage"}),Object(jsx_runtime.jsx)(IndependentStamp,{href:"https://www.independent.co.uk/",dangerouslySetInnerHTML:{__html:'\n<svg class="logo_from_independent" viewBox="297 294.7 967.3 267.9" xmlns="http://www.w3.org/2000/svg" fill="#ec1f31"><path class="ftil0" d="M304.6 363.9v-41l-5.2-.6c-.8-.2-1.2-.4-1.6-.8-.6-.4-.8-1-.8-1.6v-3.4h7.6v-4.8c0-2.8.4-5.2 1-7.4.8-2.2 1.8-4 3.2-5.4 1.6-1.2 3.2-2.6 5.4-3.2 2-.8 4.4-1 6.8-1 2.2 0 4.2.4 6 1v4c0 .8-.4 1-.8 1-.6.2-1.2.2-2.2.2h-1.4c-1.4 0-2.8.2-4 .6-1.2.4-2.2 1-3 1.8-1 1-1.6 2.2-2.2 3.6-.4 1.4-.6 3-.6 5.2v4.4h14v6.2h-13.6v41.2h-8.6zM334.8 363.9v-48.2h4.8c1 0 1.6.2 2 .6.4.4.6 1 .8 1.8l.6 7.6c1.6-3.4 3.6-6 6.2-7.8 2.4-1.8 5.2-2.8 8.6-2.8 1.2 0 2.6.2 3.6.6l3 1.2-1 6.4c-.2.8-.8 1.2-1.4 1.2-.4 0-1-.2-2-.4-1-.4-2.2-.6-3.8-.6-2.8 0-5.4 1-7.4 2.6s-3.6 4.2-4.8 7.4v30.8h-8.8v-.4h-.4zM390.8 314.9c3.4 0 6.8.6 9.6 1.8 2.8 1 5.2 2.8 7.2 5s3.4 4.8 4.6 7.8c1 3 1.6 6.6 1.6 10.4 0 3.8-.6 7.2-1.6 10.4-1 3-2.6 5.6-4.6 7.8-2 2.2-4.4 3.8-7.2 4.8s-6 1.8-9.6 1.8c-3.4 0-6.8-.6-9.6-1.8-2.8-1-5.2-2.8-7.2-4.8-2-2.2-3.6-4.8-4.6-7.8-1-3-1.6-6.6-1.6-10.4 0-3.8.6-7.2 1.6-10.4 1-3 2.6-5.6 4.6-7.8 2-2.2 4.4-3.8 7.2-5 3-1.2 6-1.8 9.6-1.8zm0 43c4.8 0 8.4-1.6 10.6-4.8 2.4-3.2 3.4-7.6 3.4-13.4s-1-10.2-3.4-13.4c-2.4-3.2-6-4.8-10.6-4.8-2.4 0-4.6.4-6.4 1.2-1.8 1-3.2 2-4.6 3.6-1.2 1.6-2 3.4-2.8 5.8-.6 2.4-1 4.8-1 7.6s.4 5.4 1 7.6c.6 2.2 1.4 4.2 2.8 5.6 1.2 1.6 2.8 2.8 4.6 3.6 1.8.8 4.2 1.4 6.4 1.4zM422.5 363.9v-48.2h5c1.2 0 2 .6 2.4 1.8l.6 4.8c1.8-2.2 3.8-4 6-5.4s4.8-2.2 7.6-2.2c3.2 0 6 1 8 2.8 2 1.8 3.4 4.2 4.4 7.2.8-1.8 1.6-3.2 2.8-4.6 1.2-1.4 2.4-2.4 3.6-3 1.4-1 2.8-1.4 4.4-1.8 1.4-.4 3-.6 4.8-.6 2.6 0 4.8.4 6.8 1.2 2 .8 3.6 2 5 3.6s2.4 3.4 3 5.8c.8 2.4 1 4.8 1 7.8v30.8h-8.6v-30.8c0-3.8-1-6.8-2.6-8.6-1.6-2-4-2.8-7.2-2.8-1.4 0-2.8.2-4 .8-1.2.6-2.4 1.2-3.2 2.2-1 1-1.6 2.2-2.2 3.6-.6 1.4-1 3-1 5v30.8h-8.6v-30.8c0-3.8-.8-6.8-2.4-8.6-1.6-1.8-3.8-2.8-6.8-2.8-2.2 0-4 .6-5.8 1.6-1.8 1-3.4 2.8-4.8 4.6v35.8h-8.2z" fill="#666766"/><g><circle class="ftil1" cx="389.7" cy="475.5" r="84" fill="#fff"/><path class="ftil1" d="M508 441l2.9.6c6.9 1.4 7.8 5.5 7.8 9.3v47.9c0 3.9-.9 7.8-7.8 9.2l-2.9.6v1.5h34v-1.5l-2.9-.6c-6.8-1.4-7.8-5.2-7.8-9.2v-47.9c0-3.8.9-7.9 7.8-9.3l2.9-.6v-1.5h-34v1.5zM1201.7 439.5v23.7h1.4l3.5-8.8c3.5-8.6 7.1-13.3 16.2-13.3h3.8v57.6c0 3.7-.9 8.2-7.8 9.3l-3 .5v1.6h34v-1.6l-3-.5c-6.9-1.1-7.8-5.5-7.8-9.3v-57.6h3.8c9.2 0 12.8 4.7 16.2 13.3l3.5 8.8h1.4v-23.7h-62.2zM1171.3 441l2.8.4c5.2.8 10 3.3 10.1 16.7l.3 32.1-27.3-32.3c-8.2-9.7-11.5-13.8-13.9-18.1l-.2-.3h-25v1.5l.5.1c5.1.9 8.4 3 13.8 9l1 1.1v37c0 15.8-5 18.4-11 19.9l-2 .5v1.5h28v-1.5l-2-.5c-5.3-1.4-10.9-2.9-11-19.9l-.3-35.1 49.4 58.3.2.2h1.5v-53.4c0-13.4 5.1-16 10.1-16.7l2.8-.4v-1.6h-27.8v1.5zM884.6 497.4c-4.7 8-10.5 11-21.2 11h-3c-6 0-8.7-2.9-8.7-9.4v-24.4l4.4.1c10.7.2 13.7.7 17 11l1.2 3.8h1.5v-31.6h-1.5l-1.2 3.9c-3.2 10.3-6.4 10.8-17 11l-4.4.1v-31.7h7.6c12.6 0 18.3 2.6 22.6 10.4l4.8 8.7h1.4v-20.8h-59.7v1.5l2.9.6c6.5 1.3 7.8 4.4 7.8 9v48.2c0 3.7-.9 8.2-7.8 9.3l-3 .5v1.5h62.4v-20.8h-1.4l-4.7 8.1zM1107.8 497.4c-4.7 8-10.4 11-21.2 11h-3c-6 0-8.7-2.9-8.7-9.4v-24.4l4.4.1c10.7.2 13.7.7 17 11l1.2 3.8h1.5v-31.6h-1.5l-1.2 3.9c-3.2 10.3-6.4 10.8-17 11l-4.4.1v-31.7h7.6c12.6 0 18.3 2.6 22.6 10.4l4.8 8.7h1.4v-20.8h-59.7v1.5l2.9.6c6.5 1.3 7.8 4.4 7.8 9v48.2c0 3.7-.9 8.2-7.8 9.3l-3 .5v1.5h62.4v-20.8h-1.4l-4.7 8.1zM659.1 439.5h-62.9v1.5l2.8.4c6.3.9 10 3.6 10.1 14.7l.3 34.1-27.4-32.3c-8-9.5-11.5-13.8-13.9-18.1l-.2-.3h-25v1.5l.5.1c5.1.9 8.4 3 13.8 9l1 1.1v37c0 15.8-5 18.4-11 19.9l-2 .5v1.5h28v-1.5l-2-.5c-5.3-1.4-10.9-2.9-11-19.9l-.3-35.1 49.6 58.5h1.5v-57c0-8.9 3.9-13.4 11.7-13.4 7.8 0 11.7 4.5 11.7 13.4v44.2c0 4.1-.9 8.1-7.9 9.3l-2.8.5v1.5H659c12.2 0 22.4-3.8 29.5-10.9 6.4-6.4 10-15.2 10-24.7s-3.5-18.2-10-24.4c-7-7-17.2-10.6-29.4-10.6m-12 59.1v-57.5h9c17.8 0 28.5 12.6 28.5 33.6 0 21.4-10.1 33.6-27.6 33.6h-2.2c-6.4.1-7.7-3.8-7.7-9.7M1010.9 439.5H948v1.5l2.8.4c6.3.9 10 3.6 10.1 14.7l.3 34.1-27.3-32.3c-8.2-9.7-11.5-13.8-13.9-18.1l-.2-.3h-25v1.5l.5.1c5.1.9 8.4 3 13.8 9l1 1.1v37c0 15.8-5 18.4-11 19.9l-2 .5v1.5h28v-1.5l-2-.5c-5.4-1.4-10.9-2.9-11-19.9l-.3-35.1 49.5 58.3.2.2h1.5v-57c0-8.9 3.9-13.4 11.7-13.4 7.8 0 11.7 4.5 11.7 13.4v44.2c0 4.1-.9 8.1-7.9 9.3l-2.8.5v1.5h35.3c12.2 0 22.4-3.8 29.5-10.9 6.4-6.4 10-15.2 10-24.7s-3.6-18.1-10-24.4c-7.2-7-17.4-10.6-29.6-10.6m-12 59.1v-57.5h9c17.8 0 28.5 12.6 28.5 33.6 0 21.4-10.1 33.6-27.6 33.6h-2.2c-6.3.1-7.7-3.8-7.7-9.7M799.7 439.5h-30.5v1.5l2.9.6c6.8 1.4 7.8 5.2 7.8 9.2v48c0 3.9-.9 7.8-7.8 9.2l-2.9.6v1.5h35.3v-1.5l-2.3-.5c-8-1.7-9.6-3.3-9.6-10.3v-56.6h3c10.9 0 17.4 7.3 17.4 19.7 0 12.3-6.5 19.7-17.4 19.7h-.8v1.7h4.8c15.9 0 27-8.8 27-21.4.2-12.7-11-21.4-26.9-21.4M756 497.4c-4.7 8-10.5 11-21.2 11h-3c-6 0-8.7-2.9-8.7-9.4v-24.4l4.4.1c10.8.2 13.7.7 17 11l1.2 3.8h1.5v-31.6h-1.5l-1.2 3.9c-3.2 10.3-6.4 10.8-17 11l-4.4.1v-31.7h7.6c12.6 0 18.3 2.6 22.6 10.4l4.8 8.7h1.4v-20.8h-59.7v1.5l2.9.6c6.5 1.3 7.8 4.4 7.8 9v48.2c0 3.7-.9 8.2-7.8 9.3l-3 .5v1.5h62.4v-20.8h-1.4l-4.7 8.1z" fill="#fff"/><g><path class="ftil2" d="M378.9 496v.2l.8.3-.4.7.2.1 1.6-1.2-.1-.1h-2.1zm-1.8 32.1l-2.8-1.2 2.7-1.4-.1-.2-4.1 1.1c-.2 0-.3.2-.4.4-.1.3.1.6.3.7l4 1.3c.7.2 1.3.4 2 .7l2 .7.1-.2-1.8-1c-.6-.3-1.2-.6-1.9-.9m-3.8-32.1v.2l.8.3-.4.7.1.1 1.6-1.2-.1-.2-2 .1zm53.4 14.2c-.4.1-.8.1-1.3.2-.4.1-.9.1-1.2.2-.2 0-.5.1-.7.1-.2 0-.3.1-.5.1l-.5.1c-.2 0-.4.1-.6.1-.4.1-.8.2-1.1.2-.2 0-.3.1-.4.1l-.6.1.1.3.6-.1c.1 0 .3 0 .5-.1.3 0 .7-.1 1.1-.1.3 0 .7-.1 1-.1h.3c.3 0 .6-.1.9-.1.5-.1 1-.1 1.5-.2.3 0 .7-.1 1-.1.3-.1.7-.1 1-.1h.3l1.2-.2c.5-.1 1-.2 1.5-.2.2 0 .4-.1.7-.1.4-.1.7-.1 1-.2.2 0 .4-.1.6-.1l.6-.1v-.3h-.1-.8c-.4 0-.8.1-1.4.1-.2 0-.5 0-.7.1-.5 0-.9.1-1.4.2l-1.2.2c-.4-.2-1.4 0-1.4 0m-40.5-38.1l-3.6 1.6-.1-1h-.3l-.2 2.1.2.1 4.2-2.6-.2-.2zm-1.5 8.1l-.1-.6h-.3l-.3 1.7.2.1 2.3-1.6-.1-.2-1.7.6zm-1.8-10.7l-3 1.3-.3-1.2h-.3l-.1 2.3.2.1 3.5-2.3v-.2zm1.1 7.3l-.1-.6h-.3l-.3 1.7.2.1 3.1-2.2-.1-.2-2.5 1.2zm43.3.2l.1.1.1.1c.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1 0 .2.1.3v.4c0 .1 0 .2-.1.3 0 .1 0 .1-.1.2l-.1.2.2.1.1-.2c0-.1.1-.1.1-.2s.1-.2.1-.4v-.2-.2-.4c0-.1 0-.3-.1-.4 0-.1-.1-.3-.1-.4 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-.3-.3c-.8-.8-1.6-1.5-2.4-2.3l-.6.7c.9.7 1.8 1.3 2.7 2 0 .2.1.3.2.4m-7.1-4.5v.1l.1.1c0 .1.1.2.2.3 0 .1.1.1.1.1l.1.1c.1.1.1.1.2.1h.1c.2.1.4.1.6.1h.1c.1 0 .2 0 .3-.1h.2c.1 0 .3-.2.4-.4.1-.1.2-.3.2-.5v-.1-.2-.2c0-.1 0-.2-.1-.2v-.1c-.1-.1-.1-.2-.1-.2v-.1l-.2.1v.7l-.1.1H421.7h-.1l-.1-.1v-.1l-.1-.1v-.1-.1-.1-.1-.1-.1l.1-.1s0-.1.1-.1v-.1c.1-.1.2-.1.2-.1l-.1-.3h-.1H421.3c-.1 0-.1.1-.2.1l-.1.1-.1.1v.1c-.1.2-.2.3-.2.5v.3c-.6.5-.5.6-.5.7zm-.4 5.8v.4l.1.1s0 .1.1.1l.1.1.1.1.1-.1v-.2-.1-.1-.2c0-.1 0-.2.1-.2v-.1s0-.1.1-.1c.1-.1.1-.2.1-.2s0-.1.1-.1l.1-.1c.1 0 .1-.1.2-.1s.2-.1.2-.1h.5c.1 0 .1 0 .2.1h.2c.1.1.2.1.2.1l.2-.1s0-.1-.1-.2v-.1l-.1-.1-.1-.1-.1-.1s-.1-.1-.2-.1-.1 0-.2-.1c-.1 0-.1 0-.2-.1h-.2c-.2 0-.3 0-.5.1-.2 0-.3.1-.4.2l-.1.1-.2.2c-.1.1-.2.3-.2.4 0 .1-.1.3-.1.4v.3m-9.6 30.2c.1 0 .1.1.2.1s.2.1.2.2c.1.1.2.1.3.2l.1.1.1.1.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1 0 .1.1.2 0 .1.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.1-.1-.3-.3c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.2-.1 0-.1 0-.2-.1h-.8v.2s.1 0 .2.1.1.2.2.2m9.1 1s.2 0 .4-.1h.3c.2 0 .5-.1.8-.1 1-.1 2.2-.3 3.3-.6l.3-.1 1.5-.3c.2-.1.5-.1.7-.1.3-.1.6-.1.8-.2.3-.1.6-.1.8-.2l.3-.1c.3-.1.4-.1.4-.1h.1l-.1-.3h-.1-.7c-.2 0-.5.1-.9.1h-.1c-.4.1-.9.1-1.5.2s-1.2.2-1.7.3c-1.1.2-2.3.5-3.3.7-.3.1-.5.1-.8.2-.1 0-.2.1-.3.1-.3.1-.4.1-.4.1h-.1l.3.5zm-10.6 4.7h.5c.2 0 .4-.1.6-.1.4-.1.8-.2 1.2-.2l1.2-.3.2-.1c.5-.1.9-.2 1.3-.3.5-.1.9-.2 1.2-.3.2-.1.4-.1.6-.2.1 0 .2-.1.2-.1.2-.1.3-.1.3-.1h.1l-.1-.3h-.1-.6c-.2 0-.4 0-.6.1-.4.1-.8.1-1.2.2-.4.1-.9.2-1.4.3-.9.2-1.8.5-2.6.7-.3.1-.5.2-.6.2l-.2.1c-.2.1-.3.1-.3.1h-.1l.4.3zm-48.5-71.5l.2-.3-11.5-5.5-7-9.3-.3.2 6.3 10.2 12.3 4.7zm-7.4 11.4L328 449l-.1.3 6.5 2.4 18.4 2.8v-.4zm27.7 12l-4.2 2-.3-1.6h-.3v2.7l.2.1 4.7-3-.1-.2zm-44.1-33.8l-.2.2 5.5 7.6 13.3 4.4.1-.3-12.3-5.1-6.4-6.8zm-1.7 22.5l6.6 1.9 13.1 1.2v-.3l-19.7-3.1v.3zm67 17.3l1.3.6-.7 1.2.2.1 2.5-1.9-.1-.2h-3.1l-.1.2zm-48.6-24.6l.1-.3-15.2-4.9-7.5-7.1-.2.2 6.7 8 16.1 4.1zm-.5 3.7l.1-.3-17.9-4.9-8.1-6.6-.2.2 7.5 7.6 18.6 4zm18.9 4.4l-8 4.2-.3-1.7h-.3v2.9l.2.1 8.5-5.2-.1-.3zm3.2 3.4l-7 3.7-.3-1.7h-.3v2.9l.2.1 7.6-4.7-.2-.3zm3.2 3.4l-5.8 3-.3-1.7h-.3v2.8l.2.1 6.4-4-.2-.2zm-12.1-14l-7.7 4.1-.3-1.7h-.3v2.9l.2.1 8.3-5.1-.2-.3zm2.7 3.6l-8.2 4.4-.3-1.7h-.3l-.1 2.9.2.1 8.7-5.5v-.2zm-5.6-7.1l-5.8 3-.3-1.7h-.3v2.9l.2.1 6.4-4-.2-.3zm45.2 28.5l1.3.6-.7 1.2.2.1 2.5-1.9-.1-.2h-3.1l-.1.2zm-8.6 33.3l-5.1-6.3-.3.1 1.3 7.5 2.7 3.1s.1 0 .1.1c.1 0 .1.1.2.1s.1.1.2.1.2.1.2.2c.1.1.2.1.3.2.1.1.2.1.2.2l.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.6-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.3-.3c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.2-.1 0-.1 0-.2-.1.1 0 .1 0 .2-.1.5-.1 1-.3 1.5-.4h.1c.1 0 .1.1.2.1s.1.1.2.1.2.1.2.2c.1 0 .2.1.3.2.1.1.2.1.2.2l.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2v-.2-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.3-.3c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.2h-.1c1.4-.4 2.8-.7 4.2-1l-4.6-2.6-1.6.2zm11.6-27.8l-2.5.2v.2l1 .3-.4 1 .2.1 1.8-1.7-.1-.1zm-11.5 11.7l2.2-3.2-.1-.1-3.7 1.2v.2l1.8.2-.3 1.7h.1zm1.8 2.6v.2l1.1.3-.4 1 .2.1 1.7-1.8-.1-.2-2.5.4zm-14.2 25l.7-.2 2.7-.9c.3-.1.7-.2 1-.3l.3-.1 1.1-.4c.5-.2.9-.3 1.2-.4.2-.1.3-.1.4-.2.4-.1.6-.2.6-.2h.1l-.1-.3h-.1s-.2 0-.7.1l-.3.1c-.4.1-.9.2-1.4.3l-1.1.3-.9.3-.4.1c-.8.2-1.7.5-2.7.9-.8.2-1.5.5-2.2.8l-.5.2-.3.1c-.8.3-1.5.5-2.1.8-.3.1-.5.2-.7.3l-.2.1-.7.3-.6.3h-.1l.1.3s.3-.1.7-.2c.1 0 .3-.1.5-.2l.5-.2c.2-.1.4-.1.7-.2.4-.1.9-.3 1.4-.5.3-.1.6-.2 1-.3.7-.2 1.4-.5 2.1-.7m16.9-2.9c-.2.1-.4.1-.7.2-.5.1-1 .3-1.6.5-.5.1-1 .3-1.6.5l-.9.3-.9.3c-1.2.4-2.5.9-3.7 1.3l-2.4.9c-.4.2-.9.3-1.3.5-.4.1-.8.3-1.2.4-.2.1-.4.1-.5.2-.4.2-.8.3-1.2.5l-.3.1c-.6.2-1.2.5-1.6.7l-.6.3c-.5.2-.9.4-.9.4h-.1l.1.3h.1l.9-.3c.2-.1.4-.1.7-.2.5-.2 1-.4 1.6-.6l.5-.2c.3-.1.7-.3 1.1-.4l.5-.2c.4-.1.8-.3 1.2-.4.4-.2.9-.3 1.3-.5l2.4-.9c1.3-.5 2.5-.9 3.7-1.3.6-.2 1.2-.4 1.7-.6.4-.1.8-.3 1.2-.4l.4-.1c.6-.2 1.2-.4 1.6-.6.3-.1.5-.2.7-.2l.9-.3-.2-.5-.9.3zm-7.9-3.2c.1 0 .2.1.3.2.1.1.2.1.3.2.1.1.2.1.2.2l.1.1.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4 0-.1-.1-.2-.2-.2l-.1-.1-.3-.3c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.2h-.2-.1-.8v.2s.1 0 .2.1c.1 0 .1.1.2.1-.2-.3-.1-.2 0-.2m13.2-27.4l.8.2-.3.8.2.1 1.4-1.5-.1-.2-2 .3v.3zm-6.8-7.1l1.7.4-.5 1.6.2.1 2.5-2.8-.1-.2-3.7.7-.1.2zm-12.9-89.1c-48.1 0-87 39-87 87 0 48.1 39 87 87 87 48.1 0 87-39 87-87 .1-48-38.9-87-87-87m15.6 77.1h10.2s3.2 1.2 7.4 2.9c1.9.8 3 2.5 2.8 4.5 0 0 1.7 1.7 2.6 2.7 1.1 1.3 1.2 3 .4 4.2-.9 1.1-2.1 1.4-2.6 1.5l-.1-.2c.7-.7.4-1.7-.2-2.6-.6-.9-1.2-1.1-1.8-.7l-.6.4 1.6 2.5-.1.2c-1.3.3-3 .1-3.8-1h-7.8v.2l4.4.8.1.3-15.1 17.7.1.1 5.1-4.5v4l-.5 1.2.5 2.8-.2 1.2 4.7 4s.1 0 .1.1c.1 0 .1.1.2.1s.1.1.2.1.2.1.2.2c.1.1.2.1.3.2.1.1.2.1.2.2l.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.3-.3c-.1-.1-.2-.2-.4-.3-.1-.1-.3-.1-.4-.2h-.1c.6-.1 1.2-.3 1.7-.4.1 0 .1.1.2.1s.1.1.2.1.2.1.2.2c.1 0 .2.1.3.2.1.1.2.1.2.2.1.1.1.2.2.2.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.3-.3c-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.4-.2 8.2-1.8 14.5-3 14.5-3 8.3 4.9 7.8 4.6 9.5 5.6 3.2 1.8 3 6.9-2.9 6.9-4.5 0-12.8.8-17.9 1.7l4.5-4.1-.1-.1s-4.4 3.2-9.7 5.8c-2.8 1.1-7.1 3-11.6 5l6.5-6.2-.1-.2s-8.3 6.7-14.2 9.9c-3.6 1.6-6.6 3-8.3 3.8-2.4 1.1-4.3 1.4-6.9.4-4.2-1.5-5.9-2.1-9.5-3.5-2.1-.8-2.3-3.8 0-4.5 1-.3 3.5-1.1 5.2-1.7.7.3 1.5.7 2.3 1 1.2.5 2.4 1.1 3.5 1.6.6.2 1.1.5 1.6.7.1.1.3.1.4.2.1 0 .1.1.2.1h.1c.2.1.4.2.6.4.3.3.6.7.7 1 .1.3.2.7.1.9 0 .3-.1.5-.1.6 0 .1-.1.2-.1.2l.2.1s0-.1.1-.2c.1-.2.1-.4.2-.7 0-.3 0-.7-.1-1.1-.1-.4-.4-.9-.7-1.2-.2-.2-.4-.4-.6-.5h-.1c-.1 0-.1-.1-.2-.1-.1-.1-.2-.1-.4-.2l-1.5-.9c-1.1-.6-2.2-1.3-3.3-1.9-2.5-1.4-5-2.9-6.8-3.9 0 0 8.8-2.8 20.1-5.9l1.8.8.1-.1v-.1l-1.1-.9-2.8-2.2-1.4-.5-.9-2.5-1.3-.7-1.2-5.6h-.2l.5 6.1-3.5 2v-8.1h-.2l-1 8.6-4.7.9 1.6-9.3h-.2l-2.9 9.5-4.6.3 3.4-9.9-.2-.1-4.9 10.1-4.6.3 5.3-10.5-.2-.1-7.3 10.8-4.9.8 7.9-11.6-.2-.1-13.3 15.4-.7-.5 11.9-18.6 18.2-6.8s1.2-.5 1.9-.8c.4-.2.7-.3 1.1-.5l.6-.3c.2-.1.4-.2.5-.4.3-.3.7-.5 1-.8l.2-.2c.1-.1.1-.2.2-.2.1-.2.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.2-.3.3-.5.1-.2.2-.3.2-.5.1-.2.1-.3.2-.5.1-.3.2-.6.3-.8.1-.2.1-.5.1-.7 0-.2 0-.3.1-.4v-.1h-.2v.1c0 .1 0 .2-.1.4s-.1.4-.2.6c-.1.2-.2.5-.3.8-.1.1-.1.3-.2.4-.1.1-.2.3-.3.4-.1.1-.2.3-.3.4-.1.1-.2.3-.3.4-.1.1-.2.3-.4.4l-.2.2-.2.2c-.3.3-.6.5-1 .7-.2.1-.3.2-.5.3-.2.1-.3.2-.5.2-.4.1-.7.3-1.1.4-.7.3-1.4.5-2 .7-.6.2-1.1.4-1.4.5l-1.2-2.4 2.4-2.1-.1-.2-6.3 3.9-1.5-3 8.5-6.3-.1-.2-13 7.8-1.2-3.1 12.2-8.2-.1-.2-15.8 8.7-.7-2.9 13.3-8.5-.1-.2-16.3 8.3-.5-3.5 13.5-7.3-.1-.2-16.7 6.9-.1-3.4 13.6-5.3-.1-.2-16.5 4.5.2-3.7 12.5-2.9v-.2l-16.1 2.2.5-3.2 11.8-1.3v-.2l-16.5.3.2-2.7 13.2-.1v-.2l-23.6-1.7v-.2l3.8-1.3v-.2l-9.8-3.7v-.2l3.9-.3v-.2l-8.5-5.2v-.3l5.9.3.1-.2-6.8-6.4.1-.2 3.2.6.1-.2-3.2-4-2-5.7.2-.1 3.1 3.9 6.9 4 .1-.1-4.5-6.6-1.7-7.3.2-.1 3.6 5.4 7 5.7.1-.1-4.3-7.8-1.5-9.5.2-.1 4.2 8.1 8.8 7.3.2-.1-6-9.7-1.4-11.6.2-.1L339 423l12.4 11.2 15.7 8 17.2 23.9 6.7 5.6.2-.2-2.9-3.8 6.9-1.8v-.2l-6-.3v-.2l8.8-1.6v-.2l-11-.8v-.2l14-2.3 5.6 1.3.1-.2-5.3-2.4-8.7.2v-.2l9.3-1.7 5.7 2 .1-.2-5.2-3.3-6.2-.2v-.2l6.9-1.1 6 2.8.1-.2-5-4.7H399v-.2l6.6-1.5 5.8 4.8.1-.1-4.5-6.6-4.9-.9v-.2l6.2-.4 5.6 6.8.2-.1-4-8.5-5.4-1.7v-.2l6.8.6 5.2 8.9.2-.1-3.4-10.5-6.7-2.4v-.2l8.1 1.5 4.5 10.8.2-.1-3-12-7.2-4.1.1-.2 8.6 3.3 4.1 12h.2l-2.6-13.1-7.8-5.7.1-.2 9.1 5 3.6 12.7h.2l-2.2-13.5-8.2-7.3.1-.2 9.6 6.6 2.8 12.9h.2l-1.4-13.7-8.2-8.9.1-.2 9.5 8.1 2.1 12.5h.2l-.9-13.1-7.8-10.1.1-.1 9.1 9.5 1.4 10.8h.2l-.5-11.4-7.1-10.9.2-.1 8.2 10.4 1.1 7.8h.2l-.4-8.3-5-11.3.2-.1 6.3 10.7.6 4.4h.2l.3-5-2-10.9.2-.1 3.6 8.9h.2l2.2-8.9h.2l-.7 8.7.2.1 6.1-8.7.2.1-3.9 7.9.1.1 9.3-6.6.1.2-14.2 19.1s-4.6 12.3-6.1 16.3c-.3.8-.8 1.3-1.6 1.7-.4.2-11.5 4.6-11.5 4.6l-3 2.7-10.1 1.2v.3zm-1.9 17.8l1.4.3-.4 1.3.2.1 2-2.4-.1-.2-3 .7-.1.2zm3.8-13.3l.1.1 2-1.5-.1-.2h-2.5v.2l1 .4-.5 1zm-14.3 27.5h-2v.2l.8.3-.4.8.1.1 1.6-1.2-.1-.2zm19.9-26.6l.2.1 1.6-1.2-.1-.2h-2v.2l.8.3-.5.8zm-7.5 17.6v.2l1.1.3-.4 1 .2.1 1.7-1.8-.1-.2-2.5.4zm-10.2-15.5l.1.1 2.5-1.9-.1-.2h-3.1v.2l1.3.6-.7 1.2zm5.4-3.3l.2.1 1.6-1.2-.1-.2h-2v.2l.8.3-.5.8zm-6.2 24l2-2.4-.1-.2-3.1.6v.2l1.4.3-.4 1.3.2.2zm1.1-17.2l1.7.5-.6 1.7.2.1 2.7-2.8-.1-.2-3.9.6v.1zm-4.6 17.1h-2.5v.2l1 .4-.5 1 .1.1 2-1.5-.1-.2zm7.3-9l2.3-3.2-.1-.2-3.8 1.1v.2l1.8.2-.4 1.7.2.2zm-1 12.6l1.3-1.5-.1-.2-2 .3v.2l.8.2-.3.8.3.2zm-12.5-.1v.2l.8.3-.4.7.1.1 1.6-1.2-.1-.2-2 .1zm6.6-10l1.4.2-.3 1.4.2.1 1.9-2.5-.1-.2-3 .8-.1.2zm-2 2.2l-2.5.1v.2l1 .4-.5 1 .2.1 1.9-1.6-.1-.2zm-4.2 3.4h-2v.2l.8.3-.4.7.2.1 1.6-1.2-.2-.1zm5.6-14.4l.2.1 1.7-1.8-.1-.2-2.5.4v.2l1.1.3-.4 1zm-.2 3.6l1.3.3-.4 1.3.2.1 1.9-2.3-.1-.2-2.9.6v.2z"/></g></g></svg>\n'},"aria-label":"Back to homepage"})]}),Object(jsx_runtime.jsxs)(MenuLoginWrapper,{children:[Object(jsx_runtime.jsx)(Menu,{menu:menu.navbarMenu}),Object(jsx_runtime.jsx)(Header_LoginButton,{}),Object(jsx_runtime.jsx)(HamburgerMenu,{"data-on":"tap:body.toggleClass(class='menu-visible')","aria-label":"Open full menu",role:"button",tabIndex:"0",children:Object(jsx_runtime.jsx)(MenuButton,{"aria-label":"Open menu",dangerouslySetInnerHTML:{__html:'\n<svg tabindex="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15"><g fill="#fff"><path d="M0 0h21v2H0zM0 6h21v2H0zM0 12h21v2H0z"/></g></svg>\n'}})})]})]})};Header.propTypes={menu:prop_types_default.a.object.isRequired,isWishList:prop_types_default.a.bool},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{menu:{type:{name:"object"},required:!0,description:""},isWishList:{type:{name:"bool"},required:!1,description:""}}};var library_Header=Object(RequestProvider.withRequest)(Header);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"app/component/library/Header.js"});const FooterWrapper=styled_components_browser_esm.default.footer``,BackToTop=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.font};
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  line-height: 48px;
  text-align: right;
  display: block;
  span svg {
    transform: rotate(-90deg);
    fill: ${props=>props.theme.color.font};
    margin-right: 10px;
  }
`,List=styled_components_browser_esm.default.ul`
  background: ${props=>props.theme.color.greyContrast};
  font-size: 14px;
  list-style: none;
  padding: 20px 30px;
  text-align: center;
  columns: 2;
  margin: 0;

  @media ${Styles.c.tablet} {
    display: flex;
    text-align: left;
  }
  @media ${Styles.c.laptop} {
    text-align: center;
  }
`,Footer_ListItem=styled_components_browser_esm.default.li`
  margin: 0 0 5px;
  line-height: initial;
  flex: 1;
  @media ${Styles.c.tablet} {
    margin: 5px 0 5px;
  }
`,Link=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.black};
`,Footer=props=>{const{footerMenu:footerMenu}=props;return Object(jsx_runtime.jsxs)(FooterWrapper,{children:[Object(jsx_runtime.jsxs)(BackToTop,{href:"#top",children:[Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16">\n    <path fill-rule="evenodd" d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"></path>\n  </svg>'}}),"back to top"]}),Object(jsx_runtime.jsx)(List,{children:footerMenu&&footerMenu.menu.map((title,index)=>Object(jsx_runtime.jsx)(Footer_ListItem,{children:Object(jsx_runtime.jsx)(Link,{rel:"noopener",href:title.path,children:title.title})},title+index))})]})};Footer.propTypes={footerMenu:prop_types_default.a.object.isRequired},Footer.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{footerMenu:{type:{name:"object"},required:!0,description:""}}};var library_Footer=Object(RequestProvider.withRequest)(Footer);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Footer.js"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"app/component/library/Footer.js"});var url=__webpack_require__(75);const renderEsiInclude=(req,res)=>{const{path:path}=req,{locals:locals}=res,{cleanAmp:cleanAmp}=locals,includePath=path.startsWith("/wishlist")?"/api/html/wishlist":"/api/html/trending-list",params={path:path,cleanAmp:cleanAmp};return`<esi:include src="${Object(url.a)(includePath,params)}"></esi:include>`},Wrapper=styled_components_browser_esm.default.div`
  display: none;
  @media ${Styles.c.laptop} {
    display: block;
    border-left: 1px solid ${props=>props.theme.color.sidebarBackground};
    color: ${props=>props.theme.color.desktopMenuColor};
    background: top / contain no-repeat
      ${props=>props.theme.color.sidebarBackground}
      url('/img/trending-bkg.svg');
    flex-shrink: 0;
    height: calc(100% - 16px);
    left: 0;
    margin-left: 16px;
    max-height: none;
    position: absolute;
    top: 16px;
    width: 312px;
    overflow: auto;
  }
`,DesktopArticleList=({req:req,res:res})=>{const esiInclude=renderEsiInclude(req,res);return Object(jsx_runtime.jsx)(Wrapper,{dangerouslySetInnerHTML:{__html:esiInclude}})};DesktopArticleList.propTypes={req:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired},DesktopArticleList.__docgenInfo={description:"",methods:[],displayName:"DesktopArticleList",props:{req:{type:{name:"object"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""}}};var library_DesktopArticleList=Object(RequestProvider.withRequest)(DesktopArticleList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/DesktopArticleList.js"]={name:"DesktopArticleList",docgenInfo:DesktopArticleList.__docgenInfo,path:"app/component/library/DesktopArticleList.js"});var icons_arrowRightCustom=color=>`\n  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16">\n    <path d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z" fill="${color}"></path>\n  </svg>`;const SidebarToggle_Wrapper=styled_components_browser_esm.default.span`
  @media ${Styles.c.laptop} {
    display: none;
  }

  .preview-swipe & {
    display: none;
  }
`,Button=styled_components_browser_esm.default.button`
  top: 60px;
  left: -18px;
  white-space: nowrap;
  position: fixed;
  z-index: 2;
  color: #fff;
  padding-left: 10px;
  border-radius: 2rem;
  cursor: pointer;
  text-align: right;
  background-color: ${props=>props.theme.color.primary};
  @media ${Styles.c.tablet} {
    top: 70px;
  }
`,ArrowIcon=styled_components_browser_esm.default.span`
  display: block;
  width: 44px;
  height: 40px;
  margin-left: 3px;
  background: no-repeat center center
    url('data:image/svg+xml;utf8,${icons_arrowRightCustom("white")}');
`,SidebarToggle=()=>Object(jsx_runtime.jsx)(SidebarToggle_Wrapper,{children:Object(jsx_runtime.jsx)(Button,{role:"button",tabIndex:0,on:"tap:sidebar1",children:Object(jsx_runtime.jsx)(ArrowIcon,{})})});SidebarToggle.__docgenInfo={description:"",methods:[],displayName:"SidebarToggle"};var library_SidebarToggle=SidebarToggle;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/SidebarToggle.js"]={name:"SidebarToggle",docgenInfo:SidebarToggle.__docgenInfo,path:"app/component/library/SidebarToggle.js"});const SlidingArticleList_Wrapper=styled_components_browser_esm.default.div`
  #sidebar1 {
    background: top / contain no-repeat
      ${props=>props.theme.color.sidebarBackground}
      url('/img/trending-bkg.svg');
    border-right: 4px solid ${props=>props.theme.color.primary};
    margin-top: 48px;
    width: 230px;
    height: calc(100vh - 48px);
    @media ${Styles.c.mobileM} {
      width: 271px;
    }

    @media ${Styles.c.mobileL} {
      width: 309px;
    }

    @media ${Styles.c.tablet} {
      margin-top: 62px;
      height: calc(100vh - 62px);
      width: 376px;
    }

    @media ${Styles.c.laptop} {
      margin-top: 72px;
      height: calc(100vh - 72px);
    }
  }
`,SlidingArticleList=({req:req,res:res})=>{const esiInclude=renderEsiInclude(req,res);return Object(jsx_runtime.jsxs)(SlidingArticleList_Wrapper,{children:[Object(jsx_runtime.jsx)(library_SidebarToggle,{}),Object(jsx_runtime.jsx)("amp-sidebar",{id:"sidebar1",layout:"nodisplay",side:"left",media:"(max-width: 1024px)",dangerouslySetInnerHTML:{__html:esiInclude}})]})};SlidingArticleList.propTypes={req:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired},SlidingArticleList.__docgenInfo={description:"",methods:[],displayName:"SlidingArticleList",props:{req:{type:{name:"object"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""}}};var library_SlidingArticleList=Object(RequestProvider.withRequest)(SlidingArticleList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/SlidingArticleList.js"]={name:"SlidingArticleList",docgenInfo:SlidingArticleList.__docgenInfo,path:"app/component/library/SlidingArticleList.js"});var library_Overlay=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("div",{className:className}))`
  width: 100%;
  height: 100%;
  z-index: 99;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
  display: none;

  .menu-visible & {
    display: block;
  }
`,SubMenu=__webpack_require__(288);const AmpPixel=({src:src,layout:layout})=>Object(jsx_runtime.jsx)("amp-pixel",{src:src,layout:layout});AmpPixel.propTypes={src:prop_types_default.a.string.isRequired,layout:prop_types_default.a.oneOf(["nodisplay","fixed"])},AmpPixel.__docgenInfo={description:"",methods:[],displayName:"AmpPixel",props:{src:{type:{name:"string"},required:!0,description:""},layout:{type:{name:"enum",value:[{value:"'nodisplay'",computed:!1},{value:"'fixed'",computed:!1}]},required:!1,description:""}}};var Pixel=AmpPixel;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Pixel.js"]={name:"AmpPixel",docgenInfo:AmpPixel.__docgenInfo,path:"app/component/library/AMP/Pixel.js"});const TaboolaPixel=({res:{locals:{configuration:configuration,cleanAmp:cleanAmp}}})=>{var _configuration$tabool,_configuration$tabool2;const id=null==configuration||null===(_configuration$tabool=configuration.taboola)||void 0===_configuration$tabool||null===(_configuration$tabool2=_configuration$tabool.accountIds)||void 0===_configuration$tabool2?void 0:_configuration$tabool2.base;return id&&cleanAmp?Object(jsx_runtime.jsx)(Pixel,{src:`//trc.taboola.com/${id}/log/3/unip?en=page_view`,layout:"nodisplay"}):null};TaboolaPixel.propTypes={res:prop_types_default.a.object.isRequired},TaboolaPixel.__docgenInfo={description:"",methods:[],displayName:"TaboolaPixel",props:{res:{type:{name:"object"},required:!0,description:""}}};var Taboola=Object(RequestProvider.withRequest)(TaboolaPixel);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Pixels/Taboola.js"]={name:"TaboolaPixel",docgenInfo:TaboolaPixel.__docgenInfo,path:"app/component/library/Pixels/Taboola.js"});const Quantcast=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?null:Object(jsx_runtime.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n(function() {\n  var host = window.location.hostname;\n  var element = document.createElement('script');\n  var firstScript = document.getElementsByTagName('script')[0];\n  var url = 'https://quantcast.mgr.consensu.org'\n    .concat('/choice/', 'jAJ_WUYAnDzxn', '/', host, '/choice.js')\n  var uspTries = 0;\n  var uspTriesLimit = 3;\n  element.async = true;\n  element.type = 'text/javascript';\n  element.src = url;\n\n  firstScript.parentNode.insertBefore(element, firstScript);\n\n  function makeStub() {\n    var TCF_LOCATOR_NAME = '__tcfapiLocator';\n    var queue = [];\n    var win = window;\n    var cmpFrame;\n\n    function addFrame() {\n      var doc = win.document;\n      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);\n\n      if (!otherCMP) {\n        if (doc.body) {\n          var iframe = doc.createElement('iframe');\n\n          iframe.style.cssText = 'display:none';\n          iframe.name = TCF_LOCATOR_NAME;\n          doc.body.appendChild(iframe);\n        } else {\n          setTimeout(addFrame, 5);\n        }\n      }\n      return !otherCMP;\n    }\n\n    function tcfAPIHandler() {\n      var gdprApplies;\n      var args = arguments;\n\n      if (!args.length) {\n        return queue;\n      } else if (args[0] === 'setGdprApplies') {\n        if (\n          args.length > 3 &&\n          args[2] === 2 &&\n          typeof args[3] === 'boolean'\n        ) {\n          gdprApplies = args[3];\n          if (typeof args[2] === 'function') {\n            args[2]('set', true);\n          }\n        }\n      } else if (args[0] === 'ping') {\n        var retr = {\n          gdprApplies: gdprApplies,\n          cmpLoaded: false,\n          cmpStatus: 'stub'\n        };\n\n        if (typeof args[2] === 'function') {\n          args[2](retr);\n        }\n      } else {\n        queue.push(args);\n      }\n    }\n\n    function postMessageEventHandler(event) {\n      var msgIsString = typeof event.data === 'string';\n      var json = {};\n\n      try {\n        if (msgIsString) {\n          json = JSON.parse(event.data);\n        } else {\n          json = event.data;\n        }\n      } catch (ignore) {}\n\n      var payload = json.__tcfapiCall;\n\n      if (payload) {\n        window.__tcfapi(\n          payload.command,\n          payload.version,\n          function(retValue, success) {\n            var returnMsg = {\n              __tcfapiReturn: {\n                returnValue: retValue,\n                success: success,\n                callId: payload.callId\n              }\n            };\n            if (msgIsString) {\n              returnMsg = JSON.stringify(returnMsg);\n            }\n            event.source.postMessage(returnMsg, '*');\n          },\n          payload.parameter\n        );\n      }\n    }\n\n    while (win) {\n      try {\n        if (win.frames[TCF_LOCATOR_NAME]) {\n          cmpFrame = win;\n          break;\n        }\n      } catch (ignore) {}\n\n      if (win === window.top) {\n        break;\n      }\n      win = win.parent;\n    }\n    if (!cmpFrame) {\n      addFrame();\n      win.__tcfapi = tcfAPIHandler;\n      win.addEventListener('message', postMessageEventHandler, false);\n    }\n  };\n\n  makeStub();\n\n  var uspStubFunction = function() {\n    var arg = arguments;\n    if (typeof window.__uspapi !== uspStubFunction) {\n      setTimeout(function() {\n        if (typeof window.__uspapi !== 'undefined') {\n          window.__uspapi.apply(window.__uspapi, arg);\n        }\n      }, 500);\n    }\n  };\n\n  var checkIfUspIsReady = function() {\n    uspTries++;\n    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {\n      console.warn('USP is not accessible');\n    } else {\n      clearInterval(uspInterval);\n    }\n  };\n\n  if (typeof window.__uspapi === 'undefined') {\n    window.__uspapi = uspStubFunction;\n    var uspInterval = setInterval(checkIfUspIsReady, 6000);\n  }\n})();\n    "}});Quantcast.propTypes={res:prop_types_default.a.object.isRequired},Quantcast.__docgenInfo={description:"",methods:[],displayName:"Quantcast",props:{res:{type:{name:"object"},required:!0,description:""}}};var Scripts_Quantcast=Object(RequestProvider.withRequest)(Quantcast);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Scripts/Quantcast.js"]={name:"Quantcast",docgenInfo:Quantcast.__docgenInfo,path:"app/component/library/Scripts/Quantcast.js"});const AmpAnalytics=({type:type,configJson:configJson,...others})=>Object(jsx_runtime.jsx)("amp-analytics",{type:type,...others,children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(configJson)}})});AmpAnalytics.propTypes={type:prop_types_default.a.string.isRequired,configJson:prop_types_default.a.object.isRequired},AmpAnalytics.__docgenInfo={description:"",methods:[],displayName:"AmpAnalytics",props:{type:{type:{name:"string"},required:!0,description:""},configJson:{type:{name:"object"},required:!0,description:""}}};var Analytics=AmpAnalytics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Analytics.js"]={name:"AmpAnalytics",docgenInfo:AmpAnalytics.__docgenInfo,path:"app/component/library/AMP/Analytics.js"});const GoogleAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:{ga:{id:id}}}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"googleanalytics",id:"analytics2",configJson:{vars:{account:id},triggers:{defaultPageview:{on:"visible",request:"pageview"}}}}):null;GoogleAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},GoogleAnalytics.__docgenInfo={description:"",methods:[],displayName:"GoogleAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Google=Object(RequestProvider.withRequest)(GoogleAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Google.js"]={name:"GoogleAnalytics",docgenInfo:GoogleAnalytics.__docgenInfo,path:"app/component/library/Analytics/Google.js"});const ComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco,comsoreClientId;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?null:Object(jsx_runtime.jsx)("script",{dangerouslySetInnerHTML:{__html:(comsoreClientId=configuration.comscore.clientId,`\nlet _comscore = window._comscore || [];\nlet comscoreTriggered = false;\n\nconst checkGdpr = (tcData) => {\n  for (const [key, value] of Object.entries(tcData)) {\n    if (value) return "1";\n  }\n  return "0";\n};\n\nconst updateComscore = (gdpr) => {\n  if (!comscoreTriggered) {\n    _comscore.push({ c1: "2", c2: ${comsoreClientId}, cs_ucfr: gdpr });\n    (function() {\n      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;\n      s.src="https://sb.scorecardresearch.com/cs/${comsoreClientId}/beacon.js";\n      el.parentNode.insertBefore(s, el);\n    })();\n    comscoreTriggered = true;\n  }\n};\n\nconst callback = (tcData, success) => {\n  if(success && tcData.eventStatus === 'tcloaded') {\n    __tcfapi('removeEventListener', 2, (success) => {\n      if(success) {\n        updateComscore(checkGdpr(tcData.purpose.consents));\n      }\n    }, tcData.listenerId);\n  } else {\n    updateComscore("");\n  }\n}\n\n__tcfapi('addEventListener', 2, callback);\n`)}}))};ComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},ComscoreAnalytics.__docgenInfo={description:"",methods:[],displayName:"ComscoreAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Comscore=Object(RequestProvider.withRequest)(ComscoreAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Comscore.js"]={name:"ComscoreAnalytics",docgenInfo:ComscoreAnalytics.__docgenInfo,path:"app/component/library/Analytics/Comscore.js"});var services_article=__webpack_require__(85);const getChartbeatVars=res=>{const{locals:{domain:domain,configuration:{chartbeat:chartbeat}}}=res,title=(({locals:{article:article}})=>null==article?void 0:article.title)(res),sections=(({locals:{article:article,section:section}})=>{var _section$section,_article$sections,_article$sections$;return[...(null==section||null===(_section$section=section.section)||void 0===_section$section?void 0:_section$section.path.split("/").slice(1))||[],...[Object(services_article.c)(null==article?void 0:article.hero)].filter(x=>x).map(x=>"mediatype_"+x),...(null==article||null===(_article$sections=article.sections)||void 0===_article$sections||null===(_article$sections$=_article$sections[0])||void 0===_article$sections$?void 0:_article$sections$.path.split("/").slice(1))||[],...((null==article?void 0:article.topics)||[]).map(({path:path})=>path.split("/").slice(1).join("-"))].join()})(res),authors=(({locals:{article:article}})=>article?(article.authors||[]).map(({name:name})=>name).join():"")(res);return{uid:(null==chartbeat?void 0:chartbeat.uid)||null,domain:domain,title:title,sections:sections,authors:authors}},ChartbeatAnalytics=({res:res,res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"chartbeat",configJson:{vars:{...getChartbeatVars(res)}}}):null;ChartbeatAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},ChartbeatAnalytics.__docgenInfo={description:"",methods:[],displayName:"ChartbeatAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Chartbeat=Object(RequestProvider.withRequest)(ChartbeatAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Chartbeat.js"]={name:"ChartbeatAnalytics",docgenInfo:ChartbeatAnalytics.__docgenInfo,path:"app/component/library/Analytics/Chartbeat.js"});var moment=__webpack_require__(6),moment_default=__webpack_require__.n(moment);const getDataByType=(req,res)=>{const{cleanAmp:cleanAmp,configuration:{domain:domain}}=res.locals;let data={};if(res.locals.article){var _article$authors,_article$topics;const article=res.locals.article,{path:path,publish:publish}=article,channels=path.slice(1).split("/").slice(0,-1),utc=moment_default.a.unix(publish).utc(),publishedTime=utc.format("h:mm A"),publishedDate=utc.format("dddd, D MMMM YYYY");data={page_type:"Indy100 Article",site_sections:channels.join(":"),is_amp_page:cleanAmp,article_premium_status:null!=article&&article.premium?"premium":"free",article_id:(null==article?void 0:article.remoteId)||(null==article?void 0:article.id),article_title:null==article?void 0:article.title,article_author:null==article||null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(x=>x.name).join(","),article_category:"",article_publication_time:publishedTime,published_date:publishedDate,first_published_date:publishedDate,homepage_section:"",article_page_filename:path.split("/").slice(-1)[0],lead_media_item:Object(services_article.c)(article.hero),article_topic_tags:null==article||null===(_article$topics=article.topics)||void 0===_article$topics?void 0:_article$topics.map(x=>x.name).join(","),word_count:null==article?void 0:article.wordCount,internal_links_count:article.body?Object(services_article.e)(article.body,domain):0}}if(res.locals.section){const feed=res.locals.section,{path:path}=feed.section;data={page_type:"Indy100 Channel Front",site_sections:path.slice(1).split("/").join(":"),is_topic_page:cleanAmp}}return data},getAmpData=(req,res)=>({page_url:"${canonicalUrl}",actual_url:"${sourceUrl}",page_domain:"${sourceHost}",page_path:"${sourcePath}",page_title:"${title}",page_query:"",page_name:"${sourcePath}",page_categories:"",page_type:"",page_previous_url:"${documentReferrer}",page_previous_path:"",page_previous_query:"",...getDataByType(0,res)}),getAmpState=(req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!0,...getDataByType(0,res)}},functionString=(()=>{const referrer=document.referrer?new URL(document.referrer):"",getCookie=function(name,defaultValue=!1){const match=document.cookie.match(new RegExp("(^|;|\\s+)"+name+"=(.*?)[;|$]"));return match?decodeURIComponent(match[2]):defaultValue},d=new Date,YYYY=new Intl.DateTimeFormat("en",{year:"numeric",timezone:"UTC"}).format(d),MM=new Intl.DateTimeFormat("en",{month:"2-digit",timezone:"UTC"}).format(d),DD=new Intl.DateTimeFormat("en",{day:"2-digit",timezone:"UTC"}).format(d),hh=new Intl.DateTimeFormat("en",{hour:"2-digit",hour12:!1,timezone:"UTC"}).format(d),mm=new Intl.DateTimeFormat("en",{minute:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0"),ss=new Intl.DateTimeFormat("en",{second:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0");var name;Object.assign(window.digitalData,{page_title:document.title,page_query:document.location.search,page_name:document.location.pathname,page_previous_url:referrer&&referrer.protocol+"://"+referrer.host+referrer.pathname,page_previous_path:referrer&&referrer.pathname,page_previous_query:referrer&&referrer.search,timestamp:`${YYYY}:${MM}:${DD}:${hh}:${mm}:${ss}`,gigya_logged_in_status:(name="esi_auth",!1!==getCookie(name)?"logged in":"not logged in"),gigya_uid:getCookie("esi_guid"),gigya_registration_date:getCookie("esi_registration_date"),gigya_share_provider:"",gigya_demographics:getCookie("esi_demographics"),gigya_sign_on_provider:getCookie("esi_sign_on_provider"),gigya_user_status:getCookie("esi_user_status","anonymous")})}).toString().match(/{([\s|\S]+)}/m)[1],AdobeAnalytics=({req:req,res:res})=>{const{locals:{cleanAmp:cleanAmp}}=res,nativeConfig=((req,res)=>{const{locals:{configuration:{domain:domain,subdomain:subdomain}}}=res;return{requests:{base:"//${host}",iframeMessage:"${base}/iframe/launch.html"},vars:{host:`${subdomain.static}.${domain}`},extraUrlParams:getAmpData(0,res)}})(0,res),ampConfig=((req,res)=>{const{adobe:adobe}=res.locals.configuration;return{requests:{upVote:"${click}&v9=${articleId}&c9=D=v9&events=${events}"},vars:{host:"ssc.independent.co.uk",reportSuites:null==adobe?void 0:adobe.reportSuiteId,pageName:"${sourcePath}"},triggers:{upVoteClick:{on:"click",selector:".upvote-button",request:"upVote",vars:{events:"event48"}}}}})(0,res),webData=((req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!1,...getDataByType(0,res)}})(req,res),jsonString=JSON.stringify(webData);return cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Analytics,{type:"adobeanalytics_nativeConfig",configJson:nativeConfig}),Object(jsx_runtime.jsx)(Analytics,{type:"adobeanalytics",configJson:ampConfig})]}):Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{children:`digitalData = ${jsonString}; ${functionString}`})})};AdobeAnalytics.propTypes={req:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired},AdobeAnalytics.__docgenInfo={description:"",methods:[],displayName:"AdobeAnalytics",props:{req:{type:{name:"object"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Adobe=Object(RequestProvider.withRequest)(AdobeAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Adobe.js"]={name:"AdobeAnalytics",docgenInfo:AdobeAnalytics.__docgenInfo,path:"app/component/library/Analytics/Adobe.js"});const Dotmetrics=({res:res})=>{var _res$locals$jsGlobals,_res$locals$jsGlobals2;return res.locals.cleanAmp&&null!==(_res$locals$jsGlobals=res.locals.jsGlobals)&&void 0!==_res$locals$jsGlobals&&null!==(_res$locals$jsGlobals2=_res$locals$jsGlobals.dotmetrics)&&void 0!==_res$locals$jsGlobals2&&_res$locals$jsGlobals2.sectionId?Object(jsx_runtime.jsx)(Analytics,{config:"https://uk-script.dotmetrics.net/AmpConfig.json?id="+res.locals.jsGlobals.dotmetrics.sectionId}):null};Dotmetrics.propTypes={res:prop_types_default.a.object},Dotmetrics.__docgenInfo={description:"",methods:[],displayName:"Dotmetrics",props:{res:{type:{name:"object"},required:!1,description:""}}};var Analytics_Dotmetrics=Object(RequestProvider.withRequest)(Dotmetrics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Dotmetrics.js"]={name:"Dotmetrics",docgenInfo:Dotmetrics.__docgenInfo,path:"app/component/library/Analytics/Dotmetrics.js"});const AmpComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"comscore",configJson:{vars:{c2:configuration.comscore.clientId},extraUrlParams:{comscorekw:"amp"}}}):null)};AmpComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},AmpComscoreAnalytics.__docgenInfo={description:"",methods:[],displayName:"AmpComscoreAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Analytics_Comscore=Object(RequestProvider.withRequest)(AmpComscoreAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Analytics/Comscore.js"]={name:"AmpComscoreAnalytics",docgenInfo:AmpComscoreAnalytics.__docgenInfo,path:"app/component/library/AMP/Analytics/Comscore.js"});const AmpConsent=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-consent",src:"https://cdn.ampproject.org/v0/amp-consent-0.1.js"}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-geo",src:"https://cdn.ampproject.org/v0/amp-geo-0.1.js"}),Object(jsx_runtime.jsx)("meta",{name:"amp-consent-blocking",content:"amp-analytics,amp-ad"})]}),Object(jsx_runtime.jsx)("amp-geo",{layout:"nodisplay",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({ISOCountryGroups:{eea:["preset-eea","unknown"]}})}})}),Object(jsx_runtime.jsx)("amp-consent",{id:"quantcast",layout:"nodisplay",type:"quantcast",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({consentInstanceId:"quantcast",checkConsentHref:"https://apis.quantcast.mgr.consensu.org/amp/check-consent",consentRequired:!1,geoOverride:{eea:{consentRequired:"remote",promptUISrc:"https://quantcast.mgr.consensu.org/tcfv2/amp.html"}},clientConfig:{coreUiLabels:{agreeButton:"OK"},theme:{uxPrimaryButtonColor:"#7ed321",uxPrimaryButtonTextColor:"#000000",uxSecondaryButtonTextColor:"#000000",uxToogleActiveColor:"#7ed321",uxLinkColor:"#000000"},coreConfig:{quantcastAccountId:"jAJ_WUYAnDzxn",privacyMode:["GDPR"],hashCode:"D+E2nwLrAl8uE+5rJU30aQ",publisherCountryCode:"GB",publisherName:"Indy 100",vendorPurposeIds:[1,2,3,4,5,6,7,8,9,10],vendorFeaturesIds:[2,3,1],vendorPurposeLegitimateInterestIds:[2,7,10,3,4,5,6,8,9],vendorSpecialFeaturesIds:[1,2],vendorSpecialPurposesIds:[1,2],googleEnabled:!0,lang_:"autoDetectedLanguage",displayUi:"inEU",defaultToggleValue:"off",initScreenRejectButtonShowing:!1,publisherConsentRestrictionIds:[],publisherLIRestrictionIds:[],publisherLogo:"https://assets.independent.co.uk/indy100/indy100-logo.svg",publisherPurposeIds:[1,2,3,4,5,6,7,8,9,10],publisherPurposeLegitimateInterestIds:[],publisherSpecialPurposesIds:[1,2],publisherFeaturesIds:[1,2,3],publisherSpecialFeaturesIds:[1],stacks:[],vendorListUpdateFreq:365}}})}})})]}):null;AmpConsent.propTypes={res:prop_types_default.a.object.isRequired},AmpConsent.__docgenInfo={description:"",methods:[],displayName:"AmpConsent",props:{res:{type:{name:"object"},required:!0,description:""}}};var AMP_AmpConsent=Object(RequestProvider.withRequest)(AmpConsent);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/AmpConsent.js"]={name:"AmpConsent",docgenInfo:AmpConsent.__docgenInfo,path:"app/component/library/AMP/AmpConsent.js"});var State=__webpack_require__(781),State_default=__webpack_require__.n(State);const AmpState=({id:id,json:json})=>Object(jsx_runtime.jsx)(State_default.a,{id:id,children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(json)}})});AmpState.propTypes={id:prop_types_default.a.string.isRequired,json:prop_types_default.a.object.isRequired},AmpState.__docgenInfo={description:"",methods:[],displayName:"AmpState",props:{id:{type:{name:"string"},required:!0,description:""},json:{type:{name:"object"},required:!0,description:""}}};var AMP_State=AmpState;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/State.js"]={name:"AmpState",docgenInfo:AmpState.__docgenInfo,path:"app/component/library/AMP/State.js"});const AmpAuth=()=>Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{id:"amp-access",type:"application/json",children:JSON.stringify({authorization:"/internal-api/login-authorization.json?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM",noPingback:"true",login:{"sign-in":"/login?noframe&rid=READER_ID&url=SOURCE_URL&return=RETURN_URL"},authorizationFallbackResponse:{error:"true",fullName:"",loggedIn:!1,nickname:!1}})})});AmpAuth.propTypes={article:prop_types_default.a.object,section:prop_types_default.a.object,configuration:prop_types_default.a.object},AmpAuth.__docgenInfo={description:"",methods:[],displayName:"AmpAuth",props:{article:{type:{name:"object"},required:!1,description:""},section:{type:{name:"object"},required:!1,description:""},configuration:{type:{name:"object"},required:!1,description:""}}};var library_AmpAuth=Object(RequestProvider.withRequest)(AmpAuth);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AmpAuth.js"]={name:"AmpAuth",docgenInfo:AmpAuth.__docgenInfo,path:"app/component/library/AmpAuth.js"});var LoginModal=__webpack_require__(414);const TopBanner_Wrapper=styled_components_browser_esm.default.div`
  .top_banner {
    text-align: center;
    display: none;
    justify-content: center;
    background: transparent;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    max-width: 970px;
    height: 90px;
    @media ${Styles.c.tablet} {
      display: flex;
    }
    @media ${Styles.c.laptop} {
      height: 250px;
    }
    .sticky {
      width: 970px;
      margin-left: auto;
      margin-right: auto;
      position: fixed;
      z-index: 1000;
    }
  }
`,TopBanner=props=>Object(jsx_runtime.jsx)(TopBanner_Wrapper,{children:Object(jsx_runtime.jsx)(MPU.a,{id:"top_banner","size-key":"TOP_BANNER","force-bulk":!0,className:"top_banner",...props})});TopBanner.__docgenInfo={description:"",methods:[],displayName:"TopBanner"};var Ads_TopBanner=TopBanner;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/TopBanner.js"]={name:"TopBanner",docgenInfo:TopBanner.__docgenInfo,path:"app/component/library/Ads/TopBanner.js"});var ads=__webpack_require__(93);const Skin=({className:className,...props})=>Object(jsx_runtime.jsx)(MPU.a,{id:"skin",className:className,"size-key":"SKIN","force-bulk":!0,...props});Skin.propTypes={className:prop_types_default.a.string};var Ads_Skin=Object(styled_components_browser_esm.default)(Skin)`
  height: 0;
  position: sticky;
  top: 70px;
  padding: 0px;
  left: 0;
  z-index: 10;
`;const Root=styled_components_browser_esm.default.div`
  background-color: green;
  width: 968px;
  position: sticky;
  padding: 0;
  margin: 0 auto;
  background: ${props=>props.theme.color.bkg};
  display: none;

  @media ${Styles.c.gutterSmall} {
    display: block;
  }
`,LeftGutter=styled_components_browser_esm.default.div`
  position: fixed;
  top: 88px;
  display: flex;
  justify-content: flex-end;
  width: 120px;
  margin-left: -136px;

  @media ${Styles.c.gutterMedium} {
    width: 160px;
    margin-left: -176px;
  }
  @media ${Styles.c.gutterLarge} {
    width: 300px;
    margin-left: -316px;
  }
`,RightGutter=styled_components_browser_esm.default.div`
  position: fixed;
  top: 88px;
  margin-left: 984px;
`,Gutter=()=>Object(jsx_runtime.jsxs)(Root,{id:"gutterRoot",children:[Object(jsx_runtime.jsx)(LeftGutter,{children:Object(jsx_runtime.jsx)(MPU.a,{id:"gtl","size-key":"GUTTER","force-bulk":!0})}),Object(jsx_runtime.jsx)(RightGutter,{children:Object(jsx_runtime.jsx)(MPU.a,{id:"gtr","size-key":"GUTTER","force-bulk":!0})})]});Gutter.__docgenInfo={description:"",methods:[],displayName:"Gutter"};var Ads_Gutter=Gutter;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Gutter.js"]={name:"Gutter",docgenInfo:Gutter.__docgenInfo,path:"app/component/library/Ads/Gutter.js"});const AppContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
  max-width: 1000px;

  @media ${Styles.c.laptop} {
    display: block;
    position: relative;
    width: 1000px;
  }
`,ContentContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  background: white;
  flex: 1 1 1000px;
  width: 100%;
  @media ${Styles.c.tablet} {
    margin-top: 0;
  }
  @media ${Styles.c.laptop} {
    margin: ${props=>props.showTrendingList?"0 0 0 330px":"auto"};
    width: ${props=>props.showTrendingList?"670px":"100%"};
    max-width: ${props=>props.showTrendingList?"670px":"968px"};
  }
`,FrameInner=styled_components_browser_esm.default.div`
  position: relative;
  overflow: hidden;
`,OutOfPageSlotMPU=Object(styled_components_browser_esm.default)(MPU.a)`
  position: absolute;
`,Frame_Wrapper=styled_components_browser_esm.default.div`
  flex-direction: column;
  padding-top: 48px;

  ${props=>props.showTrendingList&&`\n      &::before {\n        background: ${props.theme.color.primary};\n        content: ' ';\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 48px;\n        width: 4px;\n        z-index: 1;\n      }\n  `}

  @media ${Styles.c.tablet} {
    padding-top: 60px;

    &::before {
      top: 62px;
    }
  }
  @media ${Styles.c.laptop} {
    padding-top: 72px;

    &::before {
      content: none;
    }
  }
`,Frame_Frame=({className:className,children:children,res:{locals:{configuration:configuration,menu:{footerMenu:footerMenu,subMenu:subMenu}}},req:{flowPreview:flowPreview,path:path},req:req,res:res,cleanAmp:cleanAmp,article:article,section:section})=>{var _configuration$cmp,_configuration$cmp2,_configuration$cmp3;const isWishList=path.startsWith("/wishlist"),adToggle=null!=article&&article.adConfig?Object(ads.e)(article):()=>!1,topBannerDisplay=section||adToggle(ads.c),showTrendingList=section||article;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Alfa+Slab+One|Lato:400,700|Roboto+Slab:400,700&display=swap"})}),!flowPreview&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(null==configuration?void 0:configuration.adobe)&&Object(jsx_runtime.jsx)(Adobe,{}),(null==configuration?void 0:configuration.ga)&&Object(jsx_runtime.jsx)(Google,{}),(null==configuration?void 0:configuration.chartbeat)&&Object(jsx_runtime.jsx)(Chartbeat,{}),(null==configuration||null===(_configuration$cmp=configuration.cmp)||void 0===_configuration$cmp?void 0:_configuration$cmp.enabled)&&Object(jsx_runtime.jsx)(Scripts_Quantcast,{}),(null==configuration?void 0:configuration.comscore)&&Object(jsx_runtime.jsx)(Comscore,{}),(null==configuration?void 0:configuration.comscore)&&Object(jsx_runtime.jsx)(Analytics_Comscore,{}),(null==configuration||null===(_configuration$cmp2=configuration.cmp)||void 0===_configuration$cmp2?void 0:_configuration$cmp2.enabled)&&Object(jsx_runtime.jsx)(AMP_AmpConsent,{}),(null==configuration||null===(_configuration$cmp3=configuration.cmp)||void 0===_configuration$cmp3?void 0:_configuration$cmp3.enabled)&&Object(jsx_runtime.jsx)(Taboola,{}),(null==configuration?void 0:configuration.dotmetrics)&&Object(jsx_runtime.jsx)(Analytics_Dotmetrics,{})]}),(article||section)&&Object(jsx_runtime.jsx)(OutOfPageSlotMPU,{id:"out-of-page",sizes:"1x1","force-bulk":!0,width:1,height:1}),Object(jsx_runtime.jsxs)(Frame_Wrapper,{className:className,showTrendingList:showTrendingList,children:[Object(jsx_runtime.jsx)(library_Header,{isWishList:isWishList}),!cleanAmp&&Object(jsx_runtime.jsx)(Ads_Skin,{}),topBannerDisplay&&Object(jsx_runtime.jsx)(Ads_TopBanner,{width:"320",height:"50",cleanAmp:cleanAmp}),(article||section)&&!isWishList&&Object(jsx_runtime.jsx)(Ads_Gutter,{}),Object(jsx_runtime.jsxs)(AppContainer,{children:[Object(jsx_runtime.jsxs)(ContentContainer,{showTrendingList:showTrendingList,children:[isWishList&&!article&&Object(jsx_runtime.jsx)(SubMenu.a,{subMenu:subMenu,currentURL:path}),Object(jsx_runtime.jsx)(FrameInner,{id:"frameInner",children:children}),Object(jsx_runtime.jsx)(library_Footer,{footerMenu:footerMenu})]}),showTrendingList&&Object(jsx_runtime.jsx)(library_DesktopArticleList,{cleanAmp:cleanAmp})]}),Object(jsx_runtime.jsx)(library_Overlay,{}),showTrendingList&&Object(jsx_runtime.jsx)(library_SlidingArticleList,{}),Object(jsx_runtime.jsx)(LoginModal.default,{}),!flowPreview&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(null==configuration?void 0:configuration.gtm)&&Object(jsx_runtime.jsx)(library_GTM,{}),Object(jsx_runtime.jsx)(library_AmpAuth,{})]}),(null==configuration?void 0:configuration.adobe)&&Object(jsx_runtime.jsx)(AMP_State,{id:"digitalData",json:getAmpState(req,res)})]})]})};Frame_Frame.propTypes={className:prop_types_default.a.string,isWishList:prop_types_default.a.bool,article:prop_types_default.a.object,children:prop_types_default.a.any.isRequired,res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object,cleanAmp:prop_types_default.a.bool,section:prop_types_default.a.object},Frame_Frame.defaultProps={className:""},Frame_Frame.__docgenInfo={description:"",methods:[],displayName:"Frame",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},isWishList:{type:{name:"bool"},required:!1,description:""},article:{type:{name:"object"},required:!1,description:""},children:{type:{name:"any"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""},section:{type:{name:"object"},required:!1,description:""}}};__webpack_exports__.a=Object(RequestProvider.withRequest)(Frame_Frame);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Frame.js"]={name:"Frame",docgenInfo:Frame_Frame.__docgenInfo,path:"app/component/library/Frame.js"})},1400:function(module,exports){},1405:function(module,exports){},141:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isEmptyStringOnly})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isResponsiveRequired}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const isEmptyStringOnly=function(props,propName){if(""!==props[propName]&&void 0!==props[propName])return new Error(`Only empty string is allowed for ${propName} attribute`)},isResponsiveRequired=function(props,propName){if(void 0!==props[propName]&&"responsive"!==props.layout)return new Error("Required responsive layout");prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array(...arguments)}},1446:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticlePageStory",(function(){return ArticlePageStory})),__webpack_require__.d(__webpack_exports__,"ArticleContentStory",(function(){return ArticleContentStory}));var _helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_fixtures_mockArticleWithEmbeds__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(287),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);const ArticlePage=__webpack_require__(411).default;__webpack_exports__.default={title:"Article/WEB/Page",component:ArticlePage};const ArticlePageStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_0__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ArticlePage,{})});ArticlePageStory.storyName="Full article page",ArticlePageStory.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]};const ArticleContentStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_0__.a,{articleOverrides:{...Object(_fixtures_mockArticleWithEmbeds__WEBPACK_IMPORTED_MODULE_1__.a)()},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ArticlePage,{})});ArticleContentStory.storyName="Article embed page",ArticleContentStory.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]},ArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"ArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/WEB/ArticlePage.stories.js"]={name:"ArticlePageStory",docgenInfo:ArticlePageStory.__docgenInfo,path:"stories/Article/WEB/ArticlePage.stories.js"}),ArticleContentStory.__docgenInfo={description:"",methods:[],displayName:"ArticleContentStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/WEB/ArticlePage.stories.js"]={name:"ArticleContentStory",docgenInfo:ArticleContentStory.__docgenInfo,path:"stories/Article/WEB/ArticlePage.stories.js"})},1447:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoginModalLoggedOutStory",(function(){return LoginModalLoggedOutStory})),__webpack_require__.d(__webpack_exports__,"LoginModalLoggedInStory",(function(){return LoginModalLoggedInStory}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);const LoginModal=__webpack_require__(414).default,LoginModalLoggedOut=__webpack_require__(415).default,LoginModalLoggedIn=__webpack_require__(417).default,Sidebar=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 375px;
`;__webpack_exports__.default={title:"Other/Components/Login Sidebar",component:LoginModal};const LoginModalLoggedOutStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Sidebar,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LoginModalLoggedOut,{returnUrl:"#"})})});LoginModalLoggedOutStory.storyName="Logged Out",LoginModalLoggedOutStory.parameters={amp:{isEnabled:!0},emulateViewports:[{width:425,height:700}],waitFor:[".snapshot-loginsidebar"]};const LoginModalLoggedInStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Sidebar,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LoginModalLoggedIn,{})})});LoginModalLoggedInStory.storyName="Logged In",LoginModalLoggedInStory.parameters={amp:{isEnabled:!0},emulateViewports:[{width:425,height:700}],waitFor:[".snapshot-loginsidebar"]},LoginModalLoggedOutStory.__docgenInfo={description:"",methods:[],displayName:"LoginModalLoggedOutStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/LoginSidebar.stories.js"]={name:"LoginModalLoggedOutStory",docgenInfo:LoginModalLoggedOutStory.__docgenInfo,path:"stories/Other/Components/LoginSidebar.stories.js"}),LoginModalLoggedInStory.__docgenInfo={description:"",methods:[],displayName:"LoginModalLoggedInStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/LoginSidebar.stories.js"]={name:"LoginModalLoggedInStory",docgenInfo:LoginModalLoggedInStory.__docgenInfo,path:"stories/Other/Components/LoginSidebar.stories.js"})},1448:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TrendingListItemStory",(function(){return TrendingListItemStory}));var _helpers_createImage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(58),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);const Item=__webpack_require__(1449).default,itemProps={articleId:"1730499",borderColor:"border-style-offbeat",imageUrl:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.b)(175,175,175),path:"/offbeat/boris-johnson-monty-python-hilarious-mashup-video-9070151",publishDate:"2020-12-20T14:06:59Z",title:"This mashup of Boris Johnson and Monty Python is hilarious"};__webpack_exports__.default={title:"Other/Components/Trending List Item",component:Item};const TrendingListItemStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Item,{...itemProps})});TrendingListItemStory.storyName="Trending List Item",TrendingListItemStory.parameters={amp:{isEnabled:!0}},TrendingListItemStory.__docgenInfo={description:"",methods:[],displayName:"TrendingListItemStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/TrendingListItem.stories.js"]={name:"TrendingListItemStory",docgenInfo:TrendingListItemStory.__docgenInfo,path:"stories/Other/Components/TrendingListItem.stories.js"})},1449:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Article_SocialShare__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(184),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0);const Action=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: block;
  button {
    float: right;
  }
  amp-timeago {
    width: max-content;
    color: ${props=>props.theme.color.grey};
    font-size: 10px;
    line-height: 1.8;
    text-align: right;
    @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.tablet} {
      display: flex;
      justify-content: flex-end;
      width: auto;
      margin-right: 25px;
      order: -1;
    }
  }
`,Headline=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a`
  font-size: 12px;
  color: ${props=>props.theme.color.sidebarFontColor};
  text-align: left;
  width: 100%;
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.tablet} {
    padding-bottom: 4px;
  }
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.desktop} {
    font-size: 16px;
  }
  &:before {
    counter-increment: topArticleCounter;
    content: counter(topArticleCounter);
    color: ${props=>props.theme.color.grey};
    font-family: ${props=>props.theme.fontFamily.headingFont};
    padding-right: 5px;
    @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.desktop} {
      font-size: 22px;
    }
  }
`,ListItem=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  background: ${props=>props.theme.color.white};
  opacity: 97%;
  border-left: 2px solid;
  outline: 0.5px solid ${props=>props.theme.color.borderLight};
  margin-bottom: 8px;

  ${Object.keys(_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.d).map(item=>`\n    &.border-style-${item} {\n      border-left-color: #${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.d[item]};\n\n      & svg {\n        fill: #${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.d[item]};\n     }\n    }\n  `)}
`,ImageArea=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a`
  display: none;
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.tablet} {
    display: flex;
    flex-direction: column;
    amp-img {
      width: 154.5px;
      height: 103px;
    }
  }
  img {
    object-fit: cover;
  }
`,TextArea=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  line-height: 1.33;
  margin: 8px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.tablet} {
    flex-direction: column;
  }
`,ArticleListItem=({articleId:articleId,className:className,path:path,imageUrl:imageUrl,title:title,publishDate:publishDate})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ListItem,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TextArea,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Headline,{target:"_top",rel:"noopener",href:path,children:title}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Action,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Article_SocialShare__WEBPACK_IMPORTED_MODULE_3__.a,{size:20,types:{uv:{isSmallButton:!0,articleId:articleId}}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("amp-timeago",{layout:"fixed-height",height:"15",datetime:publishDate,locale:"en",children:publishDate})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ImageArea,{href:path,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("amp-img",{src:imageUrl,width:"3",height:"2",layout:"responsive"})})]});ArticleListItem.propTypes={articleId:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,path:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,imageUrl:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,publishDate:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},ArticleListItem.__docgenInfo={description:"",methods:[],displayName:"ArticleListItem",props:{articleId:{type:{name:"string"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},path:{type:{name:"string"},required:!1,description:""},imageUrl:{type:{name:"string"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""},publishDate:{type:{name:"string"},required:!1,description:""}}},__webpack_exports__.default=ArticleListItem,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/ArticleListItem.js"]={name:"ArticleListItem",docgenInfo:ArticleListItem.__docgenInfo,path:"app/component/library/ArticleListItem.js"})},1450:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ProfileStory",(function(){return ProfileStory}));var _helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(294),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);const ProfilePage=__webpack_require__(1458).default;__webpack_exports__.default={title:"Other/Pages/Profile",component:ProfilePage};const mockProfile={firstName:"John",lastName:"Smith",email:"john@gmail.com",country:"United Kingdom",birthYear:"1985",zip:"WC1 5GH"},ProfileStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_0__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ProfilePage,{data:{profile:mockProfile}})});ProfileStory.storyName="Page",ProfileStory.__docgenInfo={description:"",methods:[],displayName:"ProfileStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Pages/Profile.stories.js"]={name:"ProfileStory",docgenInfo:ProfileStory.__docgenInfo,path:"stories/Other/Pages/Profile.stories.js"})},1451:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RegisterStory",(function(){return RegisterStory}));var _helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(294),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);const RegisterPage=__webpack_require__(1462).default;__webpack_exports__.default={title:"Other/Pages/Register",component:RegisterPage};const RegisterStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_0__.a,{reqOverrides:{query:{regSourceSection:""}},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RegisterPage,{})});RegisterStory.storyName="Page",RegisterStory.__docgenInfo={description:"",methods:[],displayName:"RegisterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Pages/Register.stories.js"]={name:"RegisterStory",docgenInfo:RegisterStory.__docgenInfo,path:"stories/Other/Pages/Register.stories.js"})},1456:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(3),Helmet=__webpack_require__(42),RequestProvider=__webpack_require__(10),Frame=__webpack_require__(140),ColumnWrapper=__webpack_require__(290),Styles=__webpack_require__(5),MPU=__webpack_require__(74),es=__webpack_require__(297),jsx_runtime=__webpack_require__(0);const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,Headline=styled_components_browser_esm.default.h2`
  color: ${props=>props.theme.color.fontGrey};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 15px;
  margin: 0 0 6px;
`,HeadlineImage=styled_components_browser_esm.default.h2`
  margin: 0 0 8px;
`,ListItem=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 12px;
`,Link=styled_components_browser_esm.default.a`
  font-size: 14px;
  color: ${props=>props.theme.color.font};
  text-decoration: none;
  font-weight: 700;
  padding-left: 10px;
`,ImageWrapper=styled_components_browser_esm.default.a`
  position: relative;
  width: 96px;
  min-width: 96px;
  height: 64px;
  & img {
    object-fit: cover;
  }
`,FeedList=({src:src,items:items="items",logo:logo="",length:length=5})=>Object(jsx_runtime.jsxs)(Wrapper,{children:[logo&&Object(jsx_runtime.jsx)(HeadlineImage,{children:Object(jsx_runtime.jsx)("amp-img",{src:logo,height:"40",width:"268",layout:"responsive"})}),!logo&&Object(jsx_runtime.jsx)(Headline,{children:Object(jsx_runtime.jsx)(es.b,{id:"mostPopular"})}),Object(jsx_runtime.jsx)("amp-list",{src:src,layout:"fixed-height",width:"auto",height:"370","max-items":length,items:items,children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsxs)(ListItem,{children:[Object(jsx_runtime.jsx)(ImageWrapper,{href:"amp-template-link",children:Object(jsx_runtime.jsx)("amp-img",{src:"amp-template-image",alt:"amp-template-title",layout:"fill"})}),Object(jsx_runtime.jsx)(Link,{href:"amp-template-link",children:"amp-template-title"})]})})})]});FeedList.propTypes={src:prop_types_default.a.string.isRequired,items:prop_types_default.a.string,logo:prop_types_default.a.string,length:prop_types_default.a.number},FeedList.__docgenInfo={description:"",methods:[],displayName:"FeedList",props:{items:{defaultValue:{value:"'items'",computed:!1},type:{name:"string"},required:!1,description:""},logo:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},length:{defaultValue:{value:"5",computed:!1},type:{name:"number"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:""}}};var components_FeedList=FeedList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/components/FeedList.js"]={name:"FeedList",docgenInfo:FeedList.__docgenInfo,path:"app/component/library/Sidebar/components/FeedList.js"});const MostPopular=props=>{const{configuration:configuration}=props,src=configuration.feeds.mmm.src,items=configuration.feeds.mmm.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,items:items})};MostPopular.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_MostPopular=Object(styled_components_browser_esm.default)(MostPopular)``;const Indy100=props=>{const{configuration:configuration}=props,src=configuration.feeds.indy100.src,logo=configuration.feeds.indy100.logo;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,logo:logo})};Indy100.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_Indy100=Object(styled_components_browser_esm.default)(Indy100)``;const Sidebar_Wrapper=styled_components_browser_esm.default.aside`
  flex: 0 0 300px;
  margin-left: 40px;
  @media ${Styles.c.maxLaptop} {
    display: none;
  }
`;function Sidebar({sidebar:sidebar,configuration:configuration}){const layout=sidebar.layoutSettings?sidebar.layoutSettings:[];return Object(jsx_runtime.jsxs)(Sidebar_Wrapper,{children:[Object(jsx_runtime.jsx)(MPU.a,{id:"mpu1"}),layout&&layout.map((comp,i)=>{switch(comp.type){case"MostPopular":return Object(jsx_runtime.jsx)(Sidebar_MostPopular,{name:comp.name,configuration:configuration},comp.type+i);case"indy100":return Object(jsx_runtime.jsx)(Sidebar_Indy100,{name:comp.name,configuration:configuration},comp.type+i);default:return Object(jsx_runtime.jsxs)("p",{style:{color:"red"},children:["Undefined component: ",comp.type]},"undefined"+i)}})]})}Sidebar.propTypes={sidebar:prop_types_default.a.object.isRequired,sections:prop_types_default.a.array.isRequired,configuration:prop_types_default.a.object.isRequired,adTargeting:prop_types_default.a.object},Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{sidebar:{type:{name:"object"},required:!0,description:""},sections:{type:{name:"array"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""},adTargeting:{type:{name:"object"},required:!1,description:""}}};var library_Sidebar=Sidebar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar.js"]={name:"Sidebar",docgenInfo:Sidebar.__docgenInfo,path:"app/component/library/Sidebar.js"});var StickyFooter=__webpack_require__(293),WallPaper=__webpack_require__(186);const SectionMeta=({section:section,res:{locals:{configuration:{name:name,twitter:twitter,description:description,logoIcon:logoIcon}}}})=>{var _term$extra,_term$extra2,_section$publication,_section$section;const{section:term}=section,seoTitle=[(null==term||null===(_term$extra=term.extra)||void 0===_term$extra?void 0:_term$extra.titleSEO)||(null==term?void 0:term.name),name].filter(Boolean).join(" | "),seoDescription=(null==term||null===(_term$extra2=term.extra)||void 0===_term$extra2?void 0:_term$extra2.seoDescription)||description,url=(str=>{if(str.indexOf("//")===str.lastIndexOf("//"))return str;let count=-1;return str.replace(/\/\//g,match=>(count++,0===count?match:"/"))})(`${null==section||null===(_section$publication=section.publication)||void 0===_section$publication?void 0:_section$publication.url}${null==section||null===(_section$section=section.section)||void 0===_section$section?void 0:_section$section.path}`);return Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("meta",{property:"og:type",content:"website"}),Object(jsx_runtime.jsx)("meta",{property:"og:image",content:logoIcon}),Object(jsx_runtime.jsx)("meta",{property:"og:url",content:url}),Object(jsx_runtime.jsx)("meta",{property:"og:title",content:seoTitle}),Object(jsx_runtime.jsx)("meta",{property:"og:description",content:seoDescription}),Object(jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(jsx_runtime.jsx)("meta",{name:"twitter:site",content:twitter}),Object(jsx_runtime.jsx)("meta",{name:"twitter:image",content:logoIcon}),Object(jsx_runtime.jsx)("meta",{name:"twitter:title",content:seoTitle}),Object(jsx_runtime.jsx)("meta",{name:"twitter:description",content:seoDescription})]})};SectionMeta.propTypes={section:prop_types_default.a.object,res:prop_types_default.a.object},SectionMeta.__docgenInfo={description:"",methods:[],displayName:"SectionMeta",props:{section:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!1,description:""}}};var Head_SectionMeta=Object(RequestProvider.withRequest)(SectionMeta);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Head/SectionMeta.js"]={name:"SectionMeta",docgenInfo:SectionMeta.__docgenInfo,path:"app/component/library/Head/SectionMeta.js"});var layout_Component=__webpack_require__(296),Component_default=__webpack_require__.n(layout_Component);var components_ComponentTitle=Object(styled_components_browser_esm.default)(({className:className,name:name,url:url})=>Object(jsx_runtime.jsx)("div",{className:className,children:name&&Object(jsx_runtime.jsxs)("h1",{children:[url&&Object(jsx_runtime.jsx)("a",{href:url,children:name}),!url&&Object(jsx_runtime.jsx)("span",{children:name})]})}))`
  h1 {
    display: flex;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 10px;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-size: 20px;
    margin: 0;
    &:before {
      content: ' ';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${props=>props.theme.color.primary};
      margin-right: 8px;
    }
    span,
    a {
      color: ${props=>props.theme.color.fontTitle};
      text-decoration: none;
      margin-top: 2px;
    }
  }
`;var Section_Title=Object(styled_components_browser_esm.default)(props=>{const{className:className,data:{labelText:labelText,labelLink:labelLink},style:style}=props;return Object(jsx_runtime.jsx)(Component_default.a,{...props,children:Object(jsx_runtime.jsx)(components_ComponentTitle,{className:className,name:labelText,url:labelLink,style:style})})})``,Image=__webpack_require__(81),Image_default=__webpack_require__.n(Image),util_url=__webpack_require__(75);const ArticleImage_ImageWrapper=Object(styled_components_browser_esm.default)("div")`
  img {
    object-fit: cover;
  }
`,ArticleImage=({children:children,className:className,hero:hero,path:path,srcset:srcset})=>(className=className?[className,"image-wrap"].join(" "):"image-wrap",hero&&hero.some(({type:type})=>"image"===type)?Object(jsx_runtime.jsxs)(ArticleImage_ImageWrapper,{className:className,children:[children&&children,hero&&hero.filter(({type:type})=>"image"===type).filter((item,index,collection)=>collection.length-1===index).map(({data:{url:url,caption:caption}},index)=>Object(jsx_runtime.jsx)("a",{href:path,children:Object(jsx_runtime.jsx)(Image_default.a,{src:null!=url&&url.startsWith("data:")?url:""+Object(util_url.a)(url,Object(util_url.b)(srcset[srcset.length-1],null,"61:45,smart")),alt:caption,width:"3",height:"2",layout:"responsive",srcset:null!=url&&url.startsWith("data:")?null:srcset.map(size=>`${Object(util_url.a)(url,Object(util_url.b)(size,null,"61:45,smart"))} ${size}w`).join(", ")},index)},index))]}):Object(jsx_runtime.jsxs)(ArticleImage_ImageWrapper,{className:className,children:[children&&children,Object(jsx_runtime.jsx)("a",{href:path,className:"placeholder",children:Object(jsx_runtime.jsx)(Image_default.a,{src:"/img/placeholder.png",layout:"responsive",width:"1.3",height:"1"})})]}));ArticleImage.propTypes={hero:prop_types_default.a.array.isRequired,path:prop_types_default.a.any.isRequired,children:prop_types_default.a.any,className:prop_types_default.a.string,srcset:prop_types_default.a.array,articleIcon:prop_types_default.a.any},ArticleImage.defaultProps={children:null,className:"",srcset:[375,640],articleIcon:!1},ArticleImage.__docgenInfo={description:"",methods:[],displayName:"ArticleImage",props:{children:{defaultValue:{value:"null",computed:!1},type:{name:"any"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},srcset:{defaultValue:{value:"[375, 640]",computed:!1},type:{name:"array"},required:!1,description:""},articleIcon:{defaultValue:{value:"false",computed:!1},type:{name:"any"},required:!1,description:""},hero:{type:{name:"array"},required:!0,description:""},path:{type:{name:"any"},required:!0,description:""}}};var article_ArticleImage=ArticleImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/article/ArticleImage.js"]={name:"ArticleImage",docgenInfo:ArticleImage.__docgenInfo,path:"app/component/library/Section/components/article/ArticleImage.js"});var SocialShare=__webpack_require__(184);const ArticleFooter_Wrapper=styled_components_browser_esm.default.div`
  height: 29px;
  padding: 8px 0 16px;
  margin-top: auto;
  [data-type='ArticleX8'] & {
    height: 20px;
    padding: 0 0 16px;
    div {
      text-align: left;
      margin-left: 0;
    }
  }
`,StyledSocialShare=Object(styled_components_browser_esm.default)(SocialShare.a)`
  height: 35px;
`,ArticleFooter=Object(styled_components_browser_esm.default)(({className:className,titleSocial:titleSocial,title:title,type:type,socialOptions:socialOptions})=>Object(jsx_runtime.jsx)(ArticleFooter_Wrapper,{className:className,children:Object(jsx_runtime.jsx)(StyledSocialShare,{size:"ArticleX8"===type?26:35,title:title,titleSocial:titleSocial,types:socialOptions})}))``;ArticleFooter.propTypes={className:prop_types_default.a.string};var article_ArticleFooter=ArticleFooter;const ArticleItem_Wrapper=styled_components_browser_esm.default.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props=>props.theme.color.darkContrast};
  flex-basis: 100%;
  @media ${Styles.c.tablet} {
    flex-basis: calc(50% - 8px);
  }
`,Content=styled_components_browser_esm.default.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,ArticleItem_Title=styled_components_browser_esm.default.a`
  display: block;
  line-height: 1.333;
  color: ${props=>props.theme.color.darkContrast};
  font-size: 21px;
  font-family: ${props=>props.theme.fontFamily.headingFont};
  margin-top: 8px;
`,Lead=styled_components_browser_esm.default.div`
  padding: 8px 0 8px;
  font-size: 16px;
`;var article_ArticleItem=Object(styled_components_browser_esm.default)(({className:className,srcset:srcset,type:type,data:{path:path,titleShort:titleShort,titleSocial:titleSocial,title:title,hero:hero,showLead:showLead,lead:lead},socialOptions:socialOptions})=>Object(jsx_runtime.jsxs)(ArticleItem_Wrapper,{className:className?[className,"article"].join(" "):"article",children:[Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,srcset:srcset,path:path}),Object(jsx_runtime.jsxs)(Content,{className:"content",children:[Object(jsx_runtime.jsx)(ArticleItem_Title,{href:path,children:titleShort||title}),showLead&&lead&&Object(jsx_runtime.jsx)(Lead,{children:lead}),Object(jsx_runtime.jsx)(article_ArticleFooter,{title:title,titleSocial:titleSocial,type:type,socialOptions:socialOptions})]})]}))``;var components_ArticleRow=Object(styled_components_browser_esm.default)(props=>{const{className:className,srcset:srcset,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink}}=props;return Object(jsx_runtime.jsxs)(Component_default.a,{className:className,...props,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),articles&&articles.filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:srcset,data:article,type:type,socialOptions:{uv:{isSmallButton:"ArticleX3"===type||"ArticleX8"===type,articleId:article.id}}},index))]})})`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;var Section_ArticleX1=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[426]}))`
  .article {
    flex-basis: 100%;
  }
  ${ArticleItem_Title} {
    font-size: 21px;
    line-height: 1.25;

    @media ${Styles.c.mobileL} {
      font-size: 28px;
    }
  }
`;var Section_ArticleX2=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[390]}))``;const ArticleX3=({data:data,...props})=>{var _data$articles;const articles=null===(_data$articles=data.articles)||void 0===_data$articles?void 0:_data$articles.map(article=>({...article,showLead:!1})),amendedData={...data,articles:articles};return Object(jsx_runtime.jsx)(components_ArticleRow,{...props,data:amendedData,srcset:[390]})};ArticleX3.propTypes={data:prop_types_default.a.object};var Section_ArticleX3=Object(styled_components_browser_esm.default)(ArticleX3)`
  .article {
    flex-basis: calc(50% - 8px);

    @media ${Styles.c.tablet} {
      flex-basis: calc(33% - 8px);
    }

    &:last-child {
      flex-basis: 100%;

      ${ArticleItem_Title} {
        font-size: 21px;
      }

      @media ${Styles.c.tablet} {
        flex-basis: calc(33% - 8px);

        ${ArticleItem_Title} {
          font-size: 18px;
        }
      }
    }
  }
  ${ArticleItem_Title} {
    font-size: 18px;
    line-height: 1.17;
    margin-top: 8px;
  }
`;const ArticleX8=({data:data,...props})=>{var _data$articles;const articles=null===(_data$articles=data.articles)||void 0===_data$articles?void 0:_data$articles.map(article=>({...article,showLead:!1})),amendedData={...data,articles:articles};return Object(jsx_runtime.jsx)(components_ArticleRow,{...props,data:amendedData,srcset:[190]})};ArticleX8.propTypes={data:prop_types_default.a.object};var Section_ArticleX8=Object(styled_components_browser_esm.default)(ArticleX8)`
  .article {
    flex-direction: row;
  }
  .image-wrap {
    display: flex;
    margin-bottom: 16px;
    amp-img {
      width: 140px;
      height: 94px;
      margin-right: 8px;
      flex: 0.5;
      img {
        object-fit: cover;
      }

      @media ${Styles.c.mobileM} {
        width: 168px;
        height: 112px;
      }

      @media ${Styles.c.mobileL} {
        width: 193px;
        height: 129px;
      }

      @media ${Styles.c.tablet} {
        width: 148px;
        height: 98px;
      }
    }
  }
  .content {
    width: 100%;
    padding-bottom: 5px;
    box-sizing: border-box;
  }
  ${ArticleItem_Title} {
    font-size: 14px;
    line-height: 1.17;
    margin-bottom: 10px;
    margin-top: 0;
  }
`;const AuthorWrapper=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${Styles.c.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,AuthorImage=styled_components_browser_esm.default.div`
  width: 75px;
  height: 75px;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  @media ${Styles.c.tablet} {
    margin-right: 12px;
  }
`,AuthorInfo=styled_components_browser_esm.default.div`
  flex-grow: 1;
`,AuthorDetails=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.fontGrey};
  font: 300 19px ${props=>props.theme.fontFamily.secondaryFont};
  a {
    color: ${props=>props.theme.color.fontGrey};
    text-decoration: none;
  }
  > * {
    &:before {
      content: ' | ';
    }
    &:first-child {
      &:before {
        display: none;
      }
    }
  }
`,AuthorName=styled_components_browser_esm.default.h2`
  margin: 0;
  color: ${props=>props.theme.color.primary};
  font: italic 700 26px ${props=>props.theme.fontFamily.primaryFont};
`,AuthorDesc=styled_components_browser_esm.default.p`
  width: 100%;
  font: 300 17px ${props=>props.theme.fontFamily.primaryFont};
`,AuthorRow=({author:author})=>{let authorDetails=[];return author.jobTitle&&authorDetails.push(Object(jsx_runtime.jsx)("span",{children:author.jobTitle})),author.twitter&&authorDetails.push(Object(jsx_runtime.jsxs)("a",{href:"https://twitter.com/"+author.twitter,children:["@",author.twitter]})),Object(jsx_runtime.jsxs)(AuthorWrapper,{children:[author.imageUrl&&Object(jsx_runtime.jsx)(AuthorImage,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:author.imageUrl,width:75,height:75,layout:"responsive"})}),Object(jsx_runtime.jsxs)(AuthorInfo,{children:[Object(jsx_runtime.jsx)(AuthorName,{children:author.name}),authorDetails&&Object(jsx_runtime.jsx)(AuthorDetails,{children:authorDetails})]}),author.description&&Object(jsx_runtime.jsx)(AuthorDesc,{children:author.description})]})};AuthorRow.propTypes={author:prop_types_default.a.object.isRequired},AuthorRow.__docgenInfo={description:"",methods:[],displayName:"AuthorRow",props:{author:{type:{name:"object"},required:!0,description:""}}};var Author_AuthorRow=AuthorRow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Author/AuthorRow.js"]={name:"AuthorRow",docgenInfo:AuthorRow.__docgenInfo,path:"app/component/library/Author/AuthorRow.js"});const componentMap={Title:Section_Title,ArticleX1:Section_ArticleX1,ArticleX2:Section_ArticleX2,ArticleX3:Section_ArticleX3,ArticleX8:Section_ArticleX8},skipComponentHasNoArticle=({articles:articles})=>!articles||!articles.every(x=>!x),Content_Wrapper=styled_components_browser_esm.default.div`
  flex-grow: 1;
  width: 100%;
  margin: 0 12px;
  @media ${Styles.c.laptop} {
    margin: 0 16px;
  }
`,SectionTitle=styled_components_browser_esm.default.a`
  display: inline-block;
  font-size: 24px;
  background-color: ${props=>props.theme.color.primary};
  color: ${props=>props.theme.color.white};
  border-radius: 100px;
  margin: 16px 30px 0;
  padding: 5px 24px;
  text-align: center;
  font-family: ${props=>props.theme.fontFamily.articleFont};
  font-weight: ${props=>props.theme.fontWeight.normal};
  text-transform: capitalize;
  line-height: normal;
  @media ${Styles.c.laptop} {
    margin: 16px 0 0;
  }
`,SectionContent=({components:components,theme:theme,configuration:configuration,section:section})=>{const currentSection=section.section,insert=(section=>{switch(section.type){case"author":return Object(jsx_runtime.jsx)(Author_AuthorRow,{author:section.section});default:return null}})(section),isWishlist="/wishlist"===currentSection.path,isHomePage="/"===currentSection.path;return Object(jsx_runtime.jsxs)(Content_Wrapper,{className:"section-content",children:[!isWishlist&&!isHomePage&&Object(jsx_runtime.jsx)(SectionTitle,{id:"section-title",children:currentSection.name}),insert,null==components?void 0:components.filter(skipComponentHasNoArticle).map((comp,i)=>{const Component=componentMap[comp.type],key=`${comp.type}${i}`;switch(comp.type){case"Title":case"ArticleX1":case"ArticleX2":case"ArticleX3":case"ArticleX8":return Object(jsx_runtime.jsx)(Component,{componentStyle:theme,data:comp,configuration:configuration},key);default:return Object(jsx_runtime.jsxs)("p",{style:{color:"red"},children:["Undefined component: ",comp.type]},"undefined"+i)}})]})};SectionContent.propTypes={components:prop_types_default.a.array,configuration:prop_types_default.a.object.isRequired,publication:prop_types_default.a.any.isRequired,theme:prop_types_default.a.any,section:prop_types_default.a.object.isRequired,isWishlist:prop_types_default.a.bool},SectionContent.__docgenInfo={description:"",methods:[],displayName:"SectionContent",props:{components:{type:{name:"array"},required:!1,description:""},configuration:{type:{name:"object"},required:!0,description:""},publication:{type:{name:"any"},required:!0,description:""},theme:{type:{name:"any"},required:!1,description:""},section:{type:{name:"object"},required:!0,description:""},isWishlist:{type:{name:"bool"},required:!1,description:""}}};var Section_Content=SectionContent;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/pages/Section/Content.js"]={name:"SectionContent",docgenInfo:SectionContent.__docgenInfo,path:"app/component/pages/Section/Content.js"});var ads=__webpack_require__(93),page=__webpack_require__(183);const Section=props=>{const{className:className,section:section,menu:menu,configuration:configuration,cleanAmp:cleanAmp,structuredData:structuredData}=props,domain=configuration.domain,adToggle=Object(ads.e)(section),currentSection=section.section;return Object(jsx_runtime.jsxs)(Frame.a,{domain:domain,publication:section.publication,configuration:configuration,menu:menu,className:className,children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("title",{children:Object(page.a)({section:section},configuration.name)}),structuredData&&Object.values(structuredData).filter(Boolean).map((json,index)=>Object(jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(json)},index)),Object(jsx_runtime.jsx)("link",{rel:"alternate",href:configuration.baseUrl+("/"===currentSection.path?"/rss":currentSection.path+"/rss"),title:"RSS",type:"application/rss+xml"}),Object(jsx_runtime.jsx)("script",{async:!0,"custom-element":"amp-timeago",src:"https://cdn.ampproject.org/v0/amp-timeago-0.1.js"})]}),Object(jsx_runtime.jsx)(Head_SectionMeta,{section:section}),adToggle(ads.d)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"adSlotWallpaper"}),adToggle(ads.b)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"nativeBanner"}),Object(jsx_runtime.jsxs)(ColumnWrapper.a,{children:[Object(jsx_runtime.jsx)(Section_Content,{components:section.components,publication:section.publication,configuration:configuration,section:section}),section.sidebar&&Object(jsx_runtime.jsx)(library_Sidebar,{domain:domain,adToggle:adToggle,cleanAmp:!1,sidebar:section.sidebar})]}),adToggle(ads.a)&&Object(jsx_runtime.jsx)(StickyFooter.a,{cleanAmp:cleanAmp})]})};Section.propTypes={className:prop_types_default.a.string,section:prop_types_default.a.object.isRequired,menu:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool,structuredData:prop_types_default.a.object};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Section))`
  display: flex;
  justify-content: center;
`},1458:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(3),Helmet=__webpack_require__(42),RequestProvider=__webpack_require__(10),Frame=__webpack_require__(140),Styles=__webpack_require__(5),postCodePatterns=__webpack_require__(295),FormSelect=__webpack_require__(161),FormTextField=__webpack_require__(66),FormSubmit=__webpack_require__(139),jsx_runtime=__webpack_require__(0);const Wrapper=styled_components_browser_esm.default.div`
  font-family: ${props=>props.theme.fontFamily.primaryFont};

  p {
    line-height: 22px;
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    margin: 0;
  }
  .sub-title {
    margin: 0 0 24px;
  }
`,H2=styled_components_browser_esm.default.h2`
  color: ${props=>props.theme.color.primary};
  font-weight: ${props=>props.theme.fontWeight.bold};
  font-size: 25px;
  padding: 0;
  text-align: left;
  margin: 0 0 24px;
  display: none;

  @media ${Styles.c.tablet} {
    display: block;
  }
`,H3=styled_components_browser_esm.default.h3`
  font-size: 25px;
  line-height: 25px;
  font-weight: 400;
  margin: 0 0 16px;
`,ProfileFormSubmit=Object(styled_components_browser_esm.default)(FormSubmit.a)`
  button {
    margin: 0;
    padding: 12px 24px;
  }
`,ProfileDetails=({profile:profile})=>{const{firstName:firstName,lastName:lastName,email:email,nickname:nickname,country:country,birthYear:birthYear,zip:zip}=profile,years=[],MostRecentYear=(new Date).getFullYear()-18,EarliestYear=MostRecentYear-90;for(let i=MostRecentYear;i>=EarliestYear;i--)years.push(Object(jsx_runtime.jsx)("option",{value:i,selected:birthYear===i,children:i},i));const countries=Object.keys(postCodePatterns.a).map((countryName,i)=>5===i?Object(jsx_runtime.jsx)("option",{disabled:!0,children:"----------"},"disabled"):Object(jsx_runtime.jsx)("option",{value:countryName,selected:country===countryName,children:countryName},countryName));return Object(jsx_runtime.jsxs)(Wrapper,{className:"tab details",children:[Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(H2,{className:"icon-profile title",children:"My details"}),Object(jsx_runtime.jsxs)("p",{className:"sub-title",children:["Edit any of your details below so your account is up to date. These details will only be visible to you and ",Object(jsx_runtime.jsx)("em",{children:"Indy100"}),"."]}),Object(jsx_runtime.jsxs)("form",{id:"profile-form",method:"post","action-xhr":"/internal-api/profile-update/submit","verify-xhr":"/internal-api/profile-update/verify","custom-validation-reporting":"as-you-go",children:[Object(jsx_runtime.jsx)("input",{type:"hidden",name:"originalEmail",defaultValue:email}),Object(jsx_runtime.jsx)("input",{type:"hidden",name:"nickname",defaultValue:nickname}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"firstName",fieldId:"reg-form-firstname",displayName:"First name",requiredField:!0,pattern:"^[A-Za-zÀ-ú\\-' ]{1,40}$",value:firstName,patternMismatchMsg:"Please enter your first name",valueMissingMsg:"Please enter your first name"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"lastName",fieldId:"reg-form-lastname",displayName:"Last name",requiredField:!0,pattern:"^[A-Za-zÀ-ú\\-' ]{1,40}$",value:lastName,patternMismatchMsg:"Please enter your last name",valueMissingMsg:"Please enter your last name"}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"birthYear",fieldId:"reg-form-birth-year",displayName:"Year of birth",fieldRequired:!0,options:years,validationMsg:"You must be 18 or over to register",defaultValue:birthYear}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"country",fieldId:"reg-form-country",displayName:"Country of residence",fieldRequired:!0,options:countries,validationMsg:"Please select a country in the list",defaultValue:country}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"zip",fieldId:"reg-form-postcode",displayName:"Postcode",requiredField:!0,value:zip,patternMismatchMsg:"Please enter a valid postcode",valueMissingMsg:"Please enter a valid postcode"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"email",fieldId:"reg-form-email",displayName:"Email address",requiredField:!0,pattern:"^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{0,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{2,63}){1,}))$",value:email,patternMismatchMsg:"Please enter a valid email address",valueMissingMsg:"Please enter a valid email address"}),Object(jsx_runtime.jsx)(ProfileFormSubmit,{children:"Save changes"}),Object(jsx_runtime.jsx)("div",{"submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})}),Object(jsx_runtime.jsx)("div",{className:"form-error","submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})})]})]}),Object(jsx_runtime.jsxs)("aside",{children:[Object(jsx_runtime.jsx)(H3,{children:"Delete my account"}),Object(jsx_runtime.jsxs)("p",{children:["If you wish to delete your account please contact"," ",Object(jsx_runtime.jsx)("a",{href:"https://independentnews.zendesk.com/hc/en-us/requests/new",target:"_blank",rel:"noopener noreferrer",children:"Customer services"})," ","who will be able to process your request."]})]})]})};ProfileDetails.propTypes={profile:prop_types_default.a.object.isRequired},ProfileDetails.__docgenInfo={description:"",methods:[],displayName:"ProfileDetails",props:{profile:{type:{name:"object"},required:!0,description:""}}};var Profile_ProfileDetails=ProfileDetails;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/StaticPage/Profile/ProfileDetails.js"]={name:"ProfileDetails",docgenInfo:ProfileDetails.__docgenInfo,path:"app/component/library/StaticPage/Profile/ProfileDetails.js"});var icons_smallArrowRight='\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\n';const ProfileOverview_Wrapper=styled_components_browser_esm.default.div``,HeaderBanner=styled_components_browser_esm.default.h2`
  background: ${props=>props.theme.color.darkContrast};
  color: ${props=>props.theme.color.white};
  font-size: 19px;
  padding: 15px;
  margin: 0;
  text-align: center;
  font-weight: 700;
`,Icon=styled_components_browser_esm.default.span`
  height: 24px;
  width: 24px;
  padding-right: 14px;
  display: inline-block;
  text-align: center;

  &:nth-of-type(2) {
    height: 20px;
    width: 20px;
    position: absolute;
    padding: 0;
    right: 16px;
  }

  svg {
    width: auto;
    height: 24px;
  }
`,Arrow=Object(styled_components_browser_esm.default)(Icon)`
  position: absolute;
  right: 16px;
  height: 16px;
  width: 16px;
`,OverviewBlock=styled_components_browser_esm.default.a`
  width: calc(100% - 32px);
  box-sizing: border-box;
  margin: 16px auto 0;
  align-items: center;
  cursor: pointer;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  color: ${props=>props.theme.color.darkContrast};
  background-color: ${props=>props.theme.color.backgroundLight};
  display: flex;
  flex-wrap: wrap;
  min-height: 103px;
  padding: 16px;
  position: relative;
  transition: background-color 0.3s ease;
  font-size: 19px;

  &:hover {
    background: ${props=>props.theme.color.borderLight};
  }

  @media ${Styles.c.tablet} {
    width: calc(50% - 16px);
    margin: 16px 0 0;
  }
`,Edit=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.primary};
  font-weight: 300;
  font-size: 16px;
  margin-top: 10px;
  display: flex;
  width: 100%;
`,OverviewMenu=styled_components_browser_esm.default.div`
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
  justify-content: space-between;
`,ProfileOverview=({profile:profile})=>{const{firstName:firstName,lastName:lastName}=profile;return Object(jsx_runtime.jsxs)(ProfileOverview_Wrapper,{className:"tab overview active",children:[Object(jsx_runtime.jsxs)(HeaderBanner,{children:["Welcome back ",Object(jsx_runtime.jsx)("strong",{children:`${firstName} ${lastName}`})]}),Object(jsx_runtime.jsxs)(OverviewMenu,{children:[Object(jsx_runtime.jsxs)(OverviewBlock,{className:"profile-link","data-tab":"details",children:["My details",Object(jsx_runtime.jsx)(Edit,{children:"Edit"}),Object(jsx_runtime.jsx)(Arrow,{dangerouslySetInnerHTML:{__html:icons_smallArrowRight}})]}),Object(jsx_runtime.jsxs)(OverviewBlock,{className:"profile-link","data-tab":"password",children:["Change password",Object(jsx_runtime.jsx)(Edit,{children:"Edit"}),Object(jsx_runtime.jsx)(Arrow,{dangerouslySetInnerHTML:{__html:icons_smallArrowRight}})]})]})]})};ProfileOverview.propTypes={profile:prop_types_default.a.object.isRequired},ProfileOverview.__docgenInfo={description:"",methods:[],displayName:"ProfileOverview",props:{profile:{type:{name:"object"},required:!0,description:""}}};var Profile_ProfileOverview=ProfileOverview;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/StaticPage/Profile/ProfileOverview.js"]={name:"ProfileOverview",docgenInfo:ProfileOverview.__docgenInfo,path:"app/component/library/StaticPage/Profile/ProfileOverview.js"});const ProfilePassword_Wrapper=styled_components_browser_esm.default.div`
  font-family: ${props=>props.theme.fontFamily.primaryFont};
`,ProfilePassword_H2=styled_components_browser_esm.default.h2`
  color: ${props=>props.theme.color.primary};
  font-weight: ${props=>props.theme.fontWeight.bold};
  font-size: 25px;
  padding: 0;
  text-align: left;
  margin: 0 0 24px;
  display: none;

  @media ${Styles.c.tablet} {
    display: block;
  }
`,ProfilePassword=()=>Object(jsx_runtime.jsx)(ProfilePassword_Wrapper,{className:"tab password",children:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(ProfilePassword_H2,{className:"icon-profile title",children:"Change password"}),Object(jsx_runtime.jsxs)("form",{id:"change-password-form",method:"post","action-xhr":"/internal-api/change-password/submit","verify-xhr":"/internal-api/change-password/verify","custom-validation-reporting":"interact-and-submit",children:[Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"password",inputType:"password",showPassword:!0,fieldId:"profile-form-password",displayName:"Current password",requiredField:!0,pattern:".{6,}",patternMismatchMsg:"Please enter a password with at least 6 characters",valueMissingMsg:"Please enter a password with at least 6 characters"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"newPassword",inputType:"password",showPassword:!0,fieldId:"profile-form-new-password",displayName:"New password",requiredField:!0,pattern:".{6,}",patternMismatchMsg:"Please enter a password with at least 6 characters",valueMissingMsg:"Please enter a password with at least 6 characters"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"confirmPassword",inputType:"password",showPassword:!0,fieldId:"profile-form-confirm-password",displayName:"Re-type new password",requiredField:!0,pattern:".{6,}",patternMismatchMsg:"Please enter a password with at least 6 characters",valueMissingMsg:"Please enter a password with at least 6 characters"}),Object(jsx_runtime.jsx)(FormSubmit.a,{children:"Save changes"}),Object(jsx_runtime.jsx)("div",{"submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})}),Object(jsx_runtime.jsx)("div",{className:"form-error","submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})})]})]})});ProfilePassword.__docgenInfo={description:"",methods:[],displayName:"ProfilePassword"};var Profile_ProfilePassword=ProfilePassword;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/StaticPage/Profile/ProfilePassword.js"]={name:"ProfilePassword",docgenInfo:ProfilePassword.__docgenInfo,path:"app/component/library/StaticPage/Profile/ProfilePassword.js"});var logout=__webpack_require__(292);const ProfileMenu=styled_components_browser_esm.default.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;
  padding: 0;
  flex-direction: column;
  overflow: hidden;
  max-height: 60px;
  width: 100%;
  align-items: center;
  background: ${props=>props.theme.color.backgroundLight};

  @media ${Styles.c.maxTablet} {
    &.open {
      max-height: 600px;
      position: absolute;
      width: 100%;
      z-index: 5;

      & ~ .mobile-background {
        background: #000;
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 1;
        top: 0;
        opacity: 0.5;
      }
    }
  }

  @media ${Styles.c.tablet} {
    background: none;
    align-items: start;
    width: 280px;
    max-height: none;
    margin: 0 8px 0 0;
  }

  @media ${Styles.c.laptop} {
    width: 300px;
    margin: 0 16px 0 0;
  }
`,ListItem=styled_components_browser_esm.default.li`
  background-color: ${props=>props.theme.color.backgroundLight};
  position: relative;
  margin: 0;
  width: 100%;

  &.no-pad {
    margin: 0;
  }

  @media ${Styles.c.tablet} {
    margin: 0 0 16px 0;
  }

  @media ${Styles.c.maxTablet} {
    order: 1;
    width: 200px;
    &.active {
      width: auto;
      order: 0;
    }
  }
`,ListLink=styled_components_browser_esm.default.a`
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 16px;
  text-decoration: none;
  white-space: nowrap;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  color: ${props=>props.theme.color.darkContrast};
  font-size: 14px;
  width: 190px;
  box-sizing: border-box;

  @media ${Styles.c.maxTablet} {
    .active & {
      font-size: 20px;
      width: auto;
      margin-right: 25px;
      &:after {
        content: ' ';
        border: 6px solid transparent;
        border-top-color: ${props=>props.theme.color.primary};
        position: absolute;
        right: 16px;
        top: 26px;
      }
    }
    .open .active &:after {
      transform: rotateX(180deg) translateY(6px);
      transition: 0.5s all;
    }
  }

  @media ${Styles.c.tablet} {
    width: 100%;
    .active & {
      width: 100%;
      border-right: 8px solid ${props=>props.theme.color.primary};

      &:after {
        content: '';
      }
    }
  }
`,ProfileNav_Icon=styled_components_browser_esm.default.span`
  height: 24px;
  width: 24px;
  padding-right: 14px;
  display: inline-block;
  text-align: center;

  &:nth-of-type(2) {
    height: 20px;
    width: 20px;
    position: absolute;
    padding: 0;
    right: 16px;
  }

  svg {
    width: auto;
    height: 24px;
  }

  &.secure {
    svg {
      height: 21px;
    }
  }
`,ProfileNav=()=>Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(ProfileMenu,{children:[Object(jsx_runtime.jsx)(ListItem,{className:"profile-link active","data-tab":"overview",children:Object(jsx_runtime.jsxs)(ListLink,{children:[Object(jsx_runtime.jsx)(ProfileNav_Icon,{dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n  </svg>\n'}}),"Account Overview"]})}),Object(jsx_runtime.jsx)(ListItem,{className:"no-pad profile-link","data-tab":"details",children:Object(jsx_runtime.jsxs)(ListLink,{children:[Object(jsx_runtime.jsx)(ProfileNav_Icon,{dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n  </svg>\n'}}),"My details"]})}),Object(jsx_runtime.jsx)(ListItem,{className:"profile-link","data-tab":"password",children:Object(jsx_runtime.jsxs)(ListLink,{children:[Object(jsx_runtime.jsx)(ProfileNav_Icon,{className:"secure",dangerouslySetInnerHTML:{__html:'\n  <svg width="16" height="21" viewBox="0 0 16 21" xmlns="http://www.w3.org/2000/svg">\n    <g fill="none" fill-rule="evenodd">\n      <path d="M-4-1h24v24H-4z"/>\n      <path opacity=".9" d="M-4-1h24v24H-4z"/>\n      <g fill="#000" fill-rule="nonzero">\n        <path d="M14 7h-1V5A5 5 0 003 5v2H2a2 2 0 00-2 2v10c0 1.1.9 2 2 2h12a2 2 0 002-2V9a2 2 0 00-2-2zM5 5a3 3 0 116 0v2H5V5zm9 14H2V9h12v10zm-6-3a2 2 0 002-2 2 2 0 00-2-2 2 2 0 00-2 2c0 1.1.9 2 2 2z"/>\n      </g>\n    </g>\n  </svg>\n'}}),"Change password"]})}),Object(jsx_runtime.jsx)(ListItem,{className:"no-pad",children:Object(jsx_runtime.jsxs)(ListLink,{href:"/user/logout",children:[Object(jsx_runtime.jsx)(ProfileNav_Icon,{dangerouslySetInnerHTML:{__html:logout.a}}),"Logout"]})})]}),Object(jsx_runtime.jsx)("div",{className:"mobile-background"})]});ProfileNav.__docgenInfo={description:"",methods:[],displayName:"ProfileNav"};var Profile_ProfileNav=ProfileNav;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/StaticPage/Profile/ProfileNav.js"]={name:"ProfileNav",docgenInfo:ProfileNav.__docgenInfo,path:"app/component/library/StaticPage/Profile/ProfileNav.js"});const Profile_Wrapper=styled_components_browser_esm.default.section`
  max-width: 968px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  flex-wrap: wrap;
  form {
    width: 100%;
    margin: 0;
    @media ${Styles.c.tablet} {
      max-width: 280px;
    }
  }

  @media ${Styles.c.tablet} {
    margin: 20px auto;
    flex-wrap: nowrap;
    margin: 55px 16px;
  }

  @media ${Styles.c.laptop} {
    flex-wrap: nowrap;
    margin: 55px auto;
  }
`,TabContainer=styled_components_browser_esm.default.div`
  width: 100%;

  .tab {
    display: none;
  }
  .tab.active {
    display: flex;
    flex-direction: column;
  }

  .details,
  .password {
    & > div {
      padding: 24px 32px;
      background: ${props=>props.theme.color.contrastLight};
    }
    aside {
      background: #fff;
      margin-top: 24px;
      padding: 24px 32px 32px;
      background: ${props=>props.theme.color.contrastLight};
    }
  }
`,Profile=({data:data})=>{const profile=null==data?void 0:data.profile;return Object(jsx_runtime.jsxs)(Frame.a,{children:[Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("title",{children:"Profile"})}),Object(jsx_runtime.jsxs)(Profile_Wrapper,{className:"profile-wrapper",children:[Object(jsx_runtime.jsx)(Profile_ProfileNav,{}),Object(jsx_runtime.jsxs)(TabContainer,{children:[Object(jsx_runtime.jsx)(Profile_ProfileOverview,{profile:profile}),Object(jsx_runtime.jsx)(Profile_ProfileDetails,{profile:profile}),Object(jsx_runtime.jsx)(Profile_ProfilePassword,{})]})]})]})};Profile.propTypes={data:prop_types_default.a.object},Profile.__docgenInfo={description:"",methods:[],displayName:"Profile",props:{data:{type:{name:"object"},required:!1,description:""}}};__webpack_exports__.default=Object(RequestProvider.withRequest)(Profile);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/pages/Profile.js"]={name:"Profile",docgenInfo:Profile.__docgenInfo,path:"app/component/pages/Profile.js"})},1460:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RichArticleLongRead",(function(){return RichArticleLongRead})),__webpack_require__.d(__webpack_exports__,"RichArticleShortText",(function(){return RichArticleShortText})),__webpack_require__.d(__webpack_exports__,"DefaultRichArticleStoryWithSensitiveFlag",(function(){return DefaultRichArticleStoryWithSensitiveFlag})),__webpack_require__.d(__webpack_exports__,"DefaultRichArticleStoryWithCommercialFlag",(function(){return DefaultRichArticleStoryWithCommercialFlag})),__webpack_require__.d(__webpack_exports__,"DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds",(function(){return DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds}));var MockArticle=__webpack_require__(65),createImage=__webpack_require__(58),rich=()=>[{type:"markup",data:{markup:'<p><a href="https://www.independent.co.uk/topic/jaguars" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/jaguars" data-vars-event-id="c6">Jaguar</a> numbers may have doubled in 15 years in the south-western part of South America\'s <a href="https://www.independent.co.uk/topic/atlantic-forest" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/atlantic-forest" data-vars-event-id="c6">Atlantic Forest</a>, monitoring by conservationists has found.</p>'}},{type:"markup",data:{markup:"<p>Research using camera traps at more than 200 sites, which took more than 440,000 photographs last year alone, shows a slow recovery in numbers since initial studies in 2005.</p>"}},{type:"markup",data:{markup:"<p>The big cat is threatened by loss of habitat to farming and development, as well as illegal hunting of its prey and conflict with farmers, in the Atlantic Forest, which spans Argentina, Brazil and Paraguay.</p>"}},{type:"markup",data:{markup:'<p>Efforts across the three countries by <a href="https://www.independent.co.uk/topic/WWF" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/WWF" data-vars-event-id="c6">WWF</a>, Fundacion Vida Silvestre Argentina and local partners are focusing on habitat loss, poaching of jaguars and their prey, and reducing conflict between the big cats and local people.</p>'}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated population in the south-western region of the Atlantic Forest of 30 to 54 individuals.</p>"}},{type:"related",data:{align:"left",title:"Read more",links:[{href:"/",title:"Diego the 100-year-old tortoise who saved his species returns home",image:Object(createImage.b)(175,175,175),media_type:"video"},{href:"/",title:"Nature's 'lifeboats' can protect at-risk species from climate change",image:Object(createImage.b)(175,175,175),media_type:"image"},{href:"/",title:"Endangered elephants reclaim national park during lockdown",image:Object(createImage.b)(175,175,175),media_type:"video"}],allVideos:!1}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now between 84 and 125 jaguars in the region.</p>"}},{type:"markup",data:{markup:"<p>The figures mean the population across the whole of the Atlantic Forest is estimated at between 150 and 200, WWF said.</p>"}},{type:"markup",data:{markup:"<p>Karina Berg, regional manager for Latin America at WWF-UK, said: “These new figures demonstrate the importance of investment into long-term conservation efforts and are an incredible testament to the commitment and dedication of our teams and partners on the ground.</p>"}},{type:"markup",data:{markup:"<p>“Conserving and protecting this area and its wildlife remain as important as ever, and while jaguar populations increase, the challenges faced by this species continue.</p>"}},{type:"markup",data:{markup:"<p>“We hope to see continued population increases here and in other critical regions across Latin America in the future.”</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005 to date, we see a favourable trend for the species.”</p>"}},{type:"markup",data:{markup:'<p><a href="https://www.independent.co.uk/topic/AnimalConservation" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/AnimalConservation" data-vars-event-id="c6">Conservationists</a> will push harder to achieve a population of 250 <a href="/topic/jaguars" class="body-link" data-vars-item-name="BL-9570711-http://www.independent.co.uk/topic/jaguars" data-vars-event-id="c6">jaguars</a> in Misiones province in Argentina and take the species out of the risk of extinction, he said.</p>'}},{type:"markup",data:{markup:"<p><em>Press Association</em></p>"}}],jsx_runtime=__webpack_require__(0);const ArticleContent=__webpack_require__(411).default;__webpack_exports__.default={title:"Article/WEB/Ads",component:ArticleContent};const RichArticleLongRead=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:[{type:"markup",data:{markup:'<p><a href="https://www.independent.co.uk/topic/jaguars" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/jaguars" data-vars-event-id="c6">Jaguar</a> numbers may have doubled in 15 years in the south-western part of South America\'s <a href="https://www.independent.co.uk/topic/atlantic-forest" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/atlantic-forest" data-vars-event-id="c6">Atlantic Forest</a>, monitoring by conservationists has found.</p>'}},{type:"iframe",data:{src:""}},{type:"markup",data:{markup:"<p>Research using camera traps at more than 200 sites, which took more than 440,000 photographs last year alone, shows a slow recovery in numbers since initial studies in 2005.</p>"}},{type:"markup",data:{markup:"<p>The big cat is threatened by loss of habitat to farming and development, as well as illegal hunting of its prey and conflict with farmers, in the Atlantic Forest, which spans Argentina, Brazil and Paraguay.</p>"}},{type:"markup",data:{markup:'<p>Efforts across the three countries by <a href="https://www.independent.co.uk/topic/WWF" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/WWF" data-vars-event-id="c6">WWF</a>, Fundacion Vida Silvestre Argentina and local partners are focusing on habitat loss, poaching of jaguars and their prey, and reducing conflict between the big cats and local people.</p>'}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated population in the south-western region of the Atlantic Forest of 30 to 54 individuals.</p>"}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now between 84 and 125 jaguars in the region.</p>"}},{type:"markup",data:{markup:"<p>The figures mean the population across the whole of the Atlantic Forest is estimated at between 150 and 200, WWF said.</p>"}},{type:"markup",data:{markup:"<p>Karina Berg, regional manager for Latin America at WWF-UK, said: “These new figures demonstrate the importance of investment into long-term conservation efforts and are an incredible testament to the commitment and dedication of our teams and partners on the ground.</p>"}},{type:"markup",data:{markup:"<p>“Conserving and protecting this area and its wildlife remain as important as ever, and while jaguar populations increase, the challenges faced by this species continue.</p>"}},{type:"markup",data:{markup:"<p>“We hope to see continued population increases here and in other critical regions across Latin America in the future.”</p>"}},{type:"markup",data:{markup:"<p>The United States is reopening — whether you like it or not. </p>"}},{type:"markup",data:{markup:"<p>As states lift stay-at-home orders and encourage businesses to once again open their doors to the public, health officials are warning the nation is still sorely lacking in its testing and tracing capabilities. A second, deadlier wave of the novel coronavirus outbreak could strike the US even harder in the fall, experts have said, as there are few measures currently in place to prevent Covid-19 from becoming endemic within the country again.</p>"}},{type:"markup",data:{markup:"<p>More than one million people living in the US have contracted Covid-19, and over 60,000 people have died due to complications resulting from the disease. Analysts are now raising their estimates for the national death toll, citing “flatter and thus longer epidemic peaks” in various states like New York, which found itself at the heart of the crisis as it unfolded nationwide. </p>",id:"mjvprmm4"}},{type:"markup",data:{markup:"<p>Donald Trump is even beginning to admit that more people will die from the virus than he previously acknowledged — even as he continues insisting the country “reopen” sooner before later, and celebrating states like Texas as they open up businesses to the public.</p>"}},{type:"markup",data:{markup:"<p>The country’s own health agencies are imploring states to remain locked down until they record a significant drop in cases, combined with new initiatives to expand testing abilities. Still, the US appears set to reopen in the midst of the pandemic, with questions swirling over how those vulnerable to the deadly virus can be safe as society returns to some form of normalcy.&nbsp;</p>"}},{type:"markup",data:{markup:"<p>What might that new normal look like? What can Americans expect from their state and federal governments, as well as local businesses, as they seek to reopen the country? How might their lives be impacted for decades to come due to this unprecedented moment? The Independent asked these questions and more to experts in different aspects of human interaction to get a sense of what the “new normal” will be like in a post-pandemic American society.</p>"}},{type:"markup",data:{markup:"<p>Post-Pandemic Parallels to 9/11</p>"}},{type:"markup",data:{markup:"<p>“We’ve all been trying to envision what our world may look like” after the pandemic, said Dr Saralyn Mark, an endocrinologist and the first senior medical adviser to the Office on Women’s Health at the US Department of Health and Human Services. “We adapt, we evolve and we respond. As a society, I believe we’ll all do that.”</p>"}},{type:"markup",data:{markup:"<p>Dr Mark, who spent time in Asia after the Severe Acute Respiratory Syndrome (SARS) outbreak of 2003, predicted that the US will likely take on many of the same measures societies in China and other Asian countries adopted in the wake of the deadly virus.</p>"}},{type:"markup",data:{markup:"<p>“Everyone began wearing face masks, especially when they were immune compromised,” she said, adding that masks were initially a “very strange” concept for people throughout Asia. The practice of wearing a face mask when sick or during seasonal outbreaks has since become commonplace in many crowded cities and suburbs across Asia, Dr Mark noted.</p>"}},{type:"markup",data:{markup:"<p>Aliquam eleifend mi in nulla posuere sollicitudin. Tincidunt augue interdum velit euismod in pellentesque. Dolor sed viverra ipsum nunc aliquet bibendum enim. Consectetur lorem donec massa sapien faucibus. Ultrices neque ornare aenean euismod. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Maecenas ultricies mi eget mauris pharetra et. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Eget egestas purus viverra accumsan in nisl nisi. Aliquam malesuada bibendum arcu vitae elementum. Feugiat nisl pretium fusce id velit. Mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas purus viverra accumsan in. Lectus magna fringilla urna porttitor rhoncus dolor. Quis varius quam quisque id diam. Ut ornare lectus sit amet est. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Risus sed vulputate odio ut enim blandit volutpat maecenas. Adipiscing commodo elit at imperdiet dui accumsan sit. Risus in hendrerit gravida rutrum quisque non.</p>"}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now between 84 and 125 jaguars in the region.</p>"}},{type:"markup",data:{markup:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque. Mi in nulla posuere sollicitudin aliquam. Mauris ultrices eros in cursus. Ipsum consequat nisl vel pretium lectus quam. Proin nibh nisl condimentum id venenatis a condimentum. In egestas erat imperdiet sed euismod. Ut tristique et egestas quis ipsum suspendisse. Risus pretium quam vulputate dignissim suspendisse in. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Cras sed felis eget velit aliquet sagittis. Elementum sagittis vitae et leo duis. Id ornare arcu odio ut sem nulla pharetra. Sed id semper risus in hendrerit.</p>"}},{type:"markup",data:{markup:"<p>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Elit pellentesque habitant morbi tristique senectus. Eu augue ut lectus arcu bibendum at. Facilisis sed odio morbi quis commodo odio aenean sed. Velit dignissim sodales ut eu sem integer vitae justo eget. Tempus egestas sed sed risus pretium. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Mollis aliquam ut porttitor leo a. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Bibendum neque egestas congue quisque egestas diam. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Quisque non tellus orci ac. Amet luctus venenatis lectus magna fringilla urna. Id leo in vitae turpis massa sed elementum tempus. Faucibus ornare suspendisse sed nisi. Aliquet lectus proin nibh nisl condimentum id venenatis a. Id consectetur purus ut faucibus pulvinar elementum integer. Nulla facilisi nullam vehicula ipsum a arcu.</p>"}},{type:"markup",data:{markup:"<p>Aliquam eleifend mi in nulla posuere sollicitudin. Tincidunt augue interdum velit euismod in pellentesque. Dolor sed viverra ipsum nunc aliquet bibendum enim. Consectetur lorem donec massa sapien faucibus. Ultrices neque ornare aenean euismod. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Maecenas ultricies mi eget mauris pharetra et. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Eget egestas purus viverra accumsan in nisl nisi. Aliquam malesuada bibendum arcu vitae elementum. Feugiat nisl pretium fusce id velit. Mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas purus viverra accumsan in. Lectus magna fringilla urna porttitor rhoncus dolor. Quis varius quam quisque id diam. Ut ornare lectus sit amet est. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Risus sed vulputate odio ut enim blandit volutpat maecenas. Adipiscing commodo elit at imperdiet dui accumsan sit. Risus in hendrerit gravida rutrum quisque non.</p>"}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now between 84 and 125 jaguars in the region.</p>"}},{type:"markup",data:{markup:"<p>The figures mean the population across the whole of the Atlantic Forest is estimated at between 150 and 200, WWF said.</p>"}},{type:"markup",data:{markup:"<p>Karina Berg, regional manager for Latin America at WWF-UK, said: “These new figures demonstrate the importance of investment into long-term conservation efforts and are an incredible testament to the commitment and dedication of our teams and partners on the ground.</p>"}},{type:"markup",data:{markup:"<p>“Conserving and protecting this area and its wildlife remain as important as ever, and while jaguar populations increase, the challenges faced by this species continue.</p>"}},{type:"markup",data:{markup:"<p>“We hope to see continued population increases here and in other critical regions across Latin America in the future.”</p>"}},{type:"markup",data:{markup:"<p>The United States is reopening — whether you like it or not. </p>"}},{type:"markup",data:{markup:"<p>More than one million people living in the US have contracted Covid-19, and over 60,000 people have died due to complications resulting from the disease. Analysts are now raising their estimates for the national death toll, citing “flatter and thus longer epidemic peaks” in various states like New York, which found itself at the heart of the crisis as it unfolded nationwide. </p>",id:"mjvprmm4"}},{type:"markup",data:{markup:"<p>Donald Trump is even beginning to admit that more people will die from the virus than he previously acknowledged — even as he continues insisting the country “reopen” sooner before later, and celebrating states like Texas as they open up businesses to the public.</p>"}},{type:"markup",data:{markup:"<p>The country’s own health agencies are imploring states to remain locked down until they record a significant drop in cases, combined with new initiatives to expand testing abilities. Still, the US appears set to reopen in the midst of the pandemic, with questions swirling over how those vulnerable to the deadly virus can be safe as society returns to some form of normalcy.&nbsp;</p>"}}]},children:Object(jsx_runtime.jsx)(ArticleContent,{})});RichArticleLongRead.storyName="Long article with multiple embeds",RichArticleLongRead.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]};const RichArticleShortText=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:[{type:"markup",data:{markup:'<p><a href="https://www.independent.co.uk/topic/jaguars" class="body-link" data-vars-item-</p>'}},{type:"markup",data:{markup:"<p>Research using ear alone, shows a slow recovery in numbers since initial studies in 2005.</p>"}},{type:"markup",data:{markup:"<p>The big cat is threatened by loss well as illegal hunting of its prey  which spans Argentina, Brazil and Paraguay.</p>"}},{type:"markup",data:{markup:"<p>Efforts across the three countries by </p>"}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated individuals.</p>"}},{type:"related",data:{align:"left",title:"Read more",links:[{href:"/",title:"Diego the 100-year-old tortoise who saved his species returns home",image:Object(createImage.b)(175,175,175),media_type:"video"},{href:"/",title:"Nature's 'lifeboats' can protect at-risk species from climate change",image:Object(createImage.b)(175,175,175),media_type:"image"},{href:"/",title:"Endangered elephants reclaim national park during lockdown",image:Object(createImage.b)(175,175,175),media_type:"video"}],allVideos:!1}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now betweenthe region.</p>"}},{type:"markup",data:{markup:"<p>The figures mean the population across the whole of the Atlantic Forest is estimated at between 150 and 200, WWF said.</p>"}},{type:"markup",data:{markup:"<p>Karina Berg, regional manager for Latin America at WWF-UK, said: “These new figures demonstrate the importance of investment to the commitment and dedication of our teams and partners on the ground.</p>"}},{type:"markup",data:{markup:"<p>“Conserving and protecting this area and its wildlife remain as important as ever, and while jaguar populations increase, the challenges faced by this species continue.</p>"}},{type:"markup",data:{markup:"<p>“We hope to see continued population increases here and in other critical regions across Latin America in the future.”</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina.”</p>"}},{type:"markup",data:{markup:"<p><em>Press Association</em></p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005  for the species.”</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina.”</p>"}},{type:"markup",data:{markup:"<p><em>Press Association</em></p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005  for the species.”</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina.”</p>"}},{type:"markup",data:{markup:"<p><em>Press Association</em></p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005  for the species.”</p>"}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated individuals.</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005  for the species.”</p>"}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated individuals.</p>"}}]},children:Object(jsx_runtime.jsx)(ArticleContent,{})});RichArticleShortText.storyName="Article with short paragraphs",RichArticleShortText.parameters={amp:{isEnabled:!0}};const DefaultRichArticleStoryWithSensitiveFlag=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:rich(),sensitive:!0,extra:{isHideDisplayAds:!0}},children:Object(jsx_runtime.jsx)(ArticleContent,{})});DefaultRichArticleStoryWithSensitiveFlag.storyName="Rich article with multiple embeds & sensitive flag & hide display ads flag",DefaultRichArticleStoryWithSensitiveFlag.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]};const DefaultRichArticleStoryWithCommercialFlag=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:rich(),isCommercial:!0},children:Object(jsx_runtime.jsx)(ArticleContent,{})});DefaultRichArticleStoryWithCommercialFlag.storyName="Rich article with multiple embeds & commercial flag",DefaultRichArticleStoryWithCommercialFlag.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]};const DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:rich(),isCommercial:!0,extra:{isDisableAllAds:!0}},children:Object(jsx_runtime.jsx)(ArticleContent,{})});DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.storyName="Rich article with multiple embeds & commercial flag & disable all ads flag",DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]},RichArticleLongRead.__docgenInfo={description:"",methods:[],displayName:"RichArticleLongRead"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/WEB/ArticleAds.stories.js"]={name:"RichArticleLongRead",docgenInfo:RichArticleLongRead.__docgenInfo,path:"stories/Article/WEB/ArticleAds.stories.js"}),RichArticleShortText.__docgenInfo={description:"",methods:[],displayName:"RichArticleShortText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/WEB/ArticleAds.stories.js"]={name:"RichArticleShortText",docgenInfo:RichArticleShortText.__docgenInfo,path:"stories/Article/WEB/ArticleAds.stories.js"}),DefaultRichArticleStoryWithSensitiveFlag.__docgenInfo={description:"",methods:[],displayName:"DefaultRichArticleStoryWithSensitiveFlag"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/WEB/ArticleAds.stories.js"]={name:"DefaultRichArticleStoryWithSensitiveFlag",docgenInfo:DefaultRichArticleStoryWithSensitiveFlag.__docgenInfo,path:"stories/Article/WEB/ArticleAds.stories.js"}),DefaultRichArticleStoryWithCommercialFlag.__docgenInfo={description:"",methods:[],displayName:"DefaultRichArticleStoryWithCommercialFlag"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/WEB/ArticleAds.stories.js"]={name:"DefaultRichArticleStoryWithCommercialFlag",docgenInfo:DefaultRichArticleStoryWithCommercialFlag.__docgenInfo,path:"stories/Article/WEB/ArticleAds.stories.js"}),DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.__docgenInfo={description:"",methods:[],displayName:"DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/WEB/ArticleAds.stories.js"]={name:"DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds",docgenInfo:DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.__docgenInfo,path:"stories/Article/WEB/ArticleAds.stories.js"})},1462:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var Helmet=__webpack_require__(42),styled_components_browser_esm=__webpack_require__(3),Styles=__webpack_require__(5),RequestProvider=__webpack_require__(10),prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),postCodePatterns=__webpack_require__(295);__webpack_require__(416);var FormSelect=__webpack_require__(161),FormSubmit=__webpack_require__(139),FormTextField=__webpack_require__(66),jsx_runtime=__webpack_require__(0);const Wrapper=styled_components_browser_esm.default.section`
  width: 100%;
  max-width: 480px;
  color: ${props=>props.theme.color.fontMedium};
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  padding: 0 12px;
  box-sizing: border-box;
  position: relative;

  @media ${Styles.c.mobileL} {
    padding: 16px 34px;
  }
  @media ${Styles.c.tablet} {
    margin: 0 auto;
  }

  .form-error {
    font-size: 18px;
    color: ${props=>props.theme.color.formError};
  }

  a {
    text-decoration: underline;
    color: ${props=>props.theme.color.fontMedium};
    font-weight: 500;
  }

  p {
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
    margin: 0 auto;
    text-align: left;
  }

  div.disabled-submit {
    margin: 0 0 22px 0;
  }
`,Fields=styled_components_browser_esm.default.div`
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  input.valid,
  input.user-invalid:not(.valueMissing) {
    & ~ label {
      background: ${props=>props.theme.color.backgroundLight};
    }
  }
`,FormTextFieldInline=(styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0;
  text-align: left;
  border: 1px solid ${props=>props.theme.color.formGrey};
  padding: 12px 16px 16px;
  font-size: 12px;
  line-height: 16px;
  background: ${props=>props.theme.color.white};

  input {
    position: relative;
    appearance: none;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin: 0 10px 0 0;
    border: 1px solid ${props=>props.theme.color.formGrey};
    & ~ .checked {
      display: none;
    }
    &:checked ~ .checked {
      display: inline-block;
      position: absolute;
      left: 4px;
      top: 5px;
    }
  }
`,styled_components_browser_esm.default.label`
  margin: 5px 0 0;
  display: flex;
  align-items: center;
  position: relative;
`,styled_components_browser_esm.default.span`
  height: 13px;
  width: 18px;
  text-align: center;

  svg {
    stroke: ${props=>props.theme.color.formDefault};
    width: auto;
    height: 13px;
  }
`,styled_components_browser_esm.default.span`
  width: 12px;
  height: 10px;
  text-align: center;

  svg {
    fill: ${props=>props.theme.color.formGrey};
    width: 12px;
    height: 10px;
  }
`,Object(styled_components_browser_esm.default)(FormTextField.a)`
  display: inline-block;
  flex: 1 0 110px;
`),Registered=(styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto 20px;
  text-align: left;
  border: 1px solid ${props=>props.theme.color.formGrey};
  border-top: none;
  position: relative;
  font-size: 12px;
  line-height: 16px;
`,styled_components_browser_esm.default.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`,styled_components_browser_esm.default.div`
  max-height: 0;
  overflow: hidden;
  background: ${props=>props.theme.color.backgroundMedium};
  color: ${props=>props.theme.color.contrastDarker};
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 16px;
  font-weight: ${props=>props.theme.fontWeight.bold};
  line-height: 1.5;

  .open ~ & {
    max-height: none;
    padding: 16px;
  }
`,styled_components_browser_esm.default.div`
  border: 1px solid ${props=>props.theme.color.fontGrey};
  padding: 12px;
  margin: 22px auto;
  text-align: center;
  span {
    font-size: 16px;
    font-weight: 400;
    button {
      color: ${props=>props.theme.color.primary};
      text-decoration: underline;
      font-weight: 500;
      white-space: nowrap;
      outline: 0;
    }
  }

  a {
    font-weight: 700;
    color: ${props=>props.theme.color.primary};
  }
`),RegisterForm=props=>{let{req:{query:query}}=props;const{regSourceSection:regSourceSection,regToken:regToken}=query;let regSourceMethod=query.regSourceMethod||"";const years=[],MostRecentYear=(new Date).getFullYear()-18,EarliestYear=MostRecentYear-90;for(let i=MostRecentYear;i>=EarliestYear;i--)years.push(Object(jsx_runtime.jsx)("option",{value:i,children:i},i));const countries=Object.keys(postCodePatterns.a).map((country,i)=>5===i?Object(jsx_runtime.jsx)("option",{disabled:!0,children:"----------"},"disabled"):Object(jsx_runtime.jsx)("option",{value:country,children:country},country)),titles={Ms:"f",Mr:"m",Mrs:"f",Miss:"f",Mx:"u",Doctor:"u"},titleOptions=Object.keys(titles).map(title=>Object(jsx_runtime.jsx)("option",{value:titles[title],children:title},title));return Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsxs)("form",{id:"reg-form",className:"reg-form validate",target:"_top",method:"post","action-xhr":regToken?"/internal-api/partial-registration/submit":"/internal-api/registration/submit","verify-xhr":regToken?"/internal-api/partial-registration/verify":"/internal-api/registration/verify","custom-validation-reporting":"interact-and-submit",children:[Object(jsx_runtime.jsxs)(Fields,{children:[regToken&&Object(jsx_runtime.jsx)("input",{name:"regToken",type:"hidden",value:regToken,readOnly:!0}),Object(jsx_runtime.jsx)("input",{name:"newsletters",type:"hidden",value:"terms",readOnly:!0}),Object(jsx_runtime.jsx)("input",{name:"nickname",type:"hidden",value:""}),Object(jsx_runtime.jsx)("input",{name:"regSourceSection",type:"hidden",value:regSourceSection||"",readOnly:!0}),Object(jsx_runtime.jsx)("input",{name:"regSourceMethod",type:"hidden",value:regSourceMethod,readOnly:!0}),Object(jsx_runtime.jsx)("input",{name:"grecaptcha_token",type:"hidden",defaultValue:"",className:"grecaptcha_token"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"email",fieldId:"reg-form-email",displayName:"Email",requiredField:!0,pattern:"^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{0,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{2,63}){1,}))$",patternMismatchMsg:"Please enter a valid email address",valueMissingMsg:"Please enter a valid email address"}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"gender",fieldId:"reg-form-gender",displayName:"Title",fieldRequired:!0,options:titleOptions,inlineFlexGrow:"0.3"}),Object(jsx_runtime.jsx)(FormTextFieldInline,{fieldName:"firstName",fieldId:"reg-form-firstname",displayName:"First name",requiredField:!0,pattern:"^[A-Za-zÀ-ú\\-' ]{1,}$"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"lastName",fieldId:"reg-form-lastname",displayName:"Last name",requiredField:!0,pattern:"^[A-Za-zÀ-ú\\-' ]{1,}$"}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"birthYear",fieldId:"reg-form-birth-year",displayName:"Year of birth",fieldRequired:!0,options:years}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"country",fieldId:"reg-form-country",displayName:"Country",fieldRequired:!0,options:countries,inlineFlexGrow:"2"}),Object(jsx_runtime.jsx)(FormTextFieldInline,{fieldName:"zip",fieldId:"reg-form-postcode",displayName:"Post/Zipcode",requiredField:!0,patternMismatchMsg:"Please enter a valid postcode",valueMissingMsg:"Please enter a valid postcode"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"password",inputType:"password",showPassword:!0,autocomplete:"new-password",fieldId:"reg-form-password",displayName:"Password",requiredField:!0,pattern:".{6,}",helperText:"Password must be at least 6 characters",patternMismatchMsg:"Please enter a password with at least 6 characters",valueMissingMsg:"Please enter a password"})]}),Object(jsx_runtime.jsx)("div",{"submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsx)("input",{type:"text",hidden:!0,defaultValue:"amp-template-userRef",className:"userref-response"})})}),Object(jsx_runtime.jsx)("div",{"submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsx)("span",{className:"form-error",children:"amp-template-#verifyErrors amp-template-message amp-template-/verifyErrors amp-template-^verifyErrors amp-template-message amp-template-/verifyErrors"})})}),Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)("span",{className:"piano-form-error form-error"})}),Object(jsx_runtime.jsx)(FormSubmit.a,{className:"disabled-submit",children:"Create my account"}),Object(jsx_runtime.jsxs)("p",{children:["By clicking Create my account you confirm that your data has been entered correctly and you have read and agree to our"," ",Object(jsx_runtime.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.independent.co.uk/service/user-policies-a6184151.html",children:"Terms of use,"})," ",Object(jsx_runtime.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.independent.co.uk/service/cookie-policy-a6184186.html",children:"Cookie policy"})," ","and"," ",Object(jsx_runtime.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.independent.co.uk/service/privacy-policy-a6184181.html",children:"Privacy notice"}),"."]})]}),Object(jsx_runtime.jsx)(Registered,{children:Object(jsx_runtime.jsxs)("span",{children:["Registered? ",Object(jsx_runtime.jsx)("button",{on:"tap:sidebar.toggle",children:"Log in here"})]})})]})};RegisterForm.propTypes={className:prop_types_default.a.string,req:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired};var Register_RegisterForm=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(RegisterForm))``,Frame=__webpack_require__(140);const Register_Wrapper=styled_components_browser_esm.default.div`
  padding: 27px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  width: 100%;
  background-color: ${props=>props.theme.color.backgroundLight};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.font};
  margin: 32px auto 0;
  border-top: solid 1px ${props=>props.theme.color.borderLight};
  box-sizing: border-box;
  @media ${Styles.c.tablet} {
    max-width: 554px;
  }
  @media ${Styles.c.latop} {
    max-width: 640px;
  }
`,H2=styled_components_browser_esm.default.h2`
  font-size: 24px;
  font-weight: ${props=>props.theme.fontWeight.bold};
  margin: 10px auto 0;
  color: ${props=>props.theme.color.darkContrast};
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  padding-bottom: 24px;
`,Register=()=>Object(jsx_runtime.jsxs)(Frame.a,{children:[Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("title",{children:"Register"})}),Object(jsx_runtime.jsxs)(Register_Wrapper,{children:[Object(jsx_runtime.jsx)(H2,{className:"reg-title",children:"Let’s get started"}),Object(jsx_runtime.jsx)(Register_RegisterForm,{})]})]});Register.__docgenInfo={description:"",methods:[],displayName:"Register"};__webpack_exports__.default=Register;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/pages/Register.js"]={name:"Register",docgenInfo:Register.__docgenInfo,path:"app/component/pages/Register.js"})},1464:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultSectionStory",(function(){return DefaultSectionStory})),__webpack_require__.d(__webpack_exports__,"NewsSectionStory",(function(){return NewsSectionStory})),__webpack_require__.d(__webpack_exports__,"WishlistSectionStory",(function(){return WishlistSectionStory}));var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),Mocker=__webpack_require__(94),mockWithRequest=__webpack_require__(82);class MockSection_MockSection extends Mocker.a{setOverrides(props){Object(mockWithRequest.c)(),Object(mockWithRequest.h)(props.sectionOverrides),Object(mockWithRequest.g)(props.reqOverrides)}}MockSection_MockSection.propTypes={sectionOverrides:prop_types_default.a.object,reqOverrides:prop_types_default.a.object,...Mocker.a.propTypes},MockSection_MockSection.defaultProps={sectionOverrides:{},reqOverrides:{},...Mocker.a.defaultProps};var components_MockSection=MockSection_MockSection,jsx_runtime=__webpack_require__(0);const SectionPage=__webpack_require__(1456).default;__webpack_exports__.default={title:"Section/Page",component:SectionPage};const DefaultSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{children:Object(jsx_runtime.jsx)(SectionPage,{})});DefaultSectionStory.storyName="Home section page",DefaultSectionStory.parameters={amp:{isEnabled:!0},waitFor:["svg.logo_from_independent"]};const NewsSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{sectionOverrides:{section:{name:"News",path:"/news",sourcePath:"news"}},children:Object(jsx_runtime.jsx)(SectionPage,{})});NewsSectionStory.storyName="News section page",NewsSectionStory.parameters={amp:{isEnabled:!0}};const WishlistSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{sectionOverrides:{section:{name:"Wishlist",path:"/wishlist",sourcePath:"wishlist"}},reqOverrides:{path:"/wishlist"},localsOverrides:{menu:{subMenu:{menu:[{title:"Homes",path:"/"},{title:"Kids",path:"/"},{title:"Books",path:"/"},{title:"Tech",path:"/"},{title:"Fashion & Beauty",path:"/"}]}}},children:Object(jsx_runtime.jsx)(SectionPage,{})});WishlistSectionStory.storyName="Wishlist section page",WishlistSectionStory.parameters={amp:{isEnabled:!0}},DefaultSectionStory.__docgenInfo={description:"",methods:[],displayName:"DefaultSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"DefaultSectionStory",docgenInfo:DefaultSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),NewsSectionStory.__docgenInfo={description:"",methods:[],displayName:"NewsSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"NewsSectionStory",docgenInfo:NewsSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),WishlistSectionStory.__docgenInfo={description:"",methods:[],displayName:"WishlistSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"WishlistSectionStory",docgenInfo:WishlistSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"})},161:function(module,__webpack_exports__,__webpack_require__){"use strict";var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(224),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_icons_chevronDown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(416),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0);const Fieldwrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  width: 100%;
  position: relative;
  margin-bottom: 22px;
  height: 56px;
  white-space: nowrap;

  &.inline {
    flex: ${props=>props.inlineFlexGrow||"1"} 1 110px;
    margin-right: 16px;
  }

  select {
    border-radius: 5px;
    position: relative;
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    font-size: 16px;
    line-height: 1.75rem;
    font-weight: normal;
    letter-spacing: normal;
    width: 100%;
    border: 1px solid ${props=>props.theme.color.formGrey};
    outline: none;
    background-color: ${props=>props.theme.color.white};
    white-space: nowrap;
    cursor: pointer;
    appearance: none;
    text-decoration: inherit;
    text-transform: inherit;
    box-sizing: border-box;
    height: 56px;
    padding: 10px 52px 10px 16px;
  }

  select:hover {
  }

  .error-text,
  .help-text {
    position: absolute;
    display: block;
    top: 60px;
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 0 0 0 16px;
    font-size: 12px;
    letter-spacing: normal;
    line-height: 1;
    z-index: 1;
    text-align: left;
  }

  .error-text {
    color: ${props=>props.theme.color.formError};
  }

  .user-invalid ~ .visible {
    opacity: 1;
    display: block;
  }

  .help-text {
    opacity: 0;
    color: ${props=>props.theme.color.font};
  }

  select:focus {
    outline: 0;
    ~ .help-text {
      opacity: 1;
    }
    ~ .error-text {
      opacity: 0;
    }
  }

  label {
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    color: ${props=>props.theme.color.formDefault};
    line-height: 1.15rem;
    left: 16px;
    right: initial;
    top: 31px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 16px;
    font-weight: ${props=>props.theme.fontWeight.light};
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    position: absolute;
    transform-origin: left top;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    overflow: hidden;
    will-change: transform;
    background: transparent;
  }

  select.valid {
    & ~ label {
      transform: translateY(-210%) scale(0.75);
      background: ${props=>props.theme.color.backgroundLight};
      padding: 0 4px;
    }
  }

  select.input-has-value ~ label {
    transform: translateY(-210%) scale(0.75);
    background: ${props=>props.theme.color.backgroundLight};
    padding: 0 4px;
  }

  select.user-invalid {
    border: 2px solid ${props=>props.theme.color.formError};
  }

  select:focus {
    border: 2px solid ${props=>props.theme.color.formFocus};
  }
`,Icon=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: absolute;

  transform: rotate(0deg);
  transform-origin: center center;
  transition: transform 0.3s;
  right: 16px;
  top: 21px;

  svg {
    fill: ${props=>props.theme.color.formGrey};
    width: 12px;
    height: 10px;
  }
`,Select=({fieldName:fieldName,fieldId:fieldId,options:options,displayName:displayName="",helperText:helperText="",fieldRequired:fieldRequired=!1,validationMsg:validationMsg="",defaultValue:defaultValue="",inlineFlexGrow:inlineFlexGrow="",className:className=""})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Fieldwrapper,{inlineFlexGrow:inlineFlexGrow,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(inlineFlexGrow?"inline":"",className),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select",{name:fieldName,id:fieldId,required:fieldRequired,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("form-select",{valid:defaultValue}),defaultValue:defaultValue,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option",{value:"",disabled:!0}),options]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Icon,{dangerouslySetInnerHTML:{__html:_icons_chevronDown__WEBPACK_IMPORTED_MODULE_3__.a}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label",{htmlFor:fieldId,children:displayName}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"mdc-line-ripple"}),validationMsg&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"error-text","visible-when-invalid":"valueMissing","validation-for":fieldId,children:validationMsg}),helperText&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"help-text",children:helperText})]});Select.propTypes={fieldName:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,fieldId:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,displayName:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,helperText:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,fieldRequired:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,validationMsg:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,inlineFlexGrow:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(Select)``},183:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return pageTitle})),__webpack_require__.d(__webpack_exports__,"b",(function(){return showAds}));var ramda__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(138),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73);const pageTitle=({article:article,section:section},siteName,domain)=>article?((article,siteName)=>{const title=Object(ramda__WEBPACK_IMPORTED_MODULE_0__.a)("titleSEO",article)||Object(ramda__WEBPACK_IMPORTED_MODULE_0__.a)("title",article);return title?`${title} | ${siteName}`:siteName})(article,siteName):section?((section,siteName)=>{const titleSEO=Object(ramda__WEBPACK_IMPORTED_MODULE_1__.a)(["section","extra","titleSEO"])(section),name=Object(ramda__WEBPACK_IMPORTED_MODULE_1__.a)(["section","name"])(section);return titleSEO||`${name} | ${siteName}`})(section,siteName):"Page not found | "+siteName,showAds=article=>{var _article$extra,_article$extra2;return!(!0===(null==article||null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isHideDisplayAds)||!0===(null==article||null===(_article$extra2=article.extra)||void 0===_article$extra2?void 0:_article$extra2.isDisableAllAds))}},184:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(3),Styles=__webpack_require__(5),jsx_runtime=__webpack_require__(0);const Wrapper=styled_components_browser_esm.default.div``,Button=styled_components_browser_esm.default.button`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 23px;
  box-shadow: 0 1px 0 0 ${props=>props.theme.color.primaryDark};
  background-color: ${props=>props.theme.color.primary};
  padding: 5px 18px 3px 17px;
  border-radius: 23px;
  font-size: 12px;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  text-transform: uppercase;
  color: white;
  margin-right: 6px;
  svg {
    position: relative;
    bottom: -6px;
    margin-right: 8px;
  }
  &.small {
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
    margin-right: 0;
    svg {
      position: relative;
      width: 10px;
      bottom: -6px;
      left: 5.4px;
      margin-right: 0;
    }
  }
  .showDesktop {
    display: none;
    @media ${Styles.c.tablet} {
      display: block;
    }
  }
  &.upvoted {
    animation: pulse 5s;
  }
  @keyframes pulse {
    0% {
      background-color: ${props=>props.theme.color.primary};
      box-shadow: 0 1px 0 0 ${props=>props.theme.color.primaryDark};
    }
    20% {
      background-color: #b8d54b;
      box-shadow: 0 1px 0 0 #93aa3c;
    }
    80% {
      background-color: #b8d54b;
      box-shadow: 0 1px 0 0 #93aa3c;
    }
    100% {
      background-color: ${props=>props.theme.color.primary};
      box-shadow: 0 1px 0 0 ${props=>props.theme.color.primaryDark};
    }
  }
`,UpvoteButton=({articleId:articleId,isSmallButton:isSmallButton})=>Object(jsx_runtime.jsx)(Wrapper,{children:Object(jsx_runtime.jsxs)(Button,{className:"upvote-button "+(isSmallButton?"small":""),"data-article-id":articleId,"data-vars-article-id":articleId,children:[Object(jsx_runtime.jsx)("svg",{width:"12",height:"24",viewBox:"0 0 12 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(jsx_runtime.jsx)("path",{d:"M4 8.5V24H7V8.5H11L5.5 0L0 8.5H4Z",fill:"white"})}),!isSmallButton&&Object(jsx_runtime.jsx)("span",{children:"Upvote"})]})});UpvoteButton.propTypes={isSmallButton:prop_types_default.a.bool,articleId:prop_types_default.a.string},UpvoteButton.__docgenInfo={description:"",methods:[],displayName:"UpvoteButton",props:{isSmallButton:{type:{name:"bool"},required:!1,description:""},articleId:{type:{name:"string"},required:!1,description:""}}};var library_UpvoteButton=UpvoteButton;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/UpvoteButton.js"]={name:"UpvoteButton",docgenInfo:UpvoteButton.__docgenInfo,path:"app/component/library/UpvoteButton.js"});const SocialShare_Wrapper=styled_components_browser_esm.default.div`
  display: inherit;
  align-items: center;
  & amp-social-share {
    border-radius: 50%;
    background-size: 80%;
    margin: 0 3px;
    width: 35px;
    height: 35px;
  }
  & .amp-social-share-email {
    background-color: ${props=>props.theme.color.primary};
    background-size: 80%;
  }
`;function SocialShare({title:title,titleSocial:titleSocial,className:className,size:size,types:types,pageURL:pageURL}){return Object(jsx_runtime.jsxs)(SocialShare_Wrapper,{className:className,children:[types.uv&&Object(jsx_runtime.jsx)(library_UpvoteButton,{isSmallButton:types.uv.isSmallButton,articleId:types.uv.articleId}),types.fb&&Object(jsx_runtime.jsx)("amp-social-share",{type:"facebook","data-param-app_id":"774315275936299",width:size,height:size,"aria-label":"Share to Facebook"}),types.tw&&Object(jsx_runtime.jsx)("amp-social-share",{type:"twitter",width:size,height:size,"aria-label":"Share to Twitter","data-param-text":titleSocial||title}),types.wp&&Object(jsx_runtime.jsx)("amp-social-share",{type:"whatsapp",width:size,height:size,"aria-label":"Share by WhatsApp","data-param-text":`${titleSocial||title} - ${pageURL}`}),types.email&&Object(jsx_runtime.jsx)("amp-social-share",{type:"email",width:size,height:size,"aria-label":"Share by email","data-param-subject":titleSocial||title})]})}SocialShare.propTypes={title:prop_types_default.a.string,titleSocial:prop_types_default.a.string,size:prop_types_default.a.any.isRequired,types:prop_types_default.a.object.isRequired,className:prop_types_default.a.string,pageURL:prop_types_default.a.string},SocialShare.__docgenInfo={description:"",methods:[],displayName:"SocialShare",props:{title:{type:{name:"string"},required:!1,description:""},titleSocial:{type:{name:"string"},required:!1,description:""},size:{type:{name:"any"},required:!0,description:""},types:{type:{name:"object"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},pageURL:{type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=SocialShare;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/SocialShare.js"]={name:"SocialShare",docgenInfo:SocialShare.__docgenInfo,path:"app/component/library/Article/SocialShare.js"})},186:function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props}))`
  height: 0;
`},222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(3),jsx_runtime=__webpack_require__(0);const AmpAd=({width:width,height:height,type:type,src:src,dataSlot:dataSlot,json:json,config:config,ampRefresh:ampRefresh,ampSizes:ampSizes,ampSizeValidation:ampSizeValidation,...props})=>Object(jsx_runtime.jsx)("amp-ad",{width:width,height:height,type:type,src:src,"data-multi-size":ampSizes,"data-slot":dataSlot,json:json?JSON.stringify(json):null,"rtc-config":config?JSON.stringify(config):null,"data-enable-refresh":ampRefresh,"data-multi-size-validation":ampSizeValidation,"data-block-on-consent":"_till_responded",...props});AmpAd.propTypes={width:prop_types_default.a.number.isRequired,height:prop_types_default.a.number.isRequired,type:prop_types_default.a.string.isRequired,dataSlot:prop_types_default.a.string.isRequired,src:prop_types_default.a.string,json:prop_types_default.a.object,config:prop_types_default.a.object,ampRefresh:prop_types_default.a.number,ampSizes:prop_types_default.a.string,ampSizeValidation:prop_types_default.a.bool},AmpAd.__docgenInfo={description:"",methods:[],displayName:"AmpAd",props:{width:{type:{name:"number"},required:!0,description:""},height:{type:{name:"number"},required:!0,description:""},type:{type:{name:"string"},required:!0,description:""},dataSlot:{type:{name:"string"},required:!0,description:""},src:{type:{name:"string"},required:!1,description:""},json:{type:{name:"object"},required:!1,description:""},config:{type:{name:"object"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampSizeValidation:{type:{name:"bool"},required:!1,description:""}}};var Ad=AmpAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Ad.js"]={name:"AmpAd",docgenInfo:AmpAd.__docgenInfo,path:"app/component/library/AMP/Ad.js"});var react=__webpack_require__(1),RequestProvider=__webpack_require__(10),config_config=__webpack_require__(298);const ConfigProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{const adProps=Object.keys(Ad.propTypes),config=config_config.a.getConfig();return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),config:{vendors:{...config.indexExchange?{indexexchange:{SITE_ID:config.indexExchange.siteId}}:{}},urls:["https://esi.amp.permutive.com/rtc?type=doubleclick"],timeoutMillis:750}})});const AmpStickyAd=({children:children})=>Object(jsx_runtime.jsx)("amp-sticky-ad",{layout:"nodisplay",children:children});AmpStickyAd.propTypes={children:prop_types_default.a.element},AmpStickyAd.__docgenInfo={description:"",methods:[],displayName:"AmpStickyAd",props:{children:{type:{name:"element"},required:!1,description:""}}};var StickyAd=AmpStickyAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/StickyAd.js"]={name:"AmpStickyAd",docgenInfo:AmpStickyAd.__docgenInfo,path:"app/component/library/AMP/StickyAd.js"});const TargetingJSONProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{var _ref,_article$hero,_article$hero$,_article$hero2,_article$hero2$;const adProps=Object.keys(Ad.propTypes),{article:article,section:section={}}=props.res.locals;return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),json:{targeting:{tile:props.id,gs_channels:(null==article?void 0:article.grapeshot)||(null==section?void 0:section.grapeshot)||[],docFormat:"amp",pagetype:"section",...article?{article:null===(_ref=article.remoteId||article.id)||void 0===_ref?void 0:_ref.replace(/\D/g,""),pagetype:"jw_player"===(null===(_article$hero=article.hero)||void 0===_article$hero||null===(_article$hero$=_article$hero[0])||void 0===_article$hero$?void 0:_article$hero$.type)?"video":(null===(_article$hero2=article.hero)||void 0===_article$hero2||null===(_article$hero2$=_article$hero2[0])||void 0===_article$hero2$?void 0:_article$hero2$.type)||""}:{}}}})});const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,AdIndex=styled_components_browser_esm.default.div`
  display: none;
`,AugmentedAmpAd=(WrappedComponent=>{const WrappedComponentWithAMPStickyAd=({ampStickyAd:ampStickyAd,...props})=>ampStickyAd?Object(jsx_runtime.jsx)(StickyAd,{children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}):Object(jsx_runtime.jsx)(WrappedComponent,{...props});return WrappedComponentWithAMPStickyAd.propTypes={...WrappedComponent.propTypes},WrappedComponentWithAMPStickyAd})((WrappedComponent=>props=>Object(jsx_runtime.jsx)(TargetingJSONProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))((WrappedComponent=Ad,props=>Object(jsx_runtime.jsx)(ConfigProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))));var WrappedComponent;const Ad_Ad=props=>{const{cleanAmp:cleanAmp,id:id,className:className,refreshAtIndex:refreshAtIndex,refreshStateId:refreshStateId,sizes:sizes,height:height,width:width,isVideo:isVideo,ampSizes:ampSizes,adUnitPathArr:adUnitPathArr,ampStickyAd:ampStickyAd,ampRefresh:ampRefresh,ampSizeValidation:ampSizeValidation}=props;return Object(jsx_runtime.jsx)(Wrapper,{className:className,children:cleanAmp?Object(jsx_runtime.jsx)(AugmentedAmpAd,{id:id,width:width,height:height,type:"doubleclick",dataSlot:"/"+adUnitPathArr.join("/"),"data-multi-size":ampSizes,ampSizeValidation:ampSizeValidation,ampStickyAd:ampStickyAd,ampSizes:ampSizes,ampRefresh:ampRefresh}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[refreshStateId&&Object(jsx_runtime.jsx)(AdIndex,{id:id+"_adIndex","amp-bind-text":`floor(${refreshStateId}.currentIndex / ${refreshAtIndex})`}),Object(jsx_runtime.jsx)("div",{"data-mpu":!0,"data-is-video":isVideo,"data-tile-name":id,"data-ad-unit-path":"/"+adUnitPathArr.join("/"),"data-sizes":sizes,"data-desktop-sizes":props["desktop-sizes"],"data-tablet-sizes":props["tablet-sizes"],"data-mobile-sizes":props["mobile-sizes"],"data-size-key":props["size-key"],"data-refresh-check":!!refreshStateId,"data-force-bulk":props["force-bulk"]})]})})};Ad_Ad.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool,id:prop_types_default.a.string.isRequired,sizes:prop_types_default.a.string,"desktop-sizes":prop_types_default.a.string,"tablet-sizes":prop_types_default.a.string,"mobile-sizes":prop_types_default.a.string,"size-key":prop_types_default.a.string,refreshAtIndex:prop_types_default.a.number,refreshStateId:prop_types_default.a.string,height:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),width:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),isVideo:prop_types_default.a.bool,"force-bulk":prop_types_default.a.bool,ampSizes:prop_types_default.a.string,ampRefresh:prop_types_default.a.number,adUnitPathArr:prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,ampStickyAd:prop_types_default.a.bool,ampSizeValidation:prop_types_default.a.bool},Ad_Ad.defaultProps={cleanAmp:!1,refreshAtIndex:1,height:250,width:300,ampStickyAd:!1,ampSizeValidation:!0,isVideo:!1},Ad_Ad.__docgenInfo={description:"",methods:[],displayName:"Ad",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},refreshAtIndex:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"250",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},width:{defaultValue:{value:"300",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},ampStickyAd:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ampSizeValidation:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},isVideo:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!0,description:""},sizes:{type:{name:"string"},required:!1,description:""},"desktop-sizes":{type:{name:"string"},required:!1,description:""},"tablet-sizes":{type:{name:"string"},required:!1,description:""},"mobile-sizes":{type:{name:"string"},required:!1,description:""},"size-key":{type:{name:"string"},required:!1,description:""},refreshStateId:{type:{name:"string"},required:!1,description:""},"force-bulk":{type:{name:"bool"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},adUnitPathArr:{type:{name:"arrayOf",value:{name:"string"}},required:!0,description:""}}};__webpack_exports__.default=Ad_Ad;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Ad.js"]={name:"Ad",docgenInfo:Ad_Ad.__docgenInfo,path:"app/component/library/Ads/Ad.js"})},223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return size})),__webpack_require__.d(__webpack_exports__,"a",(function(){return publicationConfig}));var _constants_publication__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(122),_theme_Styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const tabletBanner=[728,90],mobileBanner=[320,50],singleMPU=[300,250],thirdParty1x1=[1,1],gutterSmall=[120,600],gutterMedium=[160,600],doubleMPU=[300,600],size={TOP_BANNER:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[[970,250],tabletBanner]}],BOTTOM_BANNER:[{from:0,supportedSizes:[mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner,mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],SKIN:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[[4,4]]}],SINGLE_MPU:[{from:0,supportedSizes:[singleMPU]}],SINGLE_MPU_ONLY_MOBILE:[{from:0,supportedSizes:[singleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],SINGLE_MPU_ONLY_DESKTOP:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU]}],DOUBLE_MPU:[{from:0,supportedSizes:[singleMPU,doubleMPU]}],THIRD_PARTY_ARTICLE_BODY:[{from:0,supportedSizes:[singleMPU,thirdParty1x1]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU,thirdParty1x1]}],GUTTER:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.gutterSmall,supportedSizes:[gutterSmall]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.gutterMedium,supportedSizes:[gutterSmall,gutterMedium]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.gutterLarge,supportedSizes:[gutterSmall,gutterMedium,doubleMPU]}]},publicationConfig=(_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,{[_constants_publication__WEBPACK_IMPORTED_MODULE_0__.a]:{networkId:"71347885",adUnitHomepage:"_main_in100",thirdPartyUnitHomepage:"_partner_in100"}})},287:function(module,__webpack_exports__,__webpack_require__){"use strict";var _helpers_createImage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(58);__webpack_exports__.a=()=>({type:"article",id:"000",status:!0,title:"This is a title",titleShort:"This is a short title",lead:"This is the lead",sidebar:{data:{publication:{}},layoutSettings:[{type:"Ad"},{type:"Ad"}]},hero:[{type:"image",data:{title:"Old-Trafford-hosts-the-Manchester-derby.jpg",description:null,caption:"<p><em>This</em> is a hero global caption</p>",copyright:"Hero global copyright",credit:"Hero credit",alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.b)(0,0,150),id:"8291876",bundle:"remote_image",mid:1038,changed:"1588226995",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],sections:[{name:"news",path:"/news",id:"1099",uuid:"6b6b7f3a-60f8-4e09-ac62-5673ee0aa972",sourceId:"3399451",sourceName:"news",sourcePath:"news",changed:"1597822641"}],hierarchy:[{path:"./",name:"Crumb 1",sourcePath:"/crumb1"},{path:"./",name:"Crumb 2",sourcePath:"/crumb2"}],extra:{authorInfo:"London"},updated:"1588169959",publish:"1588169959",unPublish:"2145916800",isLiveBlog:!1,inlineImages:[],articleTypes:[],body:[{type:"markup",data:{markup:'<p dir="ltr">Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"listnumbered",data:{markup:'\n<ol>\n    <li>Ordered list line item one</li>\n    <li>second line with a <strong>strong</strong></li>\n    <li>third with a <strike>strike through</strike></li>\n    <li>fourth with a <a href="/">link</a></li>\n</ol>'}},{type:"related",data:{links:[{href:"/sport/football/millwall-fc-gary-rowett-tests-positive-covid-19-a4572795.html",title:"Millwall boss Rowett tests positive for Covid-19 before Barnsley clash"},{href:"/sport/football/millwall-fc-gary-rowett-tests-positive-covid-19-a4572795.html",title:"Millwall boss Rowett tests positive for Covid-19 before Barnsley clash"}]}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"H2",data:{markup:"<h2>Heading 2</h2>"},id:"mzofupwl"},{type:"H3",data:{markup:"<h3>Heading 3</h3>"},id:"mzofupwl"},{type:"H4",data:{markup:"<h4>Heading 4</h4>"},id:"mzofupwl"},{type:"H5",data:{markup:"<h5>Heading 5</h5>"},id:"mzofupwl"},{type:"H6",data:{markup:"<h6>Heading 6</h6>"},id:"mzofupwl"},{type:"infobox",data:{markup:"<p>This is where the content should go</p>",subHeadline:"This is the subheading",title:"Infobox title"}},{type:"listbulleted",data:{markup:'\n<ul>\n    <li>Bulleted list first line</li>\n    <li>second line with a <strong>strong</strong></li>\n    <li>third with a <strike>strike through</strike></li>\n    <li>fourth with a <a href="/">link</a></li>\n</ul>'}}],topics:[{name:"Topic 1",path:"",id:"1",uuid:"1"},{name:"Topic 2",path:"",id:"2",uuid:"2"},{name:"Topic 3",path:"",id:"3",uuid:"3"}]})},288:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div``,List=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.ul`
  display: none;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  width: 90%;
  .active {
    background-color: ${props=>props.theme.color.pinkContrast};
  }
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.mobileL} {
    display: flex;
  }
`,ListItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.li`
  border: 1px solid ${props=>props.theme.color.pinkContrast};
  margin: 0 6px 6px;
  padding: 4px 16px;
  font-family: ${props=>props.theme.fontFamily.articleFont};
  border-radius: 16px;
  line-height: initial;
  background-color: ${props=>props.theme.color.black};
  &:hover {
    background-color: ${props=>props.theme.color.pinkContrast};
  }
`,Link=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.a`
  color: ${props=>props.theme.color.white};
  font-size: 18px;
`,SubMenu=({subMenu:subMenu,currentURL:currentURL,className:className})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Wrapper,{className:className,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(List,{children:subMenu&&subMenu.menu.map(({path:path,title:title},i)=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ListItem,{className:currentURL.includes(path)&&"/wishlist"!==currentURL?"active ":" ",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Link,{href:path,children:title})},path+i))})});SubMenu.propTypes={subMenu:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,currentURL:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string},SubMenu.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{subMenu:{type:{name:"object"},required:!0,description:""},currentURL:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}},__webpack_exports__.a=SubMenu,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Menu/SubMenu.js"]={name:"SubMenu",docgenInfo:SubMenu.__docgenInfo,path:"app/component/library/Menu/SubMenu.js"})},290:function(module,__webpack_exports__,__webpack_require__){"use strict";const ColumnWrapper=__webpack_require__(3).default.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;__webpack_exports__.a=ColumnWrapper},291:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M16.8 14L28 25.2 25.2 28 14 16.8 2.9 28 0 25.2 11.2 14 0 2.8 2.9 0 14 11.2 25.2 0 28 2.8 16.8 14z"></path></svg>\n'},292:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></svg>\n'},293:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_icons_closeIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(291),_Ads_MPU__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(74),_util_page__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(183),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  .article-best {
    .stickyFooterRoot {
      display: none;
    }
  }
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2147483641;
  max-height: 100px;
  background-image: none;
  background-color: #fff;
  margin-bottom: 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  height: 50px;
  button {
    position: fixed;
    width: 32px;
    height: 34px;
    padding: 8px 8px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 12px 0 0 0;
    bottom: 50px;
    z-index: 12;
    @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.tablet} {
      width: 36px;
      height: 36px;
      bottom: 89px;
    }
  }
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.tablet} {
    height: 90px;
  }
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.laptop} {
    display: none;
  }
`,StickyFooter=({cleanAmp:cleanAmp,article:article,...rest})=>Object(_util_page__WEBPACK_IMPORTED_MODULE_5__.b)(article)?cleanAmp?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Ads_MPU__WEBPACK_IMPORTED_MODULE_4__.a,{id:"bottom_banner_0",width:320,height:50,cleanAmp:!0,ampStickyAd:!0,ampRefresh:30,...rest}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper,{id:"sticky-footer-root",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"sticky-ad-close-button-press",dangerouslySetInnerHTML:{__html:_icons_closeIcon__WEBPACK_IMPORTED_MODULE_3__.a}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Ads_MPU__WEBPACK_IMPORTED_MODULE_4__.a,{id:"bottom_banner_0","size-key":"BOTTOM_BANNER",className:"sticky","force-bulk":!0,...rest})]}):null;StickyFooter.propTypes={cleanAmp:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,article:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object},StickyFooter.__docgenInfo={description:"",methods:[],displayName:"StickyFooter",props:{cleanAmp:{type:{name:"bool"},required:!1,description:""},article:{type:{name:"object"},required:!1,description:""}}},__webpack_exports__.a=StickyFooter,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/StickyFooter.js"]={name:"StickyFooter",docgenInfo:StickyFooter.__docgenInfo,path:"app/component/library/StickyFooter.js"})},294:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(82),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(94);class MockStaticPageData extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.b)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.g)(props.reqOverrides)}}MockStaticPageData.propTypes={reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.propTypes},MockStaticPageData.defaultProps={reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.defaultProps},__webpack_exports__.a=MockStaticPageData},295:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={"United Kingdom":"^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$",Ireland:"[A-Za-z0-9 -_]*","United States of America":"(^\\d{5}(?: [-\\s]\\d{4})?$)",Australia:"[A-Za-z0-9 -_]*",Canada:"[A-Za-z0-9 -_]*",Afghanistan:"[A-Za-z0-9 -_]*",Albania:"[A-Za-z0-9 -_]*",Algeria:"[A-Za-z0-9 -_]*","American Samoa":"[A-Za-z0-9 -_]*",Andorra:"[A-Za-z0-9 -_]*",Angola:"^$",Anguilla:"[A-Za-z0-9 -_]*",Antarctica:"[A-Za-z0-9 -_]*","Antigua and Barbuda":"^$",Argentina:"[A-Za-z0-9 -_]*",Armenia:"[A-Za-z0-9 -_]*",Aruba:"^$",Austria:"[A-Za-z0-9 -_]*",Azerbaijan:"[A-Za-z0-9 -_]*",Bahamas:"^$",Bahrain:"[A-Za-z0-9 -_]*",Bangladesh:"[A-Za-z0-9 -_]*",Barbados:"[A-Za-z0-9 -_]*",Belarus:"[A-Za-z0-9 -_]*",Belgium:"[A-Za-z0-9 -_]*",Belize:"^$",Benin:"^$",Bermuda:"[A-Za-z0-9 -_]*",Bhutan:"[A-Za-z0-9 -_]*",Bolivia:"^$","Bosnia and Herzegovina":"[A-Za-z0-9 -_]*",Botswana:"^$","Bouvet Island":"[A-Za-z0-9 -_]*",Brazil:"[A-Za-z0-9 -_]*","British Indian Ocean Territory":"[A-Za-z0-9 -_]*","Brunei Darussalam":"[A-Za-z0-9 -_]*",Bulgaria:"[A-Za-z0-9 -_]*","Burkina Faso":"^$",Burundi:"^$",Cambodia:"[A-Za-z0-9 -_]*",Cameroon:"^$","Cape Verde":"[A-Za-z0-9 -_]*","Cayman Islands":"[A-Za-z0-9 -_]*","Central African Republic":"^$",Chad:"[A-Za-z0-9 -_]*",Chile:"[A-Za-z0-9 -_]*",China:"[A-Za-z0-9 -_]*","Christmas Island":"[A-Za-z0-9 -_]*","Cocos (Keeling) Islands":"[A-Za-z0-9 -_]*",Colombia:"[A-Za-z0-9 -_]*",Comoros:"^$",Congo:"^$","Congo, The Democratic Republic of The":"^$","Cook Islands":"^$","Costa Rica":"[A-Za-z0-9 -_]*","Cote D’Ivoire":"^$",Croatia:"[A-Za-z0-9 -_]*",Cuba:"[A-Za-z0-9 -_]*",Cyprus:"[A-Za-z0-9 -_]*","Czech Republic":"[A-Za-z0-9 -_]*",Denmark:"[A-Za-z0-9 -_]*",Djibouti:"^$",Dominica:"^$","Dominican Republic":"[A-Za-z0-9 -_]*","Easter Island":"[A-Za-z0-9 -_]*",Ecuador:"[A-Za-z0-9 -_]*",Egypt:"[A-Za-z0-9 -_]*","El Salvador":"[A-Za-z0-9 -_]*","Equatorial Guinea":"^$",Eritrea:"^$",Estonia:"[A-Za-z0-9 -_]*",Ethiopia:"[A-Za-z0-9 -_]*","Falkland Islands (Malvinas)":"[A-Za-z0-9 -_]*","Faroe Islands":"[A-Za-z0-9 -_]*",Fiji:"^$",Finland:"[A-Za-z0-9 -_]*",France:"[A-Za-z0-9 -_]*","French Guiana":"[A-Za-z0-9 -_]*","French Polynesia":"[A-Za-z0-9 -_]*","French Southern Territories":"^$",Gabon:"[A-Za-z0-9 -_]*",Gambia:"^$",Georgia:"[A-Za-z0-9 -_]*",Germany:"[A-Za-z0-9 -_]*",Ghana:"^$",Gibraltar:"[A-Za-z0-9 -_]*",Greece:"[A-Za-z0-9 -_]*",Greenland:"[A-Za-z0-9 -_]*",Grenada:"^$",Guadeloupe:"[A-Za-z0-9 -_]*",Guam:"[A-Za-z0-9 -_]*",Guatemala:"[A-Za-z0-9 -_]*",Guinea:"[A-Za-z0-9 -_]*","Guinea-bissau":"[A-Za-z0-9 -_]*",Guyana:"^$",Haiti:"[A-Za-z0-9 -_]*","Heard Island and Mcdonald Islands":"^$",Honduras:"[A-Za-z0-9 -_]*","Hong Kong":"^$",Hungary:"[A-Za-z0-9 -_]*",Iceland:"[A-Za-z0-9 -_]*",India:"[A-Za-z0-9 -_]*",Indonesia:"[A-Za-z0-9 -_]*",Iran:"[A-Za-z0-9 -_]*",Iraq:"[A-Za-z0-9 -_]*",Israel:"[A-Za-z0-9 -_]*",Italy:"[A-Za-z0-9 -_]*",Jamaica:"[A-Za-z0-9 -_]*",Japan:"[A-Za-z0-9 -_]*",Jordan:"[A-Za-z0-9 -_]*",Kazakhstan:"[A-Za-z0-9 -_]*",Kenya:"[A-Za-z0-9 -_]*",Kiribati:"^$","Korea, North":"[A-Za-z0-9 -_]*","Korea, South":"[A-Za-z0-9 -_]*",Kosovo:"[A-Za-z0-9 -_]*",Kuwait:"[A-Za-z0-9 -_]*",Kyrgyzstan:"[A-Za-z0-9 -_]*",Laos:"[A-Za-z0-9 -_]*",Latvia:"[A-Za-z0-9 -_]*",Lebanon:"[A-Za-z0-9 -_]*",Lesotho:"[A-Za-z0-9 -_]*",Liberia:"[A-Za-z0-9 -_]*","Libyan Arab Jamahiriya":"^$",Liechtenstein:"[A-Za-z0-9 -_]*",Lithuania:"[A-Za-z0-9 -_]*",Luxembourg:"[A-Za-z0-9 -_]*",Macau:"^$",Macedonia:"[A-Za-z0-9 -_]*",Madagascar:"[A-Za-z0-9 -_]*",Malawi:"^$",Malaysia:"[A-Za-z0-9 -_]*",Maldives:"[A-Za-z0-9 -_]*",Mali:"^$",Malta:"[A-Za-z0-9 -_]*","Marshall Islands":"[A-Za-z0-9 -_]*",Martinique:"[A-Za-z0-9 -_]*",Mauritania:"^$",Mauritius:"[A-Za-z0-9 -_]*",Mayotte:"[A-Za-z0-9 -_]*",Mexico:"[A-Za-z0-9 -_]*","Micronesia, Federated States of":"[A-Za-z0-9 -_]*","Moldova, Republic of":"[A-Za-z0-9 -_]*",Monaco:"[A-Za-z0-9 -_]*",Mongolia:"[A-Za-z0-9 -_]*",Montenegro:"[A-Za-z0-9 -_]*",Montserrat:"[A-Za-z0-9 -_]*",Morocco:"[A-Za-z0-9 -_]*",Mozambique:"[A-Za-z0-9 -_]*",Myanmar:"[A-Za-z0-9 -_]*",Namibia:"[A-Za-z0-9 -_]*",Nauru:"^$",Nepal:"[A-Za-z0-9 -_]*",Netherlands:"[A-Za-z0-9 -_]*","Netherlands Antilles":"^$","New Caledonia":"[A-Za-z0-9 -_]*","New Zealand":"[A-Za-z0-9 -_]*",Nicaragua:"[A-Za-z0-9 -_]*",Niger:"[A-Za-z0-9 -_]*",Nigeria:"[A-Za-z0-9 -_]*",Niue:"^$","Norfolk Island":"[A-Za-z0-9 -_]*","Northern Mariana Islands":"[A-Za-z0-9 -_]*",Norway:"[A-Za-z0-9 -_]*",Oman:"[A-Za-z0-9 -_]*",Pakistan:"[A-Za-z0-9 -_]*",Palau:"[A-Za-z0-9 -_]*","Palestinian Territory":"[A-Za-z0-9 -_]*",Panama:"[A-Za-z0-9 -_]*","Papua New Guinea":"[A-Za-z0-9 -_]*",Paraguay:"[A-Za-z0-9 -_]*",Peru:"[A-Za-z0-9 -_]*",Philippines:"[A-Za-z0-9 -_]*",Pitcairn:"[A-Za-z0-9 -_]*",Poland:"[A-Za-z0-9 -_]*",Portugal:"[A-Za-z0-9 -_]*","Puerto Rico":"[A-Za-z0-9 -_]*",Qatar:"^$",Reunion:"[A-Za-z0-9 -_]*",Romania:"[A-Za-z0-9 -_]*",Russia:"[A-Za-z0-9 -_]*",Rwanda:"^$","Saint Helena":"[A-Za-z0-9 -_]*","Saint Kitts and Nevis":"^$","Saint Lucia":"[A-Za-z0-9 -_]*","Saint Pierre and Miquelon":"[A-Za-z0-9 -_]*","Saint Vincent and The Grenadines":"[A-Za-z0-9 -_]*",Samoa:"[A-Za-z0-9 -_]*","San Marino":"[A-Za-z0-9 -_]*","Sao Tome and Principe":"^$","Saudi Arabia":"[A-Za-z0-9 -_]*",Senegal:"[A-Za-z0-9 -_]*","Serbia and Montenegro":"[A-Za-z0-9 -_]*",Seychelles:"^$","Sierra Leone":"^$",Singapore:"[A-Za-z0-9 -_]*",Slovakia:"[A-Za-z0-9 -_]*",Slovenia:"[A-Za-z0-9 -_]*","Solomon Islands":"^$",Somalia:"[A-Za-z0-9 -_]*","South Africa":"[A-Za-z0-9 -_]*","South Georgia and The South Sandwich Islands":"[A-Za-z0-9 -_]*",Spain:"[A-Za-z0-9 -_]*","Sri Lanka":"[A-Za-z0-9 -_]*",Sudan:"[A-Za-z0-9 -_]*",Suriname:"^$","Svalbard and Jan Mayen":"[A-Za-z0-9 -_]*",Swaziland:"[A-Za-z0-9 -_]*",Sweden:"[A-Za-z0-9 -_]*",Switzerland:"[A-Za-z0-9 -_]*",Syria:"^$",Taiwan:"[A-Za-z0-9 -_]*",Tajikistan:"[A-Za-z0-9 -_]*","Tanzania, United Republic of":"[A-Za-z0-9 -_]*",Thailand:"[A-Za-z0-9 -_]*","Timor-Leste":"^$",Togo:"^$",Tokelau:"^$",Tonga:"^$","Trinidad and Tobago":"[A-Za-z0-9 -_]*",Tunisia:"[A-Za-z0-9 -_]*",Turkey:"[A-Za-z0-9 -_]*",Turkmenistan:"[A-Za-z0-9 -_]*","Turks and Caicos Islands":"[A-Za-z0-9 -_]*",Tuvalu:"^$",Uganda:"^$",Ukraine:"[A-Za-z0-9 -_]*","United Arab Emirates":"^$","United States Minor Outlying Islands":"[A-Za-z0-9 -_]*",Uruguay:"[A-Za-z0-9 -_]*",Uzbekistan:"[A-Za-z0-9 -_]*",Vanuatu:"^$","Vatican City":"[A-Za-z0-9 -_]*",Venezuela:"[A-Za-z0-9 -_]*",Vietnam:"[A-Za-z0-9 -_]*","Virgin Islands, British":"[A-Za-z0-9 -_]*","Virgin Islands, U.S.":"[A-Za-z0-9 -_]*","Wallis and Futuna":"[A-Za-z0-9 -_]*","Western Sahara":"[A-Za-z0-9 -_]*",Yemen:"^$",Zambia:"[A-Za-z0-9 -_]*",Zimbabwe:"^$"}},298:function(module,__webpack_exports__,__webpack_require__){"use strict";var ConfigManager=__webpack_require__(761),ConfigManager_default=__webpack_require__.n(ConfigManager),publication=__webpack_require__(122);const publicationConfig={[publication.a]:{projectId:"5d79bce7-5d2b-427e-a6c4-b89b6c7bf048",apiKey:"ed467bcf-98ee-4ed9-894e-c49be4ab97e7",namespace:"esi"}};var manifest=__webpack_require__(762);const configManager=new ConfigManager_default.a({logoUrl:"/img/logo.png",feeds:{mmm:{src:"https://www.independent.co.uk/pwamp/layout_component/api-mmm",items:"articles"},indy100:{src:"https://www.independent.co.uk/pwamp/layout_component/api-i100",logo:"https://static.independent.co.uk/static-assets/i100.png"}},facebookAppId:"235586169789578",brightcove:{account:"624246174001",player:"BJXA5Px6f"},chartbeat:{uid:"62356"},comscore:{clientId:"10476312"},adobe:{reportSuiteId:Object({NODE_ENV:"production",NODE_PATH:"/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/node_modules:/var/lib/jenkins/workspace/node_modules:/var/lib/jenkins/node_modules:/var/lib/node_modules:/var/node_modules:/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/node_modules",STORYBOOK:"true",PUBLIC_URL:"."}).ADOBE_REPORT_SUITE_ID},dotmetrics:{other:6670},cmp:{enabled:"true"===Object({NODE_ENV:"production",NODE_PATH:"/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/node_modules:/var/lib/jenkins/workspace/node_modules:/var/lib/jenkins/node_modules:/var/lib/node_modules:/var/node_modules:/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/node_modules",STORYBOOK:"true",PUBLIC_URL:"."}).CMP_ENABLED},subdomain:{static:Object({NODE_ENV:"production",NODE_PATH:"/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/node_modules:/var/lib/jenkins/workspace/node_modules:/var/lib/jenkins/node_modules:/var/lib/node_modules:/var/node_modules:/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/node_modules",STORYBOOK:"true",PUBLIC_URL:"."}).INDY100_SUBDOMAIN_STATIC},gtm:{containerId:"GTM-M7RJWSG"},indexExchange:{siteId:"197231",scriptUrl:"//js-sec.indexww.com/ht/p/184658-179606859100175.js"},ga:{id:"UA-50984532-1"},manifest:manifest,taboola:{accountIds:{base:1035779},publisherId:"esimedia-i100",ampBelowArticleMode:"thumbnails-e1"},jwplayerPlayerIds:{default:{defaultPlayer:"0nWd1PuM",noAdsPlayer:"GtIMyXQx",sensitivePlayer:"AJlQKgBQ",commercialPlayer:"AJlQKgBQ",inlinePlayer:"GwvrN2jh"},amp:{defaultPlayer:"89QBnokE",noAdsPlayer:"u0THJEkR",sensitivePlayer:"NCF0w26J",commercialPlayer:"NCF0w26J",inlinePlayer:"eYGqGOrq"}},jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",commercialPlayerType:"clicktoplay",inlinePlayerType:"clicktoplay"},gigya:{api_key:Object({NODE_ENV:"production",NODE_PATH:"/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/node_modules:/var/lib/jenkins/workspace/node_modules:/var/lib/jenkins/node_modules:/var/lib/node_modules:/var/node_modules:/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/node_modules",STORYBOOK:"true",PUBLIC_URL:"."}).GIGYA_KEY,api_secret:Object({NODE_ENV:"production",NODE_PATH:"/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/react@6.1.20_ffac141ab1b8a9a993cb446abca2cd32/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/@storybook/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/.pnpm/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/node_modules:/var/lib/jenkins/workspace/node_modules:/var/lib/jenkins/node_modules:/var/lib/node_modules:/var/node_modules:/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/build.js/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/bin/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/react/node_modules:/var/lib/jenkins/workspace/Apps_Indy100_PWAMP_GitHub_PR-598/indy100-pwamp/node_modules/@storybook/node_modules",STORYBOOK:"true",PUBLIC_URL:"."}).GIGYA_SECRET},googleCaptchaV3Secret:"6LeBDuQZAAAAAHtqXbKl5-9Iv81U6cat8b8InKoF"});configManager.addPublication(publication.a,{description:"",permutive:(publication=>publicationConfig[publication]?publicationConfig[publication]:(console.error("No taboola config found for "+publication),{}))(publication.a),enableLiveblogAPI:!1,rssftpwfiltEnabled:!0,atexEnabled:!1,newsletterRSSEnabled:!1,appRSSEnabled:!1,nlaRSSEnabled:!0,gnFeedEnabled:!0,rssImageEnabled:!0,rssSmartEnabled:!0,rssPremiumEnabled:!1,rssGalleryEnabled:!1,rssVideoEnabled:!1,pugPigPremiumAPIEnabled:!1,enableKindleXML:!1});const sidebarSlot=[1,2,5],articleSlots=size=>Array.apply(null,{length:size}).map(Number.call,Number).map(n=>n+1);configManager.addAdConfig({ampAd:{type:"doubleclick","data-slot":"/8057/","data-multi-size-validation":"false","rtc-config":'{ "vendors": { "lotame": { "CLIENT_ID": "4810", "AD_NETWORK": "DC" } } }',json:'{"targeting":{"pos":[], "test": true }}'},sidebarSlot:sidebarSlot,articleSlot:articleSlots(10).filter(n=>!sidebarSlot.includes(n)),cleanAmpArticleSlot:articleSlots(10)});__webpack_exports__.a=configManager},411:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleContent",(function(){return ArticleContent})),__webpack_require__.d(__webpack_exports__,"WishListSubMenu",(function(){return WishListSubMenu}));var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(3),Helmet=__webpack_require__(42),themes=__webpack_require__(766),RequestProvider=__webpack_require__(10),Styles=__webpack_require__(5),SubMenu=__webpack_require__(288),helper=__webpack_require__(289),Brightcove=__webpack_require__(767),Brightcove_default=__webpack_require__.n(Brightcove),jsx_runtime=__webpack_require__(0);const Brightcove_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,BrightcoveEmbed=props=>{const{data:data,theme:theme}=props;return Object(jsx_runtime.jsx)(Brightcove_Wrapper,{children:Object(jsx_runtime.jsx)(Brightcove_default.a,{data:data,"data-param-brand-colour":theme.color.primary})})};BrightcoveEmbed.propTypes={data:prop_types_default.a.any.isRequired,theme:prop_types_default.a.object.isRequired},BrightcoveEmbed.__docgenInfo={description:"",methods:[],displayName:"BrightcoveEmbed",props:{data:{type:{name:"any"},required:!0,description:""},theme:{type:{name:"object"},required:!0,description:""}}};var Embeds_Brightcove=Object(styled_components_browser_esm.withTheme)(BrightcoveEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Brightcove.js"]={name:"BrightcoveEmbed",docgenInfo:BrightcoveEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Brightcove.js"});var Youtube=__webpack_require__(768),Youtube_default=__webpack_require__.n(Youtube);const Youtube_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,YoutubeEmbed=({data:data})=>Object(jsx_runtime.jsx)(Youtube_Wrapper,{children:Object(jsx_runtime.jsx)(Youtube_default.a,{data:data})});YoutubeEmbed.propTypes={data:prop_types_default.a.any.isRequired},YoutubeEmbed.__docgenInfo={description:"",methods:[],displayName:"YoutubeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Youtube=YoutubeEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Youtube.js"]={name:"YoutubeEmbed",docgenInfo:YoutubeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Youtube.js"});var Image=__webpack_require__(81),Image_default=__webpack_require__.n(Image),util_url=__webpack_require__(75);const ImageWrapper=styled_components_browser_esm.default.figure`
  margin: 0;
  & img {
    object-fit: cover;
  }
  p {
    display: inline;
    font-size: 16px;
    line-height: inherit;
    margin: 0;
  }
`,HeroCaption=styled_components_browser_esm.default.figcaption`
  color: ${props=>props.theme.color.white};
  background: ${props=>props.theme.color.darkContrast};
  font-size: ${props=>props.theme.fontSize.caption};
  font-weight: ${props=>props.theme.fontWeight.normal};
  text-align: left;
  padding: 8px 14px;
  > span:nth-child(2) {
    margin-left: 0.2em;
  }
`,Caption=styled_components_browser_esm.default.figcaption`
  color: ${props=>props.theme.color.fontGrey};
  font-size: ${props=>props.theme.fontSize.list};
  line-height: 18px;
  padding: 2px 0;
  text-align: left;
  > span:nth-child(2) {
    margin-left: 0.2em;
  }
`,ArticleImage=({data:{url:url,caption:originalCaption,copyright:originalCopyright,localCaption:localCaption,localCopyright:localCopyright,width:width,height:height},isHero:isHero,srcSet:srcSet,children:children,showCaption:showCaption,customHeight:customHeight,customWidth:customWidth})=>{const caption=localCaption||originalCaption,copyright=localCopyright||originalCopyright;return url?Object(jsx_runtime.jsxs)(ImageWrapper,{children:[Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:""+Object(util_url.a)(url,Object(util_url.b)(982,726)),alt:caption,height:height||customHeight||726,width:width||customWidth||982,srcset:url.startsWith("data:")?null:srcSet.map(size=>`${Object(util_url.a)(url,Object(util_url.b)(size))} ${size}w`).join(", "),layout:"responsive"}),children&&children,showCaption&&(caption||copyright)&&(isHero?Object(jsx_runtime.jsxs)(HeroCaption,{children:[caption&&Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:caption}}),copyright&&Object(jsx_runtime.jsxs)("span",{className:"copyright",children:["(",copyright,")"]})]}):Object(jsx_runtime.jsxs)(Caption,{children:[caption&&Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:caption}}),copyright&&Object(jsx_runtime.jsxs)("span",{className:"copyright",children:["(",copyright,")"]})]}))]}):""};ArticleImage.propTypes={data:prop_types_default.a.object.isRequired,isHero:prop_types_default.a.bool,srcSet:prop_types_default.a.array.isRequired,children:prop_types_default.a.any,theme:prop_types_default.a.string,showCaption:prop_types_default.a.bool,customWidth:prop_types_default.a.number,customHeight:prop_types_default.a.number},ArticleImage.defaultProps={theme:"default",children:null,showCaption:!0},ArticleImage.__docgenInfo={description:"",methods:[],displayName:"ArticleImage",props:{theme:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},children:{defaultValue:{value:"null",computed:!1},type:{name:"any"},required:!1,description:""},showCaption:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},data:{type:{name:"object"},required:!0,description:""},isHero:{type:{name:"bool"},required:!1,description:""},srcSet:{type:{name:"array"},required:!0,description:""},customWidth:{type:{name:"number"},required:!1,description:""},customHeight:{type:{name:"number"},required:!1,description:""}}};var Embeds_Image=ArticleImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Image.js"]={name:"ArticleImage",docgenInfo:ArticleImage.__docgenInfo,path:"app/component/library/Article/Embeds/Image.js"});const PolarImage_ImageWrapper=styled_components_browser_esm.default.figure`
  margin: 0 0 20px 0;

  & img {
    max-width: 100%;
    height: auto;
  }
`,PolarImage_Caption=styled_components_browser_esm.default.figcaption`
  color: ${props=>props.theme.color.fontLight};
  text-align: left;
  font-size: 12px;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  line-height: 20px;
  padding: 6px 0;
`;function PolarImage(){return Object(jsx_runtime.jsxs)(PolarImage_ImageWrapper,{children:[Object(jsx_runtime.jsx)("img",{id:"native-content-media",src:"",alt:""}),Object(jsx_runtime.jsxs)(PolarImage_Caption,{children:[Object(jsx_runtime.jsx)("h4",{id:"native-content-media-caption"}),Object(jsx_runtime.jsx)("h4",{id:"native-content-media-credits"})]})]})}PolarImage.__docgenInfo={description:"",methods:[],displayName:"PolarImage"};var ThirdParty_PolarImage=PolarImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/ThirdParty/PolarImage.js"]={name:"PolarImage",docgenInfo:PolarImage.__docgenInfo,path:"app/component/library/ThirdParty/PolarImage.js"});var JWPlayer=__webpack_require__(769),JWPlayer_default=__webpack_require__.n(JWPlayer);const VideoMeta=playerData=>{var _playerData$data,_playerData$data$extr;const widestMp4=(data=>{var _data$data,_data$data$extra;const sources=null==data||null===(_data$data=data.data)||void 0===_data$data||null===(_data$data$extra=_data$data.extra)||void 0===_data$data$extra?void 0:_data$data$extra.sources;let widestMp4,w=0;return sources&&sources.forEach(source=>{source.width>w&&"video/mp4"===source.type&&(w=source.width,widestMp4=source)}),widestMp4})(playerData),duration=null==playerData||null===(_playerData$data=playerData.data)||void 0===_playerData$data||null===(_playerData$data$extr=_playerData$data.extra)||void 0===_playerData$data$extr?void 0:_playerData$data$extr.duration;return Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[duration&&Object(jsx_runtime.jsx)("meta",{property:"og:video:duration",content:duration}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video",content:widestMp4.file}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:width",content:widestMp4.width}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:height",content:widestMp4.height}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:type",content:"video/mp4"})]})};VideoMeta.propTypes={data:prop_types_default.a.object.isRequired},VideoMeta.__docgenInfo={description:"",methods:[],displayName:"VideoMeta",props:{data:{type:{name:"object"},required:!0,description:""}}};var Head_VideoMeta=VideoMeta;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Head/VideoMeta.js"]={name:"VideoMeta",docgenInfo:VideoMeta.__docgenInfo,path:"app/component/library/Head/VideoMeta.js"});const JWPlayer_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,getPlayerIdAndType=(playerIds,props)=>{const{configuration:{jwplayerPlayerTypes:jwplayerPlayerTypes},isHero:isHero=!1,isCommercial:isCommercial=!1,isSensitive:isSensitive=!1}=props;return isCommercial?{playerId:playerIds.commercialPlayer,playerType:jwplayerPlayerTypes.commercialPlayerType}:isSensitive?{playerId:playerIds.sensitivePlayer,playerType:jwplayerPlayerTypes.sensitivePlayerType}:isHero?{playerId:playerIds.defaultPlayer,playerType:jwplayerPlayerTypes.defaultPlayerType}:{playerId:playerIds.inlinePlayer,playerType:jwplayerPlayerTypes.inlinePlayerType}},JWPlayerEmbed=props=>{const{data:data,isHero:isHero=!1}=props,id=(({id:id,mediaid:mediaid})=>id||mediaid)(data),{playerId:playerId,playerType:playerType}=(props=>{const{configuration:{jwplayerPlayerIds:jwplayerPlayerIds},res:{locals:{cleanAmp:cleanAmp}}}=props;return getPlayerIdAndType(cleanAmp?jwplayerPlayerIds.amp:jwplayerPlayerIds.default,props)})(props),customParams=((props,videoId,playerType)=>{const{jsGlobals:{gs_channels:gs_channels,topictags:topictags,pageId:pageId}}=props,numericPageId=pageId&&Number.isNaN(pageId)?pageId.replace(/\D/g,""):pageId;return encodeURIComponent(`videoID=${videoId}&article=${numericPageId}&gs_channels=${gs_channels&&gs_channels.join()}&playertype=${playerType}&topictags=${topictags&&topictags.join()}`)})(props,id,playerType),adUnit=(props=>{const{jsGlobals:{videoAdUnitPath:videoAdUnitPath}}=props;return videoAdUnitPath})(props);return Object(jsx_runtime.jsxs)(JWPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Head_VideoMeta,{data:data}),Object(jsx_runtime.jsx)(JWPlayer_default.a,{data:{id:id,...data},playerId:playerId,playerType:playerType,useAmpIframe:!0,placeholder:!0,ampIframeSrc:"/jwplayer-amp-video-iframe.html",useIframe:!isHero,runJWPlayerSetup:!1,"data-param-customparams":customParams,"data-param-dunit":adUnit})]})};JWPlayerEmbed.propTypes={data:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired,isHero:prop_types_default.a.bool,isCommercial:prop_types_default.a.bool,isSensitive:prop_types_default.a.bool,cleanAmp:prop_types_default.a.bool},JWPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"JWPlayerEmbed",props:{data:{type:{name:"object"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""},isHero:{type:{name:"bool"},required:!1,description:""},isCommercial:{type:{name:"bool"},required:!1,description:""},isSensitive:{type:{name:"bool"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var Embeds_JWPlayer=Object(RequestProvider.withRequest)(JWPlayerEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/JWPlayer.js"]={name:"JWPlayerEmbed",docgenInfo:JWPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/JWPlayer.js"});var heroType=__webpack_require__(61),services_article=__webpack_require__(85);function Hero({className:className,hero:hero,isCommercial:isCommercial=!1,isSensitive:isSensitive=!1}){return(hero=>{if(!hero)return null;switch(hero.type){case heroType.e:return Object(jsx_runtime.jsx)(Embeds_JWPlayer,{className:className,data:hero.data,isHero:!0,isCommercial:isCommercial,isSensitive:isSensitive});case heroType.a:return Object(jsx_runtime.jsx)(Embeds_Brightcove,{data:hero.data});case heroType.g:return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:hero.data});case heroType.d:return Object(jsx_runtime.jsx)(Embeds_Image,{data:hero.data,srcSet:[320,640,990],isHero:!0});case heroType.f:return Object(jsx_runtime.jsx)(ThirdParty_PolarImage,{});default:return null}})(Object(services_article.d)(hero))}Hero.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{isCommercial:{defaultValue:{value:"false",computed:!1},required:!1},isSensitive:{defaultValue:{value:"false",computed:!1},required:!1}}};var Article_Hero=Hero;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Hero.js"]={name:"Hero",docgenInfo:Hero.__docgenInfo,path:"app/component/library/Article/Hero.js"});const Headline=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("h1",{className:className,children:children}))`
  margin: 0 0 12px;
  font-size: 32px;
  line-height: 36px;
  font-family: ${props=>props.theme.fontFamily.articleFont};
  font-weight: normal;
  @media ${Styles.c.tablet} {
    margin: 25px 50px;
    font-size: 45px;
    line-height: 60px;
  }
`;Headline.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var Article_Headline=Headline,moment_timezone=__webpack_require__(185),moment_timezone_default=__webpack_require__.n(moment_timezone);const FormattedDate=({date:date,layout:layout,width:width,height:height})=>{const unixDate=0!==date?moment_timezone_default.a.unix(date):moment_timezone_default()(),formattedDate=unixDate.tz("Europe/London").format("dddd DD MMMM YYYY HH:mm"),dateStr=unixDate.toISOString();return Object(jsx_runtime.jsx)("amp-timeago",{layout:layout||"fixed-height",datetime:dateStr,cutoff:"604800",locale:"en",width:width,height:height,children:formattedDate})};FormattedDate.propTypes={date:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]).isRequired,layout:prop_types_default.a.string,width:prop_types_default.a.number,height:prop_types_default.a.number.isRequired},FormattedDate.__docgenInfo={description:"",methods:[],displayName:"FormattedDate",props:{date:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!0,description:""},layout:{type:{name:"string"},required:!1,description:""},width:{type:{name:"number"},required:!1,description:""},height:{type:{name:"number"},required:!0,description:""}}};var Embeds_FormattedDate=FormattedDate;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/FormattedDate.js"]={name:"FormattedDate",docgenInfo:FormattedDate.__docgenInfo,path:"app/component/library/Article/Embeds/FormattedDate.js"});var SocialShare=__webpack_require__(184);const spacing=`\n  &::before {\n    color: ${Styles.e.default.color.metaGrey};\n    content: '|';\n    margin-left: 6px;\n    margin-right: 6px;\n  }\n`,ArticleMeta_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 16px;
  amp-social-share {
    background-size: 60%;
  }
`,Strap=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.primary};
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  justify-content: center;
  margin-bottom: 16px;
  amp-timeago {
    color: ${props=>props.theme.color.metaGrey};
    ${spacing}
  }
`,Section=styled_components_browser_esm.default.a`
  text-transform: capitalize;
  ${spacing}

  &:hover {
    color: ${props=>props.theme.color.linkHover};
  }
`,Authors=styled_components_browser_esm.default.span``,AuthorLink=styled_components_browser_esm.default.a`
  &::after {
    content: ', ';
  }

  &:last-child::after {
    content: none;
  }

  &:hover {
    color: ${props=>props.theme.color.linkHover};
  }
`,AuthorTwitterLink=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.metaGrey};
  text-decoration: none;
  ${spacing}

  &:hover {
    color: ${props=>props.theme.color.linkHover};
  }
`,ArticleMetaSocialShare=Object(styled_components_browser_esm.default)(SocialShare.a)`
  margin: 16px 0;
  & amp-social-share {
    margin: 0 6px;
  }
`,ArticleMetaSocialShareDesktop=Object(styled_components_browser_esm.default)(({className:className,...props})=>Object(jsx_runtime.jsx)("div",{className:className,children:Object(jsx_runtime.jsx)(ArticleMetaSocialShare,{...props})}))`
  display: none;
  @media ${Styles.c.tablet} {
    display: flex;
  }
`,ArticleMetaSocialShareMobile=Object(styled_components_browser_esm.default)(({className:className,...props})=>Object(jsx_runtime.jsx)("div",{className:className,children:Object(jsx_runtime.jsx)(ArticleMetaSocialShare,{...props})}))`
  display: flex;
  @media ${Styles.c.tablet} {
    display: none;
  }
`,ArticleMeta=props=>{const{configuration:configuration,className:className,article:article}=props;let authors=article.authors&&article.authors.map(a=>a.firstName&&a.lastName?Object(jsx_runtime.jsxs)(AuthorLink,{href:a.path,children:[a.firstName," ",a.lastName]},a.id):Object(jsx_runtime.jsx)(AuthorLink,{href:a.path,children:a.name},a.id)),authorTwitterLink=article.authors&&article.authors.filter(({twitter:twitter})=>twitter).map(a=>Object(jsx_runtime.jsxs)(AuthorTwitterLink,{href:"https://twitter.com/"+a.twitter,children:["@",a.twitter]},a.id)),section=article.sections&&article.sections.slice(0,1).map(s=>Object(jsx_runtime.jsx)(Section,{href:s.path,children:s.name},s.id));const dateToShowInTimestamp=Object(services_article.b)(article);return Object(jsx_runtime.jsxs)(ArticleMeta_Wrapper,{className:className,children:[Object(jsx_runtime.jsxs)(Strap,{children:[authors&&Object(jsx_runtime.jsx)(Authors,{children:authors}),authorTwitterLink,Object(jsx_runtime.jsx)(Embeds_FormattedDate,{date:dateToShowInTimestamp,layout:"fixed-height",height:20,configuration:configuration}),section&&section]}),Object(jsx_runtime.jsx)(ArticleMetaSocialShareMobile,{pageURL:configuration.baseUrl+article.path,size:35,title:article.title,titleSocial:article.titleSocial,types:{fb:{},tw:{},wp:{},email:{},uv:{articleId:article.id}}}),Object(jsx_runtime.jsx)(ArticleMetaSocialShareDesktop,{pageURL:configuration.baseUrl+article.path,size:48,title:article.title,titleSocial:article.titleSocial,types:{fb:{},tw:{},wp:{},email:{},uv:{articleId:article.id}}})]})};ArticleMeta.propTypes={className:prop_types_default.a.string,configuration:prop_types_default.a.object.isRequired,article:prop_types_default.a.any.isRequired,lang:prop_types_default.a.string},ArticleMeta.__docgenInfo={description:"",methods:[],displayName:"ArticleMeta",props:{className:{type:{name:"string"},required:!1,description:""},configuration:{type:{name:"object"},required:!0,description:""},article:{type:{name:"any"},required:!0,description:""},lang:{type:{name:"string"},required:!1,description:""}}};var Article_ArticleMeta=Object(RequestProvider.withRequest)(ArticleMeta);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/ArticleMeta.js"]={name:"ArticleMeta",docgenInfo:ArticleMeta.__docgenInfo,path:"app/component/library/Article/ArticleMeta.js"});var moment=__webpack_require__(6),moment_default=__webpack_require__.n(moment);const LiveCapsule_Wrapper=styled_components_browser_esm.default.div`
  background: ${props=>props.theme.color.liveblog};
  display: flex;
  justify-content: center;
  margin: 0 -12px 12px;
  padding: 12px 0;
  @media ${Styles.c.tablet} {
    margin-left: 0;
    margin-right: 0;
    margin-top: 16px;
    pading-bottom: 16px;
    padding-top: 16px;
  }
`,Icon=styled_components_browser_esm.default.span`
  height: 26px;
  margin-top: -3px;
`,LiveText=styled_components_browser_esm.default.span`
  font-size: 20px;
  line-height: 1.3;
  margin-right: 8px;
`,UpdatedText=styled_components_browser_esm.default.span`
  &:after {
    content: ' ';
    white-space: pre;
  }
`,UpdateTime=styled_components_browser_esm.default.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  height: 24px;
  padding-top: 2px;
`,LiveCapsule=Object(styled_components_browser_esm.default)(({className:className,updated:updated})=>Object(jsx_runtime.jsxs)(LiveCapsule_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(Icon,{dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 38 25" width="36" height="26"><path d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266 9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281 9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z"/></svg>'}}),Object(jsx_runtime.jsx)(LiveText,{children:"LIVE"}),Object(jsx_runtime.jsxs)(UpdateTime,{children:[Object(jsx_runtime.jsx)(UpdatedText,{children:"Updated"}),Object(jsx_runtime.jsx)("amp-timeago",{height:"16",layout:"fixed-height",datetime:moment_default.a.unix(updated).toISOString(),locale:"en",children:updated})]})]}))``;LiveCapsule.propTypes={className:prop_types_default.a.string};var Article_LiveCapsule=LiveCapsule;const Header_Wrapper=styled_components_browser_esm.default.header``,Header=Object(styled_components_browser_esm.default)(props=>{const{className:className,article:article,article:{title:title,hero:hero,isLiveBlog:isLiveBlog}}=props;return Object(jsx_runtime.jsxs)(Header_Wrapper,{className:className,children:[isLiveBlog&&Object(jsx_runtime.jsx)(Article_LiveCapsule,{updated:Object(helper.getLatestUpdateTime)(article)}),Object(jsx_runtime.jsx)(Article_Headline,{children:title}),Object(jsx_runtime.jsx)(Article_ArticleMeta,{}),Object(jsx_runtime.jsx)(Article_Hero,{hero:hero})]})})`
  display: flex;
  flex-direction: column;
  text-align: center;
`;Header.propTypes={className:prop_types_default.a.string,article:prop_types_default.a.object.isRequired};var Article_Header=Header,ColumnWrapper=__webpack_require__(290),Ad=__webpack_require__(222),MPU=__webpack_require__(74);const Container=styled_components_browser_esm.default.div`
  .markup_ad {
    max-width: 100%;
    justify-content: center;
    display: flex;
    background-color: #ececec;
    position: relative;
    margin: 0 auto;
    clear: both;

    @media (max-width: 530px) {
      display: flex;
      justify-content: center;
      float: none;
      max-width: 320px;
      margin: 0 auto;
    }
  }
`,MarkupAds=props=>{const className=props.className||"markup_ad";return Object(jsx_runtime.jsx)(Container,{children:Object(jsx_runtime.jsx)(MPU.a,{...props,className:className})})};MarkupAds.propTypes={...Ad.default.propTypes},MarkupAds.__docgenInfo={description:"",methods:[],displayName:"MarkupAds",composes:["../../Ads/Ad"]};var MarkupAd=MarkupAds;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/MarkupAd.js"]={name:"MarkupAds",docgenInfo:MarkupAds.__docgenInfo,path:"app/component/library/Article/Ads/MarkupAd.js"});var Dugout=__webpack_require__(770),Dugout_default=__webpack_require__.n(Dugout);const VideoCaption_Caption=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("div",{className:className,children:children}))`
  color: ${props=>props.theme.color.indyBaseLight1};
  background: ${props=>props.theme.color.indyOffWhite};
  font-size: ${props=>props.theme.fontSize.list};
  font-weight: ${props=>props.theme.fontWeight.thin};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding: 6px 8px;
`;VideoCaption_Caption.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var VideoCaption=VideoCaption_Caption;const DugoutPlayer_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,DugoutPlayerEmbed=({data:data})=>Object(jsx_runtime.jsxs)(DugoutPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Dugout_default.a,{data:data}),data.localCaption&&Object(jsx_runtime.jsx)(VideoCaption,{children:data.localCaption})]});DugoutPlayerEmbed.propTypes={data:prop_types_default.a.any.isRequired},DugoutPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"DugoutPlayerEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var DugoutPlayer=DugoutPlayerEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/DugoutPlayer.js"]={name:"DugoutPlayerEmbed",docgenInfo:DugoutPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/DugoutPlayer.js"});var Playbuzz=__webpack_require__(771),Playbuzz_default=__webpack_require__.n(Playbuzz);const Playbuzz_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,PlayBuzzEmbed=({data:data})=>Object(jsx_runtime.jsx)(Playbuzz_Wrapper,{children:Object(jsx_runtime.jsx)(Playbuzz_default.a,{data:data})});PlayBuzzEmbed.propTypes={data:prop_types_default.a.any.isRequired},PlayBuzzEmbed.__docgenInfo={description:"",methods:[],displayName:"PlayBuzzEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Playbuzz=PlayBuzzEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Playbuzz.js"]={name:"PlayBuzzEmbed",docgenInfo:PlayBuzzEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Playbuzz.js"});var react=__webpack_require__(1),uniqueId=__webpack_require__(772),uniqueId_default=__webpack_require__.n(uniqueId);var icons_Gallery=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="#EC1A2E"><path d="M9 9c0-.552.448-1 1.001-1 .553 0 .999.448.999 1s-.446 1-.999 1C9.448 10 9 9.552 9 9zm6.2 0l-1.7 2.6-1.3-1.6L9 14h10l-3.8-5zM24 4v14H4v-3H0V0h21v4h3zM4 13V4h15V2H2v11h2zm18-7H6v10h16V6z" fill-rule="nonzero"/></svg>\n'}}))`
  display: flex;
  align-items: center;
  width: 1em;
`,Lightbox=__webpack_require__(773),Lightbox_default=__webpack_require__.n(Lightbox),Carousel=__webpack_require__(774),Carousel_default=__webpack_require__.n(Carousel),closeIcon=__webpack_require__(291);var icons_Close=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:closeIcon.a}}))`
  display: flex;
  align-items: center;
  width: 1em;
`;const GalleryImage_Wrapper=styled_components_browser_esm.default.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media ${Styles.c.laptop} {
    flex-direction: row;
  }
`,GalleryImage_ImageWrapper=styled_components_browser_esm.default.div`
  flex-grow: 1;
  amp-img {
    margin: 0 auto;
    height: 100%;
  }
  img {
    object-fit: contain;
  }
`,GalleryImage_Caption=styled_components_browser_esm.default.figcaption`
  background: ${props=>props.theme.color.bkgLight};
  padding: 16px;
  @media ${Styles.c.tablet} {
    flex-grow: 0;
    width: 50%;
    min-height: 288px;
  }
  @media ${Styles.c.laptop} {
    width: auto;
    flex-basis: 308px;
    padding-bottom: 110px;
  }
`,GalleryImage_Header=styled_components_browser_esm.default.header`
  margin-bottom: 1em;
`,Count=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.primary};
  font-weight: ${props=>props.theme.fontWeight.bold};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 20px;
  margin-right: 10px;
`,Title=styled_components_browser_esm.default.h2`
  display: inline;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 20px;
`,Copyright=styled_components_browser_esm.default.p`
  color: ${props=>props.theme.color.fontGrey};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-style: italic;
`,Description=styled_components_browser_esm.default.p`
  overflow-y: scroll;
`,GalleryImage=({data:{url:url,title:title,caption:caption,description:description,copyright:copyright},srcSet:srcSet,count:count,delta:delta})=>Object(jsx_runtime.jsxs)(GalleryImage_Wrapper,{children:[Object(jsx_runtime.jsx)(GalleryImage_ImageWrapper,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?width=640",alt:caption,srcset:url.startsWith("data:")?null:srcSet.map(size=>`${url}?width=${size} ${size}w`).join(", "),layout:"flex-item"})}),Object(jsx_runtime.jsxs)(GalleryImage_Caption,{children:[Object(jsx_runtime.jsxs)(GalleryImage_Header,{children:[Object(jsx_runtime.jsxs)(Count,{children:[delta+1,"/",count]}),Object(jsx_runtime.jsx)(Title,{children:title})]}),Object(jsx_runtime.jsx)(Description,{children:description||caption}),Object(jsx_runtime.jsx)(Copyright,{children:copyright})]})]});GalleryImage.propTypes={data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired,count:prop_types_default.a.number.isRequired,delta:prop_types_default.a.number.isRequired},GalleryImage.__docgenInfo={description:"",methods:[],displayName:"GalleryImage",props:{data:{type:{name:"object"},required:!0,description:""},srcSet:{type:{name:"array"},required:!0,description:""},count:{type:{name:"number"},required:!0,description:""},delta:{type:{name:"number"},required:!0,description:""}}};var Embeds_GalleryImage=GalleryImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/GalleryImage.js"]={name:"GalleryImage",docgenInfo:GalleryImage.__docgenInfo,path:"app/component/library/Article/Embeds/GalleryImage.js"});const GalleryLightbox_srcSet=["1368"],GalleryHeader=styled_components_browser_esm.default.header`
  background: ${props=>props.theme.color.bkg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  .close-btn {
    padding: 20px;
    font-size: 20px;
  }
`,GalleryContent=styled_components_browser_esm.default.div`
  background: ${props=>props.theme.color.bkg};
  width: 100%;
  height: calc(100% - 60px);
  amp-carousel {
    height: 100%;
  }
`,GalleryTitle=styled_components_browser_esm.default.h1`
  display: flex;
  margin: 0;
  padding: 20px;
  font-size: 18px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,GalleryIcon=Object(styled_components_browser_esm.default)(icons_Gallery)`
  margin-right: 5px;
`,CloseIcon=Object(styled_components_browser_esm.default)(icons_Close)``,GalleryWrapper=styled_components_browser_esm.default.aside`
  background: #000;
  .amp-carousel-button {
    cursor: pointer;
    outline: none;
    height: 50px;
    width: 50px;
    padding: 8px;
    margin: 0;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.5);
    &:before {
      content: ' ';
      width: 100%;
      height: 100%;
      display: block;
      background: url(/img/icons/chevron.svg) no-repeat center center;
      margin-left: 1px;
    }
  }
  .amp-carousel-button-prev {
    &:before {
      transform: rotate(180deg);
      margin-left: -1px;
    }
  }
`,GalleryLightbox=({id:id,title:title,gallery:gallery})=>Object(jsx_runtime.jsx)(GalleryWrapper,{children:Object(jsx_runtime.jsxs)(Lightbox_default.a,{id:id,children:[Object(jsx_runtime.jsxs)(GalleryHeader,{children:[Object(jsx_runtime.jsxs)(GalleryTitle,{children:[Object(jsx_runtime.jsx)(GalleryIcon,{}),title]}),Object(jsx_runtime.jsx)("button",{className:"close-btn",on:`tap:${id}.close`,children:Object(jsx_runtime.jsx)(CloseIcon,{})})]}),Object(jsx_runtime.jsx)(GalleryContent,{children:Object(jsx_runtime.jsx)(Carousel_default.a,{layout:"flex-item",type:"slides",loop:"",children:gallery&&gallery.filter(image=>image).map((image,index)=>Object(jsx_runtime.jsx)(Embeds_GalleryImage,{srcSet:GalleryLightbox_srcSet,data:image.data,count:gallery.length,delta:index},index))})})]})});GalleryLightbox.propTypes={id:prop_types_default.a.string.isRequired,title:prop_types_default.a.string.isRequired,gallery:prop_types_default.a.array.isRequired},GalleryLightbox.__docgenInfo={description:"",methods:[],displayName:"GalleryLightbox",props:{id:{type:{name:"string"},required:!0,description:""},title:{type:{name:"string"},required:!0,description:""},gallery:{type:{name:"array"},required:!0,description:""}}};var Embeds_GalleryLightbox=GalleryLightbox;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/GalleryLightbox.js"]={name:"GalleryLightbox",docgenInfo:GalleryLightbox.__docgenInfo,path:"app/component/library/Article/Embeds/GalleryLightbox.js"});const Gallery_GalleryWrapper=styled_components_browser_esm.default.div`
  margin: 0 30px;
  > div {
    position: relative;
    cursor: pointer;
    padding-bottom: 10px;
    border-top: 1px solid ${props=>props.theme.color.contrastMedium};
    border-bottom: 1px solid ${props=>props.theme.color.contrastMedium};
  }
`,Gallery_GalleryHeader=styled_components_browser_esm.default.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,GalleryCount=styled_components_browser_esm.default.span`
  font-size: 14px;
  color: ${props=>props.theme.color.primary};
  font-weight: ${props=>props.theme.fontWeight.bold};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,Gallery_GalleryTitle=styled_components_browser_esm.default.h2`
  display: flex;
  margin: 0;
  font-size: 18px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,Gallery_GalleryIcon=Object(styled_components_browser_esm.default)(icons_Gallery)`
  width: 1.3em;
  margin-right: 5px;
  svg {
    fill: ${props=>props.theme.color.font};
  }
`,GalleryInner=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
`,GalleryMain=styled_components_browser_esm.default.div`
  width: 75%;
  padding-top: 66%;
  position: relative;
  img {
    object-fit: cover;
  }
  &:after,
  &:before {
    content: ' ';
    width: 50px;
    height: 50px;
    display: block;
    background: rgba(0, 0, 0, 0.5) url(/img/icons/chevron.svg) no-repeat 17px
      center;
    background-size: 40%;
    position: absolute;
    z-index: 1;
    top: 50%;
    margin-top: -25px;
  }
  &:before {
    transform: rotate(180deg);
    margin-left: -1px;
  }
  &:after {
    margin-right: 1px;
    right: 0;
  }
`,GalleryThumbs=styled_components_browser_esm.default.div`
  width: calc(25% - 12px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > * {
    height: calc(33.3% - 8px);
  }
  img {
    object-fit: cover;
  }
`,Gallery_Gallery=({data:{title:title,gallery:gallery},srcSet:srcSet})=>{const[id]=Object(react.useState)(uniqueId_default()("gallery-"));return Object(jsx_runtime.jsxs)(Gallery_GalleryWrapper,{children:[Object(jsx_runtime.jsxs)("div",{on:"tap:"+id,children:[Object(jsx_runtime.jsxs)(Gallery_GalleryHeader,{children:[Object(jsx_runtime.jsxs)(Gallery_GalleryTitle,{children:[Object(jsx_runtime.jsx)(Gallery_GalleryIcon,{}),title]}),Object(jsx_runtime.jsxs)(GalleryCount,{children:["Show all ",gallery.length]})]}),Object(jsx_runtime.jsxs)(GalleryInner,{children:[Object(jsx_runtime.jsx)(GalleryMain,{children:gallery&&gallery.filter(image=>image).slice(0,1).map(({data:{url:url,caption:caption}},index)=>Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?width=640",alt:caption,srcset:url.startsWith("data:")?null:srcSet.map(size=>`${url}?width=${size} ${size}w`).join(", "),layout:"fill"},index))}),Object(jsx_runtime.jsx)(GalleryThumbs,{children:gallery&&gallery.filter(image=>image).slice(1,4).map(({data:{url:url,caption:caption}},index)=>Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?width=135",alt:caption,height:108,width:135,srcset:url.startsWith("data:")?null:url+"?width=135 135w",layout:"responsive"},index))})]})]}),Object(jsx_runtime.jsx)(Embeds_GalleryLightbox,{id:id,title:title,gallery:gallery})]})};Gallery_Gallery.propTypes={data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired},Gallery_Gallery.__docgenInfo={description:"on attribute is removed for styled components",methods:[],displayName:"Gallery",props:{data:{type:{name:"object"},required:!0,description:""},srcSet:{type:{name:"array"},required:!0,description:""}}};var Embeds_Gallery=Gallery_Gallery;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Gallery.js"]={name:"Gallery",docgenInfo:Gallery_Gallery.__docgenInfo,path:"app/component/library/Article/Embeds/Gallery.js"});var Iframe=__webpack_require__(413);const Keypoints_Wrapper=styled_components_browser_esm.default.aside`
  border: 1px solid ${props=>props.theme.color.borderColor};
  border-radius: 12px;
  padding: 12px;
  @media ${Styles.c.tablet} {
    padding: 16px;
  }
`,Keypoints_Title=styled_components_browser_esm.default.h2`
  font-size: 18px;
  font-weight: 900;
  line-height: 1.17;
  margin: 0 0 16px 33px;
  text-transform: uppercase;
  @media ${Styles.c.tablet} {
    margin-left: 31px;
  }
`,List=styled_components_browser_esm.default.div`
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    background: url(/img/icons/icon-keypoints.svg) no-repeat left center;
    background-size: 19px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.38;
    list-style-type: none;
    margin-bottom: 16px;
    padding-left: 33px;
    @media ${Styles.c.tablet} {
      font-size: 18px;
      line-height: 1.17;
      padding-left: 31px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: ${props=>props.theme.color.darkContrast};
      &:hover {
        color: ${props=>props.theme.color.primary};
      }
    }
  }
`,Keypoints=({title:title,points:points})=>Object(jsx_runtime.jsxs)(Keypoints_Wrapper,{children:[Object(jsx_runtime.jsx)(Keypoints_Title,{children:title}),Object(jsx_runtime.jsx)(List,{dangerouslySetInnerHTML:{__html:points}})]});Keypoints.propTypes={title:prop_types_default.a.string.isRequired,points:prop_types_default.a.string.isRequired},Keypoints.__docgenInfo={description:"",methods:[],displayName:"Keypoints",props:{title:{type:{name:"string"},required:!0,description:""},points:{type:{name:"string"},required:!0,description:""}}};var LiveBlog_Keypoints=Object(RequestProvider.withRequest)(Keypoints);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog/Keypoints.js"]={name:"Keypoints",docgenInfo:Keypoints.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog/Keypoints.js"});const WrapperRight=styled_components_browser_esm.default.span`
  align-items: center;
  display: flex;
  height: 12px;
  width: 9px;

  ${props=>props.inactive&&`\n      path {\n        fill: ${props.theme.color.buttonShadow};\n      }\n    `}
`,WrapperLeft=Object(styled_components_browser_esm.default)(WrapperRight)`
  transform: rotate(180deg);
`,PaginationArrow=({className:className,flip:flip,inactive:inactive})=>{const Wrapper=flip?WrapperLeft:WrapperRight;return Object(jsx_runtime.jsx)(Wrapper,{className:className,dangerouslySetInnerHTML:{__html:'\n<svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.20492 12L0.794922 10.59L5.37492 6.00003L0.794922 1.41003L2.20492 3.05176e-05L8.20492 6.00003L2.20492 12Z" fill="#4E4E4E"/></svg>\n'},inactive:inactive})};PaginationArrow.propTypes={className:prop_types_default.a.string,flip:prop_types_default.a.bool,inactive:prop_types_default.a.bool},PaginationArrow.__docgenInfo={description:"",methods:[],displayName:"PaginationArrow",props:{className:{type:{name:"string"},required:!1,description:""},flip:{type:{name:"bool"},required:!1,description:""},inactive:{type:{name:"bool"},required:!1,description:""}}};var icons_PaginationArrow=PaginationArrow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/icons/PaginationArrow.js"]={name:"PaginationArrow",docgenInfo:PaginationArrow.__docgenInfo,path:"app/component/library/icons/PaginationArrow.js"});const PaginationArrowWithLine_WrapperRight=styled_components_browser_esm.default.span`
  align-items: center;
  display: flex;
  height: 12px;
  width: 14px;

  ${props=>props.inactive&&`path {\n        fill: ${props.theme.color.buttonShadow};\n      }\n    `}
`,PaginationArrowWithLine_WrapperLeft=Object(styled_components_browser_esm.default)(PaginationArrowWithLine_WrapperRight)`
  transform: rotate(180deg);
`,PaginationArrowWithLine=({className:className,flip:flip,inactive:inactive})=>{const Wrapper=flip?PaginationArrowWithLine_WrapperLeft:PaginationArrowWithLine_WrapperRight;return Object(jsx_runtime.jsx)(Wrapper,{className:className,dangerouslySetInnerHTML:{__html:'\n<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.795078 10.59L5.38508 5.99997L0.795078 1.40997L2.20508 -3.05176e-05L8.20508 5.99997L2.20508 12L0.795078 10.59ZM13.2051 -3.05176e-05H11.2051V12H13.2051V-3.05176e-05Z" fill="#4E4E4E"/></svg>\n'},inactive:inactive})};PaginationArrowWithLine.propTypes={className:prop_types_default.a.string,flip:prop_types_default.a.bool,inactive:prop_types_default.a.bool},PaginationArrowWithLine.__docgenInfo={description:"",methods:[],displayName:"PaginationArrowWithLine",props:{className:{type:{name:"string"},required:!1,description:""},flip:{type:{name:"bool"},required:!1,description:""},inactive:{type:{name:"bool"},required:!1,description:""}}};var icons_PaginationArrowWithLine=PaginationArrowWithLine;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/icons/PaginationArrowWithLine.js"]={name:"PaginationArrowWithLine",docgenInfo:PaginationArrowWithLine.__docgenInfo,path:"app/component/library/icons/PaginationArrowWithLine.js"});const ButtonText=styled_components_browser_esm.default.span`
  display: none;

  ${props=>props.inactive&&`color: ${props.theme.color.buttonShadow};\n    `}

  @media ${Styles.c.tablet} {
    display: inline;
  }
`,ButtonTextLower=Object(styled_components_browser_esm.default)(ButtonText)`
  margin-left: 16px;
`,ButtonTextHigher=Object(styled_components_browser_esm.default)(ButtonText)`
  margin-right: 16px;
`,CurrentPage=styled_components_browser_esm.default.span`
  font-weight: 700;
`,NavButton=styled_components_browser_esm.default.a`
  align-items: center;
  border-radius: 23px;
  box-shadow: 0 1px 2px 0 ${props=>props.theme.color.buttonShadow},
    0.5px 0.5px 2px 0 ${props=>props.theme.color.buttonShadow};
  color: ${props=>props.theme.color.font};
  display: flex;
  font-size: 18px;
  height: 48px;
  justify-content: center;
  width: 48px;

  ${props=>props.inactive&&"pointer-events: none;\n    "}

  &:hover {
    color: ${props=>props.theme.color.font};
  }

  &:nth-child(2) {
    margin-right: auto;
  }

  @media ${Styles.c.mobileM} {
    &:nth-child(2) {
      margin-right: 0;
    }
  }

  @media ${Styles.c.tablet} {
    height: 44px;
    width: 44px;
  }
`,NavButtonFirst=Object(styled_components_browser_esm.default)(NavButton)`
  margin-right: 16px;
`,NavButtonSinglePage=Object(styled_components_browser_esm.default)(NavButton)`
  width: 64px;

  @media ${Styles.c.tablet} {
    width: 159px;
  }
`,NavButtonLast=Object(styled_components_browser_esm.default)(NavButton)`
  margin-left: 16px;
`,PageCount=styled_components_browser_esm.default.aside`
  align-items: center;
  background: ${props=>props.theme.color.pageCountBG};
  border-radius: 20px;
  bottom: 4px;
  display: flex;
  height: 27px;
  justify-content: center;
  position: absolute;
  text-align: center;
  width: 151px;

  @media ${Styles.c.mobileM} {
    background: none;
    bottom: auto;
    flex-grow: 1;
    height: auto;
    padding: 0;
    position: relative;
    width: auto;
  }
`,Pagination_Wrapper=styled_components_browser_esm.default.div`
  background: ${props=>props.theme.color.white};
  border: 1px solid ${props=>props.theme.color.borderColor};
  border-radius: 15px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin: 16px 0 16px;
  padding: 8px 8px 40px;
  position: relative;

  @media ${Styles.c.mobileM} {
    padding-bottom: 8px;
  }

  @media ${Styles.c.tablet} {
    font-size: 18px;
    padding: 16px;
  }
`,Pagination=({article:article,paging:paging,req:{query:query}})=>{var _article$liveblog,_article$liveblog$dat,_article$liveblog2,_article$liveblog2$da;const buttonLabels=[{lower:"Older",higher:"Newer"},{lower:"Newer",higher:"Older"}],currentPage=query.page?Number(query.page):1,isFirstPage=()=>1===currentPage,isLastPage=()=>currentPage===paging.totalPages;return Object(jsx_runtime.jsx)("div",{pagination:"",children:Object(jsx_runtime.jsxs)(Pagination_Wrapper,{children:[Object(jsx_runtime.jsx)(NavButtonFirst,{href:article.path+"#liveblogfeed",inactive:isFirstPage(),children:Object(jsx_runtime.jsx)(icons_PaginationArrowWithLine,{flip:!0,inactive:isFirstPage()})}),Object(jsx_runtime.jsxs)(NavButtonSinglePage,{href:`?page=${1===currentPage?1:currentPage-1}#liveblogfeed`,inactive:isFirstPage(),children:[Object(jsx_runtime.jsx)(icons_PaginationArrow,{flip:!0,inactive:isFirstPage()}),Object(jsx_runtime.jsx)(ButtonTextLower,{inactive:isFirstPage(),children:buttonLabels[null===(_article$liveblog=article.liveblog)||void 0===_article$liveblog||null===(_article$liveblog$dat=_article$liveblog.data)||void 0===_article$liveblog$dat?void 0:_article$liveblog$dat.status].lower})]}),Object(jsx_runtime.jsxs)(PageCount,{children:[Object(jsx_runtime.jsx)(CurrentPage,{children:currentPage})," / ",paging.totalPages]}),Object(jsx_runtime.jsxs)(NavButtonSinglePage,{href:`?page=${currentPage===paging.totalPages?paging.totalPages:currentPage+1}#liveblogfeed`,inactive:isLastPage(),children:[Object(jsx_runtime.jsx)(ButtonTextHigher,{inactive:isLastPage(),children:buttonLabels[null===(_article$liveblog2=article.liveblog)||void 0===_article$liveblog2||null===(_article$liveblog2$da=_article$liveblog2.data)||void 0===_article$liveblog2$da?void 0:_article$liveblog2$da.status].higher}),Object(jsx_runtime.jsx)(icons_PaginationArrow,{inactive:isLastPage()})]}),Object(jsx_runtime.jsx)(NavButtonLast,{href:`?page=${paging.totalPages}#liveblogfeed`,inactive:isLastPage(),children:Object(jsx_runtime.jsx)(icons_PaginationArrowWithLine,{inactive:isLastPage()})})]})})};Pagination.propTypes={article:prop_types_default.a.object.isRequired,paging:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{article:{type:{name:"object"},required:!0,description:""},paging:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var LiveBlog_Pagination=Object(RequestProvider.withRequest)(Pagination);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog/Pagination.js"]={name:"Pagination",docgenInfo:Pagination.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog/Pagination.js"});const Refresh_Wrapper=styled_components_browser_esm.default.div`
  margin-left: 5px;
  position: relative;
  top: 1px;
`,Refresh=({className:className})=>Object(jsx_runtime.jsx)(Refresh_Wrapper,{className:className,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><path fill="#191919" fill-rule="evenodd" d="M18.103 6.35C16.62 4.9 14.587 4 12.329 4c-4.517 0-8.165 3.58-8.165 8s3.648 8 8.165 8c3.812 0 6.99-2.55 7.9-6h-2.126c-.838 2.33-3.107 4-5.774 4-3.382 0-6.131-2.69-6.131-6s2.749-6 6.131-6c1.696 0 3.209.69 4.312 1.78L13.351 11h7.153V4l-2.401 2.35z" clip-rule="evenodd"/></svg>\n'}});Refresh.propTypes={className:prop_types_default.a.string},Refresh.__docgenInfo={description:"",methods:[],displayName:"Refresh",props:{className:{type:{name:"string"},required:!1,description:""}}};var icons_Refresh=Refresh;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/icons/Refresh.js"]={name:"Refresh",docgenInfo:Refresh.__docgenInfo,path:"app/component/library/icons/Refresh.js"});var striptags=__webpack_require__(775),striptags_default=__webpack_require__.n(striptags);const ArticleLink_Title=styled_components_browser_esm.default.h3`
  line-height: 27px;
  font-size: 1.17em;
  margin: 0.8em 0 16px;
`,ArticleLink=({className:className,data:{url:url,image:image,title:title,description:description}})=>Object(jsx_runtime.jsxs)("div",{className:className,children:[image&&Object(jsx_runtime.jsx)(Embeds_Image,{data:image,srcSet:[640]}),Object(jsx_runtime.jsx)(ArticleLink_Title,{children:title&&Object(jsx_runtime.jsx)("a",{href:url,children:title})}),description&&Object(jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:{__html:description}})]});ArticleLink.propTypes={data:prop_types_default.a.any.isRequired,className:prop_types_default.a.string},ArticleLink.__docgenInfo={description:"",methods:[],displayName:"ArticleLink",props:{data:{type:{name:"any"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""}}};var Embeds_ArticleLink=ArticleLink;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/ArticleLink.js"]={name:"ArticleLink",docgenInfo:ArticleLink.__docgenInfo,path:"app/component/library/Article/Embeds/ArticleLink.js"});const MarkupContainer=styled_components_browser_esm.default.div`
  p {
    line-height: 26px;
  }
  h2 {
    font-size: 27px;
    line-height: 26px;
  }
  &:first-child {
    > *:first-child {
      margin-top: 0;
    }
  }
`,Markup=({data:{markup:markup},polar:polar,prefix:prefix})=>Object(jsx_runtime.jsxs)(MarkupContainer,{id:polar&&"native-content-content",children:[prefix&&prefix,Object(jsx_runtime.jsx)("excessremovablewrapper",{dangerouslySetInnerHTML:{__html:markup}})]});Markup.propTypes={data:prop_types_default.a.any.isRequired,prefix:prop_types_default.a.any,polar:prop_types_default.a.bool},Markup.__docgenInfo={description:"",methods:[],displayName:"Markup",props:{data:{type:{name:"any"},required:!0,description:""},prefix:{type:{name:"any"},required:!1,description:""},polar:{type:{name:"bool"},required:!1,description:""}}};var Article_Markup=Markup;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Markup.js"]={name:"Markup",docgenInfo:Markup.__docgenInfo,path:"app/component/library/Article/Markup.js"});const Quote=styled_components_browser_esm.default.div`
  & blockquote {
    position: relative;
    font-family: ${props=>props.theme.fontFamily.articleFont};
    margin: 16px 40px;

    &:before {
      content: '“';
      color: ${props=>props.theme.color.primary};
      font-size: 76px;
      position: absolute;
      left: -40px;
      top: -8px;
    }

    & > p:last-child:after {
      content: ' „';
      color: ${props=>props.theme.color.primary};
      font-size: 76px;
      position: absolute;
      margin-top: -22px;
    }

    p {
      width: 100%;
    }
  }
`;var Article_BlockQuote=Object(styled_components_browser_esm.default)(({data:{markup:markup}})=>Object(jsx_runtime.jsx)(Quote,{dangerouslySetInnerHTML:{__html:markup}}))``,Facebook=__webpack_require__(776),Facebook_default=__webpack_require__.n(Facebook);const Facebook_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`,FacebookEmbed=({data:data})=>Object(jsx_runtime.jsx)(Facebook_Wrapper,{children:Object(jsx_runtime.jsx)(Facebook_default.a,{data:data,"data-align-center":!0})});FacebookEmbed.propTypes={data:prop_types_default.a.any.isRequired},FacebookEmbed.__docgenInfo={description:"",methods:[],displayName:"FacebookEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Facebook=FacebookEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Facebook.js"]={name:"FacebookEmbed",docgenInfo:FacebookEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Facebook.js"});var Instagram=__webpack_require__(777),Instagram_default=__webpack_require__.n(Instagram);const Instagram_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`;function InstagramEmbed({data:data}){return Object(jsx_runtime.jsx)(Instagram_Wrapper,{children:Object(jsx_runtime.jsx)(Instagram_default.a,{data:data})})}InstagramEmbed.propTypes={data:prop_types_default.a.any.isRequired},InstagramEmbed.__docgenInfo={description:"",methods:[],displayName:"InstagramEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Instagram=InstagramEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Instagram.js"]={name:"InstagramEmbed",docgenInfo:InstagramEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Instagram.js"});var Twitter=__webpack_require__(778),Twitter_default=__webpack_require__.n(Twitter);const Twitter_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`,TwitterEmbed=({data:data})=>Object(jsx_runtime.jsx)(Twitter_Wrapper,{children:Object(jsx_runtime.jsx)(Twitter_default.a,{data:data})});TwitterEmbed.propTypes={data:prop_types_default.a.any.isRequired},TwitterEmbed.__docgenInfo={description:"",methods:[],displayName:"TwitterEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Twitter=TwitterEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Twitter.js"]={name:"TwitterEmbed",docgenInfo:TwitterEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Twitter.js"});const Readmore_Wrapper=styled_components_browser_esm.default.div`
  font-size: 19px;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  width: 100%;
  margin: 10px 0 30px;
  @media ${Styles.c.tablet} {
    float: left;
  }
  @media ${Styles.c.mobileL} {
    width: 100%;
  }
`,Link=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.primary};
  text-decoration: none;
  @media ${Styles.c.mobileL} {
    display: flex;
  }

  > amp-img {
    width: 100%;
    @media ${Styles.c.mobileL} {
      flex: 1;
    }
    img {
      object-fit: contain;
    }
  }
`,Readmore_Headline=styled_components_browser_esm.default.h2`
  color: ${props=>props.theme.color.primary};
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  font-size: 20px;
  background-color: ${props=>props.theme.color.contrastMedium};
  padding: 15px;
  margin: 0;
  @media ${Styles.c.mobileL} {
    display: none;
  }
`,Text=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.white};
  background-color: ${props=>props.theme.color.primary};
  padding: 15px;
  font-size: 18px;
  letter-spacing: -0.68px;
  line-height: 28px;
  @media ${Styles.c.mobileL} {
    flex: 3;
  }
`,Readmore_Title=Object(styled_components_browser_esm.default)(Text)`
  flex-grow: 1;
  padding: 0;
`;function Readmore({data:data}){return Object(jsx_runtime.jsx)(Readmore_Wrapper,{children:Object(jsx_runtime.jsxs)(Link,{href:data.href,target:"_blank",children:[Object(jsx_runtime.jsx)(Readmore_Headline,{children:"Read More "}),data.imageUrl&&Object(jsx_runtime.jsx)("amp-img",{src:Object(util_url.a)(data.imageUrl,Object(util_url.b)(630)),height:"470",width:"630",layout:"responsive",children:Object(jsx_runtime.jsx)("amp-img",{placeholder:!0,layout:"fill",src:"/img/placeholder.png",height:"470",width:"630"})})||Object(jsx_runtime.jsx)("amp-img",{layout:"responsive",src:"/img/placeholder.png",height:"470",width:"630"}),Object(jsx_runtime.jsxs)(Text,{children:[Object(jsx_runtime.jsx)(Readmore_Title,{children:"Read More"}),data.text.replace("READ MORE: ","")]})]})})}Readmore.propTypes={data:prop_types_default.a.any.isRequired},Readmore.__docgenInfo={description:"",methods:[],displayName:"Readmore",props:{data:{type:{name:"any"},required:!0,description:""}}};var Article_Readmore=Readmore;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Readmore.js"]={name:"Readmore",docgenInfo:Readmore.__docgenInfo,path:"app/component/library/Article/Readmore.js"});const readmoreOnce=()=>{let foundOne=null;return comp=>"readMore"!==comp.type||!foundOne&&(foundOne=!0,!0)},removeEmptySnippet=()=>comp=>{switch(comp.type){case"markup":if(!comp.data.markup)return!1;return!(striptags_default()(comp.data.markup).length<1);case"gallery":return void 0!==comp.data.gallery&&comp.data.gallery.length>0}return!0},renderBody=body=>body.filter(x=>x.type).filter(readmoreOnce()).filter(removeEmptySnippet()).map((snippet,index)=>{switch(snippet.type){case"H2":case"H3":case"H4":case"markup":return Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data},snippet.type+index);case"brightcove":return Object(jsx_runtime.jsx)(Embeds_Brightcove,{data:snippet.data},snippet.type+index);case"youtube":return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:snippet.data},snippet.type+index);case"image":return Object(jsx_runtime.jsx)(Embeds_Image,{srcSet:[320,640],data:snippet.data},snippet.type+index);case"twitter":return Object(jsx_runtime.jsx)(Embeds_Twitter,{data:snippet.data},snippet.type+index);case"readMore":return Object(jsx_runtime.jsx)(Article_Readmore,{data:snippet.data},snippet.type+index);case"playbuzz":return Object(jsx_runtime.jsx)(Embeds_Playbuzz,{data:snippet.data},snippet.type+index);case"gallery":return Object(jsx_runtime.jsx)(Embeds_Gallery,{srcSet:[320,640],data:snippet.data},snippet.type+index);default:return console.log("TODO: define component type",snippet.type),Object(jsx_runtime.jsxs)("div",{style:{color:"red"},children:["TODO: define component type ",snippet.type]},snippet.type+index)}}),LiveBlog_Wrapper=styled_components_browser_esm.default.div`
  margin: 20px 0;
`,Anchor=styled_components_browser_esm.default.a`
  margin-top: -48px;
  position: absolute;
  @media ${Styles.c.tablet} {
    margin-top: -62px;
  }
`,UpdateButton=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)("button",{className:props.className,...props,children:props.children}))`
  background: ${props=>props.theme.color.liveblog};
  border-radius: 15px;
  color: ${props=>props.theme.color.font};
  display: flex;
  width: 100%;
  padding: 16px 20px 15px;
  font-size: 14px;
  margin-top: 46px;
  align-items: center;
  justify-content: center;
`,Post=styled_components_browser_esm.default.div``,PostAnchor=styled_components_browser_esm.default.a`
  font-size: 18px;
  font-weight: ${props=>props.theme.fontWeight.bold};
  color: ${props=>props.theme.color.darkContrast};
  display: flex;
  position: relative;
  align-items: center;
  padding: 24px 0 24px 64px;
  @media ${Styles.c.tablet} {
    padding-left: 54px;
  }

  &:before {
    content: '';
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border: 2px solid ${props=>props.theme.color.primary};
    background-color: ${props=>props.theme.color.white};
    border-radius: 50%;
    z-index: 1;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 100%;
    background: ${props=>props.theme.color.borderColor};
    left: 73px;
    top: 0;
    @media ${Styles.c.tablet} {
      left: 63px;
    }
  }
`,PostContent=styled_components_browser_esm.default.div`
  padding-top: 20px;
  position: relative;
  border: 1px solid ${props=>props.theme.color.borderColor};
  border-radius: 15px;
  font-weight: ${props=>props.theme.fontWeight.thin};
  > * {
    box-sizing: border-box;
    padding: 0 20px;
  }
`,PostMeta=styled_components_browser_esm.default.div`
  display: flex;
  border-top: 1px solid ${props=>props.theme.color.borderColor};
  font-size: 14px;
  margin-top: 20px;
  padding: 12px;
  @media ${Styles.c.tablet} {
    font-size: 16px;
    padding: 16px;
  }
`,Author=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.primary};
  &:after {
    display: inline-block;
    content: '|';
    color: ${props=>props.theme.color.borderColor};
    margin: 0 5px;
  }
`,PostHeading=styled_components_browser_esm.default.h3`
  margin: 0;
  line-height: 1.29;
  font-size: 21px;
  font-weight: 700;
`,LiveBlog=({article:{extra:{liveblogKeypointsTitle:liveblogKeypointsTitle,liveblogKeypoints:liveblogKeypoints}},data:{uuid:uuid},posts:posts,paging:paging})=>Object(jsx_runtime.jsxs)(LiveBlog_Wrapper,{children:[liveblogKeypointsTitle&&liveblogKeypoints&&Object(jsx_runtime.jsx)(LiveBlog_Keypoints,{title:liveblogKeypointsTitle,points:liveblogKeypoints}),Object(jsx_runtime.jsx)(Anchor,{id:"liveblogfeed"}),Object(jsx_runtime.jsxs)("amp-live-list",{id:uuid,"data-max-items-per-page":paging.posts,children:[Object(jsx_runtime.jsxs)(UpdateButton,{update:"",on:`tap:${uuid}.update`,children:["Show latest update ",Object(jsx_runtime.jsx)(icons_Refresh,{})]}),Object(jsx_runtime.jsx)("div",{items:"",children:posts.map(post=>{return Object(jsx_runtime.jsxs)(Post,{"data-sort-time":post.data.created,"data-update-time":post.data.changed,id:"post-"+post.data.id,children:[Object(jsx_runtime.jsx)(PostAnchor,{href:"#post-"+post.id,children:Object(jsx_runtime.jsx)("amp-timeago",{layout:"fixed-height",height:"20",datetime:moment_timezone_default.a.unix(post.data.changed).toISOString(),locale:"en",children:post.data.changed})}),Object(jsx_runtime.jsxs)(PostContent,{children:[Object(jsx_runtime.jsx)(PostHeading,{children:post.data.title}),(body=post.postJson,body.filter(x=>x.type).filter(removeEmptySnippet()).map((item,index)=>{switch(item.type){case"image":return Object(jsx_runtime.jsx)(Embeds_Image,{data:item.data,srcSet:[640],customWidth:"3",customHeight:"2"},item.id+index);case"H2":case"H3":case"H4":case"listbulleted":case"listnumbered":case"markup":return Object(jsx_runtime.jsx)(Article_Markup,{data:item.data},item.id+index);case"article-link":return Object(jsx_runtime.jsx)(Embeds_ArticleLink,{data:item.data},item.id+index);case"blockquote":return Object(jsx_runtime.jsx)(Article_BlockQuote,{data:item.data},item.id+index);case"twitter":return Object(jsx_runtime.jsx)(Embeds_Twitter,{data:item.data},item.id+index);case"instagram":return Object(jsx_runtime.jsx)(Embeds_Instagram,{data:item.data},item.id+index);case"facebook":return Object(jsx_runtime.jsx)(Embeds_Facebook,{data:item.data},item.id+index);case"video-dugout":return Object(jsx_runtime.jsx)(DugoutPlayer,{data:item.data},item.id+index);case"video-youtube":return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:item.data},item.id+index);case"video-jwplayer":return Object(jsx_runtime.jsx)(Embeds_JWPlayer,{data:item.data},item.id+index);default:return Object(jsx_runtime.jsxs)("p",{children:["Unhandled: ",item.type]},"unknownComp"+index)}})),Object(jsx_runtime.jsxs)(PostMeta,{children:[post.data.extra.authorName&&Object(jsx_runtime.jsx)(Author,{children:post.data.extra.authorName}),moment_timezone_default.a.unix(post.data.created).tz("Europe/London").format("D MMMM YYYY HH:mm")]})]})]},post.data.id);var body})}),paging.total>paging.posts&&Object(jsx_runtime.jsx)(LiveBlog_Pagination,{paging:paging})]})]});LiveBlog.propTypes={article:prop_types_default.a.object.isRequired,data:prop_types_default.a.object.isRequired,posts:prop_types_default.a.array.isRequired,paging:prop_types_default.a.object.isRequired},LiveBlog.__docgenInfo={description:"",methods:[],displayName:"LiveBlog",props:{article:{type:{name:"object"},required:!0,description:""},data:{type:{name:"object"},required:!0,description:""},posts:{type:{name:"array"},required:!0,description:""},paging:{type:{name:"object"},required:!0,description:""}}};var LiveBlog_LiveBlog=Object(RequestProvider.withRequest)(LiveBlog);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog/LiveBlog.js"]={name:"LiveBlog",docgenInfo:LiveBlog.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog/LiveBlog.js"});const MarkupEmbed=({className:className,data:{markup:markup}})=>Object(jsx_runtime.jsx)("div",{className:className,dangerouslySetInnerHTML:{__html:markup}});MarkupEmbed.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired};var Embeds_MarkupEmbed=Object(styled_components_browser_esm.default)(MarkupEmbed)``;const TopicsNav=styled_components_browser_esm.default.nav`
  font-family: ${props=>props.theme.fontFamily.primary};
`,TopicsTitle=styled_components_browser_esm.default.span`
  font-size: ${props=>props.theme.fontSize.body};
  font-weight: ${props=>props.theme.fontWeight.bold};
  margin: 0 10px 0 0;
  line-height: 26px;
  text-transform: uppercase;
`,TopicsList=styled_components_browser_esm.default.span``,TopicsListItem=styled_components_browser_esm.default.a`
  display: inline-block;
  font-size: ${props=>props.theme.fontSize.body};
  text-transform: capitalize;
  line-height: 26px;

  &:after {
    display: inline-block;
    content: '|';
    color: ${props=>props.theme.color.metaGrey};
    margin: 0 0.3em 0 0.3em;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
`,Topics=Object(styled_components_browser_esm.default)(({topics:topics})=>Object(jsx_runtime.jsxs)(TopicsNav,{"aria-labelledby":"related-navigation",children:[Object(jsx_runtime.jsx)(TopicsTitle,{children:"More About:"}),Object(jsx_runtime.jsx)(TopicsList,{children:topics.map((topic,index)=>Object(jsx_runtime.jsx)(TopicsListItem,{href:topic.path,children:topic.name},index))})]}))`
  font-family: ${props=>props.theme.fontFamily.articleFont};
`;Topics.propTypes={className:prop_types_default.a.string,topics:prop_types_default.a.array.isRequired};var Article_Topics=Topics;const getClassName=(...classNames)=>classNames.map(name=>"object"==typeof name&&null!==name?Object.entries(name).filter(([,value])=>!!value).map(([key])=>key).join(" "):name).filter(name=>!!name).join(" "),ListRoot=styled_components_browser_esm.default.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,ListItem=styled_components_browser_esm.default.li`
  margin-bottom: 16px;
  padding-bottom: 16px;
  display: flex;
  border-bottom: ${props=>"0.5px solid "+props.theme.color.borderColor};
  &:last-child {
    margin-bottom: 0px;
    @media ${Styles.c.tablet} {
      padding-bottom: 0px;
      border-bottom: 0;
    }
  }
`,RelatedArticleList_ArticleLink=styled_components_browser_esm.default.a`
  display: flex;
  flex: 1;
  font-family: ${props=>props.theme.fontFamily.headingFont};
  font-size: 14px;
  color: #222;
  line-height: 18px;
  padding: 0 0 0 16px;
  color: ${props=>props.theme.color.darkContrast};
  padding: 0 0 0 8px;
  @media ${Styles.c.maxMobileM} {
    margin-right: 12px;
  }
`,RelatedArticleList_ImageWrapper=styled_components_browser_esm.default.div`
  width: 148px;
  @media ${Styles.c.tabletS} {
    width: 168px;
  }
`,RelatedArticleList=({links:links})=>Object(jsx_runtime.jsx)(ListRoot,{children:links.map(({href:href,title:title,image:image},index)=>Object(jsx_runtime.jsxs)(ListItem,{className:"related-item","data-position":index+1,children:[Object(jsx_runtime.jsx)(RelatedArticleList_ImageWrapper,{children:Object(jsx_runtime.jsx)("a",{href:href,"data-vars-event-id":"c29","data-vars-item-name":"related - "+href,children:Object(jsx_runtime.jsx)(Image_default.a,{src:null!=image&&image.startsWith("data:")?image:image+"?width=189",alt:title,height:"112",width:"168",layout:"responsive"})})}),Object(jsx_runtime.jsx)(RelatedArticleList_ArticleLink,{href:href,"data-vars-event-id":"c29","data-vars-item-name":"related - "+href,children:title})]},href))});RelatedArticleList.propTypes={links:prop_types_default.a.array.isRequired},RelatedArticleList.__docgenInfo={description:"",methods:[],displayName:"RelatedArticleList",props:{links:{type:{name:"array"},required:!0,description:""}}};var Embeds_RelatedArticleList=RelatedArticleList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/RelatedArticleList.js"]={name:"RelatedArticleList",docgenInfo:RelatedArticleList.__docgenInfo,path:"app/component/library/Article/Embeds/RelatedArticleList.js"});const RelatedArticle_Title=styled_components_browser_esm.default.h3`
  font-size: 14px;
  font-family: ${props=>props.theme.fontFamily.headingFont};
  font-weight: normal;
  padding-bottom: 8px;
  margin: 0;
  color: ${props=>props.theme.color.grey};
`,Root=styled_components_browser_esm.default.aside`
  box-sizing: border-box;
  margin: 0;
  clear: both;
  padding: 11px 0;
  @media ${Styles.c.tablet} {
    float: left;
    margin: 0 16px 16px 0;
    padding: 8px 0;
    width: 305px;
  }
`,RelatedArticle=({data:{links:links,align:align}})=>{const isWatchMore=null==links?void 0:links.every(({media_type:media_type})=>"video"===media_type),title=isWatchMore?"Watch more":"Read more";return links?Object(jsx_runtime.jsxs)(Root,{className:getClassName(align,"item-count-"+links.length,"related"),"data-is-watch-more":isWatchMore,children:[Object(jsx_runtime.jsx)(RelatedArticle_Title,{children:title}),Object(jsx_runtime.jsx)(Embeds_RelatedArticleList,{links:links})]}):null};RelatedArticle.propTypes={data:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},RelatedArticle.__docgenInfo={description:"",methods:[],displayName:"RelatedArticle",props:{data:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Embeds_RelatedArticle=Object(RequestProvider.withRequest)(RelatedArticle);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/RelatedArticle.js"]={name:"RelatedArticle",docgenInfo:RelatedArticle.__docgenInfo,path:"app/component/library/Article/Embeds/RelatedArticle.js"});const Embed=styled_components_browser_esm.default.div`
  display: flex;
  clear: both;
  width: 100%;
  max-width: 100%;
  > * {
    margin: auto;
  }
`,HTMLEmbed=({data:{markup:markup}})=>Object(jsx_runtime.jsx)(Embed,{dangerouslySetInnerHTML:{__html:markup}});HTMLEmbed.propTypes={data:prop_types_default.a.any.isRequired},HTMLEmbed.__docgenInfo={description:"",methods:[],displayName:"HTMLEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_HTMLEmbed=HTMLEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/HTMLEmbed.js"]={name:"HTMLEmbed",docgenInfo:HTMLEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/HTMLEmbed.js"});var helpers=__webpack_require__(141),collection=__webpack_require__(51);const layoutProps={height:collection.b,width:collection.j,layout:collection.d,sizes:collection.i,heights:collection.c,media:collection.e,placeholder:collection.h,fallback:collection.a,noloading:collection.f,"disable-inline-width":helpers.a};const AmpEmbed=props=>{const{heights:heights,consentNotificationId:consentNotificationId,loadingStrategy:loadingStrategy,adContainerId:adContainerId,...others}=props;return Object(jsx_runtime.jsx)("amp-embed",{heights:(null==heights?void 0:heights.join(","))||"","data-consent-notification-id":consentNotificationId,"data-loading-strategy":loadingStrategy,"data-ad-container-id":adContainerId,"data-block-on-consent":"_till_responded",...others})};AmpEmbed.propTypes={...layoutProps,id:prop_types_default.a.string,className:prop_types_default.a.string,type:prop_types_default.a.string.isRequired,src:prop_types_default.a.string,json:prop_types_default.a.object,consentNotificationId:prop_types_default.a.string,loadingStrategy:prop_types_default.a.number,adContainerId:prop_types_default.a.string},AmpEmbed.__docgenInfo={description:"",methods:[],displayName:"AmpEmbed",props:{id:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},type:{type:{name:"string"},required:!0,description:""},src:{type:{name:"string"},required:!1,description:""},json:{type:{name:"object"},required:!1,description:""},consentNotificationId:{type:{name:"string"},required:!1,description:""},loadingStrategy:{type:{name:"number"},required:!1,description:""},adContainerId:{type:{name:"string"},required:!1,description:""}},composes:["./props/Layout"]};var AMP_Embed=AmpEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Embed.js"]={name:"AmpEmbed",docgenInfo:AmpEmbed.__docgenInfo,path:"app/component/library/AMP/Embed.js"});var config=__webpack_require__(298);const DivRoot=props=>{const{id:id,className:className}=props;return Object(jsx_runtime.jsx)("div",{...props,id:id,className:getClassName(className,"taboola")})};DivRoot.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string};const TaboolaDiv=DivRoot,AmpRoot=props=>{var _configManager$config;const{id:id,height:height,heights:heights,width:width,mode:mode,placement:placement}=props,publisher=null===(_configManager$config=config.a.config.taboola)||void 0===_configManager$config?void 0:_configManager$config.publisherId;return publisher?Object(jsx_runtime.jsx)(AMP_Embed,{id:id,type:"taboola",layout:"responsive",height:height,heights:heights,width:width,"data-publisher":publisher,"data-mode":mode,"data-placement":placement,"data-target_type":"mix","data-article":"auto"}):null};AmpRoot.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,domain:prop_types_default.a.string.isRequired,height:prop_types_default.a.number,heights:prop_types_default.a.array,width:prop_types_default.a.number,mode:prop_types_default.a.string.isRequired,placement:prop_types_default.a.string.isRequired,res:prop_types_default.a.object.isRequired};const TaboolaAmp=Object(RequestProvider.withRequest)(AmpRoot),Taboola=props=>{const{res:{locals:{cleanAmp:cleanAmp}}}=props;return cleanAmp?Object(jsx_runtime.jsx)(TaboolaAmp,{...props}):Object(jsx_runtime.jsx)(TaboolaDiv,{...props})};Taboola.propTypes={res:prop_types_default.a.object.isRequired},Taboola.__docgenInfo={description:"",methods:[],displayName:"Taboola",props:{res:{type:{name:"object"},required:!0,description:""}}};Object(RequestProvider.withRequest)(Taboola);DivRoot.__docgenInfo={description:"",methods:[],displayName:"DivRoot",props:{id:{type:{name:"string"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Taboola.js"]={name:"DivRoot",docgenInfo:DivRoot.__docgenInfo,path:"app/component/library/Ads/Taboola.js"}),AmpRoot.__docgenInfo={description:"",methods:[],displayName:"AmpRoot",props:{id:{type:{name:"string"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},domain:{type:{name:"string"},required:!0,description:""},height:{type:{name:"number"},required:!1,description:""},heights:{type:{name:"array"},required:!1,description:""},width:{type:{name:"number"},required:!1,description:""},mode:{type:{name:"string"},required:!0,description:""},placement:{type:{name:"string"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Taboola.js"]={name:"AmpRoot",docgenInfo:AmpRoot.__docgenInfo,path:"app/component/library/Ads/Taboola.js"}),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Taboola.js"]={name:"Taboola",docgenInfo:Taboola.__docgenInfo,path:"app/component/library/Ads/Taboola.js"});const TaboolaBelowArticle=({cleanAmp:cleanAmp,jsGlobals:jsGlobals})=>cleanAmp?Object(jsx_runtime.jsx)(TaboolaAmp,{id:"taboola-below-article",width:101,height:100,heights:["(min-width:1514px) 74%","(min-width:1096px) 81%","(min-width:801px) 90%","(min-width:581px) 102%","(min-width:420px) 119%","(min-width:390px) 361%","389%"],placement:"Below Article Thumbnails - AMP",mode:jsGlobals.taboola.ampBelowArticleMode||"thumbnails-e1"}):Object(jsx_runtime.jsx)(TaboolaDiv,{id:"taboola-below-article",className:"taboola-below-article"});TaboolaBelowArticle.propTypes={cleanAmp:prop_types_default.a.bool,jsGlobals:prop_types_default.a.object.isRequired},TaboolaBelowArticle.defaultProps={cleanAmp:!1},TaboolaBelowArticle.__docgenInfo={description:"",methods:[],displayName:"TaboolaBelowArticle",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},jsGlobals:{type:{name:"object"},required:!0,description:""}}};var Ads_TaboolaBelowArticle=Object(RequestProvider.withRequest)(TaboolaBelowArticle);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaBelowArticle.js"]={name:"TaboolaBelowArticle",docgenInfo:TaboolaBelowArticle.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaBelowArticle.js"});const SquirrelWrapper=styled_components_browser_esm.default.div`
  padding: 20px 0;
`,SquirrelWidget=({cleanAmp:cleanAmp,model:model,brand:brand})=>Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:cleanAmp?Object(jsx_runtime.jsx)(SquirrelWrapper,{children:Object(jsx_runtime.jsx)("amp-iframe",{class:"squirrel_widget",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",src:`https://squirrels.getsquirrel.co/make-model.html?c=db793706d70c37dcc16454fa8eb21b1c&make=${brand}&model=${model}`,height:"205",scrolling:"no"})}):Object(jsx_runtime.jsx)(SquirrelWrapper,{className:"squirrel_widget","data-make":brand,"data-model":model,"data-loaded":"false"})});SquirrelWidget.propTypes={cleanAmp:prop_types_default.a.bool.isRequired,model:prop_types_default.a.string.isRequired,brand:prop_types_default.a.string.isRequired},SquirrelWidget.__docgenInfo={description:"",methods:[],displayName:"SquirrelWidget",props:{cleanAmp:{type:{name:"bool"},required:!0,description:""},model:{type:{name:"string"},required:!0,description:""},brand:{type:{name:"string"},required:!0,description:""}}};var Wishlist_SquirrelWidget=SquirrelWidget;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Wishlist/SquirrelWidget.js"]={name:"SquirrelWidget",docgenInfo:SquirrelWidget.__docgenInfo,path:"app/component/library/Article/Wishlist/SquirrelWidget.js"});const Product_Wrapper=styled_components_browser_esm.default.div`
  amp-img {
    max-width: 100%;
    display: block;
    margin: auto;
  }
  & img {
    object-fit: contain;
  }
`,ProductBody=styled_components_browser_esm.default.div`
  margin-top: 20px;
`,ProductTitle=styled_components_browser_esm.default.h2`
  color: ${props=>props.theme.color.black};
  font-size: 28px;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  font-weight: normal;
`,ProductMeta=styled_components_browser_esm.default.aside`
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  font-size: 18px;
`,BuyLink=styled_components_browser_esm.default.a`
  display: block;
  color: red;
  font-weight: ${props=>props.theme.fontWeight.bold};
  line-height: 26px;
`,Price=styled_components_browser_esm.default.span``,Product=({className:className,product:product,cleanAmp:cleanAmp})=>{const{title:title,image:image,body:body,vendorLink:vendorLink,vendorName:vendorName,price:price,productIdType:productIdType,productId:productId}=product.data;return Object(jsx_runtime.jsxs)(Product_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(ProductTitle,{children:title}),Object(jsx_runtime.jsx)(Embeds_Image,{className:"product-image",data:image.data,srcSet:[320,640],showCaption:!1}),Object(jsx_runtime.jsx)(ProductBody,{children:renderBody(body)}),vendorLink&&Object(jsx_runtime.jsxs)(ProductMeta,{children:[Object(jsx_runtime.jsx)(BuyLink,{href:vendorLink,rel:"nofollow",target:"_blank",children:"Buy now"}),vendorName,Object(jsx_runtime.jsx)(Price,{children:" $"+price})]}),productIdType&&productId&&Object(jsx_runtime.jsx)(Wishlist_SquirrelWidget,{cleanAmp:cleanAmp,brand:`__${productIdType}__`,model:productId})]})};Product.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool.isRequired,product:prop_types_default.a.object.isRequired};var Wishlist_Product=Object(styled_components_browser_esm.default)(Product)`
  margin-bottom: 36px;
`;const Products=({className:className,products:products,cleanAmp:cleanAmp})=>Object(jsx_runtime.jsx)("div",{className:className,children:products.map((product,index)=>product?Object(jsx_runtime.jsx)(Wishlist_Product,{product:product,cleanAmp:cleanAmp},index):null)});Products.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool.isRequired,products:prop_types_default.a.array.isRequired},Products.__docgenInfo={description:"",methods:[],displayName:"Products",props:{className:{type:{name:"string"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""},products:{type:{name:"array"},required:!0,description:""}}};var Wishlist_Products=Products;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Wishlist/Products.js"]={name:"Products",docgenInfo:Products.__docgenInfo,path:"app/component/library/Article/Wishlist/Products.js"});const ContentWrapper_Wrapper=styled_components_browser_esm.default.div`
  margin: 16px 0;
  width: 100%;
  flex-grow: 1;
  justify-content: flex-start;
  &.sponsored-article {
    img,
    video {
      max-width: 602px;
      height: auto;
      width: 100%;
    }
    iframe {
      max-width: 602px;
      max-height: 400px;
    }
  }

  @media ${Styles.c.laptop} {
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      width: 607px;
    }
    blockquote {
      width: 566px;
    }
  }

  .ad_bottom {
    @media ${Styles.c.laptop} {
      display: none;
    }
  }
`,ThirdPartyAmp=({id:id})=>Object(jsx_runtime.jsx)(MarkupAd,{id:id,width:300,height:1,ampSizes:"300x1",cleanAmp:!0,thirdPartyAd:!0,ampSizeValidation:!1});ThirdPartyAmp.propTypes={id:prop_types_default.a.number.isRequired};const ThirdPartyWrapper=styled_components_browser_esm.default.div`
  &.mobile-only {
    display: block;
    @media ${Styles.c.laptop} {
      display: none;
    }
  }

  &.desktop-only {
    display: none;
    @media ${Styles.c.laptop} {
      display: block;
    }
  }
`,embedMap={brightcove:Embeds_Brightcove,gallery:Embeds_Gallery,blockquote:Article_BlockQuote,image:Embeds_Image,"dugout-video":DugoutPlayer,html:Embeds_HTMLEmbed,H2:Embeds_MarkupEmbed,H3:Embeds_MarkupEmbed,H4:Embeds_MarkupEmbed,H5:Embeds_MarkupEmbed,H6:Embeds_MarkupEmbed,listbulleted:Embeds_MarkupEmbed,listnumbered:Embeds_MarkupEmbed,playbuzz:Embeds_Playbuzz,readMore:Article_Readmore,twitter:Embeds_Twitter,facebook:Embeds_Facebook,instagram:Embeds_Instagram,"video-youtube":Embeds_Youtube,"video-dugout":DugoutPlayer,youtube:Embeds_Youtube,iframe:Iframe.default},ContentWrapper=({style:style,article:article,cleanAmp:cleanAmp,isWishlist:isWishlist})=>{var _article$articleTypes,_article$extra,_article$extra2;const{body:body,liveblog:liveblog}=article,isCommercial="Commercial"===(null===(_article$articleTypes=article.articleTypes[0])||void 0===_article$articleTypes?void 0:_article$articleTypes.name),products=null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.products;let paragraphCount=0,content=null==body?void 0:body.filter(x=>x.type).filter(readmoreOnce()).filter(removeEmptySnippet()).reduce((acc,snippet,index)=>{const key=`${snippet.type}${index}`;switch(snippet.type){case"markup":{const validPara=(markup=snippet.data.markup,(str=markup,str.replace(/(<([^>]+)>)/gi,"")).length>=100);paragraphCount+=validPara?1:0;const ads=validPara?(({cleanAmp:cleanAmp,paragraphCount:paragraphCount})=>{const ads=[];if(3===paragraphCount)ads.push(Object(jsx_runtime.jsx)(MarkupAd,{id:"mpu1",cleanAmp:cleanAmp,width:320,height:600,"size-key":"DOUBLE_MPU",ampSizes:"300x250,320x480,300x600","force-bulk":!0,ampSizeValidation:!1},"mpu1-markup-ad"));else if(5===paragraphCount)ads.push(cleanAmp?Object(jsx_runtime.jsx)(ThirdPartyAmp,{id:"thirdparty01"},"thirdparty01"):Object(jsx_runtime.jsx)(ThirdPartyWrapper,{className:"teads",children:Object(jsx_runtime.jsx)(MarkupAd,{id:"thirdparty01",cleanAmp:cleanAmp,"size-key":"THIRD_PARTY_ARTICLE_BODY",ampSizeValidation:!1,thirdPartyAd:!0,"force-bulk":!0})},"thirdparty01"));else if(paragraphCount>=8){const diff=Math.abs(8-paragraphCount),everyNthPara=3;if(diff%everyNthPara==0){const id=diff/everyNthPara;ads.push(Object(jsx_runtime.jsx)(MarkupAd,{id:"bottom_mpu_"+id,cleanAmp:cleanAmp,"size-key":"SINGLE_MPU_ONLY_MOBILE",ampSizes:"300x250",width:300,height:250,ampSizeValidation:!1,"force-bulk":!0,className:"ad_bottom"}))}}return ads})({cleanAmp:cleanAmp,paragraphCount:paragraphCount}):[];return[...acc,Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,polar:article.polar,style:style},key),...ads]}case"listbulleted":case"listnumbered":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data},key)]}case"video-jwplayer":return[...acc,Object(jsx_runtime.jsx)(Embeds_JWPlayer,{data:snippet.data,isHero:article.isLiveBlog,isCommercial:isCommercial,isSensitive:article.sensitive},key)];case"HR":return[...acc,Object(jsx_runtime.jsx)("hr",{},snippet.type+index)];case"image":case"gallery":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{srcSet:[320,640],data:snippet.data},key)]}case"related":return[...acc,Object(jsx_runtime.jsx)(Embeds_RelatedArticle,{data:snippet.data},key)];default:{const Component=embedMap[snippet.type];return Component?[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data},key)]:(console.log("TODO: define component type",snippet.type),[...acc,Object(jsx_runtime.jsxs)("div",{style:{color:"red"},children:["TODO: define component type ",snippet.type]},key)])}}var markup,str},[]);return products&&content.push(Object(jsx_runtime.jsx)(Wishlist_Products,{products:products,cleanAmp:cleanAmp},"Products")),Object(jsx_runtime.jsxs)(ContentWrapper_Wrapper,{children:[Object(jsx_runtime.jsxs)("div",{id:"main",children:[content,liveblog&&Object(jsx_runtime.jsx)(LiveBlog_LiveBlog,{...liveblog})]}),article.topics&&Object(jsx_runtime.jsx)(Article_Topics,{topics:article.topics,style:style}),!isWishlist&&!isCommercial&&!(null!=article&&null!==(_article$extra2=article.extra)&&void 0!==_article$extra2&&_article$extra2.isDisableAllAds)&&!article.sensitive&&Object(jsx_runtime.jsx)(Ads_TaboolaBelowArticle,{})]})};ContentWrapper.propTypes={style:prop_types_default.a.string,article:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired,isWishlist:prop_types_default.a.bool},ContentWrapper.__docgenInfo={description:"",methods:[],displayName:"ContentWrapper",props:{style:{type:{name:"string"},required:!1,description:""},article:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""},isWishlist:{type:{name:"bool"},required:!1,description:""}}};var Article_ContentWrapper=Object(RequestProvider.withRequest)(ContentWrapper);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/ContentWrapper.js"]={name:"ContentWrapper",docgenInfo:ContentWrapper.__docgenInfo,path:"app/component/library/Article/ContentWrapper.js"});var WallPaper=__webpack_require__(186),Frame=__webpack_require__(140),StickyFooter=__webpack_require__(293),services_ads=__webpack_require__(93),page=__webpack_require__(183);const ArticleMeta_ArticleMeta=({article:article,res:{locals:{configuration:{baseUrl:baseUrl,domain:domain,twitter:twitter}}}})=>{var _article$hierarchy,_article$hierarchy2,_article$topics;const authorNames=(article=>{var _article$authors;const names=null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(a=>a.firstName&&a.lastName?`${a.firstName} ${a.lastName}`:a.name);return null==names?void 0:names.join(", ")})(article),internalLinkCountValue=Object(services_article.e)(article.body,domain),externalLinkCountValue=Object(services_article.a)(article.body,domain),videoLinkCountValue=Object(services_article.f)(article.body,article.hero),section=(null===(_article$hierarchy=article.hierarchy)||void 0===_article$hierarchy?void 0:_article$hierarchy.length)&&article.hierarchy[0].name,subsection=(null===(_article$hierarchy2=article.hierarchy)||void 0===_article$hierarchy2?void 0:_article$hierarchy2.length)>1&&article.hierarchy[1].name,keywords=(null===(_article$topics=article.topics)||void 0===_article$topics?void 0:_article$topics.map(a=>a.name))||[],firstImage=article.OGImages&&article.OGImages.filter(({type:type})=>"image"===type)[0],firstImageUrl=firstImage?/^http/.test(firstImage.data.url)?firstImage.data.url:baseUrl+firstImage.data.url:null;return Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[article.tags&&Object(jsx_runtime.jsx)("meta",{property:"article:tag",content:article.tags}),section&&Object(jsx_runtime.jsx)("meta",{property:"article:section",content:section}),subsection&&Object(jsx_runtime.jsx)("meta",{property:"article:subsection",content:subsection}),authorNames&&Object(jsx_runtime.jsx)("meta",{property:"article:author_name",content:authorNames}),Object(jsx_runtime.jsx)("meta",{property:"article:content_type",content:"story"}),Object(jsx_runtime.jsx)("meta",{property:"article:word_count",content:article.wordCount}),Object(jsx_runtime.jsx)("meta",{property:"article:image_count",content:article.imageCount}),Object(jsx_runtime.jsx)("meta",{property:"article:video_count",content:videoLinkCountValue}),Object(jsx_runtime.jsx)("meta",{property:"article:internal_link_count",content:internalLinkCountValue}),Object(jsx_runtime.jsx)("meta",{property:"article:external_link_count",content:externalLinkCountValue}),Object(jsx_runtime.jsx)("meta",{property:"og:title",content:article.titleSocial||article.title}),Object(jsx_runtime.jsx)("meta",{name:"twitter:title",content:article.titleSocial||article.title}),Object(jsx_runtime.jsx)("meta",{property:"og:url",content:baseUrl+article.path}),Object(jsx_runtime.jsx)("meta",{property:"og:type",content:"article"}),twitter&&Object(jsx_runtime.jsx)("meta",{name:"twitter:site",content:twitter}),Object(jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(jsx_runtime.jsx)("meta",{property:"og:description",content:article.leadAsText||""}),Object(jsx_runtime.jsx)("meta",{name:"twitter:description",content:article.leadAsText||""}),Object(jsx_runtime.jsx)("meta",{name:"twitter:image",content:firstImageUrl}),firstImageUrl&&Object(jsx_runtime.jsx)("meta",{property:"og:image",content:firstImageUrl}),firstImageUrl&&Object(jsx_runtime.jsx)("meta",{property:"og:image:secure_url",content:firstImageUrl}),keywords&&Object(jsx_runtime.jsx)("meta",{property:"keywords",content:keywords}),Object(jsx_runtime.jsx)("meta",{name:"robots",content:"max-image-preview:large"})]})};ArticleMeta_ArticleMeta.propTypes={article:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired},ArticleMeta_ArticleMeta.__docgenInfo={description:"",methods:[],displayName:"ArticleMeta",props:{article:{type:{name:"object"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Head_ArticleMeta=Object(RequestProvider.withRequest)(ArticleMeta_ArticleMeta);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Head/ArticleMeta.js"]={name:"ArticleMeta",docgenInfo:ArticleMeta_ArticleMeta.__docgenInfo,path:"app/component/library/Head/ArticleMeta.js"});const ArticleContent=styled_components_browser_esm.default.article`
  margin: 0 12px;
  padding: 8px 0;
  @media ${Styles.c.mobileL} {
    padding: 16px 0;
  }
  @media ${Styles.c.tablet} {
    padding: 0;
  }
  @media (min-width: ${Styles.b.tablet}px) and (max-width: ${Styles.b.laptop-1}px) {
    margin: 0 56px;
  }
  @media ${Styles.c.laptop} {
    margin: 0 16px;
  }
`,WishListSubMenu=Object(styled_components_browser_esm.default)(SubMenu.a)`
  & ul {
    margin-bottom: 0;
  }
`,Article=props=>{var _article$extra,_article$extra$produc;const{className:className,article:article,cleanAmp:cleanAmp,configuration:configuration,req:{path:path,originalUrl:originalUrl},res:{locals:{menu:{subMenu:subMenu},structuredData:structuredData}}}=props,isWishList=path.includes("/wishlist"),adToggle=article.adConfig?Object(services_ads.e)(article):()=>{},{baseUrl:baseUrl}=configuration,fullUrl=baseUrl+originalUrl,articleStyle=Object(themes.getArticleTheme)(path,configuration);return Object(jsx_runtime.jsxs)(Frame.a,{className:className,children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("title",{children:Object(page.a)({article:article},configuration.name)}),structuredData&&Object.values(structuredData).filter(Boolean).map((json,index)=>Object(jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(json)},index)),!cleanAmp&&Object(jsx_runtime.jsx)("link",{rel:"amphtml",href:/\?/.test(fullUrl)?fullUrl.replace(/\?/,"?amp&"):fullUrl+"?amp"})]}),Object(jsx_runtime.jsx)(Head_ArticleMeta,{}),Object(jsx_runtime.jsxs)(ArticleContent,{children:[isWishList&&Object(jsx_runtime.jsx)(WishListSubMenu,{subMenu:subMenu,currentURL:path}),!cleanAmp&&adToggle(services_ads.b)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"nativeBanner"}),!cleanAmp&&adToggle(services_ads.d)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"adSlotWallpaper"}),Object(jsx_runtime.jsx)(Article_Header,{article:article}),Object(jsx_runtime.jsxs)(ColumnWrapper.a,{children:[Object(jsx_runtime.jsx)(Article_ContentWrapper,{style:articleStyle,article:article,cleanAmp:cleanAmp,isWishList:isWishList}),!cleanAmp&&(null===(_article$extra=article.extra)||void 0===_article$extra||null===(_article$extra$produc=_article$extra.products)||void 0===_article$extra$produc?void 0:_article$extra$produc.some(product=>product.data.hasOwnProperty("model")||product.data.hasOwnProperty("productId")))&&Object(jsx_runtime.jsx)("script",{async:"",src:"https://squirrels.getsquirrel.co/scripts/db793706d70c37dcc16454fa8eb21b1c.js"})]}),Object(jsx_runtime.jsx)(StickyFooter.a,{cleanAmp:cleanAmp,article:article})]})]})};Article.propTypes={className:prop_types_default.a.any,domain:prop_types_default.a.string,article:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired,jsGlobals:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Article))`
  justify-content: center;

  ${ArticleContent} {
    background-color: ${props=>props.theme.color.white};
  }
`},413:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_brightsites_flow_core_lib_component_amp_Iframe__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(763),_brightsites_flow_core_lib_component_amp_Iframe__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_brightsites_flow_core_lib_component_amp_Iframe__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);const IframeEmbed=({data:data})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_brightsites_flow_core_lib_component_amp_Iframe__WEBPACK_IMPORTED_MODULE_1___default.a,{data:data});IframeEmbed.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired},IframeEmbed.__docgenInfo={description:"",methods:[],displayName:"IframeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}},__webpack_exports__.default=IframeEmbed,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Iframe.js"]={name:"IframeEmbed",docgenInfo:IframeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Iframe.js"})},414:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_brightsites_flow_core_lib_component_amp_Sidebar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(782),_brightsites_flow_core_lib_component_amp_Sidebar__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_brightsites_flow_core_lib_component_amp_Sidebar__WEBPACK_IMPORTED_MODULE_3__),_LoginSidebar_LoggedInPanel__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(417),_LoginSidebar_LoggedOutPanel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(415),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  height: 100vh;
  .close {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 1;
    &:focus {
      outline: none;
    }
  }
`,LoggedInWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  width: 100vw;
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.mobileL} {
    width: 240px;
  }
`,LoggedOutWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.mobileL} {
    width: 375px;
  }
`,LoginModal=({req:{originalUrl:originalUrl}})=>{const returnUrl=originalUrl||"/";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_brightsites_flow_core_lib_component_amp_Sidebar__WEBPACK_IMPORTED_MODULE_3___default.a,{id:"sidebar",class:"login-sidebar",layout:"nodisplay",side:"right",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Wrapper,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"close",on:"tap:sidebar.close",children:"✕"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(LoggedOutWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{"amp-access":"NOT loggedIn","amp-access-hide":"true",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LoginSidebar_LoggedOutPanel__WEBPACK_IMPORTED_MODULE_5__.default,{returnUrl:returnUrl})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(LoggedInWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{"amp-access":"loggedIn","amp-access-hide":"true",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LoginSidebar_LoggedInPanel__WEBPACK_IMPORTED_MODULE_4__.default,{})})})]})})};LoginModal.propTypes={req:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object},LoginModal.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{req:{type:{name:"object"},required:!1,description:""}}},__webpack_exports__.default=Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(LoginModal),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header/LoginModal.js"]={name:"LoginModal",docgenInfo:LoginModal.__docgenInfo,path:"app/component/library/Header/LoginModal.js"})},415:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(66),_Forms_FormSubmit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(139),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0);const ForgotPassword=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  margin-bottom: 19px;
`,ForgotPasswordLink=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.a`
  font-size: 14px;
  color: ${props=>props.theme.color.primary};
  text-decoration: underline;
`,FormWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  background: ${props=>props.theme.color.white};
  padding: 60px 36px 16px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
  flex-grow: 0;
  height: 100vh;
  .form-errors {
    color: ${props=>props.theme.color.primary};
    font-size: 12px;
    margin-bottom: 10px;
  }
`,LoggedOutSubhead=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p`
  font-size: 24px;
  font-weight: ${props=>props.theme.fontWeight.bold};
  margin: 10px auto 0;
  color: ${props=>props.theme.color.darkContrast};
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  padding-bottom: 24px;
`,RegisterButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.a`
  align-items: center;
  background-color: ${props=>props.theme.color.contrastLight};
  border: 1px solid ${props=>props.theme.color.primary};
  border-radius: 6px;
  color: ${props=>props.theme.color.primary};
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  margin: 0;
  height: 36px;
  width: 145px;
  &:hover {
    border-color: ${props=>props.theme.color.primaryDark};
    color: ${props=>props.theme.color.primaryDark};
  }
`,RememberMeLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.label`
  font-size: 14px;
  color: ${props=>props.theme.color.fontMedium};
`,RememberMeInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input`
  float: left;
  position: relative;
  appearance: none;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 1px solid #979797;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: ' ';
    width: 15px;
    height: 15px;
  }
  &:focus {
    outline: none;
  }
  &:checked {
    &:after {
      background: center no-repeat url('/img/icons/checkbox-check.svg');
    }
  }
`,Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`,LoggedOutPanel=({returnUrl:returnUrl})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FormWrapper,{className:"snapshot-loginsidebar",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form",{id:"login-form",className:"login-form",method:"post",target:"_top","action-xhr":"/internal-api/user/login/submit","verify-xhr":"/internal-api/user/login/verify","custom-validation-reporting":"interact-and-submit",on:"valid:AMP.setState({loginDisabled: false});invalid:AMP.setState({loginDisabled: true})",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"hidden",name:"returnUrl",defaultValue:returnUrl}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LoggedOutSubhead,{children:"Log in"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_2__.a,{fieldName:"loginEmail",fieldId:"login-form-email",displayName:"Email",requiredField:!0,className:"input-email",patternMismatchMsg:"Please enter a valid email address",valueMissingMsg:"Please enter a valid email address"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_2__.a,{fieldName:"password",inputType:"password",showPassword:!0,fieldId:"login-form-password",displayName:"Password",requiredField:!0,className:"input-password",valueMissingMsg:"Please enter a password"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"form-errors","submit-error":"true",children:"Email and password don't match"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RememberMeLabel,{className:"remember-me",htmlFor:"rememberMe",children:"Keep me logged in"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RememberMeInput,{type:"checkbox",name:"rememberMe",id:"login-form-remember-me"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Forms_FormSubmit__WEBPACK_IMPORTED_MODULE_3__.a,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ForgotPassword,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ForgotPasswordLink,{href:"/forgotten-password",children:"Forgotten your password?"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LoggedOutSubhead,{children:"New to Indy100?"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RegisterButton,{className:"register-prompt",href:"/register",children:"Register"})]})})});LoggedOutPanel.propTypes={returnUrl:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired},LoggedOutPanel.__docgenInfo={description:"",methods:[],displayName:"LoggedOutPanel",props:{returnUrl:{type:{name:"string"},required:!0,description:""}}},__webpack_exports__.default=LoggedOutPanel,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header/LoginSidebar/LoggedOutPanel.js"]={name:"LoggedOutPanel",docgenInfo:LoggedOutPanel.__docgenInfo,path:"app/component/library/Header/LoginSidebar/LoggedOutPanel.js"})},416:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10.6 0L6 4.4 1.4 0 0 1.3 6 7l6-5.7z" fill-rule="evenodd"/>\n</svg>\n'},417:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var styled_components_browser_esm=__webpack_require__(3),logout=__webpack_require__(292);var jsx_runtime=__webpack_require__(0);const Icon=styled_components_browser_esm.default.span`
  height: 23px;
  width: 23px;
  margin-right: 8px;
  display: inline-block;
  &:nth-of-type(2) {
    height: 15px;
    width: 15px;
    padding: 0 0 0 6px;
  }
`,Item=styled_components_browser_esm.default.li`
  padding: 10px 0 10px 12px;
  position: relative;
  line-height: 19px;
  &:hover:after {
    width: 8px;
    transition: width 0.2s ease-in;
  }
  &:after {
    position: absolute;
    height: 100%;
    width: 0;
    background-color: ${props=>props.theme.color.primary};
    top: 0;
    right: 0;
    content: '';
  }
`,Link=styled_components_browser_esm.default.a`
  display: flex;
  align-items: center;
  font-size: 16px;
`,List=styled_components_browser_esm.default.ul`
  min-width: 240px;
  width: 100%;
  padding: 0;
  list-style: none;
  margin: 0;
`,Welcome=styled_components_browser_esm.default.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  padding: 16px 40px;
`,Wrapper=styled_components_browser_esm.default.div`
  background: ${props=>props.theme.color.contrastLight};
  height: auto;
  padding: 0 0 20px;
  position: absolute;
  right: 0;
  top: 0;
  width: 240px;
`,LoggedInPanel=()=>Object(jsx_runtime.jsxs)(Wrapper,{className:"snapshot-loginsidebar",children:[Object(jsx_runtime.jsx)(Welcome,{children:Object(jsx_runtime.jsx)("template",{"amp-access-template":"true",type:"amp-mustache",children:"Hi amp-template-fullName"})}),Object(jsx_runtime.jsxs)(List,{children:[Object(jsx_runtime.jsx)(Item,{children:Object(jsx_runtime.jsxs)(Link,{href:"/profile",className:"icon-user",children:[Object(jsx_runtime.jsx)(Icon,{dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>\n'}}),"Account details"]})}),Object(jsx_runtime.jsx)(Item,{children:Object(jsx_runtime.jsxs)(Link,{href:"/user/logout",className:"icon-logout",children:[Object(jsx_runtime.jsx)(Icon,{dangerouslySetInnerHTML:{__html:logout.a}}),"Logout"]})})]})]});LoggedInPanel.__docgenInfo={description:"",methods:[],displayName:"LoggedInPanel"};__webpack_exports__.default=LoggedInPanel;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header/LoginSidebar/LoggedInPanel.js"]={name:"LoggedInPanel",docgenInfo:LoggedInPanel.__docgenInfo,path:"app/component/library/Header/LoginSidebar/LoggedInPanel.js"})},5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return sectionColours})),__webpack_require__.d(__webpack_exports__,"e",(function(){return themes})),__webpack_require__.d(__webpack_exports__,"a",(function(){return GlobalStyles})),__webpack_require__.d(__webpack_exports__,"c",(function(){return device})),__webpack_require__.d(__webpack_exports__,"b",(function(){return breakPoints}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);const themes={default:{fontFamily:{primaryFont:"'Lato', sans-serif",secondaryFont:"'Roboto Slab',Rockwell, serif",headingFont:"'Alfa Slab One', sans-serif",articleFont:"'Alfa Slab One', Rockwell, serif"},fontSize:{menu:"10px",small:"12px",list:"14px",caption:"16px",body:"18px"},fontWeight:{thin:300,medium:500,bold:700,black:900},color:{primary:"#EB1E30",secondary:"#b21f24",borderColor:"#d0d2d5",primaryDark:"#bc1826",white:"#FFF",black:"#000",font:"#191919",pinkContrast:"#D43998",sidebarFontColor:"#191919",darkContrast:"#191919",greyContrast:"#dfdfdf",metaGrey:"#9b9b9b",fontGrey:"#888",fontMedium:"#474747",desktopMenuColor:"#333",grey:"#474747",backgroundLight:"#fafafa",backgroundMedium:"#f4f4f4",borderLight:"#bababa",contrastLight:"#fafafa",formDefault:"#474747",formGrey:"#bababa",formFocus:"#276fbf",formSuccess:"#157f1f",formError:"#a20021",formDisabled:"#e8e8e8",linkHover:"#BC1826",sidebarColour:"#d0d2d5",sidebarBackground:"#f4f4f4",twitter:"#4A90E2",facebook:"#3B5998",whatsapp:"#25D366",liveblog:"#fffd38",buttonShadow:"#9b9b9b",buttonText:"#4E4E4E"}}},sectionColours={news:"EB1E30",discover:"EB1E30",people:"e67e22",offbeat:"f1c40f",ents:"57d68d",sport:"40a9ef",tech:"3f57ec",wishlist:"d43998",video:"9b2fc7",videos:"9b2fc7",conversations:"c83f40"},breakPoints={mobileS:320,mobileM:375,mobileL:425,tabletS:595,tablet:768,laptop:1e3,desktop:2560,gutterSmall:1250,gutterMedium:1400,gutterLarge:1615},minWidth=val=>`(min-width: ${val}px)`,maxWidth=val=>`(max-width: ${val-1}px)`,device={mobileS:minWidth(breakPoints.mobileS),mobileM:minWidth(breakPoints.mobileM),mobileL:minWidth(breakPoints.mobileL),tabletS:minWidth(breakPoints.tabletS),tablet:minWidth(breakPoints.tablet),laptop:minWidth(breakPoints.laptop),desktop:minWidth(breakPoints.desktop),maxMobileS:maxWidth(breakPoints.mobileS),maxMobileM:maxWidth(breakPoints.mobileM),maxMobileL:maxWidth(breakPoints.mobileL),maxTabletS:maxWidth(breakPoints.tabletS),maxTablet:maxWidth(breakPoints.tablet),maxLaptop:maxWidth(breakPoints.laptop),maxDesktop:maxWidth(breakPoints.desktop),gutterSmall:minWidth(breakPoints.gutterSmall),gutterMedium:minWidth(breakPoints.gutterMedium),gutterLarge:minWidth(breakPoints.gutterLarge)},GlobalStyles=styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`

  body {
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    color: ${props=>props.theme.color.font};
    line-height: 1.2;

    @media ${device.laptop} {
      border-left-width: 0;
    }
    &.preview-swipe {
      border-left-width: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.17;
    font-weight: ${props=>props.theme.fontWeight.bold};
  }

  h1 {
    font-family: ${props=>props.theme.fontFamily.headingFont};
  }

  h2 {
    font-size: 27px;
    line-height: 26px;
  }

  h3 {
    font-size: 21px;
    line-height: 26px;
  }

  h4 {
    font-size: 18px;
    line-height: 26px;
  }

  h5 {
    font-size: 14px;
    line-height: 26px;
  }

  h6 {
    font-size: 12px;
    line-height: 26px;
  }

  p {
    font-size: 18px;
    line-height: 1.45em;
  }

  a {
    color: ${props=>props.theme.color.primary};
    text-decoration: none;
  }

  ul, ol {
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    font-size: 18px;
    line-height: 26px;
  }


  /* reset button styles */
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    cursor: pointer;
    outline: 0;
  }
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /* amp overrides */
  amp-sidebar {
    background: none;
  }
  amp-sidebar {
    @media (min-width: 768px) {
      overflow: ${props=>props.cleanAmp?"inherit":"scroll !important"};
      -ms-overflow-style: none;
      width: auto;
    }
    @media (max-width: 400px) {
      max-width: 100%;
      width: 100%;
    }
     ::-webkit-scrollbar {
        display: none;
     }
  }

  .modal {
    display: none;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }

  /* style injected evolok adblocker */
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
    opacity: 0.5;
  }
  .ev .modal-dialog {
    width: 700px;
    top: 50%;
    transform: translateY(-50%);
  }
  .ev.modal {
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .modal-content {
    overflow: hidden;
    border-radius: 0;
    padding-bottom: 20px;
    iframe {
      border: 0;
      max-width: 100%;
      height: 60px;
    }
    .col-md-12 {
      padding: 0;
    }
    .ev .row {
      margin-right: 0;
      margin-left: 0;
    }
    .site-title {
      margin-bottom: 20px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid ${props=>props.theme.color.contrastMedium};
    }
    .text-center {
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 19px;
      }
    }
    p {
      font-size: 16px;
    }
    a, a:hover {
      color: ${props=>props.theme.color.font};
    }
    a:hover {
      opacity: 0.9;
    }
    .btn {
      background-color: ${props=>props.theme.color.primary};
      background-image: none;
      border: none;
      border-radius: 0;
      width: 215px;
      padding: 10px;
      margin: 10px 20px;
      color: ${props=>props.theme.color.white};
      font-size: 14px;
      font-family: ${props=>props.theme.fontFamily.primaryFont};
      flex-grow: 1;
    }
    .btn:hover {
      color: ${props=>props.theme.color.white};
      background-color: ${props=>props.theme.color.primary};
      opacity: 0.9;
    }
  }
  .modal.fade .modal-dialog {
    transition: transform .3s ease-out;
    transform: translate(0,-110%);
  }
  .modal.in .modal-dialog {
    transform: translateY(-50%);
  }
`},51:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return height})),__webpack_require__.d(__webpack_exports__,"j",(function(){return width})),__webpack_require__.d(__webpack_exports__,"d",(function(){return layout})),__webpack_require__.d(__webpack_exports__,"i",(function(){return sizes})),__webpack_require__.d(__webpack_exports__,"c",(function(){return heights})),__webpack_require__.d(__webpack_exports__,"e",(function(){return media})),__webpack_require__.d(__webpack_exports__,"h",(function(){return placeholder})),__webpack_require__.d(__webpack_exports__,"a",(function(){return fallback})),__webpack_require__.d(__webpack_exports__,"f",(function(){return noloading})),__webpack_require__.d(__webpack_exports__,"g",(function(){return on}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(141);const height=function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.width==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`);break;case"fixed-height":if(null==props[propName])return new Error(`Props 'height is required for layout '${props.layout}'`)}},width=function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.height==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`)}},layout=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["container","fill","fixed","fixed-height","flex-item","intrinsic","nodisplay","responsive"]),sizes=_helpers__WEBPACK_IMPORTED_MODULE_1__.b,heights=_helpers__WEBPACK_IMPORTED_MODULE_1__.b,media=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,placeholder=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,fallback=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,noloading=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,on=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string},58:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createImageFromString}));const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");canvas.width=1,canvas.height=1;const createImage=(r=0,g=0,b=0)=>(ctx.fillStyle=`rgb(${r}, ${g}, ${b})`,ctx.fillRect(0,0,1,1),canvas.toDataURL("image/png","")),createImageFromString=(str="")=>{let hash=0;for(let i=0;i<str.length;i++)hash=str.charCodeAt(i)+((hash<<5)-hash),hash&=hash;const rgb=[0,0,0];for(let i=0;i<3;i++)rgb[i]=hash>>8*i&255;return createImage(...rgb)};__webpack_exports__.b=createImage},61:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return JW_PLAYER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BRIGHTCOVE})),__webpack_require__.d(__webpack_exports__,"g",(function(){return YOUTUBE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DUGOUT_VIDEO})),__webpack_require__.d(__webpack_exports__,"c",(function(){return GALLERY})),__webpack_require__.d(__webpack_exports__,"d",(function(){return IMAGE})),__webpack_require__.d(__webpack_exports__,"f",(function(){return POLAR}));const JW_PLAYER="jw_player",BRIGHTCOVE="brightcove",YOUTUBE="youtube",DUGOUT_VIDEO="dugout-video",GALLERY="gallery",IMAGE="image",POLAR="polar"},65:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_Mocker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(94),_mockWithRequest__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(82);class MockArticleContent extends _Mocker__WEBPACK_IMPORTED_MODULE_1__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_2__.a)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_2__.d)(props.articleOverrides),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_2__.g)(props.reqOverrides)}}MockArticleContent.propTypes={articleOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_1__.a.propTypes},MockArticleContent.defaultProps={articleOverrides:{},reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_1__.a.defaultProps},__webpack_exports__.a=MockArticleContent},66:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(3),classnames=__webpack_require__(224),classnames_default=__webpack_require__.n(classnames);var jsx_runtime=__webpack_require__(0);const Icon=styled_components_browser_esm.default.span`
  height: 24px;
  width: 24px;
  display: inline-block;
  text-align: center;

  svg {
    fill: ${props=>props.theme.color.icons};
    width: auto;
    height: 24px;
  }
`,TextField=({className:className="",fieldName:fieldName,fieldId:fieldId,displayName:displayName="",placeholder:placeholder="",helperText:helperText="",inputType:inputType="text",valueMissingMsg:valueMissingMsg="",patternMismatchMsg:patternMismatchMsg="",pattern:pattern=!1,requiredField:requiredField=!1,showPassword:showPassword=!1,value:value="",autocomplete:autocomplete=""})=>Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("input",{defaultValue:value,type:inputType,id:fieldId,name:fieldName,placeholder:placeholder||void 0,pattern:pattern||void 0,required:requiredField,"aria-controls":fieldId+"-helper-text","aria-describedby":fieldId+"-helper-text",autoComplete:autocomplete,className:classnames_default()("form-textfield",{className:className},{valid:value})}),Object(jsx_runtime.jsx)("label",{htmlFor:fieldId,children:displayName}),showPassword&&Object(jsx_runtime.jsxs)("a",{className:"show-password show",children:[Object(jsx_runtime.jsx)(Icon,{className:"hide-icon",dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25">\n    <path fill="#787877" fill-rule="evenodd" d="M12 6.7a5 5 0 014.8 6.4l3 3c1.4-1.1 2.5-2.7 3.2-4.4a11.8 11.8 0 00-14.6-7L10.5 7l1.5-.2zm-8.6-4L2 4l2.7 2.7c-1.6 1.3-3 3-3.7 5a11.8 11.8 0 0015.3 6.6l3.4 3.5 1.4-1.4L3.4 2.6zm8.6 14a5 5 0 01-4.5-7.2L9 11.1l-.1.6a3 3 0 003.6 2.9l1.5 1.6c-.6.3-1.3.5-2.1.5zm3-5.4a3 3 0 00-2.7-2.6l2.7 2.6z" clip-rule="evenodd"/>\n  </svg>\n'}}),Object(jsx_runtime.jsx)(Icon,{className:"show-icon",dangerouslySetInnerHTML:{__html:'\n<svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 6c-6.667 0-12.36 4.147-14.667 10 2.307 5.853 8 10 14.667 10s12.36-4.147 14.667-10c-2.307-5.853-8-10-14.667-10zM16 22.667c-3.68 0-6.667-2.987-6.667-6.667s2.987-6.667 6.667-6.667 6.667 2.987 6.667 6.667-2.987 6.667-6.667 6.667zM16 12c-2.213 0-4 1.787-4 4s1.787 4 4 4 4-1.787 4-4-1.787-4-4-4z" fill="#787877"/></svg>\n'}})]}),helperText&&Object(jsx_runtime.jsx)("span",{className:"help-text",id:fieldId+"-helper-text",children:helperText}),valueMissingMsg&&Object(jsx_runtime.jsx)("span",{className:"error-text","visible-when-invalid":"valueMissing","validation-for":fieldId,children:valueMissingMsg}),patternMismatchMsg&&Object(jsx_runtime.jsx)("span",{className:"error-text","visible-when-invalid":"patternMismatch","validation-for":fieldId,children:patternMismatchMsg}),Object(jsx_runtime.jsx)("span",{className:"error-text","visible-when-invalid":"customError","validation-for":fieldId})]});TextField.propTypes={className:prop_types_default.a.string,fieldName:prop_types_default.a.string.isRequired,fieldId:prop_types_default.a.string.isRequired,displayName:prop_types_default.a.string,placeholder:prop_types_default.a.string,helperText:prop_types_default.a.string,inputType:prop_types_default.a.string,valueMissingMsg:prop_types_default.a.string,patternMismatchMsg:prop_types_default.a.string,pattern:prop_types_default.a.string,requiredField:prop_types_default.a.bool,showPassword:prop_types_default.a.bool,value:prop_types_default.a.string,autocomplete:prop_types_default.a.string},TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},displayName:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},placeholder:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},helperText:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},inputType:{defaultValue:{value:"'text'",computed:!1},type:{name:"string"},required:!1,description:""},valueMissingMsg:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},patternMismatchMsg:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},pattern:{defaultValue:{value:"false",computed:!1},type:{name:"string"},required:!1,description:""},requiredField:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},showPassword:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},value:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},autocomplete:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},fieldName:{type:{name:"string"},required:!0,description:""},fieldId:{type:{name:"string"},required:!0,description:""}}};var FormTextFieldInput=TextField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Forms/FormTextFieldInput.js"]={name:"TextField",docgenInfo:TextField.__docgenInfo,path:"app/component/library/Forms/FormTextFieldInput.js"});const Fieldwrapper=styled_components_browser_esm.default.div`
  width: 100%;
  position: relative;

  input {
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    color: ${props=>props.theme.color.formDefault};
    font-size: 16px;
    font-weight: normal;
    letter-spacing: normal;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    padding: 16px;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 4px;
    background: ${props=>props.theme.color.white};
    appearance: none;
    margin-bottom: 22px;

    ${props=>props.hasErrorMsg&&"\n      &.user-invalid {\n        margin-bottom: 0;\n      }\n      &:focus {\n          margin-bottom: 22px;\n        }\n    "};
  }

  .error-text,
  .help-text {
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 5px 0 0 16px;
    font-size: 12px;
    letter-spacing: normal;
    line-height: 1;
    z-index: 1;
    text-align: left;
    margin-bottom: 22px;
  }

  .error-text {
    color: ${props=>props.theme.color.formError};
  }

  .help-text {
    color: ${props=>props.theme.color.fontMedium};
  }

  .user-invalid ~ .visible {
    display: block;
    opacity: 1;
  }

  input:focus {
    outline: 0;

    ~ .error-text,
    .help-text {
      display: none;
      opacity: 0;
    }
  }

  label {
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    color: ${props=>props.theme.color.formDefault};
    line-height: 1.15rem;
    left: 16px;
    right: initial;
    top: 31px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 16px;
    font-weight: ${props=>props.theme.fontWeight.light};
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    position: absolute;
    transform-origin: left top;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    user-select: none;
    overflow: hidden;
    will-change: transform;
  }

  input[placeholder] ~ label {
    transform: translateY(-210%) scale(0);
  }

  input.valid,
  input.user-invalid:not(.valueMissing) {
    & ~ label {
      transform: translateY(-210%) scale(0.75);
      background: ${props=>props.theme.color.white};
      padding: 0 4px;
    }
  }

  /* keep this selector separate or Firefox breaks it */
  input:-webkit-autofill ~ label {
    transform: translateY(-210%) scale(0.75);
    background: ${props=>props.theme.color.white};
    padding: 0 4px;
  }

  input.user-invalid {
    border: 2px solid ${props=>props.theme.color.formError};
  }

  input[required='true'].user-valid {
    border: 2px solid ${props=>props.theme.color.formSuccess};
  }

  input:focus {
    border: 2px solid ${props=>props.theme.color.formFocus};
  }

  .show-password {
    text-decoration: none;
    position: absolute;
    right: 18px;
    top: 16px;
    font-size: 16px;
    user-select: none;
    cursor: pointer;

    .show-icon {
      display: none;
    }
  }
  .show-password.show .hide-icon {
    display: none;
  }
  .show-password.show .show-icon {
    display: inline-block;
  }

  input[name='password'] {
    padding-right: 62px;
  }
`,FormTextField_TextField=({className:className,...passThroughProps})=>Object(jsx_runtime.jsx)(Fieldwrapper,{className:className,hasErrorMsg:passThroughProps.patternMismatchMsg||passThroughProps.valueMissingMsg,children:Object(jsx_runtime.jsx)(FormTextFieldInput,{...passThroughProps})});FormTextField_TextField.propTypes={className:prop_types_default.a.string},FormTextField_TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{className:{type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=FormTextField_TextField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Forms/FormTextField.js"]={name:"TextField",docgenInfo:FormTextField_TextField.__docgenInfo,path:"app/component/library/Forms/FormTextField.js"})},74:function(module,__webpack_exports__,__webpack_require__){"use strict";var RequestProvider=__webpack_require__(10),compose=__webpack_require__(157),Ad=__webpack_require__(222),ads=__webpack_require__(223);__webpack_require__(122);const createAdUnitPath=(page,pageType,id,cleanAmp,thirdPartyAd)=>{const hierarchy=page.hierarchy?page.hierarchy.map(({path:path,sourcePath:sourcePath})=>(sourcePath||path).split("/").slice(-1)[0]):page.section.path.split("/").slice(1),{networkId:networkId,adUnitHomepage:adUnitHomepage,thirdPartyUnitHomepage:thirdPartyUnitHomepage}=ads.a[page.adConfig.data.publication.domain],ampAppend=cleanAmp?"_amp":"";return[networkId,`${thirdPartyAd?thirdPartyUnitHomepage:adUnitHomepage}${ampAppend}`,...["hp","main"].map((unit,i)=>hierarchy[i]?`${hierarchy[i]}${ampAppend}`:`${unit}${ampAppend}`).map(unit=>"in100_"+unit),""+pageType,""+(null==id?void 0:id.replace(/_\d+$/,""))]};var jsx_runtime=__webpack_require__(0);__webpack_exports__.a=Object(compose.a)(RequestProvider.withRequest,MPU=>{const MPUWithBlock=props=>props.article||props.section?Object(jsx_runtime.jsx)(MPU,{...props}):null;return MPUWithBlock.propTypes={...MPU.propTypes},MPUWithBlock},MPU=>{const MPUWithHideDisplayAdsFilter=({article:article,...props})=>{var _article$extra,_article$extra2;return!0===(null==article||null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isHideDisplayAds)||!0===(null==article||null===(_article$extra2=article.extra)||void 0===_article$extra2?void 0:_article$extra2.isDisableAllAds)?null:Object(jsx_runtime.jsx)(MPU,{article:article,...props})};return MPUWithHideDisplayAdsFilter.propTypes={...MPU.propTypes},MPUWithHideDisplayAdsFilter},MPU=>{const MPUWithAdUnitPathArr=({id:id,cleanAmp:cleanAmp,article:article,section:section,jsGlobals:jsGlobals,thirdPartyAd:thirdPartyAd=!1,...props})=>Object(jsx_runtime.jsx)(MPU,{id:id,cleanAmp:cleanAmp,adUnitPathArr:createAdUnitPath(article||section,jsGlobals.pageType,id,cleanAmp,thirdPartyAd),...props}),{adUnitPathArr:adUnitPathArr,...propTypes}=MPU.propTypes;return MPUWithAdUnitPathArr.propTypes=propTypes,MPUWithAdUnitPathArr})(Ad.default)},75:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return fastlyOptions})),__webpack_require__.d(__webpack_exports__,"a",(function(){return appendQueryString}));const fastlyOptions=(width,height,crop)=>Object.entries({width:width,height:height,crop:crop,auto:"webp",quality:75}).filter(([,v])=>Boolean(v)).reduce((acc,[key,value])=>({...acc,[key]:value}),{}),appendQueryString=(url,params)=>`${url}${/\?/.test(url)?"&":"?"}${new URLSearchParams(params).toString()}`},762:function(module){module.exports=JSON.parse('{"dirty-amp.js":"/_build/dirty-amp.6c6170f5b49e7ce68ea6.js","dirty-amp.js.map":"/_build/dirty-amp.6c6170f5b49e7ce68ea6.js.map","preview.js":"/_build/preview.6917990c549c3c8ef070.js","preview.js.map":"/_build/preview.6917990c549c3c8ef070.js.map","profile.js":"/_build/profile.857623d3b1482c6ecffb.js","profile.js.map":"/_build/profile.857623d3b1482c6ecffb.js.map","register.js":"/_build/register.7be407ad2b03aebb9eaf.js","register.js.map":"/_build/register.7be407ad2b03aebb9eaf.js.map","settings.js":"/_build/settings.b8b478de5669d1bb4006.js","settings.js.map":"/_build/settings.b8b478de5669d1bb4006.js.map","thankyou.js":"/_build/thankyou.70ac4a5b7cd5c313c3f5.js","thankyou.js.map":"/_build/thankyou.70ac4a5b7cd5c313c3f5.js.map","sw.js":"/_build/sw.js","sw.js.map":"/_build/sw.js.map"}')},786:function(module,exports,__webpack_require__){__webpack_require__(787),__webpack_require__(971),__webpack_require__(972),__webpack_require__(1131),__webpack_require__(1143),__webpack_require__(1145),__webpack_require__(1150),module.exports=__webpack_require__(1334)},82:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return setMockArticleOverrides})),__webpack_require__.d(__webpack_exports__,"h",(function(){return setMockSectionOverrides})),__webpack_require__.d(__webpack_exports__,"g",(function(){return setMockReqOverrides})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setMockConfigurationOverrides})),__webpack_require__.d(__webpack_exports__,"f",(function(){return setMockLocalsOverrides})),__webpack_require__.d(__webpack_exports__,"a",(function(){return setIsArticle})),__webpack_require__.d(__webpack_exports__,"c",(function(){return setIsSection})),__webpack_require__.d(__webpack_exports__,"b",(function(){return setIsOther}));var createImage=__webpack_require__(58);var mockArticle=()=>({type:"article",id:"000",status:!0,title:"This is the title",titleShort:"This is a short title",lead:"This is the lead",sidebar:{data:{publication:{}},layoutSettings:[{type:"Ad"},{type:"Ad"}]},sections:[{name:"news",path:"/news",id:"1099",uuid:"6b6b7f3a-60f8-4e09-ac62-5673ee0aa972",sourceId:"3399451",sourceName:"news",sourcePath:"news",changed:"1597822641"}],hierarchy:[{path:"./",name:"Crumb 1",sourcePath:"/crumb1"},{path:"./",name:"Crumb 2",sourcePath:"/crumb2"}],extra:{},updated:"1588169959",publish:"1588169959",unPublish:"2145916800",isLiveBlog:!1,authors:[{name:"I am the Author",id:"1048",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:null,imageUrl:Object(createImage.b)(0,150,0),twitter:"SomeJourno",facebook:null,location:null,path:"/author/jack-de-menezes",description:null}],inlineImages:[],articleTypes:[],adConfig:{data:{publication:{domain:"indy100.com"}},adConfig:[{type:"TopBanner",label:"Top Banner",id:"nhu0bbjw",value:!0}]},hero:[{type:"image",data:{title:"Old-Trafford-hosts-the-Manchester-derby.jpg",description:null,caption:"This is a hero caption",copyright:"Hero copyright",credit:"Hero credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:"8291876",bundle:"remote_image",mid:1038,changed:"1588226995",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"},localCaption:"This is a hero local caption",localCopyright:"Local hero copyright"}}],body:[{type:"markup",data:{markup:'<p dir="ltr">Paragraph 1</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 2</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 3</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 4</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 5</p>'}}]});const getHero=(type,title)=>({video:[{type:"jw_player",data:{id:"gzjttWAQ",bundle:"jw_player_id",mid:41424,changed:"1593649785"}},{type:"image",data:{title:"coronavirus.jpg",description:null,caption:"Video caption",copyright:"EPA",credit:"EPA",alt:null,doNotReuse:!1,url:Object(createImage.a)(`${title}-${type}`),id:"8499441",bundle:"remote_image",mid:41422,changed:"1593649785",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],image:[{type:"image",data:{title:"hero.jpg",description:null,caption:"Hero caption",copyright:"AFP",credit:"AFP",alt:null,doNotReuse:!1,url:Object(createImage.a)(`${title}-${type}`),id:"8420361",bundle:"remote_image",mid:25231,changed:"1589940955",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}]}[type]);var article=({title:title,heroType:heroType="image",live:live=!1,articleType:articleType="Liveblog"})=>({type:"article",id:"2233",status:!0,title:"Image "+title,titleShort:`Image ${title} - short`,titleSocial:`Image ${title} - social`,titleSEO:null,lead:"The leader",path:"/",articleTypes:[{name:articleType,path:"/article-type/liveblog",id:"16733"}],hierarchy:[{name:"hierarchy 1",path:"/",id:"869"},{name:"hierarchy 2",path:"/news/world",id:"954"},{name:"hierarchy 3",path:"/news/world/middle-east",id:"965"}],workflow:"Draft",sections:[{name:"section 1",path:"/",id:"869"},{name:"section 2",path:"/",id:"954"},{name:"section 3",path:"/",id:"965"}],hero:getHero(heroType,title),photoArticle:!1,sponsorPrefix:null,sponsorName:null,sponsorURL:null,sponsorImage:null,sponsorLogo:"",sponsorMoreFrom:[],premium:!1,sensitive:!1,authors:[{name:"By The Newsroom",id:null,email:null,firstName:null,lastName:null,imageUrl:Object(createImage.a)(title+"-author")}],updated:1593764687,changed:1593764680,publish:1589885019,unPublish:1909232586,isLiveBlog:live,showLead:!0}),articleX2=articleOverrides=>({name:"2 articles",type:"ArticleX2",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"ArticleX2 article 1"}),...articleOverrides},{...article({title:"ArticleX2 article 2",heroType:"video",live:!0}),...articleOverrides}]}),articleX3=articleOverrides=>({name:"3 articles",type:"ArticleX3",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"ArticleX3 article 1"}),...articleOverrides},{...article({title:"ArticleX3 article 2 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...article({title:"ArticleX3 article 3"}),...articleOverrides}]}),articleX8=articleOverrides=>({name:"8 articles",type:"ArticleX8",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"ArticleX8 article 1",heroType:"video"}),...articleOverrides},{...article({title:"ArticleX8 article 2"}),...articleOverrides},{...article({title:"ArticleX8 article 3 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...article({title:"ArticleX8 article 4"}),...articleOverrides},{...article({title:"ArticleX8 article 5"}),...articleOverrides},{...article({title:"ArticleX8 article 6"}),...articleOverrides},{...article({title:"ArticleX8 article 7"}),...articleOverrides},{...article({title:"ArticleX8 article 8"}),...articleOverrides}]});var jsx_runtime=__webpack_require__(0);const mockWithRequest_mockArticle={},mockWithRequest_mockSection={},mockReq={},mockWithRequest_mockConfiguration={},mockLocals={},mockRequestProps={res:{locals:mockLocals},req:mockReq,cleanAmp:!1,article:mockWithRequest_mockArticle,section:mockWithRequest_mockSection,menu:{fullMenu:{name:"indy100.com Full Nav",domain:"indy100.com",bundle:"full_nav",id:"2",uuid:"fullmenu-uuid",menu:[{title:"Menu item 1",id:"nav_1",path:"./",children:[{title:"Subnav 1",id:"subnav_1",path:"./"},{title:"Subnav 2",id:"subnav_1",path:"./"},{title:"Subnav 3",id:"subnav_1"},{title:"Subnav 4",id:"subnav_1",path:"./"},{title:"Subnav 5",id:"subnav_1",path:"./"},{title:"Subnav 6",id:"subnav_1",path:"./"},{title:"Subnav 7",id:"subnav_1",path:"./"},{title:"Subnav 8",id:"subnav_1",path:"./"}],expanded:!1},{title:"Menu item 2",id:"nav_2",path:"./"},{title:"Menu item 3",id:"nav_2"},{title:"Menu item 4",id:"nav_3",path:"./"},{title:"Menu item 5",id:"nav_4",path:"./"}]},navbarMenu:{name:"indy100.com Nav Bar",domain:"indy100.com",bundle:"nav_bar",id:"1",uuid:"navbar-menu-uuid",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./"},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},footerMenu:{name:"indy100.com Footer",domain:"indy100.com",bundle:"footer",id:"3",uuid:"e19e5d3a-574e-476d-9f24-05c9b0489d2f",menu:[{title:"Footer column 1",id:"footer_col_1",children:[{title:"Item 1",id:"footer_1_1",path:"./"},{title:"Item 2",id:"footer_1_2",path:"./"}],expanded:!0},{title:"Footer column 2",id:"footer_col_2",children:[{title:"Item 1",id:"footer_2_1",path:"./"},{title:"Item 2",id:"footer_2_2",path:"./"},{title:"Item 3",id:"footer_2_3",path:"./"}],expanded:!0},{title:"Footer column 3",id:"footer_col_3",children:[{title:"Item 1",id:"footer_3_1",path:"./"},{title:"Item 2",id:"footer_3_2",path:"./"},{title:"Item 3",id:"footer_3_3",path:"./"}],expanded:!0},{title:"Footer column 4",id:"footer_col_4",children:[{title:"Item 1",id:"footer_4_1",path:"./"},{title:"Item 2",id:"footer_4_2",path:"./"},{title:"Item 3",id:"footer_4_3",path:"./"},{title:"Item 4",id:"footer_4_4",path:"./"}],expanded:!0},{title:"Footer column 5",id:"footer_col_5",children:[{title:"Item 1",id:"footer_5_1",path:"./"},{title:"Item 2",id:"footer_5_2",path:"./"},{title:"Item 3",id:"footer_5_3",path:"./"},{title:"Item 4",id:"footer_5_4",path:"./"},{title:"Item 5",id:"footer_5_5",path:"./"}],expanded:!0}]}},jsGlobals:{},configuration:mockWithRequest_mockConfiguration},RequestProvider=__webpack_require__(10);RequestProvider.withRequest=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,...mockRequestProps}),RequestProvider.withRequestOnly=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,req:mockReq,res:{locals:{configuration:{}}}});const resetAndAssignOverrides=(mock,orig,overrides)=>{var obj;obj=mock,Object.keys(obj).forEach(key=>{delete obj[key]}),Object.assign(mock,orig,overrides)},setMockArticleOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockArticle,mockArticle(),overrides)},setMockSectionOverrides=overrides=>{var articleOverrides;resetAndAssignOverrides(mockWithRequest_mockSection,{type:"section",section:{name:"News",path:"/",sourcePath:"news"},adConfig:{data:{publication:{domain:"indy100.com"}},adConfig:[]},components:[{name:"1 articles",type:"ArticleX1",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"ArticleX1 article"}),...articleOverrides}]},articleX2(),articleX8(),{name:"Title",type:"Title",labelText:"This is a section title component",labelLink:null,commercialBadgeTerm:null,commercialBadgeImage:null,commercialBadgeLink:null},articleX3()]},overrides)},setMockReqOverrides=overrides=>{resetAndAssignOverrides(mockReq,{path:"",cookies:{},url:""},overrides)},setMockConfigurationOverrides=overrides=>(resetAndAssignOverrides(mockWithRequest_mockConfiguration,(mockDomain=>({domain:mockDomain,jsGlobals:{userComments:[]},baseUrl:"",articleThemes:{lifestyle:["/life-style"],voices:["/voices"]},newslettersConfig:{receiveIndyHeadlinesNews:{regSourceNewsletter:"",section:"sectionName",title:"newsletterTitle",description:"newsletterDescription",label:"newsletterLabel",class:"newsletterClass",regTitle:"regTitle"}},sectionThemes:{lifestyle:["/life-style"],premium:["/independentpremium"],best:["/extras/indybest"],voices:["/voices"]},feeds:{mmm:{src:"/mockMostPopularFeed.json",items:"articles"}},subdomain:{static:"static-dev"},componentThemes:{voices:["/voices"]},subscriptionConfig:{uk:{premium:{monthly:{headerCopy:"premium monthly header copy",price:"£premium-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{introOffer:"premium anual intro offer"}},tide:{monthly:{headerCopy:"tide monthly header copy",price:"£tide-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{}},student:{}}},locale:"UK",jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",inlinePlayerType:"clicktoplay",commercialPlayerType:"autoplay"},jwplayerPlayerIds:{default:{defaultPlayer:"XLzx33eA",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"9ygSIn9G",commercialPlayer:"liFHUI6p"},premium:{defaultPlayer:"5o5ADYp0",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"iFfmiGED",commercialPlayer:"liFHUI6p"},amp:{defaultPlayer:"OUuXFa7T",noAdsPlayer:"liFHUI6p",sensitivePlayer:"uc5S9Kil",inlinePlayer:"cEvdfzWH",commercialPlayer:"sQ67rESa"}},social:{}}))("indy100.com"),overrides),mockWithRequest_mockConfiguration),setMockLocalsOverrides=overrides=>{resetAndAssignOverrides(mockLocals,{cleanAmp:!1,article:mockWithRequest_mockArticle,configuration:mockWithRequest_mockConfiguration,menu:{fullMenu:{name:"indy100.com Full Nav",domain:"indy100.com",bundle:"full_nav",id:"2",uuid:"fullmenu-uuid",menu:[{title:"Menu item 1",id:"nav_1",path:"./",children:[{title:"Subnav 1",id:"subnav_1",path:"./"},{title:"Subnav 2",id:"subnav_1",path:"./"},{title:"Subnav 3",id:"subnav_1"},{title:"Subnav 4",id:"subnav_1",path:"./"},{title:"Subnav 5",id:"subnav_1",path:"./"},{title:"Subnav 6",id:"subnav_1",path:"./"},{title:"Subnav 7",id:"subnav_1",path:"./"},{title:"Subnav 8",id:"subnav_1",path:"./"}],expanded:!1},{title:"Menu item 2",id:"nav_2",path:"./"},{title:"Menu item 3",id:"nav_2"},{title:"Menu item 4",id:"nav_3",path:"./"},{title:"Menu item 5",id:"nav_4",path:"./"}]},navbarMenu:{name:"indy100.com Nav Bar",domain:"indy100.com",bundle:"nav_bar",id:"1",uuid:"navbar-menu-uuid",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./"},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},footerMenu:{name:"indy100.com Footer",domain:"indy100.com",bundle:"footer",id:"3",uuid:"e19e5d3a-574e-476d-9f24-05c9b0489d2f",menu:[{title:"Footer column 1",id:"footer_col_1",children:[{title:"Item 1",id:"footer_1_1",path:"./"},{title:"Item 2",id:"footer_1_2",path:"./"}],expanded:!0},{title:"Footer column 2",id:"footer_col_2",children:[{title:"Item 1",id:"footer_2_1",path:"./"},{title:"Item 2",id:"footer_2_2",path:"./"},{title:"Item 3",id:"footer_2_3",path:"./"}],expanded:!0},{title:"Footer column 3",id:"footer_col_3",children:[{title:"Item 1",id:"footer_3_1",path:"./"},{title:"Item 2",id:"footer_3_2",path:"./"},{title:"Item 3",id:"footer_3_3",path:"./"}],expanded:!0},{title:"Footer column 4",id:"footer_col_4",children:[{title:"Item 1",id:"footer_4_1",path:"./"},{title:"Item 2",id:"footer_4_2",path:"./"},{title:"Item 3",id:"footer_4_3",path:"./"},{title:"Item 4",id:"footer_4_4",path:"./"}],expanded:!0},{title:"Footer column 5",id:"footer_col_5",children:[{title:"Item 1",id:"footer_5_1",path:"./"},{title:"Item 2",id:"footer_5_2",path:"./"},{title:"Item 3",id:"footer_5_3",path:"./"},{title:"Item 4",id:"footer_5_4",path:"./"},{title:"Item 5",id:"footer_5_5",path:"./"}],expanded:!0}]}},jsGlobals:{adTargeting:""}},overrides)},setIsArticle=()=>{delete mockRequestProps.section,mockRequestProps.article=mockWithRequest_mockArticle},setIsSection=()=>{delete mockRequestProps.article,mockRequestProps.section=mockWithRequest_mockSection},setIsOther=()=>{delete mockRequestProps.article,delete mockRequestProps.section}},85:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return heroType})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getHeroType})),__webpack_require__.d(__webpack_exports__,"e",(function(){return internalLinkCount})),__webpack_require__.d(__webpack_exports__,"a",(function(){return externalLinkCount})),__webpack_require__.d(__webpack_exports__,"f",(function(){return videoLinkCount})),__webpack_require__.d(__webpack_exports__,"b",(function(){return findDateBasedOnPreference}));var _brightsites_flow_core_lib_component_helper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(289),_constants_heroType__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(61);const heroType=hero=>{const priorityList=[_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.b,_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.c,_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.d];if(!hero)return[];return{...hero.filter(e=>priorityList.includes(e.type)).sort((a,b)=>priorityList.indexOf(a.type)-priorityList.indexOf(b.type))[0]||hero[0],isHero:!0}},getHeroType=hero=>{const articleType=hero?heroType(hero).type:_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.d;return[_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_1__.b].includes(articleType)?"video":articleType},linkCount=(body,domain,urlMatcher)=>{let counter=0;return body.filter(x=>"markup"===x.type).map(x=>{var _x$data;return null===(_x$data=x.data)||void 0===_x$data?void 0:_x$data.markup}).filter(Boolean).forEach(markup=>{const matches=markup.match(/href="(.*?)"/g);if(matches){const links=null==matches?void 0:matches.map(x=>x.slice(6,-1)).filter(urlMatcher);counter+=links.length}}),counter},internalLinkCount=(body,domain)=>linkCount(body,0,url=>url.match(new RegExp("^\\/\\w|^\\/\\/"+domain))),externalLinkCount=(body,domain)=>linkCount(body,0,url=>!url.match(new RegExp("^\\/\\w|^\\/\\/"+domain))),videoLinkCount=(body,hero)=>{const markups=body.filter(x=>"video-jwplayer"===x.type||"jw_player"===x.type).map(x=>{var _x$data2;return null===(_x$data2=x.data)||void 0===_x$data2?void 0:_x$data2.markup}),totalHeroVideos="video"===getHeroType(hero)?1:0;return markups.length+totalHeroVideos},findDateBasedOnPreference=article=>{const{extra:extra,overrideDate:overrideDate,firstPublished:firstPublished,updated:updated}=article;switch(extra.displayDatePreference){case"publishedDate":return firstPublished;case"lastUpdatedDate":return Object(_brightsites_flow_core_lib_component_helper__WEBPACK_IMPORTED_MODULE_0__.getLatestUpdateTime)(article);case"vanityDate":return overrideDate;default:return overrideDate||updated||firstPublished}}},854:function(module,exports){},93:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return TOP_BANNER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BOTTOM_BANNER})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WALLPAPER})),__webpack_require__.d(__webpack_exports__,"b",(function(){return NATIVE})),__webpack_require__.d(__webpack_exports__,"e",(function(){return adConfiguration}));const TOP_BANNER="TopBanner",BOTTOM_BANNER="BottomBanner",WALLPAPER="WallPaper",NATIVE="Native",adConfiguration=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.some(({type:type,value:value})=>type===needle&&!0===value)},94:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(1),prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),server_browser=__webpack_require__(221),styled_components_browser_esm=__webpack_require__(3),mockWithRequest=__webpack_require__(82),ads=__webpack_require__(223),jsx_runtime=__webpack_require__(0);const MPUModule=__webpack_require__(222);let mockMPUID=0;const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: silver;
    outline: dashed orange 2px;
    overflow: hidden;

    background: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) calc(50% - 0.8px),
        orange 50%,
        rgba(0, 0, 0, 0) calc(50% + 0.8px),
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        to top right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) calc(50% - 0.8px),
        orange 50%,
        rgba(0, 0, 0, 0) calc(50% + 0.8px),
        rgba(0, 0, 0, 0) 100%
      );
  }

  p {
    font-family: Courier;
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-shadow: -1px -1px 1px #fff, 1px -1px 1px #fff, -1px 1px 1px #fff,
      1px 1px 1px #fff;
  }
`,getMaxSize=sizesArr=>sizesArr.reduce((acc,item)=>{const area=item[0]*item[1];return area>acc.area?{max:item,area:area}:acc},{area:0}).max,getMaxSizeFromString=sizes=>getMaxSize((sizes=>sizes.split("|").map(sizeStr=>sizeStr.split("x").map(d=>Number(d))))(sizes)),MockMPU=props=>{const styles={};let max,mpuSizeConfig;const id="mock_mpu_"+mockMPUID;return mockMPUID+=1,props.sizes?(max=getMaxSizeFromString(props.sizes),styles.width=max[0]+"px",styles.height=max[1]+"px"):props["size-key"]?mpuSizeConfig=ads.b[props["size-key"]]:(styles.width="300px",styles.height="250px"),Object(jsx_runtime.jsxs)(Wrapper,{className:props.className,children:[props["size-key"]&&Object(jsx_runtime.jsx)("style",{children:mpuSizeConfig.map(breakPoint=>`\n@media (min-width: ${breakPoint.from}px) {\n  #${id} {\n${(breakPoint=>`\n${breakPoint.supportedSizes.length?"display: flex;":"display: none;"}\n${breakPoint.supportedSizes.length?(([width,height])=>`width: ${width}px; height: ${height}px;`)(getMaxSize(breakPoint.supportedSizes)):""}`)(breakPoint)}\n  }\n}\n`).join("")}),Object(jsx_runtime.jsxs)("div",{style:styles,id:id,children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:props.id})}),props.sizes&&Object(jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:{__html:props.sizes.replace(max.join("x"),`<strong>${max.join("x")}</strong>`)}}),props["size-key"]&&Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("p",{children:props["size-key"]}),mpuSizeConfig.map(breakPoint=>Object(jsx_runtime.jsxs)("p",{children:[breakPoint.from,"+: ",!breakPoint.supportedSizes.length&&"n/a",breakPoint.supportedSizes.map(size=>size.join("x")).join("|")]},breakPoint.from))]})]})]})};MockMPU.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,sizes:prop_types_default.a.string,"size-key":prop_types_default.a.string,res:prop_types_default.a.object.isRequired},MPUModule.default=MockMPU;__webpack_require__(1349);const IframeModule=__webpack_require__(413),mockIframe_Wrapper=styled_components_browser_esm.default.div`
  height: 100px;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: silver;
  outline: dashed orange 2px;
  overflow: hidden;

  background: linear-gradient(
      to top left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      orange 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      to top right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      orange 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    );

  p {
    font-family: Courier;
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-shadow: -1px -1px 1px #fff, 1px -1px 1px #fff, -1px 1px 1px #fff,
      1px 1px 1px #fff;
  }
`;IframeModule.default=()=>Object(jsx_runtime.jsx)(mockIframe_Wrapper,{children:Object(jsx_runtime.jsx)("p",{children:"iFrame"})});var es=__webpack_require__(297),mergeDeepRight=__webpack_require__(568),Styles=__webpack_require__(5);const WithTheme=({domain:domain,cleanAmp:cleanAmp,children:children})=>Object(jsx_runtime.jsxs)(styled_components_browser_esm.ThemeProvider,{theme:{...Object(mergeDeepRight.a)(Styles.e.default,Styles.e[domain]||{}),domain:domain},children:[Object(jsx_runtime.jsx)(Styles.a,{cleanAmp:cleanAmp}),Object(react.cloneElement)(children)]});WithTheme.propTypes={children:prop_types_default.a.element.isRequired,domain:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool},WithTheme.__docgenInfo={description:"",methods:[],displayName:"WithTheme",props:{children:{type:{name:"element"},required:!0,description:""},domain:{type:{name:"string"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var components_WithTheme=WithTheme;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/WithTheme.js"]={name:"WithTheme",docgenInfo:WithTheme.__docgenInfo,path:"stories/helpers/components/WithTheme.js"});class Mocker_Mocker extends react.Component{constructor(props){super(props),this.setOverrides(props);const{domain:domain}=Object(mockWithRequest.e)(props.configurationOverrides);Object(mockWithRequest.f)(props.localsOverrides);const sheet=new styled_components_browser_esm.ServerStyleSheet;Object(server_browser.renderToString)(sheet.collectStyles(Object(jsx_runtime.jsx)(components_WithTheme,{domain:domain,cleanAmp:props.localsOverrides.cleanAmp,children:Object(react.cloneElement)(this.props.children)}))),this.css=sheet.instance.toString(),sheet.seal(),this.domain=domain}setOverrides(){}render(){return Object(jsx_runtime.jsxs)(es.a,{initialize:{languages:[{name:"English",code:"en"}],translation:{mostPopular:["Most Popular","alo"]},options:{defaultLanguage:"en",renderToStaticMarkup:server_browser.renderToStaticMarkup}},children:[Object(jsx_runtime.jsx)("style",{dangerouslySetInnerHTML:{__html:this.css}}),Object(jsx_runtime.jsx)(components_WithTheme,{domain:this.domain,children:Object(react.cloneElement)(this.props.children)})]})}}Mocker_Mocker.propTypes={children:prop_types_default.a.element.isRequired,configurationOverrides:prop_types_default.a.object,localsOverrides:prop_types_default.a.object},Mocker_Mocker.defaultProps={configurationOverrides:{},localsOverrides:{}},Mocker_Mocker.__docgenInfo={description:"",methods:[{name:"setOverrides",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Mocker",props:{configurationOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},localsOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},children:{type:{name:"element"},required:!0,description:""}}};__webpack_exports__.a=Mocker_Mocker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/Mocker.js"]={name:"Mocker",docgenInfo:Mocker_Mocker.__docgenInfo,path:"stories/helpers/components/Mocker.js"})},972:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(220)}},[[786,1,2]]]);
//# sourceMappingURL=main.d83b9923e04cbee3bf45.bundle.js.map