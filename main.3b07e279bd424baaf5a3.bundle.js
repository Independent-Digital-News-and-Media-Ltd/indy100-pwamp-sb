(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return setMockArticleOverrides})),__webpack_require__.d(__webpack_exports__,"g",(function(){return setMockSectionOverrides})),__webpack_require__.d(__webpack_exports__,"f",(function(){return setMockReqOverrides})),__webpack_require__.d(__webpack_exports__,"d",(function(){return setMockConfigurationOverrides})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setMockLocalsOverrides})),__webpack_require__.d(__webpack_exports__,"a",(function(){return setIsArticle})),__webpack_require__.d(__webpack_exports__,"b",(function(){return setIsSection}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(67);var mockArticle=()=>({type:"article",id:"000",status:!0,title:"This is the title",titleShort:"This is a short title",lead:"This is the lead",sidebar:{data:{publication:{}},layoutSettings:[{type:"Ad"},{type:"Ad"}]},sections:[{path:"",name:""}],hierarchy:[{path:"./",name:"Crumb 1",sourcePath:"/crumb1"},{path:"./",name:"Crumb 2",sourcePath:"/crumb2"}],extra:{},updated:"1588169959",publish:"1588169959",unPublish:"2145916800",isLiveBlog:!1,authors:[{name:"I am the Author",id:"1048",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:null,imageUrl:Object(createImage.b)(0,150,0),twitter:"SomeJourno",facebook:null,location:null,path:"/author/jack-de-menezes",description:null}],inlineImages:[],articleTypes:[],adConfig:{data:{publication:{domain:"indy100.com"}},adConfig:[{type:"TopBanner",label:"Top Banner",id:"nhu0bbjw",value:!0}]},hero:[{type:"image",data:{title:"Old-Trafford-hosts-the-Manchester-derby.jpg",description:null,caption:"This is a hero caption",copyright:"Hero copyright",credit:"Hero credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:"8291876",bundle:"remote_image",mid:1038,changed:"1588226995",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"},localCaption:"This is a hero local caption"}}],body:[{type:"markup",data:{markup:'<p dir="ltr">Paragraph 1</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 2</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 3</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 4</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 5</p>'}}]});const getHero=(type,title)=>({video:[{type:"jw_player",data:{id:"gzjttWAQ",bundle:"jw_player_id",mid:41424,changed:"1593649785"}},{type:"image",data:{title:"coronavirus.jpg",description:null,caption:"Video caption",copyright:"EPA",credit:"EPA",alt:null,doNotReuse:!1,url:Object(createImage.a)(`${title}-${type}`),id:"8499441",bundle:"remote_image",mid:41422,changed:"1593649785",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],image:[{type:"image",data:{title:"hero.jpg",description:null,caption:"Hero caption",copyright:"AFP",credit:"AFP",alt:null,doNotReuse:!1,url:Object(createImage.a)(`${title}-${type}`),id:"8420361",bundle:"remote_image",mid:25231,changed:"1589940955",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}]}[type]);var article=({title:title,heroType:heroType="image",live:live=!1,articleType:articleType="Liveblog"})=>({type:"article",id:"2233",status:!0,title:"Image "+title,titleShort:`Image ${title} - short`,titleSocial:`Image ${title} - social`,titleSEO:null,lead:"<p>The leader</p>",path:"/",articleTypes:[{name:articleType,path:"/article-type/liveblog",id:"16733"}],hierarchy:[{name:"hierarchy 1",path:"/",id:"869"},{name:"hierarchy 2",path:"/news/world",id:"954"},{name:"hierarchy 3",path:"/news/world/middle-east",id:"965"}],workflow:"Draft",sections:[{name:"section 1",path:"/",id:"869"},{name:"section 2",path:"/",id:"954"},{name:"section 3",path:"/",id:"965"}],hero:getHero(heroType,title),photoArticle:!1,sponsorPrefix:null,sponsorName:null,sponsorURL:null,sponsorImage:null,sponsorLogo:"",sponsorMoreFrom:[],premium:!1,sensitive:!1,authors:[{name:"By The Newsroom",id:null,email:null,firstName:null,lastName:null,imageUrl:Object(createImage.a)(title+"-author")}],updated:1593764687,changed:1593764680,publish:1589885019,unPublish:1909232586,isLiveBlog:live}),articleX3=articleOverrides=>({name:"3 articles",type:"ArticleX3",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"ArticleX3 article 1"}),...articleOverrides},{...article({title:"ArticleX3 article 2 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...article({title:"ArticleX3 article 3"}),...articleOverrides}]}),articleX4=articleOverrides=>({name:"4 articles",type:"ArticleX4",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"ArticleX4 article 1"}),...articleOverrides},{...article({title:"ArticleX4 article 2"}),...articleOverrides},{...article({title:"ArticleX4 article 3",heroType:"video"}),...articleOverrides},{...article({title:"ArticleX4 article 4",heroType:"video"}),...articleOverrides}]}),articleX8=articleOverrides=>({name:"8 articles",type:"ArticleX8",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"ArticleX8 article 1",heroType:"video"}),...articleOverrides},{...article({title:"ArticleX8 article 2"}),...articleOverrides},{...article({title:"ArticleX8 article 3 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...article({title:"ArticleX8 article 4"}),...articleOverrides},{...article({title:"ArticleX8 article 5"}),...articleOverrides},{...article({title:"ArticleX8 article 6"}),...articleOverrides},{...article({title:"ArticleX8 article 7"}),...articleOverrides},{...article({title:"ArticleX8 article 8"}),...articleOverrides}]}),compactArticleX2=articleOverrides=>({name:"2 Compact Articles",type:"CompactArticleX2",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"Compact ArticleX2 article 1"}),...articleOverrides},{...article({title:"Compact ArticleX2 article 2",heroType:"video"}),...articleOverrides}]}),heroPlus2Articles=articleOverrides=>({name:"Hero + 2 Articles",type:"HeroPlus2Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...article({title:"Hero + X2 article 1"}),...articleOverrides},{...article({title:"Hero + X2 article 2",heroType:"video",live:!0}),...articleOverrides},{...article({title:"Hero + X2 article 3"}),...articleOverrides}]}),heroPlus3Articles=articleOverrides=>({name:"Hero + 3 Articles",type:"HeroPlus3Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...article({title:"Hero + X3 article 1"}),...articleOverrides},{...article({title:"Hero + X3 article 2"}),...articleOverrides},{...article({title:"Hero + X3 article 3"}),...articleOverrides},{...article({title:"Hero + X3 article 4"}),...articleOverrides}]}),heroPlus6Articles=articleOverrides=>({name:"Hero + 6 Articles",type:"HeroPlus6Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...article({title:"Hero + X6 article 1"}),...articleOverrides},{...article({title:"Hero + X6 article 2"}),...articleOverrides},{...article({title:"Hero + X6 article 3"}),...articleOverrides},{...article({title:"Hero + X6 article 4"}),...articleOverrides},{...article({title:"Hero + X6 article 5"}),...articleOverrides},{...article({title:"Hero + X6 article 6"}),...articleOverrides},{...article({title:"Hero + X6 article 7"}),...articleOverrides}]}),newsBanner=articleOverrides=>({name:"News Banner",type:"NewsBanner",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"News Banner article"}),...articleOverrides}]}),newsBannerCommercial=articleOverrides=>({name:"News Banner",type:"NewsBanner",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"News Banner article (commercial)",articleType:"Commercial"}),...articleOverrides}]}),ad_replacement=type=>({"premium-ad":{AdReplacement:{type:"premium_ad",data:{name:"Premium ad name",link:"/",category:null,id:"25",uuid:"e935d011-f8f8-4b34-a286-874659e29322",image:{type:"image",data:{title:"ICYMI MPU",description:"description",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,150,0),id:null,bundle:"remote_image",mid:632377,changed:"1595331176",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}}}},"premium-letter":{AdReplacement:{type:"premium_letter",data:{name:"Premium letter name",heading:"Premium letter heading",link:"/",author:{name:"Premium letter author",id:"28644",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:"I'm an author of premium letters",imageUrl:Object(createImage.b)(150,150,0),twitter:"SomeAuthor",facebook:null,location:null,path:"/author/some-journo",description:"Some journo with a job working here",extra:null},body:"<p>Bla Bla Blah.....</p>",id:"11",uuid:"f711b4ba-6623-4362-bbf8-413dcfe60da9"}}}}[type]||{}),articleX6PlusMPU=(articleOverrides,adReplacementType="none")=>({name:"6 articles + MPU",type:"ArticleX6PlusMPU",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",ad:{type:"mpu",alignment:"Right",adSource:"commercial"},articles:[{...article({title:"ArticleX6 plus MPU article 1"}),...articleOverrides},{...article({title:"ArticleX6 plus MPU article 2"}),...articleOverrides},{...article({title:"ArticleX6 plus MPU article 3"}),...articleOverrides},{...article({title:"ArticleX6 plus MPU article 4"}),...articleOverrides},{...article({title:"ArticleX6 plus MPU article 5"}),...articleOverrides},{...article({title:"ArticleX6 plus MPU article 6"}),...articleOverrides}],...ad_replacement(adReplacementType)}),articleX8PlusDMPU=(articleOverrides,adReplacementType="none")=>({name:"8 articles + DMPU",type:"ArticleX8PlusDMPU",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",ad:{type:"dmpu",alignment:"Right",adSource:"commercial"},articles:[{...article({title:"ArticleX8 plus DMPU article 1"}),...articleOverrides},{...article({title:"ArticleX8 plus DMPU article 2"}),...articleOverrides},{...article({title:"ArticleX8 plus DMPU article 3"}),...articleOverrides},{...article({title:"ArticleX8 plus DMPU article 4"}),...articleOverrides},{...article({title:"ArticleX8 plus DMPU article 5"}),...articleOverrides},{...article({title:"ArticleX8 plus DMPU article 6"}),...articleOverrides},{...article({title:"ArticleX8 plus DMPU article 7"}),...articleOverrides},{...article({title:"ArticleX8 plus DMPU article 8"}),...articleOverrides}],...ad_replacement(adReplacementType)});const mockWithRequest_mockArticle={},mockWithRequest_mockSection={},mockReq={},mockWithRequest_mockConfiguration={},mockLocals={},mockRequestProps={res:{locals:mockLocals},req:mockReq,cleanAmp:!1,article:mockWithRequest_mockArticle,section:mockWithRequest_mockSection,menu:{fullMenu:{name:"indy100.com Full Nav",domain:"indy100.com",bundle:"full_nav",id:"2",uuid:"fullmenu-uuid",menu:[{title:"Menu item 1",id:"nav_1",path:"./",children:[{title:"Subnav 1",id:"subnav_1",path:"./"},{title:"Subnav 2",id:"subnav_1",path:"./"},{title:"Subnav 3",id:"subnav_1"},{title:"Subnav 4",id:"subnav_1",path:"./"},{title:"Subnav 5",id:"subnav_1",path:"./"},{title:"Subnav 6",id:"subnav_1",path:"./"},{title:"Subnav 7",id:"subnav_1",path:"./"},{title:"Subnav 8",id:"subnav_1",path:"./"}],expanded:!1},{title:"Menu item 2",id:"nav_2",path:"./"},{title:"Menu item 3",id:"nav_2"},{title:"Menu item 4",id:"nav_3",path:"./"},{title:"Menu item 5",id:"nav_4",path:"./"}]},navbarMenu:{name:"indy100.com Nav Bar",domain:"indy100.com",bundle:"nav_bar",id:"1",uuid:"navbar-menu-uuid",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./"},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},footerMenu:{name:"indy100.com Footer",domain:"indy100.com",bundle:"footer",id:"3",uuid:"e19e5d3a-574e-476d-9f24-05c9b0489d2f",menu:[{title:"Footer column 1",id:"footer_col_1",children:[{title:"Item 1",id:"footer_1_1",path:"./"},{title:"Item 2",id:"footer_1_2",path:"./"}],expanded:!0},{title:"Footer column 2",id:"footer_col_2",children:[{title:"Item 1",id:"footer_2_1",path:"./"},{title:"Item 2",id:"footer_2_2",path:"./"},{title:"Item 3",id:"footer_2_3",path:"./"}],expanded:!0},{title:"Footer column 3",id:"footer_col_3",children:[{title:"Item 1",id:"footer_3_1",path:"./"},{title:"Item 2",id:"footer_3_2",path:"./"},{title:"Item 3",id:"footer_3_3",path:"./"}],expanded:!0},{title:"Footer column 4",id:"footer_col_4",children:[{title:"Item 1",id:"footer_4_1",path:"./"},{title:"Item 2",id:"footer_4_2",path:"./"},{title:"Item 3",id:"footer_4_3",path:"./"},{title:"Item 4",id:"footer_4_4",path:"./"}],expanded:!0},{title:"Footer column 5",id:"footer_col_5",children:[{title:"Item 1",id:"footer_5_1",path:"./"},{title:"Item 2",id:"footer_5_2",path:"./"},{title:"Item 3",id:"footer_5_3",path:"./"},{title:"Item 4",id:"footer_5_4",path:"./"},{title:"Item 5",id:"footer_5_5",path:"./"}],expanded:!0}]}},jsGlobals:{},configuration:mockWithRequest_mockConfiguration},RequestProvider=__webpack_require__(14);RequestProvider.withRequest=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,...mockRequestProps}),RequestProvider.withRequestOnly=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,req:mockReq,res:{locals:{configuration:{}}}});const resetAndAssignOverrides=(mock,orig,overrides)=>{var obj;obj=mock,Object.keys(obj).forEach(key=>{delete obj[key]}),Object.assign(mock,orig,overrides)},setMockArticleOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockArticle,mockArticle(),overrides)},setMockSectionOverrides=overrides=>{var articleOverrides;resetAndAssignOverrides(mockWithRequest_mockSection,{type:"section",section:{name:"News",path:"/",sourcePath:"news"},adConfig:{data:{publication:{domain:"indy100.com"}},adConfig:[]},components:[{name:"2 articles",type:"ArticleX2",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"ArticleX2 article 1"}),...articleOverrides},{...article({title:"ArticleX2 article 2",heroType:"video",live:!0}),...articleOverrides}]},articleX3(),{name:"Most Popular",type:"MostPopular",labelText:"most popular",labelLink:"/news",useAuthorImage:!1,contentSource:"Default",articles:[{...article({title:"Most Popular article 1"})},{...article({title:"Most Popular article 2"})},{...article({title:"Most Popular article 3"})},{...article({title:"Most Popular article 4"})},{...article({title:"Most Popular article 5"})}]},articleX4(),articleX8(),compactArticleX2(),heroPlus2Articles(),heroPlus3Articles(),heroPlus6Articles(),newsBanner(),newsBannerCommercial(),{name:"Title",type:"Title",labelText:"This is a section title component",labelLink:null,commercialBadgeTerm:null,commercialBadgeImage:null,commercialBadgeLink:null},articleX6PlusMPU(),articleX8PlusDMPU(),{name:"News Letter Signup",type:"NewsLetterSignup",labelText:null,labelLink:null,newsletterTarget:"receiveIndyHeadlinesNews"},{name:"More",type:"More",labelText:"More",labelLink:"/news",linkTitle:"More",linkUrl:"/news"}]},overrides)},setMockReqOverrides=overrides=>{resetAndAssignOverrides(mockReq,{path:"",cookies:{},url:""},overrides)},setMockConfigurationOverrides=overrides=>(resetAndAssignOverrides(mockWithRequest_mockConfiguration,(mockDomain=>({domain:mockDomain,jsGlobals:{userComments:[]},baseUrl:"",articleThemes:{lifestyle:["/life-style"],voices:["/voices"]},newslettersConfig:{receiveIndyHeadlinesNews:{regSourceNewsletter:"",section:"sectionName",title:"newsletterTitle",description:"newsletterDescription",label:"newsletterLabel",class:"newsletterClass",regTitle:"regTitle"}},sectionThemes:{lifestyle:["/life-style"],premium:["/independentpremium"],best:["/extras/indybest"],voices:["/voices"]},feeds:{mmm:{src:"/mockMostPopularFeed.json",items:"articles"}},subdomain:{static:"static-dev"},componentThemes:{voices:["/voices"]},subscriptionConfig:{uk:{premium:{monthly:{headerCopy:"premium monthly header copy",price:"£premium-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{introOffer:"premium anual intro offer"}},tide:{monthly:{headerCopy:"tide monthly header copy",price:"£tide-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{}},student:{}}},locale:"UK",jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",inlinePlayerType:"clicktoplay",commercialPlayerType:"autoplay"},jwplayerPlayerIds:{default:{defaultPlayer:"XLzx33eA",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"9ygSIn9G",commercialPlayer:"liFHUI6p"},premium:{defaultPlayer:"5o5ADYp0",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"iFfmiGED",commercialPlayer:"liFHUI6p"},amp:{defaultPlayer:"OUuXFa7T",noAdsPlayer:"liFHUI6p",sensitivePlayer:"uc5S9Kil",inlinePlayer:"cEvdfzWH",commercialPlayer:"sQ67rESa"}},social:{}}))("indy100.com"),overrides),mockWithRequest_mockConfiguration),setMockLocalsOverrides=overrides=>{resetAndAssignOverrides(mockLocals,{cleanAmp:!1,article:mockWithRequest_mockArticle,configuration:mockWithRequest_mockConfiguration,menu:{fullMenu:{name:"indy100.com Full Nav",domain:"indy100.com",bundle:"full_nav",id:"2",uuid:"fullmenu-uuid",menu:[{title:"Menu item 1",id:"nav_1",path:"./",children:[{title:"Subnav 1",id:"subnav_1",path:"./"},{title:"Subnav 2",id:"subnav_1",path:"./"},{title:"Subnav 3",id:"subnav_1"},{title:"Subnav 4",id:"subnav_1",path:"./"},{title:"Subnav 5",id:"subnav_1",path:"./"},{title:"Subnav 6",id:"subnav_1",path:"./"},{title:"Subnav 7",id:"subnav_1",path:"./"},{title:"Subnav 8",id:"subnav_1",path:"./"}],expanded:!1},{title:"Menu item 2",id:"nav_2",path:"./"},{title:"Menu item 3",id:"nav_2"},{title:"Menu item 4",id:"nav_3",path:"./"},{title:"Menu item 5",id:"nav_4",path:"./"}]},navbarMenu:{name:"indy100.com Nav Bar",domain:"indy100.com",bundle:"nav_bar",id:"1",uuid:"navbar-menu-uuid",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./"},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},footerMenu:{name:"indy100.com Footer",domain:"indy100.com",bundle:"footer",id:"3",uuid:"e19e5d3a-574e-476d-9f24-05c9b0489d2f",menu:[{title:"Footer column 1",id:"footer_col_1",children:[{title:"Item 1",id:"footer_1_1",path:"./"},{title:"Item 2",id:"footer_1_2",path:"./"}],expanded:!0},{title:"Footer column 2",id:"footer_col_2",children:[{title:"Item 1",id:"footer_2_1",path:"./"},{title:"Item 2",id:"footer_2_2",path:"./"},{title:"Item 3",id:"footer_2_3",path:"./"}],expanded:!0},{title:"Footer column 3",id:"footer_col_3",children:[{title:"Item 1",id:"footer_3_1",path:"./"},{title:"Item 2",id:"footer_3_2",path:"./"},{title:"Item 3",id:"footer_3_3",path:"./"}],expanded:!0},{title:"Footer column 4",id:"footer_col_4",children:[{title:"Item 1",id:"footer_4_1",path:"./"},{title:"Item 2",id:"footer_4_2",path:"./"},{title:"Item 3",id:"footer_4_3",path:"./"},{title:"Item 4",id:"footer_4_4",path:"./"}],expanded:!0},{title:"Footer column 5",id:"footer_col_5",children:[{title:"Item 1",id:"footer_5_1",path:"./"},{title:"Item 2",id:"footer_5_2",path:"./"},{title:"Item 3",id:"footer_5_3",path:"./"},{title:"Item 4",id:"footer_5_4",path:"./"},{title:"Item 5",id:"footer_5_5",path:"./"}],expanded:!0}]}},jsGlobals:{adTargeting:""}},overrides)},setIsArticle=()=>{delete mockRequestProps.section,mockRequestProps.article=mockWithRequest_mockArticle},setIsSection=()=>{delete mockRequestProps.article,mockRequestProps.section=mockWithRequest_mockSection}},1251:function(module,exports){},1303:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(311)},142:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_Mocker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(157),_mockWithRequest__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(118);class MockArticleContent extends _Mocker__WEBPACK_IMPORTED_MODULE_1__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_2__.a)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_2__.c)(props.articleOverrides),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_2__.f)(props.reqOverrides)}}MockArticleContent.propTypes={articleOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_1__.a.propTypes},MockArticleContent.defaultProps={articleOverrides:{},reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_1__.a.defaultProps},__webpack_exports__.a=MockArticleContent},157:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(2),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),server_browser=__webpack_require__(246),styled_components_browser_esm=__webpack_require__(4),mockWithRequest=__webpack_require__(118),ads=__webpack_require__(325);const MPUModule=__webpack_require__(247);let mockMPUID=0;const Wrapper=styled_components_browser_esm.default.div`
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
`,getMaxSize=sizesArr=>sizesArr.reduce((acc,item)=>{const area=item[0]*item[1];return area>acc.area?{max:item,area:area}:acc},{area:0}).max,getMaxSizeFromString=sizes=>getMaxSize((sizes=>sizes.split("|").map(sizeStr=>sizeStr.split("x").map(d=>Number(d))))(sizes)),MockMPU=props=>{const styles={},{cleanAmp:cleanAmp}=props.res.locals;let max,mpuSizeConfig;const id="mock_mpu_"+mockMPUID;return mockMPUID+=1,props.sizes?(max=getMaxSizeFromString(props.sizes),styles.width=max[0]+"px",styles.height=max[1]+"px"):props["size-key"]?mpuSizeConfig=ads.b[props["size-key"]]:(styles.width="300px",styles.height="250px"),Object(jsx_runtime.jsxs)(Wrapper,{className:props.className,children:[!cleanAmp&&props["size-key"]&&Object(jsx_runtime.jsx)("style",{children:mpuSizeConfig.map(breakPoint=>`\n@media (min-width: ${breakPoint.from}px) {\n  #${id} {\n${(breakPoint=>`\n${breakPoint.supportedSizes.length?"display: flex;":"display: none;"}\n${breakPoint.supportedSizes.length?(([width,height])=>`width: ${width}px; height: ${height}px;`)(getMaxSize(breakPoint.supportedSizes)):""}`)(breakPoint)}\n  }\n}\n`).join("")}),Object(jsx_runtime.jsxs)("div",{style:styles,id:id,children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:props.id})}),props.sizes&&Object(jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:{__html:props.sizes.replace(max.join("x"),`<strong>${max.join("x")}</strong>`)}}),props["size-key"]&&Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("p",{children:props["size-key"]}),mpuSizeConfig.map(breakPoint=>Object(jsx_runtime.jsxs)("p",{children:[breakPoint.from,"+: ",!breakPoint.supportedSizes.length&&"n/a",breakPoint.supportedSizes.map(size=>size.join("x")).join("|")]},breakPoint.from))]})]})]})};MockMPU.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,sizes:prop_types_default.a.string,"size-key":prop_types_default.a.string,res:prop_types_default.a.object.isRequired},MPUModule.default=MockMPU;__webpack_require__(2177);var es=__webpack_require__(333),mergeDeepRight=__webpack_require__(716),Styles=__webpack_require__(6);const WithTheme=({domain:domain,cleanAmp:cleanAmp,children:children})=>Object(jsx_runtime.jsxs)(styled_components_browser_esm.ThemeProvider,{theme:{...Object(mergeDeepRight.a)(Styles.e.default,Styles.e[domain]||{}),domain:domain},children:[Object(jsx_runtime.jsx)(Styles.a,{cleanAmp:cleanAmp}),Object(react.cloneElement)(children)]});WithTheme.propTypes={children:prop_types_default.a.element.isRequired,domain:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool},WithTheme.__docgenInfo={description:"",methods:[],displayName:"WithTheme",props:{children:{type:{name:"element"},required:!0,description:""},domain:{type:{name:"string"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var components_WithTheme=WithTheme;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/WithTheme.js"]={name:"WithTheme",docgenInfo:WithTheme.__docgenInfo,path:"stories/helpers/components/WithTheme.js"});class Mocker_Mocker extends react.Component{constructor(props){super(props),this.setOverrides(props);const{domain:domain}=Object(mockWithRequest.d)(props.configurationOverrides);Object(mockWithRequest.e)(props.localsOverrides);const sheet=new styled_components_browser_esm.ServerStyleSheet;Object(server_browser.renderToString)(sheet.collectStyles(Object(jsx_runtime.jsx)(components_WithTheme,{domain:domain,cleanAmp:props.localsOverrides.cleanAmp,children:Object(react.cloneElement)(this.props.children)}))),this.css=sheet.instance.toString(),sheet.seal(),this.domain=domain}setOverrides(){}render(){return Object(jsx_runtime.jsxs)(es.a,{initialize:{languages:[{name:"English",code:"en"}],translation:{mostPopular:["Most Popular","alo"]},options:{defaultLanguage:"en",renderToStaticMarkup:server_browser.renderToStaticMarkup}},children:[Object(jsx_runtime.jsx)("style",{dangerouslySetInnerHTML:{__html:this.css}}),Object(jsx_runtime.jsx)(components_WithTheme,{domain:this.domain,children:Object(react.cloneElement)(this.props.children)})]})}}Mocker_Mocker.propTypes={children:prop_types_default.a.element.isRequired,configurationOverrides:prop_types_default.a.object,localsOverrides:prop_types_default.a.object},Mocker_Mocker.defaultProps={configurationOverrides:{},localsOverrides:{}},Mocker_Mocker.__docgenInfo={description:"",methods:[{name:"setOverrides",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Mocker",props:{configurationOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},localsOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},children:{type:{name:"element"},required:!0,description:""}}};__webpack_exports__.a=Mocker_Mocker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/Mocker.js"]={name:"Mocker",docgenInfo:Mocker_Mocker.__docgenInfo,path:"stories/helpers/components/Mocker.js"})},179:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PUBLICATION_UK}));const PUBLICATION_UK="indy100.com"},181:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return heroType})),__webpack_require__.d(__webpack_exports__,"a",(function(){return getHeroType})),__webpack_require__.d(__webpack_exports__,"c",(function(){return internalLinkCount}));var _constants_heroType__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(70);const heroType=hero=>{const priorityList=[_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.b,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.c,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.d];if(!hero)return[];return{...hero.filter(e=>priorityList.includes(e.type)).sort((a,b)=>priorityList.indexOf(a.type)-priorityList.indexOf(b.type))[0]||hero[0],isHero:!0}},getHeroType=hero=>{const articleType=hero?heroType(hero).type:_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.d;return[_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.b].includes(articleType)?"video":articleType},linkCount=(body,domain,urlMatcher)=>{let counter=0;return body.filter(x=>"markup"===x.type).map(x=>{var _x$data;return null===(_x$data=x.data)||void 0===_x$data?void 0:_x$data.markup}).filter(Boolean).forEach(markup=>{const matches=markup.match(/href="(.*?)"/g);if(matches){const links=null==matches?void 0:matches.map(x=>x.slice(6,-1)).filter(urlMatcher);counter+=links.length}}),counter},internalLinkCount=(body,domain)=>linkCount(body,0,url=>url.match(new RegExp("^\\/\\w|^\\/\\/"+domain)))},207:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_Ads_MPU__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(96);const Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  max-width: 100%;
  margin: 8px 40px 20px 0;
  justify-content: center;
  display: flex;
  padding-top: 25px;
  background-color: #ececec;
  position: relative;
  margin: 0 auto;
  clear: both;

  &:before {
    content: 'Advertisement';
    position: absolute;
    left: 10px;
    top: 0;
    line-height: 25px;
    color: #9b9b9b;
    font-size: 12px;
    font-family: ${props=>props.theme.fontFamily.primaryFont};
  }

  @media (max-width: 530px) {
    display: flex;
    justify-content: center;
    float: none;
    max-width: 300px;
    margin: 0 auto;
  }
`,MarkupAds=props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Container,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Ads_MPU__WEBPACK_IMPORTED_MODULE_2__.a,{...props})});MarkupAds.__docgenInfo={description:"",methods:[],displayName:"MarkupAds"},__webpack_exports__.a=MarkupAds,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/MarkupAd.js"]={name:"MarkupAds",docgenInfo:MarkupAds.__docgenInfo,path:"app/component/library/Article/Ads/MarkupAd.js"})},208:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4);__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props}))`
  height: 0;
`},2160:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(89),_clientLogger=__webpack_require__(61),_configFilename=__webpack_require__(2161);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},2161:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(311),storybook_amp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(910);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_amp__WEBPACK_IMPORTED_MODULE_1__.withAmpDecorator);const parameters={actions:{argTypesRegex:"^on[A-Z].*"},amp:{isEnabled:!0,styles:""},layout:"fullscreen"}},2168:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(311).configure)([__webpack_require__(2169),__webpack_require__(2170)],module,!1)}).call(this,__webpack_require__(74)(module))},2169:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=2169},2170:function(module,exports,__webpack_require__){var map={"./Article/ArticleAds.stories.js":2294,"./Article/ArticlePage.stories.js":2295,"./Section/SectionPage.stories.js":2297};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2170},2177:function(module,exports,__webpack_require__){const ampTemplateModule=__webpack_require__(715),templateHTML=ampTemplateModule.default({styles:"",title:"Indy Storybook"});ampTemplateModule.default=()=>({replace:(storyCodeMarker,content)=>templateHTML.replace("</head>",'\n<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Lato:400,700|Roboto+Slab:400,700&display=swap" />\n\n<script async custom-element="amp-timeago" src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"><\/script>\n<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>\n<script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"><\/script>\n\n<script>\n// fix time to 01/07/2020\nDate = class extends Date {\n  constructor(options) {\n    super(options ?? 1593558000000);\n  }\n};\n<\/script>\n<style type="text/css">\n[id^="jwplayer"] {\n  background: hotpink;\n  position: relative;\n}\n\n[id^="jwplayer"]:before {\n  content: "VIDEO PLAYER";\n  font-family: sans-serif;\n  font-weight: bold;\n  text-align: center;\n  font-size: 30px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: calc(50% - 15px);\n  left: 0;\n  color: white;\n}\n\n.show-in-storybook {\n  display: flex !important; /* Override [amp-access][amp-access-hide] */\n}\n</style></head>').replace('<script async custom-element="amp-autocomplete" src="https://cdn.ampproject.org/v0/amp-autocomplete-0.1.js"><\/script>',"").replace(storyCodeMarker,content).replace(/<excessremovablewrapper>/g,"").replace(/<\/excessremovablewrapper>/g,"")})},2182:function(module,exports,__webpack_require__){var map={"./af":717,"./af.js":717,"./ar":718,"./ar-dz":719,"./ar-dz.js":719,"./ar-kw":720,"./ar-kw.js":720,"./ar-ly":721,"./ar-ly.js":721,"./ar-ma":722,"./ar-ma.js":722,"./ar-sa":723,"./ar-sa.js":723,"./ar-tn":724,"./ar-tn.js":724,"./ar.js":718,"./az":725,"./az.js":725,"./be":726,"./be.js":726,"./bg":727,"./bg.js":727,"./bm":728,"./bm.js":728,"./bn":729,"./bn-bd":730,"./bn-bd.js":730,"./bn.js":729,"./bo":731,"./bo.js":731,"./br":732,"./br.js":732,"./bs":733,"./bs.js":733,"./ca":734,"./ca.js":734,"./cs":735,"./cs.js":735,"./cv":736,"./cv.js":736,"./cy":737,"./cy.js":737,"./da":738,"./da.js":738,"./de":739,"./de-at":740,"./de-at.js":740,"./de-ch":741,"./de-ch.js":741,"./de.js":739,"./dv":742,"./dv.js":742,"./el":743,"./el.js":743,"./en-au":744,"./en-au.js":744,"./en-ca":745,"./en-ca.js":745,"./en-gb":746,"./en-gb.js":746,"./en-ie":747,"./en-ie.js":747,"./en-il":748,"./en-il.js":748,"./en-in":749,"./en-in.js":749,"./en-nz":750,"./en-nz.js":750,"./en-sg":751,"./en-sg.js":751,"./eo":752,"./eo.js":752,"./es":753,"./es-do":754,"./es-do.js":754,"./es-mx":755,"./es-mx.js":755,"./es-us":756,"./es-us.js":756,"./es.js":753,"./et":757,"./et.js":757,"./eu":758,"./eu.js":758,"./fa":759,"./fa.js":759,"./fi":760,"./fi.js":760,"./fil":761,"./fil.js":761,"./fo":762,"./fo.js":762,"./fr":763,"./fr-ca":764,"./fr-ca.js":764,"./fr-ch":765,"./fr-ch.js":765,"./fr.js":763,"./fy":766,"./fy.js":766,"./ga":767,"./ga.js":767,"./gd":768,"./gd.js":768,"./gl":769,"./gl.js":769,"./gom-deva":770,"./gom-deva.js":770,"./gom-latn":771,"./gom-latn.js":771,"./gu":772,"./gu.js":772,"./he":773,"./he.js":773,"./hi":774,"./hi.js":774,"./hr":775,"./hr.js":775,"./hu":776,"./hu.js":776,"./hy-am":777,"./hy-am.js":777,"./id":778,"./id.js":778,"./is":779,"./is.js":779,"./it":780,"./it-ch":781,"./it-ch.js":781,"./it.js":780,"./ja":782,"./ja.js":782,"./jv":783,"./jv.js":783,"./ka":784,"./ka.js":784,"./kk":785,"./kk.js":785,"./km":786,"./km.js":786,"./kn":787,"./kn.js":787,"./ko":788,"./ko.js":788,"./ku":789,"./ku.js":789,"./ky":790,"./ky.js":790,"./lb":791,"./lb.js":791,"./lo":792,"./lo.js":792,"./lt":793,"./lt.js":793,"./lv":794,"./lv.js":794,"./me":795,"./me.js":795,"./mi":796,"./mi.js":796,"./mk":797,"./mk.js":797,"./ml":798,"./ml.js":798,"./mn":799,"./mn.js":799,"./mr":800,"./mr.js":800,"./ms":801,"./ms-my":802,"./ms-my.js":802,"./ms.js":801,"./mt":803,"./mt.js":803,"./my":804,"./my.js":804,"./nb":805,"./nb.js":805,"./ne":806,"./ne.js":806,"./nl":807,"./nl-be":808,"./nl-be.js":808,"./nl.js":807,"./nn":809,"./nn.js":809,"./oc-lnc":810,"./oc-lnc.js":810,"./pa-in":811,"./pa-in.js":811,"./pl":812,"./pl.js":812,"./pt":813,"./pt-br":814,"./pt-br.js":814,"./pt.js":813,"./ro":815,"./ro.js":815,"./ru":816,"./ru.js":816,"./sd":817,"./sd.js":817,"./se":818,"./se.js":818,"./si":819,"./si.js":819,"./sk":820,"./sk.js":820,"./sl":821,"./sl.js":821,"./sq":822,"./sq.js":822,"./sr":823,"./sr-cyrl":824,"./sr-cyrl.js":824,"./sr.js":823,"./ss":825,"./ss.js":825,"./sv":826,"./sv.js":826,"./sw":827,"./sw.js":827,"./ta":828,"./ta.js":828,"./te":829,"./te.js":829,"./tet":830,"./tet.js":830,"./tg":831,"./tg.js":831,"./th":832,"./th.js":832,"./tk":833,"./tk.js":833,"./tl-ph":834,"./tl-ph.js":834,"./tlh":835,"./tlh.js":835,"./tr":836,"./tr.js":836,"./tzl":837,"./tzl.js":837,"./tzm":838,"./tzm-latn":839,"./tzm-latn.js":839,"./tzm.js":838,"./ug-cn":840,"./ug-cn.js":840,"./uk":841,"./uk.js":841,"./ur":842,"./ur.js":842,"./uz":843,"./uz-latn":844,"./uz-latn.js":844,"./uz.js":843,"./vi":845,"./vi.js":845,"./x-pseudo":846,"./x-pseudo.js":846,"./yo":847,"./yo.js":847,"./zh-cn":848,"./zh-cn.js":848,"./zh-hk":849,"./zh-hk.js":849,"./zh-mo":850,"./zh-mo.js":850,"./zh-tw":851,"./zh-tw.js":851};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2182},2190:function(module,exports){},2192:function(module,exports){},2204:function(module,exports){},2206:function(module,exports){},2231:function(module,exports){},2233:function(module,exports){},2234:function(module,exports){},2239:function(module,exports){},2241:function(module,exports){},2248:function(module,exports){},2250:function(module,exports){},2268:function(module,exports){},2270:function(module,exports){},2282:function(module,exports){},2285:function(module,exports){},2289:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(4),Helmet=__webpack_require__(81),RequestProvider=__webpack_require__(14),Frame=__webpack_require__(332),ColumnWrapper=__webpack_require__(328),Styles=__webpack_require__(6),MPU=__webpack_require__(96),es=__webpack_require__(333);const Wrapper=styled_components_browser_esm.default.div`
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
`;function Sidebar({sidebar:sidebar,configuration:configuration}){const layout=sidebar.layoutSettings?sidebar.layoutSettings:[];return Object(jsx_runtime.jsxs)(Sidebar_Wrapper,{children:[Object(jsx_runtime.jsx)(MPU.a,{id:"mpu1"}),layout&&layout.map((comp,i)=>{switch(comp.type){case"MostPopular":return Object(jsx_runtime.jsx)(Sidebar_MostPopular,{name:comp.name,configuration:configuration},comp.type+i);case"indy100":return Object(jsx_runtime.jsx)(Sidebar_Indy100,{name:comp.name,configuration:configuration},comp.type+i);default:return Object(jsx_runtime.jsxs)("p",{style:{color:"red"},children:["Undefined component: ",comp.type]},"undefined"+i)}})]})}Sidebar.propTypes={sidebar:prop_types_default.a.object.isRequired,sections:prop_types_default.a.array.isRequired,configuration:prop_types_default.a.object.isRequired,adTargeting:prop_types_default.a.object},Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{sidebar:{type:{name:"object"},required:!0,description:""},sections:{type:{name:"array"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""},adTargeting:{type:{name:"object"},required:!1,description:""}}};var library_Sidebar=Sidebar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar.js"]={name:"Sidebar",docgenInfo:Sidebar.__docgenInfo,path:"app/component/library/Sidebar.js"});var StickyFooter=__webpack_require__(330),WallPaper=__webpack_require__(208);var components_ComponentTitle=Object(styled_components_browser_esm.default)(({className:className,name:name,url:url})=>Object(jsx_runtime.jsx)("div",{className:className,children:name&&Object(jsx_runtime.jsxs)("h1",{children:[url&&Object(jsx_runtime.jsx)("a",{href:url,children:name}),!url&&Object(jsx_runtime.jsx)("span",{children:name})]})}))`
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
`;var Section_Title=Object(styled_components_browser_esm.default)(({className:className,data:{labelText:labelText,labelLink:labelLink},style:style})=>Object(jsx_runtime.jsx)(components_ComponentTitle,{className:className,name:labelText,url:labelLink,style:style}))``,Image=__webpack_require__(105),Image_default=__webpack_require__.n(Image);const ArticleImage_ImageWrapper=Object(styled_components_browser_esm.default)("div")`
  img {
    object-fit: cover;
  }
`,ArticleImage=({children:children,className:className,hero:hero,path:path,srcset:srcset})=>(className=className?[className,"image-wrap"].join(" "):"image-wrap",hero&&hero.some(({type:type})=>"image"===type)?Object(jsx_runtime.jsxs)(ArticleImage_ImageWrapper,{className:className,children:[children&&children,hero&&hero.filter(({type:type})=>"image"===type).filter((item,index,collection)=>collection.length-1===index).map(({data:{url:url,caption:caption}},index)=>Object(jsx_runtime.jsx)("a",{href:path,children:Object(jsx_runtime.jsx)(Image_default.a,{src:url+"?crop=61:45,smart&width="+srcset[srcset.length-1],alt:caption,width:"3",height:"2",layout:"responsive",srcset:srcset.map(size=>url+`?crop=61:45,smart&width=${size} ${size}w`).join(", ")},index)},index))]}):Object(jsx_runtime.jsxs)(ArticleImage_ImageWrapper,{className:className,children:[children&&children,Object(jsx_runtime.jsx)("a",{href:path,className:"placeholder",children:Object(jsx_runtime.jsx)(Image_default.a,{src:"/img/placeholder.png",layout:"responsive",width:"1.3",height:"1"})})]}));ArticleImage.propTypes={hero:prop_types_default.a.array.isRequired,path:prop_types_default.a.any.isRequired,children:prop_types_default.a.any,className:prop_types_default.a.string,srcset:prop_types_default.a.array,articleIcon:prop_types_default.a.any},ArticleImage.defaultProps={children:null,className:"",srcset:[375,640],articleIcon:!1},ArticleImage.__docgenInfo={description:"",methods:[],displayName:"ArticleImage",props:{children:{defaultValue:{value:"null",computed:!1},type:{name:"any"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},srcset:{defaultValue:{value:"[375, 640]",computed:!1},type:{name:"array"},required:!1,description:""},articleIcon:{defaultValue:{value:"false",computed:!1},type:{name:"any"},required:!1,description:""},hero:{type:{name:"array"},required:!0,description:""},path:{type:{name:"any"},required:!0,description:""}}};var article_ArticleImage=ArticleImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/article/ArticleImage.js"]={name:"ArticleImage",docgenInfo:ArticleImage.__docgenInfo,path:"app/component/library/Section/components/article/ArticleImage.js"});const ArticleFooter_Wrapper=styled_components_browser_esm.default.div`
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
`,ArticleFooter=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)(ArticleFooter_Wrapper,{className:className,children:"upvote"}))``;ArticleFooter.propTypes={className:prop_types_default.a.string};var article_ArticleFooter=ArticleFooter;const ArticleItem_Wrapper=styled_components_browser_esm.default.div`
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
`;var article_ArticleItem=Object(styled_components_browser_esm.default)(({className:className,srcset:srcset,type:type,data:{path:path,titleShort:titleShort,titleSocial:titleSocial,title:title,hero:hero}})=>Object(jsx_runtime.jsxs)(ArticleItem_Wrapper,{className:className?[className,"article"].join(" "):"article",children:[Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,srcset:srcset,path:path}),Object(jsx_runtime.jsxs)(Content,{className:"content",children:[Object(jsx_runtime.jsx)(ArticleItem_Title,{href:path,children:titleShort||title}),Object(jsx_runtime.jsx)(article_ArticleFooter,{title:title,titleSocial:titleSocial,type:type})]})]}))``;const Row=styled_components_browser_esm.default.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;var components_ArticleRow=Object(styled_components_browser_esm.default)(({className:className,srcset:srcset,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink}})=>Object(jsx_runtime.jsxs)(Row,{className:className,"data-type":type,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),articles&&articles.filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:srcset,data:article,type:type},index))]}))``;var Section_ArticleX1=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[426]}))`
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
`;var Section_ArticleX2=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[390]}))``;var Section_ArticleX3=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[390]}))`
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
`;var Section_ArticleX8=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[190]}))`
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
  margin: 16px 0 0;
  padding: 5px 24px;
  text-align: center;
  font-family: ${props=>props.theme.fontFamily.articleFont};
  font-weight: ${props=>props.theme.fontWeight.normal};
  text-transform: capitalize;
  line-height: normal;
`,SectionContent=({components:components,theme:theme,configuration:configuration,section:section})=>{const currentSection=section.section,insert=(section=>{switch(section.type){case"author":return Object(jsx_runtime.jsx)(Author_AuthorRow,{author:section.section});default:return null}})(section),isWishlist="/wishlist"===currentSection.path;return Object(jsx_runtime.jsxs)(Content_Wrapper,{className:"section-content",children:[!isWishlist&&Object(jsx_runtime.jsx)(SectionTitle,{children:currentSection.name}),insert,null==components?void 0:components.filter(skipComponentHasNoArticle).map((comp,i)=>{const Component=componentMap[comp.type],key=`${comp.type}${i}`;switch(comp.type){case"Title":case"ArticleX1":case"ArticleX2":case"ArticleX3":case"ArticleX8":return Object(jsx_runtime.jsx)(Component,{componentStyle:theme,data:comp,configuration:configuration},key);default:return Object(jsx_runtime.jsxs)("p",{style:{color:"red"},children:["Undefined component: ",comp.type]},"undefined"+i)}})]})};SectionContent.propTypes={components:prop_types_default.a.array,configuration:prop_types_default.a.object.isRequired,publication:prop_types_default.a.any.isRequired,theme:prop_types_default.a.any.isRequired,section:prop_types_default.a.object.isRequired,isWishlist:prop_types_default.a.boolean},SectionContent.__docgenInfo={description:"",methods:[],displayName:"SectionContent",props:{components:{type:{name:"array"},required:!1,description:""},configuration:{type:{name:"object"},required:!0,description:""},publication:{type:{name:"any"},required:!0,description:""},theme:{type:{name:"any"},required:!0,description:""},section:{type:{name:"object"},required:!0,description:""},isWishlist:{type:{name:"custom",raw:"PropTypes.boolean"},required:!1,description:""}}};var Section_Content=SectionContent;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/pages/Section/Content.js"]={name:"SectionContent",docgenInfo:SectionContent.__docgenInfo,path:"app/component/pages/Section/Content.js"});var ads=__webpack_require__(97),page=__webpack_require__(331);const Section=props=>{const{className:className,section:section,menu:menu,configuration:configuration,cleanAmp:cleanAmp}=props,domain=configuration.domain,adToggle=Object(ads.e)(section),currentSection=section.section;return Object(jsx_runtime.jsxs)(Frame.a,{domain:domain,publication:section.publication,configuration:configuration,menu:menu,className:className,children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("title",{children:Object(page.a)({section:section},configuration.name)}),Object(jsx_runtime.jsx)("link",{rel:"alternate",href:configuration.baseUrl+("/"===currentSection.path?"/rss":currentSection.path+"/rss"),title:"RSS",type:"application/rss+xml"})]}),adToggle(ads.d)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"adSlotWallpaper"}),adToggle(ads.b)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"nativeBanner"}),Object(jsx_runtime.jsxs)(ColumnWrapper.a,{children:[Object(jsx_runtime.jsx)(Section_Content,{components:section.components,publication:section.publication,configuration:configuration,section:section}),section.sidebar&&Object(jsx_runtime.jsx)(library_Sidebar,{domain:domain,adToggle:adToggle,cleanAmp:!1,sidebar:section.sidebar})]}),adToggle(ads.a)&&Object(jsx_runtime.jsx)(StickyFooter.a,{cleanAmp:cleanAmp})]})};Section.propTypes={className:prop_types_default.a.string,section:prop_types_default.a.object.isRequired,menu:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Section))`
  display: flex;
  justify-content: center;
`},2294:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RichArticleLongRead",(function(){return RichArticleLongRead})),__webpack_require__.d(__webpack_exports__,"RichArticleShortText",(function(){return RichArticleShortText})),__webpack_require__.d(__webpack_exports__,"DefaultRichArticleStoryWithSensitiveFlag",(function(){return DefaultRichArticleStoryWithSensitiveFlag})),__webpack_require__.d(__webpack_exports__,"DefaultRichArticleStoryWithCommercialFlag",(function(){return DefaultRichArticleStoryWithCommercialFlag})),__webpack_require__.d(__webpack_exports__,"DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds",(function(){return DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds}));var jsx_runtime=__webpack_require__(0),MockArticle=__webpack_require__(142),createImage=__webpack_require__(67),rich=()=>[{type:"markup",data:{markup:'<p><a href="https://www.independent.co.uk/topic/jaguars" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/jaguars" data-vars-event-id="c6">Jaguar</a> numbers may have doubled in 15 years in the south-western part of South America\'s <a href="https://www.independent.co.uk/topic/atlantic-forest" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/atlantic-forest" data-vars-event-id="c6">Atlantic Forest</a>, monitoring by conservationists has found.</p>'}},{type:"markup",data:{markup:"<p>Research using camera traps at more than 200 sites, which took more than 440,000 photographs last year alone, shows a slow recovery in numbers since initial studies in 2005.</p>"}},{type:"markup",data:{markup:"<p>The big cat is threatened by loss of habitat to farming and development, as well as illegal hunting of its prey and conflict with farmers, in the Atlantic Forest, which spans Argentina, Brazil and Paraguay.</p>"}},{type:"markup",data:{markup:'<p>Efforts across the three countries by <a href="https://www.independent.co.uk/topic/WWF" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/WWF" data-vars-event-id="c6">WWF</a>, Fundacion Vida Silvestre Argentina and local partners are focusing on habitat loss, poaching of jaguars and their prey, and reducing conflict between the big cats and local people.</p>'}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated population in the south-western region of the Atlantic Forest of 30 to 54 individuals.</p>"}},{type:"related",data:{align:"left",title:"Read more",links:[{href:"/",title:"Diego the 100-year-old tortoise who saved his species returns home",image:Object(createImage.b)(175,175,175),media_type:"video"},{href:"/",title:"Nature's 'lifeboats' can protect at-risk species from climate change",image:Object(createImage.b)(175,175,175),media_type:"image"},{href:"/",title:"Endangered elephants reclaim national park during lockdown",image:Object(createImage.b)(175,175,175),media_type:"video"}],allVideos:!1}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now between 84 and 125 jaguars in the region.</p>"}},{type:"markup",data:{markup:"<p>The figures mean the population across the whole of the Atlantic Forest is estimated at between 150 and 200, WWF said.</p>"}},{type:"markup",data:{markup:"<p>Karina Berg, regional manager for Latin America at WWF-UK, said: “These new figures demonstrate the importance of investment into long-term conservation efforts and are an incredible testament to the commitment and dedication of our teams and partners on the ground.</p>"}},{type:"markup",data:{markup:"<p>“Conserving and protecting this area and its wildlife remain as important as ever, and while jaguar populations increase, the challenges faced by this species continue.</p>"}},{type:"markup",data:{markup:"<p>“We hope to see continued population increases here and in other critical regions across Latin America in the future.”</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005 to date, we see a favourable trend for the species.”</p>"}},{type:"markup",data:{markup:'<p><a href="https://www.independent.co.uk/topic/AnimalConservation" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/AnimalConservation" data-vars-event-id="c6">Conservationists</a> will push harder to achieve a population of 250 <a href="/topic/jaguars" class="body-link" data-vars-item-name="BL-9570711-http://www.independent.co.uk/topic/jaguars" data-vars-event-id="c6">jaguars</a> in Misiones province in Argentina and take the species out of the risk of extinction, he said.</p>'}},{type:"markup",data:{markup:"<p><em>Press Association</em></p>"}}];const ArticleContent=__webpack_require__(905).default;__webpack_exports__.default={title:"Article/WEB/Ads",component:ArticleContent};const RichArticleLongRead=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:[{type:"markup",data:{markup:'<p><a href="https://www.independent.co.uk/topic/jaguars" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/jaguars" data-vars-event-id="c6">Jaguar</a> numbers may have doubled in 15 years in the south-western part of South America\'s <a href="https://www.independent.co.uk/topic/atlantic-forest" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/atlantic-forest" data-vars-event-id="c6">Atlantic Forest</a>, monitoring by conservationists has found.</p>'}},{type:"markup",data:{markup:"<p>Research using camera traps at more than 200 sites, which took more than 440,000 photographs last year alone, shows a slow recovery in numbers since initial studies in 2005.</p>"}},{type:"markup",data:{markup:"<p>The big cat is threatened by loss of habitat to farming and development, as well as illegal hunting of its prey and conflict with farmers, in the Atlantic Forest, which spans Argentina, Brazil and Paraguay.</p>"}},{type:"markup",data:{markup:'<p>Efforts across the three countries by <a href="https://www.independent.co.uk/topic/WWF" class="body-link" data-vars-item-name="BL-9570711-https://www.independent.co.uk/topic/WWF" data-vars-event-id="c6">WWF</a>, Fundacion Vida Silvestre Argentina and local partners are focusing on habitat loss, poaching of jaguars and their prey, and reducing conflict between the big cats and local people.</p>'}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated population in the south-western region of the Atlantic Forest of 30 to 54 individuals.</p>"}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now between 84 and 125 jaguars in the region.</p>"}},{type:"markup",data:{markup:"<p>The figures mean the population across the whole of the Atlantic Forest is estimated at between 150 and 200, WWF said.</p>"}},{type:"markup",data:{markup:"<p>Karina Berg, regional manager for Latin America at WWF-UK, said: “These new figures demonstrate the importance of investment into long-term conservation efforts and are an incredible testament to the commitment and dedication of our teams and partners on the ground.</p>"}},{type:"markup",data:{markup:"<p>“Conserving and protecting this area and its wildlife remain as important as ever, and while jaguar populations increase, the challenges faced by this species continue.</p>"}},{type:"markup",data:{markup:"<p>“We hope to see continued population increases here and in other critical regions across Latin America in the future.”</p>"}},{type:"markup",data:{markup:"<p>The United States is reopening — whether you like it or not. </p>"}},{type:"markup",data:{markup:"<p>As states lift stay-at-home orders and encourage businesses to once again open their doors to the public, health officials are warning the nation is still sorely lacking in its testing and tracing capabilities. A second, deadlier wave of the novel coronavirus outbreak could strike the US even harder in the fall, experts have said, as there are few measures currently in place to prevent Covid-19 from becoming endemic within the country again.</p>"}},{type:"markup",data:{markup:"<p>More than one million people living in the US have contracted Covid-19, and over 60,000 people have died due to complications resulting from the disease. Analysts are now raising their estimates for the national death toll, citing “flatter and thus longer epidemic peaks” in various states like New York, which found itself at the heart of the crisis as it unfolded nationwide. </p>",id:"mjvprmm4"}},{type:"markup",data:{markup:"<p>Donald Trump is even beginning to admit that more people will die from the virus than he previously acknowledged — even as he continues insisting the country “reopen” sooner before later, and celebrating states like Texas as they open up businesses to the public.</p>"}},{type:"markup",data:{markup:"<p>The country’s own health agencies are imploring states to remain locked down until they record a significant drop in cases, combined with new initiatives to expand testing abilities. Still, the US appears set to reopen in the midst of the pandemic, with questions swirling over how those vulnerable to the deadly virus can be safe as society returns to some form of normalcy.&nbsp;</p>"}},{type:"markup",data:{markup:"<p>What might that new normal look like? What can Americans expect from their state and federal governments, as well as local businesses, as they seek to reopen the country? How might their lives be impacted for decades to come due to this unprecedented moment? The Independent asked these questions and more to experts in different aspects of human interaction to get a sense of what the “new normal” will be like in a post-pandemic American society.</p>"}},{type:"markup",data:{markup:"<p>Post-Pandemic Parallels to 9/11</p>"}},{type:"markup",data:{markup:"<p>“We’ve all been trying to envision what our world may look like” after the pandemic, said Dr Saralyn Mark, an endocrinologist and the first senior medical adviser to the Office on Women’s Health at the US Department of Health and Human Services. “We adapt, we evolve and we respond. As a society, I believe we’ll all do that.”</p>"}},{type:"markup",data:{markup:"<p>Dr Mark, who spent time in Asia after the Severe Acute Respiratory Syndrome (SARS) outbreak of 2003, predicted that the US will likely take on many of the same measures societies in China and other Asian countries adopted in the wake of the deadly virus.</p>"}},{type:"markup",data:{markup:"<p>“Everyone began wearing face masks, especially when they were immune compromised,” she said, adding that masks were initially a “very strange” concept for people throughout Asia. The practice of wearing a face mask when sick or during seasonal outbreaks has since become commonplace in many crowded cities and suburbs across Asia, Dr Mark noted.</p>"}},{type:"markup",data:{markup:"<p>Aliquam eleifend mi in nulla posuere sollicitudin. Tincidunt augue interdum velit euismod in pellentesque. Dolor sed viverra ipsum nunc aliquet bibendum enim. Consectetur lorem donec massa sapien faucibus. Ultrices neque ornare aenean euismod. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Maecenas ultricies mi eget mauris pharetra et. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Eget egestas purus viverra accumsan in nisl nisi. Aliquam malesuada bibendum arcu vitae elementum. Feugiat nisl pretium fusce id velit. Mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas purus viverra accumsan in. Lectus magna fringilla urna porttitor rhoncus dolor. Quis varius quam quisque id diam. Ut ornare lectus sit amet est. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Risus sed vulputate odio ut enim blandit volutpat maecenas. Adipiscing commodo elit at imperdiet dui accumsan sit. Risus in hendrerit gravida rutrum quisque non.</p>"}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now between 84 and 125 jaguars in the region.</p>"}},{type:"markup",data:{markup:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque. Mi in nulla posuere sollicitudin aliquam. Mauris ultrices eros in cursus. Ipsum consequat nisl vel pretium lectus quam. Proin nibh nisl condimentum id venenatis a condimentum. In egestas erat imperdiet sed euismod. Ut tristique et egestas quis ipsum suspendisse. Risus pretium quam vulputate dignissim suspendisse in. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Cras sed felis eget velit aliquet sagittis. Elementum sagittis vitae et leo duis. Id ornare arcu odio ut sem nulla pharetra. Sed id semper risus in hendrerit.</p>"}},{type:"markup",data:{markup:"<p>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Elit pellentesque habitant morbi tristique senectus. Eu augue ut lectus arcu bibendum at. Facilisis sed odio morbi quis commodo odio aenean sed. Velit dignissim sodales ut eu sem integer vitae justo eget. Tempus egestas sed sed risus pretium. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Mollis aliquam ut porttitor leo a. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Bibendum neque egestas congue quisque egestas diam. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Quisque non tellus orci ac. Amet luctus venenatis lectus magna fringilla urna. Id leo in vitae turpis massa sed elementum tempus. Faucibus ornare suspendisse sed nisi. Aliquet lectus proin nibh nisl condimentum id venenatis a. Id consectetur purus ut faucibus pulvinar elementum integer. Nulla facilisi nullam vehicula ipsum a arcu.</p>"}},{type:"markup",data:{markup:"<p>Aliquam eleifend mi in nulla posuere sollicitudin. Tincidunt augue interdum velit euismod in pellentesque. Dolor sed viverra ipsum nunc aliquet bibendum enim. Consectetur lorem donec massa sapien faucibus. Ultrices neque ornare aenean euismod. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Maecenas ultricies mi eget mauris pharetra et. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Eget egestas purus viverra accumsan in nisl nisi. Aliquam malesuada bibendum arcu vitae elementum. Feugiat nisl pretium fusce id velit. Mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas purus viverra accumsan in. Lectus magna fringilla urna porttitor rhoncus dolor. Quis varius quam quisque id diam. Ut ornare lectus sit amet est. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Risus sed vulputate odio ut enim blandit volutpat maecenas. Adipiscing commodo elit at imperdiet dui accumsan sit. Risus in hendrerit gravida rutrum quisque non.</p>"}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now between 84 and 125 jaguars in the region.</p>"}},{type:"markup",data:{markup:"<p>The figures mean the population across the whole of the Atlantic Forest is estimated at between 150 and 200, WWF said.</p>"}},{type:"markup",data:{markup:"<p>Karina Berg, regional manager for Latin America at WWF-UK, said: “These new figures demonstrate the importance of investment into long-term conservation efforts and are an incredible testament to the commitment and dedication of our teams and partners on the ground.</p>"}},{type:"markup",data:{markup:"<p>“Conserving and protecting this area and its wildlife remain as important as ever, and while jaguar populations increase, the challenges faced by this species continue.</p>"}},{type:"markup",data:{markup:"<p>“We hope to see continued population increases here and in other critical regions across Latin America in the future.”</p>"}},{type:"markup",data:{markup:"<p>The United States is reopening — whether you like it or not. </p>"}},{type:"markup",data:{markup:"<p>More than one million people living in the US have contracted Covid-19, and over 60,000 people have died due to complications resulting from the disease. Analysts are now raising their estimates for the national death toll, citing “flatter and thus longer epidemic peaks” in various states like New York, which found itself at the heart of the crisis as it unfolded nationwide. </p>",id:"mjvprmm4"}},{type:"markup",data:{markup:"<p>Donald Trump is even beginning to admit that more people will die from the virus than he previously acknowledged — even as he continues insisting the country “reopen” sooner before later, and celebrating states like Texas as they open up businesses to the public.</p>"}},{type:"markup",data:{markup:"<p>The country’s own health agencies are imploring states to remain locked down until they record a significant drop in cases, combined with new initiatives to expand testing abilities. Still, the US appears set to reopen in the midst of the pandemic, with questions swirling over how those vulnerable to the deadly virus can be safe as society returns to some form of normalcy.&nbsp;</p>"}}]},children:Object(jsx_runtime.jsx)(ArticleContent,{})});RichArticleLongRead.storyName="Long article with multiple embeds",RichArticleLongRead.parameters={amp:{isEnabled:!0}};const RichArticleShortText=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:[{type:"markup",data:{markup:'<p><a href="https://www.independent.co.uk/topic/jaguars" class="body-link" data-vars-item-</p>'}},{type:"markup",data:{markup:"<p>Research using ear alone, shows a slow recovery in numbers since initial studies in 2005.</p>"}},{type:"markup",data:{markup:"<p>The big cat is threatened by loss well as illegal hunting of its prey  which spans Argentina, Brazil and Paraguay.</p>"}},{type:"markup",data:{markup:"<p>Efforts across the three countries by </p>"}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated individuals.</p>"}},{type:"related",data:{align:"left",title:"Read more",links:[{href:"/",title:"Diego the 100-year-old tortoise who saved his species returns home",image:Object(createImage.b)(175,175,175),media_type:"video"},{href:"/",title:"Nature's 'lifeboats' can protect at-risk species from climate change",image:Object(createImage.b)(175,175,175),media_type:"image"},{href:"/",title:"Endangered elephants reclaim national park during lockdown",image:Object(createImage.b)(175,175,175),media_type:"video"}],allVideos:!1}},{type:"markup",data:{markup:"<p>By 2014 that had risen to between 51 and 84, by 2016 it was 71 to 107, and the latest figures estimate there are now betweenthe region.</p>"}},{type:"markup",data:{markup:"<p>The figures mean the population across the whole of the Atlantic Forest is estimated at between 150 and 200, WWF said.</p>"}},{type:"markup",data:{markup:"<p>Karina Berg, regional manager for Latin America at WWF-UK, said: “These new figures demonstrate the importance of investment to the commitment and dedication of our teams and partners on the ground.</p>"}},{type:"markup",data:{markup:"<p>“Conserving and protecting this area and its wildlife remain as important as ever, and while jaguar populations increase, the challenges faced by this species continue.</p>"}},{type:"markup",data:{markup:"<p>“We hope to see continued population increases here and in other critical regions across Latin America in the future.”</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina.”</p>"}},{type:"markup",data:{markup:"<p><em>Press Association</em></p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005  for the species.”</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina.”</p>"}},{type:"markup",data:{markup:"<p><em>Press Association</em></p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005  for the species.”</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina.”</p>"}},{type:"markup",data:{markup:"<p><em>Press Association</em></p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005  for the species.”</p>"}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated individuals.</p>"}},{type:"markup",data:{markup:"<p>Manuel Jaramillo, general director of Fundacion Vida Silvestre Argentina, said: “Considering the monitoring work carried out from 2005  for the species.”</p>"}},{type:"markup",data:{markup:"<p>The regular monitoring by researchers based at institutes in Brazil and Argentina found that in 2005 there was an estimated individuals.</p>"}}]},children:Object(jsx_runtime.jsx)(ArticleContent,{})});RichArticleShortText.storyName="Article with short paragraphs",RichArticleShortText.parameters={amp:{isEnabled:!0}};const DefaultRichArticleStoryWithSensitiveFlag=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:rich(),sensitive:!0},children:Object(jsx_runtime.jsx)(ArticleContent,{})});DefaultRichArticleStoryWithSensitiveFlag.storyName="Rich article with multiple embeds & sensitive flag",DefaultRichArticleStoryWithSensitiveFlag.parameters={amp:{isEnabled:!0}};const DefaultRichArticleStoryWithCommercialFlag=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:rich(),isCommercial:!0},children:Object(jsx_runtime.jsx)(ArticleContent,{})});DefaultRichArticleStoryWithCommercialFlag.storyName="Rich article with multiple embeds & commercial flag",DefaultRichArticleStoryWithCommercialFlag.parameters={amp:{isEnabled:!0}};const DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:rich(),isCommercial:!0,extra:{isDisableAllAds:!0}},children:Object(jsx_runtime.jsx)(ArticleContent,{})});DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.storyName="Rich article with multiple embeds & commercial flag & disable all ads flag",DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.parameters={amp:{isEnabled:!0}},RichArticleLongRead.parameters={storySource:{source:"() => (\n  <MockArticle articleOverrides={{ body: getRichLongRead() }}>\n    <ArticleContent />\n  </MockArticle>\n)"},...RichArticleLongRead.parameters},RichArticleShortText.parameters={storySource:{source:"() => (\n  <MockArticle articleOverrides={{ body: getRichShortText() }}>\n    <ArticleContent />\n  </MockArticle>\n)"},...RichArticleShortText.parameters},DefaultRichArticleStoryWithSensitiveFlag.parameters={storySource:{source:"() => (\n  <MockArticle\n    articleOverrides={{ body: getRichArticleBody(), sensitive: true }}\n  >\n    <ArticleContent />\n  </MockArticle>\n)"},...DefaultRichArticleStoryWithSensitiveFlag.parameters},DefaultRichArticleStoryWithCommercialFlag.parameters={storySource:{source:"() => (\n  <MockArticle\n    articleOverrides={{ body: getRichArticleBody(), isCommercial: true }}\n  >\n    <ArticleContent />\n  </MockArticle>\n)"},...DefaultRichArticleStoryWithCommercialFlag.parameters},DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.parameters={storySource:{source:"() => (\n  <MockArticle\n    articleOverrides={{\n      body: getRichArticleBody(),\n      isCommercial: true,\n      extra: { isDisableAllAds: true },\n    }}\n  >\n    <ArticleContent />\n  </MockArticle>\n)"},...DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.parameters},RichArticleLongRead.__docgenInfo={description:"",methods:[],displayName:"RichArticleLongRead"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticleAds.stories.js"]={name:"RichArticleLongRead",docgenInfo:RichArticleLongRead.__docgenInfo,path:"stories/Article/ArticleAds.stories.js"}),RichArticleShortText.__docgenInfo={description:"",methods:[],displayName:"RichArticleShortText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticleAds.stories.js"]={name:"RichArticleShortText",docgenInfo:RichArticleShortText.__docgenInfo,path:"stories/Article/ArticleAds.stories.js"}),DefaultRichArticleStoryWithSensitiveFlag.__docgenInfo={description:"",methods:[],displayName:"DefaultRichArticleStoryWithSensitiveFlag"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticleAds.stories.js"]={name:"DefaultRichArticleStoryWithSensitiveFlag",docgenInfo:DefaultRichArticleStoryWithSensitiveFlag.__docgenInfo,path:"stories/Article/ArticleAds.stories.js"}),DefaultRichArticleStoryWithCommercialFlag.__docgenInfo={description:"",methods:[],displayName:"DefaultRichArticleStoryWithCommercialFlag"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticleAds.stories.js"]={name:"DefaultRichArticleStoryWithCommercialFlag",docgenInfo:DefaultRichArticleStoryWithCommercialFlag.__docgenInfo,path:"stories/Article/ArticleAds.stories.js"}),DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.__docgenInfo={description:"",methods:[],displayName:"DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticleAds.stories.js"]={name:"DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds",docgenInfo:DefaultRichArticleStoryWithCommercialFlagAndIsDisableAllAds.__docgenInfo,path:"stories/Article/ArticleAds.stories.js"})},2295:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticlePageStory",(function(){return ArticlePageStory})),__webpack_require__.d(__webpack_exports__,"ArticleContentStory",(function(){return ArticleContentStory}));var jsx_runtime=__webpack_require__(0),MockArticle=__webpack_require__(142);var mockArticleWithEmbeds=()=>({type:"article",id:"000",status:!0,title:"This is a title",titleShort:"This is a short title",lead:"This is the lead",sidebar:{data:{publication:{}},layoutSettings:[{type:"Ad"},{type:"Ad"}]},sections:[{path:"",name:""}],hierarchy:[{path:"./",name:"Crumb 1",sourcePath:"/crumb1"},{path:"./",name:"Crumb 2",sourcePath:"/crumb2"}],extra:{authorInfo:"London"},updated:"1588169959",publish:"1588169959",unPublish:"2145916800",isLiveBlog:!1,inlineImages:[],articleTypes:[],body:[{type:"markup",data:{markup:'<p dir="ltr">Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"listnumbered",data:{markup:'\n<ol>\n    <li>Ordered list line item one</li>\n    <li>second line with a <strong>strong</strong></li>\n    <li>third with a <strike>strike through</strike></li>\n    <li>fourth with a <a href="/">link</a></li>\n</ol>'}},{type:"related",data:{links:[{href:"/sport/football/millwall-fc-gary-rowett-tests-positive-covid-19-a4572795.html",title:"Millwall boss Rowett tests positive for Covid-19 before Barnsley clash"},{href:"/sport/football/millwall-fc-gary-rowett-tests-positive-covid-19-a4572795.html",title:"Millwall boss Rowett tests positive for Covid-19 before Barnsley clash"}]}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"H2",data:{markup:"<h2>Heading 2</h2>"},id:"mzofupwl"},{type:"H3",data:{markup:"<h3>Heading 3</h3>"},id:"mzofupwl"},{type:"H4",data:{markup:"<h4>Heading 4</h4>"},id:"mzofupwl"},{type:"H5",data:{markup:"<h5>Heading 5</h5>"},id:"mzofupwl"},{type:"H6",data:{markup:"<h6>Heading 6</h6>"},id:"mzofupwl"},{type:"infobox",data:{markup:"<p>This is where the content should go</p>",subHeadline:"This is the subheading",title:"Infobox title"}},{type:"listbulleted",data:{markup:'\n<ul>\n    <li>Bulleted list first line</li>\n    <li>second line with a <strong>strong</strong></li>\n    <li>third with a <strike>strike through</strike></li>\n    <li>fourth with a <a href="/">link</a></li>\n</ul>'}}],topics:[{name:"Topic 1",path:"",id:"1",uuid:"1"},{name:"Topic 2",path:"",id:"2",uuid:"2"},{name:"Topic 3",path:"",id:"3",uuid:"3"}]});const ArticlePage=__webpack_require__(905).default;__webpack_exports__.default={title:"Article/Page",component:ArticlePage};const ArticlePageStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{children:Object(jsx_runtime.jsx)(ArticlePage,{})});ArticlePageStory.storyName="Full article page",ArticlePageStory.parameters={amp:{isEnabled:!0}};const ArticleContentStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{...mockArticleWithEmbeds()},children:Object(jsx_runtime.jsx)(ArticlePage,{})});ArticleContentStory.storyName="Article embed page",ArticleContentStory.parameters={amp:{isEnabled:!0}},ArticlePageStory.parameters={storySource:{source:"() => (\n  <MockArticle>\n    <ArticlePage />\n  </MockArticle>\n)"},...ArticlePageStory.parameters},ArticleContentStory.parameters={storySource:{source:"() => (\n  <MockArticle articleOverrides={{ ...getMockEmbedArticle() }}>\n    <ArticlePage />\n  </MockArticle>\n)"},...ArticleContentStory.parameters},ArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"ArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"ArticlePageStory",docgenInfo:ArticlePageStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),ArticleContentStory.__docgenInfo={description:"",methods:[],displayName:"ArticleContentStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"ArticleContentStory",docgenInfo:ArticleContentStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"})},2297:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultSectionStory",(function(){return DefaultSectionStory}));var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),Mocker=__webpack_require__(157),mockWithRequest=__webpack_require__(118);class MockSection_MockSection extends Mocker.a{setOverrides(props){Object(mockWithRequest.b)(),Object(mockWithRequest.g)(props.sectionOverrides),Object(mockWithRequest.f)(props.reqOverrides)}}MockSection_MockSection.propTypes={sectionOverrides:prop_types_default.a.object,reqOverrides:prop_types_default.a.object,...Mocker.a.propTypes},MockSection_MockSection.defaultProps={sectionOverrides:{},reqOverrides:{},...Mocker.a.defaultProps};var components_MockSection=MockSection_MockSection;const SectionPage=__webpack_require__(2289).default;__webpack_exports__.default={title:"Section/Page",component:SectionPage};const DefaultSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{children:Object(jsx_runtime.jsx)(SectionPage,{})});DefaultSectionStory.storyName="Full section page",DefaultSectionStory.parameters={amp:{isEnabled:!0}},DefaultSectionStory.parameters={storySource:{source:"() => (\n  <MockSection>\n    <SectionPage />\n  </MockSection>\n)"},...DefaultSectionStory.parameters},DefaultSectionStory.__docgenInfo={description:"",methods:[],displayName:"DefaultSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"DefaultSectionStory",docgenInfo:DefaultSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"})},247:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(4);const AmpAd=({width:width,height:height,type:type,src:src,dataSlot:dataSlot,json:json,config:config,ampRefresh:ampRefresh,ampSizes:ampSizes,ampSizeValidation:ampSizeValidation,...props})=>Object(jsx_runtime.jsx)("amp-ad",{width:width,height:height,type:type,src:src,"data-multi-size":ampSizes,"data-slot":dataSlot,json:json?JSON.stringify(json):null,"rtc-config":config?JSON.stringify(config):null,"data-enable-refresh":ampRefresh,"data-multi-size-validation":ampSizeValidation,"data-block-on-consent":"_till_responded",...props});AmpAd.propTypes={width:prop_types_default.a.number.isRequired,height:prop_types_default.a.number.isRequired,type:prop_types_default.a.string.isRequired,dataSlot:prop_types_default.a.string.isRequired,src:prop_types_default.a.string,json:prop_types_default.a.object,config:prop_types_default.a.object,ampRefresh:prop_types_default.a.number,ampSizes:prop_types_default.a.string,ampSizeValidation:prop_types_default.a.bool},AmpAd.__docgenInfo={description:"",methods:[],displayName:"AmpAd",props:{width:{type:{name:"number"},required:!0,description:""},height:{type:{name:"number"},required:!0,description:""},type:{type:{name:"string"},required:!0,description:""},dataSlot:{type:{name:"string"},required:!0,description:""},src:{type:{name:"string"},required:!1,description:""},json:{type:{name:"object"},required:!1,description:""},config:{type:{name:"object"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampSizeValidation:{type:{name:"bool"},required:!1,description:""}}};var Ad=AmpAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Ad.js"]={name:"AmpAd",docgenInfo:AmpAd.__docgenInfo,path:"app/component/library/AMP/Ad.js"});var react=__webpack_require__(2),RequestProvider=__webpack_require__(14),ConfigManager=__webpack_require__(912),ConfigManager_default=__webpack_require__.n(ConfigManager),publication=__webpack_require__(179);const publicationConfig={[publication.a]:{projectId:"5d79bce7-5d2b-427e-a6c4-b89b6c7bf048",apiKey:"ed467bcf-98ee-4ed9-894e-c49be4ab97e7",namespace:"esi"}};var manifest=__webpack_require__(913);const configManager=new ConfigManager_default.a({logoUrl:"/img/logo.png",feeds:{mmm:{src:"https://www.independent.co.uk/pwamp/layout_component/api-mmm",items:"articles"},indy100:{src:"https://www.independent.co.uk/pwamp/layout_component/api-i100",logo:"https://static.independent.co.uk/static-assets/i100.png"}},facebookAppId:"235586169789578",brightcove:{account:"624246174001",player:"BJXA5Px6f"},chartbeat:{uid:"62356"},comscore:{clientId:"10476312"},adobe:{reportSuiteId:"indepdev"},cmp:{enabled:"true"===Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).CMP_ENABLED},subdomain:{static:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).INDY100_SUBDOMAIN_STATIC},gtm:{containerId:"GTM-M7RJWSG"},indexExchange:{siteId:"197231",scriptUrl:"//js-sec.indexww.com/ht/p/184658-179606859100175.js"},ga:{id:"UA-50984532-1"},manifest:manifest,jwplayerPlayerIds:{default:{defaultPlayer:"0nWd1PuM",noAdsPlayer:"GtIMyXQx",sensitivePlayer:"AJlQKgBQ",commercialPlayer:"AJlQKgBQ",inlinePlayer:"GwvrN2jh"},amp:{defaultPlayer:"89QBnokE",noAdsPlayer:"u0THJEkR",sensitivePlayer:"NCF0w26J",commercialPlayer:"NCF0w26J",inlinePlayer:"eYGqGOrq"}},jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",commercialPlayerType:"clicktoplay",inlinePlayerType:"clicktoplay"},gigya:{api_key:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_KEY,api_secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_SECRET},googleCaptchaV3Secret:"6LeBDuQZAAAAAHtqXbKl5-9Iv81U6cat8b8InKoF"});configManager.addPublication(publication.a,{description:"",permutive:(publication=>publicationConfig[publication]?publicationConfig[publication]:(console.error("No taboola config found for "+publication),{}))(publication.a),enableLiveblogAPI:!1,rssftpwfiltEnabled:!0,atexEnabled:!1,newsletterRSSEnabled:!1,appRSSEnabled:!1,nlaRSSEnabled:!0,gnFeedEnabled:!0,rssImageEnabled:!0,rssSmartEnabled:!0,rssPremiumEnabled:!1,rssGalleryEnabled:!1,rssVideoEnabled:!1,pugPigPremiumAPIEnabled:!1,enableKindleXML:!1});const sidebarSlot=[1,2,5],articleSlots=size=>Array.apply(null,{length:size}).map(Number.call,Number).map(n=>n+1);configManager.addAdConfig({ampAd:{type:"doubleclick","data-slot":"/8057/","data-multi-size-validation":"false","rtc-config":'{ "vendors": { "lotame": { "CLIENT_ID": "4810", "AD_NETWORK": "DC" } } }',json:'{"targeting":{"pos":[], "test": true }}'},sidebarSlot:sidebarSlot,articleSlot:articleSlots(10).filter(n=>!sidebarSlot.includes(n)),cleanAmpArticleSlot:articleSlots(10)});var config_config=configManager;const ConfigProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{const adProps=Object.keys(Ad.propTypes),config=config_config.getConfig();return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),config:{vendors:{...config.indexExchange?{indexexchange:{SITE_ID:config.indexExchange.siteId}}:{}},urls:["https://esi.amp.permutive.com/rtc?type=doubleclick"],timeoutMillis:750}})});const AmpStickyAd=({children:children})=>Object(jsx_runtime.jsx)("amp-sticky-ad",{layout:"nodisplay",children:children});AmpStickyAd.propTypes={children:prop_types_default.a.element},AmpStickyAd.__docgenInfo={description:"",methods:[],displayName:"AmpStickyAd",props:{children:{type:{name:"element"},required:!1,description:""}}};var StickyAd=AmpStickyAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/StickyAd.js"]={name:"AmpStickyAd",docgenInfo:AmpStickyAd.__docgenInfo,path:"app/component/library/AMP/StickyAd.js"});const TargetingJSONProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{var _ref,_article$hero,_article$hero$,_article$hero2,_article$hero2$;const adProps=Object.keys(Ad.propTypes),{article:article,section:section={}}=props.res.locals;return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),json:{targeting:{tile:props.id,gs_channels:(null==article?void 0:article.grapeshot)||(null==section?void 0:section.grapeshot)||[],docFormat:"amp",pagetype:"section",...article?{article:null===(_ref=article.remoteId||article.id)||void 0===_ref?void 0:_ref.replace(/\D/g,""),pagetype:"jw_player"===(null===(_article$hero=article.hero)||void 0===_article$hero||null===(_article$hero$=_article$hero[0])||void 0===_article$hero$?void 0:_article$hero$.type)?"video":(null===(_article$hero2=article.hero)||void 0===_article$hero2||null===(_article$hero2$=_article$hero2[0])||void 0===_article$hero2$?void 0:_article$hero2$.type)||""}:{}}}})});const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,AdIndex=styled_components_browser_esm.default.div`
  display: none;
`,AugmentedAmpAd=(WrappedComponent=>{const WrappedComponentWithAMPStickyAd=({ampStickyAd:ampStickyAd,...props})=>ampStickyAd?Object(jsx_runtime.jsx)(StickyAd,{children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}):Object(jsx_runtime.jsx)(WrappedComponent,{...props});return WrappedComponentWithAMPStickyAd.propTypes={...WrappedComponent.propTypes},WrappedComponentWithAMPStickyAd})((WrappedComponent=>props=>Object(jsx_runtime.jsx)(TargetingJSONProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))((WrappedComponent=Ad,props=>Object(jsx_runtime.jsx)(ConfigProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))));var WrappedComponent;const Ad_Ad=props=>{const{cleanAmp:cleanAmp,id:id,className:className,refreshAtIndex:refreshAtIndex,refreshStateId:refreshStateId,sizes:sizes,height:height,width:width,isVideo:isVideo,ampSizes:ampSizes,adUnitPathArr:adUnitPathArr,ampStickyAd:ampStickyAd,ampRefresh:ampRefresh,ampSizeValidation:ampSizeValidation}=props;return Object(jsx_runtime.jsx)(Wrapper,{className:className,children:cleanAmp?Object(jsx_runtime.jsx)(AugmentedAmpAd,{id:id,width:width,height:height,type:"doubleclick",dataSlot:"/"+adUnitPathArr.join("/"),"data-multi-size":ampSizes,ampSizeValidation:ampSizeValidation,ampStickyAd:ampStickyAd,ampSizes:ampSizes,ampRefresh:ampRefresh}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[refreshStateId&&Object(jsx_runtime.jsx)(AdIndex,{id:id+"_adIndex","amp-bind-text":`floor(${refreshStateId}.currentIndex / ${refreshAtIndex})`}),Object(jsx_runtime.jsx)("div",{"data-mpu":!0,"data-is-video":isVideo,"data-tile-name":id,"data-ad-unit-path":"/"+adUnitPathArr.join("/"),"data-sizes":sizes,"data-desktop-sizes":props["desktop-sizes"],"data-tablet-sizes":props["tablet-sizes"],"data-mobile-sizes":props["mobile-sizes"],"data-size-key":props["size-key"],"data-refresh-check":!!refreshStateId,"data-force-bulk":props["force-bulk"]})]})})};Ad_Ad.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool,id:prop_types_default.a.string.isRequired,sizes:prop_types_default.a.string,"desktop-sizes":prop_types_default.a.string,"tablet-sizes":prop_types_default.a.string,"mobile-sizes":prop_types_default.a.string,"size-key":prop_types_default.a.string,refreshAtIndex:prop_types_default.a.number,refreshStateId:prop_types_default.a.string,height:prop_types_default.a.number,width:prop_types_default.a.number,isVideo:prop_types_default.a.bool,"force-bulk":prop_types_default.a.bool,ampSizes:prop_types_default.a.string,ampRefresh:prop_types_default.a.number,adUnitPathArr:prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,ampStickyAd:prop_types_default.a.bool,ampSizeValidation:prop_types_default.a.bool},Ad_Ad.defaultProps={cleanAmp:!1,refreshAtIndex:1,height:250,width:300,ampStickyAd:!1,ampSizeValidation:!0,isVideo:!1},Ad_Ad.__docgenInfo={description:"",methods:[],displayName:"Ad",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},refreshAtIndex:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"250",computed:!1},type:{name:"number"},required:!1,description:""},width:{defaultValue:{value:"300",computed:!1},type:{name:"number"},required:!1,description:""},ampStickyAd:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ampSizeValidation:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},isVideo:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!0,description:""},sizes:{type:{name:"string"},required:!1,description:""},"desktop-sizes":{type:{name:"string"},required:!1,description:""},"tablet-sizes":{type:{name:"string"},required:!1,description:""},"mobile-sizes":{type:{name:"string"},required:!1,description:""},"size-key":{type:{name:"string"},required:!1,description:""},refreshStateId:{type:{name:"string"},required:!1,description:""},"force-bulk":{type:{name:"bool"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},adUnitPathArr:{type:{name:"arrayOf",value:{name:"string"}},required:!0,description:""}}};__webpack_exports__.default=Ad_Ad;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Ad.js"]={name:"Ad",docgenInfo:Ad_Ad.__docgenInfo,path:"app/component/library/Ads/Ad.js"})},325:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return size})),__webpack_require__.d(__webpack_exports__,"a",(function(){return publicationConfig}));var _constants_publication__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(179),_theme_Styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);const tabletBanner=[728,90],mobileBanner=[320,50],singleMPU=[300,250],thirdParty1x1=[1,1],size={TOP_BANNER:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[[970,250],tabletBanner]}],BOTTOM_BANNER:[{from:0,supportedSizes:[mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner,mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],SKIN:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[[4,4]]}],SINGLE_MPU:[{from:0,supportedSizes:[singleMPU]}],SINGLE_MPU_ONLY_MOBILE:[{from:0,supportedSizes:[singleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],SINGLE_MPU_ONLY_DESKTOP:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU]}],THIRD_PARTY_ARTICLE_BODY:[{from:0,supportedSizes:[singleMPU,thirdParty1x1]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU,thirdParty1x1]}]},publicationConfig=(_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,{[_constants_publication__WEBPACK_IMPORTED_MODULE_0__.a]:{networkId:"71347885",adUnitHomepage:"_main_in100",thirdPartyUnitHomepage:"_partner_in100"}})},327:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div``,List=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.ul`
  display: none;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  width: 90%;
  .active {
    background-color: ${props=>props.theme.color.pinkContrast};
  }
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_3__.c.mobileL} {
    display: flex;
  }
`,ListItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.li`
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
`,Link=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.a`
  color: ${props=>props.theme.color.white};
  font-size: 18px;
`,SubMenu=({subMenu:subMenu,currentURL:currentURL,className:className})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper,{className:className,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(List,{children:subMenu&&subMenu.menu.map(({path:path,title:title},i)=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListItem,{className:currentURL.includes(path)&&"/wishlist"!==currentURL?"active ":" ",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link,{href:path,children:title})},path+i))})});SubMenu.propTypes={subMenu:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,currentURL:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},SubMenu.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{subMenu:{type:{name:"object"},required:!0,description:""},currentURL:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}},__webpack_exports__.a=SubMenu,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Menu/SubMenu.js"]={name:"SubMenu",docgenInfo:SubMenu.__docgenInfo,path:"app/component/library/Menu/SubMenu.js"})},328:function(module,__webpack_exports__,__webpack_require__){"use strict";const ColumnWrapper=__webpack_require__(4).default.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;__webpack_exports__.a=ColumnWrapper},329:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M16.8 14L28 25.2 25.2 28 14 16.8 2.9 28 0 25.2 11.2 14 0 2.8 2.9 0 14 11.2 25.2 0 28 2.8 16.8 14z"></path></svg>\n'},330:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_icons_closeIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(329),_Ads_MPU__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(96);const StickyFooter=({className:className,cleanAmp:cleanAmp,...rest})=>cleanAmp?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Ads_MPU__WEBPACK_IMPORTED_MODULE_5__.a,{id:"bottom_banner_0",ampSizes:"728x90",width:320,height:50,cleanAmp:!0,ampStickyAd:!0,ampRefresh:30,...rest}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"sticky-footer-root",className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"sticky-ad-close-button-press",dangerouslySetInnerHTML:{__html:_icons_closeIcon__WEBPACK_IMPORTED_MODULE_4__.a}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Ads_MPU__WEBPACK_IMPORTED_MODULE_5__.a,{id:"bottom_banner_0","size-key":"BOTTOM_BANNER",className:"sticky","force-bulk":!0,...rest})]});StickyFooter.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,cleanAmp:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool};const StyledStickyFooter=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(StickyFooter)`
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
    @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_3__.c.tablet} {
      width: 36px;
      height: 36px;
      bottom: 89px;
    }
  }
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_3__.c.tablet} {
    height: 90px;
  }
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_3__.c.laptop} {
    display: none;
  }
