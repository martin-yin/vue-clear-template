<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { movieInteractor } from '../core'
@Component
export default class Home extends Vue {
  private created() {
    movieInteractor.getMovieList().then(res => {
      console.log(res[0])
    })
  }
}
</script>
