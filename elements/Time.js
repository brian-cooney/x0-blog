import glamorous from 'glamorous'
import {space, width, display, fontSize, fontWeight, color} from 'styled-system'

const Time = glamorous.time(space, display, fontSize, fontWeight, color, {
  fontFamily: "Menlo, monospace",
  fontSize: '75%'
})

Time.defaultProps = {}

export default Time
