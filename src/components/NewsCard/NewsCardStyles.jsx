import styled from 'styled-components/macro';

export const NewsCardStyles = styled.div`
  border: 1px solid #dadce0;
  .title {
  }
`;

const COLLAPSED_ARTICLE_HEIGHT = 120
const EXPANDED_ARTICLE_HEIGHT = 320

export const ArticleStyles = styled.div`
.MuiIconButton-root, .MuiSvgIcon-root{
    transform: scale(0.8);
}
.MuiSvgIcon-root{
  opacity: 0.6;
}

  height: ${COLLAPSED_ARTICLE_HEIGHT}px;
  &.big{
  height: ${EXPANDED_ARTICLE_HEIGHT}px;
  }

  .image-wrapper{
    overflow:hidden;
    border-radius: 6px;

    height: ${EXPANDED_ARTICLE_HEIGHT - COLLAPSED_ARTICLE_HEIGHT}px;
    img{
    }
    &.big-image{

    }
  }
  .bottom-row{
    display:flex;
    justify-content: space-between;
    align-items: center;
    .left-side,.right-side{
      font-size: 0.75em;
    display:flex;
    align-items:center;
    }
  }
  .source{
    text-align:left;
    font-size: 0.75em;
    display:flex;
    div{
      width:16px;
      height:16px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  .heading{
    margin:0;
    /* font-size: 2em; */
  }
`