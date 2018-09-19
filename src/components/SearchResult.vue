<template>
  <div>
    <b-container v-if="weathers" class="bv-example-row">
      <h2>{{ title }}</h2>
      <b-row v-if="weathers">
        <Weather v-for="(weather, key) in weathers" 
                 :key="key"
                 :weather="weather"/>
      </b-row>
    </b-container>
    <b-container v-else  class="bv-example-row">
      No results found
    </b-container>
  </div>
</template>

<script>
import Weather from './Weather'

export default {
  data: function() {
    return {
      term: this.$route.params.keyword,
      title: '',
      weathers: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route' (to, from) {
      this.term = to.params.keyword
    },
    term: {
      handler: function(val, oldVal) {
        this.fetchData();
      },
      deep: true
    }
  },
  methods: {
    fetchData() {
      this.axios.get(process.env.VUE_APP_API_URL + 'search&keyword=' + this.term).then((response) => {
        this.axios.get(process.env.VUE_APP_API_URL + 'location&woeid=' + response.data[0].woeid).then((response) => {
          this.title = response.data.title
          this.weathers = response.data.consolidated_weather
        })
      },
      (error) => { 
        this.weathers = null
      })
    }
  },
  name: 'searchResult',
  components: {
    Weather
  }
}
</script>

<style>
</style>
