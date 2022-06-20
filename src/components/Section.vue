<template>
    <div class="section-about-me">
        <div class="section-left">
            <div class="container">
                <div class="section-left-h">Briefly about yourself</div> 
                   <div class="section-left-p">My name is Medeubekov Sergazy Yerboluly. I was born on September 4, 2002 in Shymkent, Kazakhstan. I grew up in an ordinary average family. 
                       There are 5 of us in the family: mom, dad, brother, sister and me. He played football at the youth academy of FC Ordabasy for 5 years. 
                       I studied at the gymnasium school No. 65 and graduated there. Having scored 95 points on the UNT, I entered the Suleiman Demirel University in Kaskelen.
                       At the moment I am studying in the 2nd year. <br>
                       <span>What I love: </span> watching TV series, movies, making videos and editing, taking photos and processing, traveling, programming. <br>
                       <span>Hobbies: </span>  Football, Table Tennis, Mobilography.
                    </div>
            </div>
        </div>

        <div class="section-right"></div>
    </div>
</template>

<script>

</script>

<style>
.section-about-me{
    background-color: #fd0202;
    display: flex;
    height: 100vh;
    min-height: 700px;
}

.section-left{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 40px 75px 6.0%;
}

.section-left-h{
    font-size: 60px;
    line-height: 64px;
    letter-spacing: -.02em;
    font-weight: 700;
    text-align: left;
}

.section-left-p{
    margin-top: 15px;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -.03em;
    font-weight: 400;
    color: #ffff;
    text-align: left;
}

.section-left-p span{
    color: black;
}

.section-right{
    width: 50%;
}

.section-right{
    background-image:url('../assets/img/mephoto.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%, 50%;
}

</style>
