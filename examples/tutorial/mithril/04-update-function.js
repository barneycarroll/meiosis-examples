/*global m*/

// -- Application code

var createView = function(update) {
  var increase = function(amount) {
    return function(_event) {
      update(amount);
    };
  };
  var view = function(model) {
    return [
      m("div", "Counter: " + model),
      m("button", { onclick: increase( 1) }, "+1"),
      m("button", { onclick: increase(-1) }, "-1")
    ];
  };
  return view;
};

// -- Setup code

var model = 0;

var element = document.getElementById("app");

var update = function(value) {
  model = model + value;
  m.render(element, view(model));
};

var view = createView(update);

m.render(element, view(model));
