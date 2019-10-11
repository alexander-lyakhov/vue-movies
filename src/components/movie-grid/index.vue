/* eslint-disable */

<template>
  <div class="movies">
    <template v-if="movies.length">
      <movie-item v-for="item in movies" :key="item.id" :movie="item" />
    </template>
    <template v-else>
      <div class="not-found">
        No Movies Found
      </div>
    </template>
  </div>
</template>

<script>

import movieItem from './movie-item.vue';
import {mapState} from 'vuex';

export default {
  name: 'MovieGrid',

  components: {
    movieItem
  },

  created() {
    this.getMovies();
  },

  computed: {
    ...mapState('movies', ['movies', 'search', 'searchBy', 'offset', 'sortBy', 'sortOrder'])
  },

  watch: {
    search(nVal, oVal) {
      nVal !== oVal && this.getMovies();
    },

    searchBy(nVal, oVal) {
      nVal !== oVal && this.getMovies();
    },

    sortBy(nVal, oVal) {
      nVal !== oVal && this.getMovies();
    },

    sortOrder(nVal, oVal) {
      nVal !== oVal && this.getMovies();
    },

    offset(nVal, oVal) {
      nVal !== oVal && this.getMovies();
    },
  },

  methods: {
    getMovies() {
      this.$store.dispatch('movies/GET_MOVIES').catch(
        err => console.log('-- ERROR --', err)
      );
    }
  }
}
</script>

<style lang="scss" scoped>

.movies {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: .25rem;
}

.not-found {
  font: 3rem $font-primary;
  color: $light-grey;
  background: $dark-grey;
  text-align: center;
  width: 100%;
  margin: auto;
  padding: 2rem;
}
</style>