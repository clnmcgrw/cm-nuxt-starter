<template>
  
  <div :class='["gridcol", "gridcol--span-"+span, "gridcol--offset-"+offset, "gridcol--bp-"+bp]'>
    <slot></slot>
  </div>

</template>


<script>
  
export default {
  name: 'grid-column',

  props: {
    span: {
      type: Number,
      default: 14
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