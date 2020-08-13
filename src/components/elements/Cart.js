import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  ListItem,
  List,
  ListItemSecondaryAction,
  Typography,
  ListItemText,
  Grid,
} from "@material-ui/core"
import { ShoppingCart, RemoveCircleOutline } from "@material-ui/icons"

const Basket = ({ products = [], price = 0 }) => {
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
                <IconButton aria-label="remove" color="secondary">
                  <RemoveCircleOutline />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
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
