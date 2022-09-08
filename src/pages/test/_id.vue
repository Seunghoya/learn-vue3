<template>
  <div>Todo Page</div>
  <div>{{ id }}</div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute()
        const id = route.params.id

        return {
            id        
        }
    }
}
</script>

<style>

</style>