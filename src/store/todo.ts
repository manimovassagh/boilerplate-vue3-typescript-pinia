import axios from 'axios';
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

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todoList: [],
    loading: true,
  }),

  getters: {},
  actions: {
    async getTodo(): Promise<void> {
      axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
        this.todoList = res.data;
        this.loading = false;
      });
    },
  },
});

