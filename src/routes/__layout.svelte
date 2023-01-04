<script lang="ts">
  import "../app.css";
  import "../styles/tailwind-output.css";
  export const prerender = true;
</script>

<main>
  <div class="bg-neutral-900 bg-image-gif min-h-screen">
    <slot />
  </div>
</main>

<footer />
