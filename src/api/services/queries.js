export const queryServicies = `
  {
    servicioCollection (
      order:orden_ASC,
      limit:10 ) {
      total
      items {
        orden
        slug
        nombre
        descripcionEs
        highlightsColors
        sys{
          id
        }
      }
    }
  }
`

export const queryService = (id) => {
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
        proyectosRelacionados {
          orden
          titulo
          slug
          portada {
            url
            title
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