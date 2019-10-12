<template>
  <div class="movie-details">
    <header>
      <page-header>
        <div class="controls">
          <a class="button btn-search lg" href="#">Back to Search</a>
        </div>
      </page-header>
    </header>

    <status-area />

    <main>
    </main>
  </div>
</template>

<script>

import pageHeader from '@/components/page-header';
import {statusArea} from '@/components/status';
//import pageLayout from '@/components/page-layout';

export default {
  name: 'movie-details',

  components: {
    pageHeader,
    statusArea
  }
}
</script>


<style lang="scss" scoped>

header {
  height: 160px;
  width: 100%;

  .controls {
    height: 4.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
  }

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