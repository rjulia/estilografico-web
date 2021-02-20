import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { getProjects } from '../../api/projects/request'
import { getCarouselHome } from '../../api/slider/request'
import logoMarron from '../../assets/images/logo-marron.jpg'
import { BoxProject, Carousel, Spinner, Helmet } from '../../components'
import './home.scss'

const Home = () => {

  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState(false)
  const [carouselItems, setCarouselItems] = useState(false)
  const projectsPromise = getProjects()
  const carouselPromise = getCarouselHome()

  useEffect(() => {
    setLoading(true)
    Promise.all([
      projectsPromise, 
      carouselPromise
    ]).then((values) => {
      setCarouselItems(_.get(values, '[1].data.slideShowHomeCollection.items'))
      const proy = _.filter(_.get(values, '[0].data.projectoCollection.items'),['enPortada', true] )
      setProjects(proy)
      setLoading(false)
    });
  }, []);

  if (loading) return <Spinner />

  return (
    <div className="container-fluid-home">
      <Helmet 
        title="Estilográfico || Estudio de Comunicación, Diseño gráfico y Publicidad a medida en Eibar
        "
        description="Estudio de Comunicación, Diseño gráfico y Publicidad a medida en Eibar
        "
        keywords=""
        />
      <Carousel images={carouselItems}/> 
      <div className="container-fluid-home-block block-1">
        <div>
          <h2>Somos un estudio de <b>diseño</b> y <b>publicidad</b>.
          Llevamos 30 años ofreciendo servicios de <b>Comunicación</b>, <b>Diseño gráfico</b> y<b> Publicidad a medida</b> .</h2>
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
        <div>
          <h2><b>Diseñamos la imagen de tu negocio</b>:<br /><br />
          Branding (Creación de marca y promoción),
          Web, Tienda online,
          Fotografía, Video, Catálogo...</h2>
        </div>
      </div> 
      <div className="container-home-projects">
        <div className="box-home-projects">
          <h2>TRABAJOS <span>QUE QUEREMOS MOSTRARTE</span></h2>
        </div>
        {
          _.map(projects, (project) => (<BoxProject project={project} key={project.sys.id}/>))
        }
      </div>
    </div>
  )
}

export default Home
