<script setup>
defineProps(['pokemonSelected', 'loading']);

</script>

<template>
    <section class="d-flex justify-content-center">
        <div 
        v-if="pokemonSelected"
        class="card card-pokemon-principal shadow p-3 my-3 text-center "
        :class="loading ? 'animate__animated animate__flip': ''">
            <h1>{{pokemonSelected.name.charAt(0).toUpperCase() + pokemonSelected.name.substr(1) }}</h1>
            <img :class="!loading ? 'animate__animated animate__tada': ''" :src="pokemonSelected.sprites.other.dream_world.front_default" alt="Pokemon-pincipal">
            <!-- <img v-else class="animate__animated animate__heartBeat" src="../assets/egg.svg" alt="Pokemon-pincipal"> -->
            <hr>
            <div class="row descricao-card">
                <div class="col-md-6">
                    <h5>Tipo</h5>
                    <p>{{pokemonSelected.types[0].type.name}}</p>
                    <h5>Altura</h5>
                    <p>{{pokemonSelected.height}}</p>
                    <h5>Peso</h5>
                    <p>{{pokemonSelected.weight}}</p>
                </div>
                <div class="col-md-6">
                    <h5>Habilidades</h5>
                    <p 
                    v-for="habilidad in pokemonSelected.abilities" 
                    :key="habilidad.id"
                    >
                        {{habilidad.ability.name}}
                    </p>
                </div>

            </div>
        </div>
        <div
        v-else
        class="card card-pokemon-principal shadow p-3 my-3 text-center"
        >
            <h1>???????</h1>
            <img src="../assets/egg.svg" alt="Pokemon-pincipal">
            <hr>
        </div>
    </section>
</template>

<style scoped>
.card-pokemon-principal{
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    min-width: 400px;
    min-height: 500px;
    margin: auto;
}
.card-pokemon-principal img{
    height: 120px;
}
@media only screen and (max-width: 768px) {
    .card-pokemon-principal {
        min-height: 0;
        height: 200px;
    }
    .card-pokemon-principal img{
        height: 80px;
    }
    .descricao-card{
        display: none;
    }
}

</style>