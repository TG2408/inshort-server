import mongoose  from "mongoose";

const connection = async () => {
    try {
        const URL = `mongodb+srv://tanmaygupta24:niec1234@inshortclone.2vn0b.mongodb.net/INSHORTSCLONE?retryWrites=true&w=majority`;

        await mongoose.connect(URL, { useNewUrlParser: true });

        console.log("database connected successfully")
    } catch(err) {
        console.log(`error while connecting with database ${err}`);
    }
}

export default connection;