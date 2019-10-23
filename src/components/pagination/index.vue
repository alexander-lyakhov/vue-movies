<template>
  <ul class="pagination noselect" v-if="isVisible" @click="paginationClick">
    <li class="prev" :class="{hidden: value === 1}" @click.stop="prev"> < </li>

    <li :class="{current: value === 1}">1</li>
    <template v-if="condition === 1">
      <li :class="{current: value === item}" v-for="item in range" :key="item" >{{item}}</li>
    </template>
    <template v-else-if="condition === 2">
      <li :class="{current: value === item}" v-for="item in range" :key="item" >{{item}}</li>
      <li class="dots">...</li>
    </template>
    <template v-else-if="condition === 3">
      <li class="dots">...</li>
      <li :class="{current: value === item}" v-for="item in range" :key="item" >{{item}}</li>
    </template>
    <template v-else>
      <li class="dots">...</li>
      <li :class="{current: value === item}" v-for="item in range" :key="item" >{{item}}</li>
      <li class="dots">...</li>
    </template>
    <li :class="{current: value === totalPages}">{{totalPages}}</li>

    <li class="next" :class="{hidden: value === totalPages}" @click.stop="next"> > </li>
  </ul>
</template>

<script>

export default {
  name: 'pagination',

  props: {
    totalItems: {
      type: Number,
      default: 100,
      required: true,
    },

    itemsPerPage: {
      type: Number,
      default: 24,
    },

    maxButtons: {
      type: Number,
      default: 7,
    },

    value: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      totalPages: 0,
      totalButtons: 0,
    };
  },

  created() {
    this.$watch('totalItems',
      (newVal, oldVal) => this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage),
      { immediate: true });

    this.totalButtons = this.$props.maxButtons < 5 ? 5 : this.$props.maxButtons;
  },

  watch: {
    value(newVal, oldVal) {
      this.changePage(newVal);
    },
  },

  computed: {
    condition() {
      const { totalPages, totalButtons } = this.$data;

      // 1 2 3 4 5 6 7
      if (totalPages <= totalButtons) {
        return 1;
      }

      // 1 2 3 4 5 ... 7
      if (totalPages > totalButtons && this.value <= Math.ceil(totalButtons / 2)) {
        return 2;
      }

      // 1 ... 5 6 7 8 9
      if (totalPages > totalButtons && (totalPages - this.value) < (totalButtons >> 1)) {
        return 3;
      }

      // 1 ... 4 5 6  ... 9
      return 4;
    },

    range() {
      const { totalPages, totalButtons } = this.$data;

      let start = 0; let
        length = 0;

      switch (this.condition) {
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
          start = this.value - ((totalButtons - 4) >> 1);
          length = totalButtons - 4;
      }

      if (length > 0) {
        return [...Array(length).keys()].map(el => start + el);
      }

      return [];
    },

    isVisible() {
      return this.totalPages > 1;
    },
  },
  methods: {
    paginationClick(e) {
      const page = parseInt(e.target.textContent);

      if (!isNaN(page)) {
        this.changePage(page);
      }
    },

    prev() {
      this.changePage(this.value - 1);
    },

    next() {
      this.changePage(this.value + 1);
    },

    changePage(newPageNumber) {
      this.$emit('input', newPageNumber);
    },
  },
};
</script>

<style lang="scss" scoped>

$button-border-color: #808080;
$button-bg: rgba(0, 0, 0, 0.25);

.pagination {
  display: flex;

  li {
    font: 16px verdana, helvetica;
    background: $button-bg;
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
      background: #000;
      border: 2px solid $orange;
    }

    &.prev, &.next {
      width: 48px;
    }

    &.dots {
      color: $text-color;
      background: #000;
      cursor: default;
    }

    &.hidden {
      visibility: hidden;
    }
  }
}
</style>
