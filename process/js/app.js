var React = require ('react');
var ReactDOM = require ('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      instarProducts: [],
    }
  }, // GetInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempProducts = result;
      this.setState({
        instarProducts: tempProducts,
      }); // SetState
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var filteredProducts = this.state.instarProducts;
    filteredProducts = filteredProducts.map(function(item, index) {
      return (
        <li className='product-item media' key={index}>
          <div className='product-info media-body'>
            <div className='product-head'>
              <span className='product-name'>{ this.state.instarProducts[index].modelNo }</span>
              <span className='stock-left pull-right'>Stock: { this.state.instarProducts[index].stockLeft }</span>
            </div>
            <div className='cam-type'>
              <span className='label-item'>Type: </span>{ this.state.instarProducts[index].camType }
            </div>
            <div className='model-notes'>
              <span className='label-item'>Notes: </span>{ this.state.instarProducts[index].modelNotes }
            </div>
          </div>
        </li>
      ) // Return
    }.bind(this)); // FilteredProducts

    return (
      <div className='interface'>
          <ul className='item-list media-list'>{filteredProducts}</ul>
      </div>
    ) // Return

  }, // Render
}); // MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('instarProducts')
); // Render
