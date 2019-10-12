<template>
  <div class="movie-details">
    <header>
      <search-panel />
    </header>

    <status-area />
  </div>
</template>

<script>

import searchPanel from '@/components/search-panel';
import statusArea from '@/components/status-area';

export default {
  name: 'movie-details',

  components: {
    searchPanel,
    statusArea
  }
}
</script>
