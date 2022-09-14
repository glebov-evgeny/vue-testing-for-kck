<template>
  <div id="app">
    <SHeader />
    <main class="main">
      <router-view/>
    </main>
    <SFooter/>
  </div>
</template>

<script>
import './assets/styles/global.scss';

import SHeader from '@/components/SHeader/SHeader.vue';
import SFooter from '@/components/SFooter/SFooter.vue';

export default {
  components: {
    SFooter,
    SHeader,
  },
};
</script>
