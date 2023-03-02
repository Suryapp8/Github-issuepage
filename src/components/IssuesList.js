import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import "../css/IssueList.css"

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/facebook/react/issues?state=open&per_page=${perPage}&page=${page}`)
      .then((response) => setIssues(response.data))
      .catch((error) => console.log(error));
  }, [page, perPage]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className='issues'>
      <h1>Suryaapp8/react</h1>
      <ul >
        {issues.map((issue) => (
          <li className='issue-list' key={issue.id}>
            <input type="checkbox"/>
            <a href={issue.html_url}>{issue.title}</a>
          </li>
        ))}
      </ul>
      <Pagination page={page} perPage={perPage} total={100} onPageChange={handlePageChange} />
    </div>
  );
};

export default IssuesList;