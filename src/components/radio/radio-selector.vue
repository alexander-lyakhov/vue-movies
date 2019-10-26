<template>
  <div class="radio-selector" :class="{disabled: disabled}">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'radio-selector',

  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary-color: $orange;
  $secondary-color: $cyan;
  $bg-color: #282828;
  $bg-color--disabled: #404040;
  $border-color--disabled: #808080;
  $text-color--disabled: #c0c0c0;

  .radio-selector {
    background: $bg-color;
    border: 2px solid $primary-color;
    border-radius: 4px;
    box-sizing: content-box;
    display: inline-block;

    &.drop-shadow {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    }

    &::v-deep label {
      font-family: inherit;
      font-size: 1rem;
      user-select: none;
      cursor: pointer;

      [type="radio"] {
        display: none;

        & + span {
          border: 2px solid $bg-color;
          border-radius: 4px;
          text-align: center;
          display: inline-block;
          min-width: 80px;
          padding: .25rem 1rem;
        }

        &:checked + span {
          color: #000;
          background: $primary-color;
        }
      }
    }

    &::v-deep.small {
      label {
        [type="radio"] {
          & + span {
            min-width: 48px;
            padding: 2px 4px;
          }
        }
      }
    }

    &::v-deep.disabled {
      background: $bg-color--disabled;
      border: 2px solid $border-color--disabled;

      label {
        cursor: default;

        [type="radio"] {
          & + span {
            border: 2px solid $bg-color--disabled;
          }

          &:checked + span {
            color: $text-color--disabled;
            background: $border-color--disabled;
          }
        }
      }
    }
  }
</style>
