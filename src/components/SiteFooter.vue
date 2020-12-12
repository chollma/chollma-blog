<template>
  <footer class="footer">
      <div class="container">
<g-link class="footer__logo" to="/">
      <g-image src="https://via.placeholder.com/185x25" />
    </g-link>
    <div class="footer__social">
      <g-link to="https://twitter.com/CooperHollmaier">
        <g-image src="~/assets/img/twitter.svg" alt="Twitter" />
      </g-link>
      <g-link to="https://www.instagram.com/cooperhollmaier/">
        <g-image src="~/assets/img/instagram.svg" alt="Instagram" />
      </g-link>
      <g-link to="https://www.youtube.com/channel/UCWyuE3usgzzuPIdmR_6iRWA">
        <g-image src="~/assets/img/youtube.svg" alt="YouTube" />
      </g-link>
      <g-link to="https://dev.to/chollma">
        <g-image src="~/assets/img/dev-dot-to.svg" alt="Dev.to" />
      </g-link>
      <g-link to="https://github.com/chollma">
        <g-image src="~/assets/img/github.svg" alt="Github" />
      </g-link>
    </div>
    <div class="footer__links col1">
      <g-link to="/">Home</g-link>
      <g-link to="/speaking">Speaking</g-link>
      <g-link to="/projects">Projects</g-link>
      <g-link to="/articles">Articles</g-link>
    </div>
    <div class="footer__links col2">
      <g-link to="/contact">Contact</g-link>
      <g-link to="/privacy">Privacy</g-link>
      <g-link to="/accessibility">Accessibility</g-link>
      <g-link to="/articles">Link</g-link>
    </div>
    <div class="footer__cta">
      <g-link to="/" class="button">Sign-Up</g-link>
    </div>  
    <div class="footer__copyright">
        &copy; 2020 Cooper Hollmaier. All Rights Reserved.
    </div>
    </div>
      </div>
    
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">

// Breakpoints
@media (min-width: 64em){
  // styles go here
}

// 640px, 1024px, 1400px
$breakpoints-up: ("medium": "40em", "large": "64em", "xlarge": "87.5em");

// 639px, 1023px, 1399px
$breakpoints-down: ("small": "39.9375em", "medium": "63.9375em", "large": "87.4375em");

@mixin breakpoint-up($size){
  @media (min-width: map-get($breakpoints-up, $size)){
    @content;
  }
}

@mixin breakpoint-down($size){
  @media (max-width: map-get($breakpoints-down, $size)){
    @content;
  }
}
.footer {
  font-family: "Lato", sans-serif;
  background-color:#303030;
  color:white;
  padding: 2.5rem;
  text-align: center;

  

  .container {@include breakpoint-up(large){
      display:grid;
      grid-template-columns: 2fr 1fr 1fr 3fr;
      grid-template-rows: 1fr auto;
      grid-template-areas: 
        "logo links1 links2 cta"
        "social links1 links2 copyright";
      justify-items: start;
      gap: 1rem;
  }}

  a {
      color:white;
      text-decoration: none;
  }

  &__logo {
    display: inline-block;

    @include breakpoint-down(medium){
         margin-bottom: 1.875rem;
     }

    @include breakpoint-up(large){
        grid-area: logo;
    }

  }
  &__social {
    

     @include breakpoint-down(medium){
         margin-bottom: 1.875rem;
     }

     @include breakpoint-up(large){
        grid-area: social;
        align-self: end;
    }
    
    a{
      display:inline-block;
      height: 1.25rem;

    }
    a:not(:last-child) { 
      margin-right: 1rem;
    }

  }
  &__links {
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.9375rem;

    @include breakpoint-up(large){
       align-items: start;
       justify-content: space-between;

    }

    a{
    
    @include breakpoint-down(medium){
        line-height: 2.25;
    }

    }

    &.col1{
        @include breakpoint-down(medium){
        margin-bottom: 1.875rem;
     }

        @include breakpoint-up(large){
        grid-area: links1;
    }

    }
    &.col2{

       @include breakpoint-down(medium){
         margin-bottom: 1.875rem;
       }
       @include breakpoint-up(large){
       grid-area: links2;
      }
    }

    a {
      line-height: 2.25;
      transition: color 150ms ease-in-out;  
      &:hover {
          color: lime;
      }  
    }


    
  }
  &__cta{

    @include breakpoint-up(large){
        grid-area: cta;
        text-align: right;
        justify-self:end;
    }

    a.button{
        
      @include breakpoint-down(medium){
         margin-bottom: 1.875rem;
         
     }
     

    }

  }
  &__copyright{
      font-size: .8125rem;
      color: gray;
    @include breakpoint-up(large){
         grid-area: copyright;
         align-self: end;
         justify-self: end;
     }
      
  }
}



</style>
