<script>
  export let index;
</script>

<li>
  <span>{index}</span>
  <slot />
</li>

<style>
  li {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  span {
    color: white;
    border-radius: 50%;
    background-color: var(--secondary);
    text-align: center;
    height: 2rem;
    width: 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }
</style>
