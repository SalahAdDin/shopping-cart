import React from "react"
import PropTypes from "prop-types"
import { Button, Card, CardContent, TextField, Typography } from "@material-ui/core"

const Product = ({ name, price, stock }) => {
  return (
    <Card>
      <CardContent>
        <Typography component="h5" variant="h5">
          {name}
        </Typography>
        <Typography variant="body1" component="p">
          Price(Kg): &#8378;{price}
        </Typography>
        <Typography variant="body2" component="p">
          On Stock: {stock}
        </Typography>
      </CardContent>
      <form>
        <TextField
          label="Amount(Kg)"
          variant="outlined"
          color="secondary"
          id={"amount_" + name}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
        <Button variant="contained" color="primary">
          Add
        </Button>
      </form>
    </Card>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
}

export default Product
