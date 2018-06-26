import React from 'react'
import {Link} from 'react-router-dom'
import posts from '../posts'
import UI from './_scope'
import Div from '../elements/Div'

export default () => (
  <Div mt={[5,6,7]}>
    {posts.map(post => (
      <Div key={post.name}>
        <UI.BlockLink is={Link} to={post.path}>
          <UI.time>{post.created.toDateString()}</UI.time>
          <UI.Heading>{post.title}</UI.Heading>
          {post.excerpt && <UI.p>{post.excerpt}</UI.p>}
        </UI.BlockLink>
      </Div>
    ))}
  </Div>
)
