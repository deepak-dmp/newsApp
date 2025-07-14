import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";




 const News = (props)=> {


  const [articles, setArticles]= useState([])
  const [loading, setLoading]= useState(false)
  const [page, setPage]= useState(1)
  const [totalResults, setTotalResults]= useState(0)


  const updateNews = async ()=> {
    props.setProgress(10)
    setLoading(true) 
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(30)
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(()=>{
    updateNews();
    document.title = `${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    }- NewsMonkey`;
    //eslint-disable-next-line
  },[])

  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    console.log("articles.length "+articles.length )
    console.log("totalResults"+totalResults)
  };


    return (
      <>
        <h2 className="text-center pt-5" style={{ margin: "35px 0px" }}>
          NewMonkey - Top{" "}
          <span style={{ color: "#910e04" }}>
            {props.category.charAt(0).toUpperCase() +
              props.category.slice(1)}
          </span>{" "}
          Headlines
        </h2>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    source={element.source.name}
                    title={element.title ? element.title : ""}
                    description={
                      element.description ? element.description : " "
                    }
                    newsUrl={element.url}
                    imgUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
                
              );
            })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Preview</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           
        </div> */}
      </>
    );
  }

  News.defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News
