<template>
  <div class="container">
    <Stepper />

    <form>
        <fieldset>
          <legend>付款資訊</legend>
          <div class="input-group"><label for="name">持卡人姓名</label><input id="name" placeholder="John Doe" type="text"></div>
          <div class="input-group"><label for="card-number">卡號</label><input id="card-number" placeholder="1111 2222 3333 4444" type="text"></div>
          <div class="input-group"><label for="expiration">有效期限</label><input id="expiration" placeholder="MM/YY" type="text"></div>
          <div class="input-group"><label for="cvc">CVC / CCV</label><input id="cvc" placeholder="123" type="text"></div>
        </fieldset>
    </form>

    <ShoppingCart/>
  </div>
  <router-link :to="{name: 'Shipping'}">上一步</router-link>
  <router-link :to="{name: 'Shipping'}"><Button>確認下單</Button></router-link>
</template>

<script>
import Button from "@/components/Button"
import Stepper from "@/components/Stepper"
import ShoppingCart from "@/components/ShoppingCart"


export default {
  name: "Checkout",
  components: {
    Button,
    Stepper,
    ShoppingCart
  },
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