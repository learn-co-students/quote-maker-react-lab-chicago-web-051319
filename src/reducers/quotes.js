export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'UPVOTE_QUOTE':
       const newState = state.map(quote => {
        if(quote.id === action.quoteId){
          quote.votes += 1
        }
        return quote  
      })
      console.log(newState)
      return newState
      
    default:
      return state;
  }
}
