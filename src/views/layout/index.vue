<script setup lang="ts" name="Layout">
/**
 *@html5新增的语义化标签
 *@aside	定义文章。
 *@figcaption	定义<figure> 元素的标题。
 *@figure	规定自包含内容，比如图示、图表、照片、代码清单等。
 *@footer	定义文档或节的页脚。
 *@header	规定文档或节的页眉。
 *@main	规定文档的主内容。
 *@mark	定义重要的或强调的文本。
 *@nav	定义导航链接。
 *@section	定义文档中的节。
 *@summary	定义 <details> 元素的可见标题。
 *@details	定义用户能够查看或隐藏的额外细节。
 *@time	定义日期/时间。
 */
import BasicTopHeader from './components/basic-top-header/index.vue'
import BasicTopNav from './components/basic-top-nav/index.vue'
</script>

<template>
  
  <BasicTopHeader />
  <BasicTopNav />
  
</template>

<style lang="scss" scoped>

</style>