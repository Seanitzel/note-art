webpackJsonp([2],{IP0f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("BO1k"),a=n.n(r),o=n("60Of"),i=n("b/bh");window.AudioContext=window.AudioContext||window.webkitAudioContext;var s=null,c=null,l=null,u=.04,v=!1,f=null,d={note:"-",pitch:"-",detune:"-",notes:[],play:function(){var t=0,e=s.currentTime,n=setInterval(function(){d.notes[t].time<=s.currentTime-e&&(console.log(d.notes[t].time),i.a.note(d.notes[t].notes+"q").play(),t++),t==d.notes.length&&clearInterval(n)},50)},toString:function(){var t="{ ",e=!0,n=!1,r=void 0;try{for(var o,i=a()(d.notes);!(e=(o=i.next()).done);e=!0){t+=o.value.notes.toString()+", "}}catch(t){n=!0,r=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}return t+="}"}};function h(){alert("Stream generation failed.")}function g(t){l=s.createMediaStreamSource(t),(c=s.createAnalyser()).fftSize=2048,l.connect(c),A()}function _(){!function(t,e){try{navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia(t,e,h)}catch(t){alert("getUserMedia threw exception :"+t)}}({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"},optional:[]}},g)}window.onload=function(){return s=new AudioContext,Math.max(4,Math.floor(s.sampleRate/5e3)),!1};var p=new Float32Array(2048),b=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function m(t,e){return Math.floor(1200*Math.log(t/function(t){return 440*Math.pow(2,(t-69)/12)}(e))/Math.log(2))}var w=!1,M=[],y=[];function q(t,e){for(var n=t.length,r=0,a=0;a<n;a++){var i=t[a];r+=i*i}if((r=Math.sqrt(r/n))<u)return w&&(M.length>5&&(d.notes.push({notes:Object(o.b)(M)+function(t){for(var e={},n=0,r=void 0,a=void 0,i=0;i<t.length;i++)a=Object(o.c)(t[i]),void 0===e[a]?e[a]=1:e[a]++,e[a]>n&&(n=e[a],r=a);return console.log(r),parseInt(r)}(y),time:s.currentTime-f}),console.log(s.currentTime-f)),M.length=0,y.length=0,w=!1),-1;var c=0,l=n-1;for(a=0;a<n/2;a++)if(Math.abs(t[a])<.2){c=a;break}for(a=1;a<n/2;a++)if(Math.abs(t[n-a])<.2){l=n-a;break}n=(t=t.slice(c,l)).length;var v=new Array(n).fill(0);for(a=0;a<n;a++)for(var h=0;h<n-a;h++)v[a]=v[a]+t[h]*t[h+a];for(var g=0;v[g]>v[g+1];)g++;var _=-1,p=-1;for(a=g;a<n;a++)v[a]>_&&(_=v[a],p=a);var b=p,m=v[b-1],q=v[b],A=v[b+1],F=(m+A-2*q)/2;return F&&(b-=(A-m)/2/(2*F)),e/b}function A(t){new Array;if(c){c.getFloatTimeDomainData(p);var e,n,r=q(p,s.sampleRate);if(-1!=r){0==v&&(f=s.currentTime),v=!0,w=!0,d.frequency=Math.round(r);var a=(e=r,n=Math.log(e/440)/Math.log(2)*12,Math.round(n)+69);d.note=b[a%12];var o=m(r,a);d.detune=o,M.push(b[a%12]),y.push(d.frequency)}window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame),window.requestAnimationFrame(A)}}function F(){v=!1,d.notes.length=0}var k={data:function(){return{toggleLiveInput:_,piano:i.a,timer:null,pitch_data:d,cached_notes:M,cached_frequencies:y,reset:F}},components:{navigation:n("bwGm").a},methods:{getNote:function(){var t=this,e=0;this.timer=setInterval(function(){t.piano.note(t.pitch_data.notes[e]+"q").play(),++e==d.notes.length&&clearInterval(t.timer)},500)},stop:function(){clearInterval(this.timer)},resetData:function(){this.reset}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navigation"),t._v(" "),n("br"),n("br"),t._v(" "),n("v-btn",{attrs:{color:"orange"},on:{click:t.toggleLiveInput}},[t._v("use live input")]),t._v(" "),n("v-btn",{attrs:{color:"orange"},on:{click:t.reset}},[t._v("Reset")]),t._v(" "),n("br"),n("br"),t._v(" "),n("span",[t._v("Note: "+t._s(t.pitch_data.note)+" ")]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("span",[t._v("Frquency: "+t._s(t.pitch_data.pitch))]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("span",[t._v("Cents: "+t._s(t.pitch_data.detune))]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("span",[t._v("Notes: "+t._s(t.pitch_data.toString()))]),t._v(" "),n("br"),n("br"),n("br"),n("br"),t._v(" "),n("span",[t._v("Cached Notes: "+t._s(t.cached_notes))]),t._v(" "),n("br"),n("br"),n("br"),n("br"),t._v(" "),n("span",[t._v("Cached Frequencies: "+t._s(t.cached_frequencies))]),t._v(" "),n("br"),n("br"),t._v(" "),n("v-btn",{attrs:{color:"green"},on:{click:t.pitch_data.play}},[t._v("Play!")]),t._v(" "),n("v-btn",{attrs:{color:"red"},on:{click:t.stop}},[t._v("Stop")])],1)},staticRenderFns:[]};var I=n("VU/8")(k,C,!1,function(t){n("dqzg")},null,null);e.default=I.exports},dqzg:function(t,e){}});
//# sourceMappingURL=2.c59bf1b1b2fa35930358.js.map