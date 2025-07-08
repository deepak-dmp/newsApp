import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    console.log("construstor");
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }- NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10)
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07abc97fe06a411bba409f74b9240dc5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(30)
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews();
    console.log(this.state.page);
    console.log("componentDidMount");
  }

  // handleNextClick = async () => {
  //   console.log("handleNextClick");
  //   await this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // handlePrevClick = async () => {
  //   console.log("handlePrevClick");
  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07abc97fe06a411bba409f74b9240dc5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    console.log("render");
    return (
      <>
        <h2 className="text-center pt-5" style={{ margin: "35px 0px" }}>
          NewMonkey - Top{" "}
          <span style={{ color: "#910e04" }}>
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
          </span>{" "}
          Headlines
        </h2>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row my-3">
            {this.state.articles.map((element) => {
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
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           
        </div> */}
      </>
    );
  }
}
