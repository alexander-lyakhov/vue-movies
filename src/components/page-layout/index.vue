<template>
  <div>
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
  </div>
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
</style>