<script lang="ts" setup name="BasicTopNav">
const topNav = [
  { title: '首页', href: '#' },
  { title: '美食', href: '#' },
  { title: '餐厨', href: '#' },
  { title: '艺术', href: '#' },
  { title: '电器', href: '#' },
  { title: '居家', href: '#' },
  { title: '洗护', href: '#' },
  { title: '孕婴', href: '#' },
  { title: '服装', href: '#' },
  { title: '杂货', href: '#' },
]
</script>

<template>
  <nav class="bg-gray-300">
    <div class="flex items-center container mx-auto px-36">
      <h1 class="logo mr-9"></h1>
      <ul class="grid grid-cols-10 flex-1">
        <li v-for="(item, index) in topNav" :key="index"><a :href="item.href">{{ item.title }}</a></li>
      </ul>
      <div class="search-box relative w-44 h-8 bg-red-300">
        <input type="text" placeholder="搜喜欢的商品" class="w-full h-full focus:outline-none shadow   pl-6 text-666" />
      </div>
      <div class="text-center w-12">
        <i class="iconfont icon-cart text-xl"></i>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.logo {
  width: 200px;
  height: 132px;
  // background连写: 颜色 图片 是否重复 图片位置(可用像素及方位名称, 方位可选: top right left bottom center) / 图片宽高 以及下一张背景图及其属性
  background: url('@/assets/imgs/logo.png') no-repeat center / 100%;
}
.search-box::before {
  @include pseudoIconfont();
  content: '\e6c7';
  position: absolute;
  top: calc(50% - 12px);
  left: 4px;
  font-size: 18px;
}
</style>