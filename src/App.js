import React from 'react';
import './App.css';
import { BrowserRouter,Routes,  Route } from 'react-router-dom';
import Nav from './component/Nav';
import Topic from './page/Topic_page';
import Brief from './page/Brief_page';
import Explain from './page/Explain';
import Detail from './page/Detail_page';
import Paperback from './page/Paper_Back';
import Ebook from './page/ebook';
import Serials from './page/Serials';
import Nonbook from './page/Non_book';
import Thesis from './page/Thesis';
import TopicProgrammingPage from './page/Topic_programming_page';
import book from './data/book.json'
import SearchResult from './page/Search_Result';
import SearchResult2 from './page/Search_Result2';
import Header from './component/Header';
import Notfound from './page/notfound';
 

function App() {
  //로컬스토리지에 저장
  if (localStorage.getItem('books')===null) {   
    localStorage.setItem('books', JSON.stringify(book));
  }

 

  return (
    
    <BrowserRouter>
    <Header/>
    <div>
      <Nav/>
      <Routes>
      <Route path="/" element={<Brief/>}/>
      <Route path="/Brief" element={<Brief/>}/>
      <Route path="/Topic" element={<Topic/>}/>
      <Route path="/Detail" element={<Detail/>}/>
      <Route path="/Explain" element={<Explain/>}/>
      <Route path="/Paperback" element={<Paperback/>}/>
      <Route path='/ebook' element={<Ebook />}/>
      <Route path='/serials' element={<Serials/>}/>
      <Route path='/non_book' element={<Nonbook/>}/>
      <Route path='/thesis' element={<Thesis/>}/>
      <Route path='/Topic_programming_page/:topic' element={<TopicProgrammingPage/>}/>
      <Route path='/SearchResult' element={<SearchResult/>}/>
      <Route path='/SearchResult2' element={<SearchResult2/>}/>
      <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
