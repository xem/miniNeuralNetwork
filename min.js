class t{constructor(t,r){this.rows=t,this.cols=r,this.data=Array(this.rows).fill().map((()=>Array(this.cols).fill(0)))}static fromArray(r){return new t(r.length,1).F(((t,a)=>r[a]))}static S(r,a){return new t(r.rows,r.cols).F(((t,s,o)=>r.data[s][o]-a.data[s][o]))}toArray(){let t=[];for(let r=0;r<this.rows;r++)for(let a=0;a<this.cols;a++)t.push(this.data[r][a]);return t}randomize(){return this.F((t=>2*Math.random()-1))}A(t){return this.F(((r,a,s)=>r+t.data[a][s]))}static T(r){return new t(r.cols,r.rows).F(((t,a,s)=>r.data[s][a]))}static D(r,a){return new t(r.rows,a.cols).F(((t,s,o)=>{let e=0;for(let t=0;t<r.cols;t++)e+=r.data[s][t]*a.data[t][o];return e}))}M(r){return r instanceof t?this.F(((t,a,s)=>t*r.data[a][s])):this.F((t=>t*r))}F(t){for(let r=0;r<this.rows;r++)for(let a=0;a<this.cols;a++){let s=this.data[r][a];this.data[r][a]=t(s,r,a)}return this}static F(r,a){return new t(r.rows,r.cols).F(((t,s,o)=>a(r.data[s][o],s,o)))}}I=(r,a,s)=>{wih=new t(a,r),who=new t(s,a),wih.randomize(),who.randomize()},P=r=>{r=t.fromArray(r);let a=t.D(wih,r);a.F(f);let s=t.D(who,a);return s.F(f),s.toArray()},TR=(r,a)=>{r=t.fromArray(r);let s=t.D(wih,r);s.F(f);let o=t.D(who,s);o.F(f);let e=t.fromArray(a),i=t.S(e,o),h=t.F(o,g);h.M(i),h.M(l);let n=t.T(s),w=t.D(h,n);who.A(w);let c=t.T(who),F=t.D(c,i),d=t.F(s,g);d.M(F),d.M(l);let u=t.T(r),A=t.D(d,u);wih.A(A)}


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);