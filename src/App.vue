<template>
  <div id="app">
    <section class="sec-tion" id="Iam">
        <secIam/>
    </section>
    <section class="sec-tion" id="AboutMe">
        <secAbout />        
    </section>
    <section class="sec-tion" id="Proyects">
        <secProjects/>
    </section>
    <section class="sec-tion" id="Portfolio">
        <secPortfolio/>
    </section>
    <section class="sec-tion" id="ContactMe">
        <secContactMe/>
    </section>
      
    <glassMenu/>
  </div>
</template>

<script>
import glassMenu from './components/GlassMenu.vue'
import secContainer from './components/SectionContainer.vue'
import secIam from './components/Iam.vue'
import secAbout from './components/About.vue'
import secProjects from './components/Projects.vue'
import secPortfolio from './components/Portfolio.vue'
import secContactMe from './components/ContactMe.vue'


export default {
  name: 'App',
  components: {
    glassMenu,
    secContainer,
    secIam,
    secAbout,
    secProjects,
    secPortfolio,
    secContactMe
  }
}
</script>

<style>
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  background: #061546;
  overflow-y: hidden
}

.sec-tion {
    width: 100%;
    height: 100%;
}

.sec-tion h1 {
    margin: 0;
}
</style>
