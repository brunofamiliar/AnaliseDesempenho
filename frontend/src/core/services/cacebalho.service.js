import Utils from '../utils';

export default class CabecalhoService 
{
    static getMenu()
    {
        let sec = Utils.getUserData();
        let _menu = [];

        if(sec != null){
            if(sec.TipoUser == 2){
            _menu = [
                {
                Router: "/gerencial/dashboard",
                Name: "Dashboard",
                IconClass : "fas fa-tachometer-alt",
                Children : [],
                },
                {
                Router: "/gerencial/departamento",
                Name: "Departamentos",
                IconClass: "fas fa-th-list",
                Children : [],
                },
                {
                Router: "/gerencial/produto",
                Name: "Produtos",
                IconClass: "fas fa-clipboard-list",
                Children : [],
                },
                {
                Router: "",
                Name: "Vendas",
                IconClass: "fas fa-chart-bar",
                Children : [
                    {
                    Router: "/gerencial/pedido",
                    Name: "Pedidos",
                    IconClass : "fas fa-shopping-basket",
                    Children: []
                    },
                    {
                    Router: "/gerencial/oferta",
                    Name: "Ofertas",
                    IconClass : "fas fa-tags",
                    Children: []
                    },
                    {
                    Router: "/gerencial/relatorio",
                    Name: "Relatórios",
                    IconClass : "fas fa-chart-bar",
                    Children: []
                    },
                ],
                },
                {
                Router: "/gerencial/frete",
                Name: "Fretes",
                IconClass: "fas fa-truck-moving",
                Children : [],
                },
                {
                Router: "/gerencial/usercontrol",
                Name: "Control. Usuarios",
                IconClass: "fas fa-users-cog",
                Children : [],
                },
            ];
            }else if(sec.TipoUser == 1){
            _menu = [
                {
                Router: "/gerencial/dashboard",
                Name: "Dashboard",
                IconClass : "fas fa-tachometer-alt",
                Children : [],
                },
                {
                Router: "/gerencial/departamento",
                Name: "Departamentos",
                IconClass: "fas fa-th-list",
                Children : [],
                },
                {
                Router: "/gerencial/produto",
                Name: "Produtos",
                IconClass: "fas fa-list-alt",
                Children : [],
                },
                {
                Router: "",
                Name: "Vendas",
                IconClass: "fas fa-chart-bar",
                Children : [
                    {
                    Router: "/gerencial/pedido",
                    Name: "Pedidos",
                    IconClass : "fas fa-shopping-basket",
                    Children: []
                    },
                    {
                    Router: "/gerencial/oferta",
                    Name: "Ofertas",
                    IconClass : "fas fa-tags",
                    Children: []
                    },
                    {
                    Router: "/gerencial/relatorio",
                    Name: "Relatórios",
                    IconClass : "fas fa-chart-bar",
                    Children: []
                    },
                ],
                },
                {
                Router: "/gerencial/frete",
                Name: "Fretes",
                IconClass: "fas fa-truck-moving",
                Children : [],
                },
            ];
            }
        }
        return _menu;
    }   
}
