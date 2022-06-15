import React, {useState,useEffect} from 'react'

 function News() {

    const [news,setNews]=useState([]);

    const fetchNews=()=>{
       fetch('https://gnews.io/api/v4/search?q=example&token=c09583de90866e1db3884dc6258732a0')
       .then(result=> result.json())
       .then(data=> setNews(data.articles))
       .catch(err=> console.log(err))
    }

    useEffect(()=>{
        fetchNews();
    });

return(
  <div>
    <h2>News!!</h2>
      {
        news.map((nw,i)=>(
          <div key={i}>
            <h3>{nw.title}</h3>
            <p>{nw.content}</p>
            <p>{nw.description}</p>
            <p>{nw.publishedAt}</p>
            <hr></hr>
            </div>
        ))
      }
  </div>
)

}

export default News;