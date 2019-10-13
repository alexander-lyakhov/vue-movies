<template>
  <page-layout class="movie-details">
    <template #header>
      <div class="controls">
        <a class="button btn-search lg" href="#">Back to Search</a>
      </div>
    </template>

    <template #main>
      main
    </template>
  </page-layout>
</template>

<script>

import pageLayout from '@/components/page-layout';
import api from '@/api';

export default {
  name: 'movie-details',

  components: {
    pageLayout,
  },

  created() {
    console.log(this.$route.params)

    api.getMovie(this.$route.params.id)
  }
};
</script>


<style lang="scss" scoped>
  .controls {
    height: 4.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
  }
</style>
