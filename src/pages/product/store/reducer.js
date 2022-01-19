import * as actionType from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  products: [
    {
      productName: "BP YUKON Roofing Shingles",
      productImage: "../../resource/image/aggregate1.jpg",
      productIntro: "This heavyweight fibreglass, 3-tab shingle, produced with wind resistant Weather-Tite® technology, is strong and durable for extraordinary protection in the toughest weather conditions. The innovative shadow band creates an eye-catching, chiseled style that complements your choice of any one of the wide selection of colours. BP shingles are now made with an elastomeric modified asphalt that makes them more flexible, more resistant, and delivers the highest level of durability against nature’s worst weather.",
      techDetail: [
        ["Product code: RT606"], ["Warranty: 30 years"], ["Wind protection: 115 km/h (70 mi/h)"], ["Standard application: 130 km/h (80 mi/h)"],  ["Coverage: 3 m² (32,3 pi²)"], ["Exposure: 143mm (5 5/8 in)"], ["Dimensions: 1000mm x 336mm (39 3/8 in x 13 1/4 in)"], ["Shingles/Bundle: 21 Bundles/Pallet 40"], ["Standards: ASTM D3018 ASTM D3161 – Class F ASTM D3462 CSA A123.5M FBC #15508 (Florida Building Code) UL 790 & CAN/ULC S107, Fire Resistance Class A"]
        ]
    },
    {
    productName: "CertainTeed Type X Fire Resistant Drywall",
    productImage: "",
    productIntro: "CertainTeed Type X fire resistant drywall is an interior gypsum board consisting of a solid set, fire resistive, Type X gypsum core enclosed in ivory-colored face paper and a strong liner back paper. CertainTeed Type X board features a specially formulated core providing fire resistance ratings when used in tested assemblies. Long edges are slightly tapered, allowing joints to be reinforced and concealed with joint tape and joint compound. CertainTeed Type X fire resistant drywall is available in a variety of lengths and widths.",
    techDetail: [
      ["Thickness: 5/8 (15.9 mm)"], ["Widths: 4' (1220 mm) standard / 54 (1370 mm)"], ["Lengths: 8' to 12' / (2440 mm to 3660 mm)"], ["Edges: Tapered"], ["Packaging: Two pieces per bundle, face-to-face and end-taped"], ["Surface Burning Characteristics: CertainTeed Type X Gypsum Board has a Flame Spread rating of 15 and Smoke Developed rating of 0, in accordance with ASTM E 84, (UL 723, UBC 8-1, NFPA 255, CAN/ULC-S102). UL Classified for Fire Resistance (ANSI/UL 263; ASTM E119) and listed under UL File No. CKNX.R3660 Applicable"], ["Standards: meets ASTM C1396."]
      ]
    },
    {
    productName: "CertainTeed EASI-LITE Lightweight Drywall",
    productImage: "",
    productIntro: "Easi-Lite® Lightweight Gypsum Board Makes Installation and Handling Easier. Easi-Lite gypsum board, is up to 30% lighter than standard gypsum boards and can be used for both interior ceilings and walls in residential and commercial applications. The lightweight board is easy to score and snap and enables quicker and easier installation, reducing strain and fatigue for the do-it-yourself homeowner or contractor. For detailed description, please see the Product Brochure.",
    techDetail: [
      ["Easi-Lite Drywall is light weight, easy to handle and ideal for wall and ceiling applications up to 24' o.c. (610 mm) framing spacing."], ["Thicknesses: 1/2' (12.7 mm)"], ["Weight: 1.2 - 1.4 psf (5.9 - 6.8 kg/m2)"], ["Widths: 4' (1220 mm) standard 54' (1375 mm)"], ["Lengths: 8' (2440 mm) to 12' (3660 mm)"], ["Edges: Tapered Packaging: Two pieces per bundle, face-to-face and end-taped"], ["Applicable Standards: ASTM C 1396 and CAN/CSA-A82.27"]
    ]
    },
    {
    productName: "CertainTeed LITE TAPING JOINT COMPOUND",
    productImage: "",
    productIntro: "Lite Taping ready-mix joint compound is designed specifically for embedding drywall reinforcing tape. This product exhibits excellent shrinkage and a strong bond for a smooth, uniform wall surface. Taping compound is not recommended for the second and third coats over embedded tape, or as a texturing material. Lite Taping Joint Compound - 18L Pail Lite Taping Joint Compound - 17L Box Made in Canada For a detailed product description please see Product Data and Submittal Sheet",
    techDetail: [
      ["Material: Vinyl-type mixture"], ["Color: Off white"], ["Packaging: 18 L (4.75 US Gal.)"], ["Pail Coverage: 35 L (9.3 US Gal.) to 45 L (11.9 US Gal.) of joint compound per 93 m2 (1000 ft2) of wallboard depending upon the thickness of joint compound applied."], ["Shelf Life: Please see the Technical Guide - Finishing Product Shelf Life for details"]
    ]
    },
    {
    productName: "CertainTeed LITE FINISHING BOX",
    productImage: "",
    productIntro: "Finishing compound is formulated for the second and third coats over wallboard joints, corner trims and fastener heads. It provides smooth sanding and workability with minimal shrinkage. Finishing should not be used for embedding tape or as the first coat over drywall trims. Finishing compound may also be used for hand texturing work. Lite Finishing Compound - 17 L Box - Made in Canada For a detailed product description please see the Product Data and Submittal Sheet",
    techDetail: [
      ["Material: Vinyl-type mixture"], ["Color: Off white"], ["Packaging: 17 L (4.5 US Gal.) Box"], ["Coverage: 35 L (9.3 US Gal.) to 45 L (11.9 US Gal.) of joint compound per 93 m2 (1000 ft2) of wallboard depending upon the thickness of joint compound applied."], ["Shelf Life: Please see the Technical Guide - Finishing Product Shelf Life for details"]
    ]
    },
    {
    productName: "SATURATED FELT #15 CSA CLASSIC",
    productImage: "",
    productIntro: "This felt roll roofing product (432 ft²) is made of heavy-weight asphalt saturated organic felt. Compliant with CSA 123.2 Type II standards. It is printed with 50 mm (2″) guide lines to facilitate horizontal alignement during shingle application.",
    techDetail: [
      ["Product Code RF403N"], ["Width 914 mm (36″)"], ["Length 43,8 m (144′)"], ["Coverage 40 m2 (432 ft2) Rolls per Pallet"], ["Standards ASTM D-4869 Type I CSA A123.3 Type II"]
      ]
    }
  ],
  currentDisplayIndex: 0,
  currentTechMenuIndex: 0,
  imageBaseOnThumbIndex: 0
});

export default (state = defaultState, action) => {
  if(action.type === actionType.UPDATE_DISPLAY_INDEX){
    const newState = state.merge({
      currentDisplayIndex: action.newIndex,
      currentTechMenuIndex: 0,
      imageBaseOnThumbIndex: 0
    });
    return newState;
  }
  if(action.type === actionType.UPDATE_TECH_MENU_INDEX){
    return state.set("currentTechMenuIndex",action.newIndex);
  }
  if(action.type === actionType.UPDATE_THUMB_INDEX){
    return state.set("imageBaseOnThumbIndex",action.newIndex);
  }

  return state;
};