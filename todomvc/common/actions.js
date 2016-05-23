/*global window*/
(function(ref) {
  ref.actions = function(sendUpdate) {
    return {
      saveTodo: function(todo, id) {
        sendUpdate({ saveTodo: { title: todo, id: id } });
      },
      clearInput: function() {
        sendUpdate({ newTodo: true });
      },
      editTodo: function(todoId) {
        sendUpdate({ editTodoId: todoId, editing: true });
      },
      editingTodo: function(todo, todoId) {
        sendUpdate({ editTodoId: todoId, editing: true, editingTodo: { id: todoId, title: todo }});
      },
      cancelEdit: function(todoId) {
        sendUpdate({ editTodoId: todoId, editing: false });
      },
      deleteTodoId: function(todoId) {
        sendUpdate({ deleteTodoId: todoId });
      },
      setCompleted: function(todoId, completed) {
        sendUpdate({ setCompleted: { id: todoId, completed: completed } });
      },
      clearCompleted: function() {
        sendUpdate({ clearCompleted: true });
      },
      filter: function(by) {
        sendUpdate({ filter: by });
      }
    };
  };
})(window);
