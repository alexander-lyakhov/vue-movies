<template>
  <div>
    <div class="title">
      Search movie
    </div>

    <div class="query">
      <input type="text" class="query-input" ref="query-input" v-model.trim="searchQuery" @keydown.enter="setSearch">
      <a class="query-clear" href="#" @click.prevent="clearSearch">+</a>
    </div>

    <div class="controls">
      <span class="search-by">Search by</span>

      <radio-selector class="drop-shadow">
        <radio-item name="searchBy" v-model="searchBy" val="title" label="Title" :checked="searchBy === 'title'" />
        <radio-item name="searchBy" v-model="searchBy" val="genres" label="Genre" :checked="searchBy === 'genres'"/>
      </radio-selector>

      <a class="button btn-search lg" href="#" @click="setSearch">Search</a>
    </div>
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields';
import { radioItem, radioSelector } from '@/components/radio';

export default {
  name: 'SearchPanel',

  components: {
    radioSelector,
    radioItem,
  },

  data() {
    return {
      searchQuery: '',
    };
  },

  mounted() {
    this.$refs['query-input'].focus();
  },

  watch: {
    search(val) {
      this.searchQuery = val;
    },

    '$route'(to, from) {
      if (to.name === 'home') {
        this.searchBy = to.query.searchBy || 'title';
        this.search = to.query.search || '';
      }
    }
  },

  computed: {
    ...mapFields('movies', ['searchBy', 'search', 'sortBy', 'sortOrder']),
  },

  methods: {
    setSearch() {
      this.$store.commit('movies/SET_SEARCH', this.searchQuery);
    },

    clearSearch() {
      this.searchQuery = '';
      this.setSearch();
      this.$refs['query-input'].focus();
    },
  },
};
</script>

<style lang="scss" scoped>

$label-color: #cdcdcd;
$cross-color: #a8a8a8;
$cross-hover-color: #e0e0e0;

.title {
  font: 1.25rem $font-primary;
  color: $label-color;
  padding: .5rem 0;
}

.query {
  background: #000;
  border-bottom: 2px solid $orange;
  display: flex;
  width: 100%;
  padding: .25rem 0.5rem;

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
    color: $cross-color;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 100%;
    transform: rotate(45deg);

    &:hover {
      color: $cross-hover-color;
    }
  }
}
.controls {
  font: 1.25rem $font-primary;
  color: $label-color;
  height: 4.5rem;
  display: flex;
  align-items: center;
  margin-top: auto;

  .search-by, .search-in, .sort-by, .sort-order {
    margin-right: .5rem;
  }

  .search-in {
    color: #048;
  }

  .radio-selector {
    margin-right: 2rem;
  }

  > .btn-search {
    margin: 0 0 0 auto;
  }
}
</style>
