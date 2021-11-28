<template>
  <button class="next">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss" scoped>
@use "./../assets/scss/_color.scss";
@use "./../assets/scss/_breakpoints.scss";

button {
  padding: 14px 39px;
  background-color: color.$pink;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  width: 50%;

  @include breakpoints.desktop {
    width: 30%;
  }
}

button:hover {
  cursor: pointer;
}
</style>
