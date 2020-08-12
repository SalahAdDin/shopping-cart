import React from "react"
import PropTypes from "prop-types"
import { Container } from "@material-ui/core"
import { Provider } from "react-redux"
import Products from "./components/Products"
import store from "./store"

const App = (props) => {
  return (
    <Provider store={store}>
      <Container component="section" maxWidth="md">
        <Products />
      </Container>
    </Provider>
  )
}

App.propTypes = {}

export default App
