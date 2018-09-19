<template>
  <div>
    <b-container class="bv-example-row">
      <router-link to="/">Home</router-link>
    </b-container>
    <Search/>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    Search
  }
}
</script>

<style>
</style>
