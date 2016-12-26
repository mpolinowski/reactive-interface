var React = require ('react');
var ReactDOM = require ('react-dom');
var _ = require('lodash');

var ProductList = require('./ProductList');
var AddProduct = require('./AddProduct');
var SearchProducts = require('./SearchProducts');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      productBodyVisible: false,
      orderBy: 'modelNo',
      orderDir: 'asc',
      queryText: '',
      instarProducts: [],
    }
  }, // GetInitialState - Add Product Panel is hidden / instarProducts are loaded from (see below)

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempProducts = result;
      this.setState({
        instarProducts: tempProducts,
      }); // SetState
    }.bind(this));
  }, // Get model data from base

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, // Abort database connection

  deleteMessage: function(item) {
    var allProducts = this.state.instarProducts;
    var newProducts = _.without(allProducts, item);
    this.setState({
      instarProducts: newProducts,
    }); // SetState onClick -> handleDelete for which Item from Subcomponent ProductList.js
  }, // Use lodash to delete product from array and return new array

  toggleAddDisplay: function() {
    var tempVisibility = !this.state.productBodyVisible;
    this.setState({
      productBodyVisible: tempVisibility,
    }); // Set state to opposite of current state - visible / hidden
  }, // Click on addPanel Heading to change visibility of panel body

  addItem: function(tempItem) {
    var tempProducts = this.state.instarProducts;
    tempProducts.push(tempItem);
    this.setState({
      instarProducts: tempProducts,
    }); // SetState
  }, // AddItem from tempItem in subcomponent AddProduct.js

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir,
    }); // SetState
  }, // ReOrder

  SearchProds(q) {
    this.setState({
      queryText: q,
    }); // SetState
  }, // SearchProds

  render: function() {
    var filteredProducts = [];
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var queryText = this.state.queryText;
    var instarProducts = this.state.instarProducts;

    instarProducts.forEach(function(item) {
      if (
        (item.modelNo.toLowerCase().indexOf(queryText) != -1) ||
        (item.camType.toLowerCase().indexOf(queryText) != -1) ||
        (item.stockLeft.toLowerCase().indexOf(queryText) != -1) ||
        (item.modelNotes.toLowerCase().indexOf(queryText) != -1)
      ) {
        filteredProducts.push(item);
      }
    }); //ForEach

    filteredProducts = _.orderBy(filteredProducts, function(item) {
      return item[orderBy].toLowerCase();
    }, orderDir) // Use lodash tp OrderBy initialState modelNo and selcted order direction || orderBy and orderDir is set to state to display check mark next to list item in SearchProducts.js

    filteredProducts = filteredProducts.map(function(item, index) {
      return (
        <ProductList key = { index }
          singleItem = { item }
          whichItem = { item }
          onDelete = { this.deleteMessage } />
      ) // Return
    }.bind(this)); // FilteredProducts -> see ProductList.js Subcomponent

    return (
      <div className='interface'>
          <AddProduct
            bodyVisible = { this.state.productBodyVisible }
            handleToggle = { this.toggleAddDisplay }
            addSubmit = { this.addItem }
           />
           <SearchProducts
           orderBy = {this.state.orderBy}
           orderDir = {this.state.orderDir}
           onReOrder = {this.reOrder}
           onSearch =  { this.SearchProds}
           />
          <ul className='item-list media-list'>{filteredProducts}</ul>
      </div>
    ) // Return FilteredProducts in List

  }, // Render
}); // MainInterface


ReactDOM.render(
  <MainInterface />,
  document.getElementById('instarProducts')
); // Render
