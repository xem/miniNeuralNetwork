# MiniNeuralNetwork

A fast and tiny artificial neural network in JavaScript!

```js
M=(O,r,f)=>Array(O).fill().map(()=>Array(r).fill().map(O=>f??2*Math.
random()-1)),O=(O,r,f,l=O,a,h,e,o="length",w)=>{for(f||(l=M(O[0][o],
O[o])),f>5&&(l=M(O[o],r[0][o],0)),a=l[o];a--;)for(h=l[0][o];h--;)if(
f>5)for(e=O[0][o];e--;)l[a][h]+=O[a][e]*r[e][h];else e=O[a]?.[h],w=r
?.[a]?.[h],l[a][h]=f>4?r(e):f>3?e*r:f>2?e*w:f>1?e-w:f?e+w:O[h][a];
return l},I=(O,r,f)=>{W=M(r,O),w=M(f,r)},P=(r,a,M)=>(M=O(O(w,h=O(O(W
,r=O(r),6),f,5),6),f,5),a&&(O(a=O(a),M,2),O(w,O(O(O(O(M,g,5),a,3),l,
4),O(h),6),1),O(W,O(O(O(O(h,g,5),O(O(w),a,6),3),l,4),O(r),6),1)),M)
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

i(2, 3, 1);
```

- Train the network by passing input data and target output through the `P` passthrough function (many times):

```js
// Train (input, target)
// =====================

for(i = 0; i < 10000; i++){
  P([[0,0]], [[0]])
  P([[1,0]], [[1]])
  P([[0,1]], [[1]])
  P([[1,1]], [[0]])
}
```


- Query the network by passing input data to the `P` function:

```js
// Query (input)
// =============

p([[1,0]]) // 0.99...
p([[1,1]]) // 0.01...
```

## Demos

- [AND](https://xem.github.io/miniNeuralNetwork/demos/AND.html)
- [XOR](https://xem.github.io/miniNeuralNetwork/demos/XOR.html)
- [Handwritten digits](https://xem.github.io/miniNeuralNetwork/demos/digits.html)   (warning: 128MB!)

## Sources

- This repo (3kb minified): https://github.com/CodingTrain/Toy-Neural-Network-JS/tree/master?tab=readme-ov-file
- This book: https://www.amazon.fr/Make-Your-Own-Neural-Network/dp/1530826608/
- This database: https://github.com/lorenmh/mnist_handwritten_json

## Credits

Golfed by @MaximeEuziere and @JohnMeuser