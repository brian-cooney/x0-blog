import React from 'react'
import {Link} from 'react-router-dom'
import {ThemeProvider} from 'glamorous'
import theme from '../theme'

import Div from '../elements/Div'
import Nav from '../elements/Nav'
import A from '../elements/A'

const Script = ({src}) => (
  <script
    dangerouslySetInnerHTML={{
      __html: src,
    }}
  />
)

export default ({render}) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Div px={[5, 6]}>
        <Nav>
          <A fontWeight="bold" href="/">
            Home
          </A>
          <A fontWeight="bold" href="/writing">
            Writing
          </A>
          <A fontWeight="bold" href="/#work">
            Work
          </A>
        </Nav>
        <main
          style={{
            fontSize: 20,
            maxWidth: '34em',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5,
          }}>
          {render()}
        </main>
        <footer />
      </Div>
    </ThemeProvider>
    <Script src={ga} />
  </React.Fragment>
)

const ga = ''
