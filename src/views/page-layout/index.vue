<template>
  <div class="page">
    <header>
      <page-header>
        <slot name="header"></slot>
      </page-header>
    </header>

    <status-area>
      <slot name="status-area"></slot>
    </status-area>

    <main>
      <slot name="main"></slot>
    </main>

    <div class="overlay" v-if="isLoading"></div>
  </div>
</template>

<script>

import pageHeader from '@/components/page-header';
import { statusArea } from '@/components/status';
import { flags } from '@/utils';

export default {
  name: 'page-layout',

  components: {
    pageHeader,
    statusArea,
  },

  computed: {
    isLoading() {
      return flags.isLoading;
    }
  }
};
</script>

<style lang="scss" scoped>
  $main-offset: 200px;
  $bg-color: rgba(255, 255, 255, .15);

  header {
    height: 160px;
    width: 100%;
  }

  main {
    background: linear-gradient(to bottom, $bg-color, $bg-color) no-repeat 0 200px;
    max-width: $page-width;
    min-height: 100vh;
    margin: - $main-offset auto 0;
    padding: calc(#{$main-offset} + 1rem) .75rem 1rem;
  }

  .overlay {
    background: #000;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0.25;
    z-index: 1;
  }
</style>
