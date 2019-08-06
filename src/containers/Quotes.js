import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  upvoteQuote = (id) => {
    this.props.upvoteQuote(id)
  }

  downvoteQuote = (id) => {
    this.props.downvoteQuote(id)
  }

  renderQuotes = () => {
    return this.props.quotes.map(quote => {
      return < QuoteCard 
      quote={quote} 
      key={quote.id} 
      removeQuote={this.props.removeQuote}
      upvoteQuote={this.upvoteQuote}
      downvoteQuote={this.downvoteQuote}
      />
    })
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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes };
};

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (id) => {dispatch(removeQuote(id))},
    upvoteQuote: (id) => {dispatch(upvoteQuote(id))},
    downvoteQuote: (id) => {dispatch(downvoteQuote(id))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
