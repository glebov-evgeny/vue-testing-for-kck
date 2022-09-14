import Vue from 'vue';
import Vuex from 'vuex';
import cards from '@/store/cards.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentData: [],
    filteredData: [],
  },
  getters: {
    getInfoData(state) {
      return state.currentData ? state.currentData : [];
    },
    getFilterData(state) {
      return state.currentData.map((item) => ({
        infoType: item.type,
        typeOrderRu: item.typeOrderRu,
        isCheck: false,
      }));
    },
  },
  mutations: {
    updateData(state, info) {
      state.currentData = info;
    },
    deleteInfoCard(state, item) {
      state.currentData = state.currentData.filter((el) => el.id !== item);
    },
  },
  actions: {
    loadInfo(context) {
      context.commit('updateData', cards.map((item) => {
        let typeOrder = null;
        if (item.type === 'Pickup') {
          typeOrder = 'Самовывоз';
        } else if (item.type === 'Delivery') {
          typeOrder = 'Доставка';
        } else {
          typeOrder = 'Пункт самовывоза';
        }

        return {
          ...item,
          dateItem: new Date(item.creationDate).toLocaleString()
            .replace(',', ''),
          typeOrderRu: typeOrder,
        };
      }));
    },
  },
});
