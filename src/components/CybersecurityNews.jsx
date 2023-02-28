import { useEffect, useState } from 'react';
import axios from 'axios';

const CybersecurityNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const url = 'https://www.reddit.com/r/javascript.json';
      try {
        const response = await axios.get(url);
        setNews(response.data.data.children.map((child) => child.data));
      } catch (error) {
        console.error(error);
      }
    };
    getNews();
  }, []);

  return (
    <div>
      <h1>Latest Front-End News</h1>
      <ul>
        {news.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.selftext}</p>
            <a href={`https://www.reddit.com${post.permalink}`}>
              Read more on Reddit
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CybersecurityNews;
