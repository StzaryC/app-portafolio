<template>
  <nav class="glass-menu">
        <i :class=[item.icon,item.link]   @click="scrollthis" v-for="item in items" :key="item.index"></i>
  </nav>
</template>

<script>
export default {
  name: 'GlassMenu',
  props: {
    
  },
  data: ()=> {
    return{
      items:[
        {link: "Iam active", icon: "fa-solid fa-user"},
        {link: "AboutMe", icon: "fa-solid fa-address-card"},
        {link: "Proyects", icon: "fa-solid fa-diagram-project"},
        {link: "Portfolio", icon: "fa-solid fa-suitcase"},
        {link: "ContactMe", icon: "fa-solid fa-comment"}
      ],
    }
  },
  methods: {
    scrollthis(e){
      document.querySelectorAll("i").forEach(el=>{
        el.classList.remove("active")  
      })
      e.target.classList.add("active")

      let target = e.target.classList[2]
      let getTarget = document.getElementById(target)
      
      getTarget.scrollIntoView({
      behavior: "smooth"
      })
    }
  },
  mounted(){
    
      let getTarget = document.querySelector(".Iam")

      let activeSection = document.getElementById("Iam")
      
      activeSection.scrollIntoView({
        behavior: "smooth",
        alignToTop,

      })
    
      var pintaIcon = getTarget.classList.add("active")
      pintaIcon()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.glass-menu {
  background: #fff4;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3.5rem;
  width: 90vw;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1em;
}

i{
  cursor: pointer;
  transition: .4s;
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  text-transform: capitalize;
  color: #fff;
}

.glass-menu i:hover {
  transform: translateY(-3px);
  color: #00ccff;
}

.active {
  color: #00ccff;
}



</style>
