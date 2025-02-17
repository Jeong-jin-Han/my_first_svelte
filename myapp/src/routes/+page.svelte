<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <style lang="postcss">
    @reference "tailwindcss/theme";
    :global(html) {
      background-color: theme(--color-yellow-100);
    }
  </style>
<h1 class="text-3xl font-bold underline text-red-500">
    Tailwind 적용 테스트
</h1>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    클릭하세요
  </button> -->

  <script>
    import PostCard from "$lib/PostCard.svelte";
  
    let posts = [
      { id: "post1", username: "user1", caption: "This is my goal for the month! #GoalSetting" },
      { id: "post2", username: "user2", caption: "Let's achieve our dreams together! #Success" }
    ];
  </script>
  
  <div class="post-list">
    {#each posts as post}
      <PostCard {post} />
    {/each}
  </div>
  
  <style>
    .post-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  </style>
  