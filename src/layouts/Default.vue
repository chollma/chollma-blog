<template>
  <div class="layout">
    <site-header />
    <slot />
    <site-footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
