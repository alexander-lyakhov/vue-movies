/* eslint-disable */

<template>
  <div class="movies">
    <movie-item v-for="item in movies" :key="item.id" :movie="item" />
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
  background: $middle-gray;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: .25rem;
}
</style>