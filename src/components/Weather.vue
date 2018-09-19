<template>
  <div class="col-lg-2">
    <p>
      <router-link :to="'/woeid/' + woeid">{{ city }}</router-link>
    </p>
    <p>
      {{ weather.applicable_date | dayWeek }}
    </p>
    <p>
      <img class="state-icon-sml" :src="weather.weather_state_abbr | image">
      <span>{{ weather.weather_state_name }}</span>
    </p>
    <p>
      Temp: {{ weather.the_temp | temperature }}
    </p>
    <p>
      Max: {{ weather.max_temp | max }}
    </p>
    <p>
      Min: {{ weather.min_temp | min }}
    </p>
    <p>
      <img class="wind" :style="'transform: rotate(' + weather.wind_direction + 'deg);'" :src="windImage">
      {{ weather.wind_speed | windDirection }}
    </p>
    <p>
      Humidity: {{ weather.humidity | humidity }}
    </p>
    <p>
      Visibility: {{ weather.visibility | visibility }}
    </p>
    <p>
      Pressure: {{ weather.air_pressure | pressure }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  props: {
    city: String,
    woeid: Number,
    weather: Object,
  },
  filters: {
    image: function(abbr) {
      return process.env.VUE_APP_IMG_URL + 'weather/' + abbr + '.svg'
    },
    temperature: function(temperatureTemp) {
      return Math.floor(temperatureTemp) + 'ºC'
    },
    max: function(maxTemp) {
      return Math.floor(maxTemp) + 'ºC'
    },
    min: function(minTemp) {
      return Math.floor(minTemp) + 'ºC'
    },
    windDirection: function(windSpeed) {
      return Math.floor(windSpeed) + ' mph'
    },
    humidity: function(humidity) {
      return humidity + '%'
    },
    visibility: function(visibility) {
      return visibility.toFixed(1) + ' miles'
    },
    pressure: function(airPressure) {
      return Math.round(airPressure) + 'mb'
    },
    dayWeek: function(date) {
      let parts = date.match(/(\d+)/g);
      let dayOfWeek = new Date(parts[0], parts[1]-1, parts[2]).getDay();
      let today = new Date().getDay();

      return (dayOfWeek == today) ? 'Today' : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
  },
  computed: {
    windImage: function() {
      return process.env.VUE_APP_IMG_URL + 'windarrow.svg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
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

  .col-lg-2 {
    display: inline-block;
    width: 20%
  }
</style>
