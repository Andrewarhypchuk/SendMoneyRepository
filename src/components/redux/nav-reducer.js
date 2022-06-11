
const SET_ACCOUNTS = 'SET-ACCOUNTS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const CHANGE_VALUE = 'CHANGE-VALUE';
let initialState = {
    accounts: []
    ,
    currentValue:'0.0 UAH',
    isFetching: false
}


const NavReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case CHANGE_VALUE:
            return {
                ...state, currentValue: action.currentValue
            }
        case SET_ACCOUNTS:
            return {
                ...state, accounts: { ...state.accounts, ...action.accounts }
            }
        default: return state;
    }
}

export const setAccountsAC = (accounts) => ({ type: SET_ACCOUNTS, accounts });
export const setIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setCurrentValueAC = (currentValue) => ({ type: CHANGE_VALUE, currentValue })
export default NavReducer;
