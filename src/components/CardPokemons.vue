<script setup>
defineProps(['name', 'url', 'urlImgSvg']);

</script>

<template>
    <div
    class="card card-pokemon"
    >
        <h2>{{name.charAt(0).toUpperCase() + name.substr(1)}}</h2>
        <img :src="urlImgSvg + (url.split('/')[6]) + '.svg'" :alt="name"/>
    </div>
</template>


<style scoped>
.card-pokemon{
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    padding: 1rem;
    max-width: 150px;
    margin:  0 auto 1rem auto;
    cursor: pointer;
}
.card-pokemon:hover{
    background-color: #FFFB7D;
    background-image: linear-gradient(45deg, #81c29f 0%, #85FFBD 100%);
    padding: .8rem;
}
.card-pokemon h2{
    text-align: center;
    font-size: 1.2rem;
}
.card-pokemon img{
    height: 80px

}
</style>