import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { Container } from "@material-ui/core"
import store from "./store"
import ProductList from "./components/ProductList"

const App = (props) => {
  return (
    <Provider store={store}>
      <Container component="section" maxWidth="md">
        <ProductList />
      </Container>
    </Provider>
  )
}

App.propTypes = {}

export default App
