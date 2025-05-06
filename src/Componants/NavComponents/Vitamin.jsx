import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Vitamin.css";

function Heart() {
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
    card15: false,
    card16: false,
  });

  const [showAllTests, setShowAllTests] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const toggleShowMoreTests = () => {
    setShowAllTests(!showAllTests);
  };

  const toggleShowMorePackages = () => {
    setShowAllPackages(!showAllPackages);
  };

  const handleAddToCartvitamin = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartvitamin = () => {
    window.location.href = "/cart";
  };


  return (
    <>
      <div className="mainvitamin">
        <h1>Showing results for "Vitamin" test</h1>
        <div className="card-containermainvitamin">
          <div className="card-containervitamin">
            <div className="title-rowvitamin">
              <div className="card-titlevitamin">
              Vitamin D Test{" "}
                <span className="dropdown-iconvitamin">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricevitamin">
                ₹499 <span className="original-pricevitamin">₹1245</span>
              </div>
            </div>
            <div className="test-list-cardvitamin">
              <p className="test-namesvitamin">
              A Vitamin D test measures levels crucial for bone health and muscle functio<span className="more-linkvitamin">...More</span>
              </p>
            </div>

            <div className="card-footervitamin">
              <span className="reports-labelvitamin">Reports in</span>
              <span className="terms-tooltipvitamin">
                (T&C)
                <span className="tooltip-textvitamin">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infovitamin">
                <div className="timing-badgevitamin">10 Hours</div>
                <div className="vertical-linevitamin"></div>
                <span className="test-countvitamin">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnvitamin"
                    onClick={handleViewCartvitamin}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnvitamin"
                    onClick={() => handleAddToCartvitamin("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containervitamin1">
            <div className="title-rowvitamin1">
              <div className="card-titlevitamin1">
              Vitamin B12 Test{" "}
                <span className="dropdown-iconvitamin1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricevitamin1">
                ₹499 <span className="original-pricevitamin1">₹1075</span>
              </div>
            </div>
            <div className="test-list-cardvitamin1">
              <p className="test-namesvitamin1">
              The test helps determine vitamin B12 deficiency and diagnose certain types<span className="more-linkvitamin1">...More</span>
              </p>
            </div>

            <div className="card-footervitamin1">
              <span className="reports-labelvitamin1">Reports in</span>
              <span className="terms-tooltipvitamin1">
                (T&C)
                <span className="tooltip-textvitamin1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infovitamin1">
                <div className="timing-badgevitamin1">10 Hours</div>
                <div className="vertical-linevitamin1"></div>
                <span className="test-countvitamin1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnvitamin1"
                    onClick={handleViewCartvitamin}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnvitamin1"
                    onClick={() => handleAddToCartvitamin("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainvitamin">
          <div className="card-containervitamin">
            <div className="title-rowvitamin">
              <div className="card-titlevitamin">
              Folic Acid Test{" "}
                <span className="dropdown-iconvitamin">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricevitamin">
                ₹999 <span className="original-pricevitamin">₹2500</span>
              </div>
            </div>
            <div className="test-list-cardvitamin">
              <p className="test-namesvitamin">
              This test checks for folic acid levels in the blood to detect a folic acid<span className="more-linkvitamin">...More</span>
              </p>
            </div>

            <div className="card-footervitamin">
              <span className="reports-labelvitamin">Reports in</span>
              <span className="terms-tooltipvitamin">
                (T&C)
                <span className="tooltip-textvitamin">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infovitamin">
                <div className="timing-badgevitamin">36 Hours</div>
                <div className="vertical-linevitamin"></div>
                <span className="test-countvitamin">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnvitamin"
                    onClick={handleViewCartvitamin}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnvitamin"
                    onClick={() => handleAddToCartvitamin("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containervitamin1">
            <div className="title-rowvitamin1">
              <div className="card-titlevitamin1">
              1,25-Dihydroxy vitamin D Test {" "}
                <span className="dropdown-iconvitamin1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricevitamin1">
                ₹3200 <span className="original-pricevitamin1">₹7000</span>
              </div>
            </div>
            <div className="test-list-cardvitamin1">
              <p className="test-namesvitamin1">
              The test detects the Vitamin D level to diagnose bone metabolism or parath<span className="more-linkvitamin1">...More</span>
              </p>
            </div>

            <div className="card-footervitamin1">
              <span className="reports-labelvitamin1">Reports in</span>
              <span className="terms-tooltipvitamin1">
                (T&C)
                <span className="tooltip-textvitamin1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infovitamin1">
                <div className="timing-badgevitamin1">72 Hours</div>
                <div className="vertical-linevitamin1"></div>
                <span className="test-countvitamin1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnvitamin1"
                    onClick={handleViewCartvitamin}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnvitamin1"
                    onClick={() => handleAddToCartvitamin("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containervitamin">
            <button className="show-more-btnvitamin" onClick={toggleShowMoreTests}>
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermainvitamin">
              <div className="card-containervitamin">
                <div className="title-rowvitamin">
                  <div className="card-titlevitamin">
                  Vitamin C (Ascorbic Acid) Test {" "}
                    <span className="dropdown-iconvitamin">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricevitamin">
                    ₹2800 <span className="original-pricevitamin">₹14000</span>
                  </div>
                </div>
                <div className="test-list-cardvitamin">
                  <p className="test-namesvitamin">
                  To detect the presence of scurvy caused by deficiency of Vitamin C.
                  </p>
                </div>

                <div className="card-footervitamin">
                  <span className="reports-labelvitamin">Reports in</span>
                  <span className="terms-tooltipvitamin">
                    (T&C)
                    <span className="tooltip-textvitamin">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infovitamin">
                    <div className="timing-badgevitamin">5 Hours</div>
                    <div className="vertical-linevitamin"></div>
                    <span className="test-countvitamin">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnvitamin"
                        onClick={handleViewCartvitamin}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnvitamin"
                        onClick={() => handleAddToCartvitamin("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containervitamin1">
                <div className="title-rowvitamin1">
                  <div className="card-titlevitamin1">
                  Active Vitamin B12 (Holotranscobalamin) Test {" "}
                    <span className="dropdown-iconvitamin1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricevitamin1">
                    ₹1800 <span className="original-pricevitamin1">₹3520</span>
                  </div>
                </div>
                <div className="test-list-cardvitamin1">
                  <p className="test-namesvitamin1">
                  This test measures functional Vitamin B12 levels, to diagnose & monitors vi
                    <span className="more-linkvitamin1">...More</span>
                  </p>
                </div>

                <div className="card-footervitamin1">
                  <span className="reports-labelvitamin1">Reports in</span>
                  <span className="terms-tooltipvitamin1">
                    (T&C)
                    <span className="tooltip-textvitamin1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infovitamin1">
                    <div className="timing-badgevitamin1">72 Hours</div>
                    <div className="vertical-linevitamin1"></div>
                    <span className="test-countvitamin1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnvitamin1"
                        onClick={handleViewCartvitamin}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnvitamin1"
                        onClick={() => handleAddToCartvitamin("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainvitamin">
              <div className="card-containervitamin">
                <div className="title-rowvitamin">
                  <div className="card-titlevitamin">
                  Vitamin B6 (Pyridoxine) Test {" "}
                    <span className="dropdown-iconvitamin">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricevitamin">
                    ₹4300 <span className="original-pricevitamin">₹19000</span>
                  </div>
                </div>
                <div className="test-list-cardvitamin">
                  <p className="test-namesvitamin">
                  Detects deficiency of Vitamin B6 that may cause anemia, depression, and wea
                    <span className="more-linkvitamin">...More</span>
                  </p>
                </div>

                <div className="card-footervitamin">
                  <span className="reports-labelvitamin">Reports in</span>
                  <span className="terms-tooltipvitamin">
                    (T&C)
                    <span className="tooltip-textvitamin">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infovitamin">
                    <div className="timing-badgevitamin">7 Hours</div>
                    <div className="vertical-linevitamin"></div>
                    <span className="test-countvitamin">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnvitamin"
                        onClick={handleViewCartvitamin}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnvitamin"
                        onClick={() => handleAddToCartvitamin("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containervitamin1">
                <div className="title-rowvitamin1">
                  <div className="card-titlevitamin1">
                  Vitamin E (Tocopherol) Test {" "}
                    <span className="dropdown-iconvitamin1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricevitamin1">
                    ₹4300 <span className="original-pricevitamin1">₹13200</span>
                  </div>
                </div>
                <div className="test-list-cardvitamin1">
                  <p className="test-namesvitamin1">
                  Measures the Vitamin E level in the blood and diagnoses the risk of celiac
                    <span className="more-linkvitamin1">...More</span>
                  </p>
                </div>

                <div className="card-footervitamin1">
                  <span className="reports-labelvitamin1">Reports in</span>
                  <span className="terms-tooltipvitamin1">
                    (T&C)
                    <span className="tooltip-textvitamin1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infovitamin1">
                    <div className="timing-badgevitamin1">7 Hours</div>
                    <div className="vertical-linevitamin1"></div>
                    <span className="test-countvitamin1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnvitamin1"
                        onClick={handleViewCartvitamin}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnvitamin1"
                        onClick={() => handleAddToCartvitamin("card8")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>



      <div className="mainvitamin">
        <h1>Showing results for "Vitamin" package</h1>
        <div className="card-containermainvitamin">
          <div className="card-containervitamin">
            <div className="title-rowvitamin">
              <div className="card-titlevitamin">
              Vitamin Profile Comprehensive {" "}
                <span className="dropdown-iconvitamin">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricevitamin">
                ₹6999 <span className="original-pricevitamin">₹21598</span>
              </div>
            </div>
            <div className="test-list-cardvitamin">
              <p className="test-namesvitamin">
              Comprehensive vitamin profile, including Vitamin A, B1, B2, B6, and B9 (Fol<span className="more-linkvitamin">...More</span>
              </p>
            </div>

            <div className="card-footervitamin">
              <span className="reports-labelvitamin">Reports in</span>
              <span className="terms-tooltipvitamin">
                (T&C)
                <span className="tooltip-textvitamin">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infovitamin">
                <div className="timing-badgevitamin">18 Hours</div>
                <div className="vertical-linevitamin"></div>
                <span className="test-countvitamin">
                  Tests <span>9</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnvitamin"
                    onClick={handleViewCartvitamin}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnvitamin"
                    onClick={() => handleAddToCartvitamin("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containervitamin1">
            <div className="title-rowvitamin1">
              <div className="card-titlevitamin1">
              Fit India Full Body Checkup with Vitamin D  {" "}
                <span className="dropdown-iconvitamin1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricevitamin1">
                ₹1299 <span className="original-pricevitamin1">₹6186</span>
              </div>
            </div>
            <div className="test-list-cardvitamin1">
              <p className="test-namesvitamin1">
              CBC, ESR, Glucose Fasting, HbA1c, Lipid Profile, LFT, KFT, Iron Studies, Th<span className="more-linkvitamin1">...More</span>
              </p>
            </div>

            <div className="card-footervitamin1">
              <span className="reports-labelvitamin1">Reports in</span>
              <span className="terms-tooltipvitamin1">
                (T&C)
                <span className="tooltip-textvitamin1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infovitamin1">
                <div className="timing-badgevitamin1">15 Hours</div>
                <div className="vertical-linevitamin1"></div>
                <span className="test-countvitamin1">
                  Tests <span>94</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnvitamin1"
                    onClick={handleViewCartvitamin}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnvitamin1"
                    onClick={() => handleAddToCartvitamin("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainvitamin">
          <div className="card-containervitamin">
            <div className="title-rowvitamin">
              <div className="card-titlevitamin">
              Vitamins & Mineral Screening Package {" "}
                <span className="dropdown-iconvitamin">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricevitamin">
                ₹1199 <span className="original-pricevitamin">₹2500</span>
              </div>
            </div>
            <div className="test-list-cardvitamin">
              <p className="test-namesvitamin">
              Measures essential vitamins and minerals to diagnose their abnormal level t<span className="more-linkvitamin">...More</span>
              </p>
            </div>

            <div className="card-footervitamin">
              <span className="reports-labelvitamin">Reports in</span>
              <span className="terms-tooltipvitamin">
                (T&C)
                <span className="tooltip-textvitamin">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infovitamin">
                <div className="timing-badgevitamin">48 Hours</div>
                <div className="vertical-linevitamin"></div>
                <span className="test-countvitamin">
                  Tests <span>10</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnvitamin"
                    onClick={handleViewCartvitamin}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnvitamin"
                    onClick={() => handleAddToCartvitamin("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containervitamin1">
            <div className="title-rowvitamin1">
              <div className="card-titlevitamin1">
              Advance Plus Full Body Checkup with Free HsCRP  {" "}
                <span className="dropdown-iconvitamin1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricevitamin1">
                ₹2199 <span className="original-pricevitamin1">₹8260</span>
              </div>
            </div>
            <div className="test-list-cardvitamin1">
              <p className="test-namesvitamin1">
              CBC, ESR, BSF, HbA1c, Lipid Profile, LFT, KFT, Iron Studies, Rheumatoid Fac<span className="more-linkvitamin1">...More</span>
              </p>
            </div>

            <div className="card-footervitamin1">
              <span className="reports-labelvitamin1">Reports in</span>
              <span className="terms-tooltipvitamin1">
                (T&C)
                <span className="tooltip-textvitamin1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infovitamin1">
                <div className="timing-badgevitamin1">15 Hours</div>
                <div className="vertical-linevitamin1"></div>
                <span className="test-countvitamin1">
                  Tests <span>98</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnvitamin1"
                    onClick={handleViewCartvitamin}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnvitamin1"
                    onClick={() => handleAddToCartvitamin("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containervitamin">
            <button className="show-more-btnvitamin" onClick={toggleShowMorePackages}>
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermainvitamin">
              <div className="card-containervitamin">
                <div className="title-rowvitamin">
                  <div className="card-titlevitamin">
                  Vitamin Profile {" "}
                    <span className="dropdown-iconvitamin">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricevitamin">
                    ₹699 <span className="original-pricevitamin">₹2999</span>
                  </div>
                </div>
                <div className="test-list-cardvitamin">
                  <p className="test-namesvitamin">
                  A Vitamin Profile Test helps identify deficiencies that may contribute to i
                    <span className="more-linkvitamin">...More</span>
                  </p>
                </div>

                <div className="card-footervitamin">
                  <span className="reports-labelvitamin">Reports in</span>
                  <span className="terms-tooltipvitamin">
                    (T&C)
                    <span className="tooltip-textvitamin">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infovitamin">
                    <div className="timing-badgevitamin">15 Hours</div>
                    <div className="vertical-linevitamin"></div>
                    <span className="test-countvitamin">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnvitamin"
                        onClick={handleViewCartvitamin}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnvitamin"
                        onClick={() => handleAddToCartvitamin("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containervitamin1">
                <div className="title-rowvitamin1">
                  <div className="card-titlevitamin1">
                  VitaCliffe(Vitamin B12, Vitamin D,TSH){" "}
                    <span className="dropdown-iconvitamin1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricevitamin1">
                    ₹1199 <span className="original-pricevitamin1">₹2398</span>
                  </div>
                </div>
                <div className="test-list-cardvitamin1">
                  <p className="test-namesvitamin1">
                  It measures Vitamin B12, Vitamin D & TSH levels to identify abnormalities a
                    <span className="more-linkvitamin1">...More</span>
                  </p>
                </div>

                <div className="card-footervitamin1">
                  <span className="reports-labelvitamin1">Reports in</span>
                  <span className="terms-tooltipvitamin1">
                    (T&C)
                    <span className="tooltip-textvitamin1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infovitamin1">
                    <div className="timing-badgevitamin1">15 Hours</div>
                    <div className="vertical-linevitamin1"></div>
                    <span className="test-countvitamin1">
                      Tests <span>3</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnvitamin1"
                        onClick={handleViewCartvitamin}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnvitamin1"
                        onClick={() => handleAddToCartvitamin("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainvitamin">
              <div className="card-containervitamin">
                <div className="title-rowvitamin">
                  <div className="card-titlevitamin">
                  Vitamin B Complex Profile  {" "}
                    <span className="dropdown-iconvitamin">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricevitamin">
                    ₹4499 <span className="original-pricevitamin">₹9449</span>
                  </div>
                </div>
                <div className="test-list-cardvitamin">
                  <p className="test-namesvitamin">
                  Vitamin B Complex profile, including Vitamin B1, B2, B6, B9 (Folic Acid), a
                    <span className="more-linkvitamin">...More</span>
                  </p>
                </div>

                <div className="card-footervitamin">
                  <span className="reports-labelvitamin">Reports in</span>
                  <span className="terms-tooltipvitamin">
                    (T&C)
                    <span className="tooltip-textvitamin">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infovitamin">
                    <div className="timing-badgevitamin">18 Hours</div>
                    <div className="vertical-linevitamin"></div>
                    <span className="test-countvitamin">
                      Tests <span>5</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btnvitamin"
                        onClick={handleViewCartvitamin}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnvitamin"
                        onClick={() => handleAddToCartvitamin("card15")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containervitamin1">
                <div className="title-rowvitamin1">
                  <div className="card-titlevitamin1">
                  Hemogram (CBC+ESR) {" "}
                    <span className="dropdown-iconvitamin1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricevitamin1">
                    ₹399 <span className="original-pricevitamin1">₹840</span>
                  </div>
                </div>
                <div className="test-list-cardvitamin1">
                  <p className="test-namesvitamin1">
                  CBC measures RBCs, WBCs, & platelets, & ESR Test identifies diseases relate
                    <span className="more-linkvitamin1">...More</span>
                  </p>
                </div>

                <div className="card-footervitamin1">
                  <span className="reports-labelvitamin1">Reports in</span>
                  <span className="terms-tooltipvitamin1">
                    (T&C)
                    <span className="tooltip-textvitamin1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infovitamin1">
                    <div className="timing-badgevitamin1">12 Hours</div>
                    <div className="vertical-linevitamin1"></div>
                    <span className="test-countvitamin1">
                      Tests <span>27</span>
                    </span>

                    {addedCards.card16 ? (
                      <button
                        className="view-cart-btnvitamin1"
                        onClick={handleViewCartvitamin}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnvitamin1"
                        onClick={() => handleAddToCartvitamin("card16")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Heart;
