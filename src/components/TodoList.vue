<template>
    <div class="card mt-3" v-for="(todo, index) in todos" :key="todo.id">
        <div class="card-body d-flex align-items-center" @click="moveToPage(todo.id)" style="cursor:pointer">
            <div class="form-check flex-grow-1">
                <input class="form-check-input" type="checkbox" :checked="todo.completed" @change="toggleTodo(index, $event)" @click.stop >
                <label class="form-check-label" :class="{ todo: todo.completed }" >
                {{ todo.subject }}
                </label>
            </div>
            <button class="btn btn-danger btn-sm" @click.stop="deleteTodo(index)">Delete</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    props: {
        todos: {
            type: Array,
            required: true,
        }
    },
    emits: ['toggle-todo', 'delete-todo'],
    setup(props, { emit }) {
        const router = useRouter()
        const toggleTodo = (index, event) => {
            console.log(event)
            emit('toggle-todo', index, event.target.checked)
        }

        const deleteTodo = (index) => {
            emit('delete-todo', index)
        }

        const moveToPage = (index) => {
            console.log(index)
            router.push({
                name: "Todo",
                params: {
                    id: index
                }
            })
        }
        return {
            toggleTodo,
            deleteTodo,
            moveToPage
        }
    }
}
</script>

<style>

</style>