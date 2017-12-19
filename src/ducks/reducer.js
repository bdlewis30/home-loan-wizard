// The store will need an initial state when it loads for the first time.
const INTITIALSTATE = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

//Action Types
const UPDATE_LOAD_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = 'UPDATE)CITY';

// Adding a Switch to the reducer function is how our reducer will determine which part of state to update.
function reducer(state = INTITIALSTATE, action) {
    switch (action.type) {
        case UPDATE_LOAD_TYPE:
            return Object.assign({}, state, { loanType: action.payload });

        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, { propertyType: action.payload });

        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload });

        default: return state;
    }
}

//Action Creators
export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAD_TYPE,
        payload: loanType
    }
}

export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export default reducer;