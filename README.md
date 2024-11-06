# MiniNeuralNetwork

A fast and tiny artificial neural network in JavaScript in less than 512 bytes!

```js
M=(O,a,l)=>Array(O).fill().map(O=>Array(a).fill().map(O=>l??2*Math.random
()-1)),O=(O,a,l,m=O,h,p,r,f="length",w)=>(l||(m=M(O[0][f],O[f])),l>5&&(m=
M(O[f],a[0][f],0)),m.map((M,h)=>{m[0].map((M,p)=>{l>5?O[0].map((l,M)=>m[h
][p]+=O[h][M]*a[M][p]):(r=O[h]?.[p],w=a?.[h]?.[p],m[h][p]=l>4?a(r):l>3?r*
a:l?[,r+w,r-w,r*w][l]:O[p][h])})}),m),I=(O,a,l)=>{W=M(a,O),w=M(l,a)},P=(a
,m,M=O(O(w,h=O(O(W,a,6),f,5),6),f,5))=>(m&&(O(m,M,2),O(w,O(O(O(O(M,g,5),m
,3),l,4),O(h),6),1),O(W,O(O(O(O(h,g,5),O(O(w),m,6),3),l,4),O(a),6),1)),M)
```

## How to use it?

- Define your own learning rate `l`, activation function `f` and gradient descent function `g`. For example:

```js
// Customization
// =============

// Learning rate
l = 0.3;

// Activation function (sigmoid)
f = (x => 1 / (1 + Math.E**-x));

// Gradient descent function
g = (y => y * (1 - y));
```

- Initialize the network with the function `I`:

```js
// Init (input_nodes, hidden_nodes, output_nodes)
// ==============================================

I(2, 10, 1);
```

- Train the network by passing input data and target output through the `P` passthrough function (many times):

```js
// Train (input, target)
// =====================

for(i = 0; i < 50000; i++){ // Ex: XOR network
  P([[0],[0]], [[0]])
  P([[1],[0]], [[1]])
  P([[0],[1]], [[1]])
  P([[1],[1]], [[0]])
}
```


- Query the network by passing input data to the `P` function:

```js
// Query (input)
// =============

P([[1],[0]]) // 0.99...
P([[1],[1]]) // 0.01...
```

## Demos

- [AND](https://xem.github.io/miniNeuralNetwork/demos/AND.html)
- [XOR](https://xem.github.io/miniNeuralNetwork/demos/XOR.html)
- [Handwritten digits](https://xem.github.io/miniNeuralNetwork/demos/digits.html)   (warning: 128MB!)

## Sources

- This repo (3kb minified): https://github.com/CodingTrain/Toy-Neural-Network-JS/tree/master
- This book: https://www.amazon.fr/Make-Your-Own-Neural-Network/dp/1530826608/
- This database: https://github.com/lorenmh/mnist_handwritten_json

## Credits

Golfed by @MaximeEuziere, @JohnMeuser, @IrratixMusic 