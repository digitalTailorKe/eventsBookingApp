import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const NotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <PageTitle title="404 Error encountered!" />
      <div className="bg-white p-5 text-center shadow-md rounded-md">
        <Link to={"/"}>
          <img
            className="text-center mb-3"
            style={{ width: "150px", textAlign: "center", margin: "0 auto" }}
            src="/imgs/logo.png"
            alt=""
          />
        </Link>
        <h1 className="text-6xl font-bold text-gray-800 p-5 border">
          404
        </h1>

        <div className="mt-5">
          <p className="text-2xl text-gray-600 mb-10">
            Oops! The page you are looking for does not exist.
          </p>
          <a
            onClick={handleGoBack}
            className="btn bg-blue-600 text-[18px] font-bold hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
          >
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
