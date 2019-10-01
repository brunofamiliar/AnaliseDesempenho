'use strict';

//DIvisão
function division(a, b) {
    return a / b
}

//Multiplicação
function multiplication(a, b) {
    return a * b
}

//Subtração
function subctration(a, b) {
    return a - b
}

//Soma
function sum(a, b) {
    return a + b
}

//Potência
function pow(a, b) {
    return Math.pow(a, b)
}

//Fatorial
function factorial(n) {
    let respFat

    if( n <= 1)
        return (1)
    else{
        respFat = n * factorial(n-1)
        return respFat
    }
  }

//Somatória
class Summation{

    static summationMServers(init, final, m, p, callback, resp){

       if(init != final && init < final){
        resp += callback(m,init,p)
        return this.summationMServers(init + 1, final, m, p, callback, resp)
    }else{
        return resp += callback(m,init,p)
        }
   }
}


/****=========== CLASSES =============****/

//Sistema clássico
export class ClassicSystem {

    //Taxa de chegada
    static ArrivalsFee(a){
        return division(a,60).toFixed(2)
    }

    //Taxa de serviço
    static ServiceCharge(a){
        return division(a, 60).toFixed(2)
    }

    //Intensidade de tráfego
    static TrafficIntensity(lambda, mi){
        return multiplication(division(lambda, mi),100).toFixed(2)
    }

    //Probabilidade do sistema está vazio
    static EmptySystemProbability(p){
        return multiplication(subctration(1,p), 100).toFixed(2)
    }

    //Probabilidade de n pessoas estar usando o sistema
    static ProbabilityUsingSystem(p,n){
        return  multiplication(pow(p,n),(1-p)*100).toFixed(2)
    }

    //Probabilidade de n ou mais pessoas estar usando o sistema
    static EqualUpperProbability(p, n){
        return multiplication(pow(p,n),100).toFixed(2)
    }

    //Tempo médio de resposta
    static AverageResponseTime(mi,p){
        return  division(1,multiplication(mi,subctration(1,p))).toFixed(2)
    }

    //Número médio de usuários
    static AverageNumberUsers(p){
        return division(p, (1-p)).toFixed(2)
    }

    //Solicitações médias no sistema
    static AverageSystemRequests(p){
        return  division(pow(p,2),subctration(1,p)).toFixed(2)
    }
}

export class MServers extends Summation{
    //Probabilidade do servidor não ter requisições
    static NoRequest(m,p){

        let respSummation = super.summationMServers(0,m-1,m,p,(m,n,p)=>{
            return division(pow(multiplication(m,p),n),factorial(n))
        }, 0)

        return division(1,sum(division(pow(multiplication(m,p),m),multiplication(factorial(m),subctration(1,p))),respSummation)).toFixed(2)

    }

    //Probabilidade dos servidores estarem ocupados
    static BusyServers(m,p){
        return  multiplication(this.NoRequest(m,p),division(pow(multiplication(m,p),m),multiplication(factorial(m),subctration(1,p))))
    }

    //Tempo medio de resposta
    static AverageResponseTime(m,p,u){
        let t = multiplication(m,subctration(1,p))
        console.log("T  " + t)
        return  multiplication(division(1,u),division(this.BusyServers(m,p),multiplication(m,subctration(1,p))))
    }
}
