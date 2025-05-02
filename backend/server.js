const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('MongoDB connected'))
    .catch((err)=> console.error('MongoDB connection failed',err));

app.use('/users',userRoutes);
app.use('/contacts',contactRoutes);

const PORT=process.env.PORT;
app.listen(PORT, ()=> console.log(`Server is running on PORT: ${PORT}`));