import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Guesses extends PureComponent {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }


  render() {
    const { guesses } = this.props

    return(
      <div>
        <p>  {guesses.join(", ")} </p>
      </div>
    )
  }
}

const mapStateToProps = ( { guesses }) => {
  return {
    guesses,
  }
}

export default connect(mapStateToProps)(Guesses)
