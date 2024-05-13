<template>
  <div class="gallery">
    <gallery-item v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<script>
import GalleryItem from './GalleryItem.vue';

export default {
  components: {
    GalleryItem
  },
  data() {
    return {
      items: [
        { name: '商品1', price: '$10', imageUrl: 'url_to_your_image_1' },
        { name: '商品2', price: '$20', imageUrl: 'url_to_your_image_2' },
         { name: '商品3', price: '$10', imageUrl: 'url_to_your_image_1' },
         { name: '商品4', price: '$20', imageUrl: 'url_to_your_image_2' },
         { name: '商品5', price: '$10', imageUrl: 'url_to_your_image_1' },
        { name: '商品6', price: '$20', imageUrl: 'url_to_your_image_2' },
         { name: '商品7', price: '$10', imageUrl: 'url_to_your_image_1' },
         { name: '商品8', price: '$20', imageUrl: 'url_to_your_image_2' },
          { name: '商品9', price: '$10', imageUrl: 'url_to_your_image_1' },
                 { name: '商品10', price: '$20', imageUrl: 'url_to_your_image_2' },
                  { name: '商品11', price: '$10', imageUrl: 'url_to_your_image_1' },
                  { name: '商品12', price: '$20', imageUrl: 'url_to_your_image_2' },

      ]
    }
  }
}
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap; /* 多行布局，每行四个商品 */
}
</style>
