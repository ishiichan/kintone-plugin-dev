<template>
  <baselayout title="提出者一覧" />
</template>

<script>
import baselayout from "./components/BaseLayout.vue";

export default {
  name: "App",
  components: {
    baselayout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
