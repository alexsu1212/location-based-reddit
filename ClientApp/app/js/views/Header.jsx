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
        <div className="bar">
            <h3 className="webSiteTitle">Location Based Reddit</h3>

            <div className="info">
                <img className="userImg" src="assets/img/userHeadImg.jpg" alt="userImg" />
                <h3 className="userName">陳柏安</h3>
                <h5 className="signIn">log In</h5>
                <h5 className="signUp">Sign Up</h5>
            </div>
        </div>
        
        <div className="header">
            <h1 className="header-name"> Location Based Reddit</h1>
            <p className="header-by">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by Team PAMM</p>
        </div>
    );

  },

  noop: function(){

  }

});

module.exports = Header;
