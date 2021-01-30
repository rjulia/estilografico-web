export const queryServicies = `
  {
    servicioCollection (
      order:orden_ASC,
      limit:8 ) {
      total
      items {
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
        trabajosRelacionados {
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
        trabajosRelacionados {
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