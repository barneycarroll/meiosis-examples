/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, moduleName, depNames, depVars, factory) {
  if (typeof exports === "object") {
    var requires = depNames.map(function(depName) {
      return require(depName);
    });
    module.exports = factory.apply(root, requires);
  }
  else if (typeof define === "function" && define.amd) {
    define(depNames, factory);
  }
  else {
    var vars = depVars.map(function(depVar) {
      return root[depVar];
    });
    root[moduleName] = factory.apply(root, vars);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv
  "rootView",
  ["meiosis-snabbdom"],
  ["meiosisSnabbdom"],

  function(meiosisSnabbdom) {
    var h = meiosisSnabbdom.renderer.h;

    var info = h("footer.info", [
      h("p", "Double-click to edit a todo"),
      h("p", [h("span", "Meiosis - Snabbdom - Created by "), h("a", {props: {href: "http://twitter.com/foxdonut00"}}, "foxdonut00")]),
      h("p", [h("span", "Part of "), h("a", {props: {href: "http://todomvc.com"}}, "TodoMVC")])
    ]);

    return function(todoapp) {
      return function(model) {
        return h("div", [todoapp(model), info]);
      };
    };
  }
));
