<template>
  <div class="myskills">
    <div class="container">
    <div class="title">My Skills</div>
      <hr>
        <div class="programming">
          <h1>Programming Skills</h1>
          <div class="programming-img">
          <img src="@/assets/img/java.png" alt="">
          </div>
        </div>
        <hr>
        <div class="database">
          <h1>Database Skills</h1>
          <div class="database-img">
          <img src="@/assets/img/sql.png" alt="">
          </div>
        </div>
        <hr>
        <div class="front-end">
          <h1>Front-end Skills</h1>
          <div class="skills-img">
          <div class="skills-box">
          <div class="img">
            <img src="@/assets/img/html.png" alt="">
          </div>
          </div>
          <div class="skills-box">
          <div class="img">
            <img src="@/assets/img/css.png" alt="">
          </div>
          <p>I have a worked in CSS framework</p>
          </div>
          <div class="skills-box">
          <div class="img">
            <img src="@/assets/img/js.png" alt="">
          </div>
          </div>
          <div class="skills-box">
          <div class="img">
            <img src="@/assets/img/bootstrap.png" alt="">
          </div>
          </div>
          <div class="skills-box">
          <div class="img">
            <img src="@/assets/img/vue.png" alt="">
          </div>
          </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.myskills{
  background-color: #534949;
  font-size: 70px;
  color: aliceblue;
}

img{
  cursor: pointer;
}

.title{
  padding-top: 100px;
}

.programming{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.programming-img img{
  width: 150px;
  height: 150px;
   border-radius: 45px;
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  align-items: center;
}

.database{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.database-img img{
  width: 150px;
  height: 150px;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  align-items: center;
}

.skills-img{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-gap: 1rem;
  padding: 1rem, 80px;
}

.img img{
  width: 150px;
  height: 150px;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  align-items: center;
}

.skills-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.skills-box p{
  font-size: 20px;
  color: #000;
  text-align: center;
}

</style>
