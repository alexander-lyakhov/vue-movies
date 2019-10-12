/* eslint-disable */

<template>
  <div class="sort-panel">
    <span class="sort-by">Sort by</span>

    <radio-selector class="small">
      <radio-item name="sortBy" v-model="sortBy" val="title" label="Title" checked />
      <radio-item name="sortBy" v-model="sortBy" val="release_date" label="Date" />
    </radio-selector>

    <span class="sort-order">Sort order</span>

    <radio-selector class="small">
      <radio-item name="sortOrder" v-model="sortOrder" val="asc" label="A-Z" checked />
      <radio-item name="sortOrder" v-model="sortOrder" val="desc" label="Z-A" />
    </radio-selector>
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields';
import { radioItem, radioSelector } from '@/components/radio';

export default {
  name: 'sort-panel',

  components: {
    radioSelector,
    radioItem,
  },

  computed: {
    ...mapFields('movies', ['sortBy', 'sortOrder'])
  }
}
</script>

<style lang="scss" scoped>

.sort-panel {
  font: 1.25rem $font-primary;
  margin: 0 0 0 auto;

  .search-by, .sort-by, .sort-order {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
    margin-right: .5rem;
  }

  .radio-selector:not(:last-child) {
    margin-right: 2rem;
  }
}
</style>
