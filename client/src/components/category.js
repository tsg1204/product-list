import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts, searchCategory } from "../actions/index";

function CategorySearch(props){
  //console.log('from products category: ', props.products.category)
  //let uniqueCategories = Array.from(new Set(props.products.products.category))
  //console.log('unique categories: ', uniqueCategories)
      //<select>{props.data.map((x,y) => <option key={y}>{x}</option>)}</select>;
      const getCategory = (e) => {
        props.searchCategory(`&category=${ e.target.value }`)
        if(e.target.value == 'Categories')  props.searchCategory(`&category=`);
      }
      return (
        <div className='col'>
          <select onChange={getCategory} className="custom-select custom-select-sm">
            <option value="Categories">Categories</option>
            <option value="Grocery">Grocery</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>
      )
}

function mapStateToProps(  products ) {
  return  products 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts, searchCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySearch);