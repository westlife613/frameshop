<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <div style="display: flex; align-items: center;">
            <input type="file" accept="image/*" @change="onChange" />
            <v-btn @click="openGalleryDialog">Choose from Gallery</v-btn>
          </div>
          <div id="preview">
            <img v-if="imageUrl" :src="imageUrl" width="220" height="320"/>
          </div>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">Custom Frame Design</p>
            <v-card-actions class="pa-0">
              <v-spacer></v-spacer>
              <v-rating v-model="rating" class="" background-color="warning lighten-3" color="warning" dense></v-rating>
            </v-card-actions>
           <h4>Product Type: </h4>
           <input type="radio" id="0" value="0" v-model="productType" />
           <label for="photopaper">Photo paper</label>
           <input type="radio" id="1" value="1" v-model="productType" />
           <label for="Canvas">Canvas</label>
           <input type="radio" id="2" value="2" v-model="productType" />
           <label for="FineArtPaper">Fine art paper</label>
           <h4>Framing:</h4>
           <input type="radio" id="1" value="1" v-model="framing" />
           <label for="Yes">Yes</label>
           <input type="radio" id="0" value="0" v-model="framing" />
           <label for="No">No</label>
           <h4>Surface Type:</h4>
           <input type="radio" id="0" value="0" v-model="surfaceTypeId" />
           <label for="METALLIC">Metallic</label>
           <input type="radio" id="1" value="1" v-model="surfaceTypeId" />
           <label for="MATTE_SMOOTH">Matte Smooth</label>
           <div style="font-weight: bold;">Stretch:  </div>
           <input type="radio" id="1" value="1" v-model="stretch" />
           <label for="Yes">Yes</label>
           <input type="radio" id="0" value="0" v-model="stretch" />
           <label for="No">No</label>
           <div id="dimensions-column" class="column">
             <div class="dimensions__sizing">
               <div>
                 <h4> Unit:</h4>
                 <input type="radio" id="cm" value="cm" v-model="unit">
                 <label for="cm">cm</label>
                 <input type="radio" id="inch" value="inch" v-model="unit">
                 <label for="inch">inch</label>
                 <h4>Image Size</h4>
                 <div v-if="unit === 'cm'">
                   <div>HEIGHT &nbsp&nbsp&nbsp&nbsp    WIDTH :</div>
                   <input type="number" v-model="height" min="0" max="999" style="border: 1px solid black;">
                   <label> X </label>
                   <input type="number" v-model="width" min="0" max="999" style="border: 1px solid black;">
                   <label>(cm)</label>
                   <select v-model="selectedSize" @change="setSize">
                     <option v-for="size in cmSizes" :value="size">{{ size }}</option>
                   </select>
                 </div>
                 <div v-else>
                   <div>HEIGHT &nbsp&nbsp&nbsp&nbsp    WIDTH :</div>
                   <input type="number" v-model="height" min="0" max="999" style="border: 1px solid black;">
                   <label> X </label>
                   <input type="number" v-model="width" min="0" max="999" style="border: 1px solid black;">
                   <label>(inch)</label>
                   <select v-model="selectedSize" @change="setSize">
                     <option v-for="size in inchSizes" :value="size">{{ size }}</option>
                   </select>
                 </div>
               </div>
             </div>
           </div>
           <div> <h4>Quantity</h4></div>
            <v-text-field outlined style="width:100px" :value="1" dense></v-text-field>
            <v-btn class="primary white--text" outlined tile dense @click="handleAddToCart"><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn>
            <v-btn class="ml-4" @click="getFrame">GET FRAME</v-btn>
             <v-btn class="ml-4" @click="getColor">GET COLOR</v-btn>
             <v-btn class="ml-4" @click="priceCal">PRICE CALCULATE</v-btn>

          </div>
        </div>
      </div>
    </v-container>
    <v-dialog v-model="galleryDialog" max-width="800">
      <v-card>
        <v-card-title>Gallery</v-card-title>
        <v-card-text>
          <div class="gallery">
            <div v-for="(item, index) in galleryItems" :key="index" class="gallery-item">
              <img :src="item.imageUrl" alt="Product Image" @click="selectImage(item)" :style="{ height: item.height + 'px', width: item.width + 'px' }">
              <div>{{ item.price }}</div>
              <v-btn @click="selectImage(item)">Select</v-btn>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeGalleryDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card  class="accent" >
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4 hidden-sm-only" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">phone number section</h3>
                <p class="font-weight-thin">online support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productType: '',
      unit: '',
      framing: '',
      surfaceTypeId: '',
      stretch: '',
      height: '',
      width: '',
      cmSizes: ['5cm x 7cm', '6cm x 8cm', '8cm x 10cm'],
      inchSizes: ['2in x 3in', '3in x 4in', '4in x 5in'],
      imageUrl: '',
      galleryDialog: false,
      galleryItems: [
        { imageUrl: 'url_to_gallery_image_1', price: '$10', height: 200, width: 200 },
        { imageUrl: 'url_to_gallery_image_2', price: '$20', height: 250, width: 250 },
        // 添加更多画廊图片信息
      ],
      selectedImage: null
    };
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0]
      this.image = file
      this.imageUrl = URL.createObjectURL(file)
    },
    setSize() {
      const [lengthStr, widthStr] = this.selectedSize.split(' x ');
      if (this.unit === 'cm') {
        this.height = parseFloat(lengthStr);
        this.width = parseFloat(widthStr);
      } else {
        this.height = parseFloat(lengthStr);
        this.width = parseFloat(widthStr);
      }
    },
    handleAddToCart() {
      const cartData = {
        quantity: "2",
      };
      const cartDataCopy = JSON.parse(JSON.stringify(cartData));
      this.addToCartMutation(cartDataCopy);
    },
    priceCal() {
      axios({
        method: 'post',
        url: 'http://localhost:8085/product/priceCalculate',
        data: {
          productType: this.productType,
          "surfaceTypeId": this.surfaceTypeId,
          "framing": this.framing,
          "stretch": this.stretch,
          "width": this.width,
          "height": this.height,
          "unit": this.unit
        },
        responseType: 'json'
      }).then(response => {
        _this.result = response.data.data.items
        _this.total = response.data.data.total
        console.log(response)
      }).catch(error => {
        console.log(error)
      });
    },
    openGalleryDialog() {
      this.galleryDialog = true;
    },
    closeGalleryDialog() {
      this.galleryDialog = false;
    },
    selectImage(item) {
      this.selectedImage = item;
      this.imageUrl = item.imageUrl;
      this.disableSizeChange();
      this.closeGalleryDialog();
    },
    disableSizeChange() {
      // 禁用尺寸变更的逻辑
    }
  }
}
</script>

<style scoped>
/* 这里添加你的样式 */
</style>
