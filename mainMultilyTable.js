

function compare(firstNumber, secondNumber){
    if(firstNumber < secondNumber){
        return -1;
    }else if(firstNumber == secondNumber){
        return 0;
    }else{
        return 1;
    }
}

function isRangeNumber(number){
    if(number >=1 && number <=1000){
        return true;
    }
    return false;
}

function calculate(firstNumber, secondNumber){

    var result = new Array();
    for(let i = firstNumber; i < secondNumber + 1; i++){
        let list = new Array();
        for(let j = firstNumber; j <= i; j++){
            let tmpString = j + "*" + i + "=" + i * j;
            list.push(tmpString);
        }
        result.push(list);
    }
    return result;
}

// function printFormatMultilyTable(multilyTableArray){
    
// }

function createMultilyTable(firstNumber, secondNumber){
    //比较firstNumber和sencondNumber的值
    if(compare(firstNumber, secondNumber) > 0){
        return null
    }
    //判断firstNumber和sencondNumber的值是否符合范围内
    if(!isRangeNumber(firstNumber) || !isRangeNumber(secondNumber)){
        return null;
    }
    var multilyTable = calculate(firstNumber, secondNumber);

    return multilyTable;
}



module.exports = createMultilyTable;
