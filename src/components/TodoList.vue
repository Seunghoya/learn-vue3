<template>
    <div class="card mt-3" v-for="(todo, index) in todos" :key="todo.id">
        <div class="card-body d-flex align-items-center">
            <div class="form-check flex-grow-1">
                <input v-if="todo.completed" class="form-check-input" type="checkbox" :value="todo.completed" @change="toggleTodo(index)" checked>
                <input v-else class="form-check-input" type="checkbox" :value="todo.completed" @change="toggleTodo(index)">
                <label class="form-check-label" :class="{ todo: todo.completed }" >
                {{ todo.subject }}
                </label>
            </div>
            <button class="btn btn-danger btn-sm" @click="deleteTodo(index)">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true,
        }
    },
    emits: ['toggle-todo', 'delete-todo'],
    setup(props, { emit }) {
        const toggleTodo = (index) => {
            emit('toggle-todo', index)
        }

        const deleteTodo = (index) => {
            emit('delete-todo', index)
        }
        return {
            toggleTodo,
            deleteTodo
        }
    }
}
</script>

<style>

</style>