# Redux-fundamental
Understand Redux basics

# 1- Creer son Action

    const ACTION_NAME = 'ACTION_NAME'

# 2- Creer la Action Creation qui est une fonction et qui retourne un type d'action

    function name() {
      return {
        type: ACTION_NAME
      }
    }

# 3- Init State

    const initState = {
      stateName: 5
    }
    
# 4- Create a reducer function

    // return a new state
    const reducer = (state = initState, action) => {}
    
# 5- Create a Store

    // Le store prends en paramètre le reducer
    const store = Redux.createStore(reducer);

# 6- Create a dispatch function

    // Le dispatch prends en paramètre le nom de la fonction qui retourne le type d'action
    store.dispatch(name())
    
# 7- Subscribe method

    store.subscribe()
