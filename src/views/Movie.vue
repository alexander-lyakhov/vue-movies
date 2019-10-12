<template>
  <page-layout class="movie-details">
    <template #header>
      <page-header>
        <div class="controls">
          <a class="button btn-search lg" href="#">Back to Search</a>
        </div>
      </page-header>
    </template>

    <template #main>
      main
    </template>
  </page-layout>
</template>

<script>

import pageLayout from '@/components/page-layout';
import pageHeader from '@/components/page-header';

export default {
  name: 'movie-details',

  components: {
    pageLayout,
    pageHeader
  }
}
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