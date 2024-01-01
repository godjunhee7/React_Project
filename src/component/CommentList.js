import React, {  useState } from "react";
import Pop from "./Pop";
import { AiFillLike } from "react-icons/ai";
import { FaStar, FaTrashAlt } from "react-icons/fa";
import './CommentList.css';


function CommentList() {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
 
//코멘트 추가 함수
  const addComment = () => {
    //코멘트가 있으면 뉴코멘트 변수를 만들어 속성 저장
    if (comment) {
      const newComment = {
        id: commentList.length + 1, 
        comment: comment,
        rating: rating,
        like: 0
      };
      //지금껏 변수에 추가로 뉴코멘트 저장
      setCommentList([...commentList, newComment]);
      //코멘트랑 레이팅 초기화
      setComment(''); 
      setRating(0); 
    } else {
      console.log('댓글을 입력안함');
    }
  };
 //코멘트 지우기 id값을 받아와서 id와 다르면 애들만 필터로 걸러서 newCommnetList를 만들어라
  const removeComment = (id) => {
    const newCommentList = commentList.filter(list => list.id !== id);
    //상태변수 다시 저장 후 렌더링
    setCommentList(newCommentList);
  }
 //스타를 찍어내기 위한 함수
  const printStar = (rating) => {
    return (
      [1, 2, 3, 4, 5].map((i) => (
        <FaStar key={i} color={rating > i ? "#4daeef" : "grey"} />
      ))
    );
  };
//좋아요 버튼이 눌리면 해당 코멘트의 id를 가져온 후 맵함수를 써서 like 값 변경
  const LikeClick = (id) => {
    const updatedComments = commentList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          like: item.like + 1
        };
      }
      return item;
    });
    setCommentList(updatedComments);

    setLiked(prevLiked => ({
      ...prevLiked,
      [id]: true,
    }));

    setTimeout(() => {
      setLiked(prevLiked => ({
        ...prevLiked,
        [id]: false,
      }));
    }, 1500);
  };
  //베스트 댓글 찾기 
  const findBestComment = () => {
    //만약 commnetList에 아무것도 없으면 널 반환
    if (commentList.length === 0) return null;
    //변수 지정
    let maxLikes = 0;
    let best = null;
  // 만약 길이가 하나고, 좋아요수가 5개 이상이면 그게 베스트 댓글이다
    if (commentList.length === 1 && commentList[0].like > 5){
      best = commentList[0];
  }
//좋아요가 가장 많은 코멘트를 찾는 알고리즘
    for (let i = 0; i < commentList.length; i++) {
      if (commentList[i].like > 5 && commentList[i].like > maxLikes) {
        maxLikes = commentList[i].like;
        best = commentList[i];
      }
    }
    return best;
  };
  //베스트 코멘트 값반환 후 저장
  let bestComment = findBestComment();

  //사본 만들기
  let updatedCommentList = [...commentList];

  if (bestComment) {
    // 최고의 댓글을 배열에서 제거하고 배열의 맨 앞에 추가
    updatedCommentList = updatedCommentList.filter(comment => comment !== bestComment);
    // unshift 새 요소를 배열의 맨 앞에 추가한다고 함 나머지는 밀리고
    updatedCommentList.unshift(bestComment);
  }

 return (
    <div className="comment-section">
      <Pop
        comment={comment}
        rating={rating}
        setComment={setComment}
        setRating={setRating}
        addComment={addComment}
      />
      <hr />
      {commentList.length > 0 ? (
        <ul>
          {updatedCommentList.map((item) => (
            <li key={item.id} className="comment">
              {item === bestComment && <button className="best">베스트댓글</button>}
              <div>{printStar(item.rating)}</div>
              <div>{item.comment}</div>
              <span className="like-button" onClick={() => LikeClick(item.id)}
              whileTap={{ scale: liked[item.id] ? 2 : 1 }}>
                <AiFillLike color="#4a9bfe81"/>
              </span>
              {item.like}
             < span className="delete-button" onClick={() => removeComment(item.id)}>

                <FaTrashAlt color="#4a9bfe81" />
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="blank">
          댓글이 하나도 없어요. 댓글을 작성 후 베스트 댓글이 되어보세요!
        </p>
      )}
    </div>
  );
}

export default CommentList;
