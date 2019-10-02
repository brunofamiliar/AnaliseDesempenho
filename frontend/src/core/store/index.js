import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import ApiService from '../services/api.service';
import Utils from '../utils';

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    cartActive: true,
    status: '',
    token: VueCookies.get("access_token") || '',
    tokensExpiry : '',
    user : {},
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
    addToCart(state, item) {
    let found = state.cart.find(product => product._id == item._id);

    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.sale;
    } else {
        state.cart.push(item);

        Vue.set(item, 'quantity', 1);
        Vue.set(item, 'totalPrice', item.sale);
    }

    state.cartCount++;

    this.commit('saveCart');
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
  
      if (index > -1) {
          let product = state.cart[index];
          state.cartCount -= product.quantity;
  
          state.cart.splice(index, 1);
      }

      this.commit('saveCart');
    },
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
    },
  },
  actions: {
    async login({commit}, model){

      const resp = await ApiService.chamaApi('api/v1/acesso/login',model);

      if(resp.Sucesso){
       
        VueCookies.set("access_token",resp.Token,resp.Expires,null); 
        Utils.setUserData({Name: resp.UserName, TipoUser: resp.TipoUser, Permissons: resp.Permissions});
        commit('auth_success', resp.Token, resp.UserName)

      }else{
        
        commit('auth_error');
        VueCookies.remove("access_token"); 
        VueCookies.remove("user_session"); 
      
      }
      return resp;
    },
    async logout({commit}){
      await ApiService.chamaApi('api/v1/acesso/logout');
      VueCookies.remove("access_token"); 
      VueCookies.remove("user_session"); 
      commit('logout');
    },
  },
  getters : {
	  isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    tokensExpiry: state => state.tokensExpiry,
	}
})

// ENVIAR OS DADOS PARA O SERVIDOR, DEVE USAR ISSO
// let data = {
//   cart: JSON.stringify(this.$store.state.cart)
// }

// axios.post('/your-checkout-endpoint', data);
