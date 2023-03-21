import { Outlet } from 'react-router-dom'

function LayoutDefault () {

  return (
    <>
      <p>layout default</p>
      <Outlet/>
    </>)
}

export default LayoutDefault