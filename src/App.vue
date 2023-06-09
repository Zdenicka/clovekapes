<template>
  <div class="q-pa-sm">

      <q-layout
        view="hhh Lpr fff"
        class="shadow-2 rounded-borders"
      >
        <q-header elevated rounded >

            <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
            
            <img src="./assets/Dyda.jpg">

            <title>Člověk a pes - spolu</title>

        </q-header>

        <q-footer>
          <q-toolbar>
            <q-toolbar-title>Footer</q-toolbar-title>
          </q-toolbar>
        </q-footer>

        <q-drawer
          v-model="drawerLeft"
          :breakpoint="700"
        >
          <q-scroll-area class="fit">
            <div class="q-pa-sm">
              <q-list padding class="menu-list">

            
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

              </q-list>
            </div>
          </q-scroll-area>
        </q-drawer>

        <q-page-container>
          <q-page style="padding-top: 60px">
            <router-view/>
          </q-page>

          <q-page-scroller position="bottom">
            <q-btn fab icon="keyboard_arrow_up" color="red" />
          </q-page-scroller>
        </q-page-container>
      </q-layout>
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
