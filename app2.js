// ========= COMBINAISONS DES REDUCERs ========= //

// Actions
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';
const BUY_TV = 'BUY_TV';

// Action Creation
function buyPhone() {
  return {
    type: BUY_PHONE
  }
}

function buyTablet() {
  return {
    type: BUY_TABLET
  }
}

function buyTV() {
  return {
    type: BUY_TV
  }
}

// Init state
const initStatePhones = {
  phones: 5,
  tablet: 10
}

const initStateTV = {
  tv: 8
}

const phonesReducer = (state = initStatePhones, action) => {
  switch (action.type) {
    case BUY_PHONE: 
      return {
        ...state,
        phones: state.phones - 1
      }
    break;
    case BUY_TABLET:
      return {
        ...state,
        tablet: state.tablet - 1
      }
  
    default: return state
  }
}

const tvReducer = (state = initStateTV, action) => {
  switch (action.type) {
    case BUY_TV: 
      return {
        ...state,
        tv: state.tv - 1
      }
  
    default: return state
  }
}

// Combine Reducer
const rootReducer = Redux.combineReducers({
  // key: value
  phone: phonesReducer,
  tvs: tvReducer
});

// Create Redux Store
const store = Redux.createStore(rootReducer);

// DOM elements
const availablePhone = document.getElementById('count');
const availableTablet = document.getElementById('count-tab');
const availableTV = document.getElementById('count-tv');
const phone = document.getElementById('buy-phone');
const tablet = document.getElementById('buy-tablet');
const tv = document.getElementById('buy-tv');

console.log(store.getState());

// Get phones
let storedPhone = store.getState().phone.phones;
let storedTablet = store.getState().phone.tablet;
let storedTV = store.getState().tvs.tv;

// Insert in HTML
availablePhone.innerHTML = storedPhone;
availableTablet.innerHTML = storedTablet;
availableTV.innerHTML = storedTV;

// Dispatch function
phone.addEventListener('click', () => {
  store.dispatch(buyPhone());
})

tablet.addEventListener('click', () => {
  store.dispatch(buyTablet());
})

tv.addEventListener('click', () => {
  store.dispatch(buyTV());
})

// Subscribe method
store.subscribe(() => {
  availablePhone.innerHTML = store.getState().phone.phones;
  availableTablet.innerHTML = store.getState().phone.tablet;
  availableTV.innerHTML = store.getState().tvs.tv;

  console.log( store.getState());

  if(store.getState().phone.phones === 0) {
    phone.style.display = 'none'
  }
  
  if(store.getState().phone.tablet === 0) {
    tablet.style.display = 'none'
  }

  if(store.getState().tvs.tv === 0) {
    tv.style.display = 'none'
  }
})