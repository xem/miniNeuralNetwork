class t{constructor(t,s){this.rows=t,this.cols=s,this.data=Array(this.rows).fill().map((()=>Array(this.cols).fill(0)))}static Z(s){return new t(s.length,1).F(((t,a)=>s[a]))}static S(s,a){return new t(s.rows,s.cols).F(((t,r,e)=>s.data[r][e]-a.data[r][e]))}R(){return this.F((t=>2*Math.random()-1))}A(t){return this.F(((s,a,r)=>s+t.data[a][r]))}static T(s){return new t(s.cols,s.rows).F(((t,a,r)=>s.data[r][a]))}static D(s,a){return new t(s.rows,a.cols).F(((t,r,e)=>{let i=0;for(let t=0;t<s.cols;t++)i+=s.data[r][t]*a.data[t][e];return i}))}M(s){return s instanceof t?this.F(((t,a,r)=>t*s.data[a][r])):this.F((t=>t*s))}F(t){for(let s=0;s<this.rows;s++)for(let a=0;a<this.cols;a++){let r=this.data[s][a];this.data[s][a]=t(r,s,a)}return this}static F(s,a){return new t(s.rows,s.cols).F(((t,r,e)=>a(s.data[r][e],r,e)))}}I=(s,a,r)=>{W=new t(a,s).R(),w=new t(r,a).R()},P=(s,a,r,e)=>(h=t.D(W,s=t.Z(s)).F(f),r=t.D(w,h).F(f),a&&(w.A(t.D(t.F(r,g).M(e=t.S(t.Z(a),r)).M(l),t.T(h))),W.A(t.D(t.F(h,g).M(t.D(t.T(w),e)).M(l),t.T(s)))),r.data.flat())


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);