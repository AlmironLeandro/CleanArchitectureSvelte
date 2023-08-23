<!-- Column.svelte -->
<script lang="ts">
	import type { Tarea } from "../../../domain/models/Tarea.js";
    import List from "../list/list.svelte"

    export let title: string;
    export let tasks: Tarea[] = [];
  </script>
  
  <div class="column">
    <h1>{title}</h1>
      <List title={title} tasks={tasks} />
  </div>


  <style>
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  </style>
  