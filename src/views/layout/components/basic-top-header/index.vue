<script lang="ts" setup name="BasicTopHeader">
  const headerNav = [
    { title: '请先登录', href: '#' },
    { title: '免费注册', href: '#' },
    { title: '我的订单', href: '#' },
    { title: '会员中心', href: '#' },
    { title: '帮助中心', href: '#' },
    { title: '关于我们', href: '#' },
    { title: '手机版', href: '#' },
  ]
</script>

<template>
  <header class="bg-dark-gray primary">
    <div class="container mx-auto px-36 py-4 flex justify-between text-cd text-sm">
      <div class="user">欢迎你，宇神</div>
      <ul class="flex divide-x-2 divide-gray-400">
        <li v-for="item in headerNav" :key="item.title" class="px-4 last-li  border-666">
          <a :href="item.href" class="">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.last-li:last-child a::before {
  content: '\e633';
  @include pseudoIconfont()
}
</style>