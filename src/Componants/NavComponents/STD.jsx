import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./STD.css";

function Allergy() {
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

  const handleAddToCartstd = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartstd = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="mainstd">
        <h1>Showing results for "STD" test</h1>
        <div className="card-containermain1">
          <div className="card-containerstd">
            <div className="title-rowstd">
              <div className="card-titlestd">
              p24 antigen with HIV 1&2 Antibody Test {" "}
                <span className="dropdown-iconstd">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricestd">
                ₹900 <span className="original-pricestd">₹1600</span>
              </div>
            </div>
            <div className="test-list-cardstd">
              <p className="test-namesstd">
              The HIV p24 antigen is the most abundant HIV protein and is essential for a<span className="more-linkstd">...More</span>
              </p>
            </div>

            <div className="card-footerstd">
              <span className="reports-labelstd">Reports in</span>
              <span className="terms-tooltipstd">
                (T&C)
                <span className="tooltip-textstd">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infostd">
                <div className="timing-badgestd">48 Hours</div>
                <div className="vertical-linestd"></div>
                <span className="test-countstd">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnstd"
                    onClick={handleViewCartstd}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnstd"
                    onClick={() => handleAddToCartstd("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerstd1">
            <div className="title-rowstd1">
              <div className="card-titlestd1">
              VDRL Test{" "}
                <span className="dropdown-iconstd1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricestd1">
                ₹229 <span className="original-pricestd1">₹999</span>
              </div>
            </div>
            <div className="test-list-cardstd1">
              <p className="test-namesstd1">
              This test identifies antibodies your body may produce in response to the ba<span className="more-linkstd1">...More</span>
              </p>
            </div>

            <div className="card-footerstd1">
              <span className="reports-labelstd1">Reports in</span>
              <span className="terms-tooltipstd1">
                (T&C)
                <span className="tooltip-textstd1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infostd1">
                <div className="timing-badgestd1">10 Hours</div>
                <div className="vertical-linestd1"></div>
                <span className="test-countstd1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnstd1"
                    onClick={handleViewCartstd}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnstd1"
                    onClick={() => handleAddToCartstd("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containerstd">
            <div className="title-rowstd">
              <div className="card-titlestd">
              Hepatitis C (HCV) Viral Load Test By RT PCR 
              {" "}
                <span className="dropdown-iconstd">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricestd">
                ₹4800 <span className="original-pricestd">₹12000</span>
              </div>
            </div>
            <div className="test-list-cardstd">
              <p className="test-namesstd">
              The test shows the presence of HCV to diagnose the HCV infection.
              </p>
            </div>

            <div className="card-footerstd">
              <span className="reports-labelstd">Reports in</span>
              <span className="terms-tooltipstd">
                (T&C)
                <span className="tooltip-textstd">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infostd">
                <div className="timing-badgestd">48 Hours</div>
                <div className="vertical-linestd"></div>
                <span className="test-countstd">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnstd"
                    onClick={handleViewCartstd}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnstd"
                    onClick={() => handleAddToCartstd("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerstd1">
            <div className="title-rowstd1">
              <div className="card-titlestd1">
              Hepatitis B (HBV) Viral Load Test By RT PCR {" "}
                <span className="dropdown-iconstd1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricestd1">
                ₹5200<span className="original-pricestd1">₹13000</span>
              </div>
            </div>
            <div className="test-list-cardstd1">
              <p className="test-namesstd1">
              This test diagnoses the chronic Hepatitis B virus (HBV) infection.
              </p>
            </div>

            <div className="card-footerstd1">
              <span className="reports-labelstd1">Reports in</span>
              <span className="terms-tooltipstd1">
                (T&C)
                <span className="tooltip-textstd1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infostd1">
                <div className="timing-badgestd1">48 Hours</div>
                <div className="vertical-linestd1"></div>
                <span className="test-countstd1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnstd1"
                    onClick={handleViewCartstd}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnstd1"
                    onClick={() => handleAddToCartstd("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {!showAllTests && (
          <div className="show-more-containerstd">
            <button className="show-more-btnstd" onClick={toggleShowMoreTests}>
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermainstd">
              <div className="card-containerstd">
                <div className="title-rowstd">
                  <div className="card-titlestd">
                    Galactomannan Test{" "}
                    <span className="dropdown-iconstd">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricestd">
                    ₹5500 <span className="original-pricestd">₹11220</span>
                  </div>
                </div>
                <div className="test-list-cardstd">
                  <p className="test-namesstd">
                    This test diagnoses fungal infections in immunocompromised
                    individuals or l
                    <span className="more-linkstd">...More</span>
                  </p>
                </div>

                <div className="card-footerstd">
                  <span className="reports-labelstd">Reports in</span>
                  <span className="terms-tooltipstd">
                    (T&C)
                    <span className="tooltip-textstd">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infostd">
                    <div className="timing-badgestd">5 Hours</div>
                    <div className="vertical-linestd"></div>
                    <span className="test-countstd">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnstd"
                        onClick={handleViewCartstd}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnstd"
                        onClick={() => handleAddToCartstd("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerstd1">
                <div className="title-rowstd1">
                  <div className="card-titlestd1">
                    Drug Ampicillin Allergy Test By ImmunoCAP{" "}
                    <span className="dropdown-iconstd1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricestd1">
                    ₹1100 <span className="original-pricestd1">₹2420</span>
                  </div>
                </div>
                <div className="test-list-cardstd1">
                  <p className="test-namesstd1">
                    No fasting is required for this test. You can eat and drink
                    normally as per
                    <span className="more-linkstd1">...More</span>
                  </p>
                </div>

                <div className="card-footerstd1">
                  <span className="reports-labelstd1">Reports in</span>
                  <span className="terms-tooltipstd1">
                    (T&C)
                    <span className="tooltip-textstd1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infostd1">
                    <div className="timing-badgestd1">5 Hours</div>
                    <div className="vertical-linestd1"></div>
                    <span className="test-countstd1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnstd1"
                        onClick={handleViewCartstd}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnstd1"
                        onClick={() => handleAddToCartstd("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainstd">
              <div className="card-containerstd">
                <div className="title-rowstd">
                  <div className="card-titlestd">
                    Cow Milk Allergy Test By ImmunoCAP{" "}
                    <span className="dropdown-iconstd">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricestd">
                    ₹1200 <span className="original-pricestd">₹2420</span>
                  </div>
                </div>
                <div className="test-list-cardstd">
                  <p className="test-namesstd">
                    No fasting is required for this test. You can eat and drink
                    normally as per
                    <span className="more-linkstd">...More</span>
                  </p>
                </div>

                <div className="card-footerstd">
                  <span className="reports-labelstd">Reports in</span>
                  <span className="terms-tooltipstd">
                    (T&C)
                    <span className="tooltip-textstd">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infostd">
                    <div className="timing-badgestd">72 Hours</div>
                    <div className="vertical-linestd"></div>
                    <span className="test-countstd">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnstd"
                        onClick={handleViewCartstd}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnstd"
                        onClick={() => handleAddToCartstd("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerstd1">
                <div className="title-rowstd1">
                  <div className="card-titlestd1">
                    Egg Yolk (Anda) Allergy Test By ImmunoCAP{" "}
                    <span className="dropdown-iconstd1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricestd1">
                    ₹1200 <span className="original-pricestd1">₹2420</span>
                  </div>
                </div>
                <div className="test-list-cardstd1">
                  <p className="test-namesstd1">
                    No fasting is required for this test. You can eat and drink
                    normally as per
                    <span className="more-linkstd1">...More</span>
                  </p>
                </div>

                <div className="card-footerstd1">
                  <span className="reports-labelstd1">Reports in</span>
                  <span className="terms-tooltipstd1">
                    (T&C)
                    <span className="tooltip-textstd1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infostd1">
                    <div className="timing-badgestd1">72 Hours</div>
                    <div className="vertical-linestd1"></div>
                    <span className="test-countstd1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnstd1"
                        onClick={handleViewCartstd}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnstd1"
                        onClick={() => handleAddToCartstd("card8")}
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

      <div className="mainstd">
        <h1>Showing results for "Allergy" package</h1>
        <div className="card-containermainstd">
          <div className="card-containerstd">
            <div className="title-rowstd">
              <div className="card-titlestd">
                Comprehensive Allergy Basic Panel Test{" "}
                <span className="dropdown-iconstd">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricestd">
                ₹6999 <span className="original-pricestd">₹12000</span>
              </div>
            </div>
            <div className="test-list-cardstd">
              <p className="test-namesstd">
                This Allergy Test panel detects reactions to 240 allergens,
                helping identif<span className="more-linkstd">...More</span>
              </p>
            </div>

            <div className="card-footerstd">
              <span className="reports-labelstd">Reports in</span>
              <span className="terms-tooltipstd">
                (T&C)
                <span className="tooltip-textstd">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infostd">
                <div className="timing-badgestd">5 Hours</div>
                <div className="vertical-linestd"></div>
                <span className="test-countstd">
                  Tests <span>240</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnstd"
                    onClick={handleViewCartstd}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnstd"
                    onClick={() => handleAddToCartstd("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerstd1">
            <div className="title-rowstd1">
              <div className="card-titlestd1">
                Allergy Screening Package - Essential{" "}
                <span className="dropdown-iconstd1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricestd1">
                ₹599 <span className="original-pricestd1">₹1748</span>
              </div>
            </div>
            <div className="test-list-cardstd1">
              <p className="test-namesstd1">
                It looks for common allergens to diagnose/ manage allergies &
                aid plan trea<span className="more-linkstd1">...More</span>
              </p>
            </div>

            <div className="card-footerstd1">
              <span className="reports-labelstd1">Reports in</span>
              <span className="terms-tooltipstd1">
                (T&C)
                <span className="tooltip-textstd1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infostd1">
                <div className="timing-badgestd1">15 Hours</div>
                <div className="vertical-linestd1"></div>
                <span className="test-countstd1">
                  Tests <span>28</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnstd1"
                    onClick={handleViewCartstd}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnstd1"
                    onClick={() => handleAddToCartstd("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainstd">
          <div className="card-containerstd">
            <div className="title-rowstd">
              <div className="card-titlestd">
                Allergy Panel Advanced- Comprehensive Advance (73 Allergen){" "}
                <span className="dropdown-iconstd">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricestd">
                ₹11000 <span className="original-pricestd">₹27500</span>
              </div>
            </div>
            <div className="test-list-cardstd">
              <p className="test-namesstd">
                It is a diagnostic test designed to identify specific allergic
                sensitivitie
              </p>
            </div>

            <div className="card-footerstd">
              <span className="reports-labelstd">Reports in</span>
              <span className="terms-tooltipstd">
                (T&C)
                <span className="tooltip-textstd">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infostd">
                <div className="timing-badgestd">5 Hours</div>
                <div className="vertical-linestd"></div>
                <span className="test-countstd">
                  Tests <span>73</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnstd"
                    onClick={handleViewCartstd}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnstd"
                    onClick={() => handleAddToCartstd("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerstd1">
            <div className="title-rowstd1">
              <div className="card-titlestd1">
                Allergy Screening Package- Advance (Above 5 Years){" "}
                <span className="dropdown-iconstd1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricestd1">
                ₹1399 <span className="original-pricestd1">₹1999</span>
              </div>
            </div>
            <div className="test-list-cardstd1">
              <p className="test-namesstd1">
                This measures IgE antibodies, CBC, ESR, and Phadiatop to
                diagnose allergic<span className="more-linkstd1">...More</span>
              </p>
            </div>

            <div className="card-footerstd1">
              <span className="reports-labelstd1">Reports in</span>
              <span className="terms-tooltipstd1">
                (T&C)
                <span className="tooltip-textstd1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infostd1">
                <div className="timing-badgestd1">5 Hours</div>
                <div className="vertical-linestd1"></div>
                <span className="test-countstd1">
                  Tests <span>29</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnstd1"
                    onClick={handleViewCartstd}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnstd1"
                    onClick={() => handleAddToCartstd("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containerstd">
            <button
              className="show-more-btnstd"
              onClick={toggleShowMorePackages}
            >
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermainstd">
              <div className="card-containerstd">
                <div className="title-rowstd">
                  <div className="card-titlestd">
                    Veg Non Veg Allergy Basic Panel Test{" "}
                    <span className="dropdown-iconstd">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricestd">
                    ₹2799 <span className="original-pricestd">₹5700</span>
                  </div>
                </div>
                <div className="test-list-cardstd">
                  <p className="test-namesstd">
                    Tomato, Carrot, Potato, Onion, Sweet Potato, Spinach,
                    Lettuce, Cabbage, Swe
                    <span className="more-linkstd">...More</span>
                  </p>
                </div>

                <div className="card-footerstd">
                  <span className="reports-labelstd">Reports in</span>
                  <span className="terms-tooltipstd">
                    (T&C)
                    <span className="tooltip-textstd">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infostd">
                    <div className="timing-badgestd">5 Hours</div>
                    <div className="vertical-linestd"></div>
                    <span className="test-countstd">
                      Tests <span>24</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnstd"
                        onClick={handleViewCartstd}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnstd"
                        onClick={() => handleAddToCartstd("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerstd1">
                <div className="title-rowstd1">
                  <div className="card-titlestd1">
                    Eczema Allergy Basic Panel Test{" "}
                    <span className="dropdown-iconstd1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricestd1">
                    ₹2699 <span className="original-pricestd1">₹5500</span>
                  </div>
                </div>
                <div className="test-list-cardstd1">
                  <p className="test-namesstd1">
                    Whole Egg (Hen), Cow Milk, Fish (Cod), Wheat Flour, Peanut,
                    Soya Bean, Cat
                    <span className="more-linkstd1">...More</span>
                  </p>
                </div>

                <div className="card-footerstd1">
                  <span className="reports-labelstd1">Reports in</span>
                  <span className="terms-tooltipstd1">
                    (T&C)
                    <span className="tooltip-textstd1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infostd1">
                    <div className="timing-badgestd1">5 Hours</div>
                    <div className="vertical-linestd1"></div>
                    <span className="test-countstd1">
                      Tests <span>12</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnstd1"
                        onClick={handleViewCartstd}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnstd1"
                        onClick={() => handleAddToCartstd("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainstd">
              <div className="card-containerstd">
                <div className="title-rowstd">
                  <div className="card-titlestd">
                    Drugs Allergy Basic Panel Test 24 Allergens{" "}
                    <span className="dropdown-iconstd">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricestd">
                    ₹2799<span className="original-pricestd">₹5700</span>
                  </div>
                </div>
                <div className="test-list-cardstd">
                  <p className="test-namesstd">
                    Paracetamol, Ciprofloxacin, Ampicillin, Amoxicillin,
                    Diclofenac, Ibuprofen,
                  </p>
                </div>

                <div className="card-footerstd">
                  <span className="reports-labelstd">Reports in</span>
                  <span className="terms-tooltipstd">
                    (T&C)
                    <span className="tooltip-textstd">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infostd">
                    <div className="timing-badgestd">5 Hours</div>
                    <div className="vertical-linestd"></div>
                    <span className="test-countstd">
                      Tests <span>24</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btnstd"
                        onClick={handleViewCartstd}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnstd"
                        onClick={() => handleAddToCartstd("card15")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerstd1">
                <div className="title-rowstd1">
                  <div className="card-titlestd1">
                    Spices Allergy Basic Panel Test{" "}
                    <span className="dropdown-iconstd1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricestd1">
                    ₹2799<span className="original-pricestd1">₹5700</span>
                  </div>
                </div>
                <div className="test-list-cardstd1">
                  <p className="test-namesstd1">
                    Garlic, Fennel, Olive, Celery, Poppy (Seed), Parsley, Mint,
                    Cinnamon, Vanil
                    <span className="more-linkstd1">...More</span>
                  </p>
                </div>

                <div className="card-footerstd1">
                  <span className="reports-labelstd1">Reports in</span>
                  <span className="terms-tooltipstd1">
                    (T&C)
                    <span className="tooltip-textstd1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infostd1">
                    <div className="timing-badgestd1">5 Hours</div>
                    <div className="vertical-linestd1"></div>
                    <span className="test-countstd1">
                      Tests <span>24</span>
                    </span>

                    {addedCards.card16 ? (
                      <button
                        className="view-cart-btnstd1"
                        onClick={handleViewCartstd}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnstd1"
                        onClick={() => handleAddToCartstd("card16")}
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

export default Allergy;
