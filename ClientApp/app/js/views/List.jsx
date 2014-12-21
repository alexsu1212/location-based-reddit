/**
 *
 */

var actions = require('../actions/ActionLib');
var ListItem = React.createFactory(require('./ListItem.jsx'));
var timerTickLength = 1000 * 5 //1000 * 60 * 5; //1秒 X 60 X 分鐘
//
var comp = React.createClass({

  /**
   *
   */
  render: function() {
    this.timer();

    // 取出所有要繪製的資料
    var arrPins = this.props.truth.arrPins;

    // 跑 loop 一筆筆建成 ListItem 元件
    var arr = arrPins.map(function(item){

      // 注意每個 item 要有一個獨一無二的 key 值
      return <ListItem

              todoItem={item}
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
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  },

  showPosition: function(position) {
  //    alert("Latitude: " + position.coords.latitude +
  //        "\nLongitude: " + position.coords.longitude);

    var posi = position.coords.longitude + ',' + position.coords.latitude;

    actions.load(posi);
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
