// count to 5 both backwards and forwards
const brain = require("brain.js");

const network = new brain.NeuralNetwork()

const trainingData = [
    [1,2,3,4,5,],
    [5,4,3,2,1,]
];

const net =  new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([1,2,3,4]));
console.log(net.run([5,4,3,2]));


