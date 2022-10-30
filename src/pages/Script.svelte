<script>
  import Code from '../components/Code.svelte';
  import Title from '../components/Title.svelte';
  import Li from '../components/Li.svelte';
</script>

<section>
  <div>
    <Title title="How to use the script" />
    <ul>
      <Li index={1}>Copy the script on the right by clicking on it</Li>
      <Li index={2}>Go to your KRONOX schedule page</Li>
      <Li index={3}>
        Open the console with <kbd>cmd</kbd> + <kbd>maj</kbd> + <kbd>j</kbd> and
        copy the script inside
      </Li>
      <Li index={4}>Press <kbd>Enter</kbd> and wait</Li>
    </ul>
  </div>
  <Code />
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  kbd {
    margin: 0 0.3rem;
    border-radius: 10px;
    border: none;
    background-color: rgba(172, 171, 171, 0.438);
    font-weight: bold;
    padding: 0.2rem 0.5rem;
  }
</style>
