<template>
  <div class="shopping-cart">
    <div class="product">
      <div class="product-item">
          <div class="product-item-image"><img src="./../assets/images/product-1.png" alt=""></div>
          <div class="product-item-detail">
            <div class="detail-group">
              <h3>產品名稱</h3>
              <div class="select">
                <button class="remove">＋</button>
                <span class="amount">1</span>
                <button class="add">-</button>
              </div>
            </div>
            <div class="detail-group">
              <span class="amount">$3999</span>
            </div>
          </div>
      </div>
    </div>
    <div class="shipping">
        <span>運費</span>
        <span>免費</span>
    </div>
    <div class="total">
        <span>小計</span>
        <span>XXXX</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
}
</script>


<style lang="scss" scoped>
@use './../assets/scss/_breakpoints.scss';


/*shopping-cart*/
.shopping-cart {
  padding: 16px 18px;
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
    }
  }
}

.shipping {
  display: flex;
  justify-content: space-between;
  padding: 18px 0 36px 0;
  border-top: 1px solid #F0F0F5; 
}

.total {
  display: flex;
  justify-content: space-between;
  padding: 18px 0 36px 0;
  border-top: 1px solid #F0F0F5;
}
</style>