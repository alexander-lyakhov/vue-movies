<template>
  <page-layout class="movie-details">
    <template #header>
      <search-panel />
    </template>

    <template #status-area>
      <span class="found">Results found: {{total}}</span>
      <sort-panel />
    </template>

    <template #main>
      <movie-grid />

      <div class="pagination-wrapper">
        <pagination
          :totalItems="total"
          :itemsPerPage="limit"
          :maxButtons="9"
          @changePage="onPageChange"
        />
      </div>
    </template>
  </page-layout>

</template>

<script>
import { mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import searchPanel from '@/components/search-panel';
import { sortPanel } from '@/components/status';
import pageLayout from '@/components/page-layout';
import movieGrid from '@/components/movie-grid';
import pagination from '@/components/pagination';


export default {
  name: 'home',

  components: {
    pageLayout,
    searchPanel,
    sortPanel,
    movieGrid,
    pagination,
  },

  computed: {
    ...mapState('movies', ['total', 'limit']),
    ...mapFields('movies', ['offset']),
  },

  methods: {
    onPageChange(e) {
      this.offset = e.offset * this.limit;
    },
  },
};
</script>

<style lang="scss" scoped>
  .pagination-wrapper {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    padding: 1rem;
  }

</style>
