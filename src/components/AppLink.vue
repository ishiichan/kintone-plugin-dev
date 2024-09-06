<template>
  <div class="portal-app-link-area">
    <ul class="portal-app-link-list" id="portal-app-link-list">
      <!-- <li>
          <div>
            <img src="../assets/user1.jpg" alt="1" />
            <p id="a">0%</p>
            <progress id="myProgress" value="0" max="100"></progress>
          </div>
          <img src="../assets/user1.jpg" alt="2" />
          <img src="../assets/user1.jpg" alt="3" />
          <img src="../assets/user1.jpg" alt="4" />
        </li>
        <li>
          <img src="../assets/user1.jpg" alt="5" />
          <img src="../assets/user1.jpg" alt="6" />
          <img src="../assets/user1.jpg" alt="7" />
          <img src="../assets/user1.jpg" alt="8" />
        </li> -->
    </ul>
  </div>
  <br />
</template>

<script>
export default {
  name: "AppLink",
};
</script>

<style scoped>
.portal-app-link-list {
  list-style: none;
  display: flex;
  margin: 20px;
  padding: 20px;
  gap: 6px 35px;
}
.portal-app-link-list li {
  display: flex;
  padding: 20px;
  margin: 20px;
}
.portal-app-link-list img {
  padding: 1.5% 5%;
  width: 10%;
}
</style>
