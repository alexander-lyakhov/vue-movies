/* eslint-disable */

<template>
  <div class="search">
    <div class="title">
      Search movie
    </div>

    <div class="query">
      <input type="text" class="query-input" ref="query-input" v-model.trim="search" @keydown.enter="setSearch">
      <a class="query-clear" href="#" @click.prevent="clearSearch">+</a>
    </div>

    <div class="controls">
      <span class="search-by">Search by</span>

      <radio-selector>
        <radio-item name="searchBy" v-model="searchBy" val="title" label="Title" checked />
        <radio-item name="searchBy" v-model="searchBy" val="genres" label="Genre" />
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

  data() {
    return {
      search: ''
    }
  },

  mounted() {
    this.$refs['query-input'].focus();
  },

  computed: {
    ...mapFields('movies', ['searchBy', 'sortBy', 'sortOrder'])
  },

  methods: {
    setSearch() {
      this.$store.commit('movies/SET_SEARCH', this.search);
    },

    clearSearch() {
      this.search = '';
      this.setSearch();
      this.$refs['query-input'].focus();
    }
  }
}
</script>

<style lang="scss" scoped>

.search {
  background: $dark-grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: $page-width;
  height: 100%;
  margin: auto;
  padding: 0 1rem;

  .title {
    font: 1.25rem $font-primary;
    color: $light-grey-plus-5;
    padding: .5rem 0;
  }

  .query {
    background: #000;
    border-bottom: 2px solid $orange;
    display: flex;
    width: 100%;
    padding: .25rem 0.5rem;
    //padding-right: 48px;

    &-input {
      font: 1.5rem $font-primary;
      color: $text-color;
      background: #000;
      border: none;
      outline: none;
      width: 100%;
      height: 36px;
    }

    &-clear {
      font: 2rem $font-primary;
      color: $light-grey-minus-10;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 100%;
      transform: rotate(45deg);

      &:hover {
        color: $light-grey-plus-10;
      }
    }
  }
  .controls {
    font: 1.25rem $font-primary;
    color: $light-grey-plus-5;
    height: 5rem;
    display: flex;
    align-items: center;

    .search-by, .sort-by, .sort-order {
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
