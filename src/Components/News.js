import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

  constructor(){
    console.log("construstor");
    super();
    this.state={
      articles: [ ],
      loading:false,
      page:1
    }
  }

   async componentDidMount(){
    console.log("componentdidmount");
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=07abc97fe06a411bba409f74b9240dc5&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    
  }

   handleNextClick = async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
     
      alert("all News covered ")
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=07abc97fe06a411bba409f74b9240dc5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page:this.state.page+1,
      loading:false
    })
    }

  }

  handlePrevClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=07abc97fe06a411bba409f74b9240dc5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page:this.state.page-1,
      loading:false
    })

  }

  render() {
    console.log("render");
    return (
      
      <div className='container my-3'>
        <h2 className='text-center'>NewMonkey - Top headlines</h2>
        {this.state.loading && <Spinner/> }
        <div className='row my-3'>
         {!this.state.loading && this.state.articles.map((element)=>{
          return <div key={element.url} className="col-md-4">
        <NewsItem title={element.title?element.title:""} description={element.description?element.description:" "} newsUrl={element.url} imgUrl={element.urlToImage}/>
        </div>

        
         })}
        
        
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Preview</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           
        </div>

      </div>
    )
  }
}
