var ClozeCard = function(text, Cloze){

        this.text   = text;
        this.Cloze = Cloze;

        this.showText = function(){
                console.log(this.text)
        };

            
        this.showCloze = function () {
                console.log(this.Cloze)
        };

        this.showRemovedClozeFromText = function(){

            if(this.text.includes(this.Cloze, 0) === true){
                //console.log("Answer the Question?")
                console.log("________" + this.text.split(this.Cloze).join("")); 
            }//end if  
            else{
                console.log("OOOOOPPPPPPSSSSS   " + this.Cloze + " does not appear in " + this.text );
            }                       
        }; //end removeClozureFromText


    };
    
module.exports = ClozeCard;
//console.log("ClozeCard has loaded successfully");