var React = require ('react');

var SearchProducts = React.createClass({

  handleSort: function(e) {
    this.props.onReOrder(e.target.id, this.props.orderDir);
  }, // HandleSort

  handleOrder: function(e) {
    this.props.onReOrder(this.props.orderBy, e.target.id);
  }, // HandleOrder

  handleSearch: function(e) {
    this.props.onSearch(e.target.value)
  }, // Push query of search field to onSearch on click event

  render: function() {
    return (
      <div className='row search-products mb'>
        <div className='col-sm-offset-3 col-sm-6'>
          <div className='input-group'>
            <input id='SearchProds' onChange={ this.handleSearch } placeholder='Search' type='text' className='form-control' aria-label='Search Products' />
            <div className='input-group-btn'>
              <button type='button' className='btn btn-primary dropdown-toggle'
                data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Sort by: <span className='caret'></span></button>
                <ul className='dropdown-menu dropdown-menu-right'>
                  <li><a href='#' id='modelNo' onClick={ this.handleSort }>Model Number { (this.props.orderBy === 'modelNo') ? <span className='glyphicon glyphicon-ok'></span>: null }</a></li>
                  <li><a href='#' id='camType' onClick={ this.handleSort }>Camera Type { (this.props.orderBy === 'camType') ? <span className='glyphicon glyphicon-ok'></span>: null }</a></li>
                  <li><a href='#' id='stockLeft' onClick={ this.handleSort }>Stock Left { (this.props.orderBy === 'stockLeft') ? <span className='glyphicon glyphicon-ok'></span>: null }</a></li>
                  <li role='separator' className='divider'></li>
                  <li><a href='#' id='asc' onClick={ this.handleOrder }>Ascending { (this.props.orderDir === 'asc') ? <span className='glyphicon glyphicon-ok'></span>: null }</a></li>
                  <li><a href='#' id='desc' onClick={ this.handleOrder }>Descending { (this.props.orderDir === 'desc') ? <span className='glyphicon glyphicon-ok'></span>: null }</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>

    ) // Return SearchProducts list and add checkmark next to active orderBy and orderDir state
  }, // Render
}); // SearchProducts

module.exports = SearchProducts;
