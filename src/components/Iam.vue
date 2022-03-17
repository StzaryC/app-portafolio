<template>
  <section class="secIam">
      <p>Hello I'am</p>
      <h1>Gustavo Park</h1>
      <p>Front End Developer</p>
      <div class="actions">
        <button>Download CV</button>
        <button @click="wa">Let's Talk</button>
      </div>
      <div class="bg_picture">
        <img src="../assets/profile_picture.jpg" alt="">
      </div>
  </section>
</template>

<script>
export default {
  name: 'Iam',
  props: {
    
  },
  data: ()=> {
    return{

    }
  },
  methods:{
    wa(){
       window.location.assign("https://wa.me/525550745077")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .secIam {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }

  h1 {
    color: #00ccff;
    text-align: center;
  }
  
  p{
    color: #fff;
    margin: 10px;
  }

  .actions {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0;
  }

  .actions button {
    height: 40px;
    width: 150px;
    border-radius: 10px;
    border: none;
  }

  .actions button:nth-child(1) {
    background: none;
    color: #00ccff;
    border: 1px solid #00ccff;
    cursor: pointer;
  }

  .actions button:nth-child(2) {
    background: #00ccff;
    color: #061546;
    cursor: pointer;
  }

  .bg_picture {
    width: 80vw;
    height: 60vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    background: #00ccff;
    border-top-right-radius: 10em;
    border-top-left-radius: 10em;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;    
  }
</style>