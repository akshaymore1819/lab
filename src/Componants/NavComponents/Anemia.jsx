import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Anemia.css";

function Anemia() {
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
  });

  const [showAllTests, setShowAllTests] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const toggleShowMoreTests = () => {
    setShowAllTests(!showAllTests);
  };

  const toggleShowMorePackages = () => {
    setShowAllPackages(!showAllPackages);
  };

  const handleAddToCartanemia = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartanemia = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="mainanemia">
        <h1>Showing results for "Anemia" test</h1>
        <div className="card-containermain1">
          <div className="card-containeranemia">
            <div className="title-rowanemia">
              <div className="card-titleanemia">
                Hemoglobin (Hb) Test{" "}
                <span className="dropdown-iconanemia">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceanemia">
                ₹110 <span className="original-priceanemia">₹220</span>
              </div>
            </div>
            <div className="test-list-cardanemia">
              <p className="test-namesanemia">
                A hemoglobin test measures hemoglobin levels and helps detect
                anemia.
              </p>
            </div>

            <div className="card-footeranemia">
              <span className="reports-labelanemia">Reports in</span>
              <span className="terms-tooltipanemia">
                (T&C)
                <span className="tooltip-textanemia">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoanemia">
                <div className="timing-badegeanemia">10 Hours</div>
                <div className="vertical-lineanemia"></div>
                <span className="test-countanemia">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnanemia"
                    onClick={handleViewCartanemia}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnanemia"
                    onClick={() => handleAddToCartanemia("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containeranemia1">
            <div className="title-rowanemia1">
              <div className="card-titleanemia1">
                Vitamin B12 Test{" "}
                <span className="dropdown-iconanemia1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceanemia1">
                ₹499<span className="original-priceanemia1">₹1075</span>
              </div>
            </div>
            <div className="test-list-cardanemia1">
              <p className="test-namesanemia1">
                The test helps determine vitamin B12 deficiency and diagnose
                certain types<span className="more-linkanemia1">...More</span>
              </p>
            </div>

            <div className="card-footeranemia1">
              <span className="reports-labelanemia1">Reports in</span>
              <span className="terms-tooltipanemia1">
                (T&C)
                <span className="tooltip-textanemia1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoanemia1">
                <div className="timing-badegeanemia1">10 Hours</div>
                <div className="vertical-lineanemia1"></div>
                <span className="test-countanemia1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnanemia1"
                    onClick={handleViewCartanemia}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnanemia1"
                    onClick={() => handleAddToCartanemia("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containeranemia">
            <div className="title-rowanemia">
              <div className="card-titleanemia">
                Ferritin Test{" "}
                <span className="dropdown-iconanemia">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceanemia">
                ₹399 <span className="original-priceanemia">₹1250</span>
              </div>
            </div>
            <div className="test-list-cardanemia">
              <p className="test-namesanemia">
                This test measures ferritin levels and diagnoses diseases
                related to high o
                <span className="more-linkanemia">...More</span>
              </p>
            </div>

            <div className="card-footeranemia">
              <span className="reports-labelanemia">Reports in</span>
              <span className="terms-tooltipanemia">
                (T&C)
                <span className="tooltip-textanemia">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoanemia">
                <div className="timing-badegeanemia">12 Hours</div>
                <div className="vertical-lineanemia"></div>
                <span className="test-countanemia">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnanemia"
                    onClick={handleViewCartanemia}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnanemia"
                    onClick={() => handleAddToCartanemia("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containeranemia1">
            <div className="title-rowanemia1">
              <div className="card-titleanemia1">
                Iron Studies Test{" "}
                <span className="dropdown-iconanemia1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceanemia1">
                ₹449 <span className="original-priceanemia1">₹1100</span>
              </div>
            </div>
            <div className="test-list-cardanemia1">
              <p className="test-namesanemia1">
                It measures iron levels and helps diagnose conditions like
                anemia or iron o
                <span className="more-linkanemia1">...More</span>
              </p>
            </div>

            <div className="card-footeranemia1">
              <span className="reports-labelanemia1">Reports in</span>
              <span className="terms-tooltipanemia1">
                (T&C)
                <span className="tooltip-textanemia1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoanemia1">
                <div className="timing-badegeanemia1">10 Hours</div>
                <div className="vertical-lineanemia1"></div>
                <span className="test-countanemia1">
                  Tests <span>4</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnanemia1"
                    onClick={handleViewCartanemia}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnanemia1"
                    onClick={() => handleAddToCartanemia("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containeranemia">
            <button
              className="show-more-btnanemia"
              onClick={toggleShowMoreTests}
            >
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermain1">
              <div className="card-containeranemia">
                <div className="title-rowanemia">
                  <div className="card-titleanemia">
                    Peripheral Blood Smear Test{" "}
                    <span className="dropdown-iconanemia">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceanemia">
                    ₹150 <span className="original-priceanemia">₹200</span>
                  </div>
                </div>
                <div className="test-list-cardanemia">
                  <p className="test-namesanemia">
                    This test examines the changes in RBCs, WBCs & Platelets and
                    diagnoses bloo
                    <span className="more-linkanemia">...More</span>
                  </p>
                </div>

                <div className="card-footeranemia">
                  <span className="reports-labelanemia">Reports in</span>
                  <span className="terms-tooltipanemia">
                    (T&C)
                    <span className="tooltip-textanemia">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoanemia">
                    <div className="timing-badegeanemia">12 Hours</div>
                    <div className="vertical-lineanemia"></div>
                    <span className="test-countanemia">
                      Tests <span>3</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnanemia"
                        onClick={handleViewCartanemia}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnanemia"
                        onClick={() => handleAddToCartanemia("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containeranemia1">
                <div className="title-rowanemia1">
                  <div className="card-titleanemia1">
                    Iron Test{" "}
                    <span className="dropdown-iconanemia1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceanemia1">
                    ₹249<span className="original-priceanemia1">₹900</span>
                  </div>
                </div>
                <div className="test-list-cardanemia1">
                  <p className="test-namesanemia1">
                    It looks for iron levels in the blood & detects conditions
                    like anemia & he
                    <span className="more-linkanemia1">...More</span>
                  </p>
                </div>

                <div className="card-footeranemia1">
                  <span className="reports-labelanemia1">Reports in</span>
                  <span className="terms-tooltipanemia1">
                    (T&C)
                    <span className="tooltip-textanemia1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoanemia1">
                    <div className="timing-badegeanemia1">12 Hours</div>
                    <div className="vertical-lineanemia1"></div>
                    <span className="test-countfull">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnanemia1"
                        onClick={handleViewCartanemia}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnanemia1"
                        onClick={() => handleAddToCartanemia("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermain1">
              <div className="card-containeranemia">
                <div className="title-rowanemia">
                  <div className="card-titleanemia">
                    Folic Acid Test{" "}
                    <span className="dropdown-iconanemia">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceanemia">
                    ₹999 <span className="original-priceanemia">₹2500</span>
                  </div>
                </div>
                <div className="test-list-cardanemia">
                  <p className="test-namesanemia">
                    This test checks for folic acid levels in the blood to
                    detect a folic acid
                    <span className="more-linkanemia">...More</span>
                  </p>
                </div>

                <div className="card-footeranemia">
                  <span className="reports-labelanemia">Reports in</span>
                  <span className="terms-tooltipanemia">
                    (T&C)
                    <span className="tooltip-textanemia">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoanemia">
                    <div className="timing-badegeanemia">36 Hours</div>
                    <div className="vertical-lineanemia"></div>
                    <span className="test-countanemia">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnanemia"
                        onClick={handleViewCartanemia}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnanemia"
                        onClick={() => handleAddToCartanemia("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containeranemia1">
                <div className="title-rowanemia1">
                  <div className="card-titleanemia1">
                    Reticulocyte Count Test{" "}
                    <span className="dropdown-iconanemia1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceanemia1">
                    ₹299 <span className="original-priceanemia1">₹700</span>
                  </div>
                </div>
                <div className="test-list-cardanemia1">
                  <p className="test-namesanemia1">
                    While measuring reticulocytes in bone marrow, the test helps
                    find specific
                    <span className="more-linkanemia1">...More</span>
                  </p>
                </div>

                <div className="card-footeranemia1">
                  <span className="reports-labelanemia1">Reports in</span>
                  <span className="terms-tooltipanemia1">
                    (T&C)
                    <span className="tooltip-textanemia1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoanemia1">
                    <div className="timing-badegeanemia1">12 Hours</div>
                    <div className="vertical-lineanemia1"></div>
                    <span className="test-countanemia1">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnanemia1"
                        onClick={handleViewCartanemia}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnanemia1"
                        onClick={() => handleAddToCartanemia("card8")}
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

      <div className="mainanemia">
        <h1>Showing results for "Anemia" package</h1>
        <div className="card-containermain1">
          <div className="card-containeranemia">
            <div className="title-rowanemia">
              <div className="card-titleanemia">
                Hemoglobin Variant Analysis Test (HPLC Test){" "}
                <span className="dropdown-iconanemia">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceanemia">
                ₹949 <span className="original-priceanemia">₹2200</span>
              </div>
            </div>
            <div className="test-list-cardanemia">
              <p className="test-namesanemia">
                This measures abnormal hemoglobin variants to diagnose or
                monitor specific<span className="more-linkanemia">...More</span>
              </p>
            </div>

            <div className="card-footeranemia">
              <span className="reports-labelanemia">Reports in</span>
              <span className="terms-tooltipanemia">
                (T&C)
                <span className="tooltip-textanemia">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoanemia">
                <div className="timing-badgeanemia">48 Hours</div>
                <div className="vertical-lineanemia"></div>
                <span className="test-countanemia">
                  Tests <span>15</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnanemia"
                    onClick={handleViewCartanemia}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnanemia"
                    onClick={() => handleAddToCartanemia("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containeranemia1">
            <div className="title-rowanemia1">
              <div className="card-titleanemia1">
                Iron Studies with Ferritin Test{" "}
                <span className="dropdown-iconanemia1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceanemia1">
                ₹699 <span className="original-priceanemia1">₹920</span>
              </div>
            </div>
            <div className="test-list-cardanemia1">
              <p className="test-namesanemia1">
                It measures iron levels, checks storage capacity, & anemia, &
                aids diagnosi<span className="more-linkanemia1">...More</span>
              </p>
            </div>

            <div className="card-footeranemia1">
              <span className="reports-labelanemia1">Reports in</span>
              <span className="terms-tooltipanemia1">
                (T&C)
                <span className="tooltip-textanemia1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoanemia1">
                <div className="timing-badgeanemia1">15 Hours</div>
                <div className="vertical-lineanemia1"></div>
                <span className="test-countfull">
                  Tests <span>5</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnanemia1"
                    onClick={handleViewCartanemia}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnanemia1"
                    onClick={() => handleAddToCartanemia("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containeranemia">
            <div className="title-rowanemia">
              <div className="card-titleanemia">
                Thalassemia Profile{" "}
                <span className="dropdown-iconanemia">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceanemia">
                ₹1350 <span className="original-priceanemia">₹3500</span>
              </div>
            </div>
            <div className="test-list-cardanemia">
              <p className="test-namesanemia">
                The test diagnoses alpha thalassemia, a genetic blood disorder
                affecting he<span className="more-linkanemia">...More</span>
              </p>
            </div>

            <div className="card-footeranemia">
              <span className="reports-labelanemia">Reports in</span>
              <span className="terms-tooltipanemia">
                (T&C)
                <span className="tooltip-textanemia">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoanemia">
                <div className="timing-badegeanemia">48 Hours</div>
                <div className="vertical-lineanemia"></div>
                <span className="test-countanemia">
                  Tests <span>45</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnanemia"
                    onClick={handleViewCartanemia}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnanemia"
                    onClick={() => handleAddToCartanemia("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containeranemia1">
            <div className="title-rowanemia1">
              <div className="card-titleanemia1">
                Anemia Profile- Essential{" "}
                <span className="dropdown-iconanemia1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceanemia1">₹999</div>
            </div>
            <div className="test-list-cardanemia1">
              <p className="test-namesanemia1">
                Anemia Profile Test is a group of blood tests that helps
                diagnose anemia du
                <span className="more-linkanemia1">...More</span>
              </p>
            </div>

            <div className="card-footeranemia1">
              <span className="reports-labelanemia1">Reports in</span>
              <span className="terms-tooltipanemia1">
                (T&C)
                <span className="tooltip-textanemia1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoanemia1">
                <div className="timing-badegeanemia1">15 Hours</div>
                <div className="vertical-lineanemia1"></div>
                <span className="test-countanemia1">
                  Tests <span>37</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnanemia1"
                    onClick={handleViewCartanemia}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnanemia1"
                    onClick={() => handleAddToCartanemia("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containeranemia">
            <button
              className="show-more-btnanemia"
              onClick={toggleShowMorePackages}
            >
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermain1">
              <div className="card-containeranemia">
                <div className="title-rowanemia">
                  <div className="card-titleanemia">
                    Anemia Profile- Advance Package{" "}
                    <span className="dropdown-iconanemia">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceanemia">₹2299</div>
                </div>
                <div className="test-list-cardanemia">
                  <p className="test-namesanemia">
                    CBC, ESR, Peripheral Smear, Glucose Fasting, HbA1c, Lipid
                    Profile, LFT, KFT
                    <span className="more-linkanemia">...More</span>
                  </p>
                </div>

                <div className="card-footeranemia">
                  <span className="reports-labelanemia">Reports in</span>
                  <span className="terms-tooltipanemia">
                    (T&C)
                    <span className="tooltip-textanemia">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoanemia">
                    <div className="timing-badegeanemia">48 Hours</div>
                    <div className="vertical-lineanemia"></div>
                    <span className="test-countanemia">
                      Tests <span>77</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnanemia"
                        onClick={handleViewCartanemia}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnanemia"
                        onClick={() => handleAddToCartanemia("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containeranemia1">
                <div className="title-rowanemia1">
                  <div className="card-titleanemia1">
                    Anemia Profile - Comprehensive{" "}
                    <span className="dropdown-iconanemia1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceanemia1">
                    ₹2799 <span className="original-priceanemia1">₹6000</span>
                  </div>
                </div>
                <div className="test-list-cardanemia1">
                  <p className="test-namesanemia1">
                    The Comprehensive Anemia Profile is a comprehensive blood
                    test that provide{" "}
                    <span className="more-linkanemia1">...More</span>
                  </p>
                </div>

                <div className="card-footeranemia1">
                  <span className="reports-labelanemia1">Reports in</span>
                  <span className="terms-tooltipanemia1">
                    (T&C)
                    <span className="tooltip-textanemia1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoanemia1">
                    <div className="timing-badegeanemia1">48 Hours</div>
                    <div className="vertical-lineanemia1"></div>
                    <span className="test-countfull">
                      Tests <span>76</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnanemia1"
                        onClick={handleViewCartanemia}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnanemia1"
                        onClick={() => handleAddToCartanemia("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermain1">
              <div className="card-containeranemia">
                <div className="title-rowanemia">
                  <div className="card-titleanemia">
                    Premarital Screening Package - Male{" "}
                    <span className="dropdown-iconanemia">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceanemia">
                    ₹1699<span className="original-priceanemia">₹3150</span>
                  </div>
                </div>
                <div className="test-list-cardanemia">
                  <p className="test-namesanemia">
                    CBC, ESR, Blood Group, HB HPLC, BSR, LFT, KFT, Viral Markers
                    (Rapid), VDRL,
                    <span className="more-linkanemia">...More</span>
                  </p>
                </div>

                <div className="card-footeranemia">
                  <span className="reports-labelanemia">Reports in</span>
                  <span className="terms-tooltipanemia">
                    (T&C)
                    <span className="tooltip-textanemia">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoanemia">
                    <div className="timing-badegeanemia">48 Hours</div>
                    <div className="vertical-lineanemia"></div>
                    <span className="test-countanemia">
                      Tests <span>88</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btnanemia"
                        onClick={handleViewCartanemia}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnanemia"
                        onClick={() => handleAddToCartanemia("card15")}
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

export default Anemia;
