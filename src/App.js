import React, { useEffect } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { Container, Grid, Typography, makeStyles } from "@material-ui/core"
import store from "./store"
import Cart from "./components/elements/Cart"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import { loginUser } from "./actions/usersActions"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  landing: {
    width: "auto",
    margin: theme.spacing(4),
  },
}))

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}

const Content = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { authenticated } = useSelector((state) => state.users)
  const currentUser = getCurrentUser()

  useEffect(() => {
    if (currentUser) {
      const { email, id } = currentUser
      dispatch(loginUser({ email, id }))
    }
  }, [])

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
