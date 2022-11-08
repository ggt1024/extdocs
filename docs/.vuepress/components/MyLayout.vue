<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import SideBottomAd from './SideBottomAd.vue'
</script>

<template>
  <ParentLayout>
    <template #sidebar-bottom>
      <SideBottomAd />
    </template>
    <template #page-bottom>
      <SideAd />
    </template>
  </ParentLayout>
</template>

<style lang="css">
</style>
