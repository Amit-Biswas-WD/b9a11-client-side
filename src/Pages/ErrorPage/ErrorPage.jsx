import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-16">
      <h2 className="text-6xl font-extrabold text-red-600 mb-8">
        Opps! 404 Page Not Found
      </h2>
      <p className="text-2xl font-bold text-red-700 mb-8">Error Page</p>
      <Link to={`/`}>
        <button className="btn">Go To Back Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
