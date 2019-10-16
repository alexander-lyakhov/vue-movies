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

import { mapState } from 'vuex';
import movieItem from './movie-item.vue';

export default {
  name: 'MovieGrid',

  components: {
    movieItem,
  },

  created() {
    this.getMovies();
  },

  computed: {
    ...mapState('movies', ['movies', 'search', 'searchBy', 'offset', 'sortBy', 'sortOrder']),
  },

  watch: {
    search(nVal, oVal) {
      this.offset ? this.reset() : this.getMovies();
    },

    searchBy(nVal, oVal) {
      this.offset ? this.reset() : this.getMovies();
    },

    sortBy(nVal, oVal) {
      this.offset ? this.reset() : this.getMovies();
    },

    sortOrder(nVal, oVal) {
      this.offset ? this.reset() : this.getMovies();
    },

    offset(nVal, oVal) {
      this.getMovies();
    },
  },

  methods: {
    getMovies() {
      this.$store.dispatch('movies/GET_MOVIES').catch(
        err => console.log('-- ERROR --', err),
      );
    },

    reset() {
      this.$emit('reset');
    }
  },
};
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
