<template>
    <div class="container">
        <label>Todo List</label>
        <input type="text" class="form-control mb-2" placeholder="Search" v-model="searchText" @keyup.enter="searchTodo">
        <hr/>
        <TodoForm @add-todo="addTodo"/>
        <div style="color: red">{{ error }}</div>
        <div v-if="!todos.length">
            추가된 Todo가 없습니다.
        </div>
        <TodoList 
            :todos="todos"       
            @toggle-todo="toggleTodo"
            @delete-todo="deleteTodo" 
        />
        <hr/>
        <PageNavigator 
            :currentPage="currentPage"
            :totalPages="totalPages"
            @getTodos="getTodos"
        />
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import PageNavigator from '@/components/PageNavigator.vue'
import axios from 'axios'

export default {
  name: 'TodoList',
  components: {
    TodoForm,
    TodoList,
    PageNavigator
  },
  setup() {
    const BASE_URL = 'http://localhost:3001/todos';
    let todos = ref([])
    let errorMsg = ref('')

    const totalTodos = ref(0);
    const limit = 5;
    const currentPage = ref(1);
    const totalPages = (computed(() => {
      return Math.ceil(totalTodos.value / limit)
    }))
    const searchText = ref('')

    const getTodos = async (page = currentPage.value) => {
      currentPage.value = page
      try {
          const res = await axios.get(`${BASE_URL}?_sort=id&_order=desc&subject_like=${searchText.value}&_page=${page}&_limit=${limit}`)
          totalTodos.value = res.headers['x-total-count']
          todos.value = res.data
      } catch (err) {
        errorMsg.value = 'Something went wrong.'
      }
    }
    getTodos()

    const addTodo = async (todo) => {
      errorMsg.value = ''
      try {
        await axios.post(BASE_URL, {
          subject: todo.subject,
          completed: todo.completed
        })
        getTodos(1)
      } catch (err) {
        errorMsg.value = 'Something went wrong.'
      }
    }
    const deleteTodo = async (index) => {
      const id = todos.value[index].id
      errorMsg.value = ''
      try {
        await axios.delete(`${BASE_URL}/${id}`)
        getTodos(1)
      } catch (err) {
        errorMsg.value = 'Something went wrong.'
      }
    }

    const toggleTodo = async (index) => {
      errorMsg.value = ''
      const id = todos.value[index].id
      try {
        await axios.patch(`${BASE_URL}/${id}`, {
          completed : !todos.value[index].completed
        })
        todos.value[index].completed = !todos.value[index].completed
      } catch (err) {
        errorMsg.value = 'Something went wrong.'
      }
    };

    let timeout = null;
    const searchTodo = () => {
      clearTimeout(timeout)
      getTodos(1)
    }

    watch(searchText, () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        getTodos(1) 
      }, 2000)
    })

    return {
      todos,
      deleteTodo,
      addTodo,
      toggleTodo,
      searchTodo,
      errorMsg,
      currentPage,
      totalPages,
      getTodos,
      searchText
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