<template>
    <div
        class="fixed z-50 justify-center items-center top-0 w-screen h-screen flex bg-black bg-opacity-40 overlay py-4 px-2"
        :class="state ? 'block' : 'hidden'"
        style="font-family: BRFirma"
        ref="overlay"
        @click="clickOverlay"
    >
        <div
            class="bg-gray-100 relative my-1/6 lg:px-8 md:px-5 px-3 pb-9 border rounded-md flex flex-col mx-3 lg:mx-auto lg:w-5/12 md:w-1/2 w-11/12 w-screen"
            style="max-height: 87vh;"
        >
           
            <div class="flex my-5 justify-between items-center pt-0">
                <div>
                    <h3
                        class="text-gray-600 font-bold text-3xl text-brand uppercase text-center"
                    >{{ title }}</h3>
                </div>

                <span
                    v-if="!hideCloseButton"
                    class="text-primary   text-xl font-semibold hover:text-black no-undeline cursor-pointer"
                    @click="toggleModal"
                >&times;</span>
            </div>

            <div class="mt-4 flex flex-col h-auto overflow-y-scroll">
               <form class="space-y-3 "> 
                   <div class="flex items-center justify-between">
                       <input type="text" placeholder="Product Title" v-model="product_title" class="rounded-lg bg-gray-300 py-2 px-3"/>
                       <input type="text" placeholder="Product Price" v-model="product_price" class="rounded-lg bg-gray-300 py-2 px-3"/>
                   </div>
                    <div class="flex items-center justify-between">
                       <input type="text" placeholder="Product Description" v-model="product_description" class="rounded-lg bg-gray-300 py-2 px-3"/>
                       <input type="text" placeholder="Product Category" v-model="product_category" class="rounded-lg bg-gray-300 py-2 px-3"/>
                   </div>
                   <button class="bg-red-600  right-0  py-2 px-3 rounded-lg text-white font-bold ">Add Product</button>
                   
               </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps<{
    title: string,
    product_title: {
        type: string,
        default: "",
    },
    product_price: {
       type: string,
        default: "",
    },
    product_description: {
        type: string,
        default: "",

    },
     product_category: {
        type: string,
        default: "",

    },
      overlayClose: {
        type: boolean,
    }
}>()
const state = ref<boolean>(true)
const overlay = ref(null)
function toggleModal(){
          state.value= !state.value
         
      }
    function  clickOverlay(event:MouseEvent){
        
        if(event.target == overlay.value){
          //only toggle modal closure if user wants to modal to close when overlay is clicked
         if (props.overlayClose) toggleModal();
        }
      }



</script>