import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faChalkboardTeacher, faBrain } from '@fortawesome/free-solid-svg-icons'

function OfferingsMainPAge(){

    return (
    
  <div className="container px-4 py-5" id="featured-3">
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">
          <svg className="bi" width="1em" height="1em"><FontAwesomeIcon icon={faChalkboardTeacher} size="6x"/></svg>
        </div>
        <h2>Formación</h2>
        <p>Formar músicos que además de dominar competentemente un instrumento, tengan un excelente conocimiento de la historia, de la teoría y la composición musical, así como de las nuevas tecnologías de la música.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">
          <svg className="bi" width="1em" height="1em"><FontAwesomeIcon icon={faMusic} size="6x"/></svg>
        </div>
        <h2>Creatividad</h2>
        <p>Fomentar la libertad creativa, y reafirmar la diversidad cultural de sus estudiantes, permitiendo la libre elección de los estilos y las formas musicales que cada uno quiera desarrollar profesionalmente.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">
          <svg className="bi" width="1em" height="1em"><FontAwesomeIcon icon={faBrain} size="6x"/></svg>
        </div>
        <h2>Convicción</h2>
        <p>Promover la convicción de que ningún estilo musical es superior a otro, sino que cada uno tiene sus exigencias y parámetros particulares que son necesarios estudiar, conocer y analizar con el fin de interpretarlo con la debida autenticidad artística y profesional, y con pleno respeto al contexto sociocultural de donde provienen dichos estilos musicales.</p>
      </div>
    </div>
  </div>
  
    );
}

export default OfferingsMainPAge;
