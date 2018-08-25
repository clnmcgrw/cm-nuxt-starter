<template>

  <fullscreen-section>
    
    <grid-column :span="16">
      <headline-small>{{headline_sm}}</headline-small>
      <headline-large>{{headline_lg}}</headline-large>
    </grid-column>

  </fullscreen-section>
  
</template>


<script>
import FullscreenSection from '~/components/layout/FullscreenSection';
import GridColumn from '~/components/layout/GridColumn';

import HeadlineSmall from '~/components/typography/HeadlineSmall';
import HeadlineLarge from '~/components/typography/HeadlineLarge';

export default {
  components: {
    FullscreenSection,
    GridColumn,
    HeadlineSmall,
    HeadlineLarge
  },

  data() {
    return {
      headline_sm: 'A Nuxt.js Starter Template',
      headline_lg: 'For Brochure & Marketing Sites'
    };
  },

  head() {
    return {
      title: 'Homepage'
    }
  }
}
</script>