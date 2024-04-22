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
              <p class="headline font-weight-light pt-3">$65.00 <del style="" class="subtitle-1 font-weight-thin">$80.00</del></p>
              <v-spacer></v-spacer>
              <v-rating v-model="rating" class="" background-color="warning lighten-3"
                        color="warning" dense></v-rating>
              <span class="body-2	font-weight-thin"> 25 REVIEWS</span>
            </v-card-actions>



           <div id="dimensions-column" class="column"><div class="dimensions__sizing"><div class="field is-grouped is-horizontal" style="align-items: center;"><h4 class="field-label">Printing (Optional)</h4> <div id="uploads-column" class="field-body"><div can_preview="true"><button class="UserGallery---gallery-button---2D-Q__0"><span class="UserGallery---gallery-button-text---3J1Gr_0"><i class="fa fa-2x fa-cloud-upload"></i> <span> Upload Image</span></span> <!----></button> <!----> <div class="UserGallery---background---1qw8i_0 UserGallery---flex-center---2qWAQ_0" style="display: none;"><div class="UserGallery---window---1afFM_0"><div class="UserGallery---main-content---ZoGYU_0"><label class="UserGallery---drop-zone-container---2zveP_0 UserGallery---flex-center---2qWAQ_0"><input type="file" accept="image/png, image/jpeg, image/bmp, image/x-windows-bmp, image/tiff, image/gif" multiple="multiple" style="display: none;"> <span class="UserGallery---drop-zone---2BWho_0 UserGallery---flex-center---2qWAQ_0"><i class="fa fa-cloud-upload fa-5x UserGallery---icon---3Oo-V_0"></i> <span class="UserGallery---drop-zone-text-container---b110L_0 UserGallery---flex-center---2qWAQ_0"><span>Drag an image or click to begin uploading</span> <span>Accepted file types: JPG TIFF PNG BMP</span> <span>Max file size: 1.76 gb</span> <span>For larger files or other formats, contact us</span></span></span></label> <!----> <div class="UserGallery---ready-files---BEiMf_0"><h2 class="UserGallery---title---3mVIL_0">
            Saved Images

            <!----></h2> <p class="UserGallery---no-saved-images-message---3VL7e_0">
            You have no saved images.
          </p></div></div> <div class="UserGallery---close-button---2t6r9_0"><i class="fa fa-times"></i> Close Gallery
      </div></div></div></div> <!----></div></div> <div class="field is-grouped is-horizontal" style="align-items: center;"><h4 class="field-label">Units</h4> <div class="field-body"><div class="field is-grouped" style="align-items: center;"><label class="material-radio"><input value="cm" type="radio" aria-label="Use centimetres"> <span class="outer"><span class="inner"></span></span> <span class="material-radio__label">cm</span></label> <label class="material-radio"><input value="inch" type="radio" aria-label="Use inches"> <span class="outer"><span class="inner"></span></span> <span class="material-radio__label">inch</span></label></div></div></div> <div class="field is-grouped is-horizontal dimensions__size" style="align-items: flex-start;"><h4 class="field-label">Image Size</h4> <div class="field-body" style="flex-direction: column;"><div><div class="field is-grouped"><div class="columns" style="width: 100%;"><div class="column" style="display: flex;"><div class="field"><label class="label"> WIDTH </label> <div class="control"><input type="number" step="0.1" aria-label="Image width" min="1" max="999.99"></div></div> <span class="mid">×</span> <div class="field"><label class="label">HEIGHT</label> <div class="control"><input type="number" step="0.1" aria-label="Image height" min="1" max="999.99"></div></div> <span class="mid">inch</span></div> <div class="column" style="display: flex; align-items: flex-end;"><div class="select is-fullwidth"><select><option value="">Standard Sizes</option> <option value="[object Object]">
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
            <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>

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
    export default {
        data: () => ({
            rating:4.5,
            breadcrums: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_home',
                },
                {
                    text: 'FrameDIY',
                    disabled: false,
                    href: 'breadcrumbs_clothing',
                },
                {
                    text: 'Printing',
                    disabled: true,
                    href: 'breadcrumbs_shirts',
                },
            ],
            item: 5,
            image: null,
            imageUrl:null,
            items: [
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Lorem ipsum dolor?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
                        "\n",
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
                    subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: ""
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
            ],
        }),
          methods: {
            onChange(e) {
              const file = e.target.files[0]
              this.image = file
              this.imageUrl = URL.createObjectURL(file)
            }
          }
    }
</script>
