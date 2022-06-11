import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import CustomBritSterling from '../NavIcons/BritComponent/BritSterlingComponent';
import CustomEuro from '../NavIcons/EuroComponent/EuroComponent';
import CustomDollar from '../NavIcons/DollarComponent/DollarComponent';
import CustomWon from '../NavIcons/WonComponent/WonComponent';
import topUp from '../../img/navigationIcons/TopUpIcon.svg';
import UserFoto from '../../img/navigationIcons/UserFoto.svg'
import AccountsIcon from '../../img/navigationIcons/AccountsIcon.svg';
import creditCardItem from '../../img/navLowerPartIicons/CreditCardIcon.svg';
import plusIcon from '../../img/navLowerPartIicons/PlusIcon.svg';
import underDollar from '../../img/navLowerPartIicons/UnderDollar.svg';
import Dollar from '../../img/navLowerPartIicons/Dollar.svg';
import HomeComponent from "../../img/navigationIcons/HomeIconComponent/HomeComponent";
import SendComponent from "../../img/navigationIcons/SendComponent/SendComponent";




const Nav = (props) => {
    console.log(props)
    const [isHomeActive,setIsHomeActive] = useState(false)
    const [isSendActive,setIsSendActive] = useState(false)
    const [isActiveItem1,setIsActiveItem1] = useState(false)
    const [isActiveItem2,setIsActiveItem2] = useState(false)
    const [isActiveItem3,setIsActiveItem3] = useState(false)
    const [isActiveItem4,setIsActiveItem4] = useState(false)
    function changeItem1(balance){
        setIsActiveItem1(true)
        setIsActiveItem2(false)
        setIsActiveItem3(false)
        setIsActiveItem4(false)
        props.changeCurrentValue(`€ ${balance}`)
    }
    function changeItem2(balance){
        setIsActiveItem2(true)
        setIsActiveItem1(false)
        setIsActiveItem3(false)
        setIsActiveItem4(false)
        props.changeCurrentValue(`£ ${balance}`)
    }
    function changeItem3(balance){
        setIsActiveItem3(true)
        setIsActiveItem1(false)
        setIsActiveItem2(false)
        setIsActiveItem4(false)
        props.changeCurrentValue(`$ ${balance}`)
    }
    function changeItem4(balance){
        setIsActiveItem4(true)
        setIsActiveItem1(false)
        setIsActiveItem2(false)
        setIsActiveItem3(false)
        props.changeCurrentValue(`₩ ${balance}`)
    }
    function changeHome(){
        setIsHomeActive(true)
        setIsSendActive(  false)
    }
    function changeSend(){
        setIsSendActive(  true)
        setIsHomeActive(false)
    }
    let profileorSetting = ()=>{
         if(isHomeActive){
             return   <div className={classes.navBottom}><img src={UserFoto} alt='foto'></img>Profile</div>
            }
        if(isSendActive) {
            return <div className={classes.navBottom}><img src={UserFoto} alt='foto'></img> Settings</div>
        }
        return <div  className={classes.navBottom} ><img src={UserFoto} alt='foto'></img>Profile</div>
    }
let accounts = props.accounts.map((item,index)=>{
    if(index == 0){
        return <div onClick={ ()=>{changeItem1(item.balance)}}
                    className={ isActiveItem1 ? classes.activeI : classes.accountItem }
                    key={index}>
            <CustomEuro fill={ isActiveItem1 ? '#FD3A6C' : 'white' }/>
            <div className={classes.title}>{item.title}</div>
            <CustomEuro fill={ isActiveItem1 ? 'white' : 'black' } />
            <div className={classes.balance}>{item.balance}</div>
        </div>
    }
    if(index == 1){
        return <div onClick={ ()=>{changeItem2(item.balance)}}
                    className={ isActiveItem2 ? classes.activeI : classes.accountItem } key={index}>
            <CustomBritSterling  fill={ isActiveItem2 ? '#FD3A6C' : 'white' }/>
            <div className={classes.title}>{item.title}</div>
            <CustomBritSterling  fill={ isActiveItem2 ? 'white' : 'black' }/>
            <div className={classes.balance}>{item.balance}</div>
        </div>
    }
    if(index == 2){
        return <div onClick={ ()=>{changeItem3(item.balance)}}
                    className={ isActiveItem3 ? classes.activeI : classes.accountItem } key={index}>
            <CustomDollar fill={ isActiveItem3 ? '#FD3A6C' : 'white' }
            />
            <div className={classes.title}>{item.title}</div>
            <CustomDollar fill={ isActiveItem3 ? 'white' : 'black' } />
            <div className={classes.balance}>{item.balance}</div>
        </div>
    }
    if(index == 3){
        return <div onClick={ ()=>{changeItem4(item.balance)}}
                    className={ isActiveItem4 ? classes.activeI : classes.accountItem } key={index}>
            <CustomWon  fill={ isActiveItem4 ? '#FD3A6C' : 'white' }/>
            <div className={classes.title}>{item.title}</div>
            <CustomWon fill={ isActiveItem4 ? 'white' : 'black' } />
            <div className={classes.balance}>{item.balance}</div>
        </div>
    }
})
  return(  <nav className={classes.nav}>
          <div className={classes.navLeft}>
              <div>
              <div className={classes.item} >
                  <div className = {isHomeActive ? classes.circle:'none' } > </div>
                  <HomeComponent  fill={ isHomeActive ? '#FD3A6C' : 'black' } />
                  <NavLink  to='/home' onClick={changeHome} className = {isHomeActive ? classes.active: classes.item }>Home</NavLink>
              </div>
              <div className={classes.item}>
                  <div className = {isSendActive ? classes.circle:'none' } > </div>
                  <SendComponent isSendActive={isSendActive} fill={ isSendActive ? '#FD3A6C' : 'black' }/>
                  <NavLink onClick={changeSend} className = {isSendActive ? classes.active: classes.item } to='/send'>Send Money</NavLink>
              </div>
              <div className={classes.item}>
                  <img  className={classes.imgNav} src={topUp} alt="topUpIcon"/>
                  <div>Top Up</div>
              </div>
              <div className={classes.item}>
                  <img  className={classes.imgNav} src={AccountsIcon} alt="topUpIcon"/><div>Accounts</div>
              </div>
              </div>
              <div>
                  {profileorSetting()}
              </div>
          </div>
          <div className={classes.navRight}>
               <div className={classes.navRightUpperPart} >
                   <div className={classes.paragraph}>Your Accounts</div>
                   {accounts}
               </div>
       <div className={classes.navRightLowerPart}>
           <div className={classes.navRightLowerPart_1}>
               <div className={classes.creditPart}>
                   <img className={classes.creditCardItem} src={creditCardItem} alt='creditcard'></img>
                   <img className={classes.plusIcon} src={plusIcon} alt='plus'></img>
               </div>
               <div className={classes.textContainer}>
                   <div className={classes.text1}>Request a Card</div>
                   <div className={classes.text2}>Get a debit card for free</div>
               </div>
           </div>
           < div className={classes.navRightLowerPart_2}>
               <div className={classes.earnPart}>
                   <img className={classes.underDollar} src={underDollar} alt='underDollar'></img>
                   <img className={classes.iconDollar} src={Dollar} alt='dollar'></img>
               </div>
               <div className={classes.textContainer}>
                   <div className={classes.text1}>Earn £ 25 for free</div>
                   <div className={classes.text2}>Apply for pension</div>
               </div>
           </div>
       </div>
  </div>

</nav>
  )
}
  
export default Nav;


