import {Link, Outlet} from 'react-router-dom';


function Layout() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la tienda" />
      < BrowserRouter> 
      <Routers>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/" element={<CarWidget/>} />
        <Route path="/" element={<Layout/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/" element={<NavBar/>} />
      </Routers>
      </BrowserRouter>
    </>
  )
}

export default Layout