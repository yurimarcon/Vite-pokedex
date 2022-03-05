<script setup>
import { ref, onMounted } from 'vue';

let pokemons = ref();
let urlImgSvg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
let pokemonSelected = ref(null);
let search = ref('');

function pokemonsFiltered(){
    if(pokemons.value && search.value){
        return pokemons.value.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(search.value.toLowerCase());
        });
    }else{
        return pokemons.value;
    }
}

async function getPokemons() {
    await fetch('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=648')
        .then(res=>res.json())
        .then(response => {
            pokemons.value = response.results;
        })
        .catch(error => {
            console.log(error);
        });
}

function selectPokemon(pokemon) {
    
    fetch(pokemon.url)
        .then(res=>res.json())
        .then(response => {
            pokemonSelected.value = response;
            // console.log(pokemonSelected.value);
        })
        .catch(error => {
            console.log(error);
        });
}

onMounted(() => {
    getPokemons();    
});
</script>

<template>
    <div class="container">

        <div class="row contudo-tela-pokemons">
            <div class="col-12 col-md-6">
                <section class="d-flex justify-content-center">
                    <div 
                    v-if="pokemonSelected"
                    class="card card-pokemon-principal shadow p-3 my-3 text-center">
                        <h1>{{pokemonSelected.name.charAt(0).toUpperCase() + pokemonSelected.name.substr(1) }}</h1>
                        <img :src="pokemonSelected.sprites.other.dream_world.front_default" alt="Pokemon-pincipal">
                        <hr>
                        <div class="row">
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
            </div>

            <div class="col-12 col-md-6">
                <div class="card shadow mt-3 px-3">
                    
                    <input 
                    class="form-control form-control-sm mt-3" 
                    type="text" 
                    placeholder="Pesquisar..." 
                    aria-label=".form-control-sm example"
                    v-model="search"
                    >
                    <hr>
                
                    <div class="row listagem-pokemons">
                        <div 
                        v-for="pokemon in pokemonsFiltered()"
                        :key="pokemon.name"
                        class="card card-pokemon"
                        @click="selectPokemon(pokemon)"
                        >
                            <h2>{{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1)}}</h2>
                            <img :src="urlImgSvg + (pokemon.url.split('/')[6]) + '.svg'" :alt="pokemon.name"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        



    </div>
</template>

<style scoped>
.contudo-tela-pokemons{
    margin-bottom: 100px;
}
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
.listagem-pokemons{
    max-height: 420px;
    overflow-y: scroll;
}
.card-pokemon{
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    padding: 1rem;
    max-width: 150px;
    margin: .4rem;
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