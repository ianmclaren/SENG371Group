export const transformFontSize= (size: string) => {
    var savedValue = localStorage.getItem("fontMultiplier")
    var fontMultiplier = savedValue !== null ? JSON.parse(savedValue) : 100;

    switch(size){
        case "3xl":
            return (30*fontMultiplier/100).toString()+"px";
        case "xl":
            return (20*fontMultiplier/100).toString()+"px";
        case "md":
            return (16*fontMultiplier/100).toString()+"px";
        case "sm":
            return (14*fontMultiplier/100).toString()+"px";
        default:
            return "16px";
    }
}