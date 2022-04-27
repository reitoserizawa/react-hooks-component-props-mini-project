import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'

function App() {

  const blogName = blogData.name
  const image = blogData.image
  const about = blogData.about
  const articleData = blogData.posts

  return (
    <div className="App">
      <Header name={blogName} />
      <About image={image} about={about} />
      <ArticleList posts={articleData}/>
    </div>
  );
}

export default App;
