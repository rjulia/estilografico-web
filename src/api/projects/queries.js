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