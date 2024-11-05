// Activation function (Sigmoid)
f = x => 1 / (1 + Math.exp(-x));

// Gradient descent function
g = x => x * (1 - x);

// Learning rate
l = 0.2;

// Columnize ([1,2] => [[1],[2]])
C = a => a.map(z=>[z]);

// Matrix
M = (r, c, z) => Array(r).fill().map(() => Array(c).fill(0));

// Operations on matrices
// o === 0 (default): transpose (a.T)
// o === 1: add (a+b)
// o === 2: sub (a-b)
// o === 3: mul (a*b)
// o === 4: scale (a*b)
// o === 5: map (b(a))
// o === 6: dot (a.b)
O = (a, b, o, r = a, i, j, k, l = "length", z) => {
  if(!o) r = M(a[0][l], a[l], 1);
  if(o > 5) r = M(a[l], b[0][l], 1);
  for(i = r[l]; i--;){
    for(j = r[0][l]; j--;){
      if(o > 5){
        for(k = a[0][l];k--;){
          r[i][j] += a[i][k] * b[k][j]; // dot
        }
      }
      else {
        z = a[i]?.[j];
        r[i][j] =
        (o > 4) ? b(z) // map
        : (o > 3) ? z * b // scale
        : (o > 2) ? z * b[i][j] // mul
        : (o > 1) ? z - b[i][j] // sub
        : o ? z + b[i][j] // add
        : a[j][i]; // transpose
      }
    }
  }
  return r;
}

// Randomize
R = a => O(a, z=>Math.random()*2-1, 5);

// Init
I = (i, h, o) => {
  W = R(M(h, i));
  w = R(M(o, h));
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
