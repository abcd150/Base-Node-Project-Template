const express = require('express');

const { serverconfig } = require('./config');

const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(serverconfig.PORT, () => {
console.log(`Successfully started the server on PORT: ${serverconfig.PORT}`);
});