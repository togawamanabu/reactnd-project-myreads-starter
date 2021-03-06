import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class SearchBook extends Component {
  state = {
    books:[],
  }

  static propType = {
    updateBookStatus: PropTypes.func.isRequired
  }


  handleSearch = (e) => {
    var query =  e.target.value

    BooksAPI.search(query, 20).then((books) => {
        if(Array.isArray(books)){
          this.setState({books})
        } else {
          this.setState({books: []})
        }
      })

  }

  updateBookStatus = (book) => {
    this.props.updateBookStatus(book)
  }

  queryChanged = (e) => {

  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}

              <input name="query" type="text" placeholder="Search by title or author" onChange={this.handleSearch}/>


          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.books.map((book) => (
                 <li key={ book.id }><Book book={ book } updateBookStatus={this.updateBookStatus} /></li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
