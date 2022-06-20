<template>
    <div class="contacts">
    <div class="container">
    <section class="contact" id="contact">
    <div class="row">
    <div class="container">

        <div class="contactInfo">
            <div class="box">
                <div class="icon"><i class="fa fa-mobile" aria-hidden="true"></i></div>
                <div class="text">
                    <h2>Phone</h2>
                    <p>+7-705-735-54-08</p>
                </div>
            </div>
            <div class="box">
                <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                <div class="text">
                    <h2>Email</h2>
                    <p>200103154@stu.sdu.edu.kz</p>
                </div>
            </div>
            <div class="box">
                <div class="icon"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                <div class="text">
                    <h2>Instagram</h2>
                    <p>@mdbkvvs</p>
                </div>
            </div>
        </div>

        <div class="contactForm">
        <img src="../assets/img/mephoto2.jpg" alt="">
        </div>

</div>
</div>
</section>
</div>
</div>
</template>

<script>


</script>

<style>
.contacts{
    background-image: url('../assets/img/city.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%, 50%;
    color: black;
}

.contact{
  position: relative;
  display: flex;
  min-height: 100vh;
  padding: 50px 100px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}

.contact .row .container{
  display: flex;
  text-shadow: 2px 2px 4px black;
  background-color: rgb(229, 225, 168);
  border-radius:10%;
}

.container .contactInfo{
    width: 50%;
    display: flex;
    flex-direction: column;
    color: rgb(236, 236, 241);
    justify-content: space-between;

}

.contactForm img{
    width:300px;
    height: 450px; 
    border-radius: 50%;
    margin-left: 200px;
}

</style>