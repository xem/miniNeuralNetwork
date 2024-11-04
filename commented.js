// Activation function (Sigmoid)
f = x => 1 / (1 + Math.exp(-x));

// Gradient descent function
g = x => x * (1 - x);

// Learning rate
l = 0.2;


class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
  }
}

// Columnize ([1,2] => [[1],[2]])
C = (a, r) => { r = new Matrix(a.length, 1); r.data = a.map(z=>[z]); return r; }

// Sub
S = (a, b, r, i, j) => { r = new Matrix(a.rows, a.cols); for(i in r.data)for(j in r.data[i]) r.data[i][j] = a.data[i][j] - b.data[i][j]; return r; }

// Transpose
T = (a, r, i, j) => { r = new Matrix(a.cols, a.rows); for(i in r.data) for(j in r.data[i]) r.data[i][j] = a.data[j][i]; return r; }

// Map
F = (a, f, i, j) => { r = new Matrix(a.rows, a.cols); for(i in r.data)for(j in r.data[i]) r.data[i][j] = f(a.data[i][j]); return r; }

// Dot
D = (a, b, r, i, j, k) => {
  r = new Matrix(a.rows, b.cols);
  for(i = 0; i < a.rows; i++){
    for(j = 0; j < b.cols; j++){
      for(k = 0; k < a.cols; k++){
        r.data[i][j] += a.data[i][k] * b.data[k][j];
      }
    }
  }
  return r;
}

// Randomize
R = (a, i, j) => { for(i in a.data) for(j in a.data[i]) a.data[i][j] = Math.random() * 2 - 1; }

// Add
A = (a, b, i, j) => { for(i in a.data) for(j in a.data[i]) a.data[i][j] += b.data[i][j]; }

// Resize
Z = (a, b, i, j) => { for(i in a.data) for(j in a.data[i]) a.data[i][j] *= b; return a; }

// Mul
M = (a, b, i, j) => { for(i in a.data) for(j in a.data[i]) a.data[i][j] *= b.data[i][j]; return a; }

// Init
I = (i, h, o) => {
  R(W = new Matrix(h, i));
  R(w = new Matrix(o, h));
}

// Passthrough
// P(input, target) // train
// P(input) // query
P = (i, t, o, oe) => {
  h = F(D(W, i = C(i)),f);
  o = F(D(w, h),f);
  if(t){
    A(w, D(Z(M(F(o, g), oe = S(C(t), o)),l), T(h)));
    A(W, D(Z(M(F(h, g), D(T(w), oe)),l), T(i)));
  }
  return o.data.flat();
}
