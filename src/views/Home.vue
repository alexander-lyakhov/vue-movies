<template>
  <div class="home">
    <header>
      <search-panel />
    </header>

    <status-area />

    <main>
      <movies
        :offset="moviesOffest"
        :limit="moviesPerPage"
      />

      <div class="pagination-wrapper">
        <pagination
          :totalItems="total"
          :itemsPerPage="moviesPerPage"
          :maxButtons="9"
          @changePage="updateMovies"
        />
      </div>
    </main>
  </div>
</template>

<script>
import searchPanel from '@/components/search-panel.vue';
import statusArea from '@/components/status-area.vue';
import movies from '@/components/movies';
import pagination from '@/components/pagination';

import {mapState} from 'vuex';

export default {
  name: 'home',
  components: {
    searchPanel,
    statusArea,
    movies,
    pagination,
  },

  data() {
    return {
      moviesOffest: 0,
      moviesPerPage: 12
    }
  },

  computed: {
    ...mapState('movies', ['total'])
  },

  methods: {
    updateMovies(data) {
      this.moviesOffest = data.offset * this.moviesPerPage;
      console.log('updateMovies', data, this.moviesOffest)
    }
  }
};
</script>

<style lang="scss" scoped>

header {
  //background: $dark-gray-minus-5;
  background: $dark-gray;
  height: 160px;
  width: 100%;
}

main {
  max-width: $page-width;
  margin: auto;
  padding: 1rem 1rem;

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    padding: 1rem;
  }
}
</style>