//create measurment type
var measurments={
    gram:{
        pound: 0.434,
        kilogram: 1000
    },
    pound:{
        gram:2.205
    }
}

function convert(val, from, to){
    if(typeof(val) != 'number') return false;
    var f=measurments[from];
    var t=false;
    if(!f[to]){
        for(x in f){
            if(measurments[x][to]) t=f[x]*measurments[x][to];
        }
    }else{
        t=f[to];
    }
    return t?val*t:false;
}