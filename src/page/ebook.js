import React, { useState } from 'react';
import "./Detail.css";
import "./App-border2.css"
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl"

function Ebook() {

    const [searchType1, setSearchType1] = useState("서명");
    const [searchType2, setSearchType2] = useState("저자명");
    const [searchType3, setSearchType3] = useState("출판사명");

    const [Type1Value, setType1Value] = useState("");
    const [Type2Value, setType2Value] = useState("");
    const [Type3Value, setType3Value] = useState("");

    const[sortType, setSortType] = useState("선택");
    const[nextOrder, setNextOrder] = useState("정렬");
    const[pageNum, setPageNum] = useState(10);

    const selectedCheckboxes = "e-book";

    const saveFormDataToLocal = (formData) => {
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    // const history = useHistory();
    const navigate = useNavigate();

      const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = {
          searchType1,
          Type1Value,
          searchType2,
          Type2Value,
          searchType3,
          Type3Value,
          sortType,
          nextOrder,
          pageNum,
          selectedCheckboxes
        };
    
        saveFormDataToLocal(formData);
          
        navigate('/SearchResult2');
      };


   
    const [activeIndex, setActiveIndex] = useState(2); // 디폴트로 'ebook'을 활성화
    const [hoverIndex, setHoverIndex] = useState(null);
  
    const handleMouseEnter = (index) => {
      setHoverIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoverIndex(null);
    };

    const navItems = [
      { name: '전체', path: '/Detail' },
      { name: '단행본', path: '/Paperback' },
      { name: 'e-Book', path: '/ebook' },
      { name: '연속간행물', path: '/serials' },
      { name: '비도서', path: '/non_book' },
      { name: '학위논문', path: '/thesis' }
    ];

    const handleTypeValueChange = (event, setTypeValue) => {
        setTypeValue(event.target.value);
    };

    const handleSearchTypeChange = (event, setSearchType) => {
        setSearchType(event.target.value);
    };


    const handleSortTypeChange = (event, setSortType) => {
        setSortType(event.target.value);
    };

    const handleNextOrderChange = (event, setNextOrder) => {
        setNextOrder(event.target.value);
    };

    const handlePageNumChange = (event, setPageNum) => {
        setPageNum(event.target.value);
    };


   return (
       <div>
            <div className='App-boder'>                                    
                        <ul className="nav-container">
                            {navItems.map((item, index) => (
                                <li 
                                key={index} 
                                className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                >
                                <Link 
                                    to={item.path} 
                                    className={hoverIndex === index ? 'hover' : ''}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {item.name}
                                </Link>
                                </li>
                            ))}
                        </ul>
                                             
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                    <br></br>
                            <div className='divsel'>
                                <select value={searchType1} onChange={(e) => handleSearchTypeChange(e, setSearchType1)} >
                                    <option value={"서명"}>서명</option>
                                </select>
                                <input type='text' placeholder='검색어를 입력하세요.' value={Type1Value} onChange={(e) => handleTypeValueChange(e, setType1Value)}></input>
                 
                                <br></br><br></br>
                                {/* ------------------------- */}
                                <select value={searchType2} onChange={(e) => handleSearchTypeChange(e, setSearchType2)}>
                               
                                    <option value={"저자명"} >저자명</option>
          
                                </select>
                                <input type='text' placeholder='검색어를 입력하세요.' value={Type2Value} onChange={(e) => handleTypeValueChange(e, setType2Value)}></input>

                                <br></br><br></br>
                            </div>
                                {/* ------------------------- */}
                            <div className='divsel2'>
                                <select value={searchType3} onChange={(e) => handleSearchTypeChange(e, setSearchType3)}>
                            
                                    <option value={"출판사명"}>출판사명</option>
                    
                                </select>
                                <input type='text' placeholder='검색어를 입력하세요.' className='inputlast' value={Type3Value} onChange={(e) => handleTypeValueChange(e, setType3Value)}></input>
                            </div>
                        </div>

                            <br></br><br></br>
                        
                            <h3><IoIosArrowDroprightCircle color='darkblue' /> 검색 설정</h3>
                                <div className='gray-box'>

                                 <br></br>
                
                                    <div className="divsel3">
                                        <div className="row">
                                            <div>
                                            <span className='space'>소트</span>
                                            <select value={sortType} onChange={(e) => handleSortTypeChange(e, setSortType)}>
                                                <option value={"선택"}>선택</option>
                                                <option value={"서명순"}>서명순</option>
                                                <option value={"저자명순"}>저자명순</option>
                                                <option value={"출판사명순"}>출판사명순</option>
                                                <option value={"출판연도순"}>출판연도순</option>
                                            </select>
                                            </div>
                                            <div>
                                            <span className='space'>차순</span>
                                            <select value={nextOrder} onChange={(e) => handleNextOrderChange(e, setNextOrder)}>
                                                <option value={"정렬"}>정렬</option>
                                                <option value={"오름차순"}>오름차순</option>
                                                <option value={"내림차순"}>내림차순</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div>
                                            <span className='space2'>페이지/수</span>
                                            <select value={pageNum} onChange={(e) => handlePageNumChange(e, setPageNum)}>
                                                <option value={10}>10</option>
                                                <option value={20}>20</option>
                                                <option value={30}>30</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>                          
                                </div> 
       
                                <div className="lastbox">                             
                                    <button type='submit' className='search'><SlMagnifier /> &nbsp;검색</button>                                                                                                           
                                </div>
                                
                     </form>

            </div>  
       </div>


   );
}

export default Ebook;

