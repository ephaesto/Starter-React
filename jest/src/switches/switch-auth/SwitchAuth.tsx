import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Switch from '../../components/utils/Switch'

function SwitchAuth() {
  const [isAuth, setIsAuth] = useState(true)

  return (
  <Switch>
    <Navigate data-caseswitch={!isAuth} to="/login" replace />
    <Outlet data-defaultswitch />
  </Switch>)
}

export default SwitchAuth