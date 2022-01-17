import React, { Component } from "react";
import {BusinessFieldWrapper , FieldName, FieldIntro} from "./style";

class BusinessField extends Component {
  render() { 
    return ( 
      <BusinessFieldWrapper>
        <FieldName>business field</FieldName>
        <FieldIntro>
          <p>There are many types of waterproofing materials. 
          Some of the best and most common include; Polyurethane, 
          Cementitious Coating, EPDM Rubber, Rubberized Asphalt, 
          Thermoplastic, Bituminous Membrane, and PVC Waterproofing 
          Membrane.</p>
          <p>There are many types of waterproofing materials. 
          Some of the best and most common include; Polyurethane, 
          Cementitious Coating, EPDM Rubber, Rubberized Asphalt, 
          Thermoplastic, Bituminous Membrane, and PVC Waterproofing 
          Membrane. Coating, EPDM Rubber, Rubberized Asphalt, 
          Thermoplastic, Bituminous Membrane, and PVC Waterproofing 
          </p>

        </FieldIntro>
      </BusinessFieldWrapper>

     );
  }
}
 
export default BusinessField;