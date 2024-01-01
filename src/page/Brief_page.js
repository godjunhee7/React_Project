
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Brief_page.css'
import { IoIosSearch } from "react-icons/io";

const popularKeywords = ['인기 검색어', 'Learning React', 'React', 'Javascript', 'Bootstrap', 'CSS'];

function Brief() {
  const navigate = useNavigate();

  const navigateToExplain = (title,writer) => {
    navigate("../Explain", { state: { title, writer } });
    console.log(title);
  }

  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const existingBooksJSON = localStorage.getItem("books");
  const booklist = existingBooksJSON ? JSON.parse(existingBooksJSON) : [];

  const search = () => {
    const keyword = searchKeyword.toLowerCase();
    const filter = document.getElementById('filter').value;

    let filterBooks;

    if ((filter === 'all' || filter === '') && keyword.trim() !== '') {
      filterBooks = booklist.filter(book =>
        book.title.toLowerCase().includes(keyword) || book.writer.toLowerCase().includes(keyword)
      );
    } else if (filter === 'title' && keyword.trim() !== '') {
      filterBooks = booklist.filter(book => book.title.toLowerCase().includes(keyword));
    } else if (filter === 'writer' && keyword.trim() !== '') {
      filterBooks = booklist.filter(book => book.writer.toLowerCase().includes(keyword));
    } else if (filter === 'topic' && keyword.trim() !== '') {
      filterBooks = booklist.filter(book => book.topic.toLowerCase().includes(keyword));
    }else if (filter === 'publishing_company' && keyword.trim() !== '') {
      filterBooks = booklist.filter(book => book.publishing_company.toLowerCase().includes(keyword));
    }
    else {
      filterBooks = [];
    }

    setSearchResult(filterBooks);
  };

  return (
    <div className="boder">
      <div className="flex-container">

        <div className="search-PANEL">
          <label htmlFor="filter"></label>
          <select id="filter">
            <option value="all">전체</option>
            <option value="title">제목</option>
            <option value="writer">저자</option>
            <option value="topic">주제</option>
            <option value="publishing_company">출판사</option>
          </select>
          <label htmlFor="searchKeyword"></label>
          <input type="text" id="searchKeyword" placeholder="검색어를 입력" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
          <button className="searchBtn"onClick={search}> <IoIosSearch />검색</button>
          <p></p>
        </div>

        <div className="popular-keywords">
          <ul>
            {popularKeywords.map((keyword, index) => (
              <li key={index}>{keyword} 
              </li>
            ))}
          </ul>
        </div>

        <div className="search-result">
          {searchResult.length > 0 ? (
            <ul>
              {searchResult.map((book, index) => (
                <li key={index} onClick={() => navigateToExplain(book.title, book.writer)}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={book.image} alt={book.title} style={{ width: '100px', marginRight: '10px' }} />
                    <div>
                      <p>{index + 1}. {book.title}</p>
                      <p>{book.writer} 지음 </p>
                      <p>출판사 : {book.publishing_company}</p>
                      <p>도서관 : {book.library}</p>
                      <p>위치 : {book.location} | 청구 기호 : {book.billing_symbol}  </p>
                        <div className={`loan ${book.loan_status === '대출 가능' ? 'available' : 'loaned'}`}>
                      <p>대출 가능 여부: {book.loan_status}</p></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>검색 결과 없음</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default Brief;