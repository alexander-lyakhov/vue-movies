<template>
  <div class="radio-selector">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  $primary-color: $orange;
  $secondary-color: $cyan;

  .radio-selector {
    background: $dark-grey-minus-10;
    border: 2px solid $primary-color;
    border-radius: 4px;
    box-sizing: content-box;
    display: inline-block;

    &.drop-shadow {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    }

    label {
      font-family: inherit;
      font-size: 1rem;
      user-select: none;
      cursor: pointer;

      [type="radio"] {
        display: none;

        & + span {
          border: 2px solid $dark-grey-minus-10;
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

    &.small {
      //border: 2px solid #c0c0c0;
      label {
        [type="radio"] {
          & + span {
            min-width: 48px;
            padding: 2px 4px;
          }
        }
      }
    }
  }
</style>
