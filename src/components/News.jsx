import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import Loader from './Loader'

const News = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    let pageSize=4;
    let fetchData = async (url) => {
    // let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=0dd418eda768429cba391f6cab5450d9&&${page}`
    setLoading(true); // Set loading to true before fetching data
        try {
            console.log("Fetching data...");
            let response = await fetch(url);
            let data = await response.json();
            setData(data.articles);
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false); // Set loading to false after fetching data (whether successful or not)
        }
    }

    useEffect(() => {
        fetchData(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0dd418eda768429cba391f6cab5450d9&page=${page}&pageSize=${pageSize}`);
    },[page,pageSize])
    
    const handlePrev=()=>{
        setPage(page-1)
        fetchData(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0dd418eda768429cba391f6cab5450d9&page=${page}&pageSize=${pageSize}`);
        console.log('handle prev was clicked'); 
    }
    const handleNext=()=>{
        setPage(page+1)
        fetchData(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0dd418eda768429cba391f6cab5450d9&page=${page}&pageSize=${pageSize}`);
        console.log('handle Next was clicked'); 
    }
    const techyImgURL = 'https://th.bing.com/th/id/R.1510fe8202711595e506301e5deba565?rik=cTQudyXDcx472w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f1%2f8%2f647485.jpg&ehk=0RYQAaVD4Xiwm24kBigDwRxT1QpdyXVfPzyaANl%2bQGg%3d&risl=&pid=ImgRaw&r=0'
    return (
        <>
            <div className="container">
                <div className="row">
                    {loading&&<Loader/>}
                    { !loading && data.map((elem) => {
                            if (elem.title !== "[Removed]" && elem.description ) {
                                return (
                                    <div key={elem.url} className="col-md-3">
                                        <NewsCard imgURL={elem.urlToImage ? elem.urlToImage : techyImgURL} title={elem.title} text={elem.description} url={elem.url} />
                                        {/* {console.log(elem.content)} */}
                                    </div>
                                );
                            }
                            return null; // If id is null or description is missing, return null
                        })
                    }
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" className='btn btn-dark' onClick={handlePrev} disabled={page<=1}>&larr; Prev</button>
                    <button type="button" className='btn btn-dark' onClick={handleNext}>Next &rarr;</button>
                </div>
            </div >
        </>
    )
}
// ||
export default News
