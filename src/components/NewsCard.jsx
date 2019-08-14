import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const NewsCardStyles = styled.div`
  border: 1px solid #dadce0;
  .title {
  }
`;

const Article = ({ article }) => (
  <div className="article">
    <div className="heading">{article.heading}</div>
    <div className="source">{article.source}</div>
  </div>
);

export const NewsCard = ({ aggArticleGroup, defaultExpanded }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const { top, similar } = aggArticleGroup;
  console.log('🌈: NewsCard -> top', top);
  // {
  //   id: 5,
  //   heading: 'Yo',
  //   source: 'Yo news',
  //   time: Date.now() - 2 * 60 * 60 * 1000,
  //   image: `https://picsum.photos/${510}/${500}`,
  // },
  return (
    <NewsCardStyles>
      <Article article={top} />
      <Collapse expanded={expanded}>
        {similar.map(article => (
          <Article article={article} />
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
