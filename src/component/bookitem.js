import React from "react";
import "../page/Explain_page.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Bookitem = function({ title, image, writer, description, library, year_of_publication, Registration_number, issued , form ,ISBN }) {
  return (
    <>
    <div className="bookContainer">
      <h3 className="bookTitle">{title}</h3>
      <div className="box">
        <img src={image} alt="이미지 설명" className="bookImage" />
        <div className="textBox">
          <div class="details">
            <strong className="detailsStrong">저자:</strong><span>{writer}</span>
          </div>
          <div class="details">
          <strong className="detailsStrong">발행 연도:</strong><span>{year_of_publication}</span>
          </div>
          <div class="details">
            <strong className="detailsStrong">등록 번호:</strong><span>{Registration_number}</span>
          </div>
          <div class="details">
            <strong className="detailsStrong">발행 사항:</strong><span>{issued}</span>
          </div>
          <div class="details">
            <strong className="detailsStrong">형태 사항:</strong><span>{form}</span>
          </div>
          <div class="details">
            <strong className="detailsStrong">ISNB:</strong><span>{Registration_number}</span>
          </div>
          <div class="details">
            <strong className="detailsStrong">도서관:</strong><span>{library}</span>
          </div>

        </div>
      </div>
      </div>
      <div className="detailsSection">
        <p className="explaintext"><IoIosArrowDroprightCircle /> 상세정보</p>
        <p>{description}</p>
        <hr/>
      </div>
      </>
    
  );
};

export default Bookitem;
