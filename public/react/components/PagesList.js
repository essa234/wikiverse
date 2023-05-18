import React, { useState, useEffect } from 'react'
import { Page } from './Page'
import apiURL from '../api'
import { Article } from './Article'
export const PagesList = ({ pages, setPages }) => {
  const [articleData, setArticleData] = useState('')

  async function viewArticle(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`)
      const articleData = await response.json()
      setPages([])
      setArticleData(articleData)
      console.log(articleData)
      return <Article article={articleData} />
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  async function AddPage(){

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

      <button onClick={() => AddPage()}>Add a page</button>
    </>
  )
}
