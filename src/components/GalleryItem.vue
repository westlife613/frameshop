<template>
  <div class="gallery-item">
    <img :src="item.imageUrl" alt="Product Image" @click="addToCart" :style="{ height: item.height + 'px', width: item.width + 'px' }">
    <div class="details">
      <h3 class="product-name">{{ item.name }}</h3>
      <p class="price">{{ item.price }}</p>
      <p class="stock">Stock: {{ item.stock }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    addToCart() {

      //或者调用 Vuex store 来更新购物车状态
      console.log('Item added to cart:', this.item);
    }
  }
}
</script>

<style scoped>
.gallery-item {
  display: inline-block;
  width: 25%;
  padding: 10px;
  box-sizing: border-box;
}

.gallery-item img {
  width: 100%;
  cursor: pointer;
}

.details {
  text-align: center;
}

.product-name {
  font-size: 14px;
}

.price {
  font-size: 12px;
}

.stock {
  font-size: 12px;
}
</style>
