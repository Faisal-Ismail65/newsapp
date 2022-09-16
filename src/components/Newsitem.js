import React from 'react'

const Newsitem = ({title , description , imgUrl,newsUrl, publishedAt, author}) => {
  return (
    <div>
        <div className="card text-center">
      <img src={imgUrl} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className='card-text'><small className='text-muted'>By {author? author : "Unknown" }</small></p>
        <p className='card-text'><small className='text-muted'>On {new Date(publishedAt).toUTCString()}</small></p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary d-block" rel="noreferrer">Read More</a>
      </div>
    </div></div>
  )
}

export default Newsitem
