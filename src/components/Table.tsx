import { useState, useMemo } from 'react'
import wordlist from './../words_dictionary.json'
import Pagination from './Paginations'
import './App.css'

let PageSize = 10;

export default function () {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return Object.keys(wordlist).slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>word</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr key={item}>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        siblingCount={1}
        className="read-the-docs"
        currentPage={currentPage}
        totalCount={Object.keys(wordlist).length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}