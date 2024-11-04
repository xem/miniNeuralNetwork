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

  // Randomize
  R() { return this.F(e => Math.random() * 2 - 1); }

  A(n) {
    return this.F((e, i, j) => e + n.data[i][j]);
  }

  M(n) {
    if (n instanceof Matrix) {
      // hadamard product
      return this.F((e, i, j) => e * n.data[i][j]);
    } else {
      // Scalar product
      return this.F(e => e * n);
    }
  }

  F(func) {
    // Apply a function to every element of matrix
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let val = this.data[i][j];
        this.data[i][j] = func(val, i, j);
      }
    }
    return this;
  }

  static F(matrix, func) {
    // Apply a function to every element of matrix
    return new Matrix(matrix.rows, matrix.cols).F((e, i, j) => func(matrix.data[i][j], i, j));
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

// Init
I = (i, h, o) => {
  W = new Matrix(h, i).R();
  w = new Matrix(o, h).R();
}

// Passthrough
// P(input, target) // train
// P(input) // query
P = (i, t, o, oe) => {
  h = D(W, i = C(i)).F(f);
  o = D(w, h).F(f);
  if(t){
    w.A(D(F(o, g).M(oe = S(C(t), o)).M(l), T(h)));
    W.A(D(F(h, g).M(D(T(w), oe)).M(l), T(i)));
  }
  return o.data.flat();
}
