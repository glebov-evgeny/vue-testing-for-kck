<template>
  <div class="tabs">
    <router-link class="tabs__item" :to="{name:'main'}">
      <img src="../../assets/images/tab-01.svg" alt="main-row">
    </router-link>
    <router-link class="tabs__item" :to="{name:'table'}">
      <img src="../../assets/images/tab-02.svg" alt="main-column">
    </router-link>
  </div>
</template>

<script>
import './STabs.scss';

export default {
  name: 'STabs',
};
</script>
