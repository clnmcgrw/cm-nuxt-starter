<template>
  
  <div :class='getClassnameObject()'>
    <slot></slot>
  </div>

</template>


<script>
  
export default {
  name: 'grid-column',

  props: {
    span: {
      type: Number,
      default: 16
    },
    offset: {
      type: Number,
      default: 0
    },
    bp: {
      type: String,
      default: 'lg'
    },
    extraClasses: {
      type: Array,
      default: () => ['gridcol']
    }
  },

  data() {
    return {
      totalColumns: 32
    };
  },

  methods: {
    getClassnameObject() {
      const cssClasses = {};
      this.extraClasses.forEach(classname => cssClasses[classname] = true);
      for (let i=0; i < this.totalColumns; i++) {
        if (this.span === i) {
          cssClasses[`gridcol--span-${this.span}`] = true;
        }
        if (this.offset === i && i > 0) {
          cssClasses[`gridcol--offset-${this.offset}`] = true;
        }
        cssClasses[`gridcol--bp-${this.bp}`] = true;
      }
      return cssClasses;
    }
  }
}
</script>

<style lang="scss">

.gridcol {
  width: 100%;
  float: none;
}

@media (min-width: $bp-md) {

  .gridcol--bp-lg {
    &.gridcol {
      float: left;
    }
    
    @for $i from 1 through $total_grid_columns {
      &.gridcol--span-#{$i} {
        width: ($i / $total_grid_columns) * 100%;
      }
      &.gridcol--offset-#{$i} {
        margin-left: ($i / $total_grid_columns) * 100%;
      }
    }
  }

}
</style>