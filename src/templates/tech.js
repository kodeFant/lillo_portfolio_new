import React, { Component } from 'react'
import { graphql } from 'gatsby'

export default class Tech extends Component {
  render() {
    const { slug } = this.props.pathContext
    const postNode = this.props.data.wordpressWpTech
    if (!postNode.id) {
      postNode.id = slug
    }
    if (!postNode.category_id) {
      postNode.category_id = 'din-eiendom'
    }
    return <div>Tech:</div>
  }
}

export const pageQuery = graphql`
  query TechById($id: String!) {
    wordpressWpTech(id: { eq: $id }) {
      id
      slug
      name
    }
  }
`
