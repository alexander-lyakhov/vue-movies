<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <status-area>
      <slot name="status-area"></slot>
    </status-area>

    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>

<script>

import {statusArea} from '@/components/status';

export default {
  name: 'page-layout',

  components: {
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