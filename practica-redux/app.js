// # Actions

const createStore = require('redux').createStore;

// # Reducers
const defaultGameState = {
    pokemon: 10
}

const gameReducers = (state = defaultGameState, action) => {

    switch(action.type){

        default: return state;
    }
}
// # Store
const store = createStore(gameReducers)
console.log(`Estado inicial: ${store.getState()}`)