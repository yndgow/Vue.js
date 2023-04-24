import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('TodoStore', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      const data = {
        content: todo,
      };
      axios
        .post('/todo', data)
        .then((res) => {
          alert('INSERT OK!!');
          this.todos.push(todo);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    removeTodo(index, no) {
      //alert('index : ' + index + 'no : ' + no);
      axios
        .delete('/todo/' + no)
        .then((res) => {
          alert('DELETE OK!!');
          this.todos.splice(index, 1);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    clearTodos() {
      axios
        .delete('/todo')
        .then((res) => {
          alert('CLEAR OK!!');
          this.todos = [];
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    setTodos() {
      axios
        .get('/todo')
        .then((res) => {
          this.todos = res.data;
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
  getters: {
    getTodos() {
      return this.todos;
    },
  },
});
