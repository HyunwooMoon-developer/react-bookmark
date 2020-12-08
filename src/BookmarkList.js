import React from 'react';
import Bookmark from './Bookmark';

class BookmarkList extends React.Component{
    render(){
        const bookmarks = this
                        .props
                        .bookmarks
                        .map((bookmark, i)=> <Bookmark {...bookmark} key={i} />)
        return(
            <div className="bookmarkList">
                {bookmarks}
            </div>
        )
    }
}

BookmarkList.defaultProps = {
    bookmarks : []
}

export default BookmarkList;