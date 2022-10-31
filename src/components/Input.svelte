<script>
  import { course } from '../store/course';

  export let value;
  export let onChange;

  let isUpdating = false;
  let currentValue = value;

  function reset() {
    currentValue = value;
    isUpdating = false;
  }

  function update(e) {
    currentValue = e.target.textContent;
  }

  function apply() {
    onChange(currentValue);
    isUpdating = false;
  }
</script>

<div class="container">
  <span
    role="textbox"
    contenteditable={isUpdating}
    class={isUpdating ? 'update-input' : 'non-update-input'}
    on:input={update}
    >{currentValue}
  </span>

  {#if !isUpdating}
    <img
      src="/pen.svg"
      class="pen"
      alt="pen to modify"
      on:click={() => (isUpdating = true)}
      on:keypress={() => (isUpdating = true)}
    />
  {:else}
    <img
      src="/cross.svg"
      alt="pen to modify"
      class="cross"
      on:click={reset}
      on:keypress={reset}
    /><img
      src="/tick.svg"
      class="tick"
      alt="pen to modify"
      on:click={apply}
      on:keypress={apply}
    />
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }

  .non-update-input,
  .non-update-input:focus {
    border: none;
    outline: none;
    border: 2px solid transparent;
  }

  .update-input {
    border: 2px solid black;
    border-radius: 10px;
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 16px;
    padding: 0.5rem;
    box-sizing: content-box;
  }

  img {
    width: 1.5rem;
    cursor: pointer;
  }

  .pen,
  .tick {
    filter: invert(47%) sepia(65%) saturate(402%) hue-rotate(131deg)
      brightness(94%) contrast(91%);
  }

  .cross {
    filter: invert(48%) sepia(97%) saturate(2652%) hue-rotate(331deg)
      brightness(93%) contrast(101%);
  }

  .tick {
    width: 2.2rem;
  }
</style>
