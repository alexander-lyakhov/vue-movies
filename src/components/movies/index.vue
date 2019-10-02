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
  name: 'movies',

  components: {
    movieItem
  },

  props: {
    offset: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 24
    }
  },

  created() {
    this.getMovies();
  },

  computed: {
    ...mapState('movies', ['movies'])
  },

  watch: {
    offset(nVal, oVal) {
      nVal !== oVal && this.getMovies();
    }
  },

  methods: {
    getMovies() {
      this.$store.dispatch('movies/GET_MOVIES', {
        offset: this.offset,
        limit: this.limit
      }).catch(
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