import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { getProjects } from '../../api/projects/request'
import logoMarron from '../../assets/images/logo-marron.jpg'
import { BoxProject } from '../../components'
import './home.scss'
const Home = () => {

  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState(false)



  useEffect(() => {
    setLoading(true)
    getProjects().then((response) => {
      const items = _.get(response, 'data.projectoCollection.items')
      console.log(items)
      setProjects(items)
      setLoading(false)
    })
  }, []);

  return (
    <div className="container-fluid-home">
      <div>Carousel</div>
      <div className="container-fluid-home-block block-1">
        <div>
          <h2>Somos un estudio de <b>diseño</b> y <b>publicidad</b>.
          Llevamos 30 años ofreciendo servicios de <b>Comunicación</b>, <b>Diseño gráfico</b> y<b>Publicidad a medida</b> .</h2>
        </div>
      </div>
      <div className="container-fluid-home-block block-2">
        <div>
          <h2>Te ayudamos a <b>comunicar mejor para vender más</b>.<br /><br />
            Somos un equipo de profesionales que nos involucramos en los proyectos de nuestros clientes. <br /><br />
            Aplicamos todo nuestro oficio, criterio e intuición, creando nuevos contextos que agreguen valor a tu negocio y mejoren su competitividad..</h2>
        </div>
      </div>
      <div 
        className="container-fluid-home-block block-3"
        style={{
          backgroundImage: `url(${logoMarron})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left top',
          backgroundSize: 'cover',
        }}
        >
        {/* <img src={logoMarron} alt="logo"/> */}
        <div>
          <h2><b>Diseñamos la imagen de tu negocio</b>:<br /><br />
          Branding (Creación de marca y promoción),
          Web, Tienda online,
          Fotografía, Video, Catálogo...</h2>
        </div>
      </div>
      <div>
        <div>
          <h2>TRABAJOS QUE QUEREMOS MOSTRARTE</h2>
        </div>
        {
          _.map(projects, (project) => (<BoxProject project={project} key={project.sys.id}/>))
        }
      </div>
    </div>
  )
}

export default Home
