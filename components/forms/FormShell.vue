<template>

<div class="form-default">
  
  <form action="" method="">
    <slot></slot>
  </form>

</div>  

</template>


<script>

export default {

}
</script>



<style lang="scss">

input[type="text"], input[type="search"], textarea, select {
  display: block;
  width: 100%;
  outline: none;
  box-shadow: none;
  border-radius: 0px;
  border: 1px solid darken($white, 12%);
  font-size: 1em;
  background-color: $white;
  transition: all .5s ease;

  .is-focused & {
    border-color: darken($white, 15%);
    box-shadow: rgba($dark, 0.1) 0 1px 15px;
  }
}

input[type="text"], input[type="search"], textarea {
  padding: 1em;
}

select {
  height: 2.5em;
}

textarea {
  resize: vertical;
}


.form-input {

  label {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 400;
    letter-spacing: 0.075em;
    cursor: pointer;
    transition: color .5s ease;

    &:hover {
      color: $dark;
    }
  }

  &.is-focused {

    label {
      color: $dark
    }

  }

  label {
    display: inline-block;
  }
}

.form-input--liner {
  padding-bottom: 1.5em;
}


.form-default {
}
  
</style>