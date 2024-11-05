// Activation function (Sigmoid)
f = x => 1 / (1 + Math.exp(-x));

// Gradient descent function
g = x => x * (1 - x);

// Learning rate
l = 0.2;

// Columnize ([1,2] => [[1],[2]])
C = a => a.map(z=>[z]);

// Matrix
M = (r, c, z) => Array(r).fill().map(() => Array(c).fill().map(x=>z?0:Math.random()*2-1));

// Operations on matrices
// o === 0 (default): transpose (a.T)
// o === 1: add (a+b)
// o === 2: sub (a-b)
// o === 3: mul (a*b)
// o === 4: scale (a*b)
// o === 5: map (b(a))
// o === 6: dot (a.b)
O = (a, b, o, r = a, i, j, k, l = "length", z) => {
  if(!o) r = M(a[0][l], a[l]);
  if(o > 5) r = M(a[l], b[0][l], 1);
  for(i = r[l]; i--;){
    for(j = r[0][l]; j--;){
      if(o > 5){
        for(k = a[0][l];k--;){
          r[i][j] += a[i][k] * b[k][j]; // dot
        }
      }
      else {
        k = a[i]?.[j];
        z = b?.[i]?.[j];
        r[i][j] =
        (o > 4) ? b(k) // map
        : (o > 3) ? k * b // scale
        : (o > 2) ? k * z // mul
        : (o > 1) ? k - z // sub
        : o ? k + z // add
        : a[j][i]; // transpose
      }
    }
  }
  return r;
}

// Init
I = (i, h, o) => {
  W = M(h, i);
  w = M(o, h);
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
