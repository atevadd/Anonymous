<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="brand-logo">Anon</router-link>
      <nav class="nav">
        <a href="" class="nav__link">Home</a>
        <a href="" class="nav__link">Features</a>
        <a href="" class="nav__link">Get started</a>
        <a href="" class="nav__link">FAQ</a>
      </nav>
      <div class="toggle">
        <i class="uil uil-bars"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "BaseNavbar",
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: relative;
  background: #5f2c82; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #49a09d,
    #5f2c82
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #49a09d,
    #5f2c82
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: $white;
  padding: 20px 0;

  .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 0;
  }
  // The brand logo
  .brand-logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: $white;
    text-decoration: none;
  }

  // The navigation menu
  .nav {
    display: flex;
    align-items: center;

    @include mobile{
        // display: none;
        order: 3;
        position: absolute;
        top: 0;
        left: 0;
        width: 70%;
        min-height: 100vh;
        background: red;
        flex-direction: column;
        align-items: flex-start;
        // justify-content: center;
    }

    &__link {
      margin: 0 20px;
      color: $white;
      transition: transform 0.2s ease;
      padding: 5px 0;

      @include mobile{
        display: block;
        width: 100%;
        border: 1px solid green;
        font-size: 1.4rem;
        margin: 10px 0;
        padding: 0 10px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  //   The navigation menu toggle
  .toggle {
    display: none;

    @include mobile{
        display: block;
        order: 2;

        i{
            font-size: 1.6rem;
        }
    }
  }
}
</style>