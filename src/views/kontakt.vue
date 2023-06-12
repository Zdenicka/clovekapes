<template>
    <h3>Kontakt</h3>
  <h5>Zdenka Cihlářová</h5>
  <q-separator />
  <p>Při zájmu o individuální trénink mi prosím napište nebo zavolejte.</p>
  <p><a href="mailto: birma@seznam.cz"><q-btn round color="primary" icon="mail" /></a>   
    birma@seznam.cz
    <q-btn outline round color="primary" icon="bookmark" size="sm" @click="kopiruj"><q-tooltip >Zkopírovat do schránky</q-tooltip></q-btn>
  </p>
  <p>
   <q-btn 
    round 
    color="primary" 
    icon="call"
    disable
   />
   
   777 629 743</p>

</template>

<script>

export default {
  return: {
data() {
  return {
    
  }
},
    methods: {
      kopiruj() {
        console.log('Ahoj')
        navigator.clipboard.writeText("birma@seznam.cz");
      }
    }
  }
}
</script>

