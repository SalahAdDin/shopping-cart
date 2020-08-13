import React from "react"
import PropTypes from "prop-types"
import { Button, Card, CardContent, TextField, Typography } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import { addToCart } from "../../actions/cartActions.js"

const validate = (values) => {
  const errors = {}
  if (!values.amount) errors.amount = "Required"
  else if (isNaN(values.amount)) errors.amount = "Amount is not a number"
  else if (values.amount <= 0) errors.amount = "Amount must be higher than 0"
  return errors
}

const Product = ({ id, name, price, stock }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      amount: 0,
    },
    validate,
    onSubmit: ({ amount }) => {
      // const amount = Number(values.amount)
      dispatch(addToCart({ id, name, price, amount }))
    },
  })

  return (
    <Card>
      <CardContent>
        <Typography component="h5" variant="h5">
          {name}
        </Typography>
        <Typography variant="body1" component="p">
          Price(Kg): {price}&#8378;
        </Typography>
        <Typography variant="body2" component="p">
          On Stock: {stock}
        </Typography>
      </CardContent>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
          label="Amount(Kg)"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          size="small"
          type="number"
          value={formik.values.amount}
          variant="outlined"
          name="amount"
        />
        <Button
          disabled={formik.values.amount >= stock || formik.values.amount <= 0}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>
      </form>
    </Card>
  )
}

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
}

export default Product
