import ApiService from '../../../core/services/api.service';

export default {
  name: 'autocomplete',
  components: {},
  props: {
    dataSource: Array,
    placeholder: String,
    apiSearch:String,
    keyName:String,
    descriptionKey:String
  },
  data () {
    return {
      keywords: null,
      description: null,
      lstOptions: [],
      consult: true
    }
  },
  asyncComputed: {
    async filterData(){
      if(typeof this.apiSearch != "undefined" && this.keywords != null && this.consult){
        this.lstOptions = await ApiService.chamaApi(this.apiSearch+this.keywords);
      }else{
        this.lstOptions = [];
      }
      return this.lstOptions;
    }
  },
  mounted () {

  },
  methods: {
    selectedItem(item){
      this.keywords = item.Id;
      this.description = item.Description;
      this.consult = false;
      this.$emit("model",item);     
    },
    verificaValue(){
      if(this.keywords == ""){
        this.description = null;
        this.consult = true;
      }
    }
  }
}
