<template>
<div class="cover">

  <div class="video">
  <video class="back-bg-video" muted autoplay loop>
    <source src="@/assets/img/backvideo1.mp4" type="video/mp4">
  </video>

  <div class="video-text">
    <h4>Chiao! I'm</h4>
    <h1 @mouseover="changeText">SERGAZY MEDEUBEKOV</h1>
    <h2>Student of SDU and IT Programmer</h2>

    <router-link :to="'/section'">
    <div class="video-text-btm">
      About Me
    </div>
    </router-link>
  </div>

  </div>

</div>
</template>

<script>

</script>

<style>

.video-text h2{
  border: 1px solid;
  background-color: white;
  padding: 10px;
  width: auto;
  color: black;
}

.video{
  width: 100%;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: -1;
  }

.back-bg-video {
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  object-fit: cover;
  z-index: -2;
}

.video::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: #000;
  opacity: .4;
}

.video-text{
  position: absolute;
  top: auto;
  bottom: 0;
  padding: 120px 40px 75px 6.6%;
  text-align: left;
  color: #ffffff;
  text-shadow: 2px 2px 4px black;
}

.video-text-btm {
    margin-top: 40px;
    display: inline-block;
    padding: 14px 34px;
    font-size: 16px;
    border: 2px solid #fd0202;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    color: #ffffff;
}

.video-text-btm:hover{
  background: #fd0202;;
}

</style>
