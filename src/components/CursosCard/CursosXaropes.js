import React from 'react';
import "./cursosxaropes.css";
import jsImage from '../../Assets/Cursos/JavaScriptSymbol.png';
import HtmlImage from '../../Assets/Cursos/HTML.png';
import BancoImage from '../../Assets/Cursos/bancodedados.png';
import CssImage from '../../Assets/Cursos/css.png';
import ReactImage from '../../Assets/Cursos/React.png';
import GitImage from '../../Assets/Cursos/git-and-github-logos.png';
import PythonImage from '../../Assets/Cursos/python.png';
import PhpImage from '../../Assets/Cursos/PHP-logo.svg.png';
import LaravelImage from '../../Assets/Cursos/Laravel.svg.png';
import Entrevista from '../../Assets/Cursos/medicamento.png';
import { Link, useParams } from 'react-router-dom';
import VideoPage from '../Videopage/videopage';
import cursos from '../../data/cursos';


function CursoXaropes({ id, titulo, descricao, link, imagem }) {
  return (
    <div className="curso">
      <Link to={`/Cursos/${id}`}> {/* Link para o curso específico */}
        <img src={imagem} alt={titulo} />
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Saiba mais</a>
      </Link>
    </div>
  );
}


function PaginaCursos() {
  

  return (
    <div className="pagina-cursos">
      <h1>Cursos Gratuitos de Programação e Desenvolvimento Web</h1>
      <div className="lista-cursos">
        {cursos.map((curso, index) => (
          <CursoXaropes 
            id ={curso.id}
            key={index} 
            titulo={curso.titulo} 
            descricao={curso.descricao} 
            link={curso.link} 
            imagem={curso.imagem} 
          />
        ))}
      </div>
    </div>
  );
}



export default PaginaCursos;
