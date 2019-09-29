<template>
  <ul class="pagination noselect" @click="paginationClick">
    <li class="prev" :class="{hidden: currentPage === 1}" @click.stop="prev"> < </li>

    <li :class="{current: currentPage === 1}">1</li>
    <template v-if="condition === 1">
      <li :class="{current: currentPage === item}" v-for="item in range" :key="item" >{{item}}</li>
    </template>
    <template v-else-if="condition === 2">
      <li :class="{current: currentPage === item}" v-for="item in range" :key="item" >{{item}}</li>
      <li class="dots">...</li>
    </template>
    <template v-else-if="condition === 3">
      <li class="dots">...</li>
      <li :class="{current: currentPage === item}" v-for="item in range" :key="item" >{{item}}</li>
    </template>
    <template v-else>
      <li class="dots">...</li>
      <li :class="{current: currentPage === item}" v-for="item in range" :key="item" >{{item}}</li>
      <li class="dots">...</li>
    </template>
    <li :class="{current: currentPage === totalPages}">{{totalPages}}</li>

    <li class="next" :class="{hidden: currentPage === totalPages}" @click.stop="next"> > </li>
  </ul>
</template>

<script>

export default {
  name: 'pagination',

  props: {
    totalItems: {
      type: Number,
      default: 100,
      required: true
    },

    itemsPerPage: {
      type: Number,
      default: 24
    },

    maxButtons: {
      type: Number,
      default: 7,
    },
  },

  data() {
    return {
      totalPages: 0,
      currentPage: 1,
      totalButtons: 0,
    }
  },

  created() {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.totalButtons = this.$props.maxButtons < 5 ? 5 : this.$props.maxButtons;
  },

  computed: {
    condition() {
      let {currentPage, totalPages, totalButtons} = this.$data;

      // 1 2 3 4 5 6 7
      if (totalPages <= totalButtons) {
        return 1;
      }

      // 1 2 3 4 5 ... 7
      if (totalPages > totalButtons && currentPage <= Math.ceil(totalButtons / 2)) {
        return 2;
      }

      // 1 ... 5 6 7 8 9
      if (totalPages > totalButtons && (totalPages - currentPage) < (totalButtons >> 1)) {
        return 3;
      }

      // 1 ... 4 5 6  ... 9
      return 4;
    },

    range() {
      let {currentPage, totalPages, totalButtons} = this.$data;

      let start = 0, length = 0;

      switch(this.condition) {
        case 1:
          start = 2;
          length = totalPages - 2;
          break;
        case 2:
          start = 2;
          length = totalButtons - 3;
          break;
        case 3:
          start = totalPages - totalButtons + 3;
          length = totalButtons - 3;
          break;
        default:
          start = currentPage - ((totalButtons - 4) >> 1);
          length = totalButtons - 4;
      }

      return [...Array(length).keys()].map(el => start + el);
    }
  },
  methods: {
    paginationClick(e) {
      let currentPage = parseInt(e.target.textContent);

      if (!isNaN(currentPage)) {
        this.currentPage = currentPage;
      }
    },

    prev() {
      this.currentPage--;
    },

    next() {
      this.currentPage++;
    }
  },
}
</script>

<style lang="scss" scoped>

$button-color: $dark-gray;
$button-border-color: $middle-gray;

.pagination {
  display: flex;

  li {
    font: 16px verdana, helvetica;
    background: $button-color;
    border: 1px solid $button-border-color;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 2px;
    cursor: pointer;

    &.current {
      background: $dark-gray-minus-10;
      border: 2px solid $orange;
    }

    &.prev, &.next {
      width: 48px;
    }

    &.dots {
      color: $text-color;
      background: $button-color;
      cursor: default;
    }
  }
}
</style>