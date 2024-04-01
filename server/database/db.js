import mongoose from 'mongoose';




const DBConnection = async () => {
    const MONODB_URI =`mongodb+srv://Pushkar_3162:Pushkar_3162@file-sharing.p5tfl28.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
    try{
  await mongoose.connect(MONODB_URI,{ useNewUrlParser:true});
  console.log('database connected successfully');
    }catch(error){
        console.error('error while connecting',error.message);

    }
}
export default DBConnection;