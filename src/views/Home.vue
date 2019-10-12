<template>
  <div class="home">
    <header>
      <search-panel />
    </header>

    <status-area>
      <span class="found">Results found: {{total}}</span>
      <sort-panel />
    </status-area>

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
import { statusArea, sortPanel } from '@/components/status';
import movieGrid from '@/components/movie-grid';
import pagination from '@/components/pagination';


import {mapState} from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'home',
  components: {
    searchPanel,
    statusArea,
    sortPanel,
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
  height: 160px;
  width: 100%;
}

main {
  background: rgba(255, 255, 255, .15);
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