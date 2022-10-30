<script>
  export let label;
  let closed = false;

  const closeToolTip = () => (closed = true);
</script>

<div
  class="tooltip {closed ? 'close' : ''}"
  on:click={closeToolTip}
  on:keypress={closeToolTip}
>
  <p>{label}</p>
</div>

<style>
  .tooltip {
    width: 15rem;
    padding: 1rem 0;
    display: flex;
    background-color: var(--main);
    color: white;
    border-radius: 10px;
    position: fixed;
    bottom: 10px;
    left: calc(50% - 19rem / 2);
    animation: enter 300ms ease, leave 300ms ease 1.5s forwards;
    cursor: pointer;
  }
  p {
    margin: auto;
  }

  .close {
    animation: leave 300ms ease forwards;
  }

  @keyframes enter {
    from {
      bottom: -100px;
    }

    to {
      bottom: 10px;
    }
  }

  @keyframes leave {
    from {
      bottom: 10px;
    }

    to {
      bottom: -100px;
    }
  }
</style>
