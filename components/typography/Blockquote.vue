<template>
  
  <blockquote class="blockquote-default">
    <p class="blockquote-default--text">
      <slot>Default blockquote content, lorem ipsum dolor sit amet, consectetur adipisicing.</slot>
    </p>
    <cite v-if="showCite" class="blockquote-default--cite">
      <slot name="cite">- Add A Citation</slot>
    </cite>
  </blockquote>

</template>



<script>
  
export default {
  name: 'blockquote-default',

  props: {
    onDark: {
      type: Boolean,
      default: false
    },
    showCite: {
      type: Boolean,
      default: true
    }
  }
}
</script>