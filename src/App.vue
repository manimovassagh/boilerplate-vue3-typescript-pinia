<template>
  <Layout>
    <div class="testApp">Test App</div>
    <div v-if="store.hasError">Error in {{ store.err }}</div>
    <div v-if="store.loading">loading ....</div>
    <div v-else v-for="t in store.todoList">
   
      {{ t.id }}
    </div>
  </Layout>
</template>

<script async setup lang="ts">
import Layout from './layouts/default.vue';
import { useTodoStore } from './store/todo';
const store = useTodoStore();
store.getTodo();
</script>

<style lang="scss">
$primary-color: #3498db;
$white-color: #ffffff;
$gray-color: #f1f1f1;
$border: 10px;
$padding: 10px;

.form-task {
  width: 100%;
  display: flex;

  &__input {
    all: initial;
    width: calc(65% - 1rem);
    background-color: $gray-color;
    padding: $padding;
    border-radius: $border;
  }

  &__button {
    all: initial;
    width: 35%;
    background-color: $primary-color;
    border-radius: $border;
    padding: $padding;
    color: $white-color;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    margin-left: 1rem;
  }
}

.no-result,
.loading-container {
  text-align: center;

  span {
    font-size: xx-large;
  }
}

.task-container {
  width: 100%;

  .card-task {
    background: $gray-color;
    border-radius: $border;
    padding: $padding;
    margin-bottom: 1rem;

    &__checkbox {
      transition: all 0.4 ease;
    }

    &__name {
      text-transform: uppercase;
      margin-left: 1rem;
    }

    &.done {
      .card-task__name {
        text-decoration: line-through;
        opacity: 0.7;
      }
    }

    &__button {
      all: initial;
      float: right;
      cursor: pointer;
    }
  }
}
.testApp {
  text-align: center;
}
</style>
