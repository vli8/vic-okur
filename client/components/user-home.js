import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  componentDidMount() {}
  handleCHange(event) {
    console.log(event.target.value)
  }
  render() {
    return (
      <div>
        <h3>Welcome, Enter a word</h3>
        <form>
          <input
            type="text"
            placeholder="Search.."
            name="twitterSearch"
            onChange={this.handleCHange}
          />
          <button type="submit" onSubmit={this.handleSubmit}>
            Search
          </button>
        </form>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
