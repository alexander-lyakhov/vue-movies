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

    <div class="modal" v-if="isLoading">
      <div class="modal__overlay"></div>
      <div class="modal__message">Loading...</div>
    </div>
  </div>
</template>

<script>

import pageHeader from '@/components/page-header';
import { statusArea } from '@/components/status';

export default {
  name: 'page-layout',

  components: {
    pageHeader,
    statusArea,
  },
};
</script>

<style lang="scss" scoped>
  $min-width: 640px;
  $main-offset: 200px;
  $bg-color: rgba(255, 255, 255, .15);

  header {
    height: 160px;
    width: 100%;

    .page-header {
      min-width: $min-width;

      &::v-deep .page-role {
        font-size: 4rem;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        margin: 1.5rem 0 0 0;
        opacity: 0.15;
      }
    }
  }

  .status-area {
    min-width: $min-width;
  }

  main {
    background: linear-gradient(to bottom, $bg-color, $bg-color) no-repeat 0 200px;
    max-width: $page-width;
    min-width: $min-width;
    min-height: 100vh;
    margin: - $main-offset auto 0;
    padding: calc(#{$main-offset} + 1rem) .75rem 1rem;
  }

  .modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;

    &__overlay {
      background: #000;
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }

    &__message {
      @include drop-shadow;

      font-size: 1rem;
      color: #fff;
      background: #000;
      border: 2px solid $orange;
      border-radius: 4px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: .75rem 2rem;
    }

  }
</style>
