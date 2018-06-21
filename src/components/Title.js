import React, { PureComponent } from 'react'

class Title extends PureComponent {
  render() {
    const picName = './images/title.png'
    return(
      <div><img src={picName} width="300" height="100" alt='Title'/></div>
    )
  }
}

export default Title
