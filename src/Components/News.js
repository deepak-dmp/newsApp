import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor(){
    console.log("construstor");
    super();
    this.state={
      articles: [ ],
      loadig:false,
      page:1
    }
  }

   async componentDidMount(){
    console.log("componentdidmount");
    let url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=07abc97fe06a411bba409f74b9240dc5&page=1&pageSize=18"
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
    
  }

   handleNextClick = async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/18)){
     
      alert("all News covered ")
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=07abc97fe06a411bba409f74b9240dc5&page=${this.state.page+1}&pageSize=18`
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page:this.state.page+1
    })
    }

  }

  handlePrevClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=07abc97fe06a411bba409f74b9240dc5&page=${this.state.page-1}&pageSize=18`
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page:this.state.page-1
    })

  }

  render() {
    console.log("render");
    return (
      
      <div className='container my-3'>
        <h2>NewMonkey - Top headlines</h2>
        <div className='row my-3'>
         { this.state.articles.map((element)=>{
          return <div key={element.url} className="col-md-4">
        <NewsItem title={element.title?element.title:""} description={element.description?element.description:" "} newsUrl={element.url} imgUrl={element.urlToImage}/>
        </div>

        
         })}
        
        
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Preview</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           
        </div>

      </div>
    )
  }
}
