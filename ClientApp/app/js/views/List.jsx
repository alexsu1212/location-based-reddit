/**
 *
 */

var actions = require('../actions/ActionLib');
var ListItem = React.createFactory(require('./ListItem.jsx'));
var timerTickLength = 1000 * 5 //1000 * 60 * 5; //1秒 X 60 X 分鐘
var latUser = "";
var lonUser = "";
//
var comp = React.createClass({

  /**
   *
   */
  render: function() {
    this.timer();

    //這邊應該需要在拿一次位址

    // 取出所有要繪製的資料
    var arrPins = this.props.truth.arrPins.sort(this.compareRedis);

    // 跑 loop 一筆筆建成 ListItem 元件
    var arr = arrPins.map(function(item){

      // 注意每個 item 要有一個獨一無二的 key 值
      return <ListItem

              item={item}
              selected={this.props.truth.selectedItem == item}
              key={item.id}

              onClick={this.handleClick.bind(this, item)}
              onRemove={this.handleRemove} />

    }, this)


    return (
      <table className="table table-hover">
          {arr}
      </table>
    );

  },
    //
//        <div className="splitBar"></div>
//        <div className="contentList">

  timer: function() {
    setTimeout(this.getLocation(), timerTickLength);
  },

  getLocation: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        latUser = position.coords.latitude;
        lonUser = position.coords.longitude;
        actions.load();
      })
    }

    // else {
    //   alert("Geolocation is not supported by this browser.");
    // }
  },


  getDistance: function(pin) {
    lonPin = pin.location.lon;
    latPin = pin.location.lat;
    var radlatUser = Math.PI * latUser/180;
    var radlonUser = Math.PI * lonUser/180;
    var radlatPin  = Math.PI * latPin /180;
    var radlatPin  = Math.PI * latPin /180;

    var theta = lonUser - lonPin;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlatUser) * Math.sin(radlatPin) + Math.cos(radlatUser) * Math.cos(radlatPin) * Math.cos(radtheta);

    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344;

    return dist;
  },

  reditScore: function(points, hours_elapsed, distance) {
    return (points - 1) / (Math.pow((hours_elapsed + 2), 1.8) + Math.pow(distance, 1.2));
  },

  comparePosts: function() {
    var sortMethod = function(post1, post2) {
      console.log(post1);
      var currHour = new Date().getHours();
      score1 = this.reditScore(post1.upVotes - post1.downVotes, Math.abs(post1.postTime.getHours() - currHour), getDistance(post1));
      score2 = this.reditScore(post2.upVotes - post2.downVotes, Math.abs(post2.postTime.getHours() - currHour), getDistance(post2));
      return score1 - score2;
    }

    return sortMethod;
  },

  /**
   *
   */
  handleClick: function( item ){
      console.log( '\n\nitem click: ', item.name );
      actions.selectPin(item);
  },

  /**
   *
   */
  handleRemove: function( item ){
      console.log( '\n\nitem remove: ', item.name );
      actions.removePin(item);
  },

  //
  noop: function(){

  }

});

module.exports = comp;
