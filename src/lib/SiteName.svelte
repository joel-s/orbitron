<script lang="ts">
  // const colors = [
  //   '#0a9396',
  //   '#94d2bd',
  //   '#e9d8a6',
  //   '#ee9b00',
  //   '#ca6702',
  //   '#bb3e03',
  //   '#ae2012',
  //   '#9b2226'
  // ];

  const name = 'Orbitron'.split('');
</script>

{#each name as letter, index (index)}
  <span class="letter" style="animation-iteration-count: {index * 0.1}">{letter}</span>
{/each}

<style>
  .letter {
    animation: letterColors 10s;
    animation-fill-mode: forwards;
  }

  @keyframes letterColors {
    0% {
      color: #0a9396;
    }
    10% {
      color: #94d2bd;
    }
    20% {
      color: #e9d8a6;
    }
    30% {
      color: #ee9b00;
    }
    40% {
      color: #ca6702;
    }
    50% {
      color: #bb3e03;
    }
    60% {
      color: #ae2012;
    }
    70% {
      color: #9b2226;
    }
  }
</style>
