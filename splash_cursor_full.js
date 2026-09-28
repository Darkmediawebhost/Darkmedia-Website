(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46026,e=>{"use strict";var r=e.i(43476),t=e.i(71645);e.s(["default",0,function({SIM_RESOLUTION:e=128,DYE_RESOLUTION:i=1440,CAPTURE_RESOLUTION:o=512,DENSITY_DISSIPATION:n=3.5,VELOCITY_DISSIPATION:a=2,PRESSURE:u=.1,PRESSURE_ITERATIONS:l=20,CURL:c=3,SPLAT_RADIUS:f=.2,SPLAT_FORCE:v=6e3,SHADING:s=!0,COLOR_UPDATE_SPEED:m=10,BACK_COLOR:d={r:.5,g:0,b:0},TRANSPARENT:h=!0,RAINBOW_MODE:x=!0,COLOR:g="#ff0000"}){let T=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let r,t,o,d,h,E,R,p,S=T.current;if(!S)return;let D=[{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}],y={SIM_RESOLUTION:e,DYE_RESOLUTION:i,DENSITY_DISSIPATION:n,VELOCITY_DISSIPATION:a,PRESSURE:u,PRESSURE_ITERATIONS:l,CURL:c,SPLAT_RADIUS:f,SPLAT_FORCE:v,SHADING:s,COLOR_UPDATE_SPEED:m,RAINBOW_MODE:x,COLOR:g},{gl:_,ext:A}=function(e){let r,t,i,o={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},n=e.getContext("webgl2",o);if(n||(n=e.getContext("webgl",o)||e.getContext("experimental-webgl",o)),!n)throw Error("Unable to initialize WebGL.");let a="drawBuffers"in n,u=!1,l=null;a?(n.getExtension("EXT_color_buffer_float"),u=!!n.getExtension("OES_texture_float_linear")):(l=n.getExtension("OES_texture_half_float"),u=!!n.getExtension("OES_texture_half_float_linear")),n.clearColor(0,0,0,1);let c=a?n.HALF_FLOAT:l&&l.HALF_FLOAT_OES||0;if(a?(r=F(n,n.RGBA16F,n.RGBA,c),t=F(n,n.RG16F,n.RG,c),i=F(n,n.R16F,n.RED,c)):(r=F(n,n.RGBA,n.RGBA,c),t=F(n,n.RGBA,n.RGBA,c),i=F(n,n.RGBA,n.RGBA,c)),!r||!t||!i)throw Error("Unable to initialize WebGL render texture formats.");return{gl:n,ext:{formatRGBA:r,formatRG:t,formatR:i,halfFloatTexType:c,supportLinearFiltering:u}}}(S);if(!_||!A)return;function F(e,r,t,i){if(!function(e,r,t,i){let o=e.createTexture();if(!o)return!1;e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,4,4,0,t,i,null);let n=e.createFramebuffer();return!!n&&(e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE)}(e,r,t,i)){if("drawBuffers"in e)switch(r){case e.R16F:return F(e,e.RG16F,e.RG,i);case e.RG16F:return F(e,e.RGBA16F,e.RGBA,i)}return null}return{internalFormat:r,format:t}}function U(e,r,t=null){let i=function(e,r){if(!r)return e;let t="";for(let e of r)t+=`#define ${e}
`;return t+e}(r,t),o=_.createShader(e);return o?(_.shaderSource(o,i),_.compileShader(o),_.getShaderParameter(o,_.COMPILE_STATUS)||console.trace(_.getShaderInfoLog(o)),o):null}function w(e,r){if(!e||!r)return null;let t=_.createProgram();return t?(_.attachShader(t,e),_.attachShader(t,r),_.linkProgram(t),_.getProgramParameter(t,_.LINK_STATUS)||console.trace(_.getProgramInfoLog(t)),t):null}function L(e){let r={},t=_.getProgramParameter(e,_.ACTIVE_UNIFORMS);for(let i=0;i<t;i++){let t=_.getActiveUniform(e,i);t&&(r[t.name]=_.getUniformLocation(e,t.name))}return r}A.supportLinearFiltering||(y.DYE_RESOLUTION=256,y.SHADING=!1);class b{program;uniforms;constructor(e,r){this.program=w(e,r),this.uniforms=this.program?L(this.program):{}}bind(){this.program&&_.useProgram(this.program)}}let P=U(_.VERTEX_SHADER,`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `),B=U(_.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),z=U(_.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),I=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,X=U(_.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `),C=U(_.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `,A.supportLinearFiltering?null:["MANUAL_FILTERING"]),N=U(_.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `),O=U(_.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `),M=U(_.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),G=U(_.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `),Y=U(_.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),V=(E=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,E),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),_.STATIC_DRAW),R=_.createBuffer(),_.bindBuffer(_.ELEMENT_ARRAY_BUFFER,R),_.bufferData(_.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),_.STATIC_DRAW),_.vertexAttribPointer(0,2,_.FLOAT,!1,0,0),_.enableVertexAttribArray(0),(e,r=!1)=>{_&&(e?(_.viewport(0,0,e.width,e.height),_.bindFramebuffer(_.FRAMEBUFFER,e.fbo)):(_.viewport(0,0,_.drawingBufferWidth,_.drawingBufferHeight),_.bindFramebuffer(_.FRAMEBUFFER,null)),r&&(_.clearColor(0,0,0,1),_.clear(_.COLOR_BUFFER_BIT)),_.drawElements(_.TRIANGLES,6,_.UNSIGNED_SHORT,0))}),H=new b(P,B),W=new b(P,z),k=new b(P,X),K=new b(P,C),j=new b(P,N),q=new b(P,O),$=new b(P,M),J=new b(P,G),Q=new b(P,Y),Z=new class{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(e,r){this.vertexShader=e,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(e){let r=0;for(let t of e)r+=function(e){if(!e.length)return 0;let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t)|0;return r}(t);let t=this.programs[r];if(null==t){let i=U(_.FRAGMENT_SHADER,this.fragmentShaderSource,e);t=w(this.vertexShader,i),this.programs[r]=t}t!==this.activeProgram&&(t&&(this.uniforms=L(t)),this.activeProgram=t)}bind(){this.activeProgram&&_.useProgram(this.activeProgram)}}(P,I);function ee(e,r,t,i,o,n){_.activeTexture(_.TEXTURE0);let a=_.createTexture();_.bindTexture(_.TEXTURE_2D,a),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,n),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,n),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),_.texImage2D(_.TEXTURE_2D,0,t,e,r,0,i,o,null);let u=_.createFramebuffer();_.bindFramebuffer(_.FRAMEBUFFER,u),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,a,0),_.viewport(0,0,e,r),_.clear(_.COLOR_BUFFER_BIT);let l=1/e,c=1/r;return{texture:a,fbo:u,width:e,height:r,texelSizeX:l,texelSizeY:c,attach:e=>(_.activeTexture(_.TEXTURE0+e),_.bindTexture(_.TEXTURE_2D,a),e)}}function er(e,r,t,i,o,n){let a=ee(e,r,t,i,o,n),u=ee(e,r,t,i,o,n);return{width:e,height:r,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,read:a,write:u,swap(){let e=this.read;this.read=this.write,this.write=e}}}function et(e,r,t,i,o,n,a){var u;let l;return e.width===r&&e.height===t?e:(u=e.read,l=ee(r,t,i,o,n,a),H.bind(),H.uniforms.uTexture&&_.uniform1i(H.uniforms.uTexture,u.attach(0)),V(l,!1),e.read=l,e.write=ee(r,t,i,o,n,a),e.width=r,e.height=t,e.texelSizeX=1/r,e.texelSizeY=1/t,e)}function ei(){let e=eo(y.SIM_RESOLUTION),i=eo(y.DYE_RESOLUTION),n=A.halfFloatTexType,a=A.formatRGBA,u=A.formatRG,l=A.formatR,c=A.supportLinearFiltering?_.LINEAR:_.NEAREST;_.disable(_.BLEND),r=r?et(r,i.width,i.height,a.internalFormat,a.format,n,c):er(i.width,i.height,a.internalFormat,a.format,n,c),t=t?et(t,e.width,e.height,u.internalFormat,u.format,n,c):er(e.width,e.height,u.internalFormat,u.format,n,c),o=ee(e.width,e.height,l.internalFormat,l.format,n,_.NEAREST),d=ee(e.width,e.height,l.internalFormat,l.format,n,_.NEAREST),h=er(e.width,e.height,l.internalFormat,l.format,n,_.NEAREST)}function eo(e){let r=_.drawingBufferWidth,t=_.drawingBufferHeight,i=r/t,o=Math.round(e),n=Math.round(e*(i<1?1/i:i));return r>t?{width:n,height:o}:{width:o,height:n}}function en(e){return Math.floor(e*(window.devicePixelRatio||1))}p=[],y.SHADING&&p.push("SHADING"),Z.setKeywords(p),ei();let ea=Date.now(),eu=0;function el(){var e,i;let n,a,u,l,c,f,v,s=(a=Math.min(a=((n=Date.now())-ea)/1e3,.016666),ea=n,a);u=en(S.clientWidth),l=en(S.clientHeight),(S.width!==u||S.height!==l)&&(S.width=u,S.height=l,1)&&ei(),(eu+=s*y.COLOR_UPDATE_SPEED)>=1&&(e=eu,eu=0==(c=1)?0:(e-0)%c+0,D.forEach(e=>{e.color=es()})),function(){for(let e of D)e.moved&&(e.moved=!1,function(e){let r=e.deltaX*y.SPLAT_FORCE,t=e.deltaY*y.SPLAT_FORCE;ec(e.texcoordX,e.texcoordY,r,t,e.color)}(e))}(),function(e){_.disable(_.BLEND),q.bind(),q.uniforms.texelSize&&_.uniform2f(q.uniforms.texelSize,t.texelSizeX,t.texelSizeY),q.uniforms.uVelocity&&_.uniform1i(q.uniforms.uVelocity,t.read.attach(0)),V(d),$.bind(),$.uniforms.texelSize&&_.uniform2f($.uniforms.texelSize,t.texelSizeX,t.texelSizeY),$.uniforms.uVelocity&&_.uniform1i($.uniforms.uVelocity,t.read.attach(0)),$.uniforms.uCurl&&_.uniform1i($.uniforms.uCurl,d.attach(1)),$.uniforms.curl&&_.uniform1f($.uniforms.curl,y.CURL),$.uniforms.dt&&_.uniform1f($.uniforms.dt,e),V(t.write),t.swap(),j.bind(),j.uniforms.texelSize&&_.uniform2f(j.uniforms.texelSize,t.texelSizeX,t.texelSizeY),j.uniforms.uVelocity&&_.uniform1i(j.uniforms.uVelocity,t.read.attach(0)),V(o),W.bind(),W.uniforms.uTexture&&_.uniform1i(W.uniforms.uTexture,h.read.attach(0)),W.uniforms.value&&_.uniform1f(W.uniforms.value,y.PRESSURE),V(h.write),h.swap(),J.bind(),J.uniforms.texelSize&&_.uniform2f(J.uniforms.texelSize,t.texelSizeX,t.texelSizeY),J.uniforms.uDivergence&&_.uniform1i(J.uniforms.uDivergence,o.attach(0));for(let e=0;e<y.PRESSURE_ITERATIONS;e++)J.uniforms.uPressure&&_.uniform1i(J.uniforms.uPressure,h.read.attach(1)),V(h.write),h.swap();Q.bind(),Q.uniforms.texelSize&&_.uniform2f(Q.uniforms.texelSize,t.texelSizeX,t.texelSizeY),Q.uniforms.uPressure&&_.uniform1i(Q.uniforms.uPressure,h.read.attach(0)),Q.uniforms.uVelocity&&_.uniform1i(Q.uniforms.uVelocity,t.read.attach(1)),V(t.write),t.swap(),K.bind(),K.uniforms.texelSize&&_.uniform2f(K.uniforms.texelSize,t.texelSizeX,t.texelSizeY),!A.supportLinearFiltering&&K.uniforms.dyeTexelSize&&_.uniform2f(K.uniforms.dyeTexelSize,t.texelSizeX,t.texelSizeY);let i=t.read.attach(0);K.uniforms.uVelocity&&_.uniform1i(K.uniforms.uVelocity,i),K.uniforms.uSource&&_.uniform1i(K.uniforms.uSource,i),K.uniforms.dt&&_.uniform1f(K.uniforms.dt,e),K.uniforms.dissipation&&_.uniform1f(K.uniforms.dissipation,y.VELOCITY_DISSIPATION),V(t.write),t.swap(),!A.supportLinearFiltering&&K.uniforms.dyeTexelSize&&_.uniform2f(K.uniforms.dyeTexelSize,r.texelSizeX,r.texelSizeY),K.uniforms.uVelocity&&_.uniform1i(K.uniforms.uVelocity,t.read.attach(0)),K.uniforms.uSource&&_.uniform1i(K.uniforms.uSource,r.read.attach(1)),K.uniforms.dissipation&&_.uniform1f(K.uniforms.dissipation,y.DENSITY_DISSIPATION),V(r.write),r.swap()}(s),_.blendFunc(_.ONE,_.ONE_MINUS_SRC_ALPHA),_.enable(_.BLEND),f=(i=null,_.drawingBufferWidth),v=i?i.height:_.drawingBufferHeight,Z.bind(),y.SHADING&&Z.uniforms.texelSize&&_.uniform2f(Z.uniforms.texelSize,1/f,1/v),Z.uniforms.uTexture&&_.uniform1i(Z.uniforms.uTexture,r.read.attach(0)),V(i,!1),requestAnimationFrame(el)}function ec(e,i,o,n,a){var u;let l;k.bind(),k.uniforms.uTarget&&_.uniform1i(k.uniforms.uTarget,t.read.attach(0)),k.uniforms.aspectRatio&&_.uniform1f(k.uniforms.aspectRatio,S.width/S.height),k.uniforms.point&&_.uniform2f(k.uniforms.point,e,i),k.uniforms.color&&_.uniform3f(k.uniforms.color,o,n,0),k.uniforms.radius&&_.uniform1f(k.uniforms.radius,(u=y.SPLAT_RADIUS/100,(l=S.width/S.height)>1&&(u*=l),u)),V(t.write),t.swap(),k.uniforms.uTarget&&_.uniform1i(k.uniforms.uTarget,r.read.attach(0)),k.uniforms.color&&_.uniform3f(k.uniforms.color,a.r,a.g,a.b),V(r.write),r.swap()}function ef(e,r,t,i){e.id=r,e.down=!0,e.moved=!1,e.texcoordX=t/S.width,e.texcoordY=1-i/S.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=es()}function ev(e,r,t,i){var o,n;let a,u;e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=r/S.width,e.texcoordY=1-t/S.height,o=e.texcoordX-e.prevTexcoordX,(a=S.width/S.height)<1&&(o*=a),e.deltaX=o,n=e.texcoordY-e.prevTexcoordY,(u=S.width/S.height)>1&&(n/=u),e.deltaY=n,e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function es(){if(!y.RAINBOW_MODE){let e,r;return 3===(e=y.COLOR.replace("#","")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),r=parseInt(e.slice(0,2),16)/255,{r:.15*r,g:.15*(parseInt(e.slice(2,4),16)/255),b:.15*(parseInt(e.slice(4,6),16)/255)}}let e=function(e){let r=0,t=0,i=0,o=Math.floor(6*e),n=6*e-o,a=0,u=+(1-n),l=+(1-(1-n)*1);switch(o%6){case 0:r=1,t=l,i=a;break;case 1:r=u,t=1,i=a;break;case 2:r=a,t=1,i=l;break;case 3:r=a,t=u,i=1;break;case 4:r=l,t=a,i=1;break;case 5:r=1,t=a,i=u}return{r,g:t,b:i}}(Math.random());return e.r*=.15,e.g*=.15,e.b*=.15,e}window.addEventListener("mousedown",e=>{let r,t,i,o=D[0];ef(o,-1,en(e.clientX),en(e.clientY)),r=es(),r.r*=10,r.g*=10,r.b*=10,t=10*(Math.random()-.5),i=30*(Math.random()-.5),ec(o.texcoordX,o.texcoordY,t,i,r)}),document.body.addEventListener("mousemove",function e(r){let t=D[0],i=en(r.clientX),o=en(r.clientY),n=es();el(),ev(t,i,o,n),document.body.removeEventListener("mousemove",e)}),window.addEventListener("mousemove",e=>{let r=D[0],t=en(e.clientX),i=en(e.clientY),o=r.color;ev(r,t,i,o)}),document.body.addEventListener("touchstart",function e(r){let t=r.targetTouches,i=D[0];for(let e=0;e<t.length;e++){let r=en(t[e].clientX),o=en(t[e].clientY);el(),ef(i,t[e].identifier,r,o)}document.body.removeEventListener("touchstart",e)}),window.addEventListener("touchstart",e=>{let r=e.targetTouches,t=D[0];for(let e=0;e<r.length;e++){let i=en(r[e].clientX),o=en(r[e].clientY);ef(t,r[e].identifier,i,o)}},!1),window.addEventListener("touchmove",e=>{let r=e.targetTouches,t=D[0];for(let e=0;e<r.length;e++)ev(t,en(r[e].clientX),en(r[e].clientY),t.color)},!1),window.addEventListener("touchend",e=>{let r=e.changedTouches,t=D[0];for(let e=0;e<r.length;e++)t.down=!1})},[e,i,o,n,a,u,l,c,f,v,s,m,d,h,x,g]),(0,r.jsx)("div",{className:"fixed top-0 left-0 z-50 pointer-events-none w-full h-full mix-blend-difference",children:(0,r.jsx)("canvas",{ref:T,id:"fluid",className:"w-screen h-screen block grayscale contrast-125 opacity-25"})})}])},60160,function(e){e.n(e.i(46026))}]);