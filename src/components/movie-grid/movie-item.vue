/* eslint-disable */

<template>
  <div class="movie-item--wrapper" @click="gotoToMovie(movie.id)">
    <div class="movie-item">
      <div v-if="!isPosterLoaded" class="movie-item__poster-fallback">
        <img :src="posterFallback" />
      </div>
      <img v-else class="movie-item__poster" :src="movie.poster_path" />
      <div class="release-date">{{movie.release_date.substr(0, 4)}}</div>
      <div class="info">
        <div class="title">{{movie.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>

import posterFallback from '@/assets/poster-fallback.png';

export default {
  name: 'movie-item',

  props: {
    movie: Object,
    required: true,
    default: () => ({}),
  },

  data() {
    return {
      isPosterLoaded: false,
      posterFallback
    }
  },

  created() {
    this.img = new Image();
    this.img.addEventListener('load', () => this.isPosterLoaded = true)
    this.img.src = this.movie.poster_path;
  },

  beforeDestroy() {
    delete this.img;
  },

  methods: {
    gotoToMovie(id) {
      this.$router.push({ name: 'movie', params: { id } });
    },
  },
};
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
    box-sizing: border-box;
    position: relative;
    transition: transform .2s;

    &:hover {
      z-index: 1;
    }

    &__poster-fallback {
      font-size: 2rem;
      background: #0078d4;
      height: 320px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
      }
    }

    &__poster {
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
        line-height: 1;
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

@media screen and (max-width: 720px) {
  .movie-item--wrapper {
    min-width: 33.33%;
  }
}
</style>
