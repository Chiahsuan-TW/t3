<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <Navbar/>
  <router-view />
  <!-- <ShoppingCart :products="products" @click-plus="addItem" @click-minus="removeItem"/> -->
</template>

<script>
import Navbar from "@/components/Navbar"
import ShoppingCart from "@/components/ShoppingCart"

export default  {
  components: {
    Navbar,
    ShoppingCart
  },
  data() {
    return {
      shipping: 0,
      total: 0,
      products: [
        {id: 1, name: "破壞補丁修身牛仔褲", price: 3999,  quantity: 0, image: require("@/assets/images/product-1.png")},
        {id: 2, name: "刷色直筒牛仔褲", price: 1299,  quantity: 0, image: require("@/assets/images/product-2.png")}
      ]
    }
  },
  methods: {
    addItem(product) {
      product.quantity += 1;
    },
    removeItem(product) {
      if(!product.quantity) return
      product.quantity -= 1;
    }
  },
}
</script>


<style lang="scss">

</style>
