<template>
  <section class="secProjects">
      <h1>Projects</h1>
      <p>This are some of my projects <br> swipe left :D</p>
      <div class="grid">

        <div class="card">
          <div class="card_img">
            <img src="../assets/calculadoraimc.png" alt="">
          </div>
          <div class="card_description">
            <p>In this App you can check your IMC by puting your size and weight</p>
          </div>
          <div class="card_actions">
            <a href="https://stzaryc.github.io/calculadora-imc/" >View Demo</a>
          </div>
        </div>

        <div class="card">
          <div class="card_img">
            <img src="../assets/diccionario.png" alt="">
          </div>
          <div class="card_description">
            <p>This is a dicctionary made with Js to consume an .JSon documment to simulate API services</p>
          </div>
          <div class="card_actions">
            <a href="https://stzaryc.github.io/Diccionario_Regio_Chilango/">View Demo</a>
          </div>
        </div>

        <div class="card">
          <div class="card_img">
            <img src="../assets/ghostlogin.png" alt="">
          </div>
          <div class="card_description">
            <p>
              This is a login simulator of 4 passwords...
              write this words:
              -Admin 
              -Stzary
              -Carmesi
              -ImHuman
            </p>
          </div>
          <div class="card_actions">
            <a href="https://stzaryc.github.io/GhostLogin/">View Demo</a>
          </div>
        </div>

      </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    
  },
  data: ()=> {
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .secProjects {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    color: #00ccff;
    text-align: center;
    padding-top: 10px;
  }

  p {
    color: #fff7;
    text-align: center;
    margin: .6rem 0;
  }

  .grid {
    width: 80%;
    height: 70vh;
	  flex-wrap: no-wrap;
	  /* border: 1px solid #000; */
	  display: flex;
	  justify-content: flex-start;
	  align-items: center;
	  overflow-y: scroll;
    margin: auto;
  }

  .card {
    height: 90%;
    min-width: 90%;
    background: rgba(255, 255, 255, 0.267);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 2em;
    margin: .6rem 5%;
  }

  .card .card_img {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card .card_img img {
    height: 100%;
    display: flex;
  }

  .card .card_description {
    height: 20%;
    width: 80%;
  }

  .card .card_actions {
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card .card_actions a {
    height: 40px;
    width: 150px;
    border-radius: 10px;
    border: none;
    background: none;
    color: #00ccff;
    border: 4px solid #00ccff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card .card_actions a:hover {
    background: #1443db;
    color: #fff;
    inset: 1px solid #5d90a0;
  }
</style>