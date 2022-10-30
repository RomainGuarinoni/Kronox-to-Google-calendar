<script>
  import hljs from 'highlight.js/lib/core';
  import javascript from 'highlight.js/lib/languages/javascript';
  import 'highlight.js/styles/github.css';
  import generateScript from '../lib/script';
  import Tooltip from './Tooltip.svelte';

  hljs.registerLanguage('javascript', javascript);

  const script = generateScript();

  const html = hljs
    .highlight(script, {
      language: 'javascript',
    })
    .value.trim();

  let copied = false;
  let error = false;
  let timer;

  async function handleClick() {
    try {
      copied = false;
      await navigator.clipboard.writeText(script);
      handleToolTip();
    } catch (err) {
      console.error(err);
      error = true;
    }
  }

  function handleToolTip() {
    copied = true;
    clearTimeout(timer);
    timer = setTimeout(() => (copied = false), 2000);
  }
</script>

<aside>
  <p class="html">{@html html}</p>
  <div class="copy" on:click={handleClick} on:keypress={handleClick}>
    <img src="/copy.svg" alt="copy icon" />
  </div>
  {#if copied}
    <Tooltip label={'copied'} />
  {/if}

  {#if error}
    <Tooltip label={'error while copy'} />
  {/if}
</aside>

<style>
  aside {
    width: 40rem;
    height: 33rem;
    transition: all ease 300ms;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .html {
    position: absolute;
    z-index: 1;
    filter: blur(0px);
    transition: all ease 300ms;
  }

  .copy {
    position: absolute;
    z-index: 2;
    width: 110%;
    height: 110%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: all ease 300ms;
    opacity: 0;
    border-radius: 20px;
  }

  .copy:hover {
    background-color: rgba(0, 0, 0, 0.308);
    opacity: 1;
  }

  .copy img {
    width: 3rem;
    filter: invert(100%) sepia(8%) saturate(0%) hue-rotate(157deg)
      brightness(107%) contrast(108%);
  }
</style>
