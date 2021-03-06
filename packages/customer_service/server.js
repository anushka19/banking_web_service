const express = require('express');
const config = require('./config');
const { port } = config;
const app = express();
app.use(express.json());

require('./db_utils')(config);
require('./routes/get')(app);
require('./routes/post')(app);

app.listen({ port: port }, () => 
    console.log(`server ready at http://localhost:${port}`)
)