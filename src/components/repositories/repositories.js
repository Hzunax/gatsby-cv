import React, { useState, useEffect } from 'react';
import jsonFetch from 'simple-json-fetch';
import styled from 'styled-components';
import siteConfig from '../../../data/siteConfig';

import Loader from '../loader';

const endpoint = `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=3&page=1`;

const StyledWrapper = styled.section`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-title {
    display: flex;
    justify-content: space-between;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #25303b;
  }

  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }

  .repositories__repo-star {
    white-space: nowrap;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }

  @media (max-width: 480px) {
    .repositories__title {
      text-align: center;
    }
  }
`;

const Repositories = ({ className }) => {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRepos = await jsonFetch(endpoint);
      if (fetchedRepos.json && fetchedRepos.json.length) {
        setRepos(fetchedRepos.json);
        setStatus('ready');
      }
    };
    fetchData();
  }, []);

  return (
    <StyledWrapper className={className}>
      <h2 className="repositories__title">Latest repositories on Github</h2>
      {status === 'loading' && (
        <div className="repositories__loader">
          <Loader />
        </div>
      )}
      {status === 'ready' && repos && (
        <>
          <div className="repositories__content">
            {repos.map(repo => (
              <React.Fragment key={repo.name}>
                <div className="repositories__repo">
                  <div className="repositories__repo-title">
                    <a className="repositories__repo-link" href={repo.html_url}>
                      <strong>{repo.name}</strong>
                    </a>
                    <span className="repositories__repo-star">
                      ★{repo.stargazers_count}
                    </span>
                  </div>
                  <div>{repo.description}</div>
                  <div className="repositories__repo-date">
                    Updated: {new Date(repo.updated_at).toUTCString()}
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </StyledWrapper>
  );
};

export default Repositories;
