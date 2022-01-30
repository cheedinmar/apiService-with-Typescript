<template>
  <div class="home">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts" setup>
import { apiService } from '@/services/apiService';
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const token = localStorage.getItem("token");
function guardHome(){
  if(route.path == "/home" && !token){
    router.push("/login")
  }
}
guardHome()


</script>
