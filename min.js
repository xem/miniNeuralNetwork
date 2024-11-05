M=(r,n)=>Array(r).fill().map((()=>Array(n).fill(0))),C=r=>r.map((r=>[r])),S=(r,n,f,i,o)=>{for(i in r)for(o in r[i])r[i][o]-=n[i][o]},T=(r,n,f,i,o)=>{for(i in f=M(r[0].length,r.length))for(o in f[i])f[i][o]=r[o][i];return f},F=(r,n,f,i,o)=>{for(i in r)for(o in r[i])r[i][o]=n(r[i][o]);return r},D=(r,n,f,i,o,t)=>(f=M(r.length,n[0].length),r.map(((i,o)=>{n[0].map(((i,t)=>{r[0].map(((i,l)=>{f[o][t]+=r[o][l]*n[l][t]}))}))})),f),R=(r,n,f,i)=>{for(f in r)for(i in r[f])r[f][i]=2*Math.random()-1;return r},A=(r,n,f,i)=>{for(f in r)for(i in r[f])r[f][i]+=n[f][i];return r},Z=(r,n,f,i)=>{for(f in r)for(i in r[f])r[f][i]*=n;return r},pr=(r,n,f,i)=>{for(f in r)for(i in r[f])r[f][i]*=n[f][i];return r},I=(r,n,f)=>{R(W=M(n,r)),R(w=M(f,n))},P=(r,n,i,o)=>(r=C(r),i=F(D(w,h=F(D(W,r),f)),f),n&&(n=C(n),S(n,i),A(w,D(Z(pr(F(i,g),n),l),T(h))),A(W,D(Z(pr(F(h,g),D(T(w),n)),l),T(r)))),i.flat())O=(O,h,n,l=O,t,a,g)=>(n||(l=M(O[0].length,O.length)),6===n&&(l=M(O.length,h[0].length)),l.map(((t,a)=>{l[a].map(((t,g)=>{n||(l[a][g]=O[g][a]),1===n&&(O[a][g]+=h[a][g]),2===n&&(O[a][g]-=h[a][g]),3===n&&(O[a][g]*=h[a][g]),4===n&&(O[a][g]*=h),5===n&&(O[a][g]=h(O[a][g])),6===n&&O[0].map(((n,t)=>{l[a][g]+=O[a][t]*h[t][g]}))}))})),l),R=(O,h,n,l)=>{for(n in O)for(l in O[n])O[n][l]=2*Math.random()-1;return O},I=(O,h,n)=>{R(W=M(h,O)),R(w=M(n,h))},P=(n,t,a)=>(a=O(O(w,h=O(O(W,n=C(n),6),f,5),6),f,5),t&&(O(t=C(t),a,2),O(w,O(O(O(O(a,g,5),t,3),l,4),O(h),6),1),O(W,O(O(O(O(h,g,5),O(O(w),t,6),3),l,4),O(n),6),1)),a.flat())


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);

// Columnize ([1,2] => [[1],[2]])
C = a => a.map(z=>[z]);
