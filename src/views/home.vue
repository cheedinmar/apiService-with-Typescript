<template>
 <div class="bg-black">
  <div class="flex relative text-center">
  <h1 class="text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center z-10 content-center absolute text-center w-full md:text-4xl">Welcome to Lightning deals</h1>
  <img class="w-full object-cover h-72 block mx-auto  sm:block sm:w-full" 
  src="https://images.unsplash.com/photo-1505934333218-8fe21ff87e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
   alt="Banner" width="1920" height="288" />
  </div>
  </div>
  
  <div class="p-5 mx-auto max-w-screen-xl">
  <h2 class="font-bold uppercase text-xl pb-4">Best sellers</h2>
  
  <div class="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">

  <div v-for="product in allProducts" :key="product.id">
  <img class=" mb-1 border-solid h-48 w-48 hover:border-yellow-500" alt="Best seller" 
  :src=product.image loading="lazy" />
   <h2 class="pt-2 m-0 leading-4 font-semibold">{{product.title}}</h2>
   <p>${{product.price}}</p>
   <p class="text-green-500 italic font-medium">In Stock</p>
    </div>
>
  
  </div>
  </div>

  <div class="bg-gray-200">
    <section class="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
    <article class="flex-col justify-center inline-flex self-stretch  p-6">
      <h2 class="uppercase font-semibold text-xl">Design</h2>
      <strong class="text-lg pb-2 font-normal font-sans sm:text-2xl">Our 30 Year Journey</strong>
      <p class="text-sm pb-4">Join us as we revisit our roots, tracing the path from bright idea to industry disruptors with a plan to fight climate change while creating beautiful things. </p>
      <button class="font-semibold uppercase border-black border p-3 max-w-max hover:bg-gray-600 hover:text-white">Join us</button>
    </article>
    <figure>
    <img 
    src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
    alt="Banner" looding="lazy" />
    </figure>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { apiService } from '@/services/apiService';
import { IAllProducts } from '@/types/apiTypes';
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue';
const api = new apiService()
const token = localStorage.getItem("token");
const allProducts = ref<Array<IAllProducts>>([])

function getAllProducts(){
  api.getRequest("/products").then((response)=>{
    allProducts.value = response
    return response
  })
}
getAllProducts()


</script>
