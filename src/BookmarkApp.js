import React from 'react';
import BookmarkList from './BookmarkList';
import Fab from './Fab';
import './bookmarkapp.css';

class BookmarkApp extends React.Component{
    render(){
        return (
            <div className="bookmarkapp">
                <h2>Bookmarks</h2>
                <BookmarkList bookmarks={this.props.bookmarks} />
                <Fab showForm={this.props.showForm}/>
            </div>
        )
    }
}

export default BookmarkApp;