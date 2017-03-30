(function(ref) {
  ref.nextAction = function(state, actions) {
    return function(model) {
      if (state.counting(model)) {
        if (model.counter > 0) {
          actions.decrement();
        }
        else if (model.counter === 0) {
          actions.launch();
        }
      }
    };
  };
})(window);
