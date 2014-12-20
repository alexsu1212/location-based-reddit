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
        <div id="bar">
        <h3 class="webSiteTitle">Location Based Reddit</h3>
        <!--        <p class="webSiteTitle">by Team PAMM</p>-->

        <div id="info">
            <img id="userImg" src="assets/img/userHeadImg.jpg" alt="userImg">
            <h3 id="userName">陳柏安</h3>
            <h5 id="signIn">log In</h5>
            <h5 id="signUp">Sign Up</h5>
        </div>
    </div>
        
        
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
