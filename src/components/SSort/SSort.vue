<template>
  <label class="filter__label" for="infoSort">
    <select
      class="filter__select"
      v-model="filterSort"
      @change="changeOption"
      name=""
      id="infoSort">
      <option value="default" selected>Сортировка</option>
      <option
        v-for="(el, idx) in this.options"
        :key="idx"
        :value="el.value">
        {{ el.txt }}
      </option>
    </select>
  </label>
</template>

<script>
import './SSort.scss';

export default {
  name: 'SSort',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filterSort: 'default',
    };
  },
  methods: {
    changeOption(event) {
      this.$emit('updateSort', event.target.value);
    },
  },
};
</script>
