import React from "react";
import { LeftArrow, RightArrow } from "../assets/icons/ArrowsSvg";
import { connectPagination } from "react-instantsearch-dom";

const Pagination = (props) => {
  const { refine, nbPages, currentRefinement } = props;
  const onLeftArrow = () =>
    currentRefinement > 0 ? refine(currentRefinement - 1) : () => {};
  const onRightArrow = () =>
    currentRefinement <= nbPages - 1 ? refine(currentRefinement + 1) : () => {};
  return (
    <div className="pagination">
      {nbPages > 0 && (
        <>
          <button className="pagination-btn" onClick={onLeftArrow}>
            <div className="icon">
              <LeftArrow />
            </div>
          </button>
          <div>
            {currentRefinement} of {nbPages}
          </div>
          <button className="pagination-btn" onClick={onRightArrow}>
            <div className="icon">
              <RightArrow />
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default connectPagination(Pagination);
