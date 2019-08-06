import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import uuid from 'uuid';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  handleDelete = id => {
    this.props.removeQuote(id)
  }

  upvoteQuote = (id) => {
    this.props.upvoteQuote(id)
  }

  downvoteQuote = (id) => {
    this.props.downvoteQuote(id)
  }

  render() {

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {this.props.quotes.map(quote =><QuoteCard key={quote.id} quote={quote}
              upvoteQuote= {id => this.upvoteQuote(id)}
              downvoteQuote = {id => this.downvoteQuote(id)}
              handleDelete= {id => this.handleDelete(id)}/> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (id) => dispatch(removeQuote(id)),
    upvoteQuote: (id) => dispatch(upvoteQuote(id)),
    downvoteQuote: (id) =>dispatch(downvoteQuote(id))}

}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
