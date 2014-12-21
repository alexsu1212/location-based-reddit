module.exports = function(Pin) {
  Pin.definition.properties.createdAt.default = new Date();
  Pin.definition.properties.upVotes.default = new Number();
  Pin.definition.properties.downVotes.default = new Number();

  Pin.on('dataSourceAttach', function(obj) {
    setTimeout(function() {
      setup();
      modelDidAttach();
    })
  });

  function setup() {

    Pin.base.setup.apply(Pin, arguments);

    var User = Pin.app.models.User;
    var loopback = Pin.app.loopback;

    Pin.before('create', function(ctx, instance, next) {
      console.log('\n\nctx.args: ', ctx.args.data);

      var obj = ctx.args.data;
      obj.createdAt = new Date();

      next();
    });

    Pin.afterRemote('create', function(ctx, instance, next) {
      console.log('\nafterRemote: \n', require('util').inspect(ctx.result, false, 0, true));

      var result = ctx.result;

      next();
    });

    Pin.findAll = function(ctx, next) {
      Pin.find(
        {
          //algorithm goes here
        },

        function(err, results) {
          if (err) return err;

          console.log('results', results);
          console.log( '\nfindAll: \n', require('util').inspect( results, false, 0, true), ' >err: ', err );

          next(null, results);
        })
    }

    Pin.beforeRemote('findAll', function(ctx, inst, next) {
      console.log('\n\t beforeHook :: findAll' );
      next();
    })

    Pin.afterRemote('findAll', function(ctx, inst, next){
      console.log( '\n\t afterHook :: findAll' );
      next();
    })

    loopback.remoteMethod(
      Pin.findAll, {
        description: 'Find all Pins',
        accepts: [
          {
            http: {
              source: 'req',
              required: true,
              description: 'user Id'
            }
          }
        ],

        returns: {
          arg: 'result',
          required: true,
          type: 'Object'
        },

        http: {
          verb: 'GET',
          path: '/findAll'
        }
      }
    )
  }

  function modelDidAttach() {
    var arr = [
      {
        "title": "foo",
        "imgUrl": "",
        "content": "",
        "location": "-98.09830558,47.49927102",
        "upvotes": 0,
        "downvotes": 0,
        "createdAt": "Dec 02, 2014"
      }
    ];

    Pin.create(arr, function(err, doc) {
      console.log('建立結果：', doc);
    });
  }

};
