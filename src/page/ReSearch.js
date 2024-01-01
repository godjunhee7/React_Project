import React, { useState, useEffect } from 'react';
import "./Search_R.css";
import "./App-border.css"
import { Link, useNavigate } from 'react-router-dom';


function ReSearch() {

  const storedData = localStorage.getItem('ReformData');
  const ReformData = JSON.parse(storedData);

  const existingBooksJSON = localStorage.getItem("books");
  const booklist = existingBooksJSON ? JSON.parse(existingBooksJSON) : [];

  console.log('Loaded Form Data in Search_Result:', formData);
  console.log(booklist);

  const [filterbook, setFilterBook] = useState([]);

  useEffect( () => {
    let result;

    if (ReformData.TypeValue && !formData.Type2Value && !formData.Type3Value) {
      result = booklist.filter(book => book.title === formData.Type1Value);
    }

    else if (formData.Type1Value && formData.Type2Value && !formData.Type3Value) {
       result = booklist.filter(book => 
          book.title === formData.Type1Value &&
          book.writer === formData.Type2Value
      );
    }

    else if (formData.Type1Value && formData.Type2Value && formData.Type3Value) {
      result = booklist.filter(book => 
          book.title === formData.Type1Value &&
          book.writer === formData.Type2Value && book.publishing_company === formData.Type3Value
      );
  }

    setFilterBook(result);
  }, []);

    const [searchType, setSearchType] = useState("서명");    //맨 위 검색 패널을 핸들링하기 위한 상태변수
    const [TypeValue, setTypeValue] = useState("");

    const saveFormDataToLocal = (ReformData) => {
      localStorage.setItem('ReformData', JSON.stringify(ReformData));
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
  
      // const selectedCheckboxes = Object.entries(checkboxes)
      //   .filter(([_, checked]) => checked)
      //   .map(([checkbox]) => checkbox);
  
      const ReformData = {
        searchType,
        TypeValue
      };
  
      saveFormDataToLocal(ReformData);
  
      // 이후에 페이지 이동 등의 작업을 수행할 수 있습니다.
      // 예를 들어, react-router-dom을 사용하는 경우:
      navigate('/SearchResult');
    };
    
    return (
        <div>
            <div className='App-boder'>

               <div className='first-check'>
                    <label><input type='checkbox' name='결과내검색' value="결과내검색" /> 결과내 검색</label>
                    <br></br>

                          <form onSubmit={handleSubmit}>
                            <select value={searchType} className='first-select' onChange={(e) => setSearchType(e.target.value) } >
                                <option value={"서명"}>서명</option>                           
                                <option value={"저자명"}>저자명</option>                              
                                <option value={"출판사명"}>출판사명</option>                          
                            </select>
                            <input type='text' placeholder='검색어를 입력하세요.' className='first-input' value={TypeValue} onChange={(e) => setTypeValue(e.target.value)}></input>
                            <button type='submit' className='first-button'>검색</button>
                          </form>
                            <br></br><br></br>
                        
                            <h3>검색어 :&nbsp;
                              {formData && formData.Type1Value ? `${formData.searchType1}: ${formData.Type1Value}` : ''} &nbsp;
                              {formData && formData.Type2Value ? `${formData.searchType2}: ${formData.Type2Value}` : ''} &nbsp;
                              {formData && formData.Type3Value ? ` ${formData.searchType3}: ${formData.Type3Value}` : ''}
                            </h3>

                            <hr></hr>
                          
                            {filterbook.map(book => (
                              <div key={book.id} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={book.image} alt={book.title} style={{ marginRight: '10px' }} />
                                <div>
                                  <Link to={"../Explain"} style={{ textDecoration: 'none' }}><p>-{formData.selectedCheckboxes}- &nbsp; <strong>{book.title}</strong></p></Link>
                                  <p>저자: {book.writer} | 출판사: {book.publishing_company} | 출판연도: {book.year_of_publication}</p>
                                  <p>청구기호: {book.billing_symbol}</p>
                                </div>
                              </div>
                            ))}

                            <hr></hr>

                </div>

               

            </div>
        </div>
    );
}

export default ReSearch;