// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/reset.css'
import '~/assets/styles.css'
import DefaultLayout from '~/layouts/Default.vue'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'


export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Vollkorn:wght@400;500;700;800&display=swap'
  })

  Vue.component('Layout', DefaultLayout)
  Vue.component('SiteHeader', SiteHeader)
  Vue.component('SiteFooter', SiteFooter)

}

