import React from 'react';
import { ArticleData } from '../../types/articleType';
import styles from './ArticleDetails.module.css'
import UpvoteImg from '../../assets/icons/upvote-icon.svg'

interface ArticleDetailsProps {
  article: ArticleData;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({article}) => {
  return (
    <div className={'px-3 py-3 ' + styles.articleDtlBg}>
      <div className='d-flex justify-content-between'>
        <h1 className="paytone-one-regular">{article.title}</h1>
        <div className='d-flex justify-content-center flex-column align-items-center'>
          <div className={styles.upvoteBtn}>
            <img className={styles.upvoteIcon} src={UpvoteImg}/>
          </div>
          <p className="mb-0 mt-2 poppins-regular">{article.upvotes}</p>
        </div>
      </div>
      <div className='d-flex justify-content-between poppins-extralight'>
        <p>{article.date}</p>
      </div>
      <img className={styles.articleDtlImg + ' mb-4'} src={article.image}/>
      <br />
      <p className='poppins-regular'>
        {article.desc}
      </p>
    </div>
  )
}

export default ArticleDetails;