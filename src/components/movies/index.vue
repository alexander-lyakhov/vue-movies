/* eslint-disable */

<template>
	<div class="movies">
		<movie-item v-for="item in movies" :key="item.id" :movie="item" />
	</div>
</template>

<script>

import movieItem from './movie-item.vue';
import {mapState} from 'vuex';

export default {
	name: 'movies',

	components: {
		movieItem
	},

	created() {
		console.log('this.movies', this.movies)
	},

	computed: {
		...mapState(['movies'])
	}
}
</script>

<style lang="scss" scoped>
.movies {
	background: $middle-gray;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: .25rem;
}
</style>