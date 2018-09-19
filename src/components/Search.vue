<template>
  <div>
    <b-container class="bv-example-row">
      <b-input-group>
        <b-input-group-text slot="append">
            <strong class="info">
              <router-link :to="'/search/' + term">Search</router-link>
            </strong>
        </b-input-group-text>
        <b-form-input v-model="term"></b-form-input>
      </b-input-group>
    </b-container>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      term: ''
    }
  },
  name: 'search',
}
</script>

<style>
</style>
