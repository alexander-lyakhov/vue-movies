<template>
  <page-layout class="movie-details">
    <template #header>
      <div class="page-role">About...</div>
      <div class="controls">
        <router-link class="button btn-search lg" to="/">Back to Search</router-link>
      </div>
    </template>

    <template #main>
      <div class="description">
        <p>The idea is to create a single page application, which will allow users to search the Movies DB database.</p>
        <p>Api Swagger documentation: <a href="http://react-cdp-api.herokuapp.com/api-docs" target="blank">http://react-cdp-api.herokuapp.com/api-docs</a></p>
        <p>Design documentation: <a href="https://epam.invisionapp.com/share/HCRLBL4465S#/screens/359419981" target="blank">https://epam.invisionapp.com/share/HCRLBL4465S#/screens/359419981</a></p>
        <p>There will be two pages: main page with search and a page with a particular film.</p>
      </div>
    </template>
  </page-layout>
</template>

<script>

import pageLayout from './page-layout';
import api from '@/api';

export default {
  name: 'about',

  components: {
    pageLayout,
  },

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

  .controls {
    height: 4.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
  }

  .description {
    font-size: 1.25rem;
    color: $dark-grey;
    background: #fff;
    padding: .5rem .5rem;

    p {
      background: #e8e8e8;
      padding: 0.5rem 1rem;

      a {
        color: #08c;

        &:hover {
          color: #c60;
        }
      }
    }
  }
</style>
