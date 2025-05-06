import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Full_body.css";

function Full_body() {
  const [addedCards, setAddedCards] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
    card8: false,
    card9: false,
    card10: false,
    card11: false,
    card12: false,
    card13: false,
    card14: false,
  });

  const handleAddToCart = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCart = () => {
    window.location.href = "/cart";
  };

  return (
    <div className="main">
      <h1>Showing results for "Full Body" package</h1>
      <div className="card-containermain">
        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Fit India Full Body Checkup with Free HbA1c{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹1099 <span className="original-pricefull">₹5233</span>
            </div>
          </div>

          <div className="tag-containerfull">
            {[
              { name: "Diabetes (HbA1c)", icon: "🩸" },
              { name: "Lipid", icon: "🧈" },
              { name: "Liver", icon: "🍖" },
              { name: "Kidney", icon: "🥩" },
              { name: "Infection", icon: "🦠" },
              { name: "Thyroid", icon: "🦋" },
            ].map((item, index) => (
              <span key={index} className="tagfull">
                <span className="tag-iconfull">{item.icon}</span>
                <span className="tag-namefull">{item.name}</span>
              </span>
            ))}
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">15 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>89</span>
              </span>

              {addedCards.card1  ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card1')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-containerfull1">
          <div className="title-rowfull1">
            <div className="card-titlefull1">
              Fit India Full Body Checkup With Vitamin Screening with Free HsCRP{" "}
              <span className="dropdown-iconfull1">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull1">
              ₹1599 <span className="original-pricefull1">₹7614</span>
            </div>
          </div>

          <div className="tag-containerfull1">
            {[
              { name: "Heart", icon: "❤️" },
              { name: "Diabetes (HbA1c)", icon: "🩸" },
              { name: "Lipid", icon: "🧈" },
              { name: "Liver", icon: "🍖" },
              { name: "Kidney", icon: "🥩" },
              { name: "Infection", icon: "🦠" },
              { name: "Thyroid", icon: "🦋" },
            ].map((item, index) => (
              <span
                key={index}
                className={`tagfull1 ${index >= 4 ? "second-row" : ""}`}
              >
                <span className="tag-iconfull1">{item.icon}</span>
                <span className="tag-namefull1">{item.name}</span>
              </span>
            ))}
          </div>

          <div className="card-footerfull1">
            <span className="reports-labelfull1">Reports in</span>
            <span className="terms-tooltipfull1">
              (T&C)
              <span className="tooltip-textfull1">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull1">
              <div className="timing-badgefull1">15 Hours</div>
              <div className="vertical-linefull1"></div>
              <span className="test-countfull1">
                Tests <span>92</span>
              </span>

              {addedCards.card2 ? (
                <button className="view-cart-btnfull1" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull1" onClick={() => handleAddToCart('card2')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-containermain">
        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Advance Plus Full Body Checkup with Free HsCRP{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹2199 <span className="original-pricefull">₹8260</span>
            </div>
          </div>
          <div className="test-list-card">
            <p className="test-names">
              CBC, ESR, BSF, HbA1c, Lipid Profile, LFT, KFT, Iron Studies,
              Rheumatoid Fac
              <span className="more-link">...More</span>
            </p>
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">15 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>98</span>
              </span>

              {addedCards.card3 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card3')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-containerfull1">
          <div className="title-rowfull1">
            <div className="card-titlefull1">
              Stay Fit Plus Full Body Checkup With Free RA Factor - Female{" "}
              <span className="dropdown-iconfull1">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull1">
              ₹2499 <span className="original-pricefull1">₹8760</span>
            </div>
          </div>

          <div className="tag-containerfull1">
            {[
              { name: "Heart", icon: "❤️" },
              { name: "Diabetes (HbA1c)", icon: "🩸" },
              { name: "Iron", icon: "🛡️" },
              { name: "Liver", icon: "🍖" },
              { name: "Kidney", icon: "🥩" },
              { name: "Infection", icon: "🦠" },
              { name: "Thyroid", icon: "🦋" },
            ].map((item, index) => (
              <span
                key={index}
                className={`tagfull1 ${index >= 4 ? "second-row" : ""}`}
              >
                <span className="tag-iconfull1">{item.icon}</span>
                <span className="tag-namefull1">{item.name}</span>
              </span>
            ))}
          </div>

          <div className="card-footerfull1">
            <span className="reports-labelfull1">Reports in</span>
            <span className="terms-tooltipfull1">
              (T&C)
              <span className="tooltip-textfull1">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull1">
              <div className="timing-badgefull1">15 Hours</div>
              <div className="vertical-linefull1"></div>
              <span className="test-countfull1">
                Tests <span>100</span>
              </span>

              {addedCards.card4 ? (
                <button className="view-cart-btnfull1" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull1" onClick={() => handleAddToCart('card4')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-containermain">
        <div className="card-containerfull1">
          <div className="title-rowfull1">
            <div className="card-titlefull1">
              Stay Fit Plus Full Body Checkup With Free RA Factor - Male{" "}
              <span className="dropdown-iconfull1">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull1">
              ₹2499 <span className="original-pricefull1">₹8760</span>
            </div>
          </div>

          <div className="tag-containerfull1">
            {[
              { name: "Heart", icon: "❤️" },
              { name: "Diabetes (HbA1c)", icon: "🩸" },
              { name: "Lipid", icon: "🧈" },
              { name: "Liver", icon: "🍖" },
              { name: "Kidney", icon: "🥩" },
              { name: "Infection", icon: "🦠" },
              { name: "Thyroid", icon: "🦋" },
            ].map((item, index) => (
              <span
                key={index}
                className={`tagfull1 ${index >= 4 ? "second-row" : ""}`}
              >
                <span className="tag-iconfull1">{item.icon}</span>
                <span className="tag-namefull1">{item.name}</span>
              </span>
            ))}
          </div>

          <div className="card-footerfull1">
            <span className="reports-labelfull1">Reports in</span>
            <span className="terms-tooltipfull1">
              (T&C)
              <span className="tooltip-textfull1">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull1">
              <div className="timing-badgefull1">15 Hours</div>
              <div className="vertical-linefull1"></div>
              <span className="test-countfull1">
                Tests <span>98</span>
              </span>

              {addedCards.card5 ? (
                <button className="view-cart-btnfull1" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull1" onClick={() => handleAddToCart('card5')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Advance Full Body Checkup With Hypertension Profile{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹2499 <span className="original-pricefull">₹8500</span>
            </div>
          </div>
          <div className="test-list-card">
            <p className="test-names">
              CBC, ESR, BSF, HbA1c, Lipid Profile, LFT, KFT, Iron Studies, Vit
              B12, Vit D<span className="more-link">...More</span>
            </p>
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">48 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>97</span>
              </span>

              {addedCards.card6 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card6')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-containermain">
        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Fit India Full Body Checkup{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹1099 <span className="original-pricefull">₹5233</span>
            </div>
          </div>
          <div className="test-list-card">
            <p className="test-names">
              It evaluates your overall health while diagnosing your risks for
              developing<span className="more-link">...More</span>
            </p>
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">15 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>89</span>
              </span>

              {addedCards.card7 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card7')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Super Advance Full Body Checkup Male{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹2999 <span className="original-pricefull">₹9860</span>
            </div>
          </div>
          <div className="test-list-card">
            <p className="test-names">
              It includes a group of test that possibly detects minor to major
              health ill....<span className="more-link">...More</span>
            </p>
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">15 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>100</span>
              </span>

              {addedCards.card8 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card8')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-containermain">
        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Smart Full Body Checkup{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹799 <span className="original-pricefull">₹2199</span>
            </div>
          </div>

          <div className="tag-containerfull">
            {[
              { name: "Sugar", icon: "🍬" },
              { name: "Lipid", icon: "🧈" },
              { name: "Liver", icon: "🍖" },
              { name: "Kidney", icon: "🥩" },
              { name: "Infection", icon: "🦠" },
              { name: "Thyroid", icon: "🦋" },
            ].map((item, index) => (
              <span key={index} className="tagfull">
                <span className="tag-iconfull">{item.icon}</span>
                <span className="tag-namefull">{item.name}</span>
              </span>
            ))}
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">15 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>87</span>
              </span>

              {addedCards.card9 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card9')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Vital Screening Package{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹599 <span className="original-pricefull">₹2010</span>
            </div>
          </div>

          <div className="tag-containerfull">
            {[
              { name: "Lipid", icon: "🧈" },
              { name: "Liver", icon: "🍖" },
              { name: "Kidney", icon: "🥩" },
              { name: "Infection", icon: "🦠" },
            ].map((item, index) => (
              <span key={index} className="tagfull">
                <span className="tag-iconfull">{item.icon}</span>
                <span className="tag-namefull">{item.name}</span>
              </span>
            ))}
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">15 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>83</span>
              </span>

              {addedCards.card10 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card10')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-containermain">
        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Master Full Body Checkup Package - Male{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹1499 <span className="original-pricefull">₹12500</span>
            </div>
          </div>
          <div className="test-list-card">
            <p className="test-names">
              Measures various body parameters, like CBC, Lipid profile, Rh
              factor, TSH,<span className="more-link">...More</span>
            </p>
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">48 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>105</span>
              </span>

              {addedCards.card11 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card11')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Master Full Body Checkup Package - Women{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹4499 <span className="original-pricefull">₹13000</span>
            </div>
          </div>
          <div className="test-list-card">
            <p className="test-names">
              The package assesses parameters like TSH, LFT, KFT, CBC, lipid
              profile, Vit<span className="more-link">...More</span>
            </p>
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">48 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>107</span>
              </span>

              {addedCards.card12 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card12')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-containermain">
        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Advance Full Body Checkup{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹1599 <span className="original-pricefull">₹6400</span>
            </div>
          </div>
          <div className="test-list-card">
            <p className="test-names">
              It screens for overall health status and diagnoses if you are at
              risk of ch<span className="more-link">...More</span>
            </p>
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">15 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>91</span>
              </span>

              {addedCards.card13 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card13')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-containerfull">
          <div className="title-rowfull">
            <div className="card-titlefull">
              Swasth Bharat Full Body Checkup{" "}
              <span className="dropdown-iconfull">
                <FiChevronDown />
              </span>
            </div>
            <div className="pricefull">
              ₹1099 <span className="original-pricefull">₹3700</span>
            </div>
          </div>
          <div className="test-list-card">
            <p className="test-names">
              This detects health issues early to prevent future problems & help
              take ste<span className="more-link">...More</span>
            </p>
          </div>

          <div className="card-footerfull">
            <span className="reports-labelfull">Reports in</span>
            <span className="terms-tooltipfull">
              (T&C)
              <span className="tooltip-textfull">
                <strong>Terms & Conditions</strong>
                <br />
                Report time varies with time of sample collection.
              </span>
            </span>

            <div className="timing-infofull">
              <div className="timing-badgefull">15 Hours</div>
              <div className="vertical-linefull"></div>
              <span className="test-countfull">
                Tests <span>89</span>
              </span>

              {addedCards.card1 ? (
                <button className="view-cart-btnfull" onClick={handleViewCart}>
                  View Cart <Minus size={14} />
                </button>
              ) : (
                <button className="add-btnfull" onClick={() => handleAddToCart('card14')}>
                  Add <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Full_body;
