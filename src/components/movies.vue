/* eslint-disable */

<template>
  <div class="movies">
    <div class="movie-item--wrapper" v-for="item in movies" :key="item.id">
      <div class="movie-item">
        <img :src="item.poster_path" />
        <div class="release-date">{{item.release_date.substr(0, 4)}}</div>
        <div class="info">
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
  name: 'movies',

  created() {
    console.log('this.movies', this.movies)
  },

  computed: {
    ...mapState(['movies'])
  }
}
</script>

<style lang="scss" scoped>
.movies {
  background: $middle-gray;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: .25rem;

  .movie-item--wrapper {
    width: 25%;
    margin: .25rem 0;
    padding: 0 .25rem;
    
    .movie-item {
      height: 100%;
      background: #000;
      position: relative;

      img {
        border: none;
        outline: none;
        width: 100%;
        height: 320px;
        object-fit: cover;
      }
      .info {
        color: $text-color;
        background: #000;
        border-top: 2px solid $orange;
        position: relative;
        margin: 0;
        padding: 0;
        .title {
          font: 1.25rem $font-primary;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 4rem;
          position: relative;
          z-index: 1;
        }
      }
      .release-date {
        color: $text-color;
        background: #000;
        display: inline;
        padding: 2px .5rem;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
}
</style>