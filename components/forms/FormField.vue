<template>
  
  <div :class='[{"form-input": true, "is-focused": focused}, "form-input-type-"+field.fieldType]'>
    <div class="form-input--liner">
      
      <div class="form-input--label">
        <label :for='"form-input-control--"+field.name'>{{field.label}}</label>
      </div>

      <div class="form-input--el">
      
        <input v-if="isTextInput" :id='"form-input-control--"+field.name' :type="field.fieldType" :name="field.name" :placeholder="field.placeholder" @focus="onFieldFocus" @blur="onFieldBlur" @change="onFieldChange">

        <textarea v-if="field.fieldType === 'textarea'" :id='"form-input-control--"+field.name' :name="field.name" :placeholder="field.placeholder" @focus="onFieldFocus" @blur="onFieldBlur"></textarea>

        <select v-if="field.fieldType === 'select'" :id='"form-input-control--"+field.name' :name="field.name" @focus="onFieldFocus" @blur="onFieldBlur">
          <option v-if="placeholder" value="">--- {{placeholder}}</option>
          <option v-for="(opt, i) in field.options" :value="opt" :key="i">{{opt}}</option>
        </select>

        <ul v-if="isInputList" :class='["form-input-list", "form-input-list--"+field.fieldType]'>
          <li v-for="(opt, i) in field.options">
            <label :for="'input-list-input_'+field.name+'-'+i">
              <input :id="'input-list-input_'+field.name+'-'+i" :type="field.fieldType" :value="opt.value">
              <span class="form-input-fake"><span></span></span>
              <span class="input-list-item-text">{{opt.label}}</span>
            </label>
          </li>
        </ul>

      </div>
      
      <div v-if="field.errors" class="form-input--err">
        <span v-for="error in field.errors">{{errors}}</span>
      </div>
    </div>
  </div>

</template>




<script>

const radio_fpo = {
  type: 'radio',
  label: 'The Example Radio Group',
  name: 'example_radios',
  options: [
    {label: 'The First Choice', value: 1},
    {label: 'The Second Choice', value: 2},
    {label: 'The Third Choice', value: 3}
  ],
  default: 1
};
  
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
          placeholder: 'Placeholder Text',
          onChange: () => {}
        };
      }
    }
  },

  data() {
    return {
      availableTypes: ['text', 'tel', 'search', 'number', 'password', 'textarea', 'select', 'multiselect', 'radio', 'checkbox'],
      focused: false,
      filled: false
    };
  },

  computed: {
    placeholder() {
      return this.field.placeholder ? this.field.placeholder : '';
    },
    isTextInput() {
      return /^(text|tel|search|number|password)$/.test(this.field.fieldType);
    },
    isInputList() {
      return /^(checkbox|radio)$/.test(this.field.fieldType);
    }
  },

  methods: {
    onFieldFocus() {
      this.focused = true;
    },
    onFieldBlur() {
      this.focused = false;
    },
    onFieldChange(e) {
      console.log(e);
    }
  }
};
</script>