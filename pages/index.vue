<template>

  <fullscreen-section>
    
    <grid-column :span="16">
      <headline-small>{{headline_sm}}</headline-small>
      <headline-large>{{headline_lg}}</headline-large>
      <body-text>
        <p>When you aren't making dashboards &amp; app views, your needs are different.  This template emphasises control over <em>UI state</em>, with reactive examples for things like screen size, mouse position, and scroll position!</p>
      </body-text>
    </grid-column>

  </fullscreen-section>
  
</template>


<script>
import FullscreenSection from '~/components/layout/FullscreenSection';
import GridColumn from '~/components/layout/GridColumn';

import HeadlineSmall from '~/components/typography/HeadlineSmall';
import HeadlineLarge from '~/components/typography/HeadlineLarge';
import BodyText from '~/components/typography/BodyText';

export default {
  components: {
    FullscreenSection,
    GridColumn,
    HeadlineSmall,
    HeadlineLarge,
    BodyText
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