import { FaRegBookmark, FaRegEye, FaShareAlt } from 'react-icons/fa';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    published_date,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  // date format
  const date = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="card bg-base-100 shadow-md rounded-md overflow-hidden">
      {/* Author Section */}
      <div className="flex items-center justify-between px-4 py-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-primary" />
          <FaShareAlt className="text-gray-500 cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 mt-3 text-lg font-bold leading-snug hover:text-primary cursor-pointer">
        {title}
      </h3>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-md w-full object-cover h-100"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-4 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...{' '}
            <span className="text-blue-600 font-medium cursor-pointer">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      <p className="w-[95%] mx-auto bg-base-300 h-0.5"></p>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) =>
            i < Math.round(rating.number) ? (
              <IoStar key={i} />
            ) : (
              <IoStarOutline key={i} />
            )
          )}
          <span className="text-gray-700 ml-1">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
