'use strict';


function division(a, b) {
    return a / b
}

function multiplication(a, b) {
    return a * b
}

function subctration(a, b) {
    return a - b
}

function pow(a, b) {
    return Math.pow(a, b)
}

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

