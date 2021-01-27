<template>
  <header class="header">
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

    <button
      onclick="window.location.href='https://prodigious-pioneer-1471.ck.page/617bb6fde8'"
      class="header__cta"
    >
      Subscribe
    </button>
    <a href="#" id="btnHamburger" class="header__hamburger hide-for-desktop">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <div class="header__menu ">
      <ul id="menu" class="header__menu__ul" style="padding:0;">
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
    const wrapper = document.querySelector(".header__menu");
    btnHamburger.addEventListener("click", function() {
      if (btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
        menu.style.display = "none";
        wrapper.style.borderBottom = "";
      } else {
        btnHamburger.classList.add("open");
        menu.style.display = "block";
        wrapper.style.borderBottom = "1px solid #2f2f2f";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/mixins";

.header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  &__hamburger {
    grid-column: 3;
    grid-row: 1 / auto;
    align-self: center;
    justify-self: end;
    padding-left: 6rem;
    padding-right: 0.75rem;
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
  }
  &__cta {
    grid-row: 1 / auto;
    grid-column: 3;
    height: 24px;
    width: 87px;
    border: 1px solid #405e58;
    border-radius: 0px;
    text-align: center;
    line-height: 24px;
    color: #405e58;
    background: white;
    align-self: center;
    justify-self: start;
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    font-weight: 900;

    button {
      cursor: pointer;
    }
    @include breakpoint-up(large) {
      width: 240px;
      height: 32px;
      align-self: center;
      justify-self: start;
      button {
        cursor: pointer;
      }
    }
  }

  &__logo {
    font-family: "Lato", sans-serif;
    font-size: 2rem;
    font-weight: 900;
    padding-left: 0.75rem;
    a {
      color: #405e58;
    }
    @include breakpoint-up(large) {
      grid-column: 2;
      grid-row: 1;
      justify-self: center;
      align-self: center;
      font-size: 6rem;
      padding-left: 0;
    }
  }

  &__menu {
    grid-row: 2 / auto;
    grid-column: 1 / span 3;
    text-align: center;
    text-transform: uppercase;
    border-top: 1px solid #2f2f2f;
    background: #f5f5f5;
    @include breakpoint-up(large) {
      border-bottom: 1.5px solid #2f2f2f;
      background: white;
    }
    ul {
      list-style: none;
      display: none;
      @include breakpoint-up(large) {
        display: block;
      }
    }

    li {
      font-family: "Vollkorn", serif;
      display: inline;
      padding: 1rem;
      text-align: center;
      align-items: stretch;
      align-self: center;

      a {
        color: black;
        font-size: 0.9rem;
      }
    }
  }
  &__social {
    align-self: center;
    justify-self: end;
    li {
      padding: 0.5rem;
      display: inline-block;
    }
  }
}

.header__hamburger.open > span:first-child {
  transform: rotate(45deg);
}
.header__hamburger.open > span:nth-child(2) {
  opacity: 0;
}
.header__hamburger.open > span:last-child {
  transform: rotate(-45deg);
}
</style>
