import Utils from '../../../core/utils.js';
import ApiService from '../../../core/services/api.service';

export default {
  name: 'LoginAdm',
  components: {},
  props: {
  },
  data() {
    return {
      model: this.emptyModel(2),
      errors: "",
      formValid:false,
      anoAtual: new Date().getFullYear(),
      loading: false,
    }
  },
   mounted () {
    // const resp = await ApiService.chamaApi('api/v1/acesso/teste');
    // console.log("mouted: ",resp);
  },
  methods: {
    emptyModel(option = 1){
      switch(option){
        case 1:
            this.model = {
              Email: null,
              Senha: null,
            };
          break;
        default:
            return  {
              Email: null,
              Senha: null,
            };
      }
    },
    async fazerLogin(e) {

      this.errors = "";
      this.formValid = false;
      this.loading = true;
      
      if (!Utils.validEmail(this.model.Email)) 
        this.errors = 'E-mail ou senha inválidos.';
      else
      {
        const resp = await this.$store.dispatch('login', this.model);

        this.emptyModel();

        if(resp.Sucesso){
          this.$router.push('/gerencial');
        }else{
          this.errors = resp.Mensagem;
        }
      }
      this.loading = false;
      e.preventDefault();
    },
  },
  computed: {

    classObject1() 
    {
      this.formValid = false;

      if (this.model.Email) 
      {
        let valid = Utils.validEmail(this.model.Email);
        //this.formValid = Utils.validPassword(this.model.Senha) && valid;
        this.formValid = valid;

        return {
          'f-invalid': !valid,
          'f-valid': valid,
        }
      }

      return {
        'f-invalid': false,
        'f-valid': false,
      }
    }
  }
}
