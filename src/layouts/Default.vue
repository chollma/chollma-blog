<template>
  <div class="layout">
    <site-header/>
    <slot/>
    <site-footer/>
  </div>
</template>


<script>
import SiteFooter from "@/components/SiteFooter";
export default {
  components: {
    SiteFooter,
  },
   metaInfo: {
    
    titleTemplate: '%s | Cooper Hollmaier'
  },
};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
