<template>
  <div class="container">
    <Stepper />
    <form>
      
    </form>

    <!-- <ShoppingCart /> -->
  </div>
  <!-- <router-link :to="{name: 'Address'}">上一步</router-link> -->
  <!-- <router-link :to="{name: 'Checkout'}"><Button>下一步</Button></router-link> -->
</template>

<script>
import Button from "@/components/Button"
import Stepper from "@/components/Stepper"
// import ShoppingCart from "@/components/ShoppingCart"

export default {
  name: 'Shipping',
  components: {
    Button,
    Stepper,
    // ShoppingCart
  },
}
</script>

<style lang="scss" scoped>
@use './../assets/scss/_breakpoints.scss';
@use './../assets/scss/_color.scss';

.container {
  max-width: 375px;
  margin: 0 auto;

  @include breakpoints.desktop {
    max-width: 50%;
  }
}

form {
  margin-top: 24px;
}

fieldset {
  border: 0;
  text-align: left;
  font-size: 0;

  legend {
    font-weight: bold;
    font-size: 24px;
  }
}

.option-group {
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding: 10px 20px;
  border: 1px solid color.$black;
  border-radius: 4px;


  label {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-right: 20px;
    padding: 12px 18px;
  
  }

  span:first-child {
    font-size: 14px;
  }

  span:last-child {
    margin-left: auto;
    align-self: flex-start;
  }
}

span:last-child {
  font-size: 12px;
  color: #000;
}
</style>