<template>
  <div class="home">
    <header>
      <search-panel />
      <status-area />
      <main>
        <movies />
      </main>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import searchPanel from '@/components/search-panel.vue';
import statusArea from '@/components/status-area.vue';
import movies from '@/components/movies.vue';

export default {
  name: 'home',
  components: {
    searchPanel,
    statusArea,
    movies,
  },
};
</script>
