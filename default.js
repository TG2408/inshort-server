import { data } from "./constants/data";
import news from "./model/news.js";

const DefaultData = async() => {
    try{
        await news.insertMany(data);
        console.log("data imported to database");

    } catch(err) {
        console.log(`error ${err}`);
    }
}

export default DefaultData;