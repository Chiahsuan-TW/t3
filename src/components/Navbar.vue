<template>
  <header>
    <div class="container">
      <div class="menu">
        <button @click="toggleMenu" class="menu-hamburger"></button>
        <a href="#" class="menu-brand">
          <div><img src="@/assets/images/logo.png" alt="alpha logo"></div>
          <h1>Alpha Shop</h1>
        </a>
      </div>
      <nav class="desktop menu-list">
          <a href="##" class="menu-list-item">男款</a>
          <a href="##" class="menu-list-item">女款</a>
          <a href="##" class="menu-list-item">最新消息</a>
          <a href="##" class="menu-list-item">聯絡我們</a>
          <a href="##" class="menu-list-item">客製商品</a>
      </nav>
      <div class="desktop service">
        <button class="service-search"></button>
        <a href="##" class="service-cart"></a>
        <button class="service-dark-mode"></button>
      </div>

      <!--dropdown for mobile-->
      <div :class="['dropdown', {'dropdown-show' : visibility }]">
        <nav class="menu-list">
          <a href="##" class="menu-list-item">男款</a>
          <a href="##" class="menu-list-item">女款</a>
          <a href="##" class="menu-list-item">最新消息</a>
          <a href="##" class="menu-list-item">聯絡我們</a>
          <a href="##" class="menu-list-item">客製商品</a>
        </nav>
        <div class="service">
          <button class="service-search"></button>
          <a href="##" class="service-cart"></a>
          <button class="service-dark-mode"></button>
        </div>
      </div>
    </div>
  </header>
</template>


<script>

export default {
  name: 'Navbar',
  data() {
    return {
      visibility: false,
    }
  },
  methods: {
    toggleMenu() {
      this.visibility = !this.visibility
    }
  }
}
</script>

<style lang="scss" scoped>
@use './../assets/scss/_color.scss';
@use './../assets/scss/_breakpoints.scss';

* {
  color: color.$black;
}

.container {
  max-width: 375px;
  padding: 20px 17px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @include breakpoints.desktop {
    padding: 0;
    max-width: 992px;
    flex-direction: row;
    align-items: center;
  }
}

.menu {
  display: flex;
  align-items: center;
  position: relative;

  > button {
    position: absolute;
    background: url('./../assets/images/hamburger.png') no-repeat;
    width: 20px;
    height: 20px;
    cursor: pointer;

    @include breakpoints.desktop {
      display: none;
    }
  }

  &-brand {
    display: flex;
    gap: 8px;
    align-items: center;
    margin: 0 auto;
    


    img {
      vertical-align: middle;
    }

    h1 {
      font-size: 20px;
      font-weight: 600;

    }
  }

  &-list {
    display: flex;
    flex-direction: column;

    &-item {
      padding: 24px;
      border-bottom: 1px solid rgba(42, 42, 42, 0.1);

      @include breakpoints.desktop {
        border-bottom: none;
        padding: 12px;
      }
    }
  }
}


.desktop.menu-list {
  display: none;

  @include breakpoints.desktop {
    display: flex;
    order: -2;
    max-width: 992px;
    flex-direction: row;
    margin-right: 50px;
  }
  
}

.desktop.service {
  display: none;

  @include breakpoints.desktop {
    display: flex;
  }
}



.dropdown {
  display: none;
}

.dropdown-show {
  display: block;
}

.service {
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 24px;

  @include breakpoints.desktop {
    margin-left: auto;
  }


  > * {
    width: 24px;
    height: 24px;
  }

  &-search {
    background: url('./../assets/images/magnifier.png') no-repeat;
  }

  &-cart {
    background: url('./../assets/images/cart.png') no-repeat;
  }

  &-dark-mode {
    background: url('./../assets/images/moon.png') no-repeat;
  }

}


</style>