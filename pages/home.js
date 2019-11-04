import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { setLanguage } from '../src/libs/redux/store'

class HomePage extends Component {
  setLanguage = (lang) => {
    this.props.setLanguage(lang)
  }

  render() {
    return (
      <>
        <h1>Hello world home page</h1>
          <button
            onClick={() => this.setLanguage('th')}
          >
              TH
          </button>
          <button
            onClick={() => this.setLanguage('en')}
          >
            EN
          </button>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  lang: state.lang
})
const mapDispatchToProps = dispatch => ({
  setLanguage: bindActionCreators(setLanguage, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)