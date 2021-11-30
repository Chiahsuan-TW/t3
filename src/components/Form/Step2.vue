<template>
  <fieldset>
    <legend>運送方式</legend>
    <div class="option-group">
      <input
        v-model="shipping"
        type="radio"
        id="standard"
        name="shipping"
        value="0"
      />
      <label for="standard">
        <span>標準運送</span>
        <span>約 3~7 個工作天</span>
      </label>
      <span>免費</span>
    </div>
    <div class="option-group">
      <input
        v-model="shipping"
        type="radio"
        id="DHL"
        name="shipping"
        value="500"
      />
      <label for="DHL">
        <span>DHL 貨運</span>
        <span>48 小時內送達</span>
      </label>
      <span>$500</span>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "Step2",
  emits: {
    input: null
  },
  data() {
    return {
      shipping: 0,
    };
  },
  // 綁定點擊事件shipping的價格資料不是當下點選的那個？？
  methods: {
    selectDelivery(newValue) {
      console.log(this.shipping);
      // this.$emit('select-delivery', this.shipping)
      this.$emit("select-delivery", newValue);
    },
  },
  watch: {
    shipping(newValue) {
      this.selectDelivery(newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoints.scss";
@use "@/assets/scss/_color.scss";

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

  @include breakpoints.desktop {
    width: 70%;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  label:hover {
    cursor: pointer;
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
