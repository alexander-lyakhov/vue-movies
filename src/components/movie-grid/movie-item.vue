/* eslint-disable */

<template>
  <div class="movie-item--wrapper">
    <div class="movie-item">
      <img :src="movie.poster_path" />
      <div class="release-date">{{movie.release_date.substr(0, 4)}}</div>
      <div class="info">
        <div class="title">{{movie.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'movie-item',

  props: {
    movie: Object,
    required: true,
    default: () => ({})
  },

  created() {
  },
}
</script>

<style lang="scss" scoped>

.movie-item--wrapper {
  width: 25%;
  margin: .25rem 0;
  padding: 0 .25rem;
  transition: transform .2s;
  cursor: pointer;

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
        line-height: 1.05;
        position: relative;
        padding: 0 .5rem;
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
</style>