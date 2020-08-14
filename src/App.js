import React from "react"
import { Provider, useSelector } from "react-redux"
import { Container, Grid } from "@material-ui/core"
import store from "./store"
import Cart from "./components/elements/Cart"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

const Content = () => {
  const authenticated = useSelector((state) => state.users.authenticated)
  return (
    <>
      {authenticated && (
        <Grid container component="section" spacing={2}>
          <Grid item xs={12} sm={7} md={9}>
            <ProductList />
          </Grid>
          <Grid item xs={12} sm={5} md={3}>
            <Cart />
          </Grid>
        </Grid>
      )}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Header />
        <Content />
      </Container>
    </Provider>
  )
}

export default App
