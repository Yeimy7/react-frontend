import React from "react";
import { Provider } from "react-redux";
import storeFn from '../utils/create-reducer';
import "antd/dist/antd.css";
import App from "next/app";
import withRedux from "next-redux-wrapper";
const store = storeFn();

// function MyApp({ Component, pageProps}) {
//   <Provider store={store}>
//     return <Component {...pageProps} />
//   </Provider>
// }

// export default MyApp

class MyApp extends App {

  static async getInitialProps({Component, ctx}) {

      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

      return {pageProps};

  }

  render() {
      const {Component, pageProps} = this.props;
      return (
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      );
  }

}

export default withRedux(storeFn)(MyApp);


