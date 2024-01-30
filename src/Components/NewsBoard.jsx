import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

    const[articles,setArticles]=useState([]);

     useEffect(()=>{
        let url=` https://newsapi.org/v2/top-headlines?country=IN&category=${category}&apiKey=8c897159af1946c18acfb8cea8bf3e56`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
        
    
    },[category])


  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger red'>News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}   />
        })}
    </div>
  )
}

export default NewsBoard
