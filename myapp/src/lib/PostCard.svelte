<script>
  import { onMount } from "svelte";

  export let post; // 게시물 데이터 (ID 포함)
  let likes = 0;
  let liked = false;

  // 서버에서 해당 게시물의 좋아요 개수 가져오기
  async function fetchLikes() {
    const response = await fetch(`/api/likes?id=${post.id}`);
    const data = await response.json();
    likes = data.likes;
  }

  async function likePost() {
    if (!liked) {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: post.id }),
      });
      const data = await response.json();
      likes = data.likes;
      liked = true;
    }
  }

  onMount(fetchLikes);
</script>

<div class="post">
  <div class="user">{post.username}</div>
  <p class="caption">{post.caption}</p>

  <div class="like-container">
    <button on:click={likePost} class="like-btn">
      {#if liked} ❤️ {:else} 🤍 {/if}
    </button>
    <span class="like-count">{likes}</span>
  </div>
</div>

<style>
  .post {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 15px;
    margin-bottom: 10px;
  }

  .user {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .caption {
    font-size: 14px;
  }

  /* 좋아요 버튼 스타일 */
  .like-container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
  }  /* ❗️ 닫는 중괄호가 빠진 부분을 추가 */

  .like-btn {
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
  }

  .like-count {
    font-size: 14px;
    margin-left: 5px;
  }
</style>
