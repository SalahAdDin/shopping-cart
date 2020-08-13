import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { Container, Grid } from "@material-ui/core"
import store from "./store"
import ProductList from "./components/ProductList"
import Cart from "./components/elements/Cart"

const App = (props) => {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Grid container component="section" spacing={2}>
          <Grid item xs={12} sm={7} md={9}>
            <ProductList />
          </Grid>
          <Grid item xs={12} sm={5} md={3}>
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  )
}

App.propTypes = {}

export default App
