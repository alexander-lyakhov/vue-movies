/* eslint-disable */

<template>
  <div class="status-area">
    <div class="status-bar">
      <span class="found">Results found: {{total}}</span>
      <div class="sort-panel">
        <span class="sort-by">Sort by</span>

        <radio-selector class="small">
          <radio-item name="sortBy" v-model="sortBy" val="title" label="Title" checked />
          <radio-item name="sortBy" v-model="sortBy" val="release_date" label="Date" />
        </radio-selector>

        <span class="sort-order">Sort order</span>

        <radio-selector class="small">
          <radio-item name="sortOrder" v-model="sortOrder" val="asc" label="Asc" checked />
          <radio-item name="sortOrder" v-model="sortOrder" val="desc" label="Desc" />
        </radio-selector>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import { radioItem, radioSelector } from '@/components/radio';

export default {
  name: 'status-area',

  components: {
    radioSelector,
    radioItem,
  },

  computed: {
    ...mapState('movies', ['total']),
    ...mapFields('movies', ['sortBy', 'sortOrder'])
  }
}
</script>

<style lang="scss" scoped>

.status-area {
  font: 1rem $font-primary;
  color: $light-grey;
  background: $dark-grey-plus-5;
  width: 100%;

  .status-bar {
    display: flex;
    align-items: center;
    max-width: $page-width;
    margin: auto;
    padding: 0rem 1rem;
  }

  .sort-panel {
    font: 1.25rem $font-primary;
    margin: 0 0 0 auto;

    .search-by, .sort-by, .sort-order {
      margin-right: .5rem;
    }

    .radio-selector:not(:last-child) {
      margin-right: 2rem;
    }

  }
}
</style>
