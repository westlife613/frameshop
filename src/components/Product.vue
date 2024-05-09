<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <input type="file" accept="image/*" @change="onChange" />
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
              <v-rating v-model="rating" class="" background-color="warning lighten-3"
                        color="warning" dense></v-rating>

            </v-card-actions>


           <h4>productType: </h4>

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

           <h4>Units:</h4>

                                 <input type="radio" id="1" value="cm" v-model="unit" />
                                 <label for="cm">cm</label>

                                 <input type="radio" id="2" value="inch" v-model="unit" />
                                 <label for="inch">inch</label>

           <div id="dimensions-column" class="column">
           <div class="dimensions__sizing">


       <div class="field is-grouped is-horizontal dimensions__size" style="align-items: flex-start;">
       <h4 class="field-label">Image Size</h4>
       <div class="field-body" style="flex-direction: column;">
       <div>
       <div class="field is-grouped">
       <div class="columns" style="width: 100%;">
       <div class="column" style="display: flex;">
       <div class="field">
       <label class="label"> WIDTH </label>
       <div class="control">
       <input type="number" step="0.1" aria-label="Image width" min="1" max="999.99">
       </div>
       </div>
       <span class="mid">×</span>
       <div class="field">
       <label class="label">HEIGHT</label>
        <div class="control">
        <input type="number" step="0.1" aria-label="Image height" min="1" max="999.99">
        </div>
        </div>
        <span class="mid">inch</span>
        </div>
        <div class="column" style="display: flex; align-items: flex-end;">
        <div class="select is-fullwidth">
        <select>
        <option value="">Standard Sizes</option>
        <option value="[object Object]">
                          4" x 6" (10.2 x 15.2 cm)
                        </option><option value="[object Object]">
                          5" x 7" (12.7 x 17.8 cm)
                        </option><option value="[object Object]">
                          6" x 8" (15.2 x 20.3 cm)
                        </option><option value="[object Object]">
                          8" x 10" (20.3 x 25.4 cm)
                        </option><option value="[object Object]">
                          8" x 12" (20.3 x 30.5 cm)
                        </option><option value="[object Object]">
                          11" x 14" (27.9 x 35.6 cm)
                        </option><option value="[object Object]">
                          12" x 16" (30.5 x 40.6 cm)
                        </option><option value="[object Object]">
                          16" x 20" (40.6 x 50.8 cm)
                        </option><option value="[object Object]">
                          16" x 24" (40.6 x 61.0 cm)
                        </option><option value="[object Object]">
                          18" x 24" (45.6 x 61.0 cm)
                        </option> <optgroup label="B"><option value="[object Object]">
                            B1 (70.7 x 100.0 cm)
                          </option><option value="[object Object]">
                            B2 (50.0 x 70.7 cm)
                          </option></optgroup> <optgroup label="A"><option value="[object Object]">
                            A5 (14.8 x 21.0 cm)
                          </option><option value="[object Object]">
                            A4 (21.0 x 29.7 cm)
                          </option><option value="[object Object]">
                            A3 (29.7 x 42.0 cm)
                          </option><option value="[object Object]">
                            A2 (42.0 x 59.4 cm)
                          </option><option value="[object Object]">
                            A1 (59.4 x 84.1 cm)
                          </option><option value="[object Object]">
                            A0 (84.1 x 118.9 cm)
                          </option></optgroup></select></div></div></div></div></div> <div class="size-help"><!----> <!----></div> <div class="" style="font-size: 1.2rem; transition: all 0.25s ease 0s; margin-bottom: 10px;">
              Min: 3.9 x 3.9 inch, Max: 40 x 60 inch
            </div></div></div></div></div>
            <v-text-field
                outlined
                style="width:100px"
                :value="1"
                dense
            ></v-text-field>

            <v-btn class="primary white--text" outlined tile dense><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn>
            <v-btn class="ml-4" @click="getFrame">GET FRAME</v-btn>
             <v-btn class="ml-4" @click="getColor">GET COLOR</v-btn>
             <v-btn class="ml-4" @click="priceCal">PRICE CALCULATE</v-btn>

          </div>

        </di>
      </div>
      </div>

    </v-container>
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
import {
		getFrame,getColor,priceCalculate
	} from '@/api/product.js';
import axios, * as others from 'axios';
    export default {
        data: () => ({
            productType: '',
            unit:'',
            framing:'',
            surfaceTypeId:'',
            stretch:'',

        }),
          methods: {
            onChange(e) {
              const file = e.target.files[0]
              this.image = file
              this.imageUrl = URL.createObjectURL(file)
            },
            getColor(){
            },
            priceCal(){
          axios({

                                method: 'post',
                                url: 'http://localhost:8085/product/priceCalculate',

                                data: {
                                    productType:this.productType,

                                      "surfaceTypeId": this.surfaceTypeId,

                                      "framing": this.framing,
                                      "stretch": this.stretch,
                                      "width": 8,
                                      "height": 10,
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

            }


    }}
</script>

<style>

.custom-select {
    border: 1px solid #000000; /* 黑色边框 */

}
</style>
