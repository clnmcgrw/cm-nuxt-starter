<template>

  <default-section :hasTitle="true" titleText="Starter Components" paddingTop="15em" paddingBottom="4em">

    <grid-column :span="16">

      <form-shell>
        <form-field v-for="(field, i) in demoForm.fields" :field="field" :key="i" />
      </form-shell>
      
    </grid-column>
  
    
  </default-section>
  
</template>

<script>

import DefaultSection from '~/components/layout/DefaultSection';
import GridColumn from '~/components/layout/GridColumn';
import FormShell from '~/components/forms/FormShell';
import FormField from '~/components/forms/FormField';


export default {
  components: {
    DefaultSection,
    GridColumn,
    FormField,
    FormShell
  },

  data() {
    return {
      demoForm: {
        fields: [
          {fieldType: "text", label: "First Name", name: "first_name", placeholder: "First Name"},
          {fieldType: "textarea", label: "Enter Your Message", name: "message"},
          {fieldType: "select", label: "Select Your Industry", name: "industry", options: ['one', 'two', 'three'] }
        ]
      }
    };
  },

  head() {
    return {
      title: 'Starter Components'
    };
  }
};
</script>



<style lang="scss">
  
</style>