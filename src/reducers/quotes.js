export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'UPVOTE_QUOTE':
      const upvoteIndex = state.findIndex( quote => {
        return quote.id === action.quoteId
      })
      return [
        ...state.slice(0, upvoteIndex),
        Object.assign({}, state[upvoteIndex], {votes: state[upvoteIndex].votes += 1}),
        ...state.slice(upvoteIndex + 1)
      ]
    case 'DOWNVOTE_QUOTE':
        const downvoteIndex = state.findIndex( quote => {
          return quote.id === action.quoteId
        })
        return [
          ...state.slice(0, downvoteIndex),
          Object.assign({}, state[downvoteIndex], {votes: state[downvoteIndex].votes -= 1}),
          ...state.slice(downvoteIndex + 1)
        ]
    default:
      return state;
  }
}
