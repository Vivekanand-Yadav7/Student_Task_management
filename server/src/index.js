require('dotenv').config();
const user_router = require('./routes/user');
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.use('/api/user', user_router);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});