`;__webpack_exports__.a=StyledStickyFooter},331:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return pageTitle}));var ramda__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(176),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(80);const pageTitle=({article:article,section:section},siteName)=>{const title=Object(ramda__WEBPACK_IMPORTED_MODULE_0__.a)("title",article);if(title)return title+" | "+siteName;const sectionName=Object(ramda__WEBPACK_IMPORTED_MODULE_1__.a)(["section","name"])(section);return sectionName?sectionName+" | "+siteName:void 0===article&&void 0===section?"Page not found | "+siteName:siteName}},332:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(4),RequestProvider=__webpack_require__(14),Helmet=__webpack_require__(81);const Frame=styled_components_browser_esm.default.iframe`
  display: none;
  visibility: hidden;
`,GTM=({res:{locals:{configuration:configuration,cleanAmp:cleanAmp}}})=>{var _configuration$gtm;const gtmContainerId=null==configuration||null===(_configuration$gtm=configuration.gtm)||void 0===_configuration$gtm?void 0:_configuration$gtm.containerId;return gtmContainerId&&!cleanAmp?Object(jsx_runtime.jsx)("noscript",{children:Object(jsx_runtime.jsx)(Frame,{src:"https://www.googletagmanager.com/ns.html?id="+gtmContainerId,height:0,width:0})}):null};GTM.propTypes={res:prop_types_default.a.object.isRequired},GTM.__docgenInfo={description:"",methods:[],displayName:"GTM",props:{res:{type:{name:"object"},required:!0,description:""}}};var library_GTM=Object(RequestProvider.withRequest)(GTM);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/GTM.js"]={name:"GTM",docgenInfo:GTM.__docgenInfo,path:"app/component/library/GTM.js"});var MPU=__webpack_require__(96),Styles=__webpack_require__(6);var react=__webpack_require__(2),crypto_browserify=__webpack_require__(930),crypto_browserify_default=__webpack_require__.n(crypto_browserify),bundle_min=__webpack_require__(931),bundle_min_default=__webpack_require__.n(bundle_min);const isEmptyStringOnly=function(props,propName){if(""!==props[propName]&&void 0!==props[propName])return new Error(`Only empty string is allowed for ${propName} attribute`)},isResponsiveRequired=function(props,propName){if(void 0!==props[propName]&&"responsive"!==props.layout)return new Error("Required responsive layout");prop_types_default.a.array(...arguments)},layout=prop_types_default.a.oneOf(["container","fill","fixed","fixed-height","flex-item","intrinsic","nodisplay","responsive"]),sizes=isResponsiveRequired,heights=isResponsiveRequired,media=prop_types_default.a.string,placeholder=isEmptyStringOnly,fallback=isEmptyStringOnly,noloading=isEmptyStringOnly,on=prop_types_default.a.string;const AmpScript=({children:children,...props})=>Object(jsx_runtime.jsx)("amp-script",{...props,children:children});AmpScript.propTypes={...{width:function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.height==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`)}},height:function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.width==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`);break;case"fixed-height":if(null==props[propName])return new Error(`Props 'height is required for layout '${props.layout}'`)}},layout:layout,sizes:sizes,heights:heights,media:media,placeholder:placeholder,fallback:fallback,noloading:noloading,on:on},src:prop_types_default.a.string,script:prop_types_default.a.string,sandbox:prop_types_default.a.oneOf(["allow-forms"]),"max-age":prop_types_default.a.string},AmpScript.__docgenInfo={description:"",methods:[],displayName:"AmpScript",props:{src:{type:{name:"string"},required:!1,description:""},script:{type:{name:"string"},required:!1,description:""},sandbox:{type:{name:"enum",value:[{value:"'allow-forms'",computed:!1}]},required:!1,description:""},"max-age":{type:{name:"string"},required:!1,description:""}},composes:["./props/Common"]};var Script=AmpScript;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Script.js"]={name:"AmpScript",docgenInfo:AmpScript.__docgenInfo,path:"app/component/library/AMP/Script.js"});let buildAllHash=(()=>{let hashes=[];return hash=>(hashes.includes(hash)||hashes.push(hash),hashes.join(" "))})();var hoc_withScript=(WrappedComponent,scriptProps)=>(snippet,...exprs)=>Object(RequestProvider.withRequest)(props=>{const script=exprs.reduce((result,expr,index)=>result+("function"==typeof expr?expr(props):expr)+snippet[index+1],snippet[0]),prefix=(null==scriptProps?void 0:scriptProps.script)?scriptProps.script+"-":"script-",minified=bundle_min_default.a.minify(script),hash=(script=>"sha384-"+crypto_browserify_default.a.createHash("sha384").update(script,"utf-8").digest("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"))(minified.code),allHash=buildAllHash(hash),[id]=Object(react.useState)(`${prefix}${hash.slice(-6)}`);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Script,{...scriptProps,script:id,children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}),Object(jsx_runtime.jsx)("script",{type:"text/plain",target:"amp-script",id:id,dangerouslySetInnerHTML:{__html:minified.code}}),Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("meta",{name:"amp-script-src",content:allHash}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-script",src:"https://cdn.ampproject.org/v0/amp-script-0.1.js"})]})]})});const SectionsList=styled_components_browser_esm.default.ul`
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
`,SectionMenu=({menu:{menu:menu},className:className})=>Object(jsx_runtime.jsx)(SectionsList,{classname:className,children:menu&&menu.map(({title:title,path:path},index)=>Object(jsx_runtime.jsx)(ListItem,{className:"border-style-"+title.toLowerCase(),children:Object(jsx_runtime.jsx)(SectionLink,{href:path,className:"link border-style-"+title.toLowerCase(),children:title})},title+index))});SectionMenu.propTypes={menu:prop_types_default.a.object,className:prop_types_default.a.string};const SectionMenuWithScript=hoc_withScript(SectionMenu)`
const links = document.querySelectorAll('.link');
links.forEach(async (link) => {
  link.addEventListener('click', async () => {
    const event_name = 'Navigation Link Click';
    const linkText = link.innerText;

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
`;var Menu_SectionMenu=Object(RequestProvider.withRequest)(({res:{locals:locals},...props})=>locals.cleanAmp?Object(jsx_runtime.jsx)(SectionMenuWithScript,{...props}):Object(jsx_runtime.jsx)(SectionMenu,{...props}));const Login=styled_components_browser_esm.default.a`
  width: 30px;
  height: 100%;
  text-transform: uppercase;
  font-size: ${props=>props.theme.fontSize.menu};
  color: ${props=>props.theme.color.white};
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: ${props=>props.theme.color.white};
  }
  @media ${Styles.c.laptop} {
    border-top: 2px ${props=>props.theme.color.black};
    width: 50px;
    margin-top: 4px;
    height: 66px;
    width: 80px;
  }
`;var Account=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("div",{className:className,children:Object(jsx_runtime.jsx)(Login,{role:"button",tabIndex:0,on:"tap:sidebar2",children:"Login"})}))`
  display: flex;
  align-items: end;
  justify-content: center;
`;const HeaderWrapper=styled_components_browser_esm.default.header`
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
`,Header=props=>{const{menu:menu,isWishList:isWishList}=props;return Object(jsx_runtime.jsxs)(HeaderWrapper,{children:[Object(jsx_runtime.jsxs)(LogoWrapper,{children:[Object(jsx_runtime.jsx)(LogoIndy100,{href:"/",dangerouslySetInnerHTML:{__html:isWishList?'\n<svg xmlns="http://www.w3.org/2000/svg" id="svg68" xml:space="preserve" viewBox="0 0 695 260.6" y="0" x="0" version="1.1"><style id="style2" type="text/css">.st0{fill:#fff}.st1{fill:#ec1a2e}.st3{fill:#fff;stroke:#000;stroke-width:2;stroke-miterlimit:10}</style><g transform="translate(-334.9 -269.9)" id="Layer_5"><path id="rect4" fill="#191919" d="M334.9 269.9h695v260.6h-695z"/></g><g transform="translate(-334.9 -269.9)" id="Layer_3"><path id="path9" d="M789.3 339.5c0-9.8.1-30.9 15.3-30.9 15.6 0 15.2 21 15.3 30.9h39.5c0-31-20.7-55.9-54.7-55.9-34.1 0-54.7 25-54.7 55.9z" class="st0" fill="#fff"/><path id="path11" d="M903.8 345.5c0 9.8.1 30.9 15.3 30.9 15.6 0 15.2-21 15.3-30.9h39.5c0 31-20.7 55.9-54.7 55.9-34.1 0-54.7-25-54.7-55.9z" class="st0" fill="#fff"/><path id="path13" d="M903.8 339.5c0-9.8.1-30.9 15.3-30.9 15.6 0 15.2 21 15.3 30.9h39.5c0-31-20.7-55.9-54.7-55.9-34.1 0-54.7 25-54.7 55.9z" class="st0" fill="#fff"/><path id="path15" d="M789.3 345.5c0 9.8.1 30.9 15.3 30.9 15.6 0 15.2-21 15.3-30.9h39.5c0 31-20.7 55.9-54.7 55.9-34.1 0-54.7-25-54.7-55.9z" class="st0" fill="#fff"/></g><g transform="translate(-334.9 -269.9)" id="Layer_4"><path id="polygon18" class="st0" fill="#fff" d="M703.2 339.5v-26.1l-8.6 4.9h-6.5v-21.1l25-12h28.6v54.3z"/><path id="path20" d="M741.7 375.8v-30.3h-38.3v30.7c0 2.2-1.8 4-4 4h-10v20H754v-20h-8.3c-2.2 0-4-1.8-4-4" class="st0" fill="#fff"/></g><g transform="translate(-334.9 -269.9)" id="Layer_6"><path id="path23" d="M380.7 376.8h6.5v24.4H340v-24.4h6.5v-33.9H340v-24.4h40.7z" class="st1" fill="#ec1a2e"/><path id="path25" d="M443.6 376.8h6.5v-24.4c0-3.4-.7-5.8-2.2-7.3-1.4-1.5-3.6-2.2-6.5-2.2s-5 .7-6.5 2.2c-1.4 1.5-2.2 3.9-2.2 7.3v24.4h6.5v24.4h-47.3v-24.4h6.5v-33.9h-6.5v-24.4h40.7v10.1c1.2-1.2 2.5-2.5 4-3.9s3.3-2.7 5.3-3.9c2-1.2 4.3-2.2 6.9-3.1 2.6-.9 5.6-1.3 8.9-1.3 8.1 0 14.6 2.9 19.3 8.7 4.7 5.8 7.1 14.9 7.1 27.3v24.4h6.5v24.4h-47.3l.3-24.4z" class="st1" fill="#ec1a2e"/><path id="path27" d="M546.9 309.9h-8.8v-24.4h43v91.3h6.5v24.4h-40.7v-10.1c-.9 1.2-2.1 2.5-3.6 3.9s-3.2 2.7-5.1 3.9c-1.9 1.2-4.1 2.2-6.5 3.1-2.4.8-5 1.3-7.8 1.3-10.3 0-18-3.8-23-11.4-5-7.6-7.5-18.3-7.5-32s2.5-24.5 7.5-32c5-7.6 12.7-11.4 23-11.4 2.8 0 5.4.4 7.8 1.3 2.4.8 4.6 1.9 6.5 3.1 1.9 1.2 3.6 2.5 5.1 3.9 1.5 1.4 2.7 2.7 3.6 3.9zm-17.3 57.4c0 3.4.7 5.8 2.2 7.3 1.4 1.5 3.6 2.2 6.5 2.2s5-.7 6.5-2.2c1.4-1.5 2.2-3.9 2.2-7.3v-14.9c0-3.4-.7-5.8-2.2-7.3-1.4-1.5-3.6-2.2-6.5-2.2s-5 .7-6.5 2.2c-1.4 1.5-2.2 3.9-2.2 7.3z" class="st1" fill="#ec1a2e"/><path id="path29" d="M631.1 367.3c0 3.4.7 5.8 2.2 7.3 1.4 1.5 3.6 2.2 6.5 2.2s5-.7 6.5-2.2c1.4-1.5 2.2-3.9 2.2-7.3v-24.4h-8v-24.4h42.2v74.3c0 14.9-3.7 25.8-11.2 32.9-7.5 7-18.7 10.6-33.5 10.6-7.1 0-14-.5-20.7-1.4-6.7-.9-12.4-2.1-17-3.5V407c5.5 1 10.6 1.7 15.5 2.2 4.9.4 10.5.7 16.7.7 5.4 0 9.4-.8 12-2.4 2.7-1.6 4-5 4-10v-6.2c-1.2 1.3-2.5 2.6-4.1 4-1.5 1.4-3.3 2.7-5.3 3.9-2 1.2-4.3 2.2-6.9 3.1-2.6.8-5.6 1.3-8.9 1.3-8.1 0-14.6-2.9-19.3-8.7-4.7-5.8-7.1-14.9-7.1-27.3v-24.4h-6.5v-24.4h40.7z" class="st1" fill="#ec1a2e"/><circle id="circle31" r="17" cy="295.2" cx="361.4" class="st1" fill="#ec1a2e"/></g><g transform="translate(-334.9 -269.9)" id="Layer_7"><path id="polygon34" fill="#eb1d30" d="M985.1 401.4H968l39.3-117.8h17.1z"/></g><g transform="translate(-334.9 -269.9)" id="Layer_8"><g id="g53"><path id="path37" d="M461.1 444.9v23.2h-6.4l5.1 29.2h1.4l10.9-52.4h27.5l11.5 52.4h1.4l4.7-29.2h-6.5v-23.2h41.8v23.2h-6.1l-13.7 55.5h-42.2l-5.1-23.8H484l-4.8 23.8h-41.8L423 468.1h-5.9v-23.2z" class="st3" fill="#fff" stroke="#000" stroke-width="2" stroke-miterlimit="10"/><path id="path39" d="M597.8 500.4h6.2v23.2h-45v-23.2h6.2v-32.3H559v-23.2h38.8z" class="st3" fill="#fff" stroke="#000" stroke-width="2" stroke-miterlimit="10"/><path id="path41" d="M612.1 501.5c7.1 1 12.9 1.7 17.4 2.1 4.5.3 8.1.5 10.8.5 4.1 0 6.9-.3 8.2-1 1.3-.6 2-1.6 2-2.7 0-1.2-.7-2.1-2.1-2.7-1.4-.6-4.3-1.3-8.8-1.9-9.8-1.3-17.5-4.1-23.2-8.5-5.6-4.3-8.4-10.5-8.4-18.4 0-3.7.6-7.1 2-10.3 1.3-3.2 3.5-5.9 6.4-8.2 2.9-2.3 6.7-4.1 11.2-5.5 4.6-1.3 10.1-2 16.5-2 7 0 13.3.4 18.9 1.2 5.6.8 10.3 1.8 14 3.1v19.2c-4.5-.6-9.1-1-13.7-1.4-4.6-.4-9-.6-13.2-.6-4 0-6.8.3-8.4.8-1.6.5-2.5 1.4-2.5 2.6 0 .6.1 1.1.4 1.5.3.4.8.8 1.6 1.1.8.3 1.9.6 3.3.8 1.4.2 3.2.5 5.4.6 11 1 19 3.7 24.2 8 5.2 4.3 7.8 10.5 7.8 18.5 0 8.4-2.9 15-8.6 19.8-5.7 4.8-14.8 7.3-27 7.3-7.2 0-13.7-.4-19.6-1.3-5.9-.8-10.7-1.9-14.5-3.1v-19.7z" class="st3" fill="#fff" stroke="#000" stroke-width="2" stroke-miterlimit="10"/><path id="path43" d="M737.8 500.4h6.2v-23.2c0-3.2-.7-5.5-2.1-6.9-1.4-1.4-3.4-2.1-6.2-2.1-2.7 0-4.8.7-6.2 2.1-1.4 1.4-2.1 3.7-2.1 6.9v23.2h6.2v23.2h-45v-23.2h6.2v-63.7h-6.2v-23.2h38.8v41.1c1.1-1.1 2.4-2.4 3.8-3.7 1.4-1.4 3.1-2.6 5-3.7s4.1-2.1 6.6-2.9c2.5-.8 5.3-1.2 8.5-1.2 7.8 0 13.9 2.7 18.4 8.3 4.5 5.5 6.7 14.2 6.7 26v23.2h6.2v23.2h-45z" class="st3" fill="#fff" stroke="#000" stroke-width="2" stroke-miterlimit="10"/><path id="path45" d="M788.5 413.4h38.8v87h6.2v23.2h-45v-23.2h6.2v-63.7h-6.2z" class="st3" fill="#fff" stroke="#000" stroke-width="2" stroke-miterlimit="10"/><path id="path47" d="M878 500.4h6.2v23.2h-45v-23.2h6.2v-32.3h-6.2v-23.2H878z" class="st3" fill="#fff" stroke="#000" stroke-width="2" stroke-miterlimit="10"/><path id="path49" d="M890.6 501.5c7.1 1 12.9 1.7 17.4 2.1 4.5.3 8.1.5 10.8.5 4.1 0 6.9-.3 8.2-1 1.3-.6 2-1.6 2-2.7 0-1.2-.7-2.1-2.1-2.7-1.4-.6-4.3-1.3-8.8-1.9-9.8-1.3-17.5-4.1-23.2-8.5-5.6-4.3-8.4-10.5-8.4-18.4 0-3.7.6-7.1 2-10.3 1.3-3.2 3.5-5.9 6.4-8.2 2.9-2.3 6.7-4.1 11.2-5.5 4.6-1.3 10.1-2 16.5-2 7 0 13.3.4 18.9 1.2 5.6.8 10.3 1.8 14 3.1v19.2c-4.5-.6-9.1-1-13.7-1.4-4.6-.4-9-.6-13.2-.6-4 0-6.8.3-8.4.8-1.6.5-2.5 1.4-2.5 2.6 0 .6.1 1.1.4 1.5.3.4.8.8 1.6 1.1.8.3 1.9.6 3.3.8 1.4.2 3.2.5 5.4.6 11 1 19 3.7 24.2 8 5.2 4.3 7.8 10.5 7.8 18.5 0 8.4-2.9 15-8.6 19.8-5.7 4.8-14.8 7.3-27 7.3-7.2 0-13.7-.4-19.6-1.3-5.9-.8-10.7-1.9-14.5-3.1v-19.7z" class="st3" fill="#fff" stroke="#000" stroke-width="2" stroke-miterlimit="10"/><path id="path51" d="M1002.6 444.9h19.1v23.2h-19.1v23.2c0 3.2.7 5.5 2.1 6.9 1.4 1.4 3.4 2.1 6.2 2.1 3.8 0 7.7-.4 11.8-1.3v22.2c-3 1.1-6.6 2.1-10.8 3-4.2.8-8.7 1.3-13.5 1.3-4.8 0-9.1-.5-12.8-1.6-3.7-1-6.9-2.8-9.4-5.3-2.6-2.5-4.5-5.8-5.9-9.9-1.4-4.1-2.1-9.1-2.1-15.2v-25.6H962v-23.2c3.8 0 6.5-1 8.2-2.9 1.7-1.9 2.6-4.4 2.6-7.4V428h30z" class="st3" fill="#fff" stroke="#000" stroke-width="2" stroke-miterlimit="10"/></g><g id="g57"><circle id="circle55" r="17" cy="423.2" cx="579.3" class="st0" fill="#fff"/></g><g id="g61"><circle id="circle59" r="17" cy="423.2" cx="860.2" class="st0" fill="#fff"/></g></g></svg>\n':'\n<svg viewBox="0 0 595.3 212.9" xmlns="http://www.w3.org/2000/svg"><path class="st0" d="M342.4 125.7c0 1.6-2.4 4.3-4.3 4.3h-8.7v18.4h60.4V130h-7.5c-1.7 0-4.1-2.7-4.1-4.3V97.2h-35.8v28.5zM437.1 128.1c-9.6 0-14.2-9.3-14.2-31h-36.7c.5 34.6 23.1 53 50.9 53 28 0 50.6-18.3 51.1-53h-36.7c-.1 21.7-4.8 31-14.4 31zM542.3 128.1c-9.6 0-14.2-9.3-14.2-31h-36.7c.5 34.6 23.1 53 50.9 53 28 0 50.6-18.3 51.1-53h-36.7c-.1 21.7-4.8 31-14.4 31z" fill="#fdfdfe"/><g><path class="st0" fill="#fdfdfe" d="M378.2 41.3h-26.6l-23.3 11.2V72h5.7l8.4-4.6v24.5h35.8zM437.1 63c9.4 0 14.1 8.4 14.4 28.9h36.7c-.5-34.1-23.8-52.2-51.1-52.2-27.1 0-50.4 18.1-50.9 52.2h36.7c.2-20.5 4.8-28.9 14.2-28.9zM542.3 63c9.4 0 14.1 8.4 14.4 28.9h36.7c-.5-34.1-23.8-52.2-51.1-52.2-27.1 0-50.4 18.1-50.9 52.2h36.7c.3-20.5 4.9-28.9 14.2-28.9z"/></g><g><path class="st1" d="M41.2 127h6.2v23H2.8v-23H9V95H2.8V72h38.4v55zM99.5 127h6.2v-23c0-3.2-.7-5.5-2-6.9-1.4-1.4-3.4-2.1-6.1-2.1-2.7 0-4.7.7-6.1 2.1-1.4 1.4-2 3.7-2 6.9v23h6.2v23H51v-23h6.2V95H51V72h38.4v9.5c1.1-1.1 2.4-2.4 3.8-3.7 1.4-1.4 3.1-2.6 5-3.7s4.1-2.1 6.5-2.9c2.4-.8 5.2-1.2 8.4-1.2 7.7 0 13.7 2.7 18.2 8.2 4.4 5.5 6.7 14 6.7 25.7v23h6.2v23H99.5V127zM196 63.9h-8.3v-23h40.5V127h6.2v23H196v-9.5c-.8 1.1-2 2.4-3.4 3.7-1.4 1.4-3 2.6-4.8 3.7-1.8 1.1-3.9 2.1-6.2 2.9-2.3.8-4.7 1.2-7.4 1.2-9.7 0-17-3.6-21.7-10.7-4.7-7.2-7.1-17.2-7.1-30.2s2.4-23.1 7.1-30.2c4.7-7.2 11.9-10.7 21.7-10.7 2.6 0 5.1.4 7.4 1.2 2.3.8 4.3 1.8 6.2 2.9 1.8 1.1 3.4 2.4 4.8 3.7 1.4 1.4 2.5 2.6 3.4 3.7V63.9zM179.8 118c0 3.2.7 5.5 2 6.9 1.4 1.4 3.4 2.1 6.1 2.1 2.7 0 4.7-.7 6.1-2.1 1.4-1.4 2-3.7 2-6.9v-14c0-3.2-.7-5.5-2-6.9-1.4-1.4-3.4-2.1-6.1-2.1-2.7 0-4.7.7-6.1 2.1-1.4 1.4-2 3.7-2 6.9v14zM274.6 118c0 3.2.7 5.5 2 6.9 1.4 1.4 3.4 2.1 6.1 2.1 2.7 0 4.7-.7 6.1-2.1 1.4-1.4 2-3.7 2-6.9V95h-7.6V72H323v70.1c0 14-3.5 24.4-10.6 31-7.1 6.6-17.6 10-31.6 10-6.7 0-13.3-.4-19.6-1.3-6.3-.9-11.7-2-16.1-3.3v-23c5.1.9 10 1.6 14.7 2 4.6.4 9.9.6 15.8.6 5 0 8.8-.8 11.4-2.3 2.5-1.5 3.8-4.7 3.8-9.5v-5.9c-1.1 1.2-2.4 2.5-3.9 3.8-1.5 1.3-3.1 2.5-5 3.6s-4 2.1-6.5 2.9c-2.4.8-5.2 1.2-8.4 1.2-7.7 0-13.7-2.7-18.2-8.2-4.4-5.5-6.7-14-6.7-25.7V95h-6.2V72h38.4l.3 46z" fill="#eb1e30"/></g><path class="st1" d="M22.1 34.7c8.9 0 16 7.2 16 16 0 8.9-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16z" fill="#eb1e30"/></svg>\n'},"aria-label":"Back to homepage"}),Object(jsx_runtime.jsx)(IndependentStamp,{href:"https://www.independent.co.uk/",dangerouslySetInnerHTML:{__html:'\n<svg class="logo_from_independent" viewBox="297 294.7 967.3 267.9" xmlns="http://www.w3.org/2000/svg" fill="#ec1f31"><path class="ftil0" d="M304.6 363.9v-41l-5.2-.6c-.8-.2-1.2-.4-1.6-.8-.6-.4-.8-1-.8-1.6v-3.4h7.6v-4.8c0-2.8.4-5.2 1-7.4.8-2.2 1.8-4 3.2-5.4 1.6-1.2 3.2-2.6 5.4-3.2 2-.8 4.4-1 6.8-1 2.2 0 4.2.4 6 1v4c0 .8-.4 1-.8 1-.6.2-1.2.2-2.2.2h-1.4c-1.4 0-2.8.2-4 .6-1.2.4-2.2 1-3 1.8-1 1-1.6 2.2-2.2 3.6-.4 1.4-.6 3-.6 5.2v4.4h14v6.2h-13.6v41.2h-8.6zM334.8 363.9v-48.2h4.8c1 0 1.6.2 2 .6.4.4.6 1 .8 1.8l.6 7.6c1.6-3.4 3.6-6 6.2-7.8 2.4-1.8 5.2-2.8 8.6-2.8 1.2 0 2.6.2 3.6.6l3 1.2-1 6.4c-.2.8-.8 1.2-1.4 1.2-.4 0-1-.2-2-.4-1-.4-2.2-.6-3.8-.6-2.8 0-5.4 1-7.4 2.6s-3.6 4.2-4.8 7.4v30.8h-8.8v-.4h-.4zM390.8 314.9c3.4 0 6.8.6 9.6 1.8 2.8 1 5.2 2.8 7.2 5s3.4 4.8 4.6 7.8c1 3 1.6 6.6 1.6 10.4 0 3.8-.6 7.2-1.6 10.4-1 3-2.6 5.6-4.6 7.8-2 2.2-4.4 3.8-7.2 4.8s-6 1.8-9.6 1.8c-3.4 0-6.8-.6-9.6-1.8-2.8-1-5.2-2.8-7.2-4.8-2-2.2-3.6-4.8-4.6-7.8-1-3-1.6-6.6-1.6-10.4 0-3.8.6-7.2 1.6-10.4 1-3 2.6-5.6 4.6-7.8 2-2.2 4.4-3.8 7.2-5 3-1.2 6-1.8 9.6-1.8zm0 43c4.8 0 8.4-1.6 10.6-4.8 2.4-3.2 3.4-7.6 3.4-13.4s-1-10.2-3.4-13.4c-2.4-3.2-6-4.8-10.6-4.8-2.4 0-4.6.4-6.4 1.2-1.8 1-3.2 2-4.6 3.6-1.2 1.6-2 3.4-2.8 5.8-.6 2.4-1 4.8-1 7.6s.4 5.4 1 7.6c.6 2.2 1.4 4.2 2.8 5.6 1.2 1.6 2.8 2.8 4.6 3.6 1.8.8 4.2 1.4 6.4 1.4zM422.5 363.9v-48.2h5c1.2 0 2 .6 2.4 1.8l.6 4.8c1.8-2.2 3.8-4 6-5.4s4.8-2.2 7.6-2.2c3.2 0 6 1 8 2.8 2 1.8 3.4 4.2 4.4 7.2.8-1.8 1.6-3.2 2.8-4.6 1.2-1.4 2.4-2.4 3.6-3 1.4-1 2.8-1.4 4.4-1.8 1.4-.4 3-.6 4.8-.6 2.6 0 4.8.4 6.8 1.2 2 .8 3.6 2 5 3.6s2.4 3.4 3 5.8c.8 2.4 1 4.8 1 7.8v30.8h-8.6v-30.8c0-3.8-1-6.8-2.6-8.6-1.6-2-4-2.8-7.2-2.8-1.4 0-2.8.2-4 .8-1.2.6-2.4 1.2-3.2 2.2-1 1-1.6 2.2-2.2 3.6-.6 1.4-1 3-1 5v30.8h-8.6v-30.8c0-3.8-.8-6.8-2.4-8.6-1.6-1.8-3.8-2.8-6.8-2.8-2.2 0-4 .6-5.8 1.6-1.8 1-3.4 2.8-4.8 4.6v35.8h-8.2z" fill="#666766"/><g><circle class="ftil1" cx="389.7" cy="475.5" r="84" fill="#fff"/><path class="ftil1" d="M508 441l2.9.6c6.9 1.4 7.8 5.5 7.8 9.3v47.9c0 3.9-.9 7.8-7.8 9.2l-2.9.6v1.5h34v-1.5l-2.9-.6c-6.8-1.4-7.8-5.2-7.8-9.2v-47.9c0-3.8.9-7.9 7.8-9.3l2.9-.6v-1.5h-34v1.5zM1201.7 439.5v23.7h1.4l3.5-8.8c3.5-8.6 7.1-13.3 16.2-13.3h3.8v57.6c0 3.7-.9 8.2-7.8 9.3l-3 .5v1.6h34v-1.6l-3-.5c-6.9-1.1-7.8-5.5-7.8-9.3v-57.6h3.8c9.2 0 12.8 4.7 16.2 13.3l3.5 8.8h1.4v-23.7h-62.2zM1171.3 441l2.8.4c5.2.8 10 3.3 10.1 16.7l.3 32.1-27.3-32.3c-8.2-9.7-11.5-13.8-13.9-18.1l-.2-.3h-25v1.5l.5.1c5.1.9 8.4 3 13.8 9l1 1.1v37c0 15.8-5 18.4-11 19.9l-2 .5v1.5h28v-1.5l-2-.5c-5.3-1.4-10.9-2.9-11-19.9l-.3-35.1 49.4 58.3.2.2h1.5v-53.4c0-13.4 5.1-16 10.1-16.7l2.8-.4v-1.6h-27.8v1.5zM884.6 497.4c-4.7 8-10.5 11-21.2 11h-3c-6 0-8.7-2.9-8.7-9.4v-24.4l4.4.1c10.7.2 13.7.7 17 11l1.2 3.8h1.5v-31.6h-1.5l-1.2 3.9c-3.2 10.3-6.4 10.8-17 11l-4.4.1v-31.7h7.6c12.6 0 18.3 2.6 22.6 10.4l4.8 8.7h1.4v-20.8h-59.7v1.5l2.9.6c6.5 1.3 7.8 4.4 7.8 9v48.2c0 3.7-.9 8.2-7.8 9.3l-3 .5v1.5h62.4v-20.8h-1.4l-4.7 8.1zM1107.8 497.4c-4.7 8-10.4 11-21.2 11h-3c-6 0-8.7-2.9-8.7-9.4v-24.4l4.4.1c10.7.2 13.7.7 17 11l1.2 3.8h1.5v-31.6h-1.5l-1.2 3.9c-3.2 10.3-6.4 10.8-17 11l-4.4.1v-31.7h7.6c12.6 0 18.3 2.6 22.6 10.4l4.8 8.7h1.4v-20.8h-59.7v1.5l2.9.6c6.5 1.3 7.8 4.4 7.8 9v48.2c0 3.7-.9 8.2-7.8 9.3l-3 .5v1.5h62.4v-20.8h-1.4l-4.7 8.1zM659.1 439.5h-62.9v1.5l2.8.4c6.3.9 10 3.6 10.1 14.7l.3 34.1-27.4-32.3c-8-9.5-11.5-13.8-13.9-18.1l-.2-.3h-25v1.5l.5.1c5.1.9 8.4 3 13.8 9l1 1.1v37c0 15.8-5 18.4-11 19.9l-2 .5v1.5h28v-1.5l-2-.5c-5.3-1.4-10.9-2.9-11-19.9l-.3-35.1 49.6 58.5h1.5v-57c0-8.9 3.9-13.4 11.7-13.4 7.8 0 11.7 4.5 11.7 13.4v44.2c0 4.1-.9 8.1-7.9 9.3l-2.8.5v1.5H659c12.2 0 22.4-3.8 29.5-10.9 6.4-6.4 10-15.2 10-24.7s-3.5-18.2-10-24.4c-7-7-17.2-10.6-29.4-10.6m-12 59.1v-57.5h9c17.8 0 28.5 12.6 28.5 33.6 0 21.4-10.1 33.6-27.6 33.6h-2.2c-6.4.1-7.7-3.8-7.7-9.7M1010.9 439.5H948v1.5l2.8.4c6.3.9 10 3.6 10.1 14.7l.3 34.1-27.3-32.3c-8.2-9.7-11.5-13.8-13.9-18.1l-.2-.3h-25v1.5l.5.1c5.1.9 8.4 3 13.8 9l1 1.1v37c0 15.8-5 18.4-11 19.9l-2 .5v1.5h28v-1.5l-2-.5c-5.4-1.4-10.9-2.9-11-19.9l-.3-35.1 49.5 58.3.2.2h1.5v-57c0-8.9 3.9-13.4 11.7-13.4 7.8 0 11.7 4.5 11.7 13.4v44.2c0 4.1-.9 8.1-7.9 9.3l-2.8.5v1.5h35.3c12.2 0 22.4-3.8 29.5-10.9 6.4-6.4 10-15.2 10-24.7s-3.6-18.1-10-24.4c-7.2-7-17.4-10.6-29.6-10.6m-12 59.1v-57.5h9c17.8 0 28.5 12.6 28.5 33.6 0 21.4-10.1 33.6-27.6 33.6h-2.2c-6.3.1-7.7-3.8-7.7-9.7M799.7 439.5h-30.5v1.5l2.9.6c6.8 1.4 7.8 5.2 7.8 9.2v48c0 3.9-.9 7.8-7.8 9.2l-2.9.6v1.5h35.3v-1.5l-2.3-.5c-8-1.7-9.6-3.3-9.6-10.3v-56.6h3c10.9 0 17.4 7.3 17.4 19.7 0 12.3-6.5 19.7-17.4 19.7h-.8v1.7h4.8c15.9 0 27-8.8 27-21.4.2-12.7-11-21.4-26.9-21.4M756 497.4c-4.7 8-10.5 11-21.2 11h-3c-6 0-8.7-2.9-8.7-9.4v-24.4l4.4.1c10.8.2 13.7.7 17 11l1.2 3.8h1.5v-31.6h-1.5l-1.2 3.9c-3.2 10.3-6.4 10.8-17 11l-4.4.1v-31.7h7.6c12.6 0 18.3 2.6 22.6 10.4l4.8 8.7h1.4v-20.8h-59.7v1.5l2.9.6c6.5 1.3 7.8 4.4 7.8 9v48.2c0 3.7-.9 8.2-7.8 9.3l-3 .5v1.5h62.4v-20.8h-1.4l-4.7 8.1z" fill="#fff"/><g><path class="ftil2" d="M378.9 496v.2l.8.3-.4.7.2.1 1.6-1.2-.1-.1h-2.1zm-1.8 32.1l-2.8-1.2 2.7-1.4-.1-.2-4.1 1.1c-.2 0-.3.2-.4.4-.1.3.1.6.3.7l4 1.3c.7.2 1.3.4 2 .7l2 .7.1-.2-1.8-1c-.6-.3-1.2-.6-1.9-.9m-3.8-32.1v.2l.8.3-.4.7.1.1 1.6-1.2-.1-.2-2 .1zm53.4 14.2c-.4.1-.8.1-1.3.2-.4.1-.9.1-1.2.2-.2 0-.5.1-.7.1-.2 0-.3.1-.5.1l-.5.1c-.2 0-.4.1-.6.1-.4.1-.8.2-1.1.2-.2 0-.3.1-.4.1l-.6.1.1.3.6-.1c.1 0 .3 0 .5-.1.3 0 .7-.1 1.1-.1.3 0 .7-.1 1-.1h.3c.3 0 .6-.1.9-.1.5-.1 1-.1 1.5-.2.3 0 .7-.1 1-.1.3-.1.7-.1 1-.1h.3l1.2-.2c.5-.1 1-.2 1.5-.2.2 0 .4-.1.7-.1.4-.1.7-.1 1-.2.2 0 .4-.1.6-.1l.6-.1v-.3h-.1-.8c-.4 0-.8.1-1.4.1-.2 0-.5 0-.7.1-.5 0-.9.1-1.4.2l-1.2.2c-.4-.2-1.4 0-1.4 0m-40.5-38.1l-3.6 1.6-.1-1h-.3l-.2 2.1.2.1 4.2-2.6-.2-.2zm-1.5 8.1l-.1-.6h-.3l-.3 1.7.2.1 2.3-1.6-.1-.2-1.7.6zm-1.8-10.7l-3 1.3-.3-1.2h-.3l-.1 2.3.2.1 3.5-2.3v-.2zm1.1 7.3l-.1-.6h-.3l-.3 1.7.2.1 3.1-2.2-.1-.2-2.5 1.2zm43.3.2l.1.1.1.1c.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1 0 .2.1.3v.4c0 .1 0 .2-.1.3 0 .1 0 .1-.1.2l-.1.2.2.1.1-.2c0-.1.1-.1.1-.2s.1-.2.1-.4v-.2-.2-.4c0-.1 0-.3-.1-.4 0-.1-.1-.3-.1-.4 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-.3-.3c-.8-.8-1.6-1.5-2.4-2.3l-.6.7c.9.7 1.8 1.3 2.7 2 0 .2.1.3.2.4m-7.1-4.5v.1l.1.1c0 .1.1.2.2.3 0 .1.1.1.1.1l.1.1c.1.1.1.1.2.1h.1c.2.1.4.1.6.1h.1c.1 0 .2 0 .3-.1h.2c.1 0 .3-.2.4-.4.1-.1.2-.3.2-.5v-.1-.2-.2c0-.1 0-.2-.1-.2v-.1c-.1-.1-.1-.2-.1-.2v-.1l-.2.1v.7l-.1.1H421.7h-.1l-.1-.1v-.1l-.1-.1v-.1-.1-.1-.1-.1-.1l.1-.1s0-.1.1-.1v-.1c.1-.1.2-.1.2-.1l-.1-.3h-.1H421.3c-.1 0-.1.1-.2.1l-.1.1-.1.1v.1c-.1.2-.2.3-.2.5v.3c-.6.5-.5.6-.5.7zm-.4 5.8v.4l.1.1s0 .1.1.1l.1.1.1.1.1-.1v-.2-.1-.1-.2c0-.1 0-.2.1-.2v-.1s0-.1.1-.1c.1-.1.1-.2.1-.2s0-.1.1-.1l.1-.1c.1 0 .1-.1.2-.1s.2-.1.2-.1h.5c.1 0 .1 0 .2.1h.2c.1.1.2.1.2.1l.2-.1s0-.1-.1-.2v-.1l-.1-.1-.1-.1-.1-.1s-.1-.1-.2-.1-.1 0-.2-.1c-.1 0-.1 0-.2-.1h-.2c-.2 0-.3 0-.5.1-.2 0-.3.1-.4.2l-.1.1-.2.2c-.1.1-.2.3-.2.4 0 .1-.1.3-.1.4v.3m-9.6 30.2c.1 0 .1.1.2.1s.2.1.2.2c.1.1.2.1.3.2l.1.1.1.1.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1 0 .1.1.2 0 .1.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.1-.1-.3-.3c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.2-.1 0-.1 0-.2-.1h-.8v.2s.1 0 .2.1.1.2.2.2m9.1 1s.2 0 .4-.1h.3c.2 0 .5-.1.8-.1 1-.1 2.2-.3 3.3-.6l.3-.1 1.5-.3c.2-.1.5-.1.7-.1.3-.1.6-.1.8-.2.3-.1.6-.1.8-.2l.3-.1c.3-.1.4-.1.4-.1h.1l-.1-.3h-.1-.7c-.2 0-.5.1-.9.1h-.1c-.4.1-.9.1-1.5.2s-1.2.2-1.7.3c-1.1.2-2.3.5-3.3.7-.3.1-.5.1-.8.2-.1 0-.2.1-.3.1-.3.1-.4.1-.4.1h-.1l.3.5zm-10.6 4.7h.5c.2 0 .4-.1.6-.1.4-.1.8-.2 1.2-.2l1.2-.3.2-.1c.5-.1.9-.2 1.3-.3.5-.1.9-.2 1.2-.3.2-.1.4-.1.6-.2.1 0 .2-.1.2-.1.2-.1.3-.1.3-.1h.1l-.1-.3h-.1-.6c-.2 0-.4 0-.6.1-.4.1-.8.1-1.2.2-.4.1-.9.2-1.4.3-.9.2-1.8.5-2.6.7-.3.1-.5.2-.6.2l-.2.1c-.2.1-.3.1-.3.1h-.1l.4.3zm-48.5-71.5l.2-.3-11.5-5.5-7-9.3-.3.2 6.3 10.2 12.3 4.7zm-7.4 11.4L328 449l-.1.3 6.5 2.4 18.4 2.8v-.4zm27.7 12l-4.2 2-.3-1.6h-.3v2.7l.2.1 4.7-3-.1-.2zm-44.1-33.8l-.2.2 5.5 7.6 13.3 4.4.1-.3-12.3-5.1-6.4-6.8zm-1.7 22.5l6.6 1.9 13.1 1.2v-.3l-19.7-3.1v.3zm67 17.3l1.3.6-.7 1.2.2.1 2.5-1.9-.1-.2h-3.1l-.1.2zm-48.6-24.6l.1-.3-15.2-4.9-7.5-7.1-.2.2 6.7 8 16.1 4.1zm-.5 3.7l.1-.3-17.9-4.9-8.1-6.6-.2.2 7.5 7.6 18.6 4zm18.9 4.4l-8 4.2-.3-1.7h-.3v2.9l.2.1 8.5-5.2-.1-.3zm3.2 3.4l-7 3.7-.3-1.7h-.3v2.9l.2.1 7.6-4.7-.2-.3zm3.2 3.4l-5.8 3-.3-1.7h-.3v2.8l.2.1 6.4-4-.2-.2zm-12.1-14l-7.7 4.1-.3-1.7h-.3v2.9l.2.1 8.3-5.1-.2-.3zm2.7 3.6l-8.2 4.4-.3-1.7h-.3l-.1 2.9.2.1 8.7-5.5v-.2zm-5.6-7.1l-5.8 3-.3-1.7h-.3v2.9l.2.1 6.4-4-.2-.3zm45.2 28.5l1.3.6-.7 1.2.2.1 2.5-1.9-.1-.2h-3.1l-.1.2zm-8.6 33.3l-5.1-6.3-.3.1 1.3 7.5 2.7 3.1s.1 0 .1.1c.1 0 .1.1.2.1s.1.1.2.1.2.1.2.2c.1.1.2.1.3.2.1.1.2.1.2.2l.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.6-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.3-.3c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.2-.1 0-.1 0-.2-.1.1 0 .1 0 .2-.1.5-.1 1-.3 1.5-.4h.1c.1 0 .1.1.2.1s.1.1.2.1.2.1.2.2c.1 0 .2.1.3.2.1.1.2.1.2.2l.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2v-.2-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.3-.3c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.2h-.1c1.4-.4 2.8-.7 4.2-1l-4.6-2.6-1.6.2zm11.6-27.8l-2.5.2v.2l1 .3-.4 1 .2.1 1.8-1.7-.1-.1zm-11.5 11.7l2.2-3.2-.1-.1-3.7 1.2v.2l1.8.2-.3 1.7h.1zm1.8 2.6v.2l1.1.3-.4 1 .2.1 1.7-1.8-.1-.2-2.5.4zm-14.2 25l.7-.2 2.7-.9c.3-.1.7-.2 1-.3l.3-.1 1.1-.4c.5-.2.9-.3 1.2-.4.2-.1.3-.1.4-.2.4-.1.6-.2.6-.2h.1l-.1-.3h-.1s-.2 0-.7.1l-.3.1c-.4.1-.9.2-1.4.3l-1.1.3-.9.3-.4.1c-.8.2-1.7.5-2.7.9-.8.2-1.5.5-2.2.8l-.5.2-.3.1c-.8.3-1.5.5-2.1.8-.3.1-.5.2-.7.3l-.2.1-.7.3-.6.3h-.1l.1.3s.3-.1.7-.2c.1 0 .3-.1.5-.2l.5-.2c.2-.1.4-.1.7-.2.4-.1.9-.3 1.4-.5.3-.1.6-.2 1-.3.7-.2 1.4-.5 2.1-.7m16.9-2.9c-.2.1-.4.1-.7.2-.5.1-1 .3-1.6.5-.5.1-1 .3-1.6.5l-.9.3-.9.3c-1.2.4-2.5.9-3.7 1.3l-2.4.9c-.4.2-.9.3-1.3.5-.4.1-.8.3-1.2.4-.2.1-.4.1-.5.2-.4.2-.8.3-1.2.5l-.3.1c-.6.2-1.2.5-1.6.7l-.6.3c-.5.2-.9.4-.9.4h-.1l.1.3h.1l.9-.3c.2-.1.4-.1.7-.2.5-.2 1-.4 1.6-.6l.5-.2c.3-.1.7-.3 1.1-.4l.5-.2c.4-.1.8-.3 1.2-.4.4-.2.9-.3 1.3-.5l2.4-.9c1.3-.5 2.5-.9 3.7-1.3.6-.2 1.2-.4 1.7-.6.4-.1.8-.3 1.2-.4l.4-.1c.6-.2 1.2-.4 1.6-.6.3-.1.5-.2.7-.2l.9-.3-.2-.5-.9.3zm-7.9-3.2c.1 0 .2.1.3.2.1.1.2.1.3.2.1.1.2.1.2.2l.1.1.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4 0-.1-.1-.2-.2-.2l-.1-.1-.3-.3c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.2h-.2-.1-.8v.2s.1 0 .2.1c.1 0 .1.1.2.1-.2-.3-.1-.2 0-.2m13.2-27.4l.8.2-.3.8.2.1 1.4-1.5-.1-.2-2 .3v.3zm-6.8-7.1l1.7.4-.5 1.6.2.1 2.5-2.8-.1-.2-3.7.7-.1.2zm-12.9-89.1c-48.1 0-87 39-87 87 0 48.1 39 87 87 87 48.1 0 87-39 87-87 .1-48-38.9-87-87-87m15.6 77.1h10.2s3.2 1.2 7.4 2.9c1.9.8 3 2.5 2.8 4.5 0 0 1.7 1.7 2.6 2.7 1.1 1.3 1.2 3 .4 4.2-.9 1.1-2.1 1.4-2.6 1.5l-.1-.2c.7-.7.4-1.7-.2-2.6-.6-.9-1.2-1.1-1.8-.7l-.6.4 1.6 2.5-.1.2c-1.3.3-3 .1-3.8-1h-7.8v.2l4.4.8.1.3-15.1 17.7.1.1 5.1-4.5v4l-.5 1.2.5 2.8-.2 1.2 4.7 4s.1 0 .1.1c.1 0 .1.1.2.1s.1.1.2.1.2.1.2.2c.1.1.2.1.3.2.1.1.2.1.2.2l.2.2c.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.3-.3c-.1-.1-.2-.2-.4-.3-.1-.1-.3-.1-.4-.2h-.1c.6-.1 1.2-.3 1.7-.4.1 0 .1.1.2.1s.1.1.2.1.2.1.2.2c.1 0 .2.1.3.2.1.1.2.1.2.2.1.1.1.2.2.2.1.1.1.2.2.3.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.1.2 0 .1.1.1.1.2s.1.2.1.2h.2s0-.1.1-.2c0-.1 0-.1.1-.2v-.3-.2-.2c0-.1-.1-.3-.1-.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.3-.3-.4l-.3-.3c-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.4-.2 8.2-1.8 14.5-3 14.5-3 8.3 4.9 7.8 4.6 9.5 5.6 3.2 1.8 3 6.9-2.9 6.9-4.5 0-12.8.8-17.9 1.7l4.5-4.1-.1-.1s-4.4 3.2-9.7 5.8c-2.8 1.1-7.1 3-11.6 5l6.5-6.2-.1-.2s-8.3 6.7-14.2 9.9c-3.6 1.6-6.6 3-8.3 3.8-2.4 1.1-4.3 1.4-6.9.4-4.2-1.5-5.9-2.1-9.5-3.5-2.1-.8-2.3-3.8 0-4.5 1-.3 3.5-1.1 5.2-1.7.7.3 1.5.7 2.3 1 1.2.5 2.4 1.1 3.5 1.6.6.2 1.1.5 1.6.7.1.1.3.1.4.2.1 0 .1.1.2.1h.1c.2.1.4.2.6.4.3.3.6.7.7 1 .1.3.2.7.1.9 0 .3-.1.5-.1.6 0 .1-.1.2-.1.2l.2.1s0-.1.1-.2c.1-.2.1-.4.2-.7 0-.3 0-.7-.1-1.1-.1-.4-.4-.9-.7-1.2-.2-.2-.4-.4-.6-.5h-.1c-.1 0-.1-.1-.2-.1-.1-.1-.2-.1-.4-.2l-1.5-.9c-1.1-.6-2.2-1.3-3.3-1.9-2.5-1.4-5-2.9-6.8-3.9 0 0 8.8-2.8 20.1-5.9l1.8.8.1-.1v-.1l-1.1-.9-2.8-2.2-1.4-.5-.9-2.5-1.3-.7-1.2-5.6h-.2l.5 6.1-3.5 2v-8.1h-.2l-1 8.6-4.7.9 1.6-9.3h-.2l-2.9 9.5-4.6.3 3.4-9.9-.2-.1-4.9 10.1-4.6.3 5.3-10.5-.2-.1-7.3 10.8-4.9.8 7.9-11.6-.2-.1-13.3 15.4-.7-.5 11.9-18.6 18.2-6.8s1.2-.5 1.9-.8c.4-.2.7-.3 1.1-.5l.6-.3c.2-.1.4-.2.5-.4.3-.3.7-.5 1-.8l.2-.2c.1-.1.1-.2.2-.2.1-.2.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.2-.3.3-.5.1-.2.2-.3.2-.5.1-.2.1-.3.2-.5.1-.3.2-.6.3-.8.1-.2.1-.5.1-.7 0-.2 0-.3.1-.4v-.1h-.2v.1c0 .1 0 .2-.1.4s-.1.4-.2.6c-.1.2-.2.5-.3.8-.1.1-.1.3-.2.4-.1.1-.2.3-.3.4-.1.1-.2.3-.3.4-.1.1-.2.3-.3.4-.1.1-.2.3-.4.4l-.2.2-.2.2c-.3.3-.6.5-1 .7-.2.1-.3.2-.5.3-.2.1-.3.2-.5.2-.4.1-.7.3-1.1.4-.7.3-1.4.5-2 .7-.6.2-1.1.4-1.4.5l-1.2-2.4 2.4-2.1-.1-.2-6.3 3.9-1.5-3 8.5-6.3-.1-.2-13 7.8-1.2-3.1 12.2-8.2-.1-.2-15.8 8.7-.7-2.9 13.3-8.5-.1-.2-16.3 8.3-.5-3.5 13.5-7.3-.1-.2-16.7 6.9-.1-3.4 13.6-5.3-.1-.2-16.5 4.5.2-3.7 12.5-2.9v-.2l-16.1 2.2.5-3.2 11.8-1.3v-.2l-16.5.3.2-2.7 13.2-.1v-.2l-23.6-1.7v-.2l3.8-1.3v-.2l-9.8-3.7v-.2l3.9-.3v-.2l-8.5-5.2v-.3l5.9.3.1-.2-6.8-6.4.1-.2 3.2.6.1-.2-3.2-4-2-5.7.2-.1 3.1 3.9 6.9 4 .1-.1-4.5-6.6-1.7-7.3.2-.1 3.6 5.4 7 5.7.1-.1-4.3-7.8-1.5-9.5.2-.1 4.2 8.1 8.8 7.3.2-.1-6-9.7-1.4-11.6.2-.1L339 423l12.4 11.2 15.7 8 17.2 23.9 6.7 5.6.2-.2-2.9-3.8 6.9-1.8v-.2l-6-.3v-.2l8.8-1.6v-.2l-11-.8v-.2l14-2.3 5.6 1.3.1-.2-5.3-2.4-8.7.2v-.2l9.3-1.7 5.7 2 .1-.2-5.2-3.3-6.2-.2v-.2l6.9-1.1 6 2.8.1-.2-5-4.7H399v-.2l6.6-1.5 5.8 4.8.1-.1-4.5-6.6-4.9-.9v-.2l6.2-.4 5.6 6.8.2-.1-4-8.5-5.4-1.7v-.2l6.8.6 5.2 8.9.2-.1-3.4-10.5-6.7-2.4v-.2l8.1 1.5 4.5 10.8.2-.1-3-12-7.2-4.1.1-.2 8.6 3.3 4.1 12h.2l-2.6-13.1-7.8-5.7.1-.2 9.1 5 3.6 12.7h.2l-2.2-13.5-8.2-7.3.1-.2 9.6 6.6 2.8 12.9h.2l-1.4-13.7-8.2-8.9.1-.2 9.5 8.1 2.1 12.5h.2l-.9-13.1-7.8-10.1.1-.1 9.1 9.5 1.4 10.8h.2l-.5-11.4-7.1-10.9.2-.1 8.2 10.4 1.1 7.8h.2l-.4-8.3-5-11.3.2-.1 6.3 10.7.6 4.4h.2l.3-5-2-10.9.2-.1 3.6 8.9h.2l2.2-8.9h.2l-.7 8.7.2.1 6.1-8.7.2.1-3.9 7.9.1.1 9.3-6.6.1.2-14.2 19.1s-4.6 12.3-6.1 16.3c-.3.8-.8 1.3-1.6 1.7-.4.2-11.5 4.6-11.5 4.6l-3 2.7-10.1 1.2v.3zm-1.9 17.8l1.4.3-.4 1.3.2.1 2-2.4-.1-.2-3 .7-.1.2zm3.8-13.3l.1.1 2-1.5-.1-.2h-2.5v.2l1 .4-.5 1zm-14.3 27.5h-2v.2l.8.3-.4.8.1.1 1.6-1.2-.1-.2zm19.9-26.6l.2.1 1.6-1.2-.1-.2h-2v.2l.8.3-.5.8zm-7.5 17.6v.2l1.1.3-.4 1 .2.1 1.7-1.8-.1-.2-2.5.4zm-10.2-15.5l.1.1 2.5-1.9-.1-.2h-3.1v.2l1.3.6-.7 1.2zm5.4-3.3l.2.1 1.6-1.2-.1-.2h-2v.2l.8.3-.5.8zm-6.2 24l2-2.4-.1-.2-3.1.6v.2l1.4.3-.4 1.3.2.2zm1.1-17.2l1.7.5-.6 1.7.2.1 2.7-2.8-.1-.2-3.9.6v.1zm-4.6 17.1h-2.5v.2l1 .4-.5 1 .1.1 2-1.5-.1-.2zm7.3-9l2.3-3.2-.1-.2-3.8 1.1v.2l1.8.2-.4 1.7.2.2zm-1 12.6l1.3-1.5-.1-.2-2 .3v.2l.8.2-.3.8.3.2zm-12.5-.1v.2l.8.3-.4.7.1.1 1.6-1.2-.1-.2-2 .1zm6.6-10l1.4.2-.3 1.4.2.1 1.9-2.5-.1-.2-3 .8-.1.2zm-2 2.2l-2.5.1v.2l1 .4-.5 1 .2.1 1.9-1.6-.1-.2zm-4.2 3.4h-2v.2l.8.3-.4.7.2.1 1.6-1.2-.2-.1zm5.6-14.4l.2.1 1.7-1.8-.1-.2-2.5.4v.2l1.1.3-.4 1zm-.2 3.6l1.3.3-.4 1.3.2.1 1.9-2.3-.1-.2-2.9.6v.2z"/></g></g></svg>\n'},"aria-label":"Back to homepage"})]}),Object(jsx_runtime.jsxs)(MenuLoginWrapper,{children:[Object(jsx_runtime.jsx)(Menu,{menu:menu.navbarMenu}),Object(jsx_runtime.jsx)(Account,{className:"account"}),Object(jsx_runtime.jsx)(HamburgerMenu,{"data-on":"tap:body.toggleClass(class='menu-visible')","aria-label":"Open full menu",role:"button",tabIndex:"0",children:Object(jsx_runtime.jsx)(MenuButton,{"aria-label":"Open menu",dangerouslySetInnerHTML:{__html:'\n<svg tabindex="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15"><g fill="#fff"><path d="M0 0h21v2H0zM0 6h21v2H0zM0 12h21v2H0z"/></g></svg>\n'}})})]})]})};Header.propTypes={menu:prop_types_default.a.object.isRequired,isWishList:prop_types_default.a.bool},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{menu:{type:{name:"object"},required:!0,description:""},isWishList:{type:{name:"bool"},required:!1,description:""}}};var library_Header=Object(RequestProvider.withRequest)(Header);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"app/component/library/Header.js"});const FooterWrapper=styled_components_browser_esm.default.footer``,BackToTop=styled_components_browser_esm.default.a`
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
`,Footer=props=>{const{footerMenu:footerMenu}=props;return Object(jsx_runtime.jsxs)(FooterWrapper,{children:[Object(jsx_runtime.jsxs)(BackToTop,{href:"#top",children:[Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16">\n    <path fill-rule="evenodd" d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"></path>\n  </svg>'}}),"back to top"]}),Object(jsx_runtime.jsx)(List,{children:footerMenu&&footerMenu.menu.map((title,index)=>Object(jsx_runtime.jsx)(Footer_ListItem,{children:Object(jsx_runtime.jsx)(Link,{rel:"noopener",href:title.path,children:title.title})},title+index))})]})};Footer.propTypes={footerMenu:prop_types_default.a.object.isRequired},Footer.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{footerMenu:{type:{name:"object"},required:!0,description:""}}};var library_Footer=Object(RequestProvider.withRequest)(Footer);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Footer.js"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"app/component/library/Footer.js"});var moment=__webpack_require__(5),moment_default=__webpack_require__.n(moment);var MarkupAd=__webpack_require__(207);const Title=styled_components_browser_esm.default.h1`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  padding: 0;
  margin: 10px 0;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.sidebarFontColor};
`,ListWrapper=styled_components_browser_esm.default.div`
  amp-list {
    padding-left: 0;
    list-style: none;
    counter-reset: topArticleCounter;
    margin-top: 0;
  }
`,ArticleList_ListItem=styled_components_browser_esm.default.div`
  display: flex;
  background: ${props=>props.theme.color.white};
  border-left: 4px solid;
  margin: 0 8px 12px 12px;
  box-shadow: 0 2px 3px 0 ${props=>props.theme.color.greyContrast};

  @media ${Styles.c.laptop} {
    margin: 0 4px 10px;
  }

  ${Object.keys(Styles.d).map(item=>`\n    &.border-style-${item} {\n      border-left-color: #${Styles.d[item]};\n\n      & svg {\n        fill: #${Styles.d[item]};\n     }\n    }\n  `)}
`,ImageArea=styled_components_browser_esm.default.a`
  display: flex;
  position: relative;
  amp-img {
    --image-size: 58px;
    height: var(--image-size);
    width: var(--image-size);

    @media ${Styles.c.mobileM} {
      --image-size: 72px;
    }

    @media ${Styles.c.mobileL} {
      --image-size: 84px;
    }

    @media ${Styles.c.tablet} {
      --image-size: 83px;
      height: 100%;
      min-height: var(--image-size);
    }

    @media ${Styles.c.laptop} {
      --image-size: 90px;
    }

    img {
      object-fit: cover;
    }
  }
`,TextArea=styled_components_browser_esm.default.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  line-height: 17px;
  margin: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,Headline=styled_components_browser_esm.default.a`
  font-size: 13px;
  color: ${props=>props.theme.color.sidebarFontColor};

  @media ${Styles.c.mobileM} {
    margin-bottom: 6px;
  }

  @media ${Styles.c.laptop} {
    margin-bottom: 5 px;
  }

  @media ${Styles.c.desktop} {
    font-size: 16px;
  }

  &:before {
    counter-increment: topArticleCounter;
    content: counter(topArticleCounter) '.';
    color: ${props=>props.theme.color.primary};
    padding-right: 5px;
    font-size: 13px;
    font-weight: bold;
    @media ${Styles.c.desktop} {
      font-size: 22px;
    }
  }
`,Action=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  amp-timeago {
    color: #9b9b9b;
    font-size: 10px;
  }
`,AdWrapper=styled_components_browser_esm.default.div`
  display: none;
  @media ${Styles.c.tablet} {
    display: block;
  }
`,ArticleList=props=>{const{res:{locals:{menu:{top100List:top100List}}},cleanAmp:cleanAmp,req:{path:path}}=props;let listMpuId=0;const isWishList=path.startsWith("/wishlist");return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(Title,{children:[isWishList?"Latest":"Trending"," "]}),Object(jsx_runtime.jsx)(ListWrapper,{children:Object(jsx_runtime.jsx)("amp-list",{children:top100List&&top100List.map((item,index)=>{const markupDisplay=2===index||index%10==0&&index>=1;return markupDisplay&&listMpuId++,[markupDisplay&&Object(jsx_runtime.jsx)(AdWrapper,{children:Object(jsx_runtime.jsx)(MarkupAd.a,{className:"article-list",id:"List_mpu"+listMpuId,cleanAmp:cleanAmp,width:300,height:250,blockAds:!1,"size-key":"SINGLE_MPU",ampSizes:"300x250","force-bulk":!0,ampSizeValidation:!1})}),Object(jsx_runtime.jsxs)(ArticleList_ListItem,{className:"border-style-"+item.section.path.split("/")[1],children:[Object(jsx_runtime.jsx)(ImageArea,{href:item.path,children:Object(jsx_runtime.jsx)("amp-img",{src:item.image.data.url,layout:"fixed"})}),Object(jsx_runtime.jsxs)(TextArea,{children:[Object(jsx_runtime.jsx)(Headline,{target:"_top",rel:"noopener",href:item.path,children:item.title}),Object(jsx_runtime.jsxs)(Action,{children:[Object(jsx_runtime.jsx)("amp-timeago",{layout:"fixed-height",height:"20",datetime:moment_default.a.unix(item.publishDate).toISOString(),locale:"en",children:item.publishDate}),"upvote"]})]})]},item+index)]})})})]})};ArticleList.propTypes={res:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool,req:prop_types_default.a.object.isRequired},ArticleList.__docgenInfo={description:"",methods:[],displayName:"ArticleList",props:{res:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""},req:{type:{name:"object"},required:!0,description:""}}};var library_ArticleList=Object(RequestProvider.withRequest)(ArticleList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/ArticleList.js"]={name:"ArticleList",docgenInfo:ArticleList.__docgenInfo,path:"app/component/library/ArticleList.js"});const Wrapper=styled_components_browser_esm.default.div`
  display: none;
  color: #333;
  width: 435px;
  max-height: calc(100vh - 72px);
  background: ${props=>props.theme.color.sidebarColour};
  height: calc(100vh - 72px);
  overflow: auto;
  position: sticky;
  top: 72px;
  @media ${Styles.c.laptop} {
    border-left: 1px solid #9b9b9b;
    display: block;
    flex-shrink: 0;
    height: calc(100% - 16px);
    left: 0;
    margin-left: 16px;
    max-height: none;
    position: absolute;
    top: 16px;
    width: 312px;
  }
`,DesktopArticleList=()=>Object(jsx_runtime.jsx)(Wrapper,{children:Object(jsx_runtime.jsx)(library_ArticleList,{})});DesktopArticleList.__docgenInfo={description:"",methods:[],displayName:"DesktopArticleList"};var library_DesktopArticleList=DesktopArticleList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/DesktopArticleList.js"]={name:"DesktopArticleList",docgenInfo:DesktopArticleList.__docgenInfo,path:"app/component/library/DesktopArticleList.js"});var icons_arrowRightCustom=color=>`\n  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16">\n    <path d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z" fill="${color}"></path>\n  </svg>`;const SidebarToggle_Wrapper=styled_components_browser_esm.default.span`
  @media ${Styles.c.laptop} {
    display: none;
  }

  .preview-swipe & {
    display: none;
  }
`,Button=styled_components_browser_esm.default.span`
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
`,ArrowIcon=styled_components_browser_esm.default.span`
  display: block;
  width: 44px;
  height: 40px;
  margin-left: 3px;
  background: no-repeat center center
    url('data:image/svg+xml;utf8,${icons_arrowRightCustom("white")}');
`,SidebarToggle=()=>Object(jsx_runtime.jsx)(SidebarToggle_Wrapper,{children:Object(jsx_runtime.jsx)(Button,{role:"button",tabIndex:0,on:"tap:sidebar1",children:Object(jsx_runtime.jsx)(ArrowIcon,{})})});SidebarToggle.__docgenInfo={description:"",methods:[],displayName:"SidebarToggle"};var library_SidebarToggle=SidebarToggle;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/SidebarToggle.js"]={name:"SidebarToggle",docgenInfo:SidebarToggle.__docgenInfo,path:"app/component/library/SidebarToggle.js"});const SlidingArticleList_Wrapper=styled_components_browser_esm.default.div`
  #sidebar1 {
    background: ${props=>props.theme.color.sidebarColour};
    border-right: 4px solid ${props=>props.theme.color.primary}
    margin-top: 48px;
    width: 230px;

    @media ${Styles.c.mobileM} {
      width: 271px;
    }

    @media ${Styles.c.mobileL} {
      width: 309px;
    }

    @media ${Styles.c.tablet} {
      margin-top: 62px;
      width: 376px;
    }

    @media ${Styles.c.laptop} {
      margin-top: 72px;
    }
  }
