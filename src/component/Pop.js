import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import "./Pop.css";
import StarRating from './StarRating';
import './CommentList.css';

function Pop({
  comment,
  rating,
  setComment,
  setRating,
  addComment
  }){

    const [isOpen, setIsOpen] = useState(false);

  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
      addComment();
    };
  
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };

    useEffect(() => {
      Modal.setAppElement('#root');
    }, []);

    return (
      <div>
        <button className='cbutton' onClick={openModal }>댓글 쓰기</button>
  
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <button className="close-btn" onClick={closeModal}>X</button>
          <h2>댓글 쓰기</h2>
          <StarRating selectedStars={rating} onRate={setRating}/>
          <textarea
            placeholder="댓글을 써주세요..."
            value={comment}
            onChange={handleCommentChange}
            rows={4}
            cols={50}
          />
          <button className="complete-btn" onClick={closeModal}>완료</button>
        </Modal>
      </div>
    );
}

export default Pop;