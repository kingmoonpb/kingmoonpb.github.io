webpackJsonp([2],{"/i/f":function(t,i,n){"use strict";var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},a=[],e={render:s,staticRenderFns:a};i.a=e},"5s8p":function(t,i,n){i=t.exports=n("FZ+f")(!0),i.push([t.i,".music-list[data-v-334c5192]{position:fixed;z-index:100;top:0;right:0;bottom:0;left:0;background:#222}.music-list .back[data-v-334c5192]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-334c5192]{display:block;padding:10px;font-size:20px;color:#ffcd32}.music-list .title[data-v-334c5192]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-334c5192]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-334c5192]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-334c5192]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-334c5192]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-334c5192]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-334c5192]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-334c5192]{position:relative;height:100%;background:#222}.music-list .list[data-v-334c5192]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-334c5192]{padding:20px 30px}.music-list .list .loading-wrapper[data-v-334c5192]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/kmbp/Vue-Music-master/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,QAAS,AACT,SAAU,AACV,OAAQ,AACR,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,oDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-334c5192] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #222;\n}\n.music-list .back[data-v-334c5192] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-334c5192] {\n  display: block;\n  padding: 10px;\n  font-size: 20px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-334c5192] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-334c5192] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-334c5192] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-334c5192] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-334c5192] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-334c5192] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-334c5192] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-334c5192] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-334c5192] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-334c5192] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-wrapper[data-v-334c5192] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},"9qbo":function(t,i,n){var s=n("5s8p");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("463f4c34",s,!0,{})},FOPf:function(t,i,n){"use strict";var s=n("Dd8w"),a=n.n(s),e=n("kvay"),o=n("cUSj"),A=n("m40h"),l=n("T452"),r=n("NYxO");i.a={components:{MusicList:e.a},data:function(){return{songs:[]}},computed:a()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},n.i(r.a)(["disc"])),created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push("/recommend");n.i(A.a)(this.disc.dissid).then(function(i){i.code===l.b&&(t.songs=t._normalizeSongs(i.cdlist[0].songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){t.songid&&t.albummid&&i.push(n.i(o.b)(t))}),i}}}},HwMW:function(t,i,n){i=t.exports=n("FZ+f")(!0),i.push([t.i,".slide-enter-active[data-v-00049f65],.slide-leave-active[data-v-00049f65]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-00049f65],.slide-leave-to[data-v-00049f65]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["C:/Users/kmbp/Vue-Music-master/src/components/disc/disc.vue"],names:[],mappings:"AACA,0EAEE,2BAA6B,AAC7B,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"disc.vue",sourcesContent:["\n.slide-enter-active[data-v-00049f65],\n.slide-leave-active[data-v-00049f65] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-00049f65],\n.slide-leave-to[data-v-00049f65] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},NSSj:function(t,i,n){"use strict";function s(t){n("iplO")}Object.defineProperty(i,"__esModule",{value:!0});var a=n("FOPf"),e=n("/i/f"),o=n("VU/8"),A=s,l=o(a.a,e.a,!1,A,"data-v-00049f65",null);i.default=l.exports},OCI7:function(t,i,n){"use strict";var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[n("i",{staticClass:"icon-play"}),t._v(" "),n("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),n("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),n("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),n("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),t.songs.length?t._e():n("div",{staticClass:"loading-container"},[n("loading")],1)])],1)},a=[],e={render:s,staticRenderFns:a};i.a=e},YMwN:function(t,i,n){"use strict";var s=n("Dd8w"),a=n.n(s),e=n("y/jF"),o=n("qwAB"),A=n("ZV4u"),l=n("3Q4o"),r=n("F4+m"),c=n("NYxO"),d=n.i(l.a)("transform"),p=n.i(l.a)("backdrop-filter");i.a={mixins:[r.c],components:{Loading:e.a,Scroll:o.a,SongList:A.a},props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},watch:{scrollY:function(t){var i=Math.max(this.minTransalteY,t),n=1,s=0,a=0,e=Math.abs(t/this.imageHeight);t>0?(n=1+e,s=10):a=Math.min(20,20*e),this.$refs.layer.style[d]="translate3d(0,"+i+"px,0)",this.$refs.filter.style[p]="blur("+a+"px)",t<this.minTransalteY?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[d]="scale("+n+")",this.$refs.bgImage.style.zIndex=s}},computed:{bgStyle:function(){return"background-image: url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},n.i(c.c)(["selectPlay","randomPlay"]))}},iplO:function(t,i,n){var s=n("HwMW");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("0ced31f1",s,!0,{})},kvay:function(t,i,n){"use strict";function s(t){n("9qbo")}var a=n("YMwN"),e=n("OCI7"),o=n("VU/8"),A=s,l=o(a.a,e.a,!1,A,"data-v-334c5192",null);i.a=l.exports},m40h:function(t,i,n){"use strict";function s(){var t=r()({},d.a,{platform:"h5",uin:0,needNewCode:1});return n.i(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,d.c)}function a(){var t=r()({},d.a,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return g.a.get("/api/getDiscList",{params:t}).then(function(t){return A.a.resolve(t.data)})}function e(t){var i=r()({},{disstid:t,type:1,json:1,utf8:1,onlysong:0,format:"jsonp",g_tk:5381,jsonpCallback:"playlistinfoCallback",loginUin:0,hostUin:0,inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0});return g.a.get("/api/getSongList",{params:i}).then(function(t){var i=t.data.substring(21,t.data.length-1);return i=JSON.parse(i),A.a.resolve(i)})}i.b=s,i.c=a,i.a=e;var o=n("//Fk"),A=n.n(o),l=n("woOf"),r=n.n(l),c=n("Gak4"),d=n("T452"),p=n("mtWM"),g=n.n(p)}});
//# sourceMappingURL=2.1a99d2c08360fcc70380.js.map