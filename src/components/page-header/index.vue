<template>
  <div class="page-header">
    <slot></slot>
  </div>
</template>

<styles lang="scss" scoped>
  .page-header {
    background: rgba(255, 255, 255, .15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: $page-width;
    height: 100%;
    margin: auto;
    padding: 0 1rem;
  }
</styles>
