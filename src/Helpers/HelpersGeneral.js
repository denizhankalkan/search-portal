
const HelpersGeneral = {
    
    filterMethod(searchInput,clientsData){
      if(searchInput !== ""){

        clientsData.filter((client) => {

          const input = searchInput.toLowerCase();
          console.log("input", input)
          return client.name.toLowerCase().includes(input) 
          || client.policyNumber.includes(input)
          || client.phone.includes(input) 
          || client.email.toLowerCase().includes(input) 
          ;

        });

      }
      
    }  
  
};

export default HelpersGeneral;

