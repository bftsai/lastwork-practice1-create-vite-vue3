export function thousands(num){
    const reg=new RegExp('\\B(?=(\\d{3})+(?!\\d))','g');
    return String(num).replace(reg,',');
}

export function data(time) { 
    const localDate=new Date(time*1000);
    return localDate.toDateString();
}