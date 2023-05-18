import React from 'react'

export const Article = ({ article }) => {
  //<h3>{article.authorId}</h3> need to get author name by author id
  console.log('Article', article)
  return (
    <>
      {article && <h2>An article</h2>}
      <h3>{article.title}</h3>
      <h3>{article.content}</h3>
      {/* <h3>{article.tags}</h3>
      <h3>{article.createdAt}</h3>
      <button>View Article List</button>
      <button>Delete Page</button> */}
    </>
  )
}
