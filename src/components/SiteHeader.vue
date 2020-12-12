<template>
  <header class="header">
    <nav class="flex flex-jc-sb flex-ai-c">
      <g-link class="header__logo" to="/">
        <g-image
          src="https://via.placeholder.com/175x30"
          alt="Cooper Hollmaier"
        />
      </g-link>

      <g-link class="header__menu hide-for-desktop" to="/">
        <span></span>
        <span></span>
        <span></span>
      </g-link>


      <div class="header__links hide-for-mobile">
          <g-link class="header__menu" to="/">Home</g-link>
          <g-link class="header__menu" to="/speaking">Speaking</g-link>
          <g-link class="header__menu" to="/projects">Projects</g-link>
          <g-link class="header__menu" to="/articles">Articles</g-link>
          
      </div>
      <button type="button" class="header__cta hide-for-mobile">Sign-Up</button>
    </nav>
  </header>
</template>

<script></script>

<style lang="scss">
.header {
    font-family: "Lato", sans-serif;

    nav {
      padding: 1.0625px 1.5rem;
    }
  &__logo {
    img {
        width: 8.8125rem;
        height: 1.375rem;
    }
  }

  &__menu {
    > span {
      display: block;
      width: 26px;
      height: 2px;
      background-color: #405e58;

      &:not(:last-child) {
        margin-bottom: 5px;
    }
    
    }

     
  }

  &__links {

      a {
          font-size: 0.875rem;
          color: black;
          transition: color 200ms ease-in-out;
          position:relative;
          &:not(:last-child){
            margin-right: 32px;
          }
          &:hover {
            color:#585656;

             &::before {
            content: "";
            position: absolute;
            width: 100%;
            display: block;
            height: 3px;
            background: #405E58;
            left: 0;
            right: 0;
            bottom: -15px;
          }
          }
         

      }

      

   

  }

     
}
</style>
