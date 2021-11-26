<template>
  <div class="container">
    <Stepper />

    <form>
        
    </form>
    <!-- <ShoppingCart /> -->
  </div>
  <!-- <router-link :to="{name: 'Shipping'}">上一步</router-link> -->
  <!-- <router-link :to="{name: 'Shipping'}"><Button>確認下單</Button></router-link> -->
</template>

<script>
import Stepper from "@/components/Stepper"
// import ShoppingCart from "@/components/ShoppingCart"


export default {
  name: "Checkout",
  components: {
    Button,
    Stepper,
    // ShoppingCart
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@use './../assets/scss/_breakpoints.scss';

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
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  border: 0;
  text-align: left;
  font-size: 0;

  legend {
    font-weight: bold;
    font-size: 24px;
  }

  > div {
    flex: 1 0 100%;
    display: flex;
    flex-direction: column; 
    margin-top: 24px;
  }

  input {
    padding: 12px 18px;
  }
}

</style>