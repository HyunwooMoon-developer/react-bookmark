/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React from 'react';
import AddBookmark from './AddBookmark';
import BookmarkApp from './BookmarkApp';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bookmarks : [],
      showAddForm : false
    }
  }

  componentDidMount() {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        // Add your key after Bearer
        "Authorization": "Bearer $2a$10$5ybwBalv3IJjZpm7wYZgO.ViP6xD2Cz74Tw705F2Yh93xMox2m4qK",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  setShowAddForm(show){
    this.setState({
      showAddForm: show
  })
  }

  addBookmark(bookmark){
    this.setState({
      bookmarks : [...this.state.bookmarks.bookmark],
      showAddForm : false
    })
  }

  render(){
    
    const page = this.state.showAddForm
                ? <AddBookmark 
                  showForm = {show =>this.setShowAddForm(show)}
                  handleAdd={bookmark=>this.addBookmark(bookmark)}
                />
                : <BookmarkApp bookmakrs={this.state.bookmarks} showForm={show=>this.setShowAddForm(show)}/>

    return (
      <div className="App">
        {page}
      </div>
    )
  }
}

export default App;
