<template>
  <div class="card">
    <div class="card__row">{{ title }}</div>
    <div class="card__row">{{ txtNumber }}</div>
    <div class="card__row">{{ txtOrder }}</div>
    <div class="card__row">{{ txtDate }}</div>
    <div class="card__row">
      <button
        @click="isVisible = !isVisible"
        class="card__row-dots">
        <img src="../../assets/images/dots.svg" alt="dots">
      </button>
      <button
        v-if="isVisible"
        @click="deleteInfoCard(title)"
        class="card__row-delete">
        <img src="../../assets/images/delete.svg" alt="delete">
        удалить
      </button>
    </div>
  </div>
</template>

<script>
import './SItem.scss';
import { mapMutations } from 'vuex';

export default {
  name: 'SItem',
  data() {
    return {
      isVisible: false,
    };
  },
  props: [
    'title',
    'txtNumber',
    'txtOrder',
    'txtDate'],
  methods: {
    ...mapMutations(['deleteInfoCard']),
  },
};
</script>

<style scoped>

</style>
