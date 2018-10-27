webpackJsonp([2],{"8jCq":function(t,e){},IP0f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.AudioContext=window.AudioContext||window.webkitAudioContext;var a,o,i,r,l,c,s=null,u=!1,d=null,v=null,p=null,h=null;function f(){alert("Stream generation failed.")}function m(t){h=s.createMediaStreamSource(t),(v=s.createAnalyser()).fftSize=2048,h.connect(v),k()}function g(){u&&(d.stop(0),d=null,v=null,u=!1,window.cancelAnimationFrame||(window.cancelAnimationFrame=window.webkitCancelAnimationFrame),window.cancelAnimationFrame(w)),function(t,e){try{navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia(t,e,f)}catch(t){alert("getUserMedia threw exception :"+t)}}({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"},optional:[]}},m)}window.onload=function(){s=new AudioContext,Math.max(4,Math.floor(s.sampleRate/5e3));new XMLHttpRequest;a=document.getElementById("detector"),document.getElementById("output"),(p=document.getElementById("waveform"))&&((o=p.getContext("2d")).strokeStyle="black",o.lineWidth=1),i=document.getElementById("pitch"),r=document.getElementById("note"),l=document.getElementById("detune"),c=document.getElementById("detune_amt"),a.ondragenter=function(){return this.classList.add("droptarget"),!1},a.ondragleave=function(){return this.classList.remove("droptarget"),!1},a.ondrop=function(t){this.classList.remove("droptarget"),t.preventDefault(),null;var e=new FileReader;return e.onload=function(t){s.decodeAudioData(t.target.result,function(t){t},function(){alert("error loading!")})},e.onerror=function(t){alert("Error: "+e.error)},e.readAsArrayBuffer(t.dataTransfer.files[0]),!1}};var w=null,_=new Float32Array(2048),M=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function b(t,e){return Math.floor(1200*Math.log(t/function(t){return 440*Math.pow(2,(t-69)/12)}(e))/Math.log(2))}var A=null,T=null,y=null;function k(t){new Array;if(v){v.getFloatTimeDomainData(_);var e,n,u=function(t,e){for(var n=t.length,a=0,o=0;o<n;o++){var i=t[o];a+=i*i}if((a=Math.sqrt(a/n))<.01)return-1;var r=0,l=n-1;for(o=0;o<n/2;o++)if(Math.abs(t[o])<.2){r=o;break}for(o=1;o<n/2;o++)if(Math.abs(t[n-o])<.2){l=n-o;break}n=(t=t.slice(r,l)).length;var c=new Array(n).fill(0);for(o=0;o<n;o++)for(var s=0;s<n-o;s++)c[o]=c[o]+t[s]*t[s+o];for(var u=0;c[u]>c[u+1];)u++;var d=-1,v=-1;for(o=u;o<n;o++)c[o]>d&&(d=c[o],v=o);var p=v,h=c[p-1],f=c[p],m=c[p+1],g=(h+m-2*f)/2;return g&&(p-=(m-h)/2/(2*g)),e/p}(_,s.sampleRate);if(p){o.clearRect(0,0,512,256),o.strokeStyle="red",o.beginPath(),o.moveTo(0,0),o.lineTo(0,256),o.moveTo(128,0),o.lineTo(128,256),o.moveTo(256,0),o.lineTo(256,256),o.moveTo(384,0),o.lineTo(384,256),o.moveTo(512,0),o.lineTo(512,256),o.stroke(),o.strokeStyle="black",o.beginPath(),o.moveTo(0,_[0]);for(var d=1;d<512;d++)o.lineTo(d,128+128*_[d]);o.stroke()}return-1==u?(a.className="vague",i.innerText="--",r.innerText="-",l.className="",c.innerText="--"):(a.className="confident",A=u,i.innerText=Math.round(A),e=A,n=Math.log(e/440)/Math.log(2)*12,T=Math.round(n)+69,r.innerHTML=M[T%12],0==(y=b(A,T))?(l.className="",c.innerHTML="--"):(l.className=y<0?"flat":"sharp",c.innerHTML=Math.abs(y))),window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame),w=window.requestAnimationFrame(k),{note:M[T%12],pitch:Math.round(A),detune:Math.abs(y)}}}var C=n("b/bh"),F={data:function(){return{toggleLiveInput:g,pitch:{note:"-",pitch:"-",detune:"-"},piano:C.a,timer:null}},mounted:function(){k()},methods:{getNote:function(){var t=this;this.timer=setInterval(function(){t.pitch=k();var e=void 0;e=t.pitch.pitch>33&&t.pitch.pitch<63?1:t.pitch.pitch>=63&&t.pitch.pitch<=134?3:t.pitch.pitch>134&&t.pitch.pitch<269?4:t.pitch.pitch>=269&&t.pitch.pitch<=510?5:t.pitch.pitch>510&&t.pitch.pitch<1075?5:3,t.piano.note(t.pitch.note+e+"q").play()},1e3)},stop:function(){clearInterval(this.timer)}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("v-btn",{attrs:{color:""},on:{click:t.toggleLiveInput}},[t._v("use live input")]),t._v(" "),n("v-btn",{on:{click:t.getNote}},[t._v("get Note")])],1),t._v(" "),t._m(0),t._v(" "),n("span",[t._v("Note: "+t._s(t.pitch.note))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Frquency: "+t._s(t.pitch.pitch))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Cents: "+t._s(t.pitch.detune))]),t._v(" "),n("br"),t._v(" "),n("v-btn",{attrs:{color:"purple"},on:{click:t.stop}},[t._v("Stop")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vague",attrs:{id:"detector"}},[n("div",{staticClass:"pitch"},[n("span",{attrs:{id:"pitch"}},[t._v("--")]),t._v("Hz")]),t._v(" "),n("div",{staticClass:"note"},[n("span",{attrs:{id:"note"}},[t._v("--")])]),t._v(" "),n("canvas",{attrs:{id:"output",width:"300",height:"42"}}),t._v(" "),n("div",{attrs:{id:"detune"}},[n("span",{attrs:{id:"detune_amt"}},[t._v("--")]),n("span",{attrs:{id:"flat"}},[t._v("cents ♭")]),n("span",{attrs:{id:"sharp"}},[t._v("cents ♯")])])])}]};var E=n("VU/8")(F,x,!1,function(t){n("8jCq")},null,null);e.default=E.exports}});
//# sourceMappingURL=2.88a9318414052db6c4d0.js.map