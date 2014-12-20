/**
 *
 */
var actions = require('../actions/ActionLib');
var cx = React.addons.classSet;
//
var comp = React.createClass({

  /**
   *
   */
  componentDidMount: function(){
      this.$input = $(this.getDOMNode()).find('span').first();
      this.$remove = this.$input.next();
  },

  /**
   *
   */
  render: function() {

    var classes = cx({
        'list-item': true,
        'selected': this.props.selected
    });

    return (

         <tr>
                <td className="article" onMouseOver={this.handleMouseMovement}
           onMouseOut={this.handleMouseMovement}
           onDoubleClick={this.handleDblClick}
           onClick={this.props.onClick} >
                    <div className="art_ctrl">
                        <div className="ico plus"></div>
                        <div className="like">3345</div>
                        <div className="ico minus"></div>
                    </div>
                    <div className="art_img">
                        <img className="art_img" src={"assets/img/testImg01.jpg"} alt="img" />
                    </div>
                    <div className="art_pen">
                        <h3 className="pen_title">Good Retaurant Sharing ~!!</h3>
                        <h5 className="pen_title_sec">something really good to eat, I with everyone can ...</h5>
                    </div>
                    <div className="art_author">
                        <h5 className="author">Andrew</h5>
                        <h5 className="loca">Taiwan, Taipei City</h5>
                    </div>
                </td>
            </tr>
    );

  },

  /**
   *
   */
  handleDblClick: function(){

      var val = null;

      this.$input.attr('contenteditable', true)//.focus();
      this.setCaret();

      this.$input.on('keydown focusout', function(evt){
          // enter key 或 文字框喪失focus 即認定為退出編輯狀態
          if( evt.keyCode == 13 || evt.type == 'focusout' ){

              evt.preventDefault();

              // 取得編輯後的新值
              val = this.$input.text();

              // 移除 <span> 的編輯能力
              this.$input.removeAttr('contenteditable');
              this.$input.off('keydown focusout');

              // console.log( '新值為: ', val );

              // 準備將新值存入 store，方法一樣是操作 actionCreator
              this.props.todoItem.name = val;
              actions.updatePin( this.props.todoItem );

          }
      }.bind(this))
  },

  /**
   *
   */
  setCaret: function() {
      var el = this.$input[0];
      var range = document.createRange();
      var sel = window.getSelection();
      range.setStart(el.childNodes[0], el.innerText.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      el.focus();
  },


  /**
   * ListItem 內部預先處理過刪除事件
   */
  handleRemove: function(evt){

    // 停止此事件繼續向上廣播，不然會連帶觸發 onClick 事件
    evt.stopPropagation();

    // 如果外界有傳入 onRemove handler，就觸發它，並且將自已身份也傳出去，方便後續處理
    if( this.props.onRemove ){
        this.props.onRemove(this.props.todoItem);
    }

  },

  /**
   *
   */
  handleMouseMovement: function(evt){
      if( evt.type == 'mouseover'){
          this.$remove.removeClass('hide')
      }else{
          this.$remove.addClass('hide')
      }
  },

  noop: function(){

  }

});

module.exports = comp;
