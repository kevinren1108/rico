import React, { Component } from "react";
import {BusinessFieldWrapper , FieldName, FieldIntro} from "./style";

class BusinessField extends Component {
  render() { 
    return ( 
      <BusinessFieldWrapper>
        <FieldName>Business Field</FieldName>
        <FieldIntro>
          <p>
            RICO WATERPROOFING MATERIALS CANADA CD. LTD was established on April 3, 2020. The company s business scope is specialty-line building supplies merchant wholesale. primarily engagedin wholesaling specialized lines of building supplies.
          </p>
          <p>
            • aggregate merchant wholesalers
            • asphalt roofing materials merchant wholesalers
            • building stones merchant wholesalers
            • ceramic wall and floor tiles merchant wholesalers
            • concrete building products merchant wholesalers
            • drywall and plaster supplies merchant wholesalers
            • eavestroughing merchant wholesalers
            • masons materials merchant wholesalers
            • metal siding and roofing materials merchant wholesalers
            • prefabricated cottages merchant wholesalers
            • wire fences and accessories merchant wholesalers
          </p>
        </FieldIntro>
      </BusinessFieldWrapper>

     );
  }
}
 
export default BusinessField;