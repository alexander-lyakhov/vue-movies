<template>
  <div class="home">
    <header>
      <search-panel @sort="onSort"/>
    </header>

    <status-area />

    <main>
      <movie-grid
        :offset="moviesOffest"
        :limit="moviesPerPage"
        :sortBy="sortBy"
      />

      <div class="pagination-wrapper">
        <pagination
          :totalItems="total"
          :itemsPerPage="moviesPerPage"
          :maxButtons="9"
          @changePage="onPageChange"
        />
      </div>
    </main>
  </div>
</template>

<script>
import searchPanel from '@/components/search-panel';
import statusArea from '@/components/status-area';
import movieGrid from '@/components/movie-grid';
import pagination from '@/components/pagination';

import {mapState} from 'vuex';

export default {
  name: 'home',
  components: {
    searchPanel,
    statusArea,
    movieGrid,
    pagination,
  },

  data() {
    return {
      moviesOffest: 0,
      moviesPerPage: 12,
      sortBy: ''
    }
  },

  computed: {
    ...mapState('movies', ['total'])
  },

  methods: {
    onPageChange(data) {
      this.moviesOffest = data.offset * this.moviesPerPage;
    },

    onSort(value) {
      this.sortBy = value;
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