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
        <div>
            <div className="bar">
                <h3 className="webSiteTitle">Location Based Reddit</h3>

                <div className="barInfo">
                    <img className="userImg" src="assets/img/userHeadImg.jpg" alt="userImg" />
                    <h3 className="userName">陳柏安</h3>
                    <h5 className="signIn">log In</h5>
                    <h5 className="signUp">Sign Up</h5>
                </div>
            </div>

            <div className="header">
                <button className="create-data btn btn-info" onClick={this.createData}>Create Data</button>
                <h1 className="header-name"> Location Based Reddit</h1>
                <p className="header-by">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by Team PAMM</p>
            </div>
        </div>

    );

  },

getRandomInt: function(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
},

getRandomNum: function(start, end) {
  return Math.random() * (end - start) + start;
},

createData: function(evt){
      console.log( 'create new item' );

      var dummyTitles = [
        "Lorem ipsum dolor",
        "Aenean commodo ligula",
        "Cum sociis natoque",
        "Donec quam felis",
        "Nulla consequat massa",
        "Donec pede justo",
        "Integer tincidunt",
        "Cras dapibus",
        "Vivamus elementum semper",
        "Aenean vulputate",
        "Phasellus viverra nulla"
      ];
      var title = dummyTitles[this.getRandomInt(0, dummyTitles.length - 1)];

      var longitude = this.getRandomNum(119, 121);
      var altitude = this.getRandomNum(20, 22);

      var createdAt = new Date();
      createdAt.setHours(createdAt.getHours() - this.getRandomInt(0, 23));
      
      var upVotes = this.getRandomInt(4000 , 8000);
      var downVotes = this.getRandomInt(0, 2000);

      var item = {
      "title": title,
      "imgUrl": "",
      "content": "",
      "location": longitude.toString() + ", " + altitude.toString(),
      "upVotes": upVotes,
      "downVotes": downVotes,
      "createdAt": createdAt
      }

      item.id = window.cnt++; //uuid.get();

      actions.createPin( item );

      // // 清空輸入框，等待下一次的輸入
      // this.setState({currentItem: {name:'', id: null, created: null}});
},

  noop: function(){

  }

});

module.exports = Header;
