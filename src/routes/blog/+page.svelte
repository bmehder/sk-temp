<script>
  export let data

  console.log(data)
</script>

{#each data.posts as post}
  <h2>{@html post.title.rendered}</h2>
{/each}
