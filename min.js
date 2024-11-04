class t{constructor(t,a){this.rows=t,this.cols=a,this.data=Array(this.rows).fill().map((()=>Array(this.cols).fill(0)))}copy(){let a=new t(this.rows,this.cols);for(let t=0;t<this.rows;t++)for(let r=0;r<this.cols;r++)a.data[t][r]=this.data[t][r];return a}static fromArray(a){return new t(a.length,1).map(((t,r)=>a[r]))}static subtract(a,r){return new t(a.rows,a.cols).map(((t,l,s)=>a.data[l][s]-r.data[l][s]))}toArray(){let t=[];for(let a=0;a<this.rows;a++)for(let r=0;r<this.cols;r++)t.push(this.data[a][r]);return t}randomize(){return this.map((t=>2*Math.random()-1))}add(t){return this.map(((a,r,l)=>a+t.data[r][l]))}static transpose(a){return new t(a.cols,a.rows).map(((t,r,l)=>a.data[l][r]))}static multiply(a,r){return new t(a.rows,r.cols).map(((t,l,s)=>{let o=0;for(let t=0;t<a.cols;t++)o+=a.data[l][t]*r.data[t][s];return o}))}multiply(a){return a instanceof t?this.map(((t,r,l)=>t*a.data[r][l])):this.map((t=>t*a))}map(t){for(let a=0;a<this.rows;a++)for(let r=0;r<this.cols;r++){let l=this.data[a][r];this.data[a][r]=t(l,a,r)}return this}static map(a,r){return new t(a.rows,a.cols).map(((t,l,s)=>r(a.data[l][s],l,s)))}}I=(a,r,l)=>{wih=new t(r,a),who=new t(l,r),wih.randomize(),who.randomize()},P=a=>{a=t.fromArray(a);let r=t.multiply(wih,a);r.map(f);let l=t.multiply(who,r);return l.map(f),l.toArray()},T=(a,r)=>{a=t.fromArray(a);let s=t.multiply(wih,a);s.map(f);let o=t.multiply(who,s);o.map(f);let i=t.fromArray(r),e=t.subtract(i,o),m=t.map(o,g);m.multiply(e),m.multiply(l);let p=t.transpose(s),h=t.multiply(m,p);who.add(h);let n=t.transpose(who),u=t.multiply(n,e),w=t.map(s,g);w.multiply(u),w.multiply(l);let d=t.transpose(a),c=t.multiply(w,d);wih.add(c)}


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);