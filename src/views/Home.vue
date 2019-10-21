<template>
  <page-layout class="movies">
    <template #header>
      <search-panel />
    </template>

    <template #status-area>
      <span class="found">Results found: {{total}}</span>
      <sort-panel />
    </template>

    <template #main>
      <movie-grid @reset="reset" />

      <div class="pagination-wrapper" v-if="!isLoading">
        <pagination
          :totalItems="total"
          :itemsPerPage="limit"
          :maxButtons="9"
          v-model="currentPage"
        />
      </div>

      <div class="about-section">
        <router-link to="about">About</router-link>
      </div>
    </template>
  </page-layout>
</template>

<script>
import { mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import searchPanel from '@/components/search-panel';
import { sortPanel } from '@/components/status';
import pageLayout from './page-layout';
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

  data() {
    return {
      currentPage: 1,
    };
  },

  watch: {
    currentPage(newVal, oldVal) {
      this.offset = (newVal - 1) * this.limit;
    },
  },

  computed: {
    ...mapState('movies', ['total', 'limit']),
    ...mapFields('movies', ['offset']),
  },

  methods: {
    reset() {
      this.currentPage = 1;
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

  .about-section {
    text-align: center;
    margin: 0 0 1rem 0;

    a {
      opacity: .5;
      &:hover {
        opacity: 1;
      }
    }

  }

</style>
