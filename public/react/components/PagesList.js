import React, { useState, useEffect } from 'react'
import { Page } from './Page'
import apiURL from '../api'
import { Article } from './Article'
export const PagesList = ({ pages, setPages }) => {
  const [articleData, setArticleData] = useState('');
  const [isViewingArticle, setisViewingArticle] = useState(false);
  


  async function viewArticle(slug) {
    try {
      setisViewingArticle(true)
      const response = await fetch(`${apiURL}/wiki/${slug}`)
      const articleData = await response.json()
      setPages([])
      setArticleData(articleData)
      //console.log('Pages List', articleData)
      return <Article article={articleData} />
    } catch (err) {
      console.log('Oh no an error!', err)
    }
  }


  async function deletePage(slug) {
    const response = await fetch(`${apiURL}/wiki/${slug}`, {
      method: "DELETE"
    });

    const data = await response.json;

  }

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  return (
    <>
      {pages.map((page, idx) => {
        //render page and button to view article then render component
        return (
          <div key={idx}>
            <Page page={page} />

            <button onClick={() => viewArticle(page.slug)}>View Article</button>
          </div>
        )
      })}

      

      {isViewingArticle && <Article article={articleData} setPages={setPages} fetchPages={fetchPages} 
      deletePage={deletePage} setisViewingArticle = {setisViewingArticle} />}
    
      
    
    </>
  )
}
