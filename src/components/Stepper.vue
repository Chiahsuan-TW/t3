<template>
  <div class="stepper">
    <h3>結帳</h3>
    <div class="stepper-process">
      <span v-if="currentStep > 1" class="completed"></span>
      <span v-else :class="{ active: currentStep === 1 }">1</span>
      <span class="connect-line"></span>
      <span v-if="currentStep > 2" class="completed"></span>
      <span v-else :class="['pending', { active: currentStep === 2 }]">2</span>
      <span class="connect-line"></span>
      <span :class="['pending', { active: currentStep === 3 }]">3</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./../assets/scss/_color.scss";

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
      background-color: #afb1bd;
      border-radius: 0;
    }

    .active + .connect-line {
      background-color: #000;
    }

    .completed + .connect-line {
      background-color: #000;
    }

    .pending {
      border: 1px solid #afb1bd;
      color: #afb1bd;
    }

    .active {
      border: 1px solid color.$black;
      color: color.$black;
    }

    .completed {
      border: 0;
      background: url("./../assets/images/check.png") no-repeat center center;
      background-color: color.$black;
      color: #fff;
    }
  }
}
</style>
