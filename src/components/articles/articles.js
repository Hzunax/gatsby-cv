import React, { useState, useEffect } from 'react';
import jsonFetch from 'simple-json-fetch';
import styled from 'styled-components';
import siteConfig from '../../../data/siteConfig';

import Loader from '../loader';

// const endpoint = `https://dev.to/api/articles?per_page=3`;
const endpoint = `https://dev.to/api/articles?username=${siteConfig.devToUsername}`;

const StyledWrapper = styled.section`
  position: relative;
  .articles__content {
    margin-bottom: 40px;
  }

  .articles__article {
    position: relative;
  }

  .articles__article-title {
    display: flex;
    justify-content: space-between;
  }

  .articles__article-link {
    text-decoration: none;
    color: #25303B;
  }

  .articles__article-date {
    color: #bbb;
    font-size: 10px;
  }

  .articles__article-heart {
    white-space: nowrap;
  }

  .articles__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }

  @media (max-width: 480px) {
    .articles__title {
      text-align: center;
    }
  }
`;

const Articles = () => {
  const [ articles, setArticles ] = useState([]);
  const [ status, setStatus ] = useState('loading');

  useEffect(() => {
    const fetchData = async () => {
      const articles = await jsonFetch(endpoint);
      if (articles.json && articles.json.length) {
        setArticles(articles.json);
        setStatus('ready');
      }
    };
    fetchData();
  }, []);

  return (
    <StyledWrapper>
      <h2 className="articles__title">Latest blogposts</h2>
      {status === "loading" && <div className='articles__loader'><Loader /></div>}
      {status === "ready" &&
        articles && (
          <React.Fragment>
            <div className="articles__content">
              {articles.map(article => (
                <React.Fragment key={article.id}>
                  <div className="articles__article">
                    <div className="articles__article-title">
                      <a className='articles__article-link' href={article.url}>
                        <strong>{article.title}</strong>
                      </a>
                      <span className="articles__article-heart">♥ {article.positive_reactions_count}</span>
                    </div>
                    <div>{article.description}</div>
                    <div className="articles__article-date">
                      Created at: {new Date(article.created_at).toUTCString()}
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        )}
    </StyledWrapper>
  )
}

export default Articles;
