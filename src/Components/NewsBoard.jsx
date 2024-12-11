import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {

    const [articles,setArticles] =useState([])

    useEffect(()=>{
       const fetchData=async()=>{
        const api =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        const response = await fetch(api);
        const data = await response.json();

      setArticles(data.articles)
       }
       fetchData();
    },[category])

  return (
    <div>
        <h1 className='text-center'>Latest <span class="badge text-bg-danger ">News</span></h1>
        {articles.map((news,index)=>{
            return(
              <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            )
        })}
    </div>
  )
}

export default NewsBoard