`,SlidingArticleList=props=>Object(jsx_runtime.jsxs)(SlidingArticleList_Wrapper,{children:[Object(jsx_runtime.jsx)(library_SidebarToggle,{}),Object(jsx_runtime.jsx)("amp-sidebar",{id:"sidebar1",layout:"nodisplay",side:"left",media:"(max-width: 1024px)",children:Object(jsx_runtime.jsx)(library_ArticleList,{})})]});SlidingArticleList.propTypes={theme:prop_types_default.a.object},SlidingArticleList.__docgenInfo={description:"",methods:[],displayName:"SlidingArticleList",props:{theme:{type:{name:"object"},required:!1,description:""}}};var library_SlidingArticleList=Object(styled_components_browser_esm.withTheme)(SlidingArticleList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/SlidingArticleList.js"]={name:"SlidingArticleList",docgenInfo:SlidingArticleList.__docgenInfo,path:"app/component/library/SlidingArticleList.js"});var library_Overlay=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("div",{className:className}))`
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
`,SubMenu=__webpack_require__(327);const Quantcast=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?null:Object(jsx_runtime.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n(function() {\n  var host = window.location.hostname;\n  var element = document.createElement('script');\n  var firstScript = document.getElementsByTagName('script')[0];\n  var url = 'https://quantcast.mgr.consensu.org'\n    .concat('/choice/', 'jAJ_WUYAnDzxn', '/', host, '/choice.js')\n  var uspTries = 0;\n  var uspTriesLimit = 3;\n  element.async = true;\n  element.type = 'text/javascript';\n  element.src = url;\n\n  firstScript.parentNode.insertBefore(element, firstScript);\n\n  function makeStub() {\n    var TCF_LOCATOR_NAME = '__tcfapiLocator';\n    var queue = [];\n    var win = window;\n    var cmpFrame;\n\n    function addFrame() {\n      var doc = win.document;\n      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);\n\n      if (!otherCMP) {\n        if (doc.body) {\n          var iframe = doc.createElement('iframe');\n\n          iframe.style.cssText = 'display:none';\n          iframe.name = TCF_LOCATOR_NAME;\n          doc.body.appendChild(iframe);\n        } else {\n          setTimeout(addFrame, 5);\n        }\n      }\n      return !otherCMP;\n    }\n\n    function tcfAPIHandler() {\n      var gdprApplies;\n      var args = arguments;\n\n      if (!args.length) {\n        return queue;\n      } else if (args[0] === 'setGdprApplies') {\n        if (\n          args.length > 3 &&\n          args[2] === 2 &&\n          typeof args[3] === 'boolean'\n        ) {\n          gdprApplies = args[3];\n          if (typeof args[2] === 'function') {\n            args[2]('set', true);\n          }\n        }\n      } else if (args[0] === 'ping') {\n        var retr = {\n          gdprApplies: gdprApplies,\n          cmpLoaded: false,\n          cmpStatus: 'stub'\n        };\n\n        if (typeof args[2] === 'function') {\n          args[2](retr);\n        }\n      } else {\n        queue.push(args);\n      }\n    }\n\n    function postMessageEventHandler(event) {\n      var msgIsString = typeof event.data === 'string';\n      var json = {};\n\n      try {\n        if (msgIsString) {\n          json = JSON.parse(event.data);\n        } else {\n          json = event.data;\n        }\n      } catch (ignore) {}\n\n      var payload = json.__tcfapiCall;\n\n      if (payload) {\n        window.__tcfapi(\n          payload.command,\n          payload.version,\n          function(retValue, success) {\n            var returnMsg = {\n              __tcfapiReturn: {\n                returnValue: retValue,\n                success: success,\n                callId: payload.callId\n              }\n            };\n            if (msgIsString) {\n              returnMsg = JSON.stringify(returnMsg);\n            }\n            event.source.postMessage(returnMsg, '*');\n          },\n          payload.parameter\n        );\n      }\n    }\n\n    while (win) {\n      try {\n        if (win.frames[TCF_LOCATOR_NAME]) {\n          cmpFrame = win;\n          break;\n        }\n      } catch (ignore) {}\n\n      if (win === window.top) {\n        break;\n      }\n      win = win.parent;\n    }\n    if (!cmpFrame) {\n      addFrame();\n      win.__tcfapi = tcfAPIHandler;\n      win.addEventListener('message', postMessageEventHandler, false);\n    }\n  };\n\n  makeStub();\n\n  var uspStubFunction = function() {\n    var arg = arguments;\n    if (typeof window.__uspapi !== uspStubFunction) {\n      setTimeout(function() {\n        if (typeof window.__uspapi !== 'undefined') {\n          window.__uspapi.apply(window.__uspapi, arg);\n        }\n      }, 500);\n    }\n  };\n\n  var checkIfUspIsReady = function() {\n    uspTries++;\n    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {\n      console.warn('USP is not accessible');\n    } else {\n      clearInterval(uspInterval);\n    }\n  };\n\n  if (typeof window.__uspapi === 'undefined') {\n    window.__uspapi = uspStubFunction;\n    var uspInterval = setInterval(checkIfUspIsReady, 6000);\n  }\n})();\n    "}});Quantcast.propTypes={res:prop_types_default.a.object.isRequired},Quantcast.__docgenInfo={description:"",methods:[],displayName:"Quantcast",props:{res:{type:{name:"object"},required:!0,description:""}}};var Scripts_Quantcast=Object(RequestProvider.withRequest)(Quantcast);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Scripts/Quantcast.js"]={name:"Quantcast",docgenInfo:Quantcast.__docgenInfo,path:"app/component/library/Scripts/Quantcast.js"});const AmpAnalytics=({type:type,configJson:configJson,...others})=>Object(jsx_runtime.jsx)("amp-analytics",{type:type,...others,children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(configJson)}})});AmpAnalytics.propTypes={type:prop_types_default.a.string.isRequired,configJson:prop_types_default.a.object.isRequired},AmpAnalytics.__docgenInfo={description:"",methods:[],displayName:"AmpAnalytics",props:{type:{type:{name:"string"},required:!0,description:""},configJson:{type:{name:"object"},required:!0,description:""}}};var Analytics=AmpAnalytics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Analytics.js"]={name:"AmpAnalytics",docgenInfo:AmpAnalytics.__docgenInfo,path:"app/component/library/AMP/Analytics.js"});const GoogleAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:{ga:{id:id}}}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"googleanalytics",id:"analytics2",configJson:{vars:{account:id},triggers:{defaultPageview:{on:"visible",request:"pageview"}}}}):null;GoogleAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},GoogleAnalytics.__docgenInfo={description:"",methods:[],displayName:"GoogleAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Google=Object(RequestProvider.withRequest)(GoogleAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Google.js"]={name:"GoogleAnalytics",docgenInfo:GoogleAnalytics.__docgenInfo,path:"app/component/library/Analytics/Google.js"});const ComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco,comsoreClientId;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?null:Object(jsx_runtime.jsx)("script",{dangerouslySetInnerHTML:{__html:(comsoreClientId=configuration.comscore.clientId,`\nlet _comscore = window._comscore || [];\nlet comscoreTriggered = false;\n\nconst checkGdpr = (tcData) => {\n  for (const [key, value] of Object.entries(tcData)) {\n    if (value) return "1";\n  }\n  return "0";\n};\n\nconst updateComscore = (gdpr) => {\n  if (!comscoreTriggered) {\n    _comscore.push({ c1: "2", c2: ${comsoreClientId}, cs_ucfr: gdpr });\n    (function() {\n      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;\n      s.src="https://sb.scorecardresearch.com/cs/${comsoreClientId}/beacon.js";\n      el.parentNode.insertBefore(s, el);\n    })();\n    comscoreTriggered = true;\n  }\n};\n\nconst callback = (tcData, success) => {\n  if(success && tcData.eventStatus === 'tcloaded') {\n    __tcfapi('removeEventListener', 2, (success) => {\n      if(success) {\n        updateComscore(checkGdpr(tcData.purpose.consents));\n      }\n    }, tcData.listenerId);\n  } else {\n    updateComscore("");\n  }\n}\n\n__tcfapi('addEventListener', 2, callback);\n`)}}))};ComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},ComscoreAnalytics.__docgenInfo={description:"",methods:[],displayName:"ComscoreAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Comscore=Object(RequestProvider.withRequest)(ComscoreAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Comscore.js"]={name:"ComscoreAnalytics",docgenInfo:ComscoreAnalytics.__docgenInfo,path:"app/component/library/Analytics/Comscore.js"});var services_article=__webpack_require__(181);const getChartbeatVars=res=>{const{locals:{domain:domain,configuration:{chartbeat:chartbeat}}}=res,title=(({locals:{article:article}})=>null==article?void 0:article.title)(res),sections=(({locals:{article:article,section:section}})=>{var _section$section,_article$sections,_article$sections$;return[...(null==section||null===(_section$section=section.section)||void 0===_section$section?void 0:_section$section.path.split("/").slice(1))||[],...[Object(services_article.a)(null==article?void 0:article.hero)].filter(x=>x).map(x=>"mediatype_"+x),...(null==article||null===(_article$sections=article.sections)||void 0===_article$sections||null===(_article$sections$=_article$sections[0])||void 0===_article$sections$?void 0:_article$sections$.path.split("/").slice(1))||[],...((null==article?void 0:article.topics)||[]).map(({path:path})=>path.split("/").slice(1).join("-"))].join()})(res),authors=(({locals:{article:article}})=>article?(article.authors||[]).map(({name:name})=>name).join():"")(res);return{uid:(null==chartbeat?void 0:chartbeat.uid)||null,domain:domain,title:title,sections:sections,authors:authors}},ChartbeatAnalytics=({res:res,res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"chartbeat",configJson:{vars:{...getChartbeatVars(res)}}}):null;ChartbeatAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},ChartbeatAnalytics.__docgenInfo={description:"",methods:[],displayName:"ChartbeatAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Chartbeat=Object(RequestProvider.withRequest)(ChartbeatAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Chartbeat.js"]={name:"ChartbeatAnalytics",docgenInfo:ChartbeatAnalytics.__docgenInfo,path:"app/component/library/Analytics/Chartbeat.js"});const getDataByType=(req,res)=>{const{cleanAmp:cleanAmp,configuration:{domain:domain}}=res.locals;let data={};if(res.locals.article){var _article$authors,_article$topics;const article=res.locals.article,{path:path,publish:publish}=article,channels=path.slice(1).split("/").slice(0,-1),utc=moment_default.a.unix(publish).utc(),publishedTime=utc.format("h:mm A"),publishedDate=utc.format("dddd, D MMMM YYYY");data={page_type:"Indy100 Article",site_sections:channels.join(":"),is_amp_page:cleanAmp,article_premium_status:(null==article?void 0:article.premium)?"premium":"free",article_id:(null==article?void 0:article.remoteId)||(null==article?void 0:article.id),article_title:null==article?void 0:article.title,article_author:null==article||null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(x=>x.name).join(","),article_category:"",article_publication_time:publishedTime,published_date:publishedDate,first_published_date:publishedDate,homepage_section:"",article_page_filename:path.split("/").slice(-1)[0],lead_media_item:Object(services_article.a)(article.hero),article_topic_tags:null==article||null===(_article$topics=article.topics)||void 0===_article$topics?void 0:_article$topics.map(x=>x.name).join(","),word_count:null==article?void 0:article.wordCount,internal_links_count:article.body?Object(services_article.c)(article.body,domain):0}}if(res.locals.section){const feed=res.locals.section,{path:path}=feed.section;data={page_type:"Indy100 Channel Front",site_sections:path.slice(1).split("/").join(":"),is_topic_page:cleanAmp}}return data},getAmpState=(req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!0,...getDataByType(0,res)}},functionString=(()=>{const referrer=document.referrer?new URL(document.referrer):"",getCookie=function(name,defaultValue=!1){const match=document.cookie.match(new RegExp("(^|;|\\s+)"+name+"=(.*?)[;|$]"));return match?decodeURIComponent(match[2]):defaultValue},d=new Date,YYYY=new Intl.DateTimeFormat("en",{year:"numeric",timezone:"UTC"}).format(d),MM=new Intl.DateTimeFormat("en",{month:"2-digit",timezone:"UTC"}).format(d),DD=new Intl.DateTimeFormat("en",{day:"2-digit",timezone:"UTC"}).format(d),hh=new Intl.DateTimeFormat("en",{hour:"2-digit",hour12:!1,timezone:"UTC"}).format(d),mm=new Intl.DateTimeFormat("en",{minute:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0"),ss=new Intl.DateTimeFormat("en",{second:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0");var name;Object.assign(window.digitalData,{page_title:document.title,page_query:document.location.search,page_name:document.location.pathname,page_previous_url:referrer&&referrer.protocol+"://"+referrer.host+referrer.pathname,page_previous_path:referrer&&referrer.pathname,page_previous_query:referrer&&referrer.search,timestamp:`${YYYY}:${MM}:${DD}:${hh}:${mm}:${ss}`,gigya_logged_in_status:(name="esi_auth",!1!==getCookie(name)?"logged in":"not logged in"),gigya_uid:getCookie("esi_guid"),gigya_registration_date:getCookie("esi_registration_date"),gigya_share_provider:"",gigya_demographics:getCookie("esi_demographics"),gigya_sign_on_provider:getCookie("esi_sign_on_provider"),gigya_user_status:getCookie("esi_user_status","anonymous")})}).toString().match(/{([\s|\S]+)}/m)[1],AdobeAnalytics=props=>{const{req:req,res:res,res:{locals:{cleanAmp:cleanAmp}}}=props,ampData=((req,res)=>{const{locals:{configuration:{domain:domain,subdomain:subdomain}}}=res;return{requests:{base:"//${host}",iframeMessage:"${base}/iframe/launch.html"},vars:{host:`${subdomain.static}.${domain}`},extraUrlParams:{page_url:"${canonicalUrl}",actual_url:"${sourceUrl}",page_domain:"${sourceHost}",page_path:"${sourcePath}",page_title:"${title}",page_query:"",page_name:"${sourcePath}",page_categories:"",page_type:"",page_previous_url:"${documentReferrer}",page_previous_path:"",page_previous_query:"",...getDataByType(0,res)}}})(0,res),webData=((req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!1,...getDataByType(0,res)}})(req,res),jsonString=JSON.stringify(webData);return cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"adobeanalytics_nativeConfig",configJson:ampData}):Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{children:`digitalData = ${jsonString}; ${functionString}`})})};AdobeAnalytics.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},AdobeAnalytics.__docgenInfo={description:"",methods:[],displayName:"AdobeAnalytics",props:{res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Adobe=Object(RequestProvider.withRequest)(AdobeAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Adobe.js"]={name:"AdobeAnalytics",docgenInfo:AdobeAnalytics.__docgenInfo,path:"app/component/library/Analytics/Adobe.js"});const AmpComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"comscore",configJson:{vars:{c2:configuration.comscore.clientId},extraUrlParams:{comscorekw:"amp"}}}):null)};AmpComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},AmpComscoreAnalytics.__docgenInfo={description:"",methods:[],displayName:"AmpComscoreAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Analytics_Comscore=Object(RequestProvider.withRequest)(AmpComscoreAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Analytics/Comscore.js"]={name:"AmpComscoreAnalytics",docgenInfo:AmpComscoreAnalytics.__docgenInfo,path:"app/component/library/AMP/Analytics/Comscore.js"});const COOKIE_URL="https://www.independent.co.uk/service/cookie-policy-a6184186.html",AmpConsent_Wrapper=styled_components_browser_esm.default.div`
  background-color: rgba(34, 34, 34, 0.2);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
