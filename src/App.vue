<template>
    <div class= "full-width row wrap justify-evenly items-stretch content-stretch" style="background-color: grey; height: 100vh;">
        <div class= "col-12 q-ma-xs" style= "background-color: white; height: 20%">

            <q-btn round color="primary" icon="menu" />
            <div class="text-subtitle1 text-center">
              Člověk a pes - spolu
            </div>
        </div>

        <div class="col-2 q-pt-xl" style="background-color: white; border-radius: 20px">
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

        <div class="col-9 q-pa-xl" style="background-color: white; min-height: 70%; border-radius: 20px">
          <router-view/>
        </div>
        
        <div class= "col-12" style="background-color: white; min-height: 5%">
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
