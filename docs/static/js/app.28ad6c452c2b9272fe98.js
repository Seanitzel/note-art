webpackJsonp([1],{"60Of":function(t,e,i){"use strict";e.a=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};var n=i("BO1k");i.n(n)},"787E":function(t,e,i){"use strict";var n=i("Zrlr"),s=i.n(n),o=i("wxAW"),h=i.n(o),a=(i("D+dc"),function(){function t(e,i,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;s()(this,t),this.root=e.clone(),this.third=i.clone(),this.fifth=n.clone(),this.isChord=!0,this.third.octave=this.root.octave,this.fifth.octave=this.root.octave,this.root.index>this.third.index&&(this.third.octave=this.root.octave+1),this.root.index>this.fifth.index&&(this.fifth.octave=this.root.octave+1),this.root.getInterval(4).isEqual(this.third)?this.root.getInterval(7).isEqual(this.fifth)?null==o?(this.type="Major",this.symbol=""):(this.note4=o,this.root.getInterval(5).isEqual(this.note4)?(this.type="Added Fourth",this.symbol="add4"):this.root.getInterval(9).isEqual(this.note4)?null==h?(this.note5=h,this.type="Sixth",this.symbol="6"):this.root.getInterval(14).isEqual(this.note5)?(this.type="Six Nine",this.symbol="6/9"):this.isChord=!1:this.root.getInterval(11).isEqual(this.note4)?null==h?(this.type="Major 7th",this.symbol="Maj7"):(this.note5=h,this.root.getInterval(14).isEqual(h)?(this.type="Major Ninth",this.symbol="Maj9"):this.root.getInterval(17).isEqual(h)?(this.type="Major Eleventh",this.symbol="Maj11"):this.root.getInterval(21).isEqual(h)?(this.type="Major Thirteenth",this.symbol="Maj13"):this.root.getInterval(18).isEqual(h)?(this.type="Major Seven Sharp Eleventh",this.symbol="Maj7#11"):this.isChord=!1):this.root.getInterval(10).isEqual(this.note4)&&(null==h?(this.type="Seventh",this.symbol="7"):(this.note5=h,this.root.getInterval(14).isEqual(h)?(this.type="Ninth",this.symbol="9"):this.root.getInterval(17).isEqual(h)?(this.type="Eleventh",this.symbol="11"):this.root.getInterval(21).isEqual(h)&&(this.type="Thirteenth",this.symbol="13")))):this.root.getInterval(6).isEqual(this.fifth)?(this.type="Major Flat Fifth",this.symbol="b5"):this.root.getInterval(8).isEqual(this.fifth)&&(this.type="Major Augmented Fifth",this.symbol="aug"):this.root.getInterval(3).isEqual(this.third)&&(this.root.getInterval(7).isEqual(this.fifth)?null==o?(this.type="Minor",this.symbol="m"):(this.note4=o.clone(),this.root.getInterval(5).isEqual(this.note4)?(this.type="Minor Added Fourth",this.symbol="madd4"):this.root.getInterval(9).isEqual(this.note4)?null==h?(this.note5=h,this.type="Minor Sixth",this.symbol="m6"):this.root.getInterval(14).isEqual(this.note5)?(this.type="Minor Six Nine",this.symbol="m6/9"):this.isChord=!1:this.root.getInterval(10).isEqual(this.note4)&&(null==h?(this.type="Minor Seventh",this.symbol="m7"):(this.note5=h.clone(),this.root.getInterval(14).isEqual(h)?(this.type="Minor Ninth",this.symbol="m9"):this.root.getInterval(17).isEqual(h)?(this.type="Minor Eleventh",this.symbol="m11"):this.root.getInterval(21).isEqual(h)?(this.type="Minor Thirteenth",this.symbol="m13"):this.isChord=!1))):this.root.getInterval(6).isEqual(this.fifth)&&(null==this.note4?(this.type="Diminished",this.symbol="dim"):(this.note4=o,this.root.getInterval(9).isEqual(this.note4)&&(this.type="Diminished Seventh",this.symbol="dim7")))),void 0==this.type&&(this.root.lang="#"==this.root.lang?"b":"#",this.root.getInterval(4).isEqual(this.third)?this.root.getInterval(7).isEqual(this.fifth)?null==o?(this.type="Major",this.symbol=""):(this.note4=o,this.root.getInterval(5).isEqual(this.note4)?(this.type="Added Fourth",this.symbol="add4"):this.root.getInterval(9).isEqual(this.note4)?null==h?(this.note5=h,this.type="Sixth",this.symbol="6"):this.root.getInterval(14).isEqual(this.note5)?(this.type="Six Nine",this.symbol="6/9"):this.isChord=!1:this.root.getInterval(11).isEqual(this.note4)?null==h?(this.type="Major 7th",this.symbol="Maj7"):(this.note5=h,this.root.getInterval(14).isEqual(h)?(this.type="Major Ninth",this.symbol="Maj9"):this.root.getInterval(17).isEqual(h)?(this.type="Major Eleventh",this.symbol="Maj11"):this.root.getInterval(21).isEqual(h)?(this.type="Major Thirteenth",this.symbol="Maj13"):this.root.getInterval(18).isEqual(h)?(this.type="Major Seven Sharp Eleventh",this.symbol="Maj7#11"):this.isChord=!1):this.root.getInterval(10).isEqual(this.note4)&&(null==h?(this.type="Seventh",this.symbol="7"):(this.note5=h,this.root.getInterval(14).isEqual(h)?(this.type="Ninth",this.symbol="9"):this.root.getInterval(17).isEqual(h)?(this.type="Eleventh",this.symbol="11"):this.root.getInterval(21).isEqual(h)&&(this.type="Thirteenth",this.symbol="13")))):this.root.getInterval(6).isEqual(this.fifth)?(this.type="Major Flat Fifth",this.symbol="b5"):this.root.getInterval(8).isEqual(this.fifth)&&(this.type="Major Augmented Fifth",this.symbol="aug"):this.root.getInterval(3).isEqual(this.third)&&(this.root.getInterval(7).isEqual(this.fifth)?null==o?(this.type="Minor",this.symbol="m"):(this.note4=o,this.root.getInterval(5).isEqual(this.note4)?(this.type="Minor Added Fourth",this.symbol="madd4"):this.root.getInterval(9).isEqual(this.note4)?null==h?(this.note5=h,this.type="Minor Sixth",this.symbol="m6"):this.root.getInterval(14).isEqual(this.note5)?(this.type="Minor Six Nine",this.symbol="m6/9"):this.isChord=!1:this.root.getInterval(10).isEqual(this.note4)&&(null==h?(this.type="Minor Seventh",this.symbol="m7"):(this.note5=h,this.root.getInterval(14).isEqual(h)?(this.type="Minor Ninth",this.symbol="m9"):this.root.getInterval(17).isEqual(h)?(this.type="Minor Eleventh",this.symbol="m11"):this.root.getInterval(21).isEqual(h)?(this.type="Minor Thirteenth",this.symbol="m13"):this.isChord=!1))):this.root.getInterval(6).isEqual(this.fifth)&&(null==this.note4?(this.type="Diminished",this.symbol="dim"):(this.note4=o,this.root.getInterval(9).isEqual(this.note4)&&(this.type="Diminished Seventh",this.symbol="dim7"))))),null==this.note4?this.chord_notes=[this.root,this.third,this.fifth]:null==this.note5?this.chord_notes=[this.root,this.third,this.fifth,this.note4]:this.chord_notes=[this.root,this.third,this.fifth,this.note4,this.note5]}return h()(t,[{key:"playsMelody",value:function(){for(var t=this,e=function(e){setTimeout(function(){t.chord_notes[e].play()},500*e)},i=0;i<this.chord_notes.length;i++)e(i);console.log(this.chord_notes)}},{key:"play",value:function(){for(var t=0;t<this.chord_notes.length;t++)this.chord_notes[t].play()}},{key:"rootPosition",value:function(){return this.third._octave=this.root._octave,this.fifth._octave=this.root._octave,this}},{key:"inversionFirst",value:function(){return this.root._octave=this.root._octave+1,this}},{key:"inversionSecond",value:function(){return this.root.octave=this.root.octave+1,this.third.octave=this.third.octave+1,this}},{key:"toString",value:function(){return void 0==this.symbol?null==this.note4?this.root.note+" {"+this.root+", "+this.third+", "+this.fifth+"}":null==this.note5?this.root.note+" {"+this.root+", "+this.third+", "+this.fifth+", "+this.note4+"}":this.root.note+" {"+this.root+", "+this.third+", "+this.fifth+", "+this.note4+", "+this.note5+"}":null==this.note4?this.root.note+this.symbol+" {"+this.root+", "+this.third+", "+this.fifth+"}":null==this.note5?this.root.note+this.symbol+" {"+this.root+", "+this.third+", "+this.fifth+", "+this.note4+"}":this.root.note+this.symbol+" {"+this.root+", "+this.third+", "+this.fifth+", "+this.note4+", "+this.note5+"}"}}]),t}());e.a=a},"7zck":function(t,e){},"D+dc":function(t,e,i){"use strict";i.d(e,"a",function(){return y});var n=i("BO1k"),s=i.n(n),o=i("Zrlr"),h=i.n(o),a=i("wxAW"),r=i.n(a),l=i("ifoU"),u=i.n(l),c=i("FRcm"),v=i("60Of"),d=i("787E"),f=new u.a,y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"A",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"q";arguments.length>3&&void 0!==arguments[3]&&arguments[3];h()(this,t),e=Object(v.a)(e),e=c.c["#"].includes(e)||c.c.b.includes(e)?e:"A",this._octave=i,this._length=n,this.lang=c.a.includes(e)?"b":"#",this.index=c.c[this.lang].indexOf(e),this._note=e,this.instrument="Piano",this.path=null,this.sound=null,t.setSound(this)}return r()(t,[{key:"newOctave",value:function(e){return new t(this.note,e,this.length)}},{key:"newLength",value:function(e){return new t(this.note,this.octave,e)}},{key:"clone",value:function(){return new t(this._note,this._octave,this.instrument)}},{key:"getInterval",value:function(e){var i=(this.index+e)/12;return c.c[this.lang][this.index][0],c.c[this.lang][(this.index+e)%12][0],new t(c.c[this.lang][(this.index+e)%12],parseInt(this.octave)+parseInt(i),this.instrument)}},{key:"getMajorChord",value:function(){return new d.a(this,this.getInterval(4),this.getInterval(7))}},{key:"getMajorScale",value:function(){var t=[this.note],e=!0,i=!1,n=void 0;try{for(var o,h=s()(major_scale);!(e=(o=h.next()).done);e=!0){var a=o.value;t.push(this.getInterval(a))}}catch(t){i=!0,n=t}finally{try{!e&&h.return&&h.return()}finally{if(i)throw n}}return toString(t)}},{key:"toString",value:function(){return this.note+this.octave}},{key:"isEqual",value:function(t){return this.note==t.note&&this._octave==t._octave}},{key:"print",value:function(){return"{Note: "+this.note+", Octave: "+this._octave+"}"}},{key:"play",value:function(){f.get(this.instrument+c.c.b[c.c[this.lang].indexOf(this.note)]+this._octave)?f.get(this.instrument+c.c.b[c.c[this.lang].indexOf(this.note)]+this._octave).play():console.log("Sound not loaded! please make sure you load with x.loadSound()")}},{key:"note",get:function(){return this._note},set:function(t){this._note=c.c["#"].includes(t)||c.c.b.includes(t)?t:this._note}},{key:"octave",get:function(){return this._octave},set:function(t){this._octave=t}},{key:"length",get:function(){return this._length},set:function(t){this._length=t}},{key:"frequency",get:function(){var t=this._octave-4;return 440*Math.pow(c.d,this.index-9+12*t)}}],[{key:"setSound",value:function(t){var e=t.instrument+c.c.b[c.c[t.lang].indexOf(t._note)]+t._octave;if(!f.has(e)){var i="/static/Media/"+t.instrument+"/FF_"+c.c.b[c.c[t.lang].indexOf(t._note)]+t._octave+".mp3";f.set(e,new Howl({src:[i]}))}}}]),t}();e.b=y},FRcm:function(t,e,i){"use strict";i.d(e,"b",function(){return d}),i.d(e,"a",function(){return f}),i.d(e,"c",function(){return y}),i.d(e,"d",function(){return m});var n=[2,4,5,7,9,11,12],s=[2,3,5,7,8,10,12],o=[2,3,5,7,8,11,12],h=[2,3,5,7,9,11,12],a=[2,3,5,7,9,10,12],r=[1,3,5,7,8,10,12],l=[2,4,6,7,9,11,12],u=[2,4,5,7,9,10,12],c=[2,3,5,7,8,10,12],v=[1,3,5,6,8,10,12],d={Major:n,Minor:s,"harmonic Minor":o,"Melodic Minor":h,Ionian:n,Dorian:a,Phrygian:r,Lydian:l,Mixolydian:u,Aeolian:c,Locrian:v},f=["C","F","Bb","Eb","Ab","Db","Gb"],y={"#":["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],b:["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]},m=Math.pow(2,1/12)},Lp3P:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("/5sW"),s=i("D+dc"),o=i("rxGY"),h=(i("787E"),i("FRcm"));var a={name:"Home",data:function(){return{n:"",octave:"",note:"",note_output:"",scale_output:"",scale:[],diatonic_scales:h.b,chord_types:["root","1st Inversion","second Inversion"]}},methods:{f:function(){var t;if(null!=this.n&&(this.n=(t=this.n).charAt(0).toUpperCase()+t.slice(1)),h.c["#"].includes(this.n)||h.c.b.includes(this.n))for(var e in this.note=""==this.octave?new s.a(this.n):new s.a(this.n,this.octave),this.note_output="Note: "+this.note,this.scale=[],h.b)this.scale.push(new o.a(this.note,h.b[e]));else this.note="",this.note_output="NOT A NOTE!",this.scale=[]},g:function(t){t.show=!t.show},oct:function(){for(var t=this,e=[],i=1;i<=7;i++)e.push(new s.a(this.n,i));this.foo=e;var n=setInterval(function(){var e=Math.floor(7*Math.random());t.foo[e].play()},2e3);setTimeout(function(){clearInterval(n)},2e4)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("h1",[t._v("Scales!")]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.n,expression:"n"}],staticClass:"in",attrs:{type:"text"},domProps:{value:t.n},on:{input:function(e){e.target.composing||(t.n=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.octave,expression:"octave"}],staticClass:"in",attrs:{type:"text"},domProps:{value:t.octave},on:{input:function(e){e.target.composing||(t.octave=e.target.value)}}}),t._v(" "),i("v-btn",{attrs:{round:"",color:"primary green"},on:{click:t.f}},[t._v("get Scale")])],1),t._v(" "),i("v-btn",{staticStyle:{"background-color":"yellow"},attrs:{color:"blue",flat:""},on:{click:function(e){t.note.play()}}},[t._v("\n        "+t._s(t.note_output)),i("v-icon",[t._v("music_note")])],1),t._v(" "),i("v-btn",{staticStyle:{"background-color":"yellow"},attrs:{color:"blue",flat:""},on:{click:t.oct}},[t._v("\n        Study Note:"),i("v-icon",[t._v("music_note")])],1),t._v(" "),i("transition-group",{attrs:{name:"fade",tag:"span"}},t._l(t.scale,function(e,n){return i("div",{key:n,staticClass:"diatonic_scales"},[i("v-btn",{staticClass:"scale_btn",attrs:{round:"",color:"secondary orange"},on:{click:function(i){t.g(e)}}},[t._v(t._s(n+1)+". "+t._s(t.n)+" "+t._s(Object.keys(t.diatonic_scales)[n])+"\n                ")]),t._v(" "),i("v-btn",{staticStyle:{"background-color":"yellow"},attrs:{color:"blue",flat:"",icon:""},on:{click:function(t){e.plays()}}},[i("v-icon",[t._v("music_note")])],1),t._v(" "),1==e.show?t._l(e.chords,function(e){return i("span",{key:e.toString(),staticClass:"chords"},[i("v-card",{attrs:{color:"success blue"}},[t._v(t._s(e.toString())+"\n                    ")]),t._v(" "),i("v-btn",{staticStyle:{"background-color":"yellow"},attrs:{color:"blue",flat:"",icon:""},on:{click:function(t){e.play()}}},[i("v-icon",[t._v("music_note")])],1),t._v(" "),i("v-btn",{staticStyle:{"background-color":"yellow"},attrs:{color:"blue",flat:"",icon:""},on:{click:function(t){e.playsMelody()}}},[i("v-icon",[t._v("music_note")])],1)],1)}):t._e()],2)}))],1)},staticRenderFns:[]};var l=i("VU/8")(a,r,!1,function(t){i("XwD4")},"data-v-2c36a256",null).exports,u={name:"App",components:{Home:l,Play:i("XhiP").default}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var v=i("VU/8")(u,c,!1,function(t){i("mQ1T")},null,null).exports,d=i("3EgV"),f=i.n(d),y=i("/ocq");n.default.use(y.a);var m=new y.a({routes:[{path:"/",name:"Home",component:function(){return new Promise(function(t){t()}).then(i.bind(null,"XhiP"))}},{path:"/notes",name:"Notes",component:l}]});i("7zck");i("VN6J").a.options.defaultTemplate='<div class="foo" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',n.default.use(f.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:m,render:function(t){return t(v)}})},XhiP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i("k9Ku"),o=i("mvHQ"),h=i.n(o),a=i("BO1k"),r=i.n(a),l=i("Zrlr"),u=i.n(l),c=i("wxAW"),v=i.n(c),d=i("D+dc"),f=(i("OMJi"),i("787E")),y=(i("60Of"),{w:1,h:.5,q:.25,e:1/8,s:1/16,t:1/32,sf:1/64}),m=new(window.AudioContext||window.webkitAudioContext),g=0,p=0;function b(){for(;g<m.currentTime+n.scheduleAheadTime;)n.nextNote();n.timerID=setTimeout(b,n.lookahead)}var _=function(){function t(e,i){u()(this,t),this.data=null,this.dataKeeper=null,this.reload_data=!1,this.timerID=null,this.lookahead=25,this.scheduleAheadTime=.1,this.currentNote=1,this.notesInQueue=[],this.next_note=1,this.lastNoteDrawn=3,this.bpm=e,this.beats_per_measure=i[0],this.beat_length=i[1],this.isPlaying=!1,this.beat_check=0}return v()(t,[{key:"scheduleNote",value:function(){if(this.data.length){if(this.data[0]){if(this.data[0]instanceof d.b||this.data[0]instanceof f.a)this.next_note=this.data.length?y[this.data[0].length]:null,console.log(this.data[0].toString()),this.data[0].play();else{var t=y[this.data[0][0].length],e=[],i=void 0,n="",s=!0,o=!1,h=void 0;try{for(var a,l=r()(this.data[0]);!(s=(a=l.next()).done);s=!0)i=a.value,t=t<y[i.length]?t:y[i.length],e.push(i),n+=i.toString()+" "}catch(t){o=!0,h=t}finally{try{!s&&l.return&&l.return()}finally{if(o)throw h}}console.log(n);var u=!0,c=!1,v=void 0;try{for(var m,g=r()(e);!(u=(m=g.next()).done);u=!0)(i=m.value).play()}catch(t){c=!0,v=t}finally{try{!u&&g.return&&g.return()}finally{if(c)throw v}}this.next_note=this.data.length?t:null}this.data.splice(0,1)}}else this.reload_data=!0}},{key:"nextNote",value:function(){var t=60/this.bpm;g+=t*(1/8),this.beat_check+=t*(1/8),this.beat_check>=t&&(this.beat_check=0,this.currentNote++,this.currentNote===this.beats_per_measure+1&&(this.currentNote=1)),p<=m.currentTime&&(this.scheduleNote(),p+=t*this.next_note*this.beats_per_measure)}},{key:"draw",value:function(){var t=n.lastNoteDrawn;n.currentTime=m.currentTime,n.lastNoteDrawn!=t&&(n.lastNoteDrawn=t),requestAnimationFrame(n.draw)}},{key:"getBeat",value:function(){return this.currentNote}},{key:"toggle",value:function(){n=this,this.reload_data&&(this.reload_data=!1,this.data=this.dataKeeper),this.isPlaying=!this.isPlaying,this.isPlaying?("suspended"===m.state&&m.resume(),this.currentNote=0,this.next_note=m.currentTime,p=m.currentTime,b(),requestAnimationFrame(this.draw)):clearTimeout(this.timerID)}},{key:"addNotes",value:function(t){this.data=t,this.dataKeeper=JSON.parse(h()(t))}}],[{key:"getRhythm",value:function(){return n||(n=new t(60,[4,4]))}}]),t}(),w=function(){function t(e,i){u()(this,t),this.rhythm=e,this.data=i}return v()(t,[{key:"play",value:function(){this.rhythm.addNotes(this.data),this.rhythm.toggle()}},{key:"noteLengthToTime",value:function(t){return note_lengths[t[0]]}}]),t}(),E=(i("rxGY"),i("FRcm"),{name:"Play",data:function(){for(var t=new d.a("e",5,"e"),e=new d.a("d#",5,"e"),i=new d.a("b",4,"e"),n=new d.a("d",5,"e"),s=new d.a("c",5,"e"),o=new d.a("a",4,"q"),h=[],a=0;a<20;a++)h.push(t,e,t,e,t,i,n,s,[o,new d.a("a","2","e")],t.newOctave(3).newLength("e"),o.newOctave(3).newLength("e"),s.newOctave(4),t.newOctave(4),o.newLength("e"),[i.newLength("q"),t.newOctave(2).newLength("e")],t.newOctave(3).newLength("e"),new d.a("g#",3,"e"),new d.a("e",4,"e"),new d.a("g#",4,"e"),new d.a("b",4,"e"),[s.newLength("q"),new d.a("a",2,"e")],new d.a("e",3,"e"),new d.a("a",3,"e"),new d.a("e",4,"e"),t,e,t,e,t,i,n,s,[o,new d.a("a","2","e")],t.newOctave(3).newLength("e"),o.newOctave(3).newLength("e"),s.newOctave(4),t.newOctave(4),o.newLength("e"),[i.newLength("q"),t.newOctave(2).newLength("e")],t.newOctave(3).newLength("e"),new d.a("g#",3,"e"),new d.a("e",4,"e"),s,i,[o,new d.a("a",2,"h")]);return{notes:h,bpm:120,meas:new w(new _(120,[3,4]),h),r:new _(120,[4,4]),beat:null,vol:1}},methods:{g:function(){this.meas.play(),this.beat=this.meas.rhythm.getBeat()},updateBPM:function(){this.meas.rhythm.bpm=this.bpm},updateVol:function(){s.Howler.volume([this.vol])}}}),I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-app",{attrs:{id:"inspire"}},[i("v-container",{attrs:{fluid:"","grid-list-lg":""}},[i("h1",{staticClass:"st"},[t._v("Fur Elise!")]),t._v(" "),i("br"),i("br"),i("br"),t._v(" "),i("span",{attrs:{id:"bpmval"}},[t._v("BPM: "+t._s(t.bpm))]),t._v(" "),i("v-slider",{staticClass:"slider",attrs:{name:"bpm",type:"range",min:60,max:180,step:"1","thumb-label":"always",height:"70"},on:{change:t.updateBPM},model:{value:t.bpm,callback:function(e){t.bpm=e},expression:"bpm"}}),t._v(" "),i("br"),i("br"),i("br"),t._v(" "),t.r?i("p",[t._v("Current Beat: "+t._s(t.meas.rhythm.getBeat()))]):t._e(),t._v(" "),i("br"),i("br"),i("br"),t._v(" "),i("span",[t._v("Volume: "+t._s(Math.floor(100*t.vol)))]),t._v(" "),i("v-slider",{staticClass:"slider",attrs:{name:"volume","prepend-icon":"volume_up",min:"0",max:"1",step:"0.01"},on:{change:t.updateVol},model:{value:t.vol,callback:function(e){t.vol=e},expression:"vol"}}),t._v(" "),i("br"),i("br"),i("br"),t._v(" "),i("v-btn",{staticClass:"btn",attrs:{color:"success",round:"",large:""},on:{click:t.g}},[i("v-icon",[t._v("music_note")]),t._v("Press Me!"),i("v-icon",[t._v("music_note")])],1)],1)],1)],1)},staticRenderFns:[]};var k=i("VU/8")(E,I,!1,function(t){i("Lp3P")},"data-v-67be3b7b",null);e.default=k.exports},XwD4:function(t,e){},mQ1T:function(t,e){},rxGY:function(t,e,i){"use strict";var n=i("Zx67"),s=i.n(n),o=i("Zrlr"),h=i.n(o),a=i("wxAW"),r=i.n(a),l=i("zwoO"),u=i.n(l),c=i("Pf15"),v=i.n(c),d=i("BO1k"),f=i.n(d),y=i("D+dc"),m=function(){function t(e,i){h()(this,t),e instanceof y.b?this.tonic=e.clone():this.tonic=new y.b(e),this.pattern=i,this.notes=[this.tonic];var n=!0,s=!1,o=void 0;try{for(var a,r=f()(i);!(n=(a=r.next()).done);n=!0){var l=a.value;this.notes.push(this.tonic.getInterval(l))}}catch(t){s=!0,o=t}finally{try{!n&&r.return&&r.return()}finally{if(s)throw o}}}return r()(t,[{key:"getNotes",value:function(){return this._notes}},{key:"toString",value:function(){for(var t="",e=0;e<this.notes.length-1;++e)t+=this.notes[e]+", ";return t+=this.notes[this.notes.length-1]}},{key:"getInterval",value:function(t){for(var e=0,i=0;i<t;i++)e+=this.pattern[i];return this.tonic.getInterval(e)}},{key:"loadSound",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,s=f()(this.notes);!(t=(n=s.next()).done);t=!0){n.value.loadSound()}}catch(t){e=!0,i=t}finally{try{!t&&s.return&&s.return()}finally{if(e)throw i}}}},{key:"plays",value:function(){for(var t=this,e=function(e){setTimeout(function(){t.notes[e].play()},500*e)},i=0;i<this.notes.length;i++)e(i)}}]),t}(),g=i("787E");i.d(e,"a",function(){return p});var p=function(t){function e(t,i){h()(this,e);var n=u()(this,(e.__proto__||s()(e)).call(this,t,i));for(var o in n.chords=[],n.show=!1,n.notes.slice(0,7))n.chords.push(new g.a(n.notes[o],n.notes[(parseInt(o)+2)%7],n.notes[(parseInt(o)+4)%7]));return n}return v()(e,t),r()(e,[{key:"getChord",value:function(t){return void 0!=this.chords[t-1]?this.chords[t-1]:null}},{key:"getChords",value:function(){return this.chords}}]),e}(m)}},["NHnr"]);
//# sourceMappingURL=app.28ad6c452c2b9272fe98.js.map