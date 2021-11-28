import news from '../model/news.js'

export const getNews = async(req ,res) => {
    try {
        const data = await news.find({});

        res.status(200).json(data);
    } catch(err) {
        res.status(500).json(err);
    }
}