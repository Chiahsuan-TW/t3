<template>
  <div class="container">
    
    <Stepper />
    <form>
      <fieldset>
        <legend>填寫地址</legend>
        <div class="input-group">
          <label for="title">稱謂</label>
          <select name="title" id="title">
            <option value=""></option>
          </select>
        </div>
        <div class="input-group"><label for="name">姓名</label><input id="name" placeholder="請輸入姓名" type="text"></div>
        <div class="input-group"><label for="tel">電話</label><input id="tel" placeholder="請輸入行動電話" type="tel"></div>
        <div class="input-group"><label for="email">Email</label><input id="email" placeholder="請輸入電子郵件" type="email"></div>
        <div class="input-group">
          <label for="county">縣市</label>
          <select name="county" id="county">
            <option value="" placeholder="請選擇縣市" ></option>
          </select>
        </div>
        <div class="input-group"><label for="address">地址</label><input id="address" placeholder="請輸入地址" type="text"></div>
      </fieldset>
    </form>

    
    <ShoppingCart />
    <router-link class="next" :to="{name: 'Shipping'}"><Button class="next">下一步 -></Button></router-link>
  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue'
import Button from '@/components/Button.vue'
import Stepper from '@/components/Stepper.vue'

export default {
  name: "Address",
  components: {
    ShoppingCart,
    Button,
    Stepper
  },
  data() {
    return {
      gender: [],
      county: []
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

