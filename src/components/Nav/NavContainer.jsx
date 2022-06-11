import { connect } from 'react-redux';
import {setIsFetchingAC, setAccountsAC, setCurrentValueAC} from '../redux/nav-reducer';
import NavAPIComponent from "./NavAPIComponent";

let mapStateToProps = (state) => {
    console.log(state)
    return{
        accounts :state.accounts.accounts,
        isFetching : state.accounts.isFetching,
        currentValue:state.accounts.currentValue
    }
}
export default connect(mapStateToProps,{
    setAccounts :setAccountsAC,
    toggleIsFetching :setIsFetchingAC,
    changeCurrentValue:setCurrentValueAC

})(NavAPIComponent);