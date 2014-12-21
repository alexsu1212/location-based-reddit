/**
 *
 */

var actions = require('../actions/ActionLib');

var Show = React.createClass({

  /**
   *
   */
  render: function() {

    return (
         <div className="show">
        <h2 className="show-title">Good Retaurant Sharing ~!!</h2>
        <div className="splitBar"></div>
        <div className="show-pin">
            BEVERLY HILLS, Calif.—Poking a finger in Hollywood's eye as well as getting a jump on any potential porn parody contenders, Hustler Video has already announced plans to produce a porn parody of Sony's beleaguered comedy, The Interview, starring Seth Rogen and James Franco. Titled This Ain’t The Interview XXX, Hustler's spoof will also center on two civilians enlisted by the CIA to assassinate the leader of North Korea. It was inevitable. “If Kim Jong-un and his henchmen were upset before, wait till they see the movie we’re going to make,” said Hustler founder and chairman Larry Flynt. “I’ve spent a lifetime fighting for the First Amendment, and no foreign dictator is going to take away my right to free speech.”
        </div>
        <div className="show-author">
            <div>Andrew</div>
            <div>Taiwan, Taipei City</div>
        </div>
    </div>

    );

  },

  noop: function(){

  }

});

module.exports = Show;
