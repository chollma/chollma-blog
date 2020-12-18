<template>
  <header class="header">
    <div class="header__top">
      <ul class="header__social">
        <li>
          <g-link to="https://twitter.com/CooperHollmaier"
            ><g-image src="~/assets/img/twitter.svg" alt="Twitter"
          /></g-link>
        </li>
        <li>
          <g-link to="https://www.instagram.com/cooperhollmaier/"
            ><g-image src="~/assets/img/instagram.svg" alt="Instagram"
          /></g-link>
        </li>
        <li>
          <g-link to="https://www.youtube.com/channel/UCWyuE3usgzzuPIdmR_6iRWA">
            <g-image src="~/assets/img/youtube.svg" alt="YouTube"
          /></g-link>
        </li>
        <li>
          <g-link to="https://dev.to/chollma">
            <g-image src="~/assets/img/dev-dot-to.svg" alt="Dev.to"
          /></g-link>
        </li>
        <li>
          <g-link to="https://github.com/chollma"
            ><g-image src="~/assets/img/github.svg" alt="Github"
          /></g-link>
        </li>
      </ul>
      
      <ul class="header__cta">
        <li><g-link to="/">Subscribe</g-link></li>
      </ul>
    </div>
     
    <div class="header__logo">
      <g-link to="/" alt="Cooper Hollmaier">CH</g-link>
    </div>
    

    <div class="header__menu">
      <ul class="header__menu__ul">
        <li><a href="/">Home</a></li>
        <li><a href="/talks">Talks</a></li>
        <li><a href="/code">Code</a></li>
        <li><a href="/articles">Blog</a></li>
      </ul>
    </div>

   
  </header>
</template>

<script></script>

<style lang="scss">
@import "~/assets/scss/mixins";

.header {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 80ch)
    minmax(1.2rem, 1fr);
  grid-template-rows: auto;

  &__top {
    grid-column: 2;
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  &__social {
    grid-column: 2;
    max-width: 50%;
    padding: 0;
    li {
      margin: 0 0.75rem 0 0;
    }
    @include breakpoint-down(medium) {
      display: none;
    }
  }

  &__cta {
    grid-column: 2;
    text-align: right;
    font-size: 1.125rem;
    max-width: 50%;

    a {
      color: #303030;
    }

    li {
      margin: 0 0 0 1rem;
    }

    @include breakpoint-down(medium) {
      display: none;
    }
  }

  &__logo {
    grid-column: 2;
    font-family: "Lato", sans-serif;
    font-size: 4rem;
    font-weight: 900;
    text-align: center;
    color: #405e58;
    padding-bottom: 0.75rem;

    a {
      color: #405e58;
    }

    @include breakpoint-down(medium) {
      text-align: left;
      font-size: 2rem;
      max-width: 50%;
    }
  }
  &__menu {
    grid-column: 2;
    font-family: "Vollkorn", serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 2rem;
    &:before,
    &:after {
      content: "";
      background: hsla(0, 0%, 39%, 1);
      padding: 0.5px;
      flex: 100%;
    }
    a {
      color: #303030;
    }

    @include breakpoint-down(medium) {
      margin-bottom: 0;
      a {
        display: none;
      }

      &:after {
        display: none;
      }
    }
  }
  &__menu__ul {
    li {
      display: inline-block;
      margin: 0.25rem 1rem;
      text-align: center;
    }
  }


}

ul li {
  display: inline-block;
}
</style>
