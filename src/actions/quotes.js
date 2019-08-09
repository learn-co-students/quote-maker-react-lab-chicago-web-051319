// TODO: Create action creators as defined in tests

export function addQuote(state){
    return {
        type: 'ADD_QUOTE',
        quote: {content: state.content, author: state.author, votes: 0}
    }
}
