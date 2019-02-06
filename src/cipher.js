

window.cipher = {

     encode:(desp,text)=>  { 
        let textSpaces= text.split(" ");
        let textCipher = [];
        for (let i=0; i<textSpaces.length; i++) {   
          let text2 = textSpaces[i]; 
          for(let j=0; j<text2.length; j++){
               let character= text2[j];
               let ASCII = character.charCodeAt(0);
               let newAscii= (ASCII-65+desp)%26+65;
               let codificar =String.fromCharCode(newAscii);
              
               textCipher.push(codificar);
          }
          
          textCipher.push(" ");

       }
          
       let resultCode =textCipher.join("");
       
        return resultCode.trim();
     
     },
     
     
   
     decode:(desp2,code)=> { 
       let codeSpaces= code.split(" ");
       let decodeCipher = [];
       for ( let i=0; i<codeSpaces.length; i++) {
        let code2 = codeSpaces[i];
         for (let j=0; j<code2.length; j++) {
         let character= code2[j]; 
       let ASCII = character.charCodeAt(0);
       let newAscii= (ASCII+65-desp2)%26+65;
       let decodificar=String.fromCharCode(newAscii);
       decodeCipher.push(decodificar);

          }
          decodeCipher.push(" ");

          }
    
     let resultText= decodeCipher.join("");
     
       return resultText.trim();
     },

};
