import React from "react";
import Star from "./Star";

const StarRating = function( {
    selectedStars=0,
    onRate = f => f
}){
    return (
    <>
        {[1,2,3,4,5].map((i) => (
            <Star
                key={i}
                selected={selectedStars > i}
                onSelect={() => onRate(i+1)}
            /> )) }
    </>
    );
    }
    
export default StarRating;
    