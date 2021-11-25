<template>
  <div class="home">
    <h1>This is an about page</h1>
  </div>

  <ShoppingCart :products="products" @click-plus="addItem" @click-minus="removeItem"/>
</template>

<script>
export default {
  
}
</script>

