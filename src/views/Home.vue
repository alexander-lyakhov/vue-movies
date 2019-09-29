<template>
  <div class="home">
    <header>
      <search-panel />
    </header>

    <status-area />

    <main>
      <movies />
      <div class="pagination-wrapper">
        <pagination :totalItems="200" />
      </div>
    </main>
  </div>
</template>

<script>
import searchPanel from '@/components/search-panel.vue';
import statusArea from '@/components/status-area.vue';
import movies from '@/components/movies';
import pagination from '@/components/pagination';

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
    }
  },
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