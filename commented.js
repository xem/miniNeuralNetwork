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

  copy() {
    let m = new Matrix(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        m.data[i][j] = this.data[i][j];
      }
    }
    return m;
  }

  static fromArray(arr) {
    return new Matrix(arr.length, 1).map((e, i) => arr[i]);
  }

  static subtract(a, b) {
    // Return a new Matrix a-b
    return new Matrix(a.rows, a.cols)
      .map((_, i, j) => a.data[i][j] - b.data[i][j]);
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
    return this.map(e => Math.random() * 2 - 1);
  }

  add(n) {
    return this.map((e, i, j) => e + n.data[i][j]);
  }

  static transpose(matrix) {
    return new Matrix(matrix.cols, matrix.rows)
      .map((_, i, j) => matrix.data[j][i]);
  }

  static multiply(a, b) {
    return new Matrix(a.rows, b.cols)
      .map((e, i, j) => {
        // Dot product of values in col
        let sum = 0;
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }
        return sum;
      });
  }

  multiply(n) {
    if (n instanceof Matrix) {
      // hadamard product
      return this.map((e, i, j) => e * n.data[i][j]);
    } else {
      // Scalar product
      return this.map(e => e * n);
    }
  }

  map(func) {
    // Apply a function to every element of matrix
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let val = this.data[i][j];
        this.data[i][j] = func(val, i, j);
      }
    }
    return this;
  }

  static map(matrix, func) {
    // Apply a function to every element of matrix
    return new Matrix(matrix.rows, matrix.cols)
      .map((e, i, j) => func(matrix.data[i][j], i, j));
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
  let h = Matrix.multiply(wih, i);
  h.map(f);
  let output = Matrix.multiply(who, h);
  output.map(f);
  return output.toArray();
}

// Train
T = (i, t) => {
  i = Matrix.fromArray(i);
  let h = Matrix.multiply(wih, i);
  h.map(f);
  let o = Matrix.multiply(who, h);
  o.map(f);
  let targets = Matrix.fromArray(t);
  let oe = Matrix.subtract(targets, o);
  let gr = Matrix.map(o, g);
  gr.multiply(oe);
  gr.multiply(l);
  let ht = Matrix.transpose(h);
  let whod = Matrix.multiply(gr, ht);
  who.add(whod);
  let whot = Matrix.transpose(who);
  let he = Matrix.multiply(whot, oe);
  let hg = Matrix.map(h, g);
  hg.multiply(he);
  hg.multiply(l);
  let it = Matrix.transpose(i);
  let wihd = Matrix.multiply(hg, it);
  wih.add(wihd);
}