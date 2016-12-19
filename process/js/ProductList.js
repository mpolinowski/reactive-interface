var React = require('react');

var ProductList = React.createClass({

  handleDelete: function() {
    this.props.onDelete(this.props.whichItem) /*Save whichItem that we clicked on and passes it on to lodash in deleteMessage */
  },

  render: function() {
    return (
      <li className='product-item media'>
        <div className='media-left'>
          <button className='product-delete btn btn-xs btn-danger' onClick={ this.handleDelete }>
          <span className='glyphicon glyphicon-remove'></span></button>
        </div>
        <div className='product-info media-body'>
          <div className='product-head'>
            <span className='product-name'>{ this.props.singleItem.modelNo }</span>
            <span className='stock-left pull-right'>Stock: { this.props.singleItem.stockLeft }</span>
          </div>
          <div className='cam-type'>
            <span className='label-item'>Type: </span>{ this.props.singleItem.camType }
          </div>
          <div className='model-notes'>
            <span className='label-item'>Notes: </span>{ this.props.singleItem.modelNotes }
          </div>
        </div>
      </li>
    ) //Return - onClick handler passes on the item to OnDelte in main component (see above)
  }, // Render
}); //ProductList

module.exports = ProductList;
