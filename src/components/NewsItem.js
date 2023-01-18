import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem=(props)=>  {

    let { title, description, imageUrl, url, author, date, source } = props;
    return (
      <div className="card "style={{width: "18rem"}} >
        <img src={imageUrl ? imageUrl : "https://imageio.forbes.com/specials-images/imageserve/62e5e4d4542987af2a9932d6/0x0.jpg?format=jpg&width=1200"} className="card-img-top" alt="..." />
        <div className="card-body mx-2">
          <h5 className="card-title">{title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " style={{ zIndex: '2', left: '100%' }}>
              {source} </span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={url} className="btn  btn-sm btn-primary">Read More</a>
        </div>
      </div>
    )
  }


export default NewsItem