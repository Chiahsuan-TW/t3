<template>
  <button class="next">
      <slot></slot>
  </button>
</template>


<script>
export default {
  name: "Button"
}
</script>

<style lang="scss" scoped>
@use './../assets/scss/_color.scss';

button {
  padding: 14px 39px;
  background-color: color.$pink;
  border-radius: 8px;
  font-size: 14px;
  color: #FFF;
  width: 50%;

}
</style>