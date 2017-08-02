import React from 'react'
import { Route } from 'react-router-dom'
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
      console.log(books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />

        <Route exact path="/">
          <ListBooks books={this.state.books} />
        </Route>
      </div>
    )
  }
}

export default BooksApp
