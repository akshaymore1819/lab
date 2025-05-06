import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Allergy.css";

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

  const handleAddToCartallergy = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartallergy = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="mainallergy">
        <h1>Showing results for "Allergy" test</h1>
        <div className="card-containermainallergy">
          <div className="card-containerallergy">
            <div className="title-rowallergy">
              <div className="card-titleallergy">
                IgE Total Test{" "}
                <span className="dropdown-iconallergy">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceallergy">
                ₹599 <span className="original-priceallergy">₹1660</span>
              </div>
            </div>
            <div className="test-list-cardallergy">
              <p className="test-namesallergy">
                This measures total IgE antibodies against a single allergen to
                diagnose in
                <span className="more-linkallergy">...More</span>
              </p>
            </div>

            <div className="card-footerallergy">
              <span className="reports-labelallergy">Reports in</span>
              <span className="terms-tooltipallergy">
                (T&C)
                <span className="tooltip-textallergy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoallergy">
                <div className="timing-badgeallergy">10 Hours</div>
                <div className="vertical-lineallergy"></div>
                <span className="test-countallergy">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnallergy"
                    onClick={handleViewCartallergy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnallergy"
                    onClick={() => handleAddToCartallergy("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerallergy1">
            <div className="title-rowallergy1">
              <div className="card-titleallergy1">
                Absolute Eosinophil Count (AEC) Test{" "}
                <span className="dropdown-iconallergy1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceallergy1">
                ₹149 <span className="original-priceallergy1">₹320</span>
              </div>
            </div>
            <div className="test-list-cardallergy1">
              <p className="test-namesallergy1">
                It analyzes types of WBCs called eosinophils to detect allergic
                diseases &<span className="more-linkallergy1">...More</span>
              </p>
            </div>

            <div className="card-footerallergy1">
              <span className="reports-labelallergy1">Reports in</span>
              <span className="terms-tooltipallergy1">
                (T&C)
                <span className="tooltip-textallergy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoallergy">
                <div className="timing-badgeallergy1">12 Hours</div>
                <div className="vertical-lineallergy1"></div>
                <span className="test-countallergy1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnallergy1"
                    onClick={handleViewCartallergy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnallergy1"
                    onClick={() => handleAddToCartallergy("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainallergy">
          <div className="card-containerallergy">
            <div className="title-rowallergy">
              <div className="card-titleallergy">
                Allergy: Phadiatop Test (Above 5 Years){" "}
                <span className="dropdown-iconallergy">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceallergy">
                ₹1000<span className="original-priceallergy">₹2200</span>
              </div>
            </div>
            <div className="test-list-cardallergy">
              <p className="test-namesallergy">
                To detect IgE antibodies to identify allergens that cause
                allergic reaction
                <span className="more-linkallergy">...More</span>
              </p>
            </div>

            <div className="card-footerallergy">
              <span className="reports-labelallergy">Reports in</span>
              <span className="terms-tooltipallergy">
                (T&C)
                <span className="tooltip-textallergy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoallergy">
                <div className="timing-badgeallergy">6 Hours</div>
                <div className="vertical-lineallergy"></div>
                <span className="test-countallergy">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnallergy"
                    onClick={handleViewCartallergy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnallergy"
                    onClick={() => handleAddToCartallergy("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerallergy1">
            <div className="title-rowallergy1">
              <div className="card-titleallergy1">
                Wheat (Genhu) Allergy Test By ImmunoCAP{" "}
                <span className="dropdown-iconallergy1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceallergy1">
                ₹1200 <span className="original-priceallergy1">₹2420</span>
              </div>
            </div>
            <div className="test-list-cardallergy1">
              <p className="test-namesallergy1">
                No fasting is required for this test. You can eat and drink
                normally as per
                <span className="more-linkallergy1">...More</span>
              </p>
            </div>

            <div className="card-footerallergy1">
              <span className="reports-labelallergy1">Reports in</span>
              <span className="terms-tooltipallergy1">
                (T&C)
                <span className="tooltip-textallergy1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoallergy1">
                <div className="timing-badgeallergy1">72 Hours</div>
                <div className="vertical-lineallergy1"></div>
                <span className="test-countallergy1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnallergy1"
                    onClick={handleViewCartallergy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnallergy1"
                    onClick={() => handleAddToCartallergy("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containerallergy">
            <button
              className="show-more-btnallergy"
              onClick={toggleShowMoreTests}
            >
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermainallergy">
              <div className="card-containerallergy">
                <div className="title-rowallergy">
                  <div className="card-titleallergy">
                    Galactomannan Test{" "}
                    <span className="dropdown-iconallergy">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceallergy">
                    ₹5500 <span className="original-priceallergy">₹11220</span>
                  </div>
                </div>
                <div className="test-list-cardallergy">
                  <p className="test-namesheart">
                    This test diagnoses fungal infections in immunocompromised
                    individuals or l
                    <span className="more-linkallergy">...More</span>
                  </p>
                </div>

                <div className="card-footerallergy">
                  <span className="reports-labelallergy">Reports in</span>
                  <span className="terms-tooltipallergy">
                    (T&C)
                    <span className="tooltip-textallergy">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoallergy">
                    <div className="timing-badgeallergy">5 Hours</div>
                    <div className="vertical-lineallergy"></div>
                    <span className="test-countallergy">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnallergy"
                        onClick={handleViewCartallergy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnallergy"
                        onClick={() => handleAddToCartallergy("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerallergy1">
                <div className="title-rowallergy1">
                  <div className="card-titleallergy1">
                    Drug Ampicillin Allergy Test By ImmunoCAP{" "}
                    <span className="dropdown-iconallergy1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceallergy1">
                    ₹1100 <span className="original-priceallergy1">₹2420</span>
                  </div>
                </div>
                <div className="test-list-cardallergy1">
                  <p className="test-namesallergy1">
                    No fasting is required for this test. You can eat and drink
                    normally as per
                    <span className="more-linkallergy1">...More</span>
                  </p>
                </div>

                <div className="card-footerallergy1">
                  <span className="reports-labelallergy1">Reports in</span>
                  <span className="terms-tooltipallergy1">
                    (T&C)
                    <span className="tooltip-textallergy1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoallergy1">
                    <div className="timing-badgeallergy1">5 Hours</div>
                    <div className="vertical-lineallergy1"></div>
                    <span className="test-countallergy1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnallergy1"
                        onClick={handleViewCartallergy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnallergy1"
                        onClick={() => handleAddToCartallergy("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainallergy">
              <div className="card-containerallergy">
                <div className="title-rowallergy">
                  <div className="card-titleallergy">
                    Cow Milk Allergy Test By ImmunoCAP{" "}
                    <span className="dropdown-iconallergy">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceallergy">
                    ₹1200 <span className="original-priceallergy">₹2420</span>
                  </div>
                </div>
                <div className="test-list-cardallergy">
                  <p className="test-namesallergy">
                    No fasting is required for this test. You can eat and drink
                    normally as per
                    <span className="more-linkallergy">...More</span>
                  </p>
                </div>

                <div className="card-footerallergy">
                  <span className="reports-labelallergy">Reports in</span>
                  <span className="terms-tooltipallergy">
                    (T&C)
                    <span className="tooltip-textallergy">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoallergy">
                    <div className="timing-badgeallergy">72 Hours</div>
                    <div className="vertical-lineallergy"></div>
                    <span className="test-countallergy">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnallergy"
                        onClick={handleViewCartallergy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnallergy"
                        onClick={() => handleAddToCartallergy("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerallergy1">
                <div className="title-rowallergy1">
                  <div className="card-titleallergy1">
                    Egg Yolk (Anda) Allergy Test By ImmunoCAP{" "}
                    <span className="dropdown-iconallergy1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceallergy1">
                    ₹1200 <span className="original-priceallergy1">₹2420</span>
                  </div>
                </div>
                <div className="test-list-cardallergy1">
                  <p className="test-namesallergy1">
                    No fasting is required for this test. You can eat and drink
                    normally as per
                    <span className="more-linkallergy1">...More</span>
                  </p>
                </div>

                <div className="card-footerallergy1">
                  <span className="reports-labelallergy1">Reports in</span>
                  <span className="terms-tooltipallergy1">
                    (T&C)
                    <span className="tooltip-textallergy1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoallergy1">
                    <div className="timing-badgeallergy1">72 Hours</div>
                    <div className="vertical-lineallergy1"></div>
                    <span className="test-countallergy1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnallergy1"
                        onClick={handleViewCartallergy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnallergy1"
                        onClick={() => handleAddToCartallergy("card8")}
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

      <div className="mainallergy">
        <h1>Showing results for "Allergy" package</h1>
        <div className="card-containermainallergy">
          <div className="card-containerallergy">
            <div className="title-rowallergy">
              <div className="card-titleallergy">
                Comprehensive Allergy Basic Panel Test{" "}
                <span className="dropdown-iconallergy">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceallergy">
                ₹6999 <span className="original-priceallergy">₹12000</span>
              </div>
            </div>
            <div className="test-list-cardallergy">
              <p className="test-namesallergy">
                This Allergy Test panel detects reactions to 240 allergens,
                helping identif<span className="more-linkallergy">...More</span>
              </p>
            </div>

            <div className="card-footerallergy">
              <span className="reports-labelallergy">Reports in</span>
              <span className="terms-tooltipallergy">
                (T&C)
                <span className="tooltip-textallergy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoallergy">
                <div className="timing-badgeallergy">5 Hours</div>
                <div className="vertical-lineallergy"></div>
                <span className="test-countallergy">
                  Tests <span>240</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnallergy"
                    onClick={handleViewCartallergy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnallergy"
                    onClick={() => handleAddToCartallergy("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerallergy1">
            <div className="title-rowallergy1">
              <div className="card-titleallergy1">
                Allergy Screening Package - Essential{" "}
                <span className="dropdown-iconallergy1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceallergy1">
                ₹599 <span className="original-priceallergy1">₹1748</span>
              </div>
            </div>
            <div className="test-list-cardallergy1">
              <p className="test-namesallergy1">
                It looks for common allergens to diagnose/ manage allergies &
                aid plan trea
                <span className="more-linkallergy1">...More</span>
              </p>
            </div>

            <div className="card-footerallergy1">
              <span className="reports-labelallergy1">Reports in</span>
              <span className="terms-tooltipallergy1">
                (T&C)
                <span className="tooltip-textallergy1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoallergy1">
                <div className="timing-badgeallergy1">15 Hours</div>
                <div className="vertical-lineallergy1"></div>
                <span className="test-countallergy1">
                  Tests <span>28</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnallergy1"
                    onClick={handleViewCartallergy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnallergy1"
                    onClick={() => handleAddToCartallergy("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainallergy">
          <div className="card-containerallergy">
            <div className="title-rowallergy">
              <div className="card-titleallergy">
                Allergy Panel Advanced- Comprehensive Advance (73 Allergen){" "}
                <span className="dropdown-iconallergy">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceallergy">
                ₹11000 <span className="original-priceallergy">₹27500</span>
              </div>
            </div>
            <div className="test-list-cardallergy">
              <p className="test-namesallergy">
                It is a diagnostic test designed to identify specific allergic
                sensitivitie
              </p>
            </div>

            <div className="card-footerallergy">
              <span className="reports-labelallergy">Reports in</span>
              <span className="terms-tooltipallergy">
                (T&C)
                <span className="tooltip-textallergy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoallergy">
                <div className="timing-badgeallergy">5 Hours</div>
                <div className="vertical-lineallergy"></div>
                <span className="test-countallergy">
                  Tests <span>73</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnallergy"
                    onClick={handleViewCartallergy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnallergy"
                    onClick={() => handleAddToCartallergy("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerallergy1">
            <div className="title-rowallergy1">
              <div className="card-titleallergy1">
                Allergy Screening Package- Advance (Above 5 Years){" "}
                <span className="dropdown-iconallergy1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceallergy1">
                ₹1399 <span className="original-priceallergy1">₹1999</span>
              </div>
            </div>
            <div className="test-list-cardallergy1">
              <p className="test-namesallergy1">
                This measures IgE antibodies, CBC, ESR, and Phadiatop to
                diagnose allergic
                <span className="more-linkallergy1">...More</span>
              </p>
            </div>

            <div className="card-footerallergy1">
              <span className="reports-labelallergy1">Reports in</span>
              <span className="terms-tooltipallergy1">
                (T&C)
                <span className="tooltip-textallergy1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoallergy1">
                <div className="timing-badgeallergy1">5 Hours</div>
                <div className="vertical-lineallergy1"></div>
                <span className="test-countallergy1">
                  Tests <span>29</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnallergy1"
                    onClick={handleViewCartallergy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnallergy1"
                    onClick={() => handleAddToCartallergy("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containerallergy">
            <button
              className="show-more-btnallergy"
              onClick={toggleShowMorePackages}
            >
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermainallergy">
              <div className="card-containerallergy">
                <div className="title-rowallergy">
                  <div className="card-titleallergy">
                    Veg Non Veg Allergy Basic Panel Test{" "}
                    <span className="dropdown-iconallergy">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceallergy">
                    ₹2799 <span className="original-priceallergy">₹5700</span>
                  </div>
                </div>
                <div className="test-list-cardallergy">
                  <p className="test-namesallergy">
                    Tomato, Carrot, Potato, Onion, Sweet Potato, Spinach,
                    Lettuce, Cabbage, Swe
                    <span className="more-linkallergy">...More</span>
                  </p>
                </div>

                <div className="card-footerallergy">
                  <span className="reports-labelallergy">Reports in</span>
                  <span className="terms-tooltipallergy">
                    (T&C)
                    <span className="tooltip-textallergy">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoallergy">
                    <div className="timing-badgeallergy">5 Hours</div>
                    <div className="vertical-lineallergy"></div>
                    <span className="test-countallergy">
                      Tests <span>24</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnallergy"
                        onClick={handleViewCartallergy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnallergy"
                        onClick={() => handleAddToCartallergy("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerallergy1">
                <div className="title-rowallergy1">
                  <div className="card-titleallergy1">
                    Eczema Allergy Basic Panel Test{" "}
                    <span className="dropdown-iconallergy1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceallergy1">
                    ₹2699 <span className="original-priceallergy1">₹5500</span>
                  </div>
                </div>
                <div className="test-list-cardallergy1">
                  <p className="test-namesallergy1">
                    Whole Egg (Hen), Cow Milk, Fish (Cod), Wheat Flour, Peanut,
                    Soya Bean, Cat
                    <span className="more-linkallergy1">...More</span>
                  </p>
                </div>

                <div className="card-footerallergy1">
                  <span className="reports-labelallergy1">Reports in</span>
                  <span className="terms-tooltipallergy1">
                    (T&C)
                    <span className="tooltip-textallergy1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoallergy1">
                    <div className="timing-badgeallergy1">5 Hours</div>
                    <div className="vertical-lineallergy1"></div>
                    <span className="test-countallergy1">
                      Tests <span>12</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnallergy1"
                        onClick={handleViewCartallergy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnallergy1"
                        onClick={() => handleAddToCartallergy("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainallergy">
              <div className="card-containerallergy">
                <div className="title-rowallergy">
                  <div className="card-titleallergy">
                    Drugs Allergy Basic Panel Test 24 Allergens{" "}
                    <span className="dropdown-iconallergy">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceallergy">
                    ₹2799<span className="original-priceallergy">₹5700</span>
                  </div>
                </div>
                <div className="test-list-cardallergy">
                  <p className="test-namesallergy">
                    Paracetamol, Ciprofloxacin, Ampicillin, Amoxicillin,
                    Diclofenac, Ibuprofen,
                  </p>
                </div>

                <div className="card-footerallergy">
                  <span className="reports-labelallergy">Reports in</span>
                  <span className="terms-tooltipallergy">
                    (T&C)
                    <span className="tooltip-textallergy">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoallergy">
                    <div className="timing-badgeallergy">5 Hours</div>
                    <div className="vertical-lineallergy"></div>
                    <span className="test-countallergy">
                      Tests <span>24</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btnallergy"
                        onClick={handleViewCartallergy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnallergy"
                        onClick={() => handleAddToCartallergy("card15")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerallergy1">
                <div className="title-rowallergy1">
                  <div className="card-titleallergy1">
                    Spices Allergy Basic Panel Test{" "}
                    <span className="dropdown-iconallergy1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceallergy1">
                    ₹2799<span className="original-priceallergy1">₹5700</span>
                  </div>
                </div>
                <div className="test-list-cardallergy1">
                  <p className="test-namesallergy1">
                    Garlic, Fennel, Olive, Celery, Poppy (Seed), Parsley, Mint,
                    Cinnamon, Vanil
                    <span className="more-linkallergy1">...More</span>
                  </p>
                </div>

                <div className="card-footerallergy1">
                  <span className="reports-labelallergy1">Reports in</span>
                  <span className="terms-tooltipallergy1">
                    (T&C)
                    <span className="tooltip-textallergy1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoallergy1">
                    <div className="timing-badgeallergy1">5 Hours</div>
                    <div className="vertical-lineallergy1"></div>
                    <span className="test-countallergy1">
                      Tests <span>24</span>
                    </span>

                    {addedCards.card16 ? (
                      <button
                        className="view-cart-btnallergy1"
                        onClick={handleViewCartallergy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnallergy1"
                        onClick={() => handleAddToCartallergy("card16")}
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
