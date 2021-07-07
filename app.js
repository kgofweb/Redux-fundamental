// Les Actions
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';

// Cet objet est generer par une function appelée Action Creation
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
// Reducer est function qui vas nous retourner un nouveau state

// Init state
const initState = {
  phones: 5,
  tablet: 10
}

const reducer = (state = initState, action) => {
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

// Create Redux Store
const store = Redux.createStore(reducer);

// DOM elements
const availablePhone = document.getElementById('count');
const availableTablet = document.getElementById('count-tab');
const phone = document.getElementById('buy-phone');
const tablet = document.getElementById('buy-tablet');

// Get phones
let storedPhone = store.getState().phones;
let storedTablet = store.getState().tablet;

// Insert in HTML
availablePhone.innerHTML = storedPhone;
availableTablet.innerHTML = storedTablet;

// Dispatch function
phone.addEventListener('click', () => {
  store.dispatch(buyPhone())
})

tablet.addEventListener('click', () => {
  store.dispatch(buyTablet())
})

// Subscribe method
store.subscribe(() => {
  availablePhone.innerHTML = store.getState().phones
  availableTablet.innerHTML = store.getState().tablet

  if(store.getState().phones === 0) {
    phone.style.display = 'none'
  }
  
  if (store.getState().tablet === 0) {
    tablet.style.display = 'none'
  }
})