import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'

const News = () => {
    const [data, setData] = useState([])

    let fetchData = async () => {
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=0dd418eda768429cba391f6cab5450d9"
        console.log("Fetching data...");
        let response = await fetch(url);
        let data = await response.json();
        setData(data.articles);
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const loadMore=()=>{
        fetchData();
    }
    const techyImgURL = 'https://th.bing.com/th/id/R.1510fe8202711595e506301e5deba565?rik=cTQudyXDcx472w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f1%2f8%2f647485.jpg&ehk=0RYQAaVD4Xiwm24kBigDwRxT1QpdyXVfPzyaANl%2bQGg%3d&risl=&pid=ImgRaw&r=0'
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        data.map((elem) => {
                            if (elem.title !== "[Removed]" && elem.description) {
                                return (
                                    <div key={elem.url} className="col-md-3">
                                        <NewsCard imgURL={elem.urlToImage ? elem.urlToImage : techyImgURL} title={elem.title} text={elem.description} url={elem.url} />
                                        {console.log(elem.content)}
                                    </div>
                                );
                            }
                            return null; // If id is null or description is missing, return null
                        })
                    }
                </div>
            </div >
        </>
    )
}
// ||
export default News
