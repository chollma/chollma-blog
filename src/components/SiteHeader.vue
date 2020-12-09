<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li class="nav-list-items"><g-link to="/">Home</g-link></li>
        <li class="nav-list-items"><g-link to="/speaking">Speaking</g-link></li>
        <li class="nav-list-items"><g-link to="/projects">Projects</g-link></li>
        <li class="nav-list-items link-blog"><g-link to="/articles">Blog</g-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.nav-list {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin: .125em 0 0;
    padding: 0;
}

.nav-list-items {
    margin: 0 .5em;
    text-align: right;
    font-size: var(--fs-tiny);
}

.nav-list-items a {
    text-decoration: none;
    color: var(--clr-accent);
}

.nav-list-items:hover {
    opacity: .7;
}

.link-blog a {
    background-color: var(--clr-accent);
    color: var(--clr-light);
    padding: .5em;
    position: relative;
}

.link-blog {
    height: 3em;
    background-color: var(--clr-accent);
    position: relative;
}

</style>
