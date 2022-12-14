import React from "react";
import "../../Styles/ResultItem.scss";

const ResultTable = ({ client }) => {
  return (
    <>
      <section className="striped" key={client.id}>
        <div className="container" fluid="md">
          <h5 className="pt-3" data-testid="result-item-name">{client.name}</h5>
          <div className="pb-3 d-sm-flex col-sm-12">
            <span className="d-block col-sm-4">
                <i className="fa fa-phone"></i> 
                    {client.phone}
            </span>
            <span className="d-block col-sm-4">
                <i className="fa fa-at"></i> 
                   {client.email}
            </span>
            <span className="d-block col-sm-4" data-testid="result-item-policy">
                <i className="fa fa-file"></i>  
            Policy No: {client.policyNumber} | {client.policyNumber}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResultTable;
