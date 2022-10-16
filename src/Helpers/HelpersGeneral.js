
const HelpersGeneral = {
    
    filterMethod(searchInput, clientsData){
       return clientsData.filter((client) => {    
          const input = searchInput.toLowerCase();
          return client.name.toLowerCase().includes(input) 
          || client.policyNumber.includes(input)
          || client.phone.includes(input) 
          || client.email.toLowerCase().includes(input) 
          ;
        });  
    }  
};

export default HelpersGeneral;

