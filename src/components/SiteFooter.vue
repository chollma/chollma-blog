<template>
      <footer class="footer">
        <div class="footer__navigation">
            <a class= "footer__link" href="#">Home</a>
            <a class= "footer__link" href="#">Speaking</a>
            <a class= "footer__link" href="#">Projects</a>
            <a class= "footer__link" href="#">Blog</a>
        </div>
        <div>
            Subscribe to emails from Cooper
           <!-- <form>
                <label>First Name</label>
                <input type="text">
                <label>Last Name</label>
                <input type="text">
                <label>Email</label>
                <input type="text">
                <button>Submit</button>
            </form>-->
        </div>
        <div class="footer__copyright">
          © 2020 Cooper Hollmaier
        </div>
        <div class="footer__legal">
            <a class= "footer__link" href="#">Privacy</a>
            <a class= "footer__link" href="#">Accessibility</a>
            <a class= "footer__link" href="#">Contact</a>
        </div>
        
      </footer>
</template>

<script>
export default {

}
</script>

<style>

.footer{
    background-color: black;
}
.footer__navigation {
    padding: 2rem;
}

.footer__link {
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