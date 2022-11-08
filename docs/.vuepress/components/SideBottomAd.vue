<template>
  <div class="sideBottom-container">
    <h2>特别鸣谢</h2>
    <div class="ad-container">
      <div v-for="item in adList" :key="item" class="sideBottom-ad-content">
        <a :href="item.url">
          <img :src="item.src" />
          <p>{{ item.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adList: [
        { title: 'chrome', src: '/assets/chrome_64x64.png', url: '' },
        { title: 'chrome', src: '/assets/edge_64x64.png', url: '' },
        { title: 'safari', src: '/assets/safari_64x64.png', url: '' },
        { title: 'firefox', src: '/assets/firefox_64x64.png', url: '' },
        { title: '360-secure', src: '/assets/360-secure_64x64.png', url: '' },
      ],
    }
  },
}
</script>
<style  scoped>
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
.sideBottom-container {
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  position: absolute;
  bottom: 1rem;
}
.ad-container {
  display: flex;
  flex-wrap: wrap;
}
.sideBottom-ad-content {
  width: 25%;
}
@media screen and (max-width: 959px) {
  .sideBottom-container {
    position: static;
    transform: scale(0.8);
    padding: 0;
  }
  .sideBottom-ad-content {
    width: 33.3%;
  }
}
</style>
