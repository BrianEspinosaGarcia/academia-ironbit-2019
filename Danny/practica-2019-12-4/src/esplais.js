'use strict'

module.exports = function( index, numDelete=0, ...itemsForAdd) {
    let firstA = new Array();
    let secondA = new Array();
    let thirthA = new Array();
    if(isNaN(numDelete) || isNaN(index)) {
        return `Sintax Error en ${numDelete} is not a Number`;
    }
    if(  index < 0 ){
        return 'Sintax Error, no se permite indice negativo';
    }
    if(numDelete === 0){
        return [...this , ...itemsForAdd];
    }
    if(numDelete < 0){
        if( (numDelete*-1) > index ){
            return 'No es posible borrar esos elementos';
        }
        firstA = this.slice(0,index + numDelete );
        secondA = this.slice(index, this.length );
        return [...firstA, ...secondA, ...itemsForAdd];
    }
    if(numDelete > 0 && numDelete<(this.length - index) ) {
        firstA =  this.slice(0, index);  
        secondA = this.slice(index+1, this.length ); 
            if(itemsForAdd.length>0) {
                return thirthA = [...firstA, ...secondA ,...itemsForAdd];
            }else if( itemsForAdd.length === 0){
                return [...firstA, ...secondA];
            }
            else if(numDelete>= (this.length - index)){
                return [...firstA, ...itemsForAdd];
            }
    }

}
