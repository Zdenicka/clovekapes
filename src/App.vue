<template>
  <div class= "full-width row wrap justify-start items-stretch content-start">
      <div class= "col-12 q-ma-lg " style="overflow: auto; bg-color: primary ">

          <q-btn round color="primary" icon="menu" />
          <div class="text-subtitle1 text-center">
            Člověk a pes - spolu
          </div>
      </div>

      <div class="col-3 q-gutter-md q-pa-lq" style="overflow: auto;">
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

      <div class="col-9 q-gutter-md q-pa-xl" style="overflow: auto;">
        <router-view/>
      </div>
      
      <div class= "col-12" style="overflow: auto bg-color: $primary">
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
