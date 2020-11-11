const getProductByCategorySlugQuery = `
query {
  collection(slug: "{slug}") {
    name
    productVariants {
      items {
        product {
          id
          name
          slug
          description
          featuredAsset{
            name
            preview
            source
          }
        }
      }
    }
  }
}

`

export default getProductByCategorySlugQuery