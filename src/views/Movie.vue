<template>
  <page-layout class="movie-details">
    <template #header>
      <div class="page-role">Movie Details</div>
      <div class="controls">
        <router-link class="button btn-search lg" to="/">Back to Search</router-link>
      </div>
    </template>

    <template #main>
      <div class="movie-info" v-if="showInfo">
        <h2 class="title">{{info.title}}</h2>
        <h3 :class="{'hidden': !info.tagline}" class="tagline">{{info.tagline}}</h3>
        <div class="poster">
          <img :src="info.poster_path" />
        </div>
        <div class="details">
          <div class="row">
            <div class="label">Rating:</div>
            <div class="value">{{info.vote_average}}</div>
          </div>
          <div class="row">
            <div class="label">Date:</div>
            <div class="value">{{info.release_date|year}} year</div>
          </div>
          <div class="row">
            <div class="label">Duration:</div>
            <div class="value">{{info.runtime}} min</div>
          </div>
          <div class="row">
            <div class="label">Genre</div>
            <div class="value">{{ (info.genres || []).join(', ') }}</div>
          </div>
          <div class="row">
            <div class="overview">{{info.overview}}</div>
          </div>
        </div>
      </div>
    </template>
  </page-layout>
</template>

<script>

import pageLayout from './page-layout';
import api from '@/api';

export default {
  name: 'movie-details',

  components: {
    pageLayout,
  },

  data() {
    return {
      info: {},
      showInfo: false
    }
  },

  beforeRouteLeave(to, from, next) {
    this.info = {};
    this.showInfo = false;
    next();
  },

  created() {
    this.getMovieInfo(this.$route.params.id)
  },

  watch: {
    '$route' (to, from) {
      if (to.params.id) {
        this.getMovieInfo(to.params.id);
      }
    }
  },

  filters: {
    year(val) {
      if (val) {
        return val.split('-')[0];
      }

      return '';
    }
  },

  methods: {
    getMovieInfo(id) {
      api.getMovieById(id).then(res => {
        this.info = res.data;
        this.showInfo = true;
      })
    }
  }
};
</script>


<style lang="scss" scoped>
  .page-role {
    font-size: 4rem;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    margin: 1.5rem 0 0 0;
    opacity: 0.15;
  }

  h2.title {
    font-family: inherit;
    font-weight: normal;
    font-size: 2.5rem;
    color: $orange;
    text-shadow: 0 2px 2px rgba(0, 0, 0, .5);
    line-height: 3rem;
    text-align: center;
    padding: .75rem 0;
  }

  h3.tagline {
    font-size: 1.25rem;
    color: $middle-grey;
    background: #f0f0f0;
    text-align: center;
    margin: 0.25rem 0 1.5rem 0;
    padding: .25rem 0;
    @include drop-shadow;

    &.hidden {
      margin: 0 0 1rem 0;
      padding: 0;
    }
  }

  .controls {
    height: 4.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
  }

  .movie-info {
    color: #000;
    background: #fff;
    padding: .5rem;
    overflow: hidden;

    .poster {
      width: 300px;
      float: left;
      img {
        width: 100%;
      }
    }
    .details {
      margin-left: 300px;
      padding: 0 0 0 1.5rem;

      .row {
        font: 1.25rem $font-primary;
        color: $dark-grey;
        display: flex;
        padding: .5rem 0;

        &:not(:last-child) {
          border-bottom: 1px solid $light-grey;
        }
        .value {
          color: #fff;
          background: #000;
          border-radius: 3px;
          padding: 0.25rem .5rem;
          margin-left: auto;

          span {
            color: #fff;
            background: #000;
            border-radius: 3px;
            padding: 0.25rem .5rem;
          }
        }
      }
      .title {
        font: 2.5rem $font-primary;
        color: #fff;
        padding: 0 0 1rem 0;
        width: 100%;
        text-align: center;
      }
      .overview {
        font-size: 1.125rem;
        font: 1rem verdana, helvetica;
        color: #000;
        text-align: justify;
      }
    }
  }
</style>
