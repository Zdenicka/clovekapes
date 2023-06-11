<template>
  <div style="background-color: grey; height: 100vh;">
    

      <div class= "fixed-center full-width row wrap justify-evenly items-start content-stretch " style= "border-radius: 20px; height:100vh; max-height: 1200px; max-width: 1700px;">

          <div class= "col-12 q-ma-xs" style= "height: 20%; border-radius: 20px 20px 0 0; font-family: 'Allura'">
            <q-img src="./assets/banner.jpg" class ="header-image">
              <q-btn round color="primary" icon="menu" />
              <div class="absolute-bottom-right text-subtitle2" style="height: 100%">
                <h4>Člověk a pes - spolu</h4>
              </div>
            </q-img>
          </div>

          <div class="col-11 col-md-2" style="overflow: auto;  border-radius: 0 0 0 20px; ">
            <div class= "q-mr-xs q-py-xl shadow-12" style= "background-color: white;">
              <q-item active clickable v-ripple>
                <router-link to="/">Home</router-link>
              </q-item>
        
              <q-item active clickable v-ripple>
                <router-link to="/treninky">Treninky</router-link>
              </q-item>
              <q-item active clickable v-ripple>
                <router-link to="/prihlasovani">Přihlašování na tréninky</router-link>
              </q-item>
              <q-item active clickable v-ripple>
                <router-link to="/kontakt">Kontakt</router-link>
              </q-item>
            </div>
          </div>
          
          <div class="col-12 col-md-10 q-pa-xl shadow-12 dancing-font" style="overflow: auto; background-color: white; min-height: 72%; ">
            <router-view/>
          </div>
          
          <div class= "col-0 col-md-2" style="min-height: 5%;">
          </div>

          <div class= "col-12 col-md-10" style="background-color: white; min-height: 5%; border-radius: 0 0 20px 20px">
          </div>
      </div>

  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'App',

  components: {
    
  },

  setup () {
    return {
      drawerLeft: ref(true),
    }
  }
}
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
}
@font-face {
    font-family: DancingSript;
    src: url(./assets/fonts/DancingScript.woff);
}
.dancing-font {
  font-family: 'DancingScript';
}
.menu-item {

}
</style>