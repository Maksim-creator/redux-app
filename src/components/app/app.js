import React from 'react';
import {withBookstoreServise} from "../hoc";
import {Switch, Route} from 'react-router'
import {CartPage, HomePage} from "../pages";

const App = (props) => {
    console.log(props)
    const value =  props.booksstoreService.getBooks();
    console.log(value)
    return (
      <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/cart' component={CartPage}/>
      </Switch>
    )
}

export default withBookstoreServise()(App);