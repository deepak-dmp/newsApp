import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor(){
    console.log("construstor");
    super();
    this.state={
      articles: [ ],
      loadig:false
    }
  }

   async componentDidMount(){
    console.log("componentdidmount");
    let url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=07abc97fe06a411bba409f74b9240dc5"
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
    
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
        

      </div>
    )
  }
}
