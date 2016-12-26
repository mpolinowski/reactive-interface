var React = require('react');

var AddProduct = React.createClass({

  toggleDisplay: function() {
      this.props.handleToggle();
    },

  handleAdd: function(e) {
    var tempItem = {
      modelNo: this.refs.inputModelNo.value,
      stockLeft: this.refs.inputStockLeft.value,
      camType: this.refs.inputCamType.value,
      modelNotes: this.refs.inputModelNotes.value,
    } // TempItem
    e.preventDefault();
    this.props.addSubmit(tempItem);
  }, // HandleAdd: Prevent default sending / reloading behaviour of submit button and send tempItem to main component

  render: function() {

    var diplayProductBody = {
      display: this.props.bodyVisible ? 'block' : 'none',
    }; // Display  AddProduct panel body is hidden if bodyVisible is set to false (= initial State)

    return (
      <div className='panel panel-primary add-panel'>
        <div className='panel-heading addheading' onClick={ this.toggleDisplay }>
        <span className='glyphicon glyphicon-plus'></span> Add Product</div>
        <div className='panel-body' style={ diplayProductBody }>
          <form className='add-product form-horizontal'
          onSubmit={ this.handleAdd }>
            <div className='form-group'>
              <label className='col-sm-2 control-label' htmlFor='modelNo'>Model #</label>
              <div className='col-sm-7'>
                <input type='text' className='form-control'
                  id='modelNo' ref='inputModelNo' placeholder='E.g. IN-8015HD' />
              </div>
              <label className='col-sm-1 control-label' htmlFor='stockLeft'>Stock</label>
              <div className='col-sm-2'>
                <input type='text' className='form-control'
                  id='stockLeft' ref='inputStockLeft' placeholder='E.g. 65' />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-sm-2 control-label' htmlFor='camType'>Type</label>
              <div className='col-sm-10'>
                <input type='text' className='form-control'
                  id='camType' ref='inputCamType' placeholder='E.g. Indoor Pan&Tilt IP Camera' />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-sm-2 control-label' htmlFor='modelNotes'>Product Notes</label>
              <div className='col-sm-10'>
                <textarea className='form-control' rows='4' cols='50'
                  id='modelNotes' ref='inputModelNotes' placeholder='E.g. fullHD Resolution, 4.2mm Lense'></textarea>
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-offset-2 col-sm-10'>
                <button type='submit' className='btn btn-primary pull-right'>Add Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    ) // Return
  }, // Render
}); // Add Product


module.exports = AddProduct;
