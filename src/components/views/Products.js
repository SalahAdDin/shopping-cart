import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"
import { filterByCategory } from "../../actions/productsActions"

const categories = ["fruits", "grains", "herbs", "vegetables"]

const Products = ({ products = 0 }) => {
  const [category, setCategory] = useState("")
  const dispatch = useDispatch()

  const filterProducts = (category) => dispatch(filterByCategory(category))

  // TODO: First time it is change category is ""
  const handleSelectChange = (e) => {
    setCategory(e.target.value)
    if (category === "") return
    filterProducts({ category })
  }
  // useEffect(() => filterProducts({ filter }), [filter])

  return (
    <>
      <FormControl variant="outlined">
        <InputLabel>Filter by Category</InputLabel>
        <Select value={category} onChange={handleSelectChange}>
          {categories.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container justify="space-between">
        {products.length === 0 && products?.map()}
      </Grid>
    </>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default Products
