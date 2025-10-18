import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [catagoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == '0') {
      setCategoryNews(data);
      return;
    } else if (id == '1') {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === Number(id)
      );
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Dragon News Home</h1>
        <h1 className="text-sm font-bold">
          Total <span className="text-secondary">{catagoryNews.length}</span>{' '}
          News Found
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-4">
        {catagoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
