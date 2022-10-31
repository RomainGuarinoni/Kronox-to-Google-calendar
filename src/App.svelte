<script>
  import StepBar from './components/StepBar.svelte';
  import Script from './pages/Script.svelte';
  import { onMount } from 'svelte';
  import { course } from './store/course';
  import Data from './pages/Data.svelte';

  let selected = 0;

  function checkCourseInUrl() {
    const params = new URLSearchParams(window.location.search);
    const courseTitle = params.get('courseTitle');
    const courses = JSON.parse(params.get('courses'));

    if (!!!courseTitle || !!!courses) return;

    course.set({
      courseTitle,
      courses,
    });

    selected = 1;
  }
  onMount(checkCourseInUrl);
</script>

<main>
  <header>
    <h1>Kronox to Google Calendar</h1>
  </header>
  <div class="main-container">
    <nav>
      <StepBar bind:selected />
    </nav>
    {#if selected === 0}
      <Script />
    {:else if selected == 1}
      <Data />
    {:else if selected == 2}
      <p>Page 3</p>
    {:else}
      <p>Page 4</p>
    {/if}
  </div>
</main>

<style>
  h1 {
    color: #be7b23;
    margin: 2rem 0 0 2rem;
  }
  nav {
    margin: 5rem 0;
  }

  .main-container {
    padding: 0 10rem;
  }
</style>
