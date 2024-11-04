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

  // fromArray
  static Z(arr) {
    return new Matrix(arr.length, 1).F((e, i) => arr[i]);
  }

  static S(a, b) {
    // Return a new Matrix a-b
    return new Matrix(a.rows, a.cols).F((_, i, j) => a.data[i][j] - b.data[i][j]);
  }

  // toArray
  Y() {
    return this.data.flat();
  }

  R() {
    return this.F(e => Math.random() * 2 - 1);
  }

  A(n) {
    return this.F((e, i, j) => e + n.data[i][j]);
  }

  static T(matrix) {
    return new Matrix(matrix.cols, matrix.rows).F((_, i, j) => matrix.data[j][i]);
  }

  static D(a, b) {
    return new Matrix(a.rows, b.cols)
      .F((e, i, j) => {
        // Dot product of values in col
        let sum = 0;
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }
        return sum;
      });
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


// Init
I = (i, h, o) => {
  W = new Matrix(h, i).R();
  w = new Matrix(o, h).R();
}

// Predict
P = (i) => {
  h = Matrix.D(W, i = Matrix.Z(i)).F(f);
  return Matrix.D(w, h).F(f).Y();
}

// Train
TR = (i, t, o, oe) => {
  h = Matrix.D(W, i = Matrix.Z(i)).F(f);
  w.A(Matrix.D(Matrix.F(o = Matrix.D(w, h).F(f), g).M(oe = Matrix.S(Matrix.Z(t), o)).M(l), Matrix.T(h)));
  W.A(Matrix.D(Matrix.F(h, g).M(Matrix.D(Matrix.T(w), oe)).M(l), Matrix.T(i)));
}