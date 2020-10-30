const collectionQuery = `
query {
  collections {
    items {
      name
      position
      name
      id
      slug
      description
      featuredAsset {
        name
        type
        source
        preview
      }
    }
  }
}
`

export default collectionQuery
