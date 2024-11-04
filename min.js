class t{constructor(t,a){this.rows=t,this.cols=a,this.data=Array(this.rows).fill().map((()=>Array(this.cols).fill(0)))}static S(a,s){return new t(a.rows,a.cols).F(((t,r,e)=>a.data[r][e]-s.data[r][e]))}R(){return this.F((t=>2*Math.random()-1))}A(t){return this.F(((a,s,r)=>a+t.data[s][r]))}static T(a){return new t(a.cols,a.rows).F(((t,s,r)=>a.data[r][s]))}static D(a,s){return new t(a.rows,s.cols).F(((t,r,e)=>{let l=0;for(let t=0;t<a.cols;t++)l+=a.data[r][t]*s.data[t][e];return l}))}M(a){return a instanceof t?this.F(((t,s,r)=>t*a.data[s][r])):this.F((t=>t*a))}F(t){for(let a=0;a<this.rows;a++)for(let s=0;s<this.cols;s++){let r=this.data[a][s];this.data[a][s]=t(r,a,s)}return this}static F(a,s){return new t(a.rows,a.cols).F(((t,r,e)=>s(a.data[r][e],r,e)))}}C=(a,s)=>((s=new t(a.length,1)).data=a.map((t=>[t])),s),I=(a,s,r)=>{W=new t(s,a).R(),w=new t(r,s).R()},P=(a,s,r,e)=>(h=t.D(W,a=C(a)).F(f),r=t.D(w,h).F(f),s&&(w.A(t.D(t.F(r,g).M(e=t.S(C(s),r)).M(l),t.T(h))),W.A(t.D(t.F(h,g).M(t.D(t.T(w),e)).M(l),t.T(a)))),r.data.flat())


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);