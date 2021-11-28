<template>
  <div class="stepper">
    <h3>結帳</h3>
    <div class="stepper-process">
      <div class="first-step">
        <span v-if="currentStep > 1" class="step-icon completed"></span>
        <span v-else :class="['step-icon', { active: currentStep === 1 }]">1</span>
        <span class="step-description">寄送地址</span>
      </div>
      <span class="connect-line"></span>
      <div class="second-step">
        <span v-if="currentStep > 2" class="step-icon completed"></span>
        <span v-else :class="['step-icon', 'pending', { active: currentStep === 2 }]">2</span>
        <span :class="['step-description', 'pending-text', {'active-text': currentStep >= 2}]">運送方式</span>
      </div>
      <span class="connect-line"></span>
      <div class="third-step">
        <span :class="['step-icon', 'pending', { active: currentStep === 3 }]">3</span>
        <span :class="['step-description', 'pending-text', {'active-text': currentStep === 3}]">付款資訊</span>
      </div>
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
@use "./../assets/scss/_breakpoints.scss";

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

    .step-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 16px;

      @include breakpoints.desktop {
        display: inline-block;
        text-align: center;
        line-height: 32px;
        margin-right: 8px;
        vertical-align: middle;
      }
    }

    .step-description {
      @include breakpoints.desktop {
        font-size: 16px;
        vertical-align: middle;
      }
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

    .pending-text {
      color: #afb1bd;
    }
    
    .active-text {
      color: color.$black;
    }
  }
}
</style>
