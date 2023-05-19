import React, {useEffect, useState} from 'react'
import { App } from './App'

//setPages={setPages} fetchPages={fetchPages} deletePage={deletePage}
export const Article = ({ article, setPages, fetchPages, deletePage, setisViewingArticle }) => {
  //<h3>{article.authorId}</h3> need to get author name by author id
  console.log('Article', article)
  
  try{
  {/*
    console.log(article.author.name)
    console.log(article.createdAt)
    article.tags.map((x) => console.log(x.name))
  */}
    return (
      <>
        <h3>{article.title}</h3>
        <h3>{article.content}</h3>
        {/*
        <h3>Authored by: {article.author.name}</h3>
        {article.tags.map((tag, i) => <h3 key={i}>{tag}</h3>)}
        <h3>Date created: {article.createdAt}</h3>

    */}
        {article && <button onClick={() => {
          setisViewingArticle(false)
          fetchPages()
          }}>View Article List</button>}
        {article && <button onClick={() => deletePage()}>Delete Page</button>}

      
      </>
    )
  }catch(err){
    console.log("error")
  }
  
}
