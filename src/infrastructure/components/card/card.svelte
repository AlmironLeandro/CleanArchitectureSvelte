<!-- Card.svelte -->
<script lang="ts">
  import type { Tarea } from "../../../domain/models/Tarea.js";

  export let task : Tarea ;
 

</script>
  
  <div class="card">
    <p>{task}</p>
  </div>


  <style>
    .card {
      background-color: #fff;
      border-radius: 2px;
      display: inline-block;
      height: 300px;
      margin: 1rem;
      position: relative;
      width: 300px;
      box-shadow: 0 1px 1px rgba(0,0,0,0.15);
      -webkit-transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
      transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card:hover, .card:focus, .card:active {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .card p {
      margin: 0;
      padding: 1rem;
    }
  </style>
  