import React from 'react'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { initStore } from '../src/libs/redux/store'
import Layout from '../src/components/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/style.css'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({Component, ctx}) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    return {
      pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      }
  };
  }

  render() {
    const { Component, pageProps } = this.props
    console.log("this is page props : ", pageProps)
    return (
      <Provider store={initStore()}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
    
  }
}

const mapStateToProps = state => ({
  lang: state.lang
})

export default withRedux(initStore, mapStateToProps)(MyApp)