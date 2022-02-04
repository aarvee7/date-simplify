const epoch = require("./fn/epoch");

class dater extends epoch {
   
    constructor(){
        super();
    };
   
date1 = new Date();
monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
dayArray = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
MethodAllowed = ['MM/DD/YYYY','MM/D/YYYY','MM/D/YY',
                    'MM/DD/YY','M/D/YYYY','M/D/YY','MM/DD', 
                    'MM-DD-YYYY','MM-D-YYYY','MM-D-YY',
                    'MM-DD-YY','M-D-YYYY','M-D-YY','MM-DD',
                    'MM:DD:YYYY','MM:D:YYYY','MM:D:YY',
                    'MM:DD:YY','M:D:YYYY','M:D:YY','MM:DD',
                    'M/DD/YY','M-DD-YY','M:DD:YY'
]
values = ['/',':','-'];
chars = ['M','D','YY'];


getTodayDate() {
    return this.date1.getDate() +'/'+this.date1.getMonth()+1+'/'+this.date1.getFullYear();
}
getMonthByName() {
    return this.monthArray[this.date1.getMonth()];
}
getTodayName() {
    return this.dayArray[this.date1.getDay()];
}

gettodaydateinMMDDYYYY(seperator){
    let sep;
    if(seperator == undefined){
sep = '/';
    }
let date = this.date1.getDate() > 9 ? this.date1.getDate() : '0'+this.date1.getDate();
 return this.date1.getMonth()+1 > 9 ? this.date1.getMonth()+1 : '0'+(this.date1.getMonth()+1)
         +sep+date+sep+this.date1.getFullYear();
}

gettodaydateinMMDDYY(){
    let sep;
    if(seperator == undefined){
sep = '/';
    }
    let date = this.date1.getDate() > 9 ? this.date1.getDate() : '0'+this.date1.getDate();
    return this.date1.getMonth()+1 > 9 ? this.date1.getMonth()+1 : '0'+(this.date1.getMonth()+1) +sep+date+sep+ this.date1.getFullYear().toString().slice(2,3);
}

gettodaydateinMDDYYYY(seperator){
    let sep;
    if(seperator == undefined){
sep = '/';
    }
let date = this.date1.getDate() > 9 ? this.date1.getDate() : '0'+this.date1.getDate();
 return (this.date1.getMonth()+1)+sep+date+sep+this.date1.getFullYear();
}

gettodaydateinMDYYYY(seperator){
    let sep;
    if(seperator == undefined){
sep = '/';
    }
    let date = this.date1.getDate() > 9 ? this.date1.getDate() : '0'+this.date1.getDate();
    return (this.date1.getMonth()+1) +sep+this.date1.getDate()+sep+ this.date1.getFullYear();
}

gettodaydateinMDYY(seperator){
    let sep;
    if(seperator == undefined){
sep = '/';
    }
    let date = this.date1.getDate() > 9 ? this.date1.getDate() : '0'+this.date1.getDate();
    return (this.date1.getMonth()+1) +sep+this.date1.getDate()+sep+ this.date1.getFullYear().toString().slice(2,3);
}

gettodaydateinMMDD(seperator){
    let sep;
    if(seperator == undefined){
sep = '/';
    }
    let date = this.date1.getDate() > 9 ? this.date1.getDate() : '0'+this.date1.getDate();
    return this.date1.getMonth()+1 > 9 ? this.date1.getMonth()+1 : '0'+(this.date1.getMonth()+1)+sep+date;
}

gettodaydateinYYYYMMDD(seperator){
    let sep;
    if(seperator == undefined){
sep = '/';
    }
    let date = this.date1.getDate() > 9 ? this.date1.getDate() : '0'+this.date1.getDate();
    return this.date1.getFullYear() +sep+this.date1.getMonth()+1 > 9 ? this.date1.getMonth()+1 : '0'+(this.date1.getMonth()+1)
    +sep+date;
}

getMeridianTimeNow(){
    return this.date1.getHours == 0 ? '12' : 
            this.date1.getHours > 12 ? this.date1.getHours() - 12 :
             this.date1.getHours() +':' +this.date1.getMinutes+" "+
             this.date1.getHours() < 12 ? 'AM':'PM'; 
}

getMilitaryTimeNow(){
    return this.date1.getHours < 10 ? '0'+this.date1.getHours : 
    this.date1.getHours +':' +this.date1.getMinutes();
}




// getDateFormatted(input1,input2){
    
//     const input11 = input1.toString();
//     const input22 = input.toString();
//     let date,month,year;
    

//     if(!this.MethodAllowed.includes(input22)){
//         throw new Error('Please enter valid format')
//     }



// }

    
}


module.exports = dater;