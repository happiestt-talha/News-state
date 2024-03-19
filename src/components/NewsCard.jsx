import React from 'react'

const NewsCard = (props) => {


    return (
        <>
            <div className="card text-bg-info" style={{ width: "18rem" }}>
                <img src={props.imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
            {/*  */}
        </>
    )
}

export default NewsCard
