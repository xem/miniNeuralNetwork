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

  static fromArray(arr) {
    return new Matrix(arr.length, 1).F((e, i) => arr[i]);
  }

  static S(a, b) {
    // Return a new Matrix a-b
    return new Matrix(a.rows, a.cols)
      .F((_, i, j) => a.data[i][j] - b.data[i][j]);
  }

  toArray() {
    let arr = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        arr.push(this.data[i][j]);
      }
    }
    return arr;
  }

  randomize() {
    return this.F(e => Math.random() * 2 - 1);
  }

  A(n) {
    return this.F((e, i, j) => e + n.data[i][j]);
  }

  static T(matrix) {
    return new Matrix(matrix.cols, matrix.rows)
      .F((_, i, j) => matrix.data[j][i]);
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
    return new Matrix(matrix.rows, matrix.cols)
      .F((e, i, j) => func(matrix.data[i][j], i, j));
  }
}


// Init
I = (i, h, o) => {
  wih = new Matrix(h, i);
  who = new Matrix(o, h);
  wih.randomize();
  who.randomize();
}

// Predict
P = (i) => {
  i = Matrix.fromArray(i);
  let h = Matrix.D(wih, i);
  h.F(f);
  let output = Matrix.D(who, h);
  output.F(f);
  return output.toArray();
}

// Train
TR = (i, t) => {
  i = Matrix.fromArray(i);
  let h = Matrix.D(wih, i);
  h.F(f);
  let o = Matrix.D(who, h);
  o.F(f);
  let targets = Matrix.fromArray(t);
  let oe = Matrix.S(targets, o);
  let gr = Matrix.F(o, g);
  gr.M(oe);
  gr.M(l);
  let ht = Matrix.T(h);
  let whod = Matrix.D(gr, ht);
  who.A(whod);
  let whot = Matrix.T(who);
  let he = Matrix.D(whot, oe);
  let hg = Matrix.F(h, g);
  hg.M(he);
  hg.M(l);
  let it = Matrix.T(i);
  let wihd = Matrix.D(hg, it);
  wih.A(wihd);
}