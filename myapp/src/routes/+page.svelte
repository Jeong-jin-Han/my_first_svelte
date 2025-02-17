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
