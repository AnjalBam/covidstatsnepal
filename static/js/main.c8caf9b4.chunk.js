(this["webpackJsonpcovidstats-nepal"]=this["webpackJsonpcovidstats-nepal"]||[]).push([[0],{188:function(e,t,a){e.exports=a(392)},193:function(e,t,a){},194:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(63),o=a.n(l),c=(a(193),a(194),a(11)),i=a(12),s=a(28),u=a(14),m=a(13),d=a(17),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={showMenu:!1},e.handleClick=e.handleClick.bind(Object(s.a)(e)),e.closeMenu=e.closeMenu.bind(Object(s.a)(e)),e}return Object(i.a)(a,[{key:"handleClick",value:function(e){var t=this;e.preventDefault(),this.setState((function(e){return{showMenu:!e.showMenu}}),(function(){document.addEventListener("click",t.closeMenu)}))}},{key:"closeMenu",value:function(){var e=this;this.setState({showMenu:!1},(function(){return document.removeEventListener("click",e.closeMenu)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("p",null,r.a.createElement(d.b,{to:"/"},"Covid",r.a.createElement("span",null,"STATS"),r.a.createElement("small",null,"Nepal")))),r.a.createElement("nav",null,r.a.createElement("div",{className:"menu",onClick:this.handleClick},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),this.state.showMenu?r.a.createElement("ul",{className:"navLinks"},r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav-link",to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav-link",to:"/view-by-country"},"View By Country")),r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav-link",to:"/imp-info"},"Important Info")),r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"))):null)))}}]),a}(n.Component),p=a(7),f=a(8);function E(){var e=Object(p.a)(["\n  padding: 1.5rem 1rem;\n  font-size: 2rem;\n  @media screen and (max-width: 400px) {\n    font-size: 1.5rem;\n  }\n  @media screen and (max-width: 320px) {\n    font-size: 1rem;\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(p.a)(["\n  padding: 1rem 1.5rem;\n  border-radius: 10rem;\n  border: none;\n  background-color: #0a4c97;\n  color: ",";\n  margin-bottom: 0.5rem;\n  transition: ease 0.3s;\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  &:hover {\n    background-color: #072d58;\n  }\n"]);return v=function(){return e},e}function b(){var e=Object(p.a)(["\n  padding: 1.5rem 0rem;\n  position: absolute;\n  width: auto;\n  margin: 0px 5px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background: ",";\n  font-size: 1.5rem;\n  @media screen and (max-width: 400px) {\n    font-size: 1rem;\n  }\n  @media screen and (max-width: 320px) {\n    font-size: 0.75rem;\n  }\n  color: ",";\n  border-radius: 1rem 1rem 0px 0px;\n"]);return b=function(){return e},e}function y(){var e=Object(p.a)(["\n  padding: 1rem;\n  border-radius: 10px;\n  background-color: #eee;\n  display: flex;\n  @media screen and (max-width: 1080px) {\n    display: block;\n    width: fit-content;\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(p.a)(["\n  margin-top: 1.5rem;\n  border-radius: 10px;\n"]);return w=function(){return e},e}function g(){var e=Object(p.a)(["\n  border-color: ",";\n  border-width: 2px;\n  margin: 1rem 0.5rem;\n"]);return g=function(){return e},e}function D(){var e=Object(p.a)(["\n  color: #e88;\n  a {\n    color: #2020e8;\n    &:hover {\n      text-decoration: underline;\n      color: #4040d8;\n    }\n  }\n"]);return D=function(){return e},e}function x(){var e=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  padding: 1rem;\n  @media screen and (max-width: 1080px) {\n    display: block;\n  }\n  & div {\n    padding: 0.5rem 2rem;\n  }\n  & div:nth-child(1) {\n    font-size: 2rem;\n    @media screen and (max-width: 400px) {\n      font-size: 1.5rem;\n    }\n    @media screen and (max-width: 320px) {\n      font-size: 1rem;\n    }\n    span {\n      color: #74a1ab;\n    }\n  }\n  & div:nth-child(2) {\n    font-size: 2rem;\n    @media screen and (max-width: 400px) {\n      font-size: 1.5rem;\n    }\n    @media screen and (max-width: 320px) {\n      font-size: 1rem;\n    }\n    span {\n      color: #b30000;\n    }\n  }\n  & div:nth-child(3) {\n    font-size: 2rem;\n    @media screen and (max-width: 400px) {\n      font-size: 1.5rem;\n    }\n    @media screen and (max-width: 320px) {\n      font-size: 1rem;\n    }\n    span {\n      color: #0fb77f;\n    }\n  }\n  & div:nth-child(4) {\n    font-size: 2rem;\n    @media screen and (max-width: 400px) {\n      font-size: 1.5rem;\n    }\n    @media screen and (max-width: 320px) {\n      font-size: 1rem;\n    }\n    span {\n      color: #a2682c;\n    }\n  }\n  & div:nth-child(5) {\n    font-size: 2rem;\n    @media screen and (max-width: 400px) {\n      font-size: 1.5rem;\n    }\n    @media screen and (max-width: 320px) {\n      font-size: 1rem;\n    }\n    span {\n      color: #57b9aa;\n    }\n  }\n"]);return x=function(){return e},e}function j(){var e=Object(p.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  p {\n    font-size: 2rem;\n    @media screen and (max-width: 400px) {\n      font-size: 1.5rem;\n    }\n    @media screen and (max-width: 320px) {\n      font-size: 1rem;\n    }\n    color: ",";\n  }\n  h6 {\n    font-weight: 300;\n  }\n  .newCases {\n    font-size: 1.5rem;\n    @media screen and (max-width: 400px) {\n      font-size: 1rem;\n    }\n    @media screen and (max-width: 320px) {\n      font-size: 0.75rem;\n    }\n    color: orangered;\n  }\n"]);return j=function(){return e},e}function C(){var e=Object(p.a)(["\n  font-size: 2.5rem;\n  @media screen and (max-width: 400px) {\n    font-size: 2rem;\n  }\n  @media screen and (max-width: 320px) {\n    font-size: 1.5rem;\n  }\n  color: white;\n  img {\n    padding-left: 1.5rem;\n    height: 2.5rem;\n    width: auto;\n  }\n"]);return C=function(){return e},e}function O(){var e=Object(p.a)(["\n  margin: 0px 10px;\n  padding: 1.5rem 2.5rem;\n"]);return O=function(){return e},e}function k(){var e=Object(p.a)(["\n  background: ",";\n  display: block;\n  padding: 0.5rem;\n  border-radius: 10px;\n  width: auto;\n  margin: 0px 0.5rem;\n  margin-bottom: 1rem;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);\n"]);return k=function(){return e},e}var T=f.a.div(k(),"#141b2b"),F=f.a.div(O()),S=f.a.p(C()),z=f.a.div(j(),"#f1f1f1","#f1f1f1"),N=f.a.div(x(),"#f1f1f1"),I=f.a.div(D()),L=f.a.hr(g(),"#141b2b"),B=Object(f.a)(F)(w()),A=(f.a.div(y()),f.a.div(b(),"#141b2b","#f1f1f1")),H=f.a.button(v(),"#f1f1f1"),M=f.a.div(E()),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement("div",null,"Copyright \xa9 2020 | ",r.a.createElement(d.b,{to:"/about"},"Anjal Bam"))))}}]),a}(n.Component),R=a(9),U=a.n(R);function P(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  padding-top: 0px;\n  & a {\n    height: 1.5rem;\n    display: block;\n    width: 1.5rem;\n    font-size: 2rem;\n    padding: 1rem 1.5rem;\n    transition: ease 0.3s;\n    &:hover {\n      font-size: 2.25rem;\n      color: orangered;\n    }\n  }\n"]);return P=function(){return e},e}function G(){var e=Object(p.a)(["\n  font-size: 1.5rem;\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1.5rem 0rem;\n\n  span {\n    font-size: 2rem;\n    text-align: left;\n    color: orangered;\n    font-weight: 600;\n  }\n  & a {\n    transition: ease 0.3s;\n    &:hover {\n      color: orangered;\n    }\n  }\n"]);return G=function(){return e},e}function V(){var e=Object(p.a)(["\n  font-weight: 500;\n  font-size: ",";\n  @media screen and (max-width: 400px) {\n    font-size: 2rem;\n  }\n  @media screen and (max-width: 320px) {\n    font-size: 1.5rem;\n  }\n"]);return V=function(){return e},e}function K(){var e=Object(p.a)(["\n  max-width: 1440px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return K=function(){return e},e}function q(){var e=Object(p.a)(["\n  padding: 1rem 1.5rem;\n  border-radius: 10rem;\n  border: none;\n  background-color: #0a4c97;\n  color: ",";\n  margin-bottom: 0.5rem;\n  transition: ease 0.3s;\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  &:hover {\n    background-color: #072d58;\n  }\n"]);return q=function(){return e},e}function J(){var e=Object(p.a)(["\n  font-size: 1.25rem;\n  color: orangered;\n  &#totalDeaths {\n    color: ",";\n  }\n  &#totalRecovered {\n    color: ",";\n  }\n  &#totalCases {\n    color: ",";\n  }\n  &#totalCases {\n    color: ",";\n  }\n  &#activeCases {\n    color: ",";\n  }\n  &#newCases {\n    color: ",";\n  }\n  &#newDeaths {\n    color: ",";\n  }\n  &#totalTests {\n    color: ",";\n  }\n  &#criticalCases {\n    color: ",";\n  }\n"]);return J=function(){return e},e}function Y(){var e=Object(p.a)(["\n  font-size: 1.5rem;\n  color: white;\n  font-weight: 400;\n"]);return Y=function(){return e},e}function _(){var e=Object(p.a)(["\n  padding: 1rem 1.5rem;\n"]);return _=function(){return e},e}function Q(){var e=Object(p.a)(["\n  padding: 10px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media screen and (max-width: 620px) {\n    display: block;\n  }\n"]);return Q=function(){return e},e}function X(){var e=Object(p.a)(["\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 400;\n  & h1 {\n    font-size: 2.5rem;\n    @media screen and (max-width: 400px) {\n      font-size: 2rem;\n    }\n    @media screen and (max-width: 320px) {\n      font-size: 1.5rem;\n    }\n    font-weight: 400;\n    span {\n      font-size: 0.75rem;\n    }\n  }\n  & img {\n    padding: 0px 1rem;\n    height: 2.5rem;\n    @media screen and (max-width: 400px) {\n      height: 2rem;\n    }\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(p.a)(["\n  background: ",";\n  display: block;\n  padding: 0.5rem;\n  border-radius: 10px;\n  width: auto;\n  margin: 0px 0.5rem;\n  margin-bottom: 1rem;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);\n  color: ",";\n"]);return Z=function(){return e},e}var $=f.a.div(Z(),(function(e){return e.important?"#0e1118":"#141b2b"}),"#f1f1f1"),ee=f.a.div(X(),"#f1f1f1"),te=f.a.div(Q()),ae=f.a.div(_()),ne=f.a.h1(Y()),re=f.a.p(J(),"#b30000","#0fb77f","#74a1ab","#74a1ab","#a2682c","#FF5A5F","#DD1155","#57b9aa","#97D2FB"),le=f.a.button(q(),"#f1f1f1"),oe=f.a.div(K()),ce=f.a.h1(V(),(function(e){return e.secondary?"2rem":"3rem"})),ie=f.a.p(G()),se=f.a.div(P()),ue=a(25);function me(){var e=Object(p.a)(["\n  color: #f7f7f7;\n"]);return me=function(){return e},e}var de=f.a.h4(me()),he=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={width:500,height:400},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#1b2e4f",padding:32,display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",borderRadius:10,flexDirection:"column"}},r.a.createElement(de,null,"The Graphical Data For Last 30 Days is shown below:"),(e=this.props.data,t=this.state.width,a=this.state.height,r.a.createElement(ue.c,{width:t,height:a,data:e,margin:{left:40,right:5,top:5,bottom:5}},r.a.createElement(ue.e,{dataKey:"dates"}),r.a.createElement(ue.f,null),r.a.createElement(ue.d,{contentStyle:{background:"#efefef",borderRadius:5}}),r.a.createElement(ue.a,{verticalAlign:"top",wrapperStyle:{color:"#f7f7f7"}}),r.a.createElement(ue.b,{type:"monotone",dataKey:"cases",stroke:"#40bfe6",strokeWidth:5}),r.a.createElement(ue.b,{type:"monotone",dataKey:"deaths",stroke:"#b4001e",strokeWidth:5}),r.a.createElement(ue.b,{type:"monotone",dataKey:"recovered",stroke:"#00ce9a",strokeWidth:5}))));var e,t,a}}]),a}(n.Component),pe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidUpdate=function(e,t){if(n.props.countryInfo&&e!==n.props&&null!==n.props){var a=new Date(n.props.data.updated).toUTCString();n.setState({countryData:n.props.data,updatedDate:a,countryInfo:n.props.countryInfo,countryHistoricalData:[],hasHistoricalData:!1,isChartShown:!1,showCharts:!1})}},n.getDetails=function(){return r.a.createElement("div",null,r.a.createElement(ee,null,r.a.createElement("h1",null,"Covid-19 and ",n.state.countryData.country,r.a.createElement("br",null)),r.a.createElement("img",{src:n.state.countryInfo.flag,alt:"CountryFlag"})),r.a.createElement("div",null,r.a.createElement("span",null,"Last Updated:",n.state.updatedDate)),r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement(ae,null,r.a.createElement(ne,null,"Total Cases:"),r.a.createElement(re,{id:"totalCases"},n.state.countryData.cases)),r.a.createElement(ae,null,r.a.createElement(ne,null,"Total Deaths:"),r.a.createElement(re,{id:"totalDeaths"},n.state.countryData.deaths)),r.a.createElement(ae,null,r.a.createElement(ne,null,"Total Recovered:"),r.a.createElement(re,{id:"totalRecovered"},n.state.countryData.recovered))),r.a.createElement(te,null,r.a.createElement(ae,null,r.a.createElement(ne,null,"Total Active Cases:"),r.a.createElement(re,{id:"activeCases"},n.state.countryData.active)),r.a.createElement(ae,null,r.a.createElement(ne,null,"New Cases Today:"),r.a.createElement(re,{id:"newCases"},n.state.countryData.todayCases)),r.a.createElement(ae,null,r.a.createElement(ne,null,"New Deaths Today:"),r.a.createElement(re,{id:"newDeaths"},n.state.countryData.todayDeaths))),r.a.createElement(te,null,r.a.createElement(ae,null,r.a.createElement(ne,null,"Total Tests:"),r.a.createElement(re,{id:"totalTests"},n.state.countryData.tests)),r.a.createElement(ae,null,r.a.createElement(ne,null,"Critical cases:"),r.a.createElement(re,{id:"criticalCases"},n.state.countryData.critical)))),r.a.createElement(le,{type:"button",onClick:n.handleClick},n.state.isChartShown?"Hide Graphical Data":"View Graphical Data"),n.state.showCharts?n.state.hasHistoricalData?r.a.createElement(he,{data:n.state.countryHistoricalData}):r.a.createElement(U.a,{type:"ThreeDots",color:"#00bfff",height:50,width:50}):null)},n.handleClick=function(){n.setChartData(),n.setState((function(e){return{showCharts:!e.showCharts,isChartShown:!e.isChartShown}}))},n.state={countryData:{},countryInfo:{},updatedDate:"",countryHistoricalData:[],hasHistoricalData:!1,isChartShown:!1,showCharts:!1},n}return Object(i.a)(a,[{key:"setChartData",value:function(){var e=this;if(this.state.countryData.country){var t=this.state.countryData.country,a="https://disease.sh/v2/historical/".concat(t,"?lastdays=30");fetch(a).then((function(e){return e.json()})).then((function(t){for(var a=Object.values(t.timeline.cases),n=Object.values(t.timeline.recovered),r=Object.values(t.timeline.deaths),l=Object.keys(t.timeline.cases),o=[],c=0;c<l.length;c++){var i={date:"",cases:"",deaths:"",recovered:""};i.date=l[c],i.cases=a[c],i.recovered=n[c],i.deaths=r[c],o.push(i)}e.setState({countryHistoricalData:o,hasHistoricalData:!0})}))}}},{key:"render",value:function(){return console.log(this.state.countryData),r.a.createElement($,null,this.state.countryData.country?this.getDetails():r.a.createElement("h1",null,"Please Search for some Data"))}}]),a}(n.Component),fe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getCountryNames=function(e){return e.map((function(e){return e.country}))},n.handelChange=function(e){n.setState({countryValue:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.getCountryData();n.setState({countryData:t,countryInfo:t.countryInfo})},n.getCountryData=function(){var e={};return n.state.allData.filter((function(t){return n.state.countryValue===t.country&&(e=t),null})),e},n.state={allData:[],countryValue:"",countries:[],isDataLoaded:!1,countryData:{},countryInfo:{}},n.handelChange=n.handelChange.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://disease.sh/v2/countries").then((function(e){return e.json()})).then((function(t){var a=e.getCountryNames(t);return e.setState({countries:a,allData:t,isDataLoaded:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{minHeight:"80vh"}},r.a.createElement(T,{style:{borderRadius:"0px 0px 10px 10px"}},r.a.createElement(M,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("input",{className:"inputField",list:"countryList",value:this.state.countryValue,onChange:this.handelChange}),r.a.createElement("datalist",{id:"countryList",size:4},this.state.countries.map((function(e,t){return r.a.createElement("option",{className:"data",key:t,value:e})})))),r.a.createElement("div",null,r.a.createElement(le,{type:"submit"},"Get Data"))))),r.a.createElement("div",null,this.state.isDataLoaded?r.a.createElement(pe,{data:this.state.countryData,countryInfo:this.state.countryInfo}):r.a.createElement(U.a,{type:"Circles",color:"#00BFFF",height:80,width:80})))}}]),a}(n.Component),Ee=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={worldData:{},updatedTime:"",isChartShown:!1,showCharts:!1,data:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://disease.sh/v2/all").then((function(e){return e.json()})).then((function(t){var a=new Date(t.updated).toUTCString();e.setState({worldData:t,updatedTime:a})}));fetch("https://disease.sh/v2/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(t){for(var a=Object.values(t.cases),n=Object.values(t.recovered),r=Object.values(t.deaths),l=Object.keys(t.cases),o=[],c=0;c<l.length;c++){var i={date:"",cases:"",deaths:"",recovered:""};i.date=l[c],i.cases=a[c],i.recovered=n[c],i.deaths=r[c],o.push(i)}e.setState({data:o})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B,null,r.a.createElement(S,null,"World Statistics"),r.a.createElement("h6",{style:{color:"#f7f7f7"}},"Last Updated:"," ",this.state.updatedTime?r.a.createElement("span",null,this.state.updatedTime):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:20,width:20}))),r.a.createElement(N,null,r.a.createElement("div",null,"Total Cases: ",r.a.createElement("br",null),this.state.worldData.cases?r.a.createElement("span",null,this.state.worldData.cases.toLocaleString()):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Total Deaths: ",r.a.createElement("br",null),this.state.worldData.cases?r.a.createElement("span",null,this.state.worldData.deaths.toLocaleString()):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Total recovered: ",r.a.createElement("br",null),this.state.worldData.recovered?r.a.createElement("span",null,this.state.worldData.recovered.toLocaleString()):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Total Active Cases: ",r.a.createElement("br",null),this.state.worldData.active?r.a.createElement("span",null,this.state.worldData.active.toLocaleString()):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40})))),r.a.createElement(N,null,r.a.createElement("div",null,"Total Tests: ",r.a.createElement("br",null),this.state.worldData.cases?r.a.createElement("span",null,this.state.worldData.tests.toLocaleString()):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Total Deaths Today: ",r.a.createElement("br",null),this.state.worldData.cases?r.a.createElement("span",null,this.state.worldData.todayDeaths.toLocaleString()):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Critical Cases: ",r.a.createElement("br",null),this.state.worldData.recovered?r.a.createElement("span",null,this.state.worldData.critical.toLocaleString()):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"New Cases Today: ",r.a.createElement("br",null),this.state.worldData.active?r.a.createElement("span",null,this.state.worldData.todayCases.toLocaleString()):r.a.createElement("span",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40})))),r.a.createElement(H,{title:"Last 30 days",onClick:function(){return e.setState((function(e){return{showCharts:!e.showCharts,isChartShown:!e.isChartShown}}))}},this.state.isChartShown?"Hide Graphical Data":"View Data Graphically"),this.state.showCharts?r.a.createElement(he,{data:this.state.data}):null))}}]),a}(n.Component),ve=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={npData:{},npUpdated:"",nepalInfo:{},nepalHistoricalData:[],isChartShown:!1,showCharts:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://disease.sh/v2/countries/nepal?yesterday=0&strict=true").then((function(e){return e.json()})).then((function(t){var a=new Date(t.updated).toUTCString();return e.setState({npData:t,npUpdated:a,nepalInfo:t.countryInfo})}));fetch("https://disease.sh/v2/historical/Nepal?lastdays=30").then((function(e){return e.json()})).then((function(t){for(var a=Object.values(t.timeline.cases),n=Object.values(t.timeline.recovered),r=Object.values(t.timeline.deaths),l=Object.keys(t.timeline.cases),o=[],c=0;c<l.length;c++){var i={date:"",cases:"",deaths:"",recovered:""};i.date=l[c],i.cases=a[c],i.recovered=n[c],i.deaths=r[c],o.push(i)}e.setState({nepalHistoricalData:o})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{style:{borderRadius:"0px 0px 10px 10px"}},r.a.createElement(F,null,r.a.createElement(S,null,"Covid-19 And Nepal",r.a.createElement("img",{src:this.state.nepalInfo.flag,alt:"Nepal"})),r.a.createElement(z,null,r.a.createElement("h6",null,"Last Updated:"," ",this.state.npUpdated?r.a.createElement("span",null,this.state.npUpdated):r.a.createElement("div",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:20,width:20}))),r.a.createElement(N,null,r.a.createElement("div",null,"Total Cases: ",r.a.createElement("br",null),this.state.npData.cases?r.a.createElement("span",null,this.state.npData.cases.toLocaleString()):r.a.createElement("div",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Total Deaths: ",r.a.createElement("br",null),this.state.npData.cases?r.a.createElement("span",null,this.state.npData.deaths.toLocaleString()):r.a.createElement("div",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Total recovered: ",r.a.createElement("br",null),this.state.npData.recovered?r.a.createElement("span",null,this.state.npData.recovered.toLocaleString()):r.a.createElement("div",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Total Active Cases: ",r.a.createElement("br",null),this.state.npData.active?r.a.createElement("span",null,this.state.npData.active.toLocaleString()):r.a.createElement("div",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))),r.a.createElement("div",null,"Total Tests Done: ",r.a.createElement("br",null),this.state.npData.tests?r.a.createElement("span",null,this.state.npData.tests.toLocaleString()):r.a.createElement("div",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40})))),r.a.createElement("div",{className:"newCases"},"New Cases Today:"," ",this.state.npData.todayCases?r.a.createElement("span",null,this.state.npData.todayCases.toLocaleString()):r.a.createElement("div",null,r.a.createElement(U.a,{type:"ThreeDots",color:"#00BFFF",height:40,width:40}))," ")),r.a.createElement(H,{title:"Last 30 days",onClick:function(){return e.setState((function(e){return{showCharts:!e.showCharts,isChartShown:!e.isChartShown}}))}},this.state.isChartShown?"Hide Graphical Data":"View Data Graphically"),this.state.showCharts?r.a.createElement(he,{data:this.state.nepalHistoricalData}):null,r.a.createElement(L,null),r.a.createElement(I,null,r.a.createElement("p",null,"For More Detailed Info"," ",r.a.createElement(d.b,{to:"/view-by-country"},"click here."))))),r.a.createElement(T,null,r.a.createElement(Ee,null)))}}]),a}(n.Component),be=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(oe,null,r.a.createElement($,{style:{borderRadius:"0px 0px 10px 10px"}},r.a.createElement(ce,null,"About The Project?")),r.a.createElement($,null,r.a.createElement("div",null,r.a.createElement(ie,null,"The CovidStatsNepal is an corona virus data tracking web application that uses data provided by various APIs and shows them in a graphical as well as the statistical form. The grapical representation of the data helps the study of nature of data that includes how the virus spread.",r.a.createElement("br",null),r.a.createElement("br",null),"P.S.: This Web App was made by Anjal Bam just to practice skills acquired in web development."))),r.a.createElement($,null,r.a.createElement(ce,null,"About The Developer?")),r.a.createElement($,null,r.a.createElement(ie,null,r.a.createElement("span",null,"Anjal Bam")," ",r.a.createElement("br",null),"I am a self-taught web developer and an engineering student at ",r.a.createElement("strong",null,"Thapathali Campus, IOE")," ","currently living in Kathmandu.",r.a.createElement("br",null),"I am a tech enthusiast and currently persuing my Bachelors in Electronics Communication and Information Engineering, and foresee my career as a full-stack web developer as a MERN stack and Python Django full-stack web developer."),r.a.createElement(ie,null,"Contact:"),r.a.createElement(se,null,r.a.createElement("a",{href:"https://www.facebook.com/anjal.bam.9"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("a",{href:"https://www.instagram.com/the_anjalbam/"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"https://github.com/AnjalBam"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/anjal-bam-a614b21aa/"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://twitter.com/AnjalBam3"},r.a.createElement("i",{className:"fab fa-twitter"})))))}}]),a}(n.Component),ye=function(){return r.a.createElement(oe,null,r.a.createElement($,{style:{borderRadius:"0px 0px 10px 10px"}},r.a.createElement(ce,null,"Important Info")),r.a.createElement($,{important:!0},r.a.createElement(ie,null,"We Know this is a hard time for everyone during the pandemic and I personally request you all not to believe everything you hear.",r.a.createElement("br",null),"And Most importantly, ",r.a.createElement("strong",null,"DON'T PANIC!"),r.a.createElement("br",null),r.a.createElement("strong",null,"STAY AT HOME!"))),r.a.createElement($,null,r.a.createElement(ce,{secondary:!0,style:{textAlign:"left",paddingLeft:"4rem",paddingTop:"1rem"}},"What can we do to prevent the virus?"),r.a.createElement(ie,null,r.a.createElement("ul",{style:{textAlign:"left"}},r.a.createElement("li",null,"Wash your hands frequently."),r.a.createElement("li",null,"Only go out whenever it's necessary."),r.a.createElement("li",null,"Wear masks whenever you go out."),r.a.createElement("li",null,"Avoid Physical Contact with People.")))),r.a.createElement($,null,r.a.createElement(ce,{secondary:!0},"Don't rely on ",r.a.createElement("strong",null,"Fake News!")),r.a.createElement(ie,null,"I would again like to inform you all that even in this serious pandemic situation too, there are so many news portals and various media sources that are spreading fake news just to get more views to their page and trying to use our fear for their business.",r.a.createElement("br",null),"So, please don't trust everything you see and hear on Facebook, Instagram, Whatsapp, etc. and only believe the news from authorised personnel only.")),r.a.createElement($,null,r.a.createElement(ce,{secondary:!0},"Important Links:"),r.a.createElement(ie,null,r.a.createElement("a",{title:"mohp",href:"https://mohp.gov.np/home/"},"Ministry Of Health and Population, Nepal")," ",r.a.createElement("br",null),r.a.createElement("a",{title:"WHO",href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"World Health Organisation"))))},we=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($,{important:!0,style:{marginTop:"1rem"}},r.a.createElement(ce,null,"Error-404"),r.a.createElement(ie,null,"The page you requested couldn't be found."),r.a.createElement(ie,null,r.a.createElement(d.b,{to:"/home"},"Return Home"))))}}]),a}(n.Component),ge=a(10),De=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.c,null,r.a.createElement(ge.a,{exact:!0,path:"/home",component:ve}),r.a.createElement(ge.a,{ecact:!0,path:"/view-by-country",component:fe}),r.a.createElement(ge.a,{exact:!0,path:"/about",component:be}),r.a.createElement(ge.a,{exact:!0,path:"/imp-info",component:ye}),r.a.createElement(ge.a,{component:we})))}}]),a}(n.Component),xe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(h,null),r.a.createElement(De,null),r.a.createElement(W,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(xe,null)),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.c8caf9b4.chunk.js.map