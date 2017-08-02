import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      //console.log(books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/"  render={() => (
          <div>
            <ListBooks books={this.state.books} />

            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />


        <Route path="/search" component={SearchBook} />
      </div>
    )
  }
}

export default BooksApp
