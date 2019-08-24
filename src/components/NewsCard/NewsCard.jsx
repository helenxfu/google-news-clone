import React, { useState } from 'react';
import { Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import { useSpring, animated } from 'react-spring'
import { ArticleStyles, NewsCardStyles } from './NewsCardStyles';
import ContainerDimensions from 'react-container-dimensions'
const SMALL_IMG_WIDTH = 80
const Article = ({ width, article, startsExpanded = false /* default to false */ }) => {
  console.log("⚡🚨: Article -> width", width)
  const [isExpanded, setIsExpanded] = useState(startsExpanded)
  const wideStyles = { width:  window.innerWidth}
  const rightStyles = { width: SMALL_IMG_WIDTH, marginLeft: window.innerWidth/2-SMALL_IMG_WIDTH}
  const springWideOrRight = useSpring(isExpanded ? wideStyles:rightStyles)
  return(
    <ArticleStyles className={`article${isExpanded?' big':''}`}
    onClick={()=>{
      const isExpandableArticle = !startsExpanded
      // we don't want to collapse the first (big) article
      if (!isExpandableArticle){
        return;
      }
      setIsExpanded(!isExpanded)}}
  >
    <div className={`image-wrapper ${isExpanded ? ' big-image' : ''}`}>
        <animated.img style={springWideOrRight} src={article.image} alt={article.heading} />
    </div>
    <div className="source"><div><img src="https://picsum.photos/16/16" alt="cool"/></div>{article.source}</div>
    <h4 className="heading">{article.heading.slice(0,1).toUpperCase() + article.heading.slice(1)}</h4>
    <div className="bottom-row">
     <div className="left-side">
        <OfflineBoltIcon/>
      <div className="time">{article.time}</div>
     </div>
     <div className="right-side">
      <IconButton>
        <PictureAsPdfIcon/>
      </IconButton>
      <IconButton>
        <MoreVertIcon/>
      </IconButton>
     </div>
    </div>
  </ArticleStyles>
)};

export const NewsCard = ({ aggArticleGroup, defaultExpanded }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [ top, ...similar ] = aggArticleGroup;
  console.log("⚡🚨: NewsCard -> similar", similar)
  // {
  //   id: 5,
  //   heading: 'Yo',
  //   source: 'Yo news',
  //   time: Date.now() - 2 * 60 * 60 * 1000,
  //   image: `https://picsum.photos/${510}/${500}`,
  // },
  return (
    <NewsCardStyles>
      <ContainerDimensions>
        {({ width }) => <Article width={width} startsExpanded={true} article={top} />}
      </ContainerDimensions>
      <Collapse in={expanded}>
        {similar.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </Collapse>
      <IconButton onClick={() => setExpanded(!expanded)}>
        <ExpandMoreIcon
          style={{
            transform: `rotate(${expanded ? 180 : 0}deg)`,
            transition: '0.5s all cubic-bezier(0.165, 0.84, 0.44, 1)',
          }}
        />
      </IconButton>
    </NewsCardStyles>
  );
};
