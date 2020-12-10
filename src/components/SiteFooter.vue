<template>
     
</template>

<script>
export default {

}
</script>

<style>

.footer{
  min-height:50px; 
  background:black; 
  display: grid;
  grid-template-columns: auto 1fr;
 }

 .footer__logo{
     grid-column: 1;
     justify-self: left;
 }
 .footer__social{
     grid-column: 2;
     justify-self: right;
     display:inline-block;

 }
.footer__navigation {
    padding: 2rem;
}

.footer__link {
    grid-column: 1;
    margin-right: 2rem;
    color:white;
    text-decoration: none;
}

.footer__copyright {
    padding: 1rem;
    color:white;
}

.footer__legal {
    padding:1rem;
}

</style>