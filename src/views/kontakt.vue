<template>
     <head>
    <title>Trenér psů - Člověk a pes - spolu</title>
    <meta name="description" content="Zdenka Cihlářová - trenér psů - kontaktní údaje" />
    <meta name="keywords" content="trenér psů, trenér psů Mladá Boleslav, trenér psů Nymburk, trenér psů Jičín, trenér psů pozitivně">
</head>
<body>
  <h3>Kontakt</h3>
  <h5>Zdenka Cihlářová</h5>
  <q-separator />
  <p>Při zájmu o individuální trénink mi prosím napište nebo zavolejte.</p>
  <p><a href="mailto: birma@seznam.cz"><q-btn round color="primary" icon="mail" /></a>   
    birma@seznam.cz
    <q-btn outline round color="primary" icon="bookmark" size="sm" @click="kopiruj('birma@seznam.cz')">
      <q-tooltip style="font-family: Garamont; font-size: larger;" >
        Zkopírovat do schránky
      </q-tooltip>
    </q-btn>
  </p>
  
  <p>
    <q-btn 
      round 
      color="primary" 
      icon="call"
      disable
    />
    777 629 743
    <q-btn outline round color="primary" icon="bookmark" size="sm" @click="kopiruj('777629743')">
      <q-tooltip style="font-family: Garamont; font-size: larger;" >
        Zkopírovat do schránky
      </q-tooltip>
    </q-btn>
  </p>
  <p>
  Kontaktovat mě samozřejmě můžete i na 
  <a href="https://www.facebook.com/clovekapes/" target="_blank">
    <q-icon 
      color="primary" 
      name="fa-brands fa-facebook" 
      size="md"
      class="q-mb-md"
    /> facebooku 
  </a>
  nebo 
  <a href="https://www.instagram.com/clovek_a_pes_spolu/" target="_blank">
    <q-icon 
      color="primary" 
      name="fa-brands fa-instagram" 
      size="md"
      class="q-pb-md"
    /> Instagramu
  </a>.
  </p>
</body>
</template>

<script>

export default {
    data() {
      return {
      }
    },
    methods: {
      kopiruj(text) {
        navigator.clipboard.writeText(text);
      }
    }
  }
</script>

