import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { NewsCard } from './components/NewsCard/NewsCard';

// const aggregatedArticleGroups = [
//   { top: articles[0], similar: articles.slice(1, 4) },
//   { top: articles[1], similar: articles.slice(2, 5) },
//   { top: articles[2], similar: articles.slice(1, 4) },
// ];

// a react component re-renders when:
// props or state change
const App = () => {

  const [articleGroups, setArticleGroups] = useState([])

  const timerRef = useRef(null)

  // cDM, cDU
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/comments').then(data=>data.json()).then(data=>{
      // fake some latency
      timerRef.current = setTimeout(()=>{
        if (articleGroups.length === 0){
          const processedArticles = processArticles(data)
          setArticleGroups(processedArticles)
        }
      },500)
      })

    return () => {
      // unmount, cleanup/teardown
      window.clearTimeout(timerRef.current)
    };
  }, [articleGroups.length])


  return (
    <div className="App">
      <Navbar />
      {articleGroups.map((aggArticleGroup, idx) => {
        const newsCardProps = { aggArticleGroup }
        return (
          <NewsCard key={idx} {...newsCardProps} defaultExpanded={idx === 0} />
      )})}
    </div>
  );
};

export default App;

const NUM_ARTICLE_GROUPS = 4
const ARTICLES_PER_GROUP = 5
const TOTAL_ARTICLES = ARTICLES_PER_GROUP * NUM_ARTICLE_GROUPS // 20
function processArticles(articles) {

  const startingArticleGroups = [...Array(NUM_ARTICLE_GROUPS)].map((_,arrIdx)=>([]));

  const articleGroups = articles.reduce((acc,article,articleIdx)=>{
  // 5 articles per group, 4 groups
    if (articleIdx < TOTAL_ARTICLES){ // 0 - 19
      const numBetween0andMax = (articleIdx) / ARTICLES_PER_GROUP // 19 / 4 = 4.999

      const articleGroupIdx = Math.floor(numBetween0andMax) // 4.999 -> 4

      const nextArticle = {
        id: article.id,
        heading: article.name,
        source: article.email,
        time: Date.now() - 2 * 60 * 60 * 1000,
        image: `https://picsum.photos/${500 + (Math.floor(Math.random()*10))}/${500 - (Math.floor(Math.random()*10))}`,
        body: article.body
      }

      acc[articleGroupIdx].push(nextArticle)
    }
    return acc;
    },startingArticleGroups)

  return articleGroups
}
