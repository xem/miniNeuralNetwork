// Mini Neural Network (golf happens here)

M=(O,a,l)=>Array(O).fill().map(O=>Array(a).fill().map(O=>l??2*Math.random()-1)),O=(O,a,l,m=O,h,p,r,f="length",w)=>(l||(m=M(O[0][f],O[f])),l>5&&(m=M(O[f],a[0][f],0)),m.map((M,h)=>{m[0].map((M,p)=>{l>5?O[0].map((l,M)=>m[h][p]+=O[h][M]*a[M][p]):(r=O[h]?.[p],w=a?.[h]?.[p],m[h][p]=l>4?a(r):l>3?r*a:l?[,r+w,r-w,r*w][l]:O[p][h])})}),m),I=(O,a,l)=>{W=M(a,O),w=M(l,a)},P=(a,m,M=O(O(w,h=O(O(W,a,6),f,5),6),f,5))=>(m&&(O(m,M,2),O(w,O(O(O(O(M,g,5),m,3),l,4),O(h),6),1),O(W,O(O(O(O(h,g,5),O(O(w),m,6),3),l,4),O(a),6),1)),M)


// Customization
// =============

// Learning rate
l = 0.2;

// Activation function (sigmoid)
f = x => 1 / (1 + Math.E ** -x);

// Gradient descent function
g = x => x * (1 - x);
