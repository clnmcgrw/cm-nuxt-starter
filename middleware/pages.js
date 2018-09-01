export default function(context) {

  context.store.commit('setCurrentPage', context.route.name);

};