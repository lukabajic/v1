<template>
    <div>
      <img :src="repo.owner.avatar_url" alt="avatar"/>
      <h3>{{ repo.name }}</h3>
      <Contributors :repo="repo"/>
    </div>
</template>

<script>
import Contributors from './Contributors.vue';
export default {
  name: "Repo",
  props: {
    repo: Object,
  },
  components: {
    Contributors

  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: #35495e;
  width: 100%;
  border-radius: 5px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
}
h3 {
  color: #41b883;
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