`,Modal=styled_components_browser_esm.default.div`
  position: relative;
  width: 85vw;
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
  box-sizing: border-box;
  margin-top: 15vh;

  @media ${Styles.c.tablet} {
    width: 600px;
  }

  p {
    color: ${props=>props.theme.color.black};
    font-size: 15px;
    text-align: center;
    padding: 20px 30px 0;
  }

  div.modal-header {
    background: ${props=>props.theme.color.metaGrey};
    color: ${props=>props.theme.color.white};
    width: 100%;
    border-radius: 6px 6px 0 0;
    font-size: 16px;
    font-weight: ${props=>props.theme.fontWeight.normal};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    box-sizing: border-box;
    padding: 12px;
    text-align: center;
  }
`,CloseButton=styled_components_browser_esm.default.button`
  cursor: pointer;
  font-size: 20px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.white};
  position: absolute;
  top: 10px;
  right: 12px;

  &:after {
    content: '\\2715';
    padding-left: 4px;
    display: flex;
    align-items: center;
  }
`,BackButton=styled_components_browser_esm.default.button`
  cursor: pointer;
  font-size: 16px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.white};
  font-weight: ${props=>props.theme.fontWeight.normal};
  position: absolute;
  top: 12px;
  left: 12px;

  &:after {
    content: '\\003C  back';
    padding-left: 4px;
    display: flex;
    align-items: center;
  }
