<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h2 {
  font-weight: 400;
  border-bottom: 0;
}
</style>
