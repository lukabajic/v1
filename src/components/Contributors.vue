<template>
  <button @click="getContributors" >View Contibutors</button>
  <div :key="contributor.id" v-for="contributor in contributors">
    <div class="contributor">
      <img :src="contributor.avatar_url" alt="" />
      <p>{{ contributor.login }}</p>
    </div>
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
  width: 80%;
  align-items: center;

  p {
    flex: 1;
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