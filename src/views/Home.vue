<template>
  <div class="home">
    <header>
      <search-panel />
    </header>

    <status-area />

    <main>
      <movie-grid />

      <div class="pagination-wrapper">
        <pagination
          :totalItems="total"
          :itemsPerPage="limit"
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
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'home',
  components: {
    searchPanel,
    statusArea,
    movieGrid,
    pagination,
  },

  computed: {
    ...mapState('movies', ['total', 'limit']),
    ...mapFields('movies', ['offset'])
  },

  methods: {
    onPageChange(e) {
      this.offset = e.offset * this.limit;
    },
  }
};
</script>

<style lang="scss" scoped>

header {
  //background: $dark-grey-minus-5;
  background: $dark-grey;
  height: 160px;
  width: 100%;
}

main {
  max-width: $page-width;
  margin: auto;
  padding: 1rem .75rem;

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    padding: 1rem;
  }
}
</style>