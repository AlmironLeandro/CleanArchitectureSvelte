<script lang="ts">
    import type { Tarea } from "../../../domain/models/Tarea.js"
	import Card from "../card/card.svelte";

    export let title:string
    export let tasks: Tarea[] = [];

  </script>
  
  <div class="list">
    <h2>{title}</h2>
    {#each tasks as task}
      <Card task={task} />
    {/each}
  </div>

  <style>
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  </style>