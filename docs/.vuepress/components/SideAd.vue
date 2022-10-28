<template>
  <div class="side-container">
    <h2>特别鸣谢</h2>
    <div class="ad-container">
      <div v-for="item in adList" :key="item" class="side-ad-content">
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
.side-container {
  text-align: center;
  width: 10%;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 10px;
  top: 20%;
}
.ad-container {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
}
.side-ad-content {
  width: 33%;
}
.side-ad-content img {
  max-width: 80%;
}
@media screen and (max-width: 1300px) {
  .side-container {
    display: none;
  }
}
</style>
