// Activation function (Sigmoid)
f = x => 1 / (1 + Math.exp(-x));

// Gradient descent function
g = x => x * (1 - x);

// Learning rate
l = 0.2;

// Matrix
M = (r, c, z) => Array(r).fill().map(() => Array(c).fill(0));

// Columnize ([1,2] => [[1],[2]])
C = a => a.map(z=>[z]);


// Operations on matrices
// o === 0 (default): transpose (a.T)
// o === 1: add (a+b)
// o === 2: sub (a-b)
// o === 3: mul (a*b)
// o === 4: scale (a*b)
// o === 5: map (b(a))
// o === 6: dot (a.b)
O = (a, b, o, r = a, i, j, k) => {
  if(!o) r = M(a[0].length, a.length);
  if(o === 6) r = M(a.length, b[0].length);
  r.map((z,i)=>{
    r[i].map((y,j)=>{
      if(!o) r[i][j] = a[j][i]; // transpose
      if(o === 1) a[i][j] += b[i][j]; // add
      if(o === 2) a[i][j] -= b[i][j]; // sub
      if(o === 3) a[i][j] *= b[i][j]; // mul
      if(o === 4) a[i][j] *= b; // scale
      if(o === 5) a[i][j] = b(a[i][j]) // map
      if(o === 6){
        a[0].map((x,k)=>{
          r[i][j] += a[i][k] * b[k][j]; // dot
        })
      }
    })
  })
  return r;
}

// Randomize
R = (a, b, i, j) => { for(i in a) for(j in a[i]) a[i][j] = Math.random() * 2 - 1; return a; }

// Init
I = (i, h, o) => {
  R(W = M(h, i));
  R(w = M(o, h));
}

// Passthrough
// P(input, target) // train
// P(input) // query
P = (i, t, o) => {
  o = O(O(w, h = O(O(W, i = C(i), 6), f, 5), 6), f, 5);
  if(t){
    O(t = C(t), o, 2);
    O(w, O(O(O(O(o, g, 5), t, 3), l, 4), O(h), 6), 1);
    O(W, O(O(O(O(h, g, 5), O(O(w), t, 6), 3), l, 4), O(i), 6), 1);
  }
  return o.flat();
}
