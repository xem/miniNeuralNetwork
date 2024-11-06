// Activation function (Sigmoid)
f = x => 1 / (1 + Math.exp(-x));

// Gradient descent function
g = x => x * (1 - x);

// Learning rate
l = 0.2;

// Matrix creation
M = (r, c, z) => Array(r).fill().map(() => Array(c).fill().map(x => z ?? Math.random() * 2 - 1));

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
  if(o > 5) r = M(a[l], b[0][l], 0);
  for(i = r[l]; i--;){
    for(j = r[0][l]; j--;){
      o > 5 
      ? a[0].map((_,k)=> r[i][j] += a[i][k] * b[k][j]) // dot
      : (
        k = a[i]?.[j],
        z = b?.[i]?.[j],
        r[i][j] =
        (o > 4) ? b(k) // map
        : (o > 3) ? k * b // scale
        : o ? [,k+z,k-z,k*z][o] // +, -, *
        : a[j][i] // transpose
      )
    }
  }
  return r;
}

// Init: I(input_nodes, hidden_nodes, output_nodes)
I = (i, h, o) => {
  W = M(h, i);
  w = M(o, h);
}

// Passthrough: P(input, target) for training, P(input) for prediction
P = (i, t, o) => {
  o = O(O(w, h = O(O(W, i = O(i), 6), f, 5), 6), f, 5);
  if(t){
    O(t = O(t), o, 2);
    O(w, O(O(O(O(o, g, 5), t, 3), l, 4), O(h), 6), 1);
    O(W, O(O(O(O(h, g, 5), O(O(w), t, 6), 3), l, 4), O(i), 6), 1);
  }
  return o;
}

