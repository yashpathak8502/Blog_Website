import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://kavita123:kavita123@cluster0.apxcy27.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;