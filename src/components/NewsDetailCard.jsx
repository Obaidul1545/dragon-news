import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailCard = ({ news }) => {
  const { title, details, image_url, category_id } = news;
  return (
    <div className="mt-3">
      <img src={image_url} alt="" className="w-full object-cover " />
      <div className="space-y-3">
        <h2 className="text-xl font-semibold mt-4">{title}</h2>
        <p className="text-accent text-justify">{details}</p>

        <Link to={`/category/${category_id}`} className="btn btn-secondary">
          <FaArrowLeft /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailCard;
