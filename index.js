require("dotenv").config();
const server = require("./server");

const port = process.env.PORT || 1337;

server.listen(port, () => console.log(`API running on port ${port}`));
