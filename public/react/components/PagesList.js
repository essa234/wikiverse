import React, { useState, useEffect } from 'react';
import { Page } from './Page';
import apiURL from '../api';
import { Article } from './Article';
export const PagesList = ({pages, setPages}) => {

	const [articleData, setArticleData] = useState("");

	async function viewArticle(slug, setPages){
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const articleData = await response.json();
			console.log(articleData);
			//setPages("")
			setArticleData(articleData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	return <>
		{
			pages.map((page, idx) => {
				//render page and button to view article then render component
				return <>
				<Page page={page} key={idx} />

				<button onClick={() => viewArticle(page.slug)}>View Article</button>
				<Article article = {articleData} />
				</>
			})
		}
	</>
} 
