import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card my-2" >
          <img src={!imgUrl?"https://www.sltrib.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fsltrib%2FF4JZJU6Z2REIXNZEOOBVVLBRK4.JPG?auth=8f84f34b6153000eb3c59f770693c3c9b1e557fb3c69f449c7966c7b90206908&width=1200":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}... </p>
            <a rel="noreferrer"  href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
