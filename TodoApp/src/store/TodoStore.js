import { defineStore } from 'pinia';

export const useTodoStore = defineStore('TodoStore', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    clearTodos() {
      this.todos = [];
    },
  },
  getters: {
    getTodos() {
      return this.todos;
    },
  },
  persist: true,
});
