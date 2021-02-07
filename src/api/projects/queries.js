export const queryProjects = `
{
  projectoCollection(order: sys_publishedAt_ASC) {

    total
    items {
      titulo
      subtitulo
      slug
      enPortada
      portada{
        size
        title
        width
        height
        fileName
        url
      }
      sys {
        id
        spaceId
        environmentId
        publishedAt
        firstPublishedAt
        publishedVersion
      }
    }
  }
}
`

export const queryProject = (id) => {
  return `
  {
    servicio(id: ${id}) {
        orden
        slug
        nombre
        descripcionEs
        highlightsEs {
          json
        }
        highlightsColors
        sys{
          id
        }
        proyectosRelacionadoCollection(limit: 5){
          limit
          items {
            sys {
              id
            }
            orden
            titulo
            slug
            portada {
              url
              title
              }
            }
          }
        seccionesServicosCollection (limit: 5){
          limit
          items{
            posicion
            titulo
            contenido {
              json
              links {
                assets {
                  block {
                    fileName
                      title
                      description
                      url
                      sys {
                          id
                      }
                  }
                }
              }
            }
            bgc
            destacadosCollection (limit: 2) {
              items {
                frase {
                  json
                }
              }
            }
          }
        }
      }
    }
  `
}