<template>
  <div class="stepper">
      <h3>結帳</h3>
      <div class="stepper-process">
        <span class="active">1</span>
        <span class="connect-line"></span>
        <span class="pending">2</span>
        <span class="connect-line"></span>
        <span class="pending">3</span>
      </div>
    </div>
</template>


<script>

export default {
  name: "Stepper"
}
</script>

<style lang="scss" scoped>
@use './../assets/scss/_color.scss';

/*stepper*/
.stepper {
  font-size: 0;

  h3 {
    text-align: left;
    font-weight: bold;
    font-size: 24px;
    color: color.$black;
  }

  &-process {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 16px;
    }

    .connect-line {
      width: 60px;
      height: 1px;
      background-color: #F0F0F5;
      border-radius: 0;
    }

    .active + .connect-line {
      background-color: #000;
    }

    .pending {
      border: 1px solid #AFB1BD;
      color: #AFB1BD;
    }

    .active {
      border: 1px solid color.$black;
      color: color.$black;
    }

    .completed {
      border: 0;
      background-color: color.$black;
      color: #FFF;
    }
  }
}
</style>