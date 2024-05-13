<template>
  <div>
      <div class="row">
        <!-- 第一列：产品信息 -->
        <div class="col-md-4 text-center" >
          <h3>Cart Items</h3>

        </div>

        <!-- 第二列：用户信息 -->
        <div class="col-md-4 text-center" >
          <h3>Guest Checkout</h3>
          <v-text-field v-model="receiverName" label="Full name"></v-text-field>
          <v-text-field v-model="email" label="Email Address"></v-text-field>
          <v-text-field v-model="receiverAddress" label="Postal Address"></v-text-field>
          <v-text-field v-model="receiverPhone" label="Phone Number"></v-text-field>
          <v-text-field v-model="comment" label="Comment"></v-text-field>
        </div>

        <!-- 第三列：支付信息 -->
        <div class="col-md-4 text-center" >
          <h3>Payment</h3>

          <p>Direct Deposit/Bank Transfer：</p>
          <p>Account name:</p>
          <p>Account number:</p>
          <p>BSB:</p>
          <v-btn @click="submit">Submit Order</v-btn>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import {
		generateOrder
	} from '@/api/order.js';
	import axios, * as others from 'axios';
	import eventBus from '@/eventBus.js'
   export default {
     data() {
       return {
         totalAmount: '',
         comment: '',
         receiverPhone: '',
         receiverName: '',
         receiverAddress: '',
         cartProducts: [
                                {
                                    "quantity": "2",
                                    "productPic": "222A",
                                    "isFromGallery": "1",
                                    "price": 50.00,
                                    "productParam": {
                                        "productType": 2,
                                        //   3种产品，0:photo p，1：canvas,"2fap"
                                        "surfaceTypeId": 0,
                                        //   photo paper type : 0;luster,1:matte
                                        "framing": 0,
                                        "stretch": 0,
                                        "width": 8,
                                        "height": 10,
                                        "unit": "inch"
                                    },
                                    "note": "this is note"
                                },
                                 {
                                    "quantity": "3",
                                    "productPic": "111B",
                                    "isFromGallery": "1",
                                    "price": 2.00,
                                    "productParam": {
                                        "productType": 1,
                                        //   3种产品，0:photo p，1：canvas,"2fap"
                                        "surfaceTypeId": 0,
                                        //   photo paper type : 0;luster,1:matte
                                        "framing": 0,
                                        "stretch": 0,
                                        "width": 8,
                                        "height": 10,
                                        "unit": "inch"
                                    },
                                    "note": "this is note"
                                }

]
       };
     },
     computed: {
        ...mapGetters([
          'g',
        ]),
      },


     methods: {
       submit() {
         axios({
           method: 'post',
           url: 'http://localhost:8085/order/generateOrder',
           data: {
             totalAmount: this.totalAmount,
             comment: this.comment,
             receiverPhone: this.receiverPhone,
             receiverName: this.receiverName,
             receiverAddress: this.receiverAddress,
             cartProducts: this.cartProducts


           },
           responseType: 'json'
         }).then(response => {
           // 处理服务器响应
           console.log(response);
         }).catch(error => {
           // 处理错误
           console.error(error);
         });
       }
     }
   };
   </script>
