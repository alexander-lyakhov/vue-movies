<template>
	<label>
		<input
			type="radio"
			:name="name"
			:checked="checked"
			:value="val"
			@input="fireInputEvent"
		/>
		<span>{{label}}</span>
	</label>
</template>

<script>

export default {
  name: 'RadioItem',

  props: {
    name: {
      type: String,
      default: 'group',
    },

    checked: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      default: 'Title',
    },

    val: {
      type: String,
      default: '',
    },
  },

  created() {
    this.checked && this.fireInputEvent();
  },

  methods: {
    fireInputEvent() {
      this.$emit('input', this.val);
    },
  },
};
</script>
