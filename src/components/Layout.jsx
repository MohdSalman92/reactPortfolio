import { Outlet} from "react-router-dom";


const Layout = () => {

  return (
    <div className="object-cover">
      <Outlet />
    </div>
  )
};

export default Layout;