import { NavLink } from 'react-router-dom';
import './Toolbar.css';

const ToolBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <NavLink to="/"><span className="navbar-brand mb-0  fs-1">Pages</span></NavLink>

          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-dark btn btn-primary "  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn text-dark btn-primary" to="/newpage">New Pages</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
    ;
};

export default ToolBar;
