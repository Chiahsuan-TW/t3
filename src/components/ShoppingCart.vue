<template>
  <div class="shopping-cart">
    <div class="product">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div class="product-item-image">
          <img :src="product.image" alt="" />
        </div>
        <div class="product-item-detail">
          <div class="detail-group">
            <h3>{{ product.name }}</h3>
            <div class="select">
              <button class="add" @click.stop="addItem(product)">＋</button>
              <span class="amount">{{ product.quantity }}</span>
              <button class="remove" @click="removeItem(product)">-</button>
            </div>
          </div>
          <div class="detail-group">
            <span class="amount">${{ product.price }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shipping">
      <span>運費</span>
      <span>{{ shipping === 0 ? "免費" : shipping }}</span>
    </div>
    <div class="total">
      <span>小計</span>
      <span>{{ getTotal }}</span>
    </div>
  </div>  
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    products: {
      type: Array,
      required: true,
    },
    shipping: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addItem(product) {
      this.$emit("click-plus", product);
    },
    removeItem(product) {
      this.$emit("click-minus", product);
    },
  },
  computed: {
    getTotal() {
      return (
        this.shipping +
        this.products.reduce((acc, item) => {
          acc += item.price * item.quantity;
          return acc;
        }, 0)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./../assets/scss/_breakpoints.scss";

/*shopping-cart*/

.shopping-cart {
  padding: 16px 18px;

  @include breakpoints.desktop {
    flex-basis: 35%;
    border: 1px solid #F0F0F5;
    border-radius: 8px;
    position: relative;
    top: 60px;
  }
}

.product {
  &-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    font-size: 14px;

    &-detail {
      @include breakpoints.desktop {
        display: flex;
        gap: 61px;
      }
    }
  }
}

.detail-group {
  .select {
    .amount {
      margin: 0 10px;
    }

    button {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}

.shipping {
  display: flex;
  justify-content: space-between;
  padding: 18px 0 36px 0;
  border-top: 1px solid #f0f0f5;
}

.total {
  display: flex;
  justify-content: space-between;
  padding: 18px 0 36px 0;
  border-top: 1px solid #f0f0f5;
}
</style>
