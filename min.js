M=(O,l,a)=>Array(O).fill().map((()=>Array(l).fill(0))),O=(O,l,a,r=O,h,n,f)=>(a||(r=M(O[0].length,O.length)),6===a&&(r=M(O.length,l[0].length)),r.map(((h,n)=>{r[n].map(((h,f)=>{a>5?O[0].map(((a,h)=>{r[n][f]+=O[n][h]*l[h][f]})):r[n][f]=a>4?l(O[n][f]):a>3?O[n][f]*l:a>2?O[n][f]*l[n][f]:a>1?O[n][f]-l[n][f]:a?O[n][f]+l[n][f]:O[f][n]}))})),r),R=(O,l,a,r)=>{for(a in O)for(r in O[a])O[a][r]=2*Math.random()-1;return O},I=(O,l,a)=>{R(W=M(l,O)),R(w=M(a,l))},P=(a,r,n)=>(n=O(O(w,h=O(O(W,a=C(a),6),f,5),6),f,5),r&&(O(r=C(r),n,2),O(w,O(O(O(O(n,g,5),r,3),l,4),O(h),6),1),O(W,O(O(O(O(h,g,5),O(O(w),r,6),3),l,4),O(a),6),1)),n.flat())


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
