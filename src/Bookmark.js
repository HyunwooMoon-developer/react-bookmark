/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Rating from './Rating';

const Bookmark = function(props){
    return(
        <div className="bookmark">
            <div className="bookmark__row">
                <div className="bookmark__title">
                    <a
                    href={props.url}
                    target="_blank"
                    rel = "noopener noopner"
                    >
                        {props.title}
                    </a>
                </div>
                <Rating value={props.rating} />
            </div>
            <div className="bookmark__description">
                {props.description}
            </div>
        </div>
    )
}

export default Bookmark;