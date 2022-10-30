<script>
  export let stepNumber;
  export let selected = false;
  export let label;
  export let handleClick;
  export let disabled = false;
</script>

<button class="container" on:click={() => (!disabled ? handleClick() : null)}>
  <p
    class="circle {selected ? 'selected' : 'non-selected'} {disabled
      ? 'disabled-circle'
      : ''}"
  >
    {stepNumber}
  </p>
  <p
    class="{selected ? 'selected-label' : 'non-selected-label'} {disabled
      ? 'disabled-label'
      : ''}"
  >
    {label}
  </p>
</button>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 16px;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: all ease 100ms;
  }

  .non-selected {
    background-color: var(--main);
    font-weight: normal;
  }

  .non-selected:hover {
    background-color: var(--main-hover);
  }

  .selected {
    background-color: var(--secondary);
    font-weight: bold;
  }

  .selected:hover {
    background-color: var(--secondary-hover);
  }

  .non-selected-label {
    color: var(--main);
  }

  .non-selected-label:hover {
    color: var(--main-hover);
  }

  .selected-label {
    color: var(--secondary);
  }

  .selected-label:hover {
    color: var(--secondary-hover);
  }

  .disabled-circle {
    cursor: not-allowed;
    background-color: var(--disabled);
  }
  .disabled-circle:hover {
    cursor: not-allowed;
    background-color: var(--disabled);
  }

  .disabled-label {
    cursor: not-allowed;
    color: var(--disabled);
  }
  .disabled-label:hover {
    cursor: not-allowed;
    color: var(--disabled);
  }
</style>
