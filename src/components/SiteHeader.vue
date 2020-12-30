<template>
  <header class="header">
    <div class="header__top flex flex-jc-sb flex-ai-c">
      <ul class="header__social hide-for-mobile">
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
      <div class="header__logo">
        <g-link to="/" alt="Cooper Hollmaier">CH</g-link>
      </div>
      <ul class="header__cta hide-for-mobile">
        <li><a target="_blank" rel="noopener" href="https://prodigious-pioneer-1471.ck.page/617bb6fde8">Subscribe</a></li>
      </ul>

      <a href="#" id="btnHamburger" class="header__hamburger hide-for-desktop">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="header__menu ">
      <ul id="menu" class="header__menu__ul ">
        <li><a href="/">Home</a></li>
        <li><a href="/talks/">Talks</a></li>
        <li><a href="/code/">Code</a></li>
        <li><a href="/articles/">Blog</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  metaInfo: {},
  mounted() {
    const btnHamburger = document.querySelector("#btnHamburger");
    const menu = document.querySelector("#menu");
    btnHamburger.addEventListener("click", function() {
      if (btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
        menu.style.display = "none";
      } else {
        btnHamburger.classList.add("open");
        menu.style.display = "block";
      }
    });
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/mixins";

.header {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 80ch)
    minmax(1.2rem, 1fr);

  &__top {
    grid-column: 2;
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 10px 0 5px 0;
  }

  &__social {
    grid-column: 2;
    max-width: 50%;
    padding: 0;
    li {
      margin: 0 0.75rem 0 0;
    }
  }

  &__hamburger {
    > span {
      display: block;
      width: 26px;
      height: 2px;
      background-color: #303030;
      transition: all 300ms ease-in-out;
      transform-origin: 3px 1px;

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
    &.open {
      > span:first-child {
        transform: rotate(45deg);
      }
      > span:nth-child(2) {
        opacity: 0;
      }
      > span:last-child {
        transform: rotate(-45deg);
      }
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
  }

  &__logo {
    font-family: "Lato", sans-serif;
    font-weight: 900;
    text-align: left;
    font-size: 2rem;
    max-width: 50%;
    color: #405e58;
    padding: 0.75rem 0.75rem 0.75rem 0;

    a {
      color: #405e58;
    }

    @include breakpoint-up(large) {
      font-size: 4rem;
      text-align: center;
    }
  }
  &__menu {
    grid-column: 2;
    font-family: "Vollkorn", serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 0;
    &:before,
    &:after {
      content: "";
      background: hsla(0, 0%, 39%, 1);
      padding: 0.25px;
      flex: 100%;

      @include breakpoint-up(large) {
        padding: 0.5px;
      }
    }
    a {
      color: #303030;
    }
  }
  &__menu__ul {
    padding-left: 0;
    @include breakpoint-down(medium){
      display:none;
    }
    li {
      display: block;
      margin: 1rem 1rem;
      text-align: center;
    }
    
    @include breakpoint-up(large) {
      display: block;
      li {
        display: inline-block;
        margin: 0.25rem 1rem;
        text-align: center;
      }
    }
  }
}

ul li {
  display: inline-block;
}
</style>
