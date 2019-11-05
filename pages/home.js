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
      console.log("this home props : ", this.props)
    return (
      <>
        <h1>Server Side Rendering : <br/> Next.js Express and Redux </h1>
          <button
            className="btn btn-primary"
            onClick={() => this.setLanguage('th')}
          >
              TH
          </button>
          <button
            className="btn btn-primary"
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