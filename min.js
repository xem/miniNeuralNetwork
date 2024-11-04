M=(r,n)=>Array(r).fill().map((()=>Array(n).fill(0))),C=r=>r.map((r=>[r])),S=(r,n,f,i,o)=>{for(i in r)for(o in r[i])r[i][o]-=n[i][o]},T=(r,n,f,i,o)=>{for(i in f=M(r[0].length,r.length))for(o in f[i])f[i][o]=r[o][i];return f},F=(r,n,f,i,o)=>{for(i in r)for(o in r[i])r[i][o]=n(r[i][o]);return r},D=(r,n,f,i,o,t)=>(f=M(r.length,n[0].length),r.map(((i,o)=>{n[0].map(((i,t)=>{r[0].map(((i,l)=>{f[o][t]+=r[o][l]*n[l][t]}))}))})),f),R=(r,n,f,i)=>{for(f in r)for(i in r[f])r[f][i]=2*Math.random()-1;return r},A=(r,n,f,i)=>{for(f in r)for(i in r[f])r[f][i]+=n[f][i];return r},Z=(r,n,f,i)=>{for(f in r)for(i in r[f])r[f][i]*=n;return r},pr=(r,n,f,i)=>{for(f in r)for(i in r[f])r[f][i]*=n[f][i];return r},I=(r,n,f)=>{R(W=M(n,r)),R(w=M(f,n))},P=(r,n,i,o)=>(r=C(r),i=F(D(w,h=F(D(W,r),f)),f),n&&(n=C(n),S(n,i),A(w,D(Z(pr(F(i,g),n),l),T(h))),A(W,D(Z(pr(F(h,g),D(T(w),n)),l),T(r)))),i.flat())


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);