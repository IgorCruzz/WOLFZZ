import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
import SignIn from '../Pages/SignIn'

import Students from '../Pages/Students'
import HelpOrders from '../Pages/HelpOrders'
import Plans from '../Pages/Plans'
import Registrations from '../Pages/Registrations'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={Students} isPrivate />

      <Route path="/helporders" component={HelpOrders} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/registrations" component={Registrations} isPrivate />
    </Switch>
  )
}
