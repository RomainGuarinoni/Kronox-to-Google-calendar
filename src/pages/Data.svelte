<script>
  import Course from '../components/course.svelte';
  import Input from '../components/Input.svelte';
  import Title from '../components/Title.svelte';
  import { course } from '../store/course';

  function updateCourseTitle(newTitle) {
    course.update((value) => {
      console.log({
        ...value,
        courseTitle: newTitle,
      });
      return {
        ...value,
        courseTitle: newTitle,
      };
    });
  }
</script>

<section>
  <Title title="Course title" />
  <Input value={$course.courseTitle} onChange={updateCourseTitle} />

  <Title title="courses" />
  {#each $course.courses as course}
    <Course {course} />
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
