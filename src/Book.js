import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propType = {
    book: PropTypes.object.isRequired,
    updateBookStatus: PropTypes.func.isRequired
  }

  changeBookStatus = (e) => {
    var st = e.target.value
    var book = this.props.book
    book.shelf = st
    this.props.updateBookStatus(book)
  }


  render() {
    var authors = ""
    if(Array.isArray(this.props.book.authors)) {
      authors = this.props.book.authors.map((author) => author + ",")
    }

    var imagelink = ""
    if(typeof this.props.book.imageLinks !== "undefined") {
      imagelink = this.props.book.imageLinks.smallThumbnail
    }

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url('" + imagelink + "')" }}></div>
          <div className="book-shelf-changer">
            <select name="bookstatus" onChange={ this.changeBookStatus } value={this.props.book.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ this.props.book.title }</div>
        <div className="book-authors">{ authors }</div>
      </div>
    )
  }
}

export default Book
