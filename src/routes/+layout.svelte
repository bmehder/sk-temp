<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>

<main>
  <slot />
</main>

<style>
  main,
  nav {
    max-width: 1100px;
    margin: auto;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    list-style: none;
  }
</style>