`,ConsentButton=styled_components_browser_esm.default.button`
  border-radius: 6px;
  background: ${props=>props.theme.color.primary};
  color: ${props=>props.theme.color.white};
  padding: 8px 24px;
  font-weight: ${props=>props.theme.fontWeight.medium};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};

  &:last-child {
    margin-left: 10px;
  }

  &.secondary {
    background: ${props=>props.theme.color.metaGrey};
  }
`,ButtonWrapper=styled_components_browser_esm.default.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`,ModalHeader=({heading:heading,backFn:backFn})=>Object(jsx_runtime.jsxs)("div",{className:"modal-header",children:[backFn&&Object(jsx_runtime.jsx)(BackButton,{on:backFn,role:"button"}),Object(jsx_runtime.jsx)("span",{children:heading}),Object(jsx_runtime.jsx)(CloseButton,{on:"tap:consent-element.dismiss",role:"button"})]});ModalHeader.propTypes={heading:prop_types_default.a.string.isRequired,backFn:prop_types_default.a.string};const AmpConsent=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-consent",src:"https://cdn.ampproject.org/v0/amp-consent-0.1.js"}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-geo",src:"https://cdn.ampproject.org/v0/amp-geo-0.1.js"})]}),Object(jsx_runtime.jsx)("amp-geo",{layout:"nodisplay",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({ISOCountryGroups:{eea:["preset-eea"]}})}})}),Object(jsx_runtime.jsxs)("amp-consent",{layout:"nodisplay",id:"consent-element",children:[Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({consentInstanceId:"my-consent",promptUI:"consent-ui",consentRequired:!1,geoOverride:{eea:{consentRequired:!0}}})}}),Object(jsx_runtime.jsxs)(AmpConsent_Wrapper,{id:"consent-ui",children:[Object(jsx_runtime.jsxs)(Modal,{id:"acceptScreen",children:[Object(jsx_runtime.jsx)(ModalHeader,{heading:"Our use of cookies"}),Object(jsx_runtime.jsxs)("p",{children:["We and our partners use cookies and other technologies to help us understand how readers use our website, and to deliver relevant content and advertising. Click “Accept” to consent to the use of this technology and the processing of your personal data for these purposes. More information is available in our"," ",Object(jsx_runtime.jsx)("a",{href:COOKIE_URL,target:"_blank",rel:"noreferrer",children:"cookie notice"}),". If you do not agree, click to manage your options."]}),Object(jsx_runtime.jsxs)(ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.accept",role:"button",children:"Accept"}),Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:manageScreen.show,acceptScreen.hide",role:"button",className:"secondary",children:"Manage"})]}),Object(jsx_runtime.jsx)(CloseButton,{on:"tap:consent-element.dismiss",role:"button"})]}),Object(jsx_runtime.jsxs)(Modal,{id:"manageScreen",hidden:!0,children:[Object(jsx_runtime.jsx)(ModalHeader,{heading:"Options",backFn:"tap:manageScreen.hide,acceptScreen.show"}),Object(jsx_runtime.jsxs)("p",{children:["Choosing to accept cookies from our advertising partner Google will allow you to receive personalised advertising. If you choose to decline, the advertising made available throughout the site will not be tailored to you. For more information, please read our cookie notice"," ",Object(jsx_runtime.jsx)("a",{href:COOKIE_URL,target:"_blank",rel:"noreferrer",children:"here"}),"."]}),Object(jsx_runtime.jsxs)(ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.accept",role:"button",children:"Accept"}),Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.reject",role:"button",className:"secondary",children:"Decline"})]})]})]})]})]}):null;AmpConsent.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},AmpConsent.__docgenInfo={description:"",methods:[],displayName:"AmpConsent",props:{res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var AMP_AmpConsent=Object(RequestProvider.withRequest)(AmpConsent);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/AmpConsent.js"]={name:"AmpConsent",docgenInfo:AmpConsent.__docgenInfo,path:"app/component/library/AMP/AmpConsent.js"});var State=__webpack_require__(932),State_default=__webpack_require__.n(State);const AmpState=({id:id,json:json})=>Object(jsx_runtime.jsx)(State_default.a,{id:id,children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(json)}})});AmpState.propTypes={id:prop_types_default.a.string.isRequired,json:prop_types_default.a.object.isRequired},AmpState.__docgenInfo={description:"",methods:[],displayName:"AmpState",props:{id:{type:{name:"string"},required:!0,description:""},json:{type:{name:"object"},required:!0,description:""}}};var AMP_State=AmpState;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/State.js"]={name:"AmpState",docgenInfo:AmpState.__docgenInfo,path:"app/component/library/AMP/State.js"});var Ad=__webpack_require__(247);const TopBanner_Wrapper=styled_components_browser_esm.default.div`
  height: auto;
  padding: 0;
  width: 100%;
