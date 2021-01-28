export const queryCarouselHome = `
{
  slideShowHomeCollection (order: sys_publishedAt_ASC) {
    total
    items {
      order,
      texto,
      bgc,
      textoEs{
        json
      }
      imagen {
        size
        title
        url
      }
      sys {
        id
      }
    }
  }
}
`