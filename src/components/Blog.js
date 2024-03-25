import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL ='https://newsapi.org/v2/everything?q=tesla&from=2023-12-08&sortBy=publishedAt&apiKey=d47a4397fd6e442a85553c1c28f5aa7a';

function Blog() {
    const [posts, setPosts]= useState([]);
    const [loading, setLoading] = useState(false);

    
    const getData = async()=>{
      setLoading(true)
      try{
        const res = await axios.get(`${BASE_URL}`)
        
        const response = await fetch(`${BASE_URL}`);
        
        const data = await response.json()
        setPosts(data.articles)
        setLoading(false)
        console.log(data.articles)
      }catch(err){
        console.log(err)
        setLoading(false)
      }
    }

    useEffect(()=>{
      getData()
    },[])



  return (
    <>
     <h1>My Blog</h1> 
     {loading ? <p>Loading Content</p> : <ul>
        {posts.map((post,i)=>{
            return <div key={post.source.id}><li >
                <img src={post.url} alt={post.title} />
                <h3>{post.author}</h3>
                <p>{post.title}</p>
            
            </li></div>
        })}
     </ul>}
     
    </>
  )
}

export default Blog
