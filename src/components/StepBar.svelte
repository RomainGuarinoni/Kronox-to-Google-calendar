<script>
  import Step from './Step.svelte';
  import { course } from '../store/course';
  import { onDestroy } from 'svelte';

  export let selected;

  let hasCourse;

  const unsubscribe = course.subscribe((data) => (hasCourse = !!data));

  const steps = [
    'Get the script',
    'Verify the data',
    'Connect to Google',
    'Send to Google Calendar',
  ];

  function handleChange(index) {
    selected = index;
  }

  onDestroy(unsubscribe);
</script>

<div class="stepbar">
  {#each steps as step, index}
    <Step
      stepNumber={index}
      disabled={!hasCourse && index !== 0}
      handleClick={() => {
        handleChange(index);
      }}
      label={step}
      selected={selected === index}
    />
    {#if index < steps.length - 1}
      <div class="divider" />
    {/if}
  {/each}
</div>

<style>
  .stepbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }

  .divider {
    width: 15rem;
    background-color: var(--light-blue);
    height: 0.3rem;
    border-radius: 5rem;
  }
</style>
