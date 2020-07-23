export default ({
  namespaced:true,
  state: {
    subTitle:''
  },
  mutations: {
    updateSubTitle(state,data){
        state.subTitle = data;
    }
  },
  actions: {
      setSubTitle(context,data){
        return new Promise(resolve => {
            context.commit("updateSubTitle", data);
            resolve(data);
          });
      }
  }
})
