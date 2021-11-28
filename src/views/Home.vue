<template>
  <div class="container">
    <section>
      <Stepper :currentStep="currentStep" />
      <form id="paymentInofo" @sumbit.prevent="confirm(formData)">
        <keep-alive>
          <component
            :is="`Step${currentStep}`"
            @select-delivery="getShipping"
            @input="update"
            :formData="formData"
          ></component>
        </keep-alive>
      </form>
    </section>
    <ShoppingCart
      :products="products"
      :shipping="formData.shipping"
      @click-plus="addItem"
      @click-minus="removeItem"
    />
    <section :class="['button-group', {'buttons-group': currentStep > 1}]">
      <Button v-show="currentStep > 1" @click="previous">上一步</Button>
      <Button v-if="currentStep === 3" type="submit" form="paymentInfo" @click.stop.prevent="confirm(formData)">確認下單</Button>
      <Button v-else @click="next">下一步</Button>
    </section>
    <!-- isTrusted哪來的？？？ -->
    <!-- <pre>{{ formData }}</pre> -->
  </div>
</template>

<script>
import Stepper from "@/components/Stepper";
import Button from "@/components/Button";
import ShoppingCart from "@/components/ShoppingCart";
import Step1 from "@/components/Form/Step1";
import Step2 from "@/components/Form/Step2";
import Step3 from "@/components/Form/Step3";

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
      // shipping: 0,
      total: 0,
      products: [
        {
          id: 1,
          name: "破壞補丁修身牛仔褲",
          price: 3999,
          quantity: 0,
          image: require("@/assets/images/product-1.png"),
        },
        {
          id: 2,
          name: "刷色直筒牛仔褲",
          price: 1299,
          quantity: 0,
          image: require("@/assets/images/product-2.png"),
        },
      ],
      formData: {
        title: "",
        name: "",
        mobile: "",
        email: "",
        county: "",
        address: "",
        shipping: 0,
        cardHolder: "",
        cardNumber: "",
        expiration: "",
        cvc: "",
      },
    };
  },
  methods: {
    addItem(product) {
      product.quantity += 1;
    },
    removeItem(product) {
      if (!product.quantity) return;
      product.quantity -= 1;
    },
    next() {
      this.currentStep += 1;
    },
    previous() {
      this.currentStep -= 1;
    },
    getShipping(value) {
      console.log('parent',value)
      this.formData.shipping = Number(value);
    },
    update(value) {
      console.log(value)
      this.formData = {
        ...this.formData,
        ...value,
      }
    },
    confirm(formData) {
      const form = JSON.stringify(formData)
      localStorage.setItem('paymentInfo', form)
    }  
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoints.scss";

.container {
  max-width: 375px;
  margin: 0 auto;
  padding: 0 17px 40px 17px;
  text-align: right;

  @include breakpoints.desktop {
    max-width: 992px;
    margin-top: 80px;
    padding: 0;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
}

section {
  @include breakpoints.desktop {
    flex-basis: 50%;
  }
}

section:first-child {
  @include breakpoints.desktop {
    margin-bottom: 24px;
  }
}

form {
  margin-top: 24px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
}

.buttons-group {
  justify-content: space-between;
}
</style>
