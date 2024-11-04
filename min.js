class t{constructor(t,r){this.rows=t,this.cols=r,this.data=Array(this.rows).fill().map((()=>Array(this.cols).fill(0)))}static Z(r){return new t(r.length,1).F(((t,s)=>r[s]))}static S(r,s){return new t(r.rows,r.cols).F(((t,a,e)=>r.data[a][e]-s.data[a][e]))}Y(){return this.data.flat()}R(){return this.F((t=>2*Math.random()-1))}A(t){return this.F(((r,s,a)=>r+t.data[s][a]))}static T(r){return new t(r.cols,r.rows).F(((t,s,a)=>r.data[a][s]))}static D(r,s){return new t(r.rows,s.cols).F(((t,a,e)=>{let h=0;for(let t=0;t<r.cols;t++)h+=r.data[a][t]*s.data[t][e];return h}))}M(r){return r instanceof t?this.F(((t,s,a)=>t*r.data[s][a])):this.F((t=>t*r))}F(t){for(let r=0;r<this.rows;r++)for(let s=0;s<this.cols;s++){let a=this.data[r][s];this.data[r][s]=t(a,r,s)}return this}static F(r,s){return new t(r.rows,r.cols).F(((t,a,e)=>s(r.data[a][e],a,e)))}}I=(r,s,a)=>{W=new t(s,r).R(),w=new t(a,s).R()},P=r=>(h=t.D(W,r=t.Z(r)).F(f),t.D(w,h).F(f).Y()),TR=(r,s,a,e)=>{h=t.D(W,r=t.Z(r)).F(f),w.A(t.D(t.F(a=t.D(w,h).F(f),g).M(e=t.S(t.Z(s),a)).M(l),t.T(h))),W.A(t.D(t.F(h,g).M(t.D(t.T(w),e)).M(l),t.T(r)))}


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);