`,TopBanner=({className:className,...rest})=>Object(jsx_runtime.jsx)(TopBanner_Wrapper,{className:className,children:Object(jsx_runtime.jsx)(MPU.a,{id:"top_banner","size-key":"TOP_BANNER","force-bulk":!0,...rest})}),{id:TopBanner_id,adUnitPathArr:adUnitPathArr,...TopBannerPropTypes}=Ad.default.propTypes;TopBanner.propTypes={...TopBannerPropTypes};var Ads_TopBanner=Object(styled_components_browser_esm.default)(TopBanner)`
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
    display: block;
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
`,ads=__webpack_require__(97);const Skin=({className:className,...props})=>Object(jsx_runtime.jsx)(MPU.a,{id:"skin",className:className,"size-key":"SKIN","force-bulk":!0,...props});Skin.propTypes={className:prop_types_default.a.string};var Ads_Skin=Object(styled_components_browser_esm.default)(Skin)`
  height: 0;
  position: sticky;
  top: 70px;
  padding: 0px;
  left: 0;
  z-index: 10;
`;const AppContainer=styled_components_browser_esm.default.div`
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
    width: 670px;
  }
`,FrameInner=styled_components_browser_esm.default.div`
  position: relative;
  overflow: hidden;
`,OutOfPageSlotMPU=Object(styled_components_browser_esm.default)(MPU.a)`
  position: absolute;
