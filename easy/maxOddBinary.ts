function maximumOddBinaryNumber(s: string): string {

    const num=s.lastIndexOf('1');

    if(num==-1){
        return "";
    }else{
        const result= s.substring(0,num) + s.substring(num+1)+ "1";
        return result;
    }


};