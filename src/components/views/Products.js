import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"
import { filterByCategory } from "../../actions/productsActions"
import Product from "../elements/Product"

const categories = ["fruits", "grains", "herbs", "vegetables"]

const Products = ({ products = [] }) => {
  const dispatch = useDispatch()

  const filterProducts = (category) => dispatch(filterByCategory(category))

  const handleSelectChange = (e) => {
    filterProducts(e.target.value)
  }

  return (
    <>
      <FormControl variant="outlined">
        <InputLabel>Filter by Category</InputLabel>
        <Select onChange={handleSelectChange}>
          {categories.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container justify="space-between" spacing={2}>
        {products.length !== 0 &&
          products?.map((product) => (
            <Grid
              item
              component="article"
              xs={6}
              sm={4}
              md={3}
              key={"product_" + product.id}
            >
              <Product {...product} />
            </Grid>
          ))}
      </Grid>
    </>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default Products
