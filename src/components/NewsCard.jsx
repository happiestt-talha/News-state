import React from 'react'

const NewsCard = (props) => {


    return (
        <>
            <div className="card text-bg-info">
                <img src={props.imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title.slice(0,45)+'...'}</h5>
                    <p className="card-text">{props.text.slice(0,95)+'...'}</p>
                    <a href={props.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
            {/*  */}
        </>
    )
}

export default NewsCard
