
import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from "react-table"
import Bookitem from '../component/bookitem.js';
import DataTable from '../component/DataTable';
import { useLocation } from "react-router";
import CommentList from '../component/CommentList.js';



const COLUMNS = [
  {
    Header: "대출 상태",
    accessor: 'loan_status'
  },
  {
    Header: "청구 기호",
    accessor: 'billing_symbol'
  },
  {
    Header: "자료실",
    accessor: 'location'
  },
  {
    Header : "반납 예정일",
    accessor: 'return_date'
  }
];

function Explain() {
 //네비게이트 기능을 이용해 클릭된 아이템의 title을 가져옴
  const location = useLocation();
  const title = location.state.title;
  const writer = location.state.writer;
  const [item] = useState(title);
  const [Writer] = useState(writer);

  //로컬스토리지에서 가져오기
  const existingBooksJSON = localStorage.getItem("books");
  const bookData = existingBooksJSON ? JSON.parse(existingBooksJSON) : [];
  const [Book, setBookdata] = useState(bookData);


 //청구기호 비교를 위한 상태변수 설정
  const [selectedBillingSymbol, setSelectedBillingSymbol] = useState(null);

   //현재 날짜를 가져온 후 반납예정일 구하기
  const today = new Date();
  const future = new Date(today);
  future.setDate(future.getDate() + 30); 

  //리액트 테이블을 이용해 만들기
  const filteredData = useMemo(() => Book.filter(book => book.title === item && book.writer === Writer), [Book, item, Writer]);
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => filteredData, [filteredData]);
  const tableInstance = useTable({ columns, data })

  // books 배열에서 title과 writer이 일치하는 책 찾기
  const filterBookById = (title, Writer) => {
    return Book.find(book => book.title === title && book.writer === Writer);
  };
//DataTable에서 체크박스된 청구기호를 가져와서 상태관리 변수에 다시 저장
  const CheckboxChange = (billingSymbol) => {
    setSelectedBillingSymbol(billingSymbol);
  };

  // Book 업데이트하기  //체크박스된 청구기호과 데이터의 청구기호를 비교해서 데이터들 다시 정리
  const LoanBook = (loan_status, return_date) => {
    //청구기호가 같은거만 골라서 리스트를 만듬
    const selectedBook = Book.find(book => book.billing_symbol === selectedBillingSymbol);
  //셀렉북이 있고 셀렉북의 대출 상태가 "대출중" 이라면 알람을 띄움
    if (selectedBook && selectedBook.loan_status === "대출 중 ") {
      alert("다른 사용자가 이미 대출했습니다.");  
    } //아니면 setBookdata로 상태 변수 다시 저장해서 렌더링함
    else {
      const newBookdata = Book.map(book =>
        book.billing_symbol === selectedBillingSymbol? { ...book, loan_status, return_date }: book);
      setBookdata(newBookdata);
    }
  };
 

  
  // 업데이트한 Book 로컬에 다시 저장하기
  useEffect(() => {
    localStorage.removeItem('books');
    localStorage.setItem('books', JSON.stringify(Book));
  }, [Book]);


  return (
    <>
      <div className='container'>
        <Bookitem key={filterBookById(item, Writer).id} {...filterBookById(item, Writer)} />
        <DataTable tableInstance={tableInstance} onCheckboxChange={CheckboxChange}  />
        <div className='btncontainer'>
          <button className='button' onClick={() => LoanBook("대출 중 ", future.toLocaleDateString())}>대출예약</button>
          
        </div>
      </div>
      <div className='Commentcontainer'>
        <CommentList/>
      </div>
      
    </>
  );
}

export default Explain;