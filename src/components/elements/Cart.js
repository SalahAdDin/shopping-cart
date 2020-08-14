import React from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core"
import { ShoppingCart, RemoveCircleOutline } from "@material-ui/icons"
import { removeFromCart, cancelOrder, confirmOrder } from "src/actions/cartActions"
import { pullProductsFromStock } from "src/actions/productsActions"

const useStyles = makeStyles((theme) => ({
  header: { "& .MuiCardHeader-action": { marginTop: 8, marginRight: 8 } },
}))

const Basket = ({ products = [], price = 0 }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleOnClickRemove = (id) => {
    dispatch(removeFromCart({ id }))
  }

  const handleOnClickCancel = () => dispatch(cancelOrder())

  const handleOnClickConfirm = () => {
    dispatch(pullProductsFromStock(products))
    dispatch(confirmOrder())
  }

  return (
    <Card elevation={0}>
      <CardHeader
        title="My basket"
        action={<ShoppingCart />}
        className={classes.header}
      />
      <CardContent>
        <List>
          {products.map((item) => (
            <ListItem key={"basket_product_" + item.id}>
              <ListItemText
                id={"basket_product_" + item.id}
                primary={item.name}
                secondary={item.amount}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="remove"
                  onClick={() => handleOnClickRemove(item.id)}
                >
                  <RemoveCircleOutline />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        <Grid container justify="space-between" style={{ margin: "auto 16px" }}>
          <Grid item xs={12} sm={8}>
            <Typography component="h5" variant="h5">
              Total
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
            <Typography component="p" variant="h5">
              {price}&#8378;
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          style={{ marginLeft: "auto" }}
          onClick={handleOnClickCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={products.length <= 0}
          onClick={handleOnClickConfirm}
        >
          Order
        </Button>
      </CardActions>
    </Card>
  )
}

Basket.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  price: PropTypes.number,
}

const Cart = () => {
  const { products, price } = useSelector((state) => state.cart)
  return <Basket products={products} price={price} />
}

export default Cart
