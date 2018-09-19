<template>
  <div id="app">
    <b-container class="bv-example-row">
      <h2>{{ title }}</h2>
      <b-row v-if="weathers">
        <Weather v-for="(weather, key) in weathers" 
                 :key="key"
                 :weather="weather"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Weather from './Weather.vue'

export default {
  data: function() {
    return {
      title: '',
      weathers: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.axios.get(process.env.VUE_APP_API_URL + 'location&woeid=' + this.$route.params.id).then((response) => {
        this.title = response.data.title
        this.weathers = response.data.consolidated_weather
      })
    }
  },
  name: 'WeatherDetail',
  components: {
    Weather
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .state-icon-sml {
    width: 32px;
    height: 32px;
    margin: 0 5px 0 0;
  }
  .wind {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: url(/static/img/windarrow.svg);
    background-size: 100% 100%;
  }
</style>
