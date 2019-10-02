import VueCookies from 'vue-cookies'

export default class Utils 
{
    static validPassword(senha)
    {
        if (this.validaVariavel(senha) && senha.length >= 6)
        {
            if (
                /[0-9]/gm.test(senha) && 
                /[a-z]/gm.test(senha) &&
                /[A-Z]/gm.test(senha) &&
                /[!@#$%*()_+^&{}}:;?.]/gm.test(senha)
            )
                return true;
        }
        return false;            
    }    
    static validEmail(email)
    {
        if(this.validaVariavel(email)){
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        return false;
    }
    static validaVariavel(value)
    {
        if(typeof value != "undefined" && value != "" && value != null && typeof value != "NaN")
            return true;
        else
            return false;
    }

    static somenteNumeber(value)
    {
        if(this.validaVariavel(value))
            return value.toString().replace(/[\D]+/g,'');
        
        return null;
    }

    static formatReal(value)
    {
        if(this.validaVariavel(value)){
            let tmp = Number(value.toString().replace(/[\D]+/g,''));
            tmp = parseFloat(tmp/100).toFixed(2);
            return tmp.toLocaleString('pt-BR');
        }
        return null;
    }


    static base64Encode(value)
    {
        if(this.validaVariavel(value)){
            return new Buffer(value).toString('base64');
        }
        return null;
    }

    static base64Decode(value)
    {
        if(this.validaVariavel(value)){            
            try{
               return JSON.parse(new Buffer(value, 'base64').toString('ascii'));
            }catch(err){
                return null;
            }
        }
    }

    static getUserData()
    {
        let session = VueCookies.get("user_session")

        if(typeof session != "undefined")
            return this.base64Decode(session);
        
        return null;
    }

    static setUserData(value, expires = "60MIN")
    {
        if(this.validaVariavel(value)){
            
            if(typeof value == "object")
                value = JSON.stringify(value);

            VueCookies.set("user_session",this.base64Encode(value),expires); 
        }
    }

    static isObjectEmpty(obj) 
    {
        if(typeof obj == "undefined")
            return false;

        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
}

// let base64 = window.btoa('Hello, world');
// console.log(window.btoa('Hello, world'))
// console.log(window.atob(base64));

// let today = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// let yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);