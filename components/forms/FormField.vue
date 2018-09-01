<template>
  
  <div :class='{"form-input": true, "is-focused": focused}'>
    <div class="form-input--liner">
      
      <div class="form-input--label">
        <label :for='"form-input-control--"+field.name'>{{field.label}}</label>
      </div>

      <div class="form-input--el">
      
        <input v-if="field.fieldType === 'text'" :id='"form-input-control--"+field.name' :type="field.fieldType" :name="field.name" :placeholder="field.placeholder" @focus="onFieldFocus" @blur="onFieldBlur">

        <textarea v-if="field.fieldType === 'textarea'" :id='"form-input-control--"+field.name' :name="field.name" :placeholder="field.placeholder" @focus="onFieldFocus" @blur="onFieldBlur"></textarea>

        <select v-if="field.fieldType === 'select'" :id='"form-input-control--"+field.name' :name="field.name" @focus="onFieldFocus" @blur="onFieldBlur">
          <option value="">--- {{field.placeholder}}</option>
          <option v-for="(opt, i) in field.options" :value="opt" :key="i">{{opt}}</option>
        </select>

      </div>
      
      <div v-if="field.errors" class="form-input--err">
        <span v-for="error in field.errors">{{errors}}</span>
      </div>
    </div>
  </div>

</template>




<script>
  
export default {
  name: 'form-field',

  props: {
    field: {
      type: Object,
      default: () => {
        return {
          fieldType: 'text',
          label: 'Label Text',
          name: 'default_name',
          placeholder: 'Placeholder Text'
        };
      }
    }
  },

  data() {
    return {
      availableTypes: ['text', 'textarea', 'select', 'radio', 'checkbox'],
      focused: false
    };
  },

  computed: {
    placeholder() {
      return this.field.placeholder ? this.field.placeholder : '';
    }
  },

  methods: {
    onFieldFocus() {
      this.focused = true;
    },
    onFieldBlur() {
      this.focused = false;
    }
  }
};
</script>