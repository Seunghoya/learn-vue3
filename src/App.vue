<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
    <router-link class="navbar-brand" :to="{ name: 'HomePage'}">
      Learn-Vue3
    </router-link>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'BasicFeature'}">
          Basic Features 
        </router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'TestPage'}">
          Todo List
        </router-link>
      </li>
    </ul>

  </nav>
  <router-view />
</template>

<script>
export default {

}
</script>

<style>

</style>