`,Frame_Frame=({className:className,children:children,res:{locals:{configuration:configuration,menu:{footerMenu:footerMenu,subMenu:subMenu}}},req:{flowPreview:flowPreview,path:path},req:req,res:res,cleanAmp:cleanAmp,article:article,section:section})=>{var _configuration$cmp,_configuration$cmp2;const isWishList=path.startsWith("/wishlist"),adToggle=(null==article?void 0:article.adConfig)?Object(ads.e)(article):()=>!1,topBannerDisplay=section||adToggle(ads.c),showTrendingList=section||article;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Alfa+Slab+One|Lato:400,700|Roboto+Slab:400,700&display=swap"})}),!flowPreview&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(null==configuration?void 0:configuration.adobe)&&Object(jsx_runtime.jsx)(Adobe,{}),(null==configuration?void 0:configuration.ga)&&Object(jsx_runtime.jsx)(Google,{}),(null==configuration?void 0:configuration.chartbeat)&&Object(jsx_runtime.jsx)(Chartbeat,{}),(null==configuration||null===(_configuration$cmp=configuration.cmp)||void 0===_configuration$cmp?void 0:_configuration$cmp.enabled)&&Object(jsx_runtime.jsx)(Scripts_Quantcast,{}),(null==configuration?void 0:configuration.comscore)&&Object(jsx_runtime.jsx)(Comscore,{}),(null==configuration?void 0:configuration.comscore)&&Object(jsx_runtime.jsx)(Analytics_Comscore,{}),(null==configuration||null===(_configuration$cmp2=configuration.cmp)||void 0===_configuration$cmp2?void 0:_configuration$cmp2.enabled)&&Object(jsx_runtime.jsx)(AMP_AmpConsent,{})]}),(article||section)&&Object(jsx_runtime.jsx)(OutOfPageSlotMPU,{id:"out-of-page",sizes:"1x1","force-bulk":!0,width:1,height:1}),Object(jsx_runtime.jsxs)("div",{className:className,children:[Object(jsx_runtime.jsx)(library_Header,{isWishList:isWishList}),!cleanAmp&&Object(jsx_runtime.jsx)(Ads_Skin,{}),topBannerDisplay&&Object(jsx_runtime.jsx)(Ads_TopBanner,{width:"320",height:"50",cleanAmp:cleanAmp}),Object(jsx_runtime.jsxs)(AppContainer,{children:[Object(jsx_runtime.jsxs)(ContentContainer,{showTrendingList:showTrendingList,children:[isWishList&&!article&&Object(jsx_runtime.jsx)(SubMenu.a,{subMenu:subMenu,currentURL:path}),Object(jsx_runtime.jsx)(FrameInner,{id:"frameInner",children:children}),Object(jsx_runtime.jsx)(library_Footer,{footerMenu:footerMenu})]}),showTrendingList&&Object(jsx_runtime.jsx)(library_DesktopArticleList,{cleanAmp:cleanAmp})]}),Object(jsx_runtime.jsx)(library_Overlay,{}),showTrendingList&&Object(jsx_runtime.jsx)(library_SlidingArticleList,{}),!flowPreview&&Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(null==configuration?void 0:configuration.gtm)&&Object(jsx_runtime.jsx)(library_GTM,{})}),(null==configuration?void 0:configuration.adobe)&&Object(jsx_runtime.jsx)(AMP_State,{id:"digitalData",json:getAmpState(req,res)})]})]})};Frame_Frame.propTypes={className:prop_types_default.a.string,isWishList:prop_types_default.a.bool,article:prop_types_default.a.object.isRequired,children:prop_types_default.a.any.isRequired,res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object,cleanAmp:prop_types_default.a.bool,section:prop_types_default.a.object},Frame_Frame.defaultProps={className:""};__webpack_exports__.a=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Frame_Frame))`
  flex-direction: column;
  padding-top: 48px;

  &::before {
    background: ${props=>props.theme.color.primary};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 48px;
    width: 4px;
  }

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
`},6:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return sectionColours})),__webpack_require__.d(__webpack_exports__,"e",(function(){return themes})),__webpack_require__.d(__webpack_exports__,"a",(function(){return GlobalStyles})),__webpack_require__.d(__webpack_exports__,"c",(function(){return device})),__webpack_require__.d(__webpack_exports__,"b",(function(){return breakPoints}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);const themes={default:{fontFamily:{primaryFont:"'Lato', sans-serif",secondaryFont:"'Roboto Slab',Rockwell, serif",headingFont:"'Alfa Slab One', sans-serif",articleFont:"'Alfa Slab One', Rockwell, serif"},fontSize:{menu:"10px",small:"12px",list:"14px",caption:"16px",body:"18px"},fontWeight:{thin:300,normal:400,medium:500,bold:700,black:900},color:{primary:"#EB1E30",secondary:"#b21f24",sidebarColour:"#d0d2d5",borderColor:"#979797",primaryDark:"#bc1826",white:"#FFF",black:"#000",font:"#444",pinkContrast:"#D43998",sidebarFontColor:"#191919",darkContrast:"#191919",greyContrast:"#dfdfdf",metaGrey:"#a0a0a0",fontGrey:"#888",fontMedium:"#474747",desktopMenuColor:"#333",backgroundLight:"#fafafa",borderLight:"#bababa",contrastLight:"#fafafa",formDefault:"#474747",formGrey:"#bababa",formFocus:"#276fbf",formSuccess:"#157f1f",formError:"#a20021",formDisabled:"#e8e8e8"}}},sectionColours={news:"EB1E30",discover:"EB1E30",people:"e67e22",offbeat:"f1c40f",ents:"57d68d",sport:"40a9ef",tech:"3f57ec",wishlist:"d43998",video:"9b2fc7",videos:"9b2fc7",conversations:"c83f40"},breakPoints={mobileS:320,mobileM:375,mobileL:425,tabletS:595,tablet:768,laptop:1e3,desktop:2560},minWidth=val=>`(min-width: ${val}px)`,maxWidth=val=>`(max-width: ${val-1}px)`,device={mobileS:minWidth(breakPoints.mobileS),mobileM:minWidth(breakPoints.mobileM),mobileL:minWidth(breakPoints.mobileL),tabletS:minWidth(breakPoints.tabletS),tablet:minWidth(breakPoints.tablet),laptop:minWidth(breakPoints.laptop),desktop:minWidth(breakPoints.desktop),maxMobileS:maxWidth(breakPoints.mobileS),maxMobileM:maxWidth(breakPoints.mobileM),maxMobileL:maxWidth(breakPoints.mobileL),maxTabletS:maxWidth(breakPoints.tabletS),maxTablet:maxWidth(breakPoints.tablet),maxLaptop:maxWidth(breakPoints.laptop),maxDesktop:maxWidth(breakPoints.desktop),adBreakpointMedium:"(min-width: 1300px)",adBreakpointLarge:"(min-width: 1600px)"},GlobalStyles=styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`

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

  h1, h2, h3 {
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

  p {
    font-size: 18px;
    line-height: 1.45em;
  }

  a {
    color: ${props=>props.theme.color.primary};
    text-decoration: none;
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
  }
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /* amp overrides */
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
`},67:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createImageFromString}));const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");canvas.width=1,canvas.height=1;const createImage=(r=0,g=0,b=0)=>(ctx.fillStyle=`rgb(${r}, ${g}, ${b})`,ctx.fillRect(0,0,1,1),canvas.toDataURL("image/png","")),createImageFromString=(str="")=>{let hash=0;for(let i=0;i<str.length;i++)hash=str.charCodeAt(i)+((hash<<5)-hash),hash&=hash;const rgb=[0,0,0];for(let i=0;i<3;i++)rgb[i]=hash>>8*i&255;return createImage(...rgb)};__webpack_exports__.b=createImage},70:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return JW_PLAYER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BRIGHTCOVE})),__webpack_require__.d(__webpack_exports__,"g",(function(){return YOUTUBE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DUGOUT_VIDEO})),__webpack_require__.d(__webpack_exports__,"c",(function(){return GALLERY})),__webpack_require__.d(__webpack_exports__,"d",(function(){return IMAGE})),__webpack_require__.d(__webpack_exports__,"f",(function(){return POLAR}));const JW_PLAYER="jw_player",BRIGHTCOVE="brightcove",YOUTUBE="youtube",DUGOUT_VIDEO="dugout-video",GALLERY="gallery",IMAGE="image",POLAR="polar"},905:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleContent",(function(){return ArticleContent})),__webpack_require__.d(__webpack_exports__,"WishListSubMenu",(function(){return WishListSubMenu}));var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(4),Helmet=__webpack_require__(81),themes=__webpack_require__(917),RequestProvider=__webpack_require__(14),Styles=__webpack_require__(6),SubMenu=__webpack_require__(327),Brightcove=__webpack_require__(918),Brightcove_default=__webpack_require__.n(Brightcove);const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,BrightcoveEmbed=props=>{const{data:data,theme:theme}=props;return Object(jsx_runtime.jsx)(Wrapper,{children:Object(jsx_runtime.jsx)(Brightcove_default.a,{data:data,"data-param-brand-colour":theme.color.primary})})};BrightcoveEmbed.propTypes={data:prop_types_default.a.any.isRequired,theme:prop_types_default.a.object.isRequired},BrightcoveEmbed.__docgenInfo={description:"",methods:[],displayName:"BrightcoveEmbed",props:{data:{type:{name:"any"},required:!0,description:""},theme:{type:{name:"object"},required:!0,description:""}}};var Embeds_Brightcove=Object(styled_components_browser_esm.withTheme)(BrightcoveEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Brightcove.js"]={name:"BrightcoveEmbed",docgenInfo:BrightcoveEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Brightcove.js"});var Youtube=__webpack_require__(919),Youtube_default=__webpack_require__.n(Youtube);const Youtube_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,YoutubeEmbed=({data:data})=>Object(jsx_runtime.jsx)(Youtube_Wrapper,{children:Object(jsx_runtime.jsx)(Youtube_default.a,{data:data})});YoutubeEmbed.propTypes={data:prop_types_default.a.any.isRequired},YoutubeEmbed.__docgenInfo={description:"",methods:[],displayName:"YoutubeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Youtube=YoutubeEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Youtube.js"]={name:"YoutubeEmbed",docgenInfo:YoutubeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Youtube.js"});var Image=__webpack_require__(105),Image_default=__webpack_require__.n(Image);const ImageWrapper=styled_components_browser_esm.default.figure`
  margin: 0;
  & img {
    object-fit: cover;
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
`,ArticleImage=({data:{url:url,caption:caption,copyright:copyright,width:width,height:height},isHero:isHero,srcSet:srcSet,children:children,showCaption:showCaption,customHeight:customHeight,customWidth:customWidth})=>Object(jsx_runtime.jsxs)(ImageWrapper,{children:[Object(jsx_runtime.jsx)(Image_default.a,{src:url+"?w=982&h=726",alt:caption,height:height||customHeight||726,width:width||customWidth||982,srcset:srcSet.map(size=>url+`?w=${size} ${size}w`).join(", "),layout:"responsive"}),children&&children,showCaption&&(caption||copyright)&&(isHero?Object(jsx_runtime.jsxs)(HeroCaption,{children:[caption&&Object(jsx_runtime.jsx)("span",{children:caption}),copyright&&Object(jsx_runtime.jsxs)("span",{className:"copyright",children:["(",copyright,")"]})]}):Object(jsx_runtime.jsxs)(Caption,{children:[caption&&Object(jsx_runtime.jsx)("span",{children:caption}),copyright&&Object(jsx_runtime.jsxs)("span",{className:"copyright",children:["(",copyright,")"]})]}))]});ArticleImage.propTypes={data:prop_types_default.a.object.isRequired,isHero:prop_types_default.a.boolean,srcSet:prop_types_default.a.array.isRequired,children:prop_types_default.a.any,theme:prop_types_default.a.string,showCaption:prop_types_default.a.bool,customWidth:prop_types_default.a.number,customHeight:prop_types_default.a.number},ArticleImage.defaultProps={theme:"default",children:null,showCaption:!0},ArticleImage.__docgenInfo={description:"",methods:[],displayName:"ArticleImage",props:{theme:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},children:{defaultValue:{value:"null",computed:!1},type:{name:"any"},required:!1,description:""},showCaption:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},data:{type:{name:"object"},required:!0,description:""},isHero:{type:{name:"custom",raw:"PropTypes.boolean"},required:!1,description:""},srcSet:{type:{name:"array"},required:!0,description:""},customWidth:{type:{name:"number"},required:!1,description:""},customHeight:{type:{name:"number"},required:!1,description:""}}};var Embeds_Image=ArticleImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Image.js"]={name:"ArticleImage",docgenInfo:ArticleImage.__docgenInfo,path:"app/component/library/Article/Embeds/Image.js"});const PolarImage_ImageWrapper=styled_components_browser_esm.default.figure`
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
`;function PolarImage(){return Object(jsx_runtime.jsxs)(PolarImage_ImageWrapper,{children:[Object(jsx_runtime.jsx)("img",{id:"native-content-media",src:"",alt:""}),Object(jsx_runtime.jsxs)(PolarImage_Caption,{children:[Object(jsx_runtime.jsx)("h4",{id:"native-content-media-caption"}),Object(jsx_runtime.jsx)("h4",{id:"native-content-media-credits"})]})]})}PolarImage.__docgenInfo={description:"",methods:[],displayName:"PolarImage"};var ThirdParty_PolarImage=PolarImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/ThirdParty/PolarImage.js"]={name:"PolarImage",docgenInfo:PolarImage.__docgenInfo,path:"app/component/library/ThirdParty/PolarImage.js"});var JWPlayer=__webpack_require__(920),JWPlayer_default=__webpack_require__.n(JWPlayer);const VideoMeta=playerData=>{var _playerData$data,_playerData$data$extr;const widestMp4=(data=>{var _data$data,_data$data$extra;const sources=null==data||null===(_data$data=data.data)||void 0===_data$data||null===(_data$data$extra=_data$data.extra)||void 0===_data$data$extra?void 0:_data$data$extra.sources;let widestMp4,w=0;return sources&&sources.forEach(source=>{source.width>w&&"video/mp4"===source.type&&(w=source.width,widestMp4=source)}),widestMp4})(playerData),duration=null==playerData||null===(_playerData$data=playerData.data)||void 0===_playerData$data||null===(_playerData$data$extr=_playerData$data.extra)||void 0===_playerData$data$extr?void 0:_playerData$data$extr.duration;return Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[duration&&Object(jsx_runtime.jsx)("meta",{property:"og:video:duration",content:duration}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video",content:widestMp4.file}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:width",content:widestMp4.width}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:height",content:widestMp4.height}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:type",content:"video/mp4"})]})};VideoMeta.propTypes={data:prop_types_default.a.object.isRequired},VideoMeta.__docgenInfo={description:"",methods:[],displayName:"VideoMeta",props:{data:{type:{name:"object"},required:!0,description:""}}};var Head_VideoMeta=VideoMeta;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Head/VideoMeta.js"]={name:"VideoMeta",docgenInfo:VideoMeta.__docgenInfo,path:"app/component/library/Head/VideoMeta.js"});const JWPlayer_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,getPlayerIdAndType=(playerIds,props)=>{const{configuration:{jwplayerPlayerTypes:jwplayerPlayerTypes},isHero:isHero=!1,isCommercial:isCommercial=!1,isSensitive:isSensitive=!1}=props;return isCommercial?{playerId:playerIds.commercialPlayer,playerType:jwplayerPlayerTypes.commercialPlayerType}:isSensitive?{playerId:playerIds.sensitivePlayer,playerType:jwplayerPlayerTypes.sensitivePlayerType}:isHero?{playerId:playerIds.defaultPlayer,playerType:jwplayerPlayerTypes.defaultPlayerType}:{playerId:playerIds.inlinePlayer,playerType:jwplayerPlayerTypes.inlinePlayerType}},JWPlayerEmbed=props=>{const{data:data,isHero:isHero=!1}=props,id=(({id:id,mediaid:mediaid})=>id||mediaid)(data),{playerId:playerId,playerType:playerType}=(props=>{const{configuration:{jwplayerPlayerIds:jwplayerPlayerIds},res:{locals:{cleanAmp:cleanAmp}}}=props;return getPlayerIdAndType(cleanAmp?jwplayerPlayerIds.amp:jwplayerPlayerIds.default,props)})(props),customParams=((props,videoId,playerType)=>{const{jsGlobals:{gs_channels:gs_channels,topictags:topictags,pageId:pageId}}=props,numericPageId=pageId&&Number.isNaN(pageId)?pageId.replace(/\D/g,""):pageId;return encodeURIComponent(`videoID=${videoId}&article=${numericPageId}&gs_channels=${gs_channels&&gs_channels.join()}&playertype=${playerType}&topictags=${topictags&&topictags.join()}`)})(props,id,playerType),adUnit=(props=>{const{jsGlobals:{videoAdUnitPath:videoAdUnitPath}}=props;return videoAdUnitPath})(props);return Object(jsx_runtime.jsxs)(JWPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Head_VideoMeta,{data:data}),Object(jsx_runtime.jsx)(JWPlayer_default.a,{data:{id:id,...data},playerId:playerId,playerType:playerType,useAmpIframe:!0,placeholder:!0,ampIframeSrc:"/jwplayer-amp-video-iframe.html",useIframe:!isHero,runJWPlayerSetup:!1,"data-param-customparams":customParams,"data-param-dunit":adUnit})]})};JWPlayerEmbed.propTypes={data:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired,isHero:prop_types_default.a.bool,isCommercial:prop_types_default.a.bool,isSensitive:prop_types_default.a.bool,cleanAmp:prop_types_default.a.bool},JWPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"JWPlayerEmbed",props:{data:{type:{name:"object"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""},isHero:{type:{name:"bool"},required:!1,description:""},isCommercial:{type:{name:"bool"},required:!1,description:""},isSensitive:{type:{name:"bool"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var Embeds_JWPlayer=Object(RequestProvider.withRequest)(JWPlayerEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/JWPlayer.js"]={name:"JWPlayerEmbed",docgenInfo:JWPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/JWPlayer.js"});var heroType=__webpack_require__(70),services_article=__webpack_require__(181);function Hero({className:className,hero:hero,isCommercial:isCommercial=!1,isSensitive:isSensitive=!1}){return(hero=>{if(!hero)return null;switch(hero.type){case heroType.e:return Object(jsx_runtime.jsx)(Embeds_JWPlayer,{className:className,data:hero.data,isHero:!0,isCommercial:isCommercial,isSensitive:isSensitive});case heroType.a:return Object(jsx_runtime.jsx)(Embeds_Brightcove,{data:hero.data});case heroType.g:return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:hero.data});case heroType.d:return Object(jsx_runtime.jsx)(Embeds_Image,{data:hero.data,srcSet:[320,640,990],isHero:!0});case heroType.f:return Object(jsx_runtime.jsx)(ThirdParty_PolarImage,{});default:return null}})(Object(services_article.b)(hero))}Hero.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{isCommercial:{defaultValue:{value:"false",computed:!1},required:!1},isSensitive:{defaultValue:{value:"false",computed:!1},required:!1}}};var Article_Hero=Hero;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Hero.js"]={name:"Hero",docgenInfo:Hero.__docgenInfo,path:"app/component/library/Article/Hero.js"});const Headline=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("h1",{className:className,children:children}))`
  margin: 0 0 12px;
  color: ${props=>props.theme.color.black};
  font-size: 32px;
  line-height: 36px;
  font-family: ${props=>props.theme.fontFamily.articleFont};
  font-weight: normal;
  @media ${Styles.c.tablet} {
    margin: 25px 50px;
    font-size: 45px;
    line-height: 60px;
  }
`;Headline.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var Article_Headline=Headline,moment=__webpack_require__(5),moment_default=__webpack_require__.n(moment);const SocialShare_Wrapper=styled_components_browser_esm.default.div`
  text-align: right;
  margin-left: 6px;

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
`;function SocialShare({title:title,titleSocial:titleSocial,className:className,size:size,types:types}){return Object(jsx_runtime.jsxs)(SocialShare_Wrapper,{className:className,children:[types.fb&&Object(jsx_runtime.jsx)("amp-social-share",{type:"facebook","data-param-app_id":"235586169789578",width:size,height:size,"aria-label":"Share to Facebook"}),types.tw&&Object(jsx_runtime.jsx)("amp-social-share",{type:"twitter",width:size,height:size,"aria-label":"Share to Twitter","data-param-text":titleSocial||title}),types.wp&&Object(jsx_runtime.jsx)("amp-social-share",{type:"whatsapp",width:size,height:size,"aria-label":"Share by WhatsApp","data-param-text":titleSocial||title}),types.email&&Object(jsx_runtime.jsx)("amp-social-share",{type:"email",width:size,height:size,"aria-label":"Share by email","data-param-subject":titleSocial||title})]})}SocialShare.propTypes={title:prop_types_default.a.string,titleSocial:prop_types_default.a.string,size:prop_types_default.a.any.isRequired,types:prop_types_default.a.object.isRequired,className:prop_types_default.a.string},SocialShare.__docgenInfo={description:"",methods:[],displayName:"SocialShare",props:{title:{type:{name:"string"},required:!1,description:""},titleSocial:{type:{name:"string"},required:!1,description:""},size:{type:{name:"any"},required:!0,description:""},types:{type:{name:"object"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""}}};var Article_SocialShare=SocialShare;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/SocialShare.js"]={name:"SocialShare",docgenInfo:SocialShare.__docgenInfo,path:"app/component/library/Article/SocialShare.js"});const Strap=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.primary};
  display: flex;
  margin-bottom: 16px;
  > * {
    &:after {
      display: inline-block;
      content: '|';
      color: ${props=>props.theme.color.metaGrey};
      margin-left: 0.3em;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
  amp-timeago {
    color: ${props=>props.theme.color.metaGrey};
  }
`,Section=styled_components_browser_esm.default.a`
  margin: 0 0.3em 0;
`,Authors=styled_components_browser_esm.default.span`
  margin: 0 0.3em;
`,AuthorInfo=styled_components_browser_esm.default.span``,AuthorLink=styled_components_browser_esm.default.a`
  &:after {
    content: ', ';
  }
  &:last-child:after {
    display: none;
  }
`,AuthorTwitterLink=styled_components_browser_esm.default.a`
  font-size: 16px;
  text-decoration: none;
  color: ${props=>props.theme.color.metaGrey};
  &:after {
    content: ', ';
  }
  &:last-child:after {
    display: none;
  }
`,ArticleMetaSocialShare=Object(styled_components_browser_esm.default)(Article_SocialShare)`
  margin: 16px 0;
  & amp-social-share {
    margin: 0 6px;
  }
`,ArticleMetaSocialShareDesktop=Object(styled_components_browser_esm.default)(ArticleMetaSocialShare)`
  display: none;
  @media ${Styles.c.tablet} {
    display: block;
  }
`,ArticleMetaSocialShareMobile=Object(styled_components_browser_esm.default)(ArticleMetaSocialShare)`
  display: block;
  @media ${Styles.c.tablet} {
    display: none;
  }
`,ArticleMeta=props=>{const{className:className,article:article}=props;let authors=article.authors&&article.authors.map(a=>a.firstName&&a.lastName?Object(jsx_runtime.jsxs)(AuthorLink,{href:a.path,children:[a.firstName," ",a.lastName]},a.id):Object(jsx_runtime.jsx)(AuthorLink,{href:a.path,children:a.name},a.id)),authorTwitterLink=article.authors&&article.authors.filter(({twitter:twitter})=>twitter).map(a=>Object(jsx_runtime.jsxs)(AuthorTwitterLink,{href:"https://twitter.com/"+a.twitter,children:["@",a.twitter]},a.id)),section=article.sections&&article.sections.slice(0,1).map(s=>Object(jsx_runtime.jsx)(Section,{href:s.path,children:s.name},s.id));return Object(jsx_runtime.jsxs)("div",{className:className,children:[Object(jsx_runtime.jsxs)(Strap,{children:[authors&&Object(jsx_runtime.jsx)(Authors,{children:authors}),article.extra.authorInfo&&Object(jsx_runtime.jsx)(AuthorInfo,{children:article.extra.authorInfo}),Object(jsx_runtime.jsx)("amp-timeago",{layout:"fixed-height",height:"20",datetime:moment_default.a.unix(article.publish).utc().format(),cutoff:"604800",locale:"en",children:moment_default.a.unix(article.publish).utc().format("dddd D MMMM YYYY HH:mm")}),section&&section,authorTwitterLink]}),Object(jsx_runtime.jsx)(ArticleMetaSocialShareMobile,{size:35,title:article.title,titleSocial:article.titleSocial,types:{fb:{},tw:{},wp:{},email:{}}}),Object(jsx_runtime.jsx)(ArticleMetaSocialShareDesktop,{size:48,title:article.title,titleSocial:article.titleSocial,types:{fb:{},tw:{},wp:{},email:{}}})]})};ArticleMeta.propTypes={className:prop_types_default.a.string,configuration:prop_types_default.a.object.isRequired,article:prop_types_default.a.any.isRequired,lang:prop_types_default.a.string};var Article_ArticleMeta=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(ArticleMeta))`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 16px;
  amp-social-share {
    background-size: 60%;
  }
`;const LiveCapsule_Wrapper=styled_components_browser_esm.default.div``,UpdateTime=styled_components_browser_esm.default.div`
  display: inline-flex;
  font-size: 14px;
  color: #281e1e;
  span {
    margin-right: 5px;
  }
`,Capsule=styled_components_browser_esm.default.div`
  background-color: ${props=>props.theme.color.primary};
  border-radius: 25px;
  margin: 20px auto;
  width: fit-content;
  padding: 10px 25px;
  .live {
    color: ${props=>props.theme.color.white};
    font-family: ${props=>props.theme.fontFamily.headingFont};
    font-size: 18px;
    font-weight: normal;
    margin-left: 5px;
  }
`,LiveCapsule=Object(styled_components_browser_esm.default)(({className:className,updated:updated})=>Object(jsx_runtime.jsxs)(LiveCapsule_Wrapper,{className:className,children:[Object(jsx_runtime.jsxs)(Capsule,{className:"capsule",children:[Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 38 25" width="25" height="18"><path d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266 9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281 9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z"/></svg>'}}),Object(jsx_runtime.jsx)("span",{className:"live",children:"LIVE"})]}),Object(jsx_runtime.jsxs)(UpdateTime,{children:[Object(jsx_runtime.jsx)("span",{children:"Updated"}),Object(jsx_runtime.jsxs)("amp-timeago",{layout:"fixed-height",height:"20",datetime:moment_default.a.unix(updated).toISOString(),locale:"en",children:[" ",updated]})]})]}))``;LiveCapsule.propTypes={className:prop_types_default.a.string};var Article_LiveCapsule=LiveCapsule;const Header_Wrapper=styled_components_browser_esm.default.header``,Header=Object(styled_components_browser_esm.default)(props=>{const{className:className,article:{title:title,hero:hero,isLiveBlog:isLiveBlog,updated:updated}}=props;return Object(jsx_runtime.jsxs)(Header_Wrapper,{className:className,children:[isLiveBlog&&Object(jsx_runtime.jsx)(Article_LiveCapsule,{updated:updated}),Object(jsx_runtime.jsx)(Article_Headline,{children:title}),Object(jsx_runtime.jsx)(Article_ArticleMeta,{}),Object(jsx_runtime.jsx)(Article_Hero,{hero:hero})]})})`
  display: flex;
  flex-direction: column;
  text-align: center;
`;Header.propTypes={className:prop_types_default.a.string,article:prop_types_default.a.object.isRequired};var Article_Header=Header,ColumnWrapper=__webpack_require__(328),react=__webpack_require__(2),MarkupAd=__webpack_require__(207),Dugout=__webpack_require__(921),Dugout_default=__webpack_require__.n(Dugout);const VideoCaption_Caption=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("div",{className:className,children:children}))`
  color: ${props=>props.theme.color.indyBaseLight1};
  background: ${props=>props.theme.color.indyOffWhite};
  font-size: ${props=>props.theme.fontSize.list};
  font-weight: ${props=>props.theme.fontWeight.thin};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding: 6px 8px;
`;VideoCaption_Caption.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var VideoCaption=VideoCaption_Caption;const DugoutPlayer_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,DugoutPlayerEmbed=({data:data})=>Object(jsx_runtime.jsxs)(DugoutPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Dugout_default.a,{data:data}),data.localCaption&&Object(jsx_runtime.jsx)(VideoCaption,{children:data.localCaption})]});DugoutPlayerEmbed.propTypes={data:prop_types_default.a.any.isRequired},DugoutPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"DugoutPlayerEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var DugoutPlayer=DugoutPlayerEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/DugoutPlayer.js"]={name:"DugoutPlayerEmbed",docgenInfo:DugoutPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/DugoutPlayer.js"});var Playbuzz=__webpack_require__(922),Playbuzz_default=__webpack_require__.n(Playbuzz);const Playbuzz_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,PlayBuzzEmbed=({data:data})=>Object(jsx_runtime.jsx)(Playbuzz_Wrapper,{children:Object(jsx_runtime.jsx)(Playbuzz_default.a,{data:data})});PlayBuzzEmbed.propTypes={data:prop_types_default.a.any.isRequired},PlayBuzzEmbed.__docgenInfo={description:"",methods:[],displayName:"PlayBuzzEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Playbuzz=PlayBuzzEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Playbuzz.js"]={name:"PlayBuzzEmbed",docgenInfo:PlayBuzzEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Playbuzz.js"});var uniqueId=__webpack_require__(923),uniqueId_default=__webpack_require__.n(uniqueId);var icons_Gallery=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="#EC1A2E"><path d="M9 9c0-.552.448-1 1.001-1 .553 0 .999.448.999 1s-.446 1-.999 1C9.448 10 9 9.552 9 9zm6.2 0l-1.7 2.6-1.3-1.6L9 14h10l-3.8-5zM24 4v14H4v-3H0V0h21v4h3zM4 13V4h15V2H2v11h2zm18-7H6v10h16V6z" fill-rule="nonzero"/></svg>\n'}}))`
  display: flex;
  align-items: center;
  width: 1em;
`,Lightbox=__webpack_require__(924),Lightbox_default=__webpack_require__.n(Lightbox),Carousel=__webpack_require__(925),Carousel_default=__webpack_require__.n(Carousel),closeIcon=__webpack_require__(329);var icons_Close=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:closeIcon.a}}))`
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
`,GalleryImage=({data:{url:url,title:title,caption:caption,description:description,copyright:copyright},srcSet:srcSet,count:count,delta:delta})=>Object(jsx_runtime.jsxs)(GalleryImage_Wrapper,{children:[Object(jsx_runtime.jsx)(GalleryImage_ImageWrapper,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:url+"?width=640",alt:caption,srcset:srcSet.map(size=>url+`?width=${size} ${size}w`).join(", "),layout:"flex-item"})}),Object(jsx_runtime.jsxs)(GalleryImage_Caption,{children:[Object(jsx_runtime.jsxs)(GalleryImage_Header,{children:[Object(jsx_runtime.jsxs)(Count,{children:[delta+1,"/",count]}),Object(jsx_runtime.jsx)(Title,{children:title})]}),Object(jsx_runtime.jsx)(Description,{children:description||caption}),Object(jsx_runtime.jsx)(Copyright,{children:copyright})]})]});GalleryImage.propTypes={data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired,count:prop_types_default.a.number.isRequired,delta:prop_types_default.a.number.isRequired},GalleryImage.__docgenInfo={description:"",methods:[],displayName:"GalleryImage",props:{data:{type:{name:"object"},required:!0,description:""},srcSet:{type:{name:"array"},required:!0,description:""},count:{type:{name:"number"},required:!0,description:""},delta:{type:{name:"number"},required:!0,description:""}}};var Embeds_GalleryImage=GalleryImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/GalleryImage.js"]={name:"GalleryImage",docgenInfo:GalleryImage.__docgenInfo,path:"app/component/library/Article/Embeds/GalleryImage.js"});const GalleryLightbox_srcSet=["1368"],GalleryHeader=styled_components_browser_esm.default.header`
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
`,Gallery_Gallery=({data:{title:title,gallery:gallery},srcSet:srcSet})=>{const[id]=Object(react.useState)(uniqueId_default()("gallery-"));return Object(jsx_runtime.jsxs)(Gallery_GalleryWrapper,{children:[Object(jsx_runtime.jsxs)("div",{on:"tap:"+id,children:[Object(jsx_runtime.jsxs)(Gallery_GalleryHeader,{children:[Object(jsx_runtime.jsxs)(Gallery_GalleryTitle,{children:[Object(jsx_runtime.jsx)(Gallery_GalleryIcon,{}),title]}),Object(jsx_runtime.jsxs)(GalleryCount,{children:["Show all ",gallery.length]})]}),Object(jsx_runtime.jsxs)(GalleryInner,{children:[Object(jsx_runtime.jsx)(GalleryMain,{children:gallery&&gallery.filter(image=>image).slice(0,1).map((image,index)=>Object(jsx_runtime.jsx)(Image_default.a,{src:image.data.url+"?width=640",alt:image.data.caption,srcset:srcSet.map(size=>image.data.url+`?width=${size} ${size}w`).join(", "),layout:"fill"},index))}),Object(jsx_runtime.jsx)(GalleryThumbs,{children:gallery&&gallery.filter(image=>image).slice(1,4).map((image,index)=>Object(jsx_runtime.jsx)(Image_default.a,{src:image.data.url+"?width=135",alt:image.data.caption,height:108,width:135,srcset:image.data.url+"?width=135 135w",layout:"responsive"},index))})]})]}),Object(jsx_runtime.jsx)(Embeds_GalleryLightbox,{id:id,title:title,gallery:gallery})]})};Gallery_Gallery.propTypes={data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired},Gallery_Gallery.__docgenInfo={description:"on attribute is removed for styled components",methods:[],displayName:"Gallery",props:{data:{type:{name:"object"},required:!0,description:""},srcSet:{type:{name:"array"},required:!0,description:""}}};var Embeds_Gallery=Gallery_Gallery;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Gallery.js"]={name:"Gallery",docgenInfo:Gallery_Gallery.__docgenInfo,path:"app/component/library/Article/Embeds/Gallery.js"});var moment_timezone=__webpack_require__(485),moment_timezone_default=__webpack_require__.n(moment_timezone),striptags=__webpack_require__(926),striptags_default=__webpack_require__.n(striptags);const MarkupContainer=styled_components_browser_esm.default.div`
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
`,Markup=({data:{markup:markup},polar:polar,prefix:prefix})=>Object(jsx_runtime.jsxs)(MarkupContainer,{id:polar&&"native-content-content",children:[prefix&&prefix,Object(jsx_runtime.jsx)("excessremovablewrapper",{dangerouslySetInnerHTML:{__html:markup}})]});Markup.propTypes={data:prop_types_default.a.any.isRequired,prefix:prop_types_default.a.any,polar:prop_types_default.a.bool},Markup.__docgenInfo={description:"",methods:[],displayName:"Markup",props:{data:{type:{name:"any"},required:!0,description:""},prefix:{type:{name:"any"},required:!1,description:""},polar:{type:{name:"bool"},required:!1,description:""}}};var Article_Markup=Markup;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Markup.js"]={name:"Markup",docgenInfo:Markup.__docgenInfo,path:"app/component/library/Article/Markup.js"});var Twitter=__webpack_require__(927),Twitter_default=__webpack_require__.n(Twitter);const Twitter_Wrapper=styled_components_browser_esm.default.div`
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
`;function Readmore({data:data}){return Object(jsx_runtime.jsx)(Readmore_Wrapper,{children:Object(jsx_runtime.jsxs)(Link,{href:data.href,target:"_blank",children:[Object(jsx_runtime.jsx)(Readmore_Headline,{children:"Read More "}),data.imageUrl&&Object(jsx_runtime.jsx)("amp-img",{src:data.imageUrl,height:"470",width:"630",layout:"responsive",children:Object(jsx_runtime.jsx)("amp-img",{placeholder:!0,layout:"fill",src:"/img/placeholder.png",height:"470",width:"630"})})||Object(jsx_runtime.jsx)("amp-img",{layout:"responsive",src:"/img/placeholder.png",height:"470",width:"630"}),Object(jsx_runtime.jsxs)(Text,{children:[Object(jsx_runtime.jsx)(Readmore_Title,{children:"Read More"}),data.text.replace("READ MORE: ","")]})]})})}Readmore.propTypes={data:prop_types_default.a.any.isRequired},Readmore.__docgenInfo={description:"",methods:[],displayName:"Readmore",props:{data:{type:{name:"any"},required:!0,description:""}}};var Article_Readmore=Readmore;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Readmore.js"]={name:"Readmore",docgenInfo:Readmore.__docgenInfo,path:"app/component/library/Article/Readmore.js"});const readmoreOnce=()=>{let foundOne=null;return comp=>"readMore"!==comp.type||!foundOne&&(foundOne=!0,!0)},removeEmptySnippet=()=>comp=>{switch(comp.type){case"markup":if(!comp.data.markup)return!1;return!(striptags_default()(comp.data.markup).length<1);case"gallery":return void 0!==comp.data.gallery&&comp.data.gallery.length>0}return!0},renderBody=body=>body.filter(x=>x.type).filter(readmoreOnce()).filter(removeEmptySnippet()).map((snippet,index)=>{switch(snippet.type){case"H2":case"H3":case"H4":case"markup":return Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data},snippet.type+index);case"brightcove":return Object(jsx_runtime.jsx)(Embeds_Brightcove,{data:snippet.data},snippet.type+index);case"youtube":return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:snippet.data},snippet.type+index);case"image":return Object(jsx_runtime.jsx)(Embeds_Image,{srcSet:[320,640],data:snippet.data},snippet.type+index);case"twitter":return Object(jsx_runtime.jsx)(Embeds_Twitter,{data:snippet.data},snippet.type+index);case"readMore":return Object(jsx_runtime.jsx)(Article_Readmore,{data:snippet.data},snippet.type+index);case"playbuzz":return Object(jsx_runtime.jsx)(Embeds_Playbuzz,{data:snippet.data},snippet.type+index);case"gallery":return Object(jsx_runtime.jsx)(Embeds_Gallery,{srcSet:[320,640],data:snippet.data},snippet.type+index);default:return console.log("TODO: define component type",snippet.type),Object(jsx_runtime.jsxs)("div",{style:{color:"red"},children:["TODO: define component type ",snippet.type]},snippet.type+index)}}),LiveBlog_Wrapper=styled_components_browser_esm.default.div`
  margin: 20px 0;
`,KeyPoints=styled_components_browser_esm.default.aside`
  border: 1px solid ${props=>props.theme.color.borderColor};
  border-radius: 20px;
  padding: 20px;
`,KeyPointsTitle=styled_components_browser_esm.default.h2`
  font-family: ${props=>props.theme.fontFamily.headingFont};
  display: inline-block;
  font-size: 18px;
  background-color: ${props=>props.theme.color.primary};
  color: ${props=>props.theme.color.white};
  border-radius: 20px;
  margin-top: 0;
  margin-bottom: 23px;
  padding: 7px 50px;
  font-weight: normal;
`,KeyPointsList=styled_components_browser_esm.default.div`
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    position: relative;
    padding-bottom: 22px;
    padding-left: 31px;
    font-size: 14px;
    font-weight: 700;
    &:before {
      content: ' ';
      width: 19px;
      height: 19px;
      display: block;
      background: transparent url(/img/icons/icon-keypoints.svg) no-repeat;
      background-size: 19px;
      border-radius: 50%;
      position: absolute;
      left: 2px;
      top: 0;
      z-index: 2;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      height: 100%;
      background: ${props=>props.theme.color.greyContrast};
      left: 9px;
      top: 0;
    }
    &:last-child {
      padding-bottom: 0;
      &:after {
        display: none;
      }
    }
    a {
      color: ${props=>props.theme.color.font};
      &:hover {
        color: ${props=>props.theme.color.primary};
      }
    }
  }
`,UpdateButton=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)("button",{className:props.className,...props,children:props.children}))`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  border: 1px solid ${props=>props.theme.color.borderColor};
  border-radius: 20px;
  display: flex;
  width: 100%;
  padding: 16px 20px 15px;
  font-size: 15px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`,Pagination=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)("div",{className:props.className,...props,children:props.children}))`
  position: relative;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props=>props.theme.color.borderColor};
  border-radius: 20px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  padding: 20px 20px 19px;
  margin-top: 30px;
  .shortcut > * {
    margin: 0 10px;
    color: ${props=>props.theme.color.primary};
    font-weight: ${props=>props.theme.fontWeight.bold};
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 30px;
    background: ${props=>props.theme.color.borderColor};
    left: 29px;
    top: -31px;
  }
`,Post=styled_components_browser_esm.default.div``,PostAnchor=styled_components_browser_esm.default.a`
  font-size: 17px;
  font-weight: ${props=>props.theme.fontWeight.bold};
  color: ${props=>props.theme.color.borderColor};
  display: flex;
  position: relative;
  align-items: center;
  padding: 24px 0 24px 20px;
  &:before {
    content: '';
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border: 2px solid ${props=>props.theme.color.borderColor};
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
    left: 29px;
    top: 0;
  }
`,PostContent=styled_components_browser_esm.default.div`
  padding-top: 20px;
  position: relative;
  border: 1px solid ${props=>props.theme.color.borderColor};
  border-radius: 20px;
  font-weight: ${props=>props.theme.fontWeight.thin};
  > * {
    padding: 0 20px;
  }
  .post-meta {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`,PostMeta=styled_components_browser_esm.default.div`
  display: flex;
  border-top: 1px solid ${props=>props.theme.color.borderColor};
  margin-top: 20px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,Author=styled_components_browser_esm.default.span`
  font-size: 14px;
  color: ${props=>props.theme.color.primary};
  font-weight: bold;
  &:after {
    display: inline-block;
    content: '|';
    color: ${props=>props.theme.color.borderColor};
    margin: 0 5px;
  }
`,PostCreated=styled_components_browser_esm.default.span`
  font-size: 14px;
  color: ${props=>props.theme.color.borderColor};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: ${props=>props.theme.fontWeight.normal};
`,PostHeading=styled_components_browser_esm.default.h3`
  margin: 0;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.darkContrast};
  line-height: 1.29;
  font-size: 21px;
`,LiveBlog=props=>{const{article:article,data:{keypoints:keypoints,uuid:uuid},posts:posts,paging:paging}=props,pagination=[];if(paging.total>paging.posts)for(let i=1;i<=paging.totalPages;i++)paging.currentPage===i?pagination.push(Object(jsx_runtime.jsx)("span",{children:i},i)):pagination.push(Object(jsx_runtime.jsx)("a",{href:"?page="+i,children:i},i));return Object(jsx_runtime.jsxs)(LiveBlog_Wrapper,{children:[keypoints&&keypoints.data&&keypoints.data.markup&&Object(jsx_runtime.jsxs)(KeyPoints,{children:[Object(jsx_runtime.jsx)(KeyPointsTitle,{children:keypoints.data.title}),Object(jsx_runtime.jsx)(KeyPointsList,{dangerouslySetInnerHTML:{__html:keypoints.data.markup}})]}),Object(jsx_runtime.jsxs)("amp-live-list",{id:uuid,"data-max-items-per-page":paging.posts,children:[Object(jsx_runtime.jsx)(UpdateButton,{update:"",on:`tap:${uuid}.update`,children:"Show latest update"}),Object(jsx_runtime.jsx)("div",{items:"",children:posts.map(post=>{return Object(jsx_runtime.jsxs)(Post,{"data-sort-time":post.data.created,"data-update-time":post.data.changed,id:"post-"+post.data.id,children:[Object(jsx_runtime.jsx)(PostAnchor,{href:"#post-"+post.id,children:Object(jsx_runtime.jsx)("amp-timeago",{layout:"fixed-height",height:"20",datetime:moment_timezone_default.a.unix(post.data.changed).toISOString(),locale:"en",children:post.data.changed})}),Object(jsx_runtime.jsxs)(PostContent,{children:[Object(jsx_runtime.jsx)(PostHeading,{children:post.data.title}),(body=post.postJson,body.filter(x=>x.type).filter(removeEmptySnippet()).map((item,index)=>{switch(item.type){case"image":return Object(jsx_runtime.jsx)(Embeds_Image,{data:item.data,srcSet:[640]},item.id);case"H2":case"H3":case"H4":case"listbulleted":case"listnumbered":case"markup":return Object(jsx_runtime.jsx)(Article_Markup,{data:item.data},item.id);case"twitter":return Object(jsx_runtime.jsx)(Embeds_Twitter,{data:item.data},item.id);default:return Object(jsx_runtime.jsxs)("p",{children:["Unhandled: ",item.type]},"unknownComp"+index)}})),Object(jsx_runtime.jsxs)(PostMeta,{className:"post-meta",children:[post.data.extra.authorName&&Object(jsx_runtime.jsx)(Author,{children:post.data.extra.authorName}),Object(jsx_runtime.jsx)(PostCreated,{children:moment_timezone_default.a.unix(post.data.created).tz("Europe/London").format("D MMMM YYYY HH:mm")})]})]})]},post.data.id);var body})}),paging.total>paging.posts&&Object(jsx_runtime.jsxs)(Pagination,{pagination:"",children:[Object(jsx_runtime.jsxs)("div",{children:[paging.currentPage>1&&2===paging.currentPage&&Object(jsx_runtime.jsx)("a",{href:article.path,children:"Prev"}),paging.currentPage>2&&Object(jsx_runtime.jsx)("a",{href:"?page="+(paging.currentPage-1),children:"Prev"})]}),Object(jsx_runtime.jsx)("div",{className:"shortcut",children:pagination&&pagination}),Object(jsx_runtime.jsx)("div",{children:paging.currentPage<paging.totalPages&&Object(jsx_runtime.jsx)("a",{href:"?page="+(paging.currentPage+1),children:"Next"})})]})]})]})};LiveBlog.propTypes={article:prop_types_default.a.object.isRequired,data:prop_types_default.a.any.isRequired,posts:prop_types_default.a.any,paging:prop_types_default.a.any},LiveBlog.__docgenInfo={description:"",methods:[],displayName:"LiveBlog",props:{article:{type:{name:"object"},required:!0,description:""},data:{type:{name:"any"},required:!0,description:""},posts:{type:{name:"any"},required:!1,description:""},paging:{type:{name:"any"},required:!1,description:""}}};var Embeds_LiveBlog=Object(RequestProvider.withRequest)(LiveBlog);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog.js"]={name:"LiveBlog",docgenInfo:LiveBlog.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog.js"});const MarkupEmbed=({className:className,data:{markup:markup}})=>Object(jsx_runtime.jsx)("div",{className:className,dangerouslySetInnerHTML:{__html:markup}});MarkupEmbed.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired};var Embeds_MarkupEmbed=Object(styled_components_browser_esm.default)(MarkupEmbed)`
  display: inline-block;
`,Facebook=__webpack_require__(928),Facebook_default=__webpack_require__.n(Facebook);const Facebook_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`,FacebookEmbed=({data:data})=>Object(jsx_runtime.jsx)(Facebook_Wrapper,{children:Object(jsx_runtime.jsx)(Facebook_default.a,{data:data,"data-align-center":!0})});FacebookEmbed.propTypes={data:prop_types_default.a.any.isRequired},FacebookEmbed.__docgenInfo={description:"",methods:[],displayName:"FacebookEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Facebook=FacebookEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Facebook.js"]={name:"FacebookEmbed",docgenInfo:FacebookEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Facebook.js"});var Instagram=__webpack_require__(929),Instagram_default=__webpack_require__.n(Instagram);const Instagram_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`;function InstagramEmbed({data:data}){return Object(jsx_runtime.jsx)(Instagram_Wrapper,{children:Object(jsx_runtime.jsx)(Instagram_default.a,{data:data})})}InstagramEmbed.propTypes={data:prop_types_default.a.any.isRequired},InstagramEmbed.__docgenInfo={description:"",methods:[],displayName:"InstagramEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Instagram=InstagramEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Instagram.js"]={name:"InstagramEmbed",docgenInfo:InstagramEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Instagram.js"});const TopicsTitle=styled_components_browser_esm.default.span`
  font-size: ${props=>props.theme.fontSize.caption};
  margin: 0 10px 0 0;
  line-height: 26px;
`,TopicsList=styled_components_browser_esm.default.span``,TopicsListItem=styled_components_browser_esm.default.a`
  display: inline-block;
  margin: 0 8px 8px 0;
  color: ${props=>props.theme.color.white};
  background: ${props=>props.theme.color.primary};
  border-radius: 100px;
  padding: 2px 20px;
  font-size: ${props=>props.theme.fontSize.list};
  text-transform: capitalize;
  letter-spacing: 0.1em;
  line-height: 26px;
`,Topics=Object(styled_components_browser_esm.default)(({className:className,topics:topics})=>Object(jsx_runtime.jsxs)("nav",{className:className,"aria-labelledby":"related-navigation",children:[Object(jsx_runtime.jsx)(TopicsTitle,{children:"More About"}),Object(jsx_runtime.jsx)(TopicsList,{children:topics.map((topic,index)=>Object(jsx_runtime.jsx)(TopicsListItem,{href:topic.path,children:topic.name},index))})]}))`
  font-family: ${props=>props.theme.fontFamily.articleFont};
`;Topics.propTypes={className:prop_types_default.a.string,topics:prop_types_default.a.array.isRequired};var Article_Topics=Topics;const Quote=styled_components_browser_esm.default.div`
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
  }
`;var Article_BlockQuote=Object(styled_components_browser_esm.default)(({data:{markup:markup}})=>Object(jsx_runtime.jsx)(Quote,{dangerouslySetInnerHTML:{__html:markup}}))``;const Embed=styled_components_browser_esm.default.div`
  display: flex;
  clear: both;
  width: 100%;
  max-width: 100%;
  > * {
    margin: auto;
  }
`,HTMLEmbed=({data:{markup:markup}})=>Object(jsx_runtime.jsx)(Embed,{dangerouslySetInnerHTML:{__html:markup}});HTMLEmbed.propTypes={data:prop_types_default.a.any.isRequired},HTMLEmbed.__docgenInfo={description:"",methods:[],displayName:"HTMLEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_HTMLEmbed=HTMLEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/HTMLEmbed.js"]={name:"HTMLEmbed",docgenInfo:HTMLEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/HTMLEmbed.js"});const SquirrelWrapper=styled_components_browser_esm.default.div`
  padding: 20px 0;
`,SquirrelWidget=({cleanAmp:cleanAmp,model:model,brand:brand})=>Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:cleanAmp?Object(jsx_runtime.jsx)(SquirrelWrapper,{children:Object(jsx_runtime.jsx)("amp-iframe",{class:"squirrel_widget",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",src:`https://squirrels.getsquirrel.co/make-model.html?c=db793706d70c37dcc16454fa8eb21b1c&make=${brand}&model=${model}`,height:"205",scrolling:"no"})}):Object(jsx_runtime.jsx)(SquirrelWrapper,{className:"squirrel_widget","data-make":brand,"data-model":model,"data-loaded":"false"})});SquirrelWidget.propTypes={cleanAmp:prop_types_default.a.bool.isRequired,model:prop_types_default.a.string.isRequired,brand:prop_types_default.a.string.isRequired},SquirrelWidget.__docgenInfo={description:"",methods:[],displayName:"SquirrelWidget",props:{cleanAmp:{type:{name:"bool"},required:!0,description:""},model:{type:{name:"string"},required:!0,description:""},brand:{type:{name:"string"},required:!0,description:""}}};var Wishlist_SquirrelWidget=SquirrelWidget;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Wishlist/SquirrelWidget.js"]={name:"SquirrelWidget",docgenInfo:SquirrelWidget.__docgenInfo,path:"app/component/library/Article/Wishlist/SquirrelWidget.js"});const Product_Wrapper=styled_components_browser_esm.default.div`
  amp-img {
    width: 50%;
    display: block;
    margin: auto;
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
`,Price=styled_components_browser_esm.default.span``,Product=({className:className,product:product,cleanAmp:cleanAmp})=>{const{title:title,image:image,body:body,vendorLink:vendorLink,vendorName:vendorName,price:price,model:model,brand:brand}=product.data;return Object(jsx_runtime.jsxs)(Product_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(ProductTitle,{children:title}),Object(jsx_runtime.jsx)(Embeds_Image,{className:"product-image",data:image.data,srcSet:[320,640],showCaption:!1,customWidth:510,customHeight:240}),Object(jsx_runtime.jsx)(ProductBody,{children:renderBody(body)}),vendorLink&&Object(jsx_runtime.jsxs)(ProductMeta,{children:[Object(jsx_runtime.jsx)(BuyLink,{href:vendorLink,children:"Buy now"}),vendorName,Object(jsx_runtime.jsx)(Price,{children:" £"+price})]}),Object(jsx_runtime.jsx)(Wishlist_SquirrelWidget,{cleanAmp:cleanAmp,model:model,brand:(null==brand?void 0:brand.name)||""})]})};Product.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool.isRequired,product:prop_types_default.a.array.isRequired};var Wishlist_Product=Object(styled_components_browser_esm.default)(Product)`
  margin-bottom: 36px;
`;const Products=({className:className,products:products,cleanAmp:cleanAmp})=>Object(jsx_runtime.jsx)("div",{className:className,children:products&&products.map((product,index)=>Object(jsx_runtime.jsx)(Wishlist_Product,{product:product,cleanAmp:cleanAmp},index))});Products.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool.isRequired,products:prop_types_default.a.array.isRequired};var Wishlist_Products=Object(styled_components_browser_esm.default)(Products)``;const ContentWrapper_Wrapper=styled_components_browser_esm.default.div`
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
`,MpuWrapper=styled_components_browser_esm.default.div`
  &.pb-20 {
    padding-bottom: 20px;
  }
`,Mpu1MarkupAd=({cleanAmp:cleanAmp,className:className})=>Object(jsx_runtime.jsx)(MpuWrapper,{className:className,children:Object(jsx_runtime.jsx)(MarkupAd.a,{id:"mpu1",cleanAmp:cleanAmp,width:300,height:250,blockAds:!1,"size-key":"SINGLE_MPU",ampSizes:"300x250,320x480,300x600","force-bulk":!0,ampSizeValidation:!1})});Mpu1MarkupAd.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool};const ThirdPartyAmp=({id:id})=>Object(jsx_runtime.jsx)(MarkupAd.a,{id:id,width:300,height:1,ampSizes:"300x1",cleanAmp:!0,thirdPartyAd:!0,ampSizeValidation:!1});ThirdPartyAmp.propTypes={id:prop_types_default.a.number.isRequired};const ThirdPartyWrapper=styled_components_browser_esm.default.div`
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
`,embedMap={brightcove:Embeds_Brightcove,gallery:Embeds_Gallery,blockquote:Article_BlockQuote,image:Embeds_Image,"dugout-video":DugoutPlayer,html:Embeds_HTMLEmbed,H2:Embeds_MarkupEmbed,H3:Embeds_MarkupEmbed,H4:Embeds_MarkupEmbed,H5:Embeds_MarkupEmbed,H6:Embeds_MarkupEmbed,listbulleted:Embeds_MarkupEmbed,listnumbered:Embeds_MarkupEmbed,playbuzz:Embeds_Playbuzz,readMore:Article_Readmore,twitter:Embeds_Twitter,facebook:Embeds_Facebook,instagram:Embeds_Instagram,"video-youtube":Embeds_Youtube,"video-dugout":DugoutPlayer,youtube:Embeds_Youtube},isValidToCount=markup=>{return(str=markup,str.replace(/(<([^>]+)>)/gi,"")).length>=100;var str},ContentWrapper=({style:style,article:article,cleanAmp:cleanAmp,isCommercial:isCommercial})=>{var _article$extra,_article$extra2;const{body:body,liveblog:liveblog}=article,blockAds=(null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isDisableAllAds)||article.sensitive,products=null===(_article$extra2=article.extra)||void 0===_article$extra2?void 0:_article$extra2.products;let paragraphCount=0,holdAd=!1,doubleAdBlocker=!1,content=null==body?void 0:body.filter(x=>x.type).filter(readmoreOnce()).filter(removeEmptySnippet()).reduce((acc,snippet,index)=>{const key=`${snippet.type}${index}`;switch(snippet.type){case"markup":return 3!==paragraphCount||holdAd||doubleAdBlocker?5!==paragraphCount||holdAd||doubleAdBlocker||cleanAmp?(isValidToCount(snippet.data.markup)&&!holdAd?(paragraphCount++,doubleAdBlocker=!1):isValidToCount(snippet.data.markup)&&holdAd&&((paragraphCount=>paragraphCount>1&&paragraphCount<5||10===paragraphCount||6===paragraphCount||paragraphCount%4==0&&paragraphCount>=8)(paragraphCount)?(holdAd=!1,paragraphCount++,holdAd=!1):(holdAd=!1,paragraphCount++)),[...acc,Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,polar:article.polar,style:style},key)]):(doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(ThirdPartyWrapper,{className:"teads",children:Object(jsx_runtime.jsx)(MarkupAd.a,{id:"thirdparty01",cleanAmp:cleanAmp,blockAds:blockAds,"size-key":"THIRD_PARTY_ARTICLE_BODY",ampSizeValidation:!1,thirdPartyAd:!0,"force-bulk":!0})},"thirdparty01"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)]):(doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(react.createElement)(Mpu1MarkupAd,{cleanAmp:cleanAmp,key:"mpu1-markup-ad"}),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)]);case"listbulleted":case"listnumbered":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data},key)]}case"video-jwplayer":return[...acc,Object(jsx_runtime.jsx)(Embeds_JWPlayer,{data:snippet.data,isHero:article.isLiveBlog,isCommercial:isCommercial,isSensitive:article.sensitive},key)];case"image":case"gallery":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{srcSet:[320,640],data:snippet.data},key)]}default:{const Component=embedMap[snippet.type];return Component?(holdAd=!0,[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data},key)]):(console.log("TODO: define component type",snippet.type),[...acc,Object(jsx_runtime.jsxs)("div",{style:{color:"red"},children:["TODO: define component type ",snippet.type]},key)])}}},[]);return cleanAmp&&(content=(content=>{const fithParaIndex=content.map(({key:key})=>key).reduce((acc,key,index)=>(null==key?void 0:key.startsWith("markup"))?[...acc,index]:acc,[])[4],teadsIndexes=[...fithParaIndex?[fithParaIndex]:[]];let thirdPartyIndex=1;return content.reduce((acc,item,index)=>{if(teadsIndexes.includes(index)){const adId="thirdparty0"+thirdPartyIndex;return thirdPartyIndex+=1,[...acc,item,Object(jsx_runtime.jsx)(ThirdPartyAmp,{id:adId},adId)]}return[...acc,item]},[])})(content)),products&&content.push(Object(jsx_runtime.jsx)(Wishlist_Products,{products:products},"Products")),Object(jsx_runtime.jsxs)(ContentWrapper_Wrapper,{children:[Object(jsx_runtime.jsxs)("div",{id:"main",children:[content,liveblog&&Object(jsx_runtime.jsx)(Embeds_LiveBlog,{...liveblog})]}),article.topics&&Object(jsx_runtime.jsx)(Article_Topics,{topics:article.topics,style:style})]})};ContentWrapper.propTypes={style:prop_types_default.a.string,articleBodyConfig:prop_types_default.a.object.isRequired,adToggle:prop_types_default.a.func,article:prop_types_default.a.object.isRequired,domain:prop_types_default.a.object,configuration:prop_types_default.a.object.isRequired,jsGlobals:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired,req:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired,isInsider:prop_types_default.a.bool,isCommercial:prop_types_default.a.bool},ContentWrapper.__docgenInfo={description:"",methods:[],displayName:"ContentWrapper",props:{style:{type:{name:"string"},required:!1,description:""},articleBodyConfig:{type:{name:"object"},required:!0,description:""},adToggle:{type:{name:"func"},required:!1,description:""},article:{type:{name:"object"},required:!0,description:""},domain:{type:{name:"object"},required:!1,description:""},configuration:{type:{name:"object"},required:!0,description:""},jsGlobals:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""},isInsider:{type:{name:"bool"},required:!1,description:""},isCommercial:{type:{name:"bool"},required:!1,description:""}}};var Article_ContentWrapper=Object(RequestProvider.withRequest)(ContentWrapper);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/ContentWrapper.js"]={name:"ContentWrapper",docgenInfo:ContentWrapper.__docgenInfo,path:"app/component/library/Article/ContentWrapper.js"});var WallPaper=__webpack_require__(208),Frame=__webpack_require__(332),StickyFooter=__webpack_require__(330),ads=__webpack_require__(97),page=__webpack_require__(331);const ArticleContent=styled_components_browser_esm.default.article`
  margin: 0 12px;
  padding: 8px 0;
  @media ${Styles.c.mobileL} {
    padding: 16px 0;
  }
`,WishListSubMenu=Object(styled_components_browser_esm.default)(SubMenu.a)`
  & ul {
    margin-bottom: 0;
  }
`,Article=props=>{const{className:className,domain:domain,article:article,cleanAmp:cleanAmp,jsGlobals:jsGlobals,configuration:configuration,req:{path:path,originalUrl:originalUrl},res:{locals:{menu:{subMenu:subMenu}}}}=props,isWishList=path.startsWith("/wishlist"),adToggle=article.adConfig?Object(ads.e)(article):()=>{},adToggleByType=article.adConfig?Object(ads.f)(article):()=>{},{baseUrl:baseUrl}=configuration,fullUrl=baseUrl+originalUrl,articleStyle=Object(themes.getArticleTheme)(path,configuration);return Object(jsx_runtime.jsxs)(Frame.a,{className:className,children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("title",{children:Object(page.a)({article:article},configuration.name)}),article.structuredData&&Object(jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(article.structuredData.article)})||"",Object(jsx_runtime.jsx)("meta",{property:"og:title",content:article.titleSocial||article.title}),Object(jsx_runtime.jsx)("meta",{property:"og:url",content:configuration.baseUrl+article.path}),Object(jsx_runtime.jsx)("meta",{property:"og:type",content:"article"}),Object(jsx_runtime.jsx)("meta",{property:"og:description",content:article.lead&&article.lead.replace(/"/g,"&quote;")}),article.hero&&article.hero.filter(({type:type})=>"image"===type).map((media,index)=>{if(0===index)return[Object(jsx_runtime.jsx)("meta",{property:"og:image",content:configuration.baseUrl+media.data.url},index+"ogImage"),Object(jsx_runtime.jsx)("meta",{property:"og:image:secure_url",content:configuration.baseUrl+media.data.url},index+"ogImageSecure")]}).filter(x=>!!x),!cleanAmp&&Object(jsx_runtime.jsx)("link",{rel:"amphtml",href:/\?/.test(fullUrl)?fullUrl.replace(/\?/,"?amp&"):fullUrl+"?amp"})]}),Object(jsx_runtime.jsxs)(ArticleContent,{children:[isWishList&&Object(jsx_runtime.jsx)(WishListSubMenu,{subMenu:subMenu,currentURL:path}),!cleanAmp&&adToggle(ads.b)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"nativeBanner"}),!cleanAmp&&adToggle(ads.d)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"adSlotWallpaper"}),Object(jsx_runtime.jsx)(Article_Header,{article:article}),Object(jsx_runtime.jsx)(ColumnWrapper.a,{children:Object(jsx_runtime.jsx)(Article_ContentWrapper,{domain:domain,configuration:configuration,adToggle:adToggle,articleBodyConfig:adToggleByType("ArticleBody"),article:article,cleanAmp:cleanAmp,style:articleStyle,adTargeting:jsGlobals.adTargeting})}),Object(jsx_runtime.jsx)(StickyFooter.a,{cleanAmp:cleanAmp})]})]})};Article.propTypes={className:prop_types_default.a.any,domain:prop_types_default.a.string.isRequired,article:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired,jsGlobals:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Article))`
  justify-content: center;

  ${ArticleContent} {
    background-color: ${props=>props.theme.color.white};
  }
`},913:function(module){module.exports=JSON.parse('{"dirty-amp.js":"/_build/dirty-amp.13a7bb24446136e5bc12.js","dirty-amp.js.map":"/_build/dirty-amp.13a7bb24446136e5bc12.js.map","preview.js":"/_build/preview.b7f0719b33afc51f34b8.js","preview.js.map":"/_build/preview.b7f0719b33afc51f34b8.js.map","register.js":"/_build/register.2d1902ee3dfbd8b23a73.js","register.js.map":"/_build/register.2d1902ee3dfbd8b23a73.js.map","thankyou.js":"/_build/thankyou.45f7131643d6be7087da.js","thankyou.js.map":"/_build/thankyou.45f7131643d6be7087da.js.map","sw.js":"/_build/sw.js","sw.js.map":"/_build/sw.js.map"}')},933:function(module,exports,__webpack_require__){__webpack_require__(934),__webpack_require__(1302),__webpack_require__(1303),__webpack_require__(1499),__webpack_require__(2109),__webpack_require__(2139),__webpack_require__(2144),__webpack_require__(2156),__webpack_require__(2158),__webpack_require__(2160),module.exports=__webpack_require__(2168)},96:function(module,__webpack_exports__,__webpack_require__){"use strict";var RequestProvider=__webpack_require__(14),compose=__webpack_require__(177),Ad=__webpack_require__(247),jsx_runtime=__webpack_require__(0),ads=__webpack_require__(325);const createAdUnitPath=(page,pageType,id,cleanAmp,thirdPartyAd)=>{const hierarchy=page.hierarchy?page.hierarchy.map(({path:path,sourcePath:sourcePath})=>(sourcePath||path).split("/").slice(-1)[0]):page.section.path.split("/").slice(1),{networkId:networkId,adUnitHomepage:adUnitHomepage,thirdPartyUnitHomepage:thirdPartyUnitHomepage}=ads.a[page.adConfig.data.publication.domain],ampAppend=cleanAmp?"_amp":"";return[networkId,`${thirdPartyAd?thirdPartyUnitHomepage:adUnitHomepage}${ampAppend}`,...["hp","main"].map((unit,i)=>hierarchy[i]?`${hierarchy[i]}${ampAppend}`:`${unit}${ampAppend}`).map(unit=>"in100_"+unit),""+pageType,""+(null==id?void 0:id.replace(/_\d+$/,""))]};__webpack_exports__.a=Object(compose.a)(RequestProvider.withRequest,MPU=>{const MPUWithBlock=props=>props.article||props.section?Object(jsx_runtime.jsx)(MPU,{...props}):null;return MPUWithBlock.propTypes={...MPU.propTypes},MPUWithBlock},MPU=>{const MPUWithAdUnitPathArr=({id:id,cleanAmp:cleanAmp,article:article,section:section,jsGlobals:jsGlobals,thirdPartyAd:thirdPartyAd=!1,...props})=>Object(jsx_runtime.jsx)(MPU,{id:id,cleanAmp:cleanAmp,adUnitPathArr:createAdUnitPath(article||section,jsGlobals.pageType,id,cleanAmp,thirdPartyAd),...props}),{adUnitPathArr:adUnitPathArr,...propTypes}=MPU.propTypes;return MPUWithAdUnitPathArr.propTypes=propTypes,MPUWithAdUnitPathArr})(Ad.default)},97:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return TOP_BANNER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BOTTOM_BANNER})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WALLPAPER})),__webpack_require__.d(__webpack_exports__,"b",(function(){return NATIVE})),__webpack_require__.d(__webpack_exports__,"e",(function(){return adConfiguration})),__webpack_require__.d(__webpack_exports__,"f",(function(){return adConfigurationByType}));const TOP_BANNER="TopBanner",BOTTOM_BANNER="BottomBanner",WALLPAPER="WallPaper",NATIVE="Native",adConfiguration=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.some(({type:type,value:value})=>type===needle&&!0===value),adConfigurationByType=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.find(({type:type})=>type===needle)||{}},983:function(module,exports){}},[[933,1,2]]]);
//# sourceMappingURL=main.3b07e279bd424baaf5a3.bundle.js.map