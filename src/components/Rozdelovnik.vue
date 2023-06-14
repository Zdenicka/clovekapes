<template>
  

  <div class= "q-mr-xs q-py-xl menu-item" style= "background-color: white;">
    
      <router-link to="/">
        <q-item active clickable v-ripple >
          <span class="myItem">O mě</span>
        </q-item>
      </router-link>
    
      <router-link to="/treninky">
        <q-item active clickable v-ripple>
          <span class="myItem">Tréninky</span>
        </q-item>
      </router-link>

    <router-link to="/prihlasovani">
      <q-item active clickable v-ripple>
        <span class="myItem">Přihlašování na tréninky</span>
        
      </q-item>
    </router-link>

      <router-link to="/kontakt">
        <q-item active clickable v-ripple>
          <span class="myItem">Kontakt</span>
        </q-item>
      </router-link>
      

  </div>
  </template>