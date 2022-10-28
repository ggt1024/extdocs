<template>
  <h2>铂金会员</h2>
  <div class="home-ad-container">
    <div v-for="item in adList" :key="item" class="home-ad-content">
      <a :href="item.url">
        <img :src="item.src" />
        <p>{{ item.title }}</p>
      </a>
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
.home-ad-container {
  text-align: center;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-radius: 1rem;
  background: #f4f4f4;
}
h2 {
  display: flex;
  justify-content: center;
  width: 10rem;
  margin-left: auto;
  margin-right: auto;
}
.home-ad-content {
  width: 25%;
}
</style>
