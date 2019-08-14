import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { NewsCard } from './components/NewsCard';

const articles = [
  {
    id: 1,
    heading: 'Yo',
    source: 'Yo news',
    time: Date.now() - 2 * 60 * 60 * 1000,
    image: `https://picsum.photos/${500}/${500}`,
  },
  {
    id: 2,
    heading: 'Yo0',
    source: 'My news',
    time: Date.now() - 2 * 60 * 60 * 1000,
    image: `https://picsum.photos/${501}/${500}`,
  },
  {
    id: 3,
    heading: 'Yo1',
    source: 'Yo news',
    time: Date.now() - 3 * 60 * 60 * 1000,
    image: `https://picsum.photos/${500}/${502}`,
  },
  {
    id: 4,
    heading: 'Yo',
    source: 'Yo news',
    time: Date.now() - 2 * 60 * 60 * 1000,
    image: `https://picsum.photos/${500}/${500}`,
  },
  {
    id: 5,
    heading: 'Yo',
    source: 'Yo news',
    time: Date.now() - 2 * 60 * 60 * 1000,
    image: `https://picsum.photos/${510}/${500}`,
  },
];

const aggregatedArticleGroups = [
  { top: articles[0], similar: articles.slice(1, 4) },
  { top: articles[1], similar: articles.slice(2, 5) },
  { top: articles[2], similar: articles.slice(1, 4) },
];

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {aggregatedArticleGroups.map((aggArticleGroup, idx) => (
        <NewsCard {...{ aggArticleGroup }} defaultExpanded={idx === 0} />
      ))}
    </div>
  );
};

export default App;
