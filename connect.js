const mongoose = require("mongoose");
// Middleware
//const db = 'mongodb+srv://flowergift:flowergift@cluster0.1l2puru.mongodb.net/?retryWrites=true&w=majority'
//const db = 'mongodb://localhost:27017/testfish';
// Connect to MongoDB using the connection string
const db = "mongodb://cvlnpsg987:BAlamanohar5@ac-hbnfkys-shard-00-00.daockpm.mongodb.net:27017,ac-hbnfkys-shard-00-01.daockpm.mongodb.net:27017,ac-hbnfkys-shard-00-02.daockpm.mongodb.net:27017/?replicaSet=atlas-2vcoxi-shard-0&ssl=true&authSource=admin"
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017