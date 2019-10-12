<template>
  <header>
    <page-header>
      <slot name="header"></slot>
    </page-header>
  </header>

  <status-area>
    <slot name="status-area"></slot>
  </status-area>

  <main>
    <slot name="name"></slot>
  </main>
</template>

<script>

import pageHeader from '@/components/page-header';
import {statusArea} from '@/components/status';

export default {
  name: 'page-layout',

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
  }

  main {
    background: rgba(255, 255, 255, .15);
    max-width: $page-width;
    margin: auto;
    padding: 1rem .75rem;
  }
</style>