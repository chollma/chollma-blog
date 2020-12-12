<template>
  <div class="layout">
    <site-header />
    <slot />
    <site-footer />
  </div>
</template>

<script>

</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
