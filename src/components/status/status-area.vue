<template>
  <div class="status-area">
    <div class="status-bar">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.status-area {
  font: 1rem $font-primary;
  color: #fff;
  width: 100%;

  .status-bar {
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    max-width: $page-width;
    height: 40px;
    margin: auto;
    padding: 0rem 1rem;
  }
}
</style>
