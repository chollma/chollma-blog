<template>
  <div class="layout">
    <!-- TODO - Turn Header into Component -->
    <header class="header"> 
      <strong>
        Cooper Hollmaier
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/speaking">Speaking</g-link>
        <g-link class="nav__link" to="/projects">Projects</g-link>
        <g-link class="nav__link" to="/articles">Blog</g-link>
      </nav>
    </header>
    <slot/>
        <!-- TODO - Turn Footer into Component -->
     <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="https://github.com/chollma">Github</g-link>
        <g-link class="nav__link" to="https://twitter.com/CooperHollmaier">Twitter</g-link>
        <g-link class="nav__link" to="https://www.instagram.com/cooperhollmaier">Instagram</g-link>
        <g-link class="nav__link" to="https://www.youtube.com/channel/UCWyuE3usgzzuPIdmR_6iRWA">YouTube</g-link>
      </nav>
    </header>
    <div>
        <p>Cooper Hollmaier © 2020, All rights reserved.</p>
      </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
