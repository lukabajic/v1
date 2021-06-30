<template>
  <div class="container" @click="hide">
    <div class="reposContainer" :key="repo.id" v-for="repo in repos">
      <Repo :repo="repo"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Repo from "../components/Repo.vue";
export default {
  name: "Home",
  components: {
    Repo,
  },
  computed:{
    ...mapState(['repos'])
  },
  methods: {
    ...mapMutations(['hide']),
    ...mapActions(['getRepos'])
  },
  created() {
    this.getRepos();
  },
};
</script>

<style lang="scss">
.container {
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 10px;

  @media screen and (max-width: 1024px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
  .reposContainer {
    border: 2px solid #41b883;
    border-radius: 5px;
    margin: 2px;
    display: flex;
    justify-content: center;
    background-color: #35495e;
    color: #41b883;
    width: 100%;
  }
}
</style>
