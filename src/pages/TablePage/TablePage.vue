<template>
  <section class="intro">
    <div class="intro__box container">
      <div class="intro__filters">
        <SFilter
          :options="filterData" @updateFilter="onUpdateFilter" @updateSearch="onUpdateSearch"/>
      </div>
      <div class="intro__content">
        <div class="intro__header">
          <div class="intro__header-wrapper">
            <SSort :options="sortData" @updateSort="onUpdateSort"/>
          </div>
          <STabs/>
        </div>
        <div class="intro__body">
          <div class="table">
            <div class="table__item">ID</div>
            <div class="table__item">Номер накладной</div>
            <div class="table__item">Тип заказа</div>
            <div class="table__item">Дата создания</div>
            <div class="table__item"></div>
          </div>
          <transition-group name="list-animation">
            <SItem
              v-for="el in filteredInfoData"
              :key="el.id"
              :title="el.id"
              :txt-date="el.dateItem"
              :txt-number="el.number"
              :txt-order="el.typeOrderRu"/>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../MainPage/MainPage.scss';
import { mapActions, mapGetters } from 'vuex';
import SItem from '@/components/SItem/SItem.vue';
import SFilter from '@/components/SFilter/SFilter.vue';
import SSort from '@/components/SSort/SSort.vue';
import STabs from '@/components/STabs/STabs.vue';

export default {
  name: 'MainPage',
  data() {
    return {
      filterData: [
        {
          typeOrder: 'Pickup',
          typeOrderRu: 'Самовывоз',
        },
        {
          typeOrder: 'Delivery',
          typeOrderRu: 'Доставка',
        },
        {
          typeOrder: 'Pick-point',
          typeOrderRu: 'Пункт самовывоза',
        },
      ],
      sortData: [{
        txt: 'По возрастанию',
        value: 'sort_max',
      }, {
        txt: 'По убыванию',
        value: 'sort_min',
      }],
      filterSelected: 'default',
      filterSort: 'default',
      filterSearch: '',
    };
  },
  components: {
    SItem,
    SFilter,
    STabs,
    SSort,
  },
  computed: {
    ...mapGetters(['getInfoData']),
    filteredInfoData() {
      let filtered = [...this.getInfoData];
      if (this.filterSearch) {
        filtered = filtered.filter((el) => el.number.toLowerCase()
          .includes(this.filterSearch.toLowerCase()));
      }
      if (this.filterSelected && this.filterSelected !== 'default') {
        filtered = filtered.filter((el) => el.type === this.filterSelected);
      }
      if (this.filterSort && this.filterSort !== 'default') {
        if (this.filterSort === 'sort_max') {
          filtered.sort((a, b) => {
            const sortA = a.number.toLowerCase();
            const sortB = b.number.toLowerCase();
            if (sortA < sortB) { return -1; }
            if (sortA > sortB) return 1;
            return 0;
          });
        }
        if (this.filterSort === 'sort_min') {
          filtered.sort((a, b) => {
            const sortA = a.number.toLowerCase();
            const sortB = b.number.toLowerCase();
            if (sortA > sortB) { return -1; }
            if (sortA < sortB) return 1;
            return 0;
          });
        }
      }
      return filtered;
    },
  },
  methods: {
    ...mapActions(['loadInfo']),
    onUpdateFilter(event) {
      this.filterSelected = event;
    },
    onUpdateSearch(event) {
      this.filterSearch = event;
    },
    onUpdateSort(event) {
      this.filterSort = event;
      console.log(this.filterSort);
    },
  },
  created() {
    this.loadInfo();
  },
};
</script>
