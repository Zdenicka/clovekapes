<template>
  

  <div class= "q-mr-xs q-py-xl menu-item" style= "background-color: white;">
    
      <router-link :to= "{name: 'home'}">
        <q-item active clickable v-ripple >
          <span class="myItem">O mě</span>
        </q-item>
      </router-link>
    
      <router-link :to= "{name: 'treninky'}">
        <q-item active clickable v-ripple>
          <span class="myItem">Tréninky</span>
        </q-item>
      </router-link>

    <router-link :to= "{name: 'prihlasovani' }">
      <q-item active clickable v-ripple>
        <span class="myItem">Přihlašování na tréninky</span>
        
      </q-item>
    </router-link>

      <router-link :to= "{name: 'kontakt'}">
        <q-item active clickable v-ripple>
          <span class="myItem">Kontakt</span>
        </q-item>
      </router-link>
      

  </div>
  </template>