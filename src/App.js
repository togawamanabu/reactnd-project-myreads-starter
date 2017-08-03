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
    })
  }

  updateBookStatus = (book) => {
    var updatedbooks = this.state.books.map((b) => {
      if(b.id === book.id) {
        b.shelf = book.shelf
      }
      return b
    })

    this.setState({books: updatedbooks})

    BooksAPI.update(book, book.shelf).then((ret) => {
      console.log("bookupdated", ret)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/"  render={() => (
          <div>
            <ListBooks books={this.state.books} updateBookStatus={this.updateBookStatus} />

            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />


      <Route path="/search" render={() => (
          <SearchBook updateBookStatus={this.updateBookStatus} />
        )} />
      </div>
    )
  }
}

export default BooksApp
