import React from "react";
import ArticleDetails from "../ArticleDetails/ArticleDetails.component";
import ArticleCard from "../../components/ArticleCard/ArticleCard.component";
import styles from "./ArticleList.module.css";
import PageList from "../../components/PageList/PageList.component";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ArticleList = () => {
  const {mainList, currentActivePage, sortBy, seachText, currentActiveArticleId, itemPerPage} = useSelector((state: RootState) => state.article);
  
  const filerArticles = mainList.filter((art) => art.title.toLowerCase().includes(seachText.toLocaleLowerCase()));
  const sortArticles = filerArticles.sort((art1, art2) => {
    if(sortBy === 'VOTE') {
      if(art1.upvotes > art2.upvotes) {
        return -1;
      }else if(art1.upvotes < art2.upvotes) {
        return 1;
      }else {
        return 0;
      }
    }else if(sortBy === 'DATE') {
      const date1 = new Date(art1.date);
      const date2 = new Date(art2.date);
      if(date1 > date2) {
        return -1;
      }else if(date1 < date2) {
        return 1;
      }else {
        return 0;
      }
    }else {
      return 0;
    }
  })

  const startIndex = currentActivePage * itemPerPage;
  const currentItems = sortArticles.slice(startIndex, startIndex + itemPerPage);
  const totalPages = Math.ceil(sortArticles.length / itemPerPage);

  return (
    <section id="articles" className="my-3">
      <div className="row">
        <div className={"col-12 col-lg-5"}>
          <div id="articles-list" className={styles.articleList}>
            {currentItems.length !== 0 && currentItems.map((article, idx) => {
              return (
                <div key={`art-card-${idx}`}>
                  <ArticleCard
                    
                    ctmId={idx}
                    article={article}
                    currentActiveId={currentActiveArticleId}
                  />
                  {currentActiveArticleId === idx && <div key={`art-${idx}`} className="d-block d-lg-none"><ArticleDetails article={currentItems[currentActiveArticleId]} /></div>}
                </div>
              );
            })}
            {
              currentItems.length === 0 && <h1 className="poppins-extrabold">No Data Found</h1>
            }
          </div>
          <div className={"d-flex justify-content-center align-items-center " + styles.customPageList}>
            <PageList pageCount={totalPages}/>
          </div>
        </div>
        <div className="col-12 col-lg-7 d-none d-lg-block">
          {
            currentItems.length !== 0 ? 
            <ArticleDetails article={currentItems[currentActiveArticleId]} /> : 
            <h1 className="poppins-extrabold">No Data Found</h1>
          }
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
