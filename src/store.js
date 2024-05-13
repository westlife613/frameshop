import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  cart: [],
};

const mutations = {
  addToCart(state, product) {
    const productCopy = JSON.parse(JSON.stringify(product)); // 对product参数进行深拷贝
        state.cart.push(productCopy);
  },
};

const getters = {
  cartItems(state) {
    return state.cart;
  },
};

const actions = {
  addToCartAsync({ commit }, product) {
    // 模拟异步操作，比如向服务器发送请求
    setTimeout(() => {
      commit('addToCart', product);
    }, 500);
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});

export default store;
