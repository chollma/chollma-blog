<template>
  <footer class="footer">
      <div class="container">
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
    <div class="footer__copyright">
        <div>2020 Cooper Hollmaier. All Rights Reserved.</div>
        <div>  <g-link to="/privacy/">Privacy</g-link> |  <g-link to="/accessibility">Accessibility</g-link></div>
    </div>
    </div>
      </div>
    
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/scss/mixins";

.footer {
  font-family: "Lato", sans-serif;
  background-color:#303030;
  color:white;
  padding: 2.5rem;
  text-align: center;

  

  .container {@include breakpoint-up(large){
      
      justify-content: center;
      gap: 1rem;
  }}

  a {
      color:white;
      text-decoration: none;
  }

 
  
  &__social {
    

     @include breakpoint-down(medium){
         margin-bottom: 1.875rem;
     }

     @include breakpoint-up(large){
        grid-area: cta;
        justify-self: right;
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
      transition: color 300ms ease-in-out;  
      &:hover {
          color:#405E58;
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
      display:inline-block;
    @include breakpoint-up(large){
         grid-area: copyright;
         align-self: end;
         justify-self: end;
     }
      
  }
}



</style>
