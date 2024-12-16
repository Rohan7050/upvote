import React from 'react';
import {ArticleData} from '../../types/articleType';
import styles from './ArticleCard.module.css'
import { useDispatch } from 'react-redux';
import { setCurrentArticle } from '../../feature/articleSlice';

interface ArticleCardProps {
    article: ArticleData;
    currentActiveId: number;
    ctmId: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({article, currentActiveId, ctmId}) => {
  const dispatch = useDispatch();

  const onSelectArticle = (idx: number) => {
    dispatch(setCurrentArticle(idx));
    setTimeout(() => {
      const element = document.getElementById(`article-${idx}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200)
  }
  return (
    <div id={`article-${ctmId}`} onClick={() => onSelectArticle(ctmId)} className={styles.articleCard + " d-flex justify-content-between " + (currentActiveId === ctmId ? styles.active : '')}>
        <div>
            <h3 className={"poppins-medium " + styles.articleTitle}>{article.title}</h3>
            <p className={"poppins-extralight my-0 " + styles.articleDate}>{article.date}</p>
        </div>
        <div className={'d-flex flex-column justify-content-center align-items-center ' + styles.articleVotes}>
            <p className='mb-2 poppins-extralight'>votes</p>
            <p className='my-0 poppins-extralight'>{article.upvotes}</p>
        </div>
    </div>
  )
}

export default ArticleCard;