/* eslint-disable */

<template>
  <div class="status-area">
    <div class="status-bar">
      <span class="found">0</span>
      <div class="sort-panel">Sort by</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'status-area'
  }
</script>

<style lang="scss" scoped>

.status-area {
  font: 1rem $font-primary;
  color: $light-gray;
  background: $dark-gray-plus-5;
  width: 100%;
  height: 2rem;

  .status-bar {
    display: flex;
    align-items: center;
    max-width: $page-width;
    height: 100%;
    margin: auto;
    padding: 0 1rem;
  }

  .sort-panel {
    margin: 0 0 0 auto;
  }
}
</style>
