<template>
  <div class="portal-base">
    <p class="portal-menu-title">{{ title }}</p>
    <div class="portal-link-area">
      <applink v-if="title === '提出者一覧'"></applink>
      <Spacelink v-if="title === 'Spaces'"></Spacelink>
    </div>
  </div>
</template>

<script>
import applink from "./AppLink.vue";
import spacelink from "./SpaceLink.vue";

export default {
  name: "BaseLayout",
  props: {
    title: String,
  },
  components: {
    applink,
    spacelink,
  },
};
</script>
<style scoped>
.portal-base {
  width: 80%;
  margin: 0 auto 3% auto;
}
.portal-menu-title {
  text-align: left;
  font-size: 2.5em;
  margin: 0;
}
.portal-link-area {
  background-color: #fff;
  height: 300px;
  border-radius: 10px;
}

section .card {
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
</style>
