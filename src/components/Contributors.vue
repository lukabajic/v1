<template>
  <button @click="getContributors">View Contibutors</button>
  <div
    :key="contributor.id"
    v-for="contributor in contributors"
    class="contributor"
  >
    <img :src="contributor.avatar_url" alt="avatar" />
    <p>{{ contributor.login }}</p>
  </div>
</template>

<script>
export default {
  name: "Contributors",
  data() {
    return {
      contributors: [],
    };
  },
  props: {
    repo: Object,
  },
  methods: {
    async getContributors() {
      const res = await fetch(this.repo.contributors_url);
      const data = await res.json();
      return (this.contributors = data);
    },
  },
};
</script>

<style lang="scss">
.contributor {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 5px 35px;
  //  width: 60%;
  // height: 60%;
  // align-items: center;
  // position: fixed;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // background-color: #2c3e50;
  // z-index: 2;
  // border: 2px solid #42b983;
  // border-radius: 10px;

  p {
    flex: .9;
    text-align: left;
    width: 50%;

  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}

button {
  background-color: #41b883;
  color: #35495e;
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
  }
}
</style>