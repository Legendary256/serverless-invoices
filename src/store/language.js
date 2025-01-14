import app from '../main';

export default {
  namespaced: true,
  state: {
    lang: null,
    all: [
      { name: 'English', code: 'en' },
      { name: 'Dutch', code: 'nl' },
      { name: 'French', code: 'fr' },
      { name: 'Italian', code: 'it' },
      { name: 'Estonian', code: 'et' },
      { name: 'Persian', code: 'fa' },
      { name: 'Spanish', code: 'es' },
      { name: 'Bangla', code: 'bn' },
      { name: 'German', code: 'de' },
      { name: 'Português - BR', code: 'pt_br' },
      { name: 'Indonesian', code: 'id' },
      { name: 'Korean', code: 'kr' },
    ],
  },
  mutations: {
    lang(state, lang) {
      state.lang = lang;
    },
  },
  actions: {
    changeLanguage({ commit }, lang) {
      app.$i18n.i18next.changeLanguage(lang.code);
      app.$router.push({ query: { ...app.$route.query, lang: lang.code } });
      commit('lang', lang);
    },
    initLanguage({ commit, state }, code) {
      commit('lang', state.all.find(lang => lang.code === code));
    },
  },
};
