import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
  static propType = {
    books: PropTypes.array.isRequired,
  }

  render() {
    var reading_books = this.props.books.filter((book) => book.shelf === "currentlyReading")
    var wanttoread_books =  this.props.books.filter((book) => book.shelf === "wantToRead")
    var read_books =  this.props.books.filter((book) => book.shelf === "read")

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { reading_books.map((book) => (
                       <li key={ book.id }><Book book={ book }  /></li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { wanttoread_books.map((book) => (
                       <li key={ book.id }><Book book={ book } /></li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <ol className="books-grid">
                    { read_books.map((book) => (
                         <li key={ book.id }><Book book={ book } /></li>
                    ))}
                  </ol>
                </ol>
              </div>
            </div>
          </div>
        </div>        
      </div>
    )}
}

export default ListBooks
