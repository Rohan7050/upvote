import React from "react";
import ReactPaginate from 'react-paginate';
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../feature/articleSlice";

interface PageListProps {
  pageCount: number;
}

const PageList: React.FC<PageListProps> = ({pageCount}) => {

  const dispatch = useDispatch();

  const handlePageClick = (event: { selected: number }) => {
    dispatch(setCurrentPage(event.selected))
    setTimeout(() => {
      const element = document.getElementById(`article-0`);
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200)
  };

  return (
    <ReactPaginate
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< "
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
  );
};

export default PageList;
