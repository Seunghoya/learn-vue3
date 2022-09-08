<template>
  <nav aria-label="Page navigation example" style="cursor:pointer">
      <ul class="pagination">
        <li 
          v-if="currentPage !== 1"
          class="page-item"
        >
          <a class="page-link" @click="getTodos(currentPage - 1)">
            Previous
          </a>
        </li>

        <li 
          v-for="page in totalPages" 
          :key="page" class="page-item" 
          :class="currentPage === page ? 'active' : ''"
        >
          <a class="page-link" @click="getTodos(page)">{{ page }}</a>
        </li>

        <li 
          v-if="currentPage !== totalPages" 
          class="page-item"
        >
          <a class="page-link" @click="getTodos(currentPage + 1)">
            Next
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'PageNavigator',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  setup(props, { emit }) {
    const getTodos = (page) => {
      emit('getTodos', page)
    }

    return {
      getTodos
    }
  }
}
</script>

<style>

</style>