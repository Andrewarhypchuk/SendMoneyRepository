import axios from 'axios';
import React from 'react';
import Preloader from '../common/preloader/Preloader';
import Nav from "./Nav";


const  NavAPIComponent =(props) => {
    console.log(props)
if(props.accounts.length === 0){
    props.toggleIsFetching(true)
    fetch('https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data',{
        headers:{
            'x-api-key':'ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59'
        }
    })
        .then((serverPromise) => serverPromise.json()
        .then((j) =>{ console.log(j.body.accounts)
                      props.setAccounts(j.body.accounts);
                      props.toggleIsFetching(false)})
        .catch((e) => console.log(e)) )
        .catch((e) => {console.log(e.body.accounts)
                      props.setAccounts(e.body.accounts);
                      props.toggleIsFetching(false)
        }
        )

         
        }
console.log(props)
    return (
        <>
        {props.isFetching ? <Preloader />: null}
       <Nav accounts={Object.values(props.accounts)} changeCurrentValue={props.changeCurrentValue} />
       </>
        )
           
}
export default NavAPIComponent;