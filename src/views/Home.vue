<template>
  <div class="home">
    <header>
      <search-panel />
    </header>

    <status-area />

    <main>
      <movies />
    </main>
  </div>
</template>

<script>
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

<style lang="scss" scoped>

header {
  background: $dark-gray-minus-5;
  height: 160px;
  width: 100%;
}

main {
  max-width: $page-width;
  margin: auto;
  padding: 1rem 1rem;
}
</style>