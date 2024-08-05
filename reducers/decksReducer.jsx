export const types = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE'
}

export function decksReducer(decks, action) {

    switch(action.type) {
        case types.ADD: {
            return [...decks, {
                id: action.id,
                name: action.name,
                details: {due: 0, new: 0, total: 0},
                cards:[]
            }]
        }
        case types.EDIT: {
            return decks.map(deck => {
                if (deck.id === action.id) {
                    return action.deck
                } else {
                    return deck
                }
            })
        }
        case types.DELETE: {
            return decks.filter(deck => deck.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }

}