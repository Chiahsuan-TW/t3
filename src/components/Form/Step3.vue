<template>
  <fieldset>
    <legend>付款資訊</legend>
    <div class="input-group">
      <label for="name">持卡人姓名</label>
      <input
        @input="$emit('input', { cardHolder: $event.target.value })"
        id="name"
        required
        placeholder="John Doe"
        type="text"
      />
    </div>
    <div class="input-group">
      <label for="card-number">卡號</label>
      <input
        @input="$emit('input', { cardNumber: $event.target.value })"
        id="card-number"
        required
        placeholder="1111 2222 3333 4444"
        type="text"
      />
    </div>
    <div class="input-group">
      <label for="expiration">有效期限</label>
      <input
        @input="$emit('input', { expiration: $event.target.value })"
        id="expiration"
        required
        placeholder="MM/YY"
        type="text"
      />
    </div>
    <div class="input-group">
      <label for="cvc">CVC / CCV</label>
      <input
        @input="$emit('input', { cvc: $event.target.value })"
        id="cvc"
        required
        placeholder="123"
        type="text"
      />
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "Step3",
  emits: {
    input: null,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoints.scss";

form {
  margin-top: 24px;
}

fieldset {
  display: flex;
  flex-wrap: wrap;
  // gap: 5%;
  border: 0;
  text-align: left;
  font-size: 0;

  legend {
    font-weight: bold;
    font-size: 24px;
  }

  .input-group {
    flex: 1 0 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }

  @include breakpoints.desktop {
    justify-content: space-between;
  }

  .input-group {
    @include breakpoints.desktop {
      max-width: 70%;
    }
  }

  .input-group:nth-child(4) {
    @include breakpoints.desktop {
      max-width: 48%;
    }
  }

  .input-group:nth-child(5) {
    @include breakpoints.desktop {
      max-width: 48%;
    }
  }

  input {
    padding: 12px 18px;
  }
}
</style>
