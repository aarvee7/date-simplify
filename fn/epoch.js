class epoch{
constructor(){}

monthArray1= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 
"Sep", "Oct", "Nov", "Dec"];


epochtoMMDDYYYY(input){
    let da = new Date(Number(input));
    
   da = da.toDateString().split(' ')
   let month = this.monthArray1.indexOf(da[1])+1 > 9 ? this.monthArray1.indexOf(da[1])+1 : '0'+(this.monthArray1.indexOf(da[1])+1) ;
   return  month+'/' +da[2]+'/'+da[3];
}

epochtoDDMMYYYY(input){
   // console.log(input);
    let da = new Date(Number(input));
    
   da = da.toDateString().split(' ')
    // console.log(da.toDateString().split(' '));
    // da = da.toString().split('-');
     console.log(da[2]);
     
     let month = this.monthArray1.indexOf(da[1])+1 > 9 ? this.monthArray1.indexOf(da[1])+1 : '0'+(this.monthArray1.indexOf(da[1])+1) ;
     
    return da[2] +"/"+ month 
      +'/'+da[3] ;
}

epochtoYYYYMMDD(input){
    let da = new Date(Number(input));
    
    da = da.toDateString().split(' ')
     // console.log(da.toDateString().split(' '));
     // da = da.toString().split('-');
      console.log(this.monthArray1.indexOf(da[1]));
      let month = this.monthArray1.indexOf(da[1])+1 > 9 ? this.monthArray1.indexOf(da[1])+1 : '0'+(this.monthArray1.indexOf(da[1])+1) ;
     return da[3] +'/'+  month +'/'+da[2];
}


}

module.exports = epoch;