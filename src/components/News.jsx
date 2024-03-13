import React, { useState } from 'react'
import NewsCard from './NewsCard'

const News = () => {
    const [data, setData] = useState([])
    let fetchData = async (url) => {
        console.log("Fetching data...");
        let response = await fetch(url);
        let data = await response.json();
        setData(data.articles);
        console.log(data);
    }
    fetchData("https://newsapi.org/v2/top-headlines?country=us&apiKey=0dd418eda768429cba391f6cab5450d9")
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        data.map((elem) => {

                            return <div div className="col-md-3">
                                <NewsCard imgURL={elem.urlToImage} title={elem.title} text={elem.description} url={elem.url} />
                            </div>
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default News
