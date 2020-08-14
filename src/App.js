import React from "react"
import { Provider, useSelector } from "react-redux"
import { Container, Grid, Typography, makeStyles } from "@material-ui/core"
import store from "./store"
import Cart from "./components/elements/Cart"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  landing: {
    margin: theme.spacing(4),
  },
}))

const Content = () => {
  const classes = useStyles()
  const authenticated = useSelector((state) => state.users.authenticated)
  return (
    <>
      {authenticated ? (
        <Grid container component="section" spacing={2} className={classes.root}>
          <Grid item xs={12} sm={7} md={9}>
            <ProductList />
          </Grid>
          <Grid item xs={12} sm={5} md={3}>
            <Cart />
          </Grid>
        </Grid>
      ) : (
        <Container component="section" className={classes.landing}>
          <Typography component="p" variant="subtitle1">
            Buyurun, hep taze, al teyzem, hesabina girip pazarda istedigini al!
          </Typography>
        </Container>
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
