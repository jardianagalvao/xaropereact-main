import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <Link to="/" className="inicial">
        <i className='bx bxs-capsule'>XaropeGenius</i>
      </Link>
      

      <ul className="navegação">
        <Link to="/login" style={{textDecoration: 'none'}}>Inscreva-se</Link>
        <Link to="/Professores" style={{textDecoration: 'none'}}>Professores</Link>
        <Link to="/Faq" style={{textDecoration: 'none'}}>Dúvidas Frequentes</Link>
        <Link to="/Cursos" style={{textDecoration: 'none'}}>Cursos</Link>
        
      </ul>


      <div className="header-icons">
        <Link to="/login">
          <i className='bx bx-user bx-sm'></i>
        </Link>
        <div id="menu"><i className='bx bx-menu bx-sm'></i></div>
      </div>
    </header>
  );
}

export default Header;
