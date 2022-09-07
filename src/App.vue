<template>
  <div class="container">
    <label>Todo List</label>
    <input type="text" class="form-control mb-2" placeholder="Search" v-model="searchText">
    <TodoForm @add-todo="addTodo"/>

    <div v-if="!filteredTodos.length">
      추가된 Todo가 없습니다.
    </div>
    <TodoList 
      :todos="filteredTodos"       
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo" 
    />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoForm,
    TodoList
  },
  setup() {
    let todos = ref([{
      id: 0,
      subject: "첫 번째 할 일",
      completed: true
    },
    {
      id: 1,
      subject: "두 번째 할 일",
      completed: false
    }])

    const addTodo = (todo) => {
      todos.value.push(todo);
    }

    const deleteTodo = (index) => {
      todos.value.splice(index, 1)
    }

    const toggleTodo = (index) => {
      console.log(todos.value)
      todos.value[index].completed = !todos.value[index].completed
    };

    const searchText = ref('')
    const filteredTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter(todo => {
          return todo.subject.includes(searchText.value)
        })
      }
      return todos.value
    })
    return {
      todos,
      deleteTodo,
      addTodo,
      toggleTodo,
      searchText,
      filteredTodos
    }
  }
}
</script>

<style>
  .todo {
    color: gray;
    text-decoration: line-through;
  }
</style>