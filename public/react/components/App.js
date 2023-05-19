import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {

  //setting states
  const [pages, setPages] = useState([]);
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState([])

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  useEffect(() => {
    fetchPages()
  }, [])


  async function addPage() {
      const res = await fetch(`${apiURL}/wiki`, {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          title : title,
          content : content,
          name : author,
          email : email,
          tags : tags

        })
      })

      const data = await response.json();

  }


  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      <PagesList pages={pages} setPages={setPages} />
      {setIsAddingArticle && <button onClick={() => {
        setIsAddingArticle(true)
        setPages([])
        }}>Add a page</button>}

      {isAddingArticle && 
      (<form onSubmit={() => addPage()}>
          <label >Title:</label>
          <input type="text" id="title" name="title" onChange = {(e) => setTitle(e.target.value)} />
          <label >Content:</label>
          <input type="text" id="content" name="content" onChange = {(e) => setContent(e.target.value)} />
          <label >Author name:</label>
          <input type="text" id="name" name="name" onChange = {(e) => setAuthor(e.target.value)} />
          <label >Author email:</label>
          <input type="text" id="email" name="email" onChange = {(e) => setEmail(e.target.value)}/>
          <label >Tags:</label>
          <input type="text" id="tags" name="tags" onChange = {(e) => setTags((e.target.value).split(" "))}/>
          <input type="submit" value="Add page"/>


        </form>)}
    </main>
  )
}
