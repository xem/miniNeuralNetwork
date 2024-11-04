// Activation function (Sigmoid)
f = x => 1 / (1 + Math.exp(-x));

// Gradient descent function
g = x => x * (1 - x);

// Learning rate
l = 0.2;


// Matrix
M = (rows, cols) => Array(rows).fill().map(() => Array(cols).fill(0));

// Columnize ([1,2] => [[1],[2]])
C = (a, r) => { r = a.map(z=>[z]); return r; }

// Sub
S = (a, b, r, i, j) => { r = M(a.length, a[0].length); for(i in r)for(j in r[i]) r[i][j] = a[i][j] - b[i][j]; return r; }

// Transpose
T = (a, r, i, j) => { r = M(a[0].length, a.length); for(i in r) for(j in r[i]) r[i][j] = a[j][i]; return r; }

// Map
F = (a, f, i, j) => { r = M(a.length, a[0].length); for(i in r)for(j in r[i]) r[i][j] = f(a[i][j]); return r; }

// Dot
D = (a, b, r, i, j, k) => {
  r = M(a.length, b[0].length);
  for(i = 0; i < a.length; i++){
    
    for(j = 0; j < b[0].length; j++){
      for(k = 0; k < a[0].length; k++){
        r[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return r;
}






// Randomize
R = (a, i, j) => { for(i in a) for(j in a[i]) a[i][j] = Math.random() * 2 - 1; }

// Add
A = (a, b, i, j) => { for(i in a) for(j in a[i]) a[i][j] += b[i][j]; }

// Resize
Z = (a, b, i, j) => { for(i in a) for(j in a[i]) a[i][j] *= b; return a; }

// Product
pr = (a, b, i, j) => { for(i in a) for(j in a[i]) a[i][j] *= b[i][j]; return a; }

// Init
I = (i, h, o) => {
  R(W = M(h, i));
  R(w = M(o, h));
}

// Passthrough
// P(input, target) // train
// P(input) // query
P = (i, t, o, oe) => {
  i = C(i);
  h = F(D(W, i),f);
  o = F(D(w, h),f);
  
  if(t){
    oe = S(C(t), o);
    A(w, D(Z(pr(F(o, g), oe),l), T(h)));
    A(W, D(Z(pr(F(h, g), D(T(w), oe)),l), T(i)));
  }
  return o.flat();
}
