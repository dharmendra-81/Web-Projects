import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Feed = () => {
    const [posts, setPosts] = useState([{
        _id: "1",
        image: "https://plus.unsplash.com/premium_photo-1709311897767-f6ce7e1fc227?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Joshua Earle on Unsplash"
    }])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((res)=> {
            setPosts(res.data.posts)
        })
        }, [])

  return (
    <section className="feed-section">
        <h1>Feed</h1>
        {
            posts.map(post => (
                <div key={post._id} className="post-card">
                    <img src={post.image} alt={post.caption} />
                    <h2>{post.caption}</h2>
                </div>
            ))
        }
    </section>
  )
}
