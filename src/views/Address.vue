<template>
  <div class="container">
    
    <Stepper />
    
    <!-- <ShoppingCart /> -->
    <router-link class="next" :to="{name: 'Shipping'}"><Button class="next">下一步 -></Button></router-link>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Stepper from '@/components/Stepper.vue'
// import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: "Address",
  components: {
    Button,
    Stepper,
    // ShoppingCart
  },
  data() {
    return {
      genders: ["先生", "女士", "小姐", "無需稱謂"],
      name: "",
      mobile: "",
      email: "",
      county: [],
      address: "",

      products: [
        {id: 1, name: "破壞補丁修身牛仔褲", price: 3999,  quantity: 0},
        {id: 2, name: "刷色直筒牛仔褲", price: 1299,  quantity: 0}
      ]
    }
  }
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

  > div:nth-child(2) {
    max-width: 40%;

    @include breakpoints.desktop {
      max-width: 35%;
    }
  }

  > div:nth-child(3) {
    max-width: 55%;

    @include breakpoints.desktop {
      max-width: 60%;
    }
  }

  @include breakpoints.desktop {
    > div:nth-child(4) {
      max-width: 45%;
    }
    > div:nth-child(5) {
      max-width: 50%;
    }

    > div:nth-child(6) {
      max-width: 35%;
    }
    > div:nth-child(7) {
      max-width: 60%;
    }
  }
  
  label {
    align-self: flex-start;
  }

  select {
    padding: 12px 18px;
  }

  input {
    padding: 12px 18px;
  }
}

.next {
  display: block;
  margin-left: auto;
}




</style>

