<template>
  <section class="secAbout">
      <p>Get To Know</p>
      <h1>About Me</h1>
      <div class="picture_info">
        <div class="picture">
          <img src="../assets/me.jpg" alt="">
        </div>
        <div class="info">
          <div class="grid">
            <div class="exp">
              <i class="fa-solid fa-medal"></i>
              <h3>Experience</h3>
              <p>+5 years</p>
            </div>
            <div class="clients">
              <i class="fa-solid fa-person"></i>
              <h3>Clients</h3>
              <p>About +200</p>
            </div>
            <div class="projects">
              <i class="fa-solid fa-list-check"></i>
              <h3>Projects</h3>
              <p>+20</p>
            </div>
          </div>
          <p>
            I am an Information Systems Specialist and Computer Systems Engineer. <br><br>
            I have dedicated myself to learning the necessary technologies for web development in a self-taught way. <br><br>
            I have developed personal projects and for third parties where I have applied front-end knowledge. <br><br>
            In addition, I have extensive experience in the area of ​​technology, specifically in technical support,
            computer equipment maintenance and SQL database management.
            <br><br>
            --Gustavo Morales
          </p>
          <button @click="wa">
            Lets'Talk
          </button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'About',
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
  .secAbout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 90%;
    overflow-y: scroll;
  }

  h1 {
    color: #00ccff;
    text-align: center;
  }
  
  p{
    color: #fff;
    margin: 10px;
  }

  .picture {
    background: #00ccff;
    display: flex;
    width: 50%;
    height: auto;
    margin: 1rem auto;
    border-radius: 1em;
    padding: 0 .5rem;
    transform: rotate(-5deg);
  }

  .picture_info {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .picture_info img {
    width: 100%;
    margin: .5rem auto;
    border-radius: 1em;
    transform: rotate(5deg);

  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .exp, .clients, .projects {
    background: #000;
    margin: 1rem auto;
    border-radius: .5em;
    width: 40%;
    text-align: center;
    font-size: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  i{
    color: #00ccff;
    margin: 1rem 0px;
    font-size: 1.2rem;
  }

  h3 {
    color: #00ccff;
    margin: 0;
  }

  p {
    font-size: .8rem;
    opacity: .7;
  }

  button {
    background: #00ccff;
    color: #061546;
    cursor: pointer;
    height: 40px;
    width: 150px;
    border-radius: 10px;
    border: none;
    margin: 1rem 0;
  }
</style>