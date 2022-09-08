<template>
  <form @submit.prevent="onSubmit">
      <div class="d-flex">
        <div class="flex-grow-1 me-2">
          <input class="form-control" type="text" v-model="todo" placeholder="Type new To-do">
        </div>
        <div>
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </div>
      <div v-show="hasError" style="color: red">This field cannot be empty.</div>
    </form>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['add-todo'],
  setup(props, { emit }) {
    let todo = ref('')
    let hasError = ref(false)

    const onSubmit = () => {
      if (todo.value === '') hasError.value = true;
      else {emit('add-todo', {
          id: Date.now(),
          subject: todo.value,
          completed: false
        })
        hasError.value = false
        todo.value = ''
      }
    }
    return {
      todo,
      hasError,
      onSubmit
    }
  }
}
</script>

<style>

</style>