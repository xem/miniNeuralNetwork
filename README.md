# MiniNeuralNetwork

The smallest artificial neural network ever (&lt; 512 bytes) !

```js
M=(O,a=1,l)=>Array(O).fill().map((()=>Array(a).fill(l?0:Math.random()-1))),O=(O,a,l,f
=l>5&&M(O.length,a[0].length,1),m)=>(O.map(((O,M)=>{O.map(((p,r)=>{m=a[M]?.[r],l>5?a[
0].map(((O,l)=>f[M][l]+=p*a[r][l])):O[r]=l>3?a(p):l>2?p*a:l>1?p*m:l?p-m:p+m}))})),l>5
?f:O),i=(O,a,l)=>{w=M(a,O),W=M(l,a),b=M(a),B=M(l)},p=(a,M,m,p)=>(p=O(O(O(W,O(O(m=O(w,
a,6),b),f,4),6),B),f,4),M&&(O(M,p,1),O(W,O(p=O(O(O(p,g,4),M,2),l,3),[m.flat()],6)),O(
B,p),O(w,O(m=O(O(O(m,g,4),O(W[0].map((O=>[O])),M,6),2),l,3),[a.flat()],6)),O(b,m)),p)
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

- Initialize the network with the function `i`:

```js
// Init (input_nodes, hidden_nodes, output_nodes)
i(2,3,1);
```

- Train the network by passing input data and target output through the `p` passthrough function (many times):

```js
// Train (input, target)
// Example for a XOR network:
for(i = 0; i < 10000; i++){
  p([[0],[0]], [[0]])
  p([[1],[0]], [[1]])
  p([[0],[1]], [[1]])
  p([[1],[1]], [[0]])
}
```

(warning: `p` edits the target output, be careful if you want to reuse it)


- Query the network by passing input data to the `p` function:

```js
// Query (input)
// Example for a XOR network:
p([[1],[0]]) // 0.99...
p([[1],[1]]) // 0.01...
```

## Demos

- [AND](https://xem.github.io/miniNeuralNetwork/demos/AND.html)
- [XOR](https://xem.github.io/miniNeuralNetwork/demos/XOR.html)
- [Handwritten digits](https://xem.github.io/miniNeuralNetwork/demos/digits.html)

## Credits

-- golfed by @MaximeEuziere and @JohnMeuser