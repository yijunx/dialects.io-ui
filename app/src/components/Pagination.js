import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function getQueryString(query, pageDelta) {
  // query.page = query.page + pageDelta;
  query = Object.fromEntries(
    Object.entries(query).filter(([_, v]) => v != null)
  );
  let queryString = Object.keys(query)
    .map((key) => {
      let x = "";
      if (key === "page") {
        x = key + "=" + (parseInt(query[key]) + pageDelta);
      } else {
        x = key + "=" + query[key];
      }
      return x;
    })
    .join("&");
  return queryString;
}

function Pagination({ paging, query }) {
  let previousPageControl = "";
  let nextPageControl = "";

  // need to update the paging control based on
  // go to previous page
  if (paging.current_page > 1) {
    previousPageControl = (
      <Link to={"/words?" + getQueryString(query, -1)}>
        <div className="text-xl self-center px-4">
          <FontAwesomeIcon icon={faAngleLeft} className="text-gray-700" />
        </div>
      </Link>
    );
  } else {
    previousPageControl = (
      <div className="text-xl self-center px-4">
        <FontAwesomeIcon icon={faAngleLeft} className="text-gray-200" />
      </div>
    );
  }

  if (paging.current_page < paging.total_pages) {
    nextPageControl = (
      <Link to={"/words?" + getQueryString(query, 1)}>
        <div className="text-xl self-center px-4">
          <FontAwesomeIcon icon={faAngleRight} className="text-gray-700" />
        </div>
      </Link>
    );
  } else {
    nextPageControl = (
      <div className="text-xl self-center px-4">
        <FontAwesomeIcon icon={faAngleRight} className="text-gray-200" />
      </div>
    );
  }

  let pagingContent = (
    <div className="self-center">
      {paging.current_page} {"/"} {paging.total_pages}
    </div>
  );
  return (
    <div className="flex w-full items-stretch place-content-center">
      {previousPageControl} {pagingContent}
      {nextPageControl}
    </div>
  );
}

export default Pagination;
