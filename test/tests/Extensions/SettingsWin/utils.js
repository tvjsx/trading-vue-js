
export default {

    sett2desc(sett) {
        function setCharAt(str,index,chr) {
            if(index > str.length-1) return str
            return str.substring(0,index) + chr + str.substring(index+1)
        }

        sett = sett.replace(/([^A-Z])([A-Z])/g, '$1 $2')
        sett = sett.replace(/-|_/g, ' ')
        let tuple = sett.split(' ')
        tuple = tuple
            .filter(x => x.length)
            .map(x => setCharAt(x, 0, x[0].toUpperCase()))
        return tuple.join(' ')
    }
    
}
