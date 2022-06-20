<template>
    <div class="portfolio">
        <div class="container">
            <div class="myprojects">
                <h1>My Projects</h1>
                <hr>

                <div class="project1">
                    <div class="card mb-3">
                    <img class="card-img-top" src="@/assets/img/tank.jpg" alt="Card image cap" width="800" height="600">
                    <div class="card-body">
                        <h3 class="card-title">Java Project: Tank</h3>
                        <p class="card-text">In this project, I implemented a 2D game about tanks. I used all the knowledge I gained while studying the Java language. OOP, inheritance, classes, loops, arrays, animations, etc.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>

                <div class="project2">
                    <div class="card mb-3">
                    <img class="card-img-top" src="@/assets/img/msmusic.png" alt="Card image cap" width="800" height="600">
                    <div class="card-body">
                        <h3 class="card-title">Front-end Project: MS Music</h3>
                        <p class="card-text">This is a music platform website. In it you can listen to music and learn more about music. The site is made on html, css, bootstrap.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
.portfolio{
    background-image: url('../assets/img/portback.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%, 50%;
    color: black;
}

.card {
    color: black;
}

.myprojects{
    padding-top: 100px;
}

</style>