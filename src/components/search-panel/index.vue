/* eslint-disable */

<template>
  <div class="search">
    <div class="title">
      Find movie
    </div>

    <div class="query">
      <input type="text" class="query-input">
    </div>

    <div class="controls">
      <span class="sort-by">Sort by</span>

      <radio-selector>
        <radio-item name="sortBy" v-model="sortBy" val="title" label="Title" checked />
        <radio-item name="sortBy" v-model="sortBy" val="release_date" label="Date" />
      </radio-selector>

      <span class="sort-order">Sort order</span>

      <radio-selector>
        <radio-item name="sortOrder" v-model="sortOrder" val="asc" label="ASC" checked />
        <radio-item name="sortOrder" v-model="sortOrder" val="desc" label="DESC" />
      </radio-selector>

      <a class="button btn-search lg" href="#">Search</a>
    </div>
  </div>
</template>

<script>

import { radioItem, radioSelector } from '@/components/radio';
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'SearchPanel',

  components: {
    radioSelector,
    radioItem
  },

  computed: {
    ...mapFields('movies', ['sortBy', 'sortOrder'])
  }
}
</script>

<style lang="scss" scoped>

.search {
  background: $dark-gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: $page-width;
  height: 100%;
  margin: auto;
  padding: 0 1rem;

  .title {
    font: 1.25rem $font-primary;
    color: $light-gray-plus-5;
    padding: .5rem 0;
  }

  .query {
    background: #000;
    border-bottom: 2px solid $orange;
    width: 100%;
    padding: .25rem 0.5rem;

    .query-input {
      font: 1.5rem $font-primary;
      color: $text-color;
      background: #000;
      border: none;
      outline: none;
      width: 100%;
      height: 36px;
    }
  }
  .controls {
    font: 1.25rem $font-primary;
    color: $light-gray-plus-5;
    height: 5rem;
    display: flex;
    align-items: center;

    .sort-by, .sort-order {
      margin-right: .5rem;
    }

    .radio-selector {
      margin-right: 2rem;
    }

    > .btn-search {
      margin: 0 0 0 auto;
    }
  }
}
</style>
