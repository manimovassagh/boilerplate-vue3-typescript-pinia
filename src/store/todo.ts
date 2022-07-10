import axios, { AxiosError } from 'axios';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { Task } from './../models/task.models';
import { generateID, sleep } from './../utils';

interface TodoState {
  tasks: Task[];
  loading: boolean;
}

export interface TodoList {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface StateMani {
  todoList: TodoList | undefined;
  loading: boolean;
  hasError: boolean;
  err: AxiosError | null;
}

export const useTodoStore = defineStore({
  id: 'todo',
  state: (): StateMani => ({
    todoList: undefined,
    loading: true,
    hasError: false,
    err: null,
  }),

  getters: {},
  actions: {
    async getTodo() {
      await axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
          this.todoList = res.data;
          this.loading = false;
        })
        .catch((err) => {
          this.hasError = true;
          this.loading = false;
          this.err = err.message;
        });
    },
  },
});
