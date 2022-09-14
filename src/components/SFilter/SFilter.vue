<template>
  <div class="filter">
    <h2 class="filter__title">{{ this.title }}</h2>
    <label class="filter__label" for="infoNumber">
      <span class="filter__label-text">{{ filterTitle_01 }}:</span>
      <input
        placeholder="Введите фрагмент"
        class="filter__input"
        v-model.trim="numberFilter"
        @input="changeOption"
        id="infoNumber"
        name="infoNumber"
        type="text">
    </label>
    <label class="filter__label" for="infoOrder">
      <span class="filter__label-text">{{ filterTitle_02 }}:</span>
      <select
        class="filter__select"
        v-model="filterSelected"
        @change="changeOptionFilter"
        name=""
        id="infoOrder">
        <option value="default" selected>Выберите из списка</option>
        <option
          v-for="(el, idx) in this.options"
          :key="idx"
          :value="el.typeOrder">
          {{ el.typeOrderRu }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
import './SFilter.scss';

export default {
  name: 'SFilter',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      title: 'Фильтр',
      filterTitle_01: 'Номер накладной',
      filterTitle_02: 'Тип заказа',
      numberFilter: '',
      filterSelected: 'default',
    };
  },
  methods: {
    changeOption(event) {
      this.$emit('updateSearch', event.target.value);
    },
    changeOptionFilter(event) {
      this.$emit('updateFilter', event.target.value);
    },
  },
};
</script>
