M=(r,n)=>Array(r).fill().map((()=>Array(n).fill(0))),C=(r,n)=>r.map((r=>[r])),S=(r,n,f,t,l)=>{for(t in f=M(r.length,r[0].length))for(l in f[t])f[t][l]=r[t][l]-n[t][l];return f},T=(r,n,f,t)=>{for(f in n=M(r[0].length,r.length))for(t in n[f])n[f][t]=r[t][f];return n},F=(n,f,t,l)=>{for(t in r=M(n.length,n[0].length),r)for(l in r[t])r[t][l]=f(n[t][l]);return r},D=(r,n,f,t,l,o)=>{for(f=M(r.length,n[0].length),t=0;t<r.length;t++)for(l=0;l<n[0].length;l++)for(o=0;o<r[0].length;o++)f[t][l]+=r[t][o]*n[o][l];return f},R=(r,n,f)=>{for(n in r)for(f in r[n])r[n][f]=2*Math.random()-1},A=(r,n,f,t)=>{for(f in r)for(t in r[f])r[f][t]+=n[f][t]},Z=(r,n,f,t)=>{for(f in r)for(t in r[f])r[f][t]*=n;return r},pr=(r,n,f,t)=>{for(f in r)for(t in r[f])r[f][t]*=n[f][t];return r},I=(r,n,f)=>{R(W=M(n,r)),R(w=M(f,n))},P=(r,n,t,o)=>(r=C(r),h=F(D(W,r),f),t=F(D(w,h),f),n&&(o=S(C(n),t),A(w,D(Z(pr(F(t,g),o),l),T(h))),A(W,D(Z(pr(F(h,g),D(T(w),o)),l),T(r)))),t.flat())


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);