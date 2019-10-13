<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  $primary-color: $orange;
  $w: 24px;
  $h: 24px;

  .radio-group {
    height: $h;
    position: relative;

    label {
      font-family: inherit;
      font-size: 1rem;
      height: $h;
      line-height: $h;
      display: inline-block;
      margin-right: 1rem;
      position: relative;
      top: -2px;
      user-select: none;
      cursor: pointer;

      [type="radio"] {
        display: none;

        & + span {
          margin-left: 2rem;

          &:before, &:after {
            content: ''  ;
            display: inline-block;
            border-radius: 10%;
            box-sizing: border-box;
            position: absolute;
          }

          &:before {
            background: transparent;
            border: 2px solid $primary-color;
            width: $w;
            height: $h;
            left: 0;
            top: 0;
          }
        }

        &:checked + span:after {
          background: $primary-color;
          width: $w / 2;
          height: $h / 2;
          left: $w / 4;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
    }
  }
</style>
