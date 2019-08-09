import uuid from 'uuid';
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      
      return {id: uuid(), content: action.quote.content, author: action.quote.author, votes: action.quote.votes}
  
    default:
      return state;
  }
}
