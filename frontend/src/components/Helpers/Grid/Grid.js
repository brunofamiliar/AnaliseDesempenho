import ApiService from '../../../core/services/api.service';
import Loading from '../Loading/index.vue';
import Utils from '../../../core/utils';

export default {
  name: 'grid',
  components: {
    Loading
  },
  props: {
    columnsVisiable: Array,
    filterKey: String,
    dataSource:Array,
    columnDetail: Boolean,
    multcheck: Boolean,
  },
  data () {
    let sortOrders = {};

    for(let col of this.columnsVisiable){
      sortOrders[col.key] = 1;
    }
    if(typeof this.multcheck == "undefined"){
      this.multcheck = false;
    }

    if(typeof this.columnDetail == "undefined"){
      this.columnDetail = false;
    }

    let _userLogado = Utils.getUserData();

    if(_userLogado == null){
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }

    return {
      sortKey: '',
      sortOrders: sortOrders,
      paginator: {
        limit: 50,
        total : 0,
        start:1,
        end: 50,
      },
      activeLoading : false,
      existeRows:false,
      model:{
        checkAll: null
      },
      permissons : _userLogado.Permissons,
      removelProds1:1
    }
  },
  computed: {
    filterData(){
      
      let sortKey = this.sortKey;
      let filterKey = this.filterKey && this.filterKey.toLowerCase().trim();
      let order = this.sortOrders[sortKey] || 1;
      let dataSource = JSON.parse(JSON.stringify(this.dataSource));

      if (filterKey) {
        dataSource = dataSource.filter( (row) => {
          return Object.keys(row).some( (key) => {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          });
      }
          
      if (sortKey) {    
        dataSource = dataSource.slice().sort( (a, b) => {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order
        });
      }
      return dataSource;
    },
  },
  mounted () {

  },
  filters: {
    capitalize (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  methods: {
    sortBy (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    nextPag(){
      this.activeLoading = true;
      this.paginator.start += this.paginator.start == 1 ? this.paginator.limit-1  : this.paginator.limit;
      this.paginator.end += this.paginator.limit;

      this.$emit('nextPag',this.paginator.start);
      this.activeLoading = false;
    },
    prevPag(){

      if(this.paginator.start >= 2){
        this.activeLoading = true;
        this.paginator.start -= this.paginator.limit;
        this.paginator.start = this.paginator.start == 0 ? 1 : this.paginator.start;
        this.paginator.end -= this.paginator.limit;
        
        this.$emit('prevPag',this.paginator.start);
        this.activeLoading = false;      
      }
    },
    objectClass(col,item){

     if(typeof col.classCondition != "undefined"){

        for(let c of col.classCondition){
          if(item[col.key] == c.value){
            return c.add;
          }
        }
      }else{
        return col.class;
      }
    },
    checkAllProd(){
      const elements = this.$refs.selected_prod;

      for(let item of elements){
        item.checked = this.model.checkAll;
      }
      this.changeCheckProd();
    },
    changeCheckProd(){
      const elements = this.$refs.selected_prod;

      let elementsValue = [];

      for(let item of elements){
        if(item.checked){
          elementsValue.push(item.value);
        }
      }
      this.$emit('eventDel',elementsValue);
    },
    async clickItem(item,eventName){
      if(eventName == "eventDelete"){
        if(confirm("Deseja realmente deletar?")){
          this.$emit(eventName,item);     
        }
      }else{
        this.$emit(eventName,item);     
      }
    },
  }
}

//$grid->setClassCellCondition('equipe_ativo', "'{{equipe_ativo}}' == 'Sim'", "green");
