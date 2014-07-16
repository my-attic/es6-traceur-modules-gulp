var $__main__ = (function() {
  "use strict";
  var __moduleName = "main";
  var Application = function Application() {
    $("h1").html("ES6 rocks!!! by @k33g_org");
  };
  ($traceurRuntime.createClass)(Application, {}, {});
  $((function() {
    new Application();
  }));
  return {};
})();
var $__models_47_human__ = (function() {
  "use strict";
  var __moduleName = "models/human";
  var Human = function Human(args) {
    $traceurRuntime.superCall(this, $Human.prototype, "constructor", [args]);
    Object.defineProperty(this, "firstName", {
      get: function() {
        return this.get("firstName");
      },
      set: function(value) {
        this.set("firstName", value);
      }
    });
    Object.defineProperty(this, "lastName", {
      get: function() {
        return this.get("lastName");
      },
      set: function(value) {
        this.set("lastName", value);
      }
    });
  };
  var $Human = Human;
  ($traceurRuntime.createClass)(Human, {}, {}, Backbone.Model);
  var $__default = Human;
  return {get default() {
      return $__default;
    }};
})();
var $__models_47_humans__ = (function() {
  "use strict";
  var __moduleName = "models/humans";
  var Human = $__models_47_human__.default;
  var Humans = function Humans(args) {
    console.log("===Humans Collection Constructor===");
    this.model = Human;
    this.url = "/humans";
    $traceurRuntime.superCall(this, $Humans.prototype, "constructor", [args]);
  };
  var $Humans = Humans;
  ($traceurRuntime.createClass)(Humans, {}, {}, Backbone.Collection);
  var $__default = Humans;
  return {get default() {
      return $__default;
    }};
})();
var $__components_47_humans_45_list__ = (function() {
  "use strict";
  var __moduleName = "components/humans-list";
  var Human = $__models_47_human__.default;
  var Humans = $__models_47_humans__.default;
  Polymer("humans-list", {
    ready: function() {
      var $__6 = this;
      this.humansCollection = new Humans();
      this.humansCollection.on({"fetch": this.update()});
      this.humansCollection.fetch().done((function() {
        if ($__6.humansCollection.size() == 0) {
          var bob = new Human({
            firstName: 'Bob',
            lastName: 'Morane'
          });
          var john = new Human({
            firstName: 'John',
            lastName: 'Doe'
          });
          var jane = new Human({
            firstName: 'Jane',
            lastName: 'Doe'
          });
          bob.save().done((function() {
            return john.save().done((function() {
              return jane.save().done((function() {
                return $__6.humansCollection.fetch().done(console.log("humans created:", $__6.humansCollection));
              }));
            }));
          }));
        } else {
          console.log("humans loaded:", $__6.humansCollection);
        }
      }));
    },
    update: function() {
      this.humans = this.humansCollection.models;
    }
  });
  return {};
})();
var $__components_47_my_45_title__ = (function() {
  "use strict";
  var __moduleName = "components/my-title";
  Polymer("my-title", {ready: function() {
      this.title = "ES6 ROCKS!!!";
    }});
  return {};
})();
