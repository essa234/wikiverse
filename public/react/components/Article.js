import React from 'react';

export const Article = ({article}) => {

    {console.log(article)}
    {console.log(article.title)}
//<h3>{article.authorId}</h3> need to get author name by author id
  return <>
    <h3>{article.title}</h3>
    <h3>{article.content}</h3>
    <h3>{article.tags}</h3>
    <h3>{article.createdAt}</h3>
  </>
} 