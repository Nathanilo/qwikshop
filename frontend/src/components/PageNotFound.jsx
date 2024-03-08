import errorPageImage from "/images/404.jpg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="error-page_container">
        <div className="error-image_container">
          <img
            src={errorPageImage}
            alt="Page Not Found"
            className="error-image"
          />
        </div>
        <Link to="/">
          <button>Go back home</button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
