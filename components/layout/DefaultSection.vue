<template>
  
  <section class="section-default">
    <vertical-spacer :height="paddingTop"/>

    <div v-if="hasTitle" class="section-default--title">
      <div class="grid-row">
        <headline-medium>{{titleText}}</headline-medium>
        <body-text>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </body-text>
      </div>
    </div>

    <div class="section-default--content">
      <div class="grid-row">
        <slot></slot>
      </div>
    </div>

    <vertical-spacer :height="paddingBottom"/>
  </section>

</template>



<script>
import VerticalSpacer from '~/components/layout/VerticalSpacer';
import HeadlineMedium from '~/components/typography/HeadlineMedium';
import BodyText from '~/components/typography/BodyText';

export default {
  name: 'default-section',

  components: {
    VerticalSpacer,
    HeadlineMedium,
    BodyText
  },

  props: {
    hasTitle: {
      type: Boolean,
      default: false
    },
    titleText: {
      type: String,
      default: 'Lorem ipsum dolor sit amet.'
    },
    rowSize: {
      type: String,
      default: 'full'
    },
    paddingTop: {
      type: String,
      default: '3em'
    },
    paddingBottom: {
      type: String,
      default: '3em'
    },
    extraClasses: {
      type: Array,
      default: () => []
    }
  }
};
</script>


<style lang="scss">

.section-default--title {
  margin-bottom: 2em;
}
  
</style>