webpackJsonp([5],{BRgg:function(t,e,n){"use strict";function i(){var t=A()({},l.a,{uin:0,needNewCode:1,platform:"h5"});return n.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function a(t){var e=A()({},l.a,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return n.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,l.c)}e.b=i,e.a=a;var o=n("woOf"),A=n.n(o),s=n("Gak4"),l=n("T452")},Kjo5:function(t,e,n){"use strict";function i(t){n("yYmP")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("L4OO"),o=n("M6r8"),A=n("VU/8"),s=i,l=A(a.a,o.a,!1,s,"data-v-6ee9be6a",null);e.default=l.exports},L4OO:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),o=n("qwAB"),A=n("y/jF"),s=n("BRgg"),l=n("T452"),r=n("F4+m"),p=n("NYxO");e.a={mixins:[r.c],components:{Scroll:o.a,Loading:A.a},data:function(){return{topList:[]}},watch:{topList:function(){var t=this;setTimeout(function(){t.$Lazyload.lazyLoadHandler()},20)}},created:function(){this._getTopList()},methods:a()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.toplist.refresh()},_getTopList:function(){var t=this;n.i(s.b)().then(function(e){e.code===l.b&&(t.topList=e.data.topList)})},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)}},n.i(p.b)({setTopList:"SET_TOP_LIST"}))}},M6r8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rank",staticClass:"rank"},[n("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[n("ul",t._l(t.topList,function(e){return n("li",{staticClass:"item",on:{click:function(n){return t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),n("ul",{staticClass:"songlist"},t._l(e.songList,function(e,i){return n("li",{staticClass:"song"},[n("span",[t._v(t._s(i+1))]),t._v(" "),n("span",[t._v(t._s(e.songname)+"-"+t._s(e.singername))])])}),0)])}),0),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[n("loading")],1)]),t._v(" "),n("router-view")],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},QCde:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".rank[data-v-6ee9be6a]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-6ee9be6a]{height:100%;overflow:hidden}.rank .toplist .item[data-v-6ee9be6a]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-6ee9be6a]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-6ee9be6a]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-6ee9be6a]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-6ee9be6a]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-6ee9be6a]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/kmbp/Vue-Music-master/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACf,AACD,gDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"rank.vue",sourcesContent:["\n.rank[data-v-6ee9be6a] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-6ee9be6a] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-6ee9be6a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-6ee9be6a]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-6ee9be6a] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-6ee9be6a] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-6ee9be6a] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-6ee9be6a] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},yYmP:function(t,e,n){var i=n("QCde");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("147d155b",i,!0,{})}});
//# sourceMappingURL=5.016ca3cfda02282ce0f0.js.map