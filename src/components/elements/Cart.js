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
} from "@material-ui/core"
import { ShoppingCart, RemoveCircleOutline } from "@material-ui/icons"
import { removeFromCart, cancelOrder } from "src/actions/cartActions"

const Basket = ({ products = [], price = 0 }) => {
  const dispatch = useDispatch()

  const handleOnClickRemove = (id) => {
    dispatch(removeFromCart({ id }))
  }

  const handleOnClickCancel = () => dispatch(cancelOrder())

  return (
    <Card elevation={0}>
      <CardHeader title="My basket" action={<ShoppingCart />} />
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
                  color="secondary"
                  onClick={() => handleOnClickRemove(item.id)}
                >
                  <RemoveCircleOutline />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        <Grid container justify="space-between">
          <Grid item xs={12} sm={8}>
            <Typography component="h5" variant="h5">
              Total
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography component="p" variant="body1">
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
        <Button variant="contained" color="primary">
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
