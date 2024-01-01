import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Topic_programming.css';

function TopicProgrammingPage() {
    const { topic } = useParams();
    const topicBookJson = localStorage.getItem("books");
    const topicBooklist = topicBookJson ? JSON.parse(topicBookJson) : [];
    const navigate = useNavigate();
    const navigateToExplain = (title, writer) => {
      navigate("../Explain", { state: { title, writer } });
      console.log(title, writer);
    }

    console.log(topicBooklist);
    return (
      <div className="topicborder">
        <div className="topicContainer">
          <div className="topicInData">
          {topicBooklist.map((book, index) => {
            if (book.topic === topic) { // book.topic이 topic과 일치하면
              
              return ( // 아래 코드를 반환합니다.
                  <ul>
                      {/* <li key={index} onClick={() => navigateToExplain(index)}> */}

                      <li key={index} onClick={() => navigateToExplain(book.title, book.writer)}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img src={book.image} alt={book.title} style={{ width: '100px', marginRight: '10px' }} />
                          <div style={{flexGrow: 1}}>
                            <p><strong>{index + 1}. {book.title}</strong></p> <br></br>
                            <p>{book.writer} 지음 </p><br></br>
                            <p>도서관 : {book.library}</p><br></br>
                            <p>위치 : {book.location} | 청구 기호 : {book.billing_symbol}  </p> <br></br>
                            <div className={`loan ${book.loan_status === '대출 가능' ? 'available' : 'loaned'}`}>
                              <p>대출 가능 여부: {book.loan_status}</p></div>
                          </div>
                        </div>
                      </li>
                    
                </ul>
            
              );
            }
            return null; // book.topic이 topic과 일치하지 않으면 아무 것도 반환하지 않습니다.
          })}
        </div>
        </div>
        </div>
      );
}

export default TopicProgrammingPage;