<script>
  import Title from '../components/Title.svelte';
  import { course } from '../store/course';
</script>

<section>
  <Title title="Course title" />
  <p>{$course.courseTitle}</p>

  <Title title="courses" />
  {#each $course.courses as course}
    <p>{course.date}</p>
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
