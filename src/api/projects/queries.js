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

export const queryProject = (slug) => {
  return `{
    projectoCollection(
      where:{slug:${slug}},
      order:orden_ASC,
      limit:1) {
        items{
          titulo
        subtitulo
        slug
        portada {
          url
          title
          description
          width
          height
        }
        contenido {
          json
        }
        listaDeVideos
        listaDeObjectivos
        listaDeImagesCollection{
          limit
          total
          items{
            title
            description
            width
            height
            url
          }
          }
        }
        
      }
    }
  `
}