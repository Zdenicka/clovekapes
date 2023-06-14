<template>

<div class= "fixed-center full-width row wrap justify-evenly items-start content-stretch " style= "border-radius: 20px; height:100vh; max-height: 1200px; max-width: 1500px;">

    <!--hlavička-->
    <div class= "col-12 q-ma-xs shadow-12" style= "height: 20%; border-radius: 20px 20px 0 0; font-family: 'Allura'; ">
    <q-img src="./assets/banner.jpg" class ="header-image" style="border-radius: 20px 20px 0 0; z-index: -1;">
        
        <div class="absolute-bottom-right text-subtitle2" style="height: 100%">
          <h4>Člověk a pes - spolu</h4>
        </div>
      </q-img>

      <q-btn round color="primary" icon="menu" class="float-bottom-left lt-md z-max q-mb-xl" >
        <q-menu>
          <q-list class="menu-item" style="min-width: 100px">
            <router-link to="/">
              <q-item clickable v-close-popup>
                <q-item-section class="myItem">O mě</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/treninky">
              <q-item clickable v-close-popup>
                <q-item-section class="myItem">Tréninky</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/prihlasovani">
            <q-item clickable v-close-popup>
              <q-item-section class="myItem">Přihlašování na tréninky</q-item-section>
            </q-item>
            </router-link>
            <router-link to="/kontakt">
            <q-item clickable v-close-popup>
              <q-item-section class="myItem">Kontakt</q-item-section>
            </q-item>
            </router-link>
          </q-list>
        </q-menu>
        </q-btn>
 
    </div>

    <!--menu-->
    <div class="gt-sm col-md-2 shadow-12" style="overflow: auto;  border-radius: 0 0 0 20px; ">
      <Rozdelovnik />
    </div>
    
    <!--vlastní obsah stránky-->
   
      <div class="col-12 col-md-10 q-pa-xl shadow-12" style="  background-color: white; height: 72%; align-content: center; ">
        <div v-if="showMenu" class="shadow-12 z-top" style="overflow: auto;" @click= "toggleMenu()" >
          <div >
            <Rozdelovnik />
          </div>
        </div>

        <div style= "max-width: 1050px; font-family: 'Garamond'; font-size: larger; height: 100% ">
          <q-scroll-area
            :thumb-style="thumbStyle"
            :bar-style="barStyle"
            style="height: 100%; max-width: 1050px"
            content-style="padding-right: 50px"
            content-active-style="padding-right: 50px"
            >
            <router-view/>
          </q-scroll-area>
        </div>

    </div>

    <!--odsazení patičky-->
    <div v-if="!showMenu" class= "col-0 col-md-2" style="height: 5%;">
    </div>

    <!--patička-->
    <div v-if="!showMenu" class= "col-12 col-md-10 shadow-12 paticka">
      <div class="fit row wrap justify-between items-center content-center" style="font-family: 'Garamond'; font-size: small">
        <div class="col-4 q-pl-md"><p>Fotka v hlavičce je od <a href="https://kopcova-karolina.webnode.cz/" target="_blank">Kája-foto</a></p></div>
        <div class="col-3">Aktualizace 13.6.2023 <br>Všechna práva vyhrazena</div>
      </div>
    </div>
  
  
  </div>
</template>

<script>
import { ref } from 'vue'
import Rozdelovnik from './components/Rozdelovnik.vue'

export default {
  name: 'App',

  components: {
    Rozdelovnik
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      console.log('toggleMenu')
      this.showMenu = !this.showMenu
    }
  },

  setup () {
    return {
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#fbc356',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#331e0d',
        width: '9px',
        opacity: 0.2
      }
    }
  }
}
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
}

.menu-item {
  font-family: 'Garamont';
  color: $secondary;
  text-decoration: none;

}
a {
  text-decoration: none;
  font-size: large;
  color: $secondary;
}

body {
  background-color: $accent;

}
h5 {
  margin-bottom: 3%;
}
.myItem:nth-child(even) {
  color: $secondary
}
.paticka {
  background-color: white; 
  height: 5%; 
  border-radius: 0 0 20px 20px; 
  overflow: auto
}
.paticka a {
  font-size: small;
}

</style>