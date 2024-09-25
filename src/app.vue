<script>
//import Home from "@/pages/home.component.vue";
//import Home from "./pages/home.component.vue";
import UserProfile from "./components/user-profile.component.vue";
import LatestCases from "./components/lastest-cases.component.vue";
export default {
  name: "app",
  components: {LatestCases, UserProfile},
  title: "App",
}
</script>

<template>

  <user-profile></user-profile>
  <latest-cases></latest-cases>
</template>

<style scoped>

</style>
