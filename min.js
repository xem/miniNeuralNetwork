class a{constructor(a,t){this.rows=a,this.cols=t,this.data=Array(this.rows).fill().map((()=>Array(this.cols).fill(0)))}F(a){for(let t=0;t<this.rows;t++)for(let r=0;r<this.cols;r++){let o=this.data[t][r];this.data[t][r]=a(o,t,r)}return this}static F(t,r){return new a(t.rows,t.cols).F(((a,o,d)=>r(t.data[o][d],o,d)))}}C=(t,r)=>((r=new a(t.length,1)).data=t.map((a=>[a])),r),S=(t,r,o,d,n)=>{for(d in(o=new a(t.rows,t.cols)).data)for(n in o.data[d])o.data[d][n]=t.data[d][n]-r.data[d][n];return o},T=(t,r,o,d)=>{for(o in(r=new a(t.cols,t.rows)).data)for(d in r.data[o])r.data[o][d]=t.data[d][o];return r},F=(t,o,d,n)=>{for(d in r=new a(t.rows,t.cols),r.data)for(n in r.data[d])r.data[d][n]=o(t.data[d][n]);return r},D=(t,r,o,d,n,s)=>{for(o=new a(t.rows,r.cols),d=0;d<t.rows;d++)for(n=0;n<r.cols;n++)for(s=0;s<t.cols;s++)o.data[d][n]+=t.data[d][s]*r.data[s][n];return o},R=(a,t,r)=>{for(t in a.data)for(r in a.data[t])a.data[t][r]=2*Math.random()-1},A=(a,t,r,o)=>{for(r in a.data)for(o in a.data[r])a.data[r][o]+=t.data[r][o]},Z=(a,t,r,o)=>{for(r in a.data)for(o in a.data[r])a.data[r][o]*=t;return a},M=(a,t,r,o)=>{for(r in a.data)for(o in a.data[r])a.data[r][o]*=t.data[r][o];return a},I=(t,r,o)=>{R(W=new a(r,t)),R(w=new a(o,r))},P=(a,t,r,o)=>(h=D(W,a=C(a)).F(f),r=D(w,h).F(f),t&&(A(w,D(Z(M(F(r,g),o=S(C(t),r)),l),T(h))),A(W,D(Z(M(F(h,g),D(T(w),o)),l),T(a)))),r.data.flat())


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);