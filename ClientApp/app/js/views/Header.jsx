/**
 *
 */

var actions = require('../actions/AppActionCreator');

var Header = React.createClass({

  /**
   * 
   */
  render: function() {

    return (
       <div id="header">
            <h1 style="float:left; margin-left:100px;"> Location Based Reddit</h1>
            <p style="margin-top: 25px; ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by Team PAMM</p>
       </div>
    );
  
  },

  noop: function(){

  }

});

module.exports = Header;