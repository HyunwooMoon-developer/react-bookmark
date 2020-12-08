import React from 'react';

const Rating = function(props){
    const stars = [0,0,0,0,0]
    .map((_, i) => i <props.value
    ? <span key={i}>&#9733;</span>
    : <span key={i}>&#9734;</span>);

return(
    <div className="rating">
        {stars}
    </div>
)
}

export default Rating;