<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <Weather v-if="weathers.length" v-for="(weather, key) in weathers" 
                 :key="key" 
                 :city="weather.title"
                 :woeid="weather.woeid"
                 :weather="weather.consolidated_weather[0]"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Weather from './Weather.vue'

export default {
  name: 'citiesWeather',
  data: function() {
    return {
      cities: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'],
      weathers: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      let self = this;
      this.cities.forEach(function(city) {
        self.callApi(city)
      })
    },
    callApi(city) {
      this.axios.get(process.env.VUE_APP_API_URL + 'search&keyword=' + city).then((response) => {
        this.axios.get(process.env.VUE_APP_API_URL + 'location&woeid=' + response.data[0].woeid).then((response) => {
          this.weathers.push(response.data)
        })
      })
    }
  },
  components: {
    Weather
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
