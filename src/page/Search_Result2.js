import React, { useState, useEffect } from 'react';
import "./Search_R.css";
import "./App-border.css"
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import { BiSolidDownArrow } from "react-icons/bi";

function SearchResult2() {

const storedData = localStorage.getItem('formData');
const formData = JSON.parse(storedData);

const existingBooksJSON = localStorage.getItem("books");
const booklist = existingBooksJSON ? JSON.parse(existingBooksJSON) : [];

const [searchType, setSearchType] = useState("서명");    //맨 위 검색 패널을 핸들링하기 위한 상태변수
const [TypeValue, setTypeValue] = useState("");
const [isChecked, setIsChecked] = useState(false);
const [sortType, setSortType] = useState("선택");
const [NextOrder, setNextOrder] = useState("정렬");
const isDisabled = true;

const [filterbook, setFilterBook] = useState([]);
const [검색어, set검색어] = useState("");


const navigate = useNavigate();

const navigateToExplain = (title, writer) => {
navigate("../Explain", { state: { title, writer } });
console.log(title, writer);
}

useEffect( () => {
let result = [];

if (!formData.Type1Value && !formData.Type2Value && !formData.Type3Value) {   // 검색칸 모두 입력 안한 경우
window.alert("필수 정보가 누락되었습니다. 최소 하나 이상은 입력해주세요.");
navigate("../Detail");
}


else if (formData.Type1Value && !formData.Type2Value && !formData.Type3Value) {   // 서명칸만 입력한 경우
  result = booklist.filter(book => book.title.toLowerCase().includes(formData.Type1Value));
  set검색어(formData.searchType1 + ": " + formData.Type1Value);
}

else if (!formData.Type1Value && formData.Type2Value && !formData.Type3Value) {   //저자만 입력한 경우
  result = booklist.filter(book => book.writer.toLowerCase().includes(formData.Type2Value));
  set검색어(formData.searchType2 + ": " + formData.Type2Value);
}

else if (!formData.Type1Value && !formData.Type2Value && formData.Type3Value) {   // 출판사만 입력한 경우
result = booklist.filter(book =>
book.publishing_company.toLowerCase().includes(formData.Type3Value)
);
set검색어(formData.searchType3 + ": " + formData.Type3Value);
}

else if (formData.Type1Value && formData.Type2Value && !formData.Type3Value) {  // 서명, 저자칸만 입력한 경우
   result = booklist.filter(book => 
      book.title.toLowerCase().includes(formData.Type1Value) ||
      book.writer.toLowerCase().includes(formData.Type2Value)
  );
  set검색어(formData.searchType1 + ": " + formData.Type1Value + "  " + formData.searchType2 + ": " + formData.Type2Value);
}

else if (formData.Type1Value && !formData.Type2Value && formData.Type3Value) {  // 서명, 출판사만 입력한 경우
  result = booklist.filter(book => 
     book.title.toLowerCase().includes(formData.Type1Value) ||
     book.publishing_company.toLowerCase().includes(formData.Type3Value)
 );
 set검색어(formData.searchType1 + ": " + formData.Type1Value + "  " + formData.searchType3 + ": " + formData.Type3Value);
}

else if (!formData.Type1Value && formData.Type2Value && formData.Type3Value) {  // 저자, 출판사만 입력한 경우
  result = booklist.filter(book => 
    book.writer.toLowerCase().includes(formData.Type2Value) ||
    book.publishing_company.toLowerCase().includes(formData.Type3Value)
);
set검색어(formData.searchType2 + ": " + formData.Type2Value + "  " + formData.searchType3 + ": " + formData.Type3Value);
}

else if (formData.Type1Value && formData.Type2Value && formData.Type3Value) {  //서명, 저자, 출판사 모두 입력한 경우
  result = booklist.filter(book => 
      book.title.toLowerCase().includes(formData.Type1Value) ||
      book.writer.toLowerCase().includes(formData.Type2Value) ||
      book.publishing_company.toLowerCase().includes(formData.Type3Value)
  );
  set검색어(formData.searchType1 + ": " + formData.Type1Value + "  " + formData.searchType2 + ": " + formData.Type2Value
  + "  " + formData.searchType3 + ": " + formData.Type3Value);
}

if(formData.sortType === "서명순") {

if(formData.nextOrder === "오름차순") {
    result.sort( (a, b) => a.title.localeCompare(b.title) )
}

else if(formData.nextOrder === "내림차순") {
    result.sort((a, b) => b.title.localeCompare(a.title))
}
}

else if(formData.sortType === "저자명순") {

if(formData.nextOrder === "오름차순") {
  result.sort( (a, b) => a.writer.localeCompare(b.writer) )
}

else if(formData.nextOrder === "내림차순") {
    result.sort((a, b) => b.writer.localeCompare(a.writer))
}
}

else if(formData.sortType === "출판사명순") {

if(formData.nextOrder === "오름차순") {
  result.sort( (a, b) => a.publishing_company.localeCompare(b.publishing_company) )
}

else if(formData.nextOrder === "내림차순") {
    result.sort((a, b) => b.publishing_company.localeCompare(a.publishing_company))
}
}

else if(formData.sortType === "출판연도순") {

if(formData.nextOrder === "오름차순") {
  result.sort((a, b) => Number(a.year_of_publication) - Number(b.year_of_publication))
}

else if(formData.nextOrder === "내림차순") {
    result.sort((a, b) => Number(b.year_of_publication) - Number(a.year_of_publication))
}
}

setFilterBook(result);
}, []);



const handleSubmit = (event) => {
  event.preventDefault();

  if(isChecked){
    // 결과내 검색이 체크된 경우, 검색 유형과 검색어에 따라서 책을 필터링합니다.
    const result = filterbook.filter(book => {
      if (searchType === "서명") {
        set검색어(searchType + ": " + TypeValue);
        return book.title.toLowerCase().includes(TypeValue);
      } 
      else if (searchType === "저자명") {
        set검색어(searchType + ": " + TypeValue);
        return book.writer.toLowerCase().includes(TypeValue);
      }
      else if (searchType === "출판사명") {
        set검색어(searchType + ": " + TypeValue);
        return book.publishing_company.toLowerCase().includes(TypeValue);
      }
      return false;
    });
    setFilterBook(result);
  } 
  
  else if(!isChecked) {
    // 결과내 검색이 체크되지 않은 경우
    const result = booklist.filter(book => {
      if (searchType === "서명") {
        set검색어(searchType + ": " + TypeValue);
        return book.title.toLowerCase().includes(TypeValue);
      }
      else if (searchType === "저자명") {
        set검색어(searchType + ": " + TypeValue);
        return book.writer.toLowerCase().includes(TypeValue);
      }
      else if (searchType === "출판사명") {
        set검색어(searchType + ": " + TypeValue);
        return book.publishing_company.toLowerCase().includes(TypeValue);
      }
      return false;
    });
    setFilterBook(result);

  }
};


const inquirySubmit = (event) => {
  event.preventDefault();

  let sortedBooks;
  if(sortType === "서명순") {

    if(NextOrder === "오름차순") {
      sortedBooks = [...filterbook].sort( (a, b) => a.title.localeCompare(b.title) )
      
    }

    else if(NextOrder === "내림차순") {
      sortedBooks = [...filterbook].sort((a, b) => b.title.localeCompare(a.title))
      
    }
  }

  else if(sortType === "저자명순") {

    if(NextOrder === "오름차순") {
      sortedBooks = [...filterbook].sort( (a, b) => a.writer.localeCompare(b.writer) )
      
    }

    else if(NextOrder === "내림차순") {
      sortedBooks = [...filterbook].sort((a, b) => b.writer.localeCompare(a.writer))
      
    }
  }

  else if(sortType === "출판사명순") {

    if(NextOrder === "오름차순") {
      sortedBooks = [...filterbook].sort( (a, b) => a.publishing_company.localeCompare(b.publishing_company) )
      
    }

    else if(NextOrder === "내림차순") {
      sortedBooks = [...filterbook].sort((a, b) => b.publishing_company.localeCompare(a.publishing_company))
      
    }
  }

  else if(sortType === "출판연도순") {

    if(NextOrder === "오름차순") {
      sortedBooks = [...filterbook].sort((a, b) => Number(a.year_of_publication) - Number(b.year_of_publication))
      
    }

    else if(NextOrder === "내림차순") {
      sortedBooks = [...filterbook].sort((a, b) => Number(b.year_of_publication) - Number(a.year_of_publication))
      
    }

    }

    setFilterBook(sortedBooks);
    
}

const [showDetail, setShowDetail] = useState({});

const toggleDetail = (id) => {
    setShowDetail(prev => ({ ...prev, [id]: !prev[id] }));
}


return (
    <div>
        <div className='App-boder'>

           <div className='first-check'>
                

                      <form onSubmit={handleSubmit}>
                        <label style={{fontWeight: 'bold'}}><input type='checkbox' name='결과내검색' value="결과내검색" checked={isChecked} onChange={(e) => {setIsChecked(e.target.checked)}} /> 결과내 검색</label>
                        <br></br>
                        <select value={searchType} className='first-select' onChange={(e) => setSearchType(e.target.value) } >
                            <option value={"서명"}>서명</option>                           
                            <option value={"저자명"}>저자명</option>                              
                            <option value={"출판사명"}>출판사명</option>                          
                        </select>
                        <input type='text' placeholder='검색어를 입력하세요.' className='first-input' value={TypeValue} onChange={(e) => setTypeValue(e.target.value)}></input>
                        <button type='submit' className='first-button'><SlMagnifier /> &nbsp;검색</button>
                      </form>
                        <br></br><br></br>
                    
                        <h3> <IoIosArrowDroprightCircle color='darkblue' /> 검색어 &nbsp;                   
                          {검색어}
                        </h3>

                        <span style={{color: 'blue'}}>{`[서지정보]`}</span>
                        &nbsp; &nbsp;
                        <span style={{color: 'darkblue'}}>
                            총 &nbsp;
                            <span style={{color: 'red'}}>{filterbook.length}</span>
                            (1/1페이지) 건이 검색되었습니다.
                        </span>

                      <div className='inquiry-div'>
                        <form>
                          <select value={sortType} className='second-select' onChange={(e) => setSortType(e.target.value) } >
                              <option value={"소트"} disabled={isDisabled}>소트</option>
                              <option value={"서명순"}>서명순</option>                           
                              <option value={"저자명순"}>저자명순</option>                              
                              <option value={"출판사명순"}>출판사명순</option>
                              <option value={"출판연도순"}>출판연도순</option>                          
                          </select>
                          <select value={NextOrder} className='third-select' onChange={(e) => setNextOrder(e.target.value) } >
                              <option value={"정렬"} disabled={isDisabled}>정렬</option>                          
                              <option value={"오름차순"}>오름차순</option>                              
                              <option value={"내림차순"}>내림차순</option>                         
                          </select>
                          <button type='submit' className='first-button' onClick={inquirySubmit}>조회</button>
                          </form>
                        </div>

                        <hr style={{borderColor: 'blue'}} />
                                    

                      {
                          filterbook.reduce((prev, book, index) => {
                              const bookComponent = (
                                  <div key={book.id} style={{ display: 'flex', alignItems: 'center' }}>
                                      <img src={book.image} alt={book.title} style={{ marginRight: '10px', height: '200px', width: 'auto' }} />
                                      <div style={{flexGrow: 1}}>
                                          <a onClick={() => navigateToExplain(book.title, book.writer)} className='a-title'> 
                                              <p>-{formData.selectedCheckboxes}- &nbsp; <strong>{book.title}</strong></p> 
                                          </a>
                                          <p>저자: {book.writer} | 출판사: {book.publishing_company} | 출판연도: {book.year_of_publication}</p>
                                          <p>청구기호: {book.billing_symbol}</p>
                                      </div>
                                      <button className='brief-button' onClick={() => toggleDetail(book.id)}>
                                          {showDetail[book.id] ? '간략닫기' : '간략보기'}&nbsp;<BiSolidDownArrow />
                                      </button>
                                      {showDetail[book.id] && (
                                          <div>
                                              <table>
                                                  <tr>
                                                      <th>대출 상태</th>
                                                      <th>청구 기호</th>
                                                      <th>자료실</th>
                                                      <th>반납 예정일</th>
                                                  </tr>
                                                  <tr>
                                                      <td>{book.loan_status}</td>
                                                      <td>{book.billing_symbol}</td>
                                                      <td>{book.location}</td>
                                                      <td>{book.return_date}</td>
                                                  </tr>
                                              </table>
                                          </div>
                                      )}
                                  </div>
                              );

                              if (index < filterbook.length - 1) {
                                  return [...prev, bookComponent, <hr />];
                              } else {
                                  return [...prev, bookComponent];
                              }
                          }, [])
                      }


                      
                        <hr></hr>

            </div>

           

        </div>
    </div>
);
}

export default SearchResult2;