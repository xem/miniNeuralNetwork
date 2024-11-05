// Mini Neural Network (golf happens here)

M=(O,r,f)=>Array(O).fill().map(()=>Array(r).fill().map(O=>f??2*Math.random()-1)),O=(O,r,f,l=O,a,h,e,o="length",w)=>{for(f||(l=M(O[0][o],O[o])),f>5&&(l=M(O[o],r[0][o],0)),a=l[o];a--;)for(h=l[0][o];h--;)if(f>5)for(e=O[0][o];e--;)l[a][h]+=O[a][e]*r[e][h];else e=O[a]?.[h],w=r?.[a]?.[h],l[a][h]=f>4?r(e):f>3?e*r:f?[,e+w,e-w,e*w][f]:O[h][a];return l},I=(O,r,f)=>{W=M(r,O),w=M(f,r)},P=(r,a,M)=>(M=O(O(w,h=O(O(W,r=O(r),6),f,5),6),f,5),a&&(O(a=O(a),M,2),O(w,O(O(O(O(M,g,5),a,3),l,4),O(h),6),1),O(W,O(O(O(O(h,g,5),O(O(w),a,6),3),l,4),O(r),6),1)),M)


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);
