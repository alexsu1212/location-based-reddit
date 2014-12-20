/**
 *
 */

var actions = require('../actions/ActionLib');

var Header = React.createClass({

  /**
   *
   */
  render: function() {

    return (
       <div id="header">
            <h1 id="header-name"> Location Based Reddit</h1>
        <p id="header-by">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by Team PAMM</p>
       </div>
    );

  },

  noop: function(){

  }

});

module.exports = Header;
