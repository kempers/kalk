 var Calculator = function() {
    	var operand1Int;
    	var operand2Int;
        var actionInt;
      	
	    this.getOperand1 = function() {
          	return operand1Int;
		}
        this.getOperand2 = function() {
          	return operand2Int;
        }
        this.getAction = function() {
            return actionInt;
        }
		
	
        this.setOperand1  = function() {
        	operand1Int = document.getElementById("operand1Value").value;
        }
        this.setOperand2  = function() {
        	operand2Int = document.getElementById("operand2Value").value;
        }
        this.setAction  = function() {
        	var n = document.getElementById("action").options.selectedIndex;
			actionInt= parseInt(document.getElementById("action").options[n].value);
        }
        this.addition  = function() {
         operand2Int=parseInt(operand2Int);
         operand1Int=parseInt(operand1Int);
        return  parseInt(operand2Int+operand1Int);
        }
      	this.subtraction  = function() {
         operand2Int=parseInt(operand2Int);
         operand1Int=parseInt(operand1Int);
        return  parseInt(operand1Int-operand2Int);
        }
        this.multiplication  = function() {
         operand2Int=parseInt(operand2Int);
         operand1Int=parseInt(operand1Int);
        return  parseInt(operand1Int*operand2Int);
        }
        this.division  = function() {
         operand2Int=parseInt(operand2Int);
         operand1Int=parseInt(operand1Int);
          if (operand2Int==0){return "Are you serious? You can not divide by ZERO!"} else {return  operand1Int/operand2Int;}
        }
		this.doAction = function() {
		        var result;
		          	switch  (actionInt) {
			    case 1: result = this.addition()
				break
			    case 2: result = this.subtraction()
				break
			    case 3: result = this.multiplication()
				break
			    case 4: result = this.division()
				break
				default: result ="Error! Please choose an action."
			};
			return result;
		};
		this.calc = function() {
		    this.setOperand1();
		    this.setOperand2();
		    this.setAction();
			document.getElementById("result").innerHTML =simpleCalc.doAction() ;
		
		};
    } 
    var simpleCalc = new Calculator();
