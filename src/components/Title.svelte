<script>
  export let title;
</script>

<h2>
  {title}
</h2>

<style>
  h2 {
    font-size: 3rem;
    color: var(--main);
    position: relative;
    margin-bottom: 4rem;
    width: fit-content;
  }

  h2::after {
    content: '';
    width: 80%;
    position: absolute;
    left: 0;
    top: 3rem;
    height: 0.5rem;
    background-color: var(--main);
  }
</style>
