// Mini Neural Network (golf happens here)

M=(O,r,a)=>Array(O).fill().map(_=>Array(r).fill().map(O=>a??2*Math.random()-1)),O=(O,r,a,l=O,f,h,m,w="length",g)=>{for(a||(l=M(O[0][w],O[w])),a>5&&(l=M(O[w],r[0][w],0)),f=l[w];f--;)for(h=l[0][w];h--;)a>5?O[0].map(((a,M)=>l[f][h]+=O[f][M]*r[M][h])):(m=O[f]?.[h],g=r?.[f]?.[h],l[f][h]=a>4?r(m):a>3?m*r:a?[,m+g,m-g,m*g][a]:O[h][f]);return l},I=(O,r,a)=>{W=M(r,O),w=M(a,r)},P=(r,a,M)=>(M=O(O(w,h=O(O(W,r=O(r),6),f,5),6),f,5),a&&(O(a=O(a),M,2),O(w,O(O(O(O(M,g,5),a,3),l,4),O(h),6),1),O(W,O(O(O(O(h,g,5),O(O(w),a,6),3),l,4),O(r),6),1)),M)


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);
