<template>
  <div class="container">
    <Stepper />
    <form>
      <keep-alive>
        <component
          :is="`Step${currentStep}`"
          @select-delivery="getShipping"
        ></component>
      </keep-alive>
    </form>
    <ShoppingCart 
      :products="products" 
      :shipping="shipping" 
      @click-plus="addItem" 
      @click-minus="removeItem"/>
    <Button v-show="currentStep > 1" @click="previous">上一步</Button>
    <Button v-if="currentStep === 3">確認下單</Button>
    <Button v-else @click="next">下一步</Button>
  </div>
</template>

<script>
import Stepper from '@/components/Stepper'
import Button from "@/components/Button"
import ShoppingCart from '@/components/ShoppingCart'
import Step1 from '@/components/Form/Step1'
import Step2 from '@/components/Form/Step2'
import Step3 from '@/components/Form/Step3'

export default {
  components: {
    Stepper,
    Button,
    ShoppingCart,
    Step1,
    Step2,
    Step3,
  },
  data() {
    return {
      currentStep: 1,
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
    },
    next() {
      this.currentStep += 1
    },
    previous() {
      this.currentStep -= 1
    },
    getShipping(value) {
      // console.log('parent',value)
      this.shipping = Number(value)
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss';


.container {
  max-width: 375px;
  margin: 0 auto;
  padding: 0 17px 40px 17px;

  @include breakpoints.desktop {
    max-width: 50%;
  }
}

form {
    margin-top: 24px;
  }

</style>