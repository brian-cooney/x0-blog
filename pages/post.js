import React from 'react'
import posts from '../posts'
import UI from './_scope'
import Time from '../elements/Time'

const routes = posts.map(({path}) => ({path}))

const defaultMeta = {
  description: 'The writing of Adam Morse',
  'twitter:card': 'summary',
  'twitter:site': '@mrmrs_',
  'twitter:image': 'https://mrmrs.cc/avatar.png',
  'twitter:title': 'Mrmrs Writing',
  'twitter:description': 'The writing of Adam Morse',
}
const getMeta = obj => {
  const merged = {...defaultMeta, ...obj}
  return Object.keys(merged).map(key => ({
    name: key,
    content: merged[key],
  }))
}

export default class Post extends React.Component {
  static getInitialProps = async ({path}) => {
    const post = posts.find(post => post.path === path)
    const {title, excerpt, tags = []} = post || {}
    const meta = title
      ? getMeta({
          'twitter:title': title,
          'twitter:description': excerpt,
          keywords: tags.join(', '),
        })
      : undefined
    return {
      path: ':name',
      routes,
      title,
      meta,
    }
  }
  render() {
    const {name} = this.props.match.params

    const post = posts.find(post => post.name === name)

    if (!name || !post) return <UI.pre>Not found</UI.pre>

    const {title, Component} = post

    return (
      <article>
        <Time display="block" mt={[6, 7, 8]}>
          {post.created.toDateString()}
        </Time>
        <UI.h1>{title}</UI.h1>
        {post.subtitle && <UI.h2>{post.subtitle}</UI.h2>}
        <Component scope={UI} />
      </article>
    )
  }
}
