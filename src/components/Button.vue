<template>
  <w-button :class="[isRight ? 'ml10' : '', 'ma1', 'pa3']" xl :shadow="true">{{
    text
  }}</w-button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    isRight: Boolean,
  },
};
</script>
