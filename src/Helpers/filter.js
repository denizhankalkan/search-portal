

const filteredClients = clientsData.filter((client) => {
    const query = searchInput.toLowerCase();
    return client.name.toLowerCase().includes(query) 
      || client.policyNumber.includes(query)
      || client.phone.includes(query) 
      || client.email.toLowerCase().includes(query) 
    ;
  });
