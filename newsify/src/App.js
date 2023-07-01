import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=8d52856bedbd4775874916252fdd9f92").then((res => {
      console.log(res.data.articles);
      setNews(res.data.articles)
    }))
  })
  return (
    <>
    
      <div className="container my-5">
        <div className="row text-center">
          {
            news.map((val)=>{
              return(
                <div className="col my-3">
            <div className="card" style={{width: "18rem"}}>
              <img src={val.urlToImage} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.description}</p>
                  <button className='btn btn-primary text-dark'><a className="text-white" href={val.url}>Know More</a></button>
                </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App

