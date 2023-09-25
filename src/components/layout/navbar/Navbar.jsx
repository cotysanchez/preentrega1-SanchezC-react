import CartWidget from '../../common/cartWidget/CartWidget';
import  './Navbar.css';


export const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://res.cloudinary.com/dftcprmrq/image/upload/v1695246079/clickcourse65_eo9aza.jpg"
        alt="logo click"
      />

      <ul>
        <li>Todos los Cursos</li>
        <li>Programación</li>
        <li>Cocina</li>
        <li>Música</li>
      </ul>

      <CartWidget />
    </nav>
  );
};
