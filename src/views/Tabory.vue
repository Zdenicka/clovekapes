<template>
    <h3>Kam se mnou na tábor?</h3>
    <h5>Letos vám mohu nabídnout jeden tábor, kde budu jako trenér</h5>
        <p>Kdy? Na konci července </p>
        <p>Kde? Kousek od Tábora</p>
        <p>S kým? Pořádá psí škola Psí škola Dancing Dogs a jako trenér tam bude Katka Lerlova a já 🙂</p>
        <p>Na táboře se budeme věnovat základním dovednostem, jako je: přivolání, odpočívání na místě nebo v kleci, chůze na vodítku, chůze u nohy. Tábor bude nejen o praktických trénincích, ale také o teorii, kde Vám vysvětlíme principy učení a konkrétní metodické postupy.
        Čas bude také věnován psí komunikaci, povíme si, jak správně psy seznámit a součástí tábora bude také tréninková procházka.   
        <a href="https://dancingdogs.dogres.cz/trainings/271610?fbclid=IwAR2sW4xvwBKSOdVcrFWPIYyhqLFxKZ3oQbKXahmHNOKTOJXtaJvjfjx81ks" target="_blank">Bližší info a přihlášku najdete zde</a></p>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  name: 'Tabory',

  setup () {
    useMeta({ title: 'Člověk a pes spolu - pořádané tábory' })
  },

}

</script>

<style lang="scss">
a {
  color: $secondary
}
</style>
