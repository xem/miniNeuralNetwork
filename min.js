M=(r,n)=>Array(r).fill().map((()=>Array(n).fill(0))),C=(r,n)=>r.map((r=>[r])),S=(r,n,f,t,e)=>{for(t in f=M(r.length,r[0].length))for(e in f[t])f[t][e]=r[t][e]-n[t][e];return f},T=(r,n,f,t,e)=>{for(t in f=M(r[0].length,r.length))for(e in f[t])f[t][e]=r[e][t];return f},F=(r,n,f,t,e)=>{for(t in f=M(r.length,r[0].length))for(e in f[t])f[t][e]=n(r[t][e]);return f},D=(r,n,f,t,e,l)=>{for(f=M(r.length,n[0].length),t=0;t<r.length;t++)for(e=0;e<n[0].length;e++)for(l=0;l<r[0].length;l++)f[t][e]+=r[t][l]*n[l][e];return f},R=(r,n,f,t)=>{for(f in r)for(t in r[f])r[f][t]=2*Math.random()-1;return r},A=(r,n,f,t)=>{for(f in r)for(t in r[f])r[f][t]+=n[f][t];return r},Z=(r,n,f,t)=>{for(f in r)for(t in r[f])r[f][t]*=n;return r},pr=(r,n,f,t)=>{for(f in r)for(t in r[f])r[f][t]*=n[f][t];return r},I=(r,n,f)=>{R(W=M(n,r)),R(w=M(f,n))},P=(r,n,t,e)=>(t=F(D(w,h=F(D(W,r=C(r)),f)),f),n&&(e=S(C(n),t),A(w,D(Z(pr(F(t,g),e),l),T(h))),A(W,D(Z(pr(F(h,g),D(T(w),e)),l),T(r)))),t.flat())


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);