import { createStore } from 'vuex'


export default createStore({
  state: {
    selectedCategory: ''
  },
  mutations: {
    changeCategory(state, id) {
        state.selectedCategory = id;
    }
  },
  actions: {
    changeCategory(context, id) {
        context.commit('changeCategory', id);
    }
  },
});

