<template>

  <div :class='["form-shell", "form-"+formType]'>
    <form :action="action" :method="method">
      <div class="form-shell--liner">
        <slot></slot>
      </div>
    </form>
  </div>  

</template>


<script>

export default {
  name: 'form-shell',
  props: {
    action: {
      type: String,
      default: ''
    },
    method: {
      type: String,
      default: 'POST'
    },
    formType: {
      type: String,
      default: 'default'
    }
  }
};
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
  font-family: $body-font-family;

  &::placeholder {
    color: darken($white, 7%);
  }

  .is-focused & {
    border-color: darken($white, 15%);
    box-shadow: rgba($dark, 0.1) 0 1px 15px;
  }
}

input[type="text"], input[type="search"], textarea {
  padding: 0.8em;
}

select {
  height: 2.85em;
  padding-left: 1em;
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