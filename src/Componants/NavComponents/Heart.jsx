import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Heart.css";

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

  const handleAddToCartheart = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartheart = () => {
    window.location.href = "/cart";
  };


  return (
    <>
      <div className="mainheart">
        <h1>Showing results for "Heart" test</h1>
        <div className="card-containermain1">
          <div className="card-containerheart">
            <div className="title-rowheart">
              <div className="card-titleheart">
                Lipid Profile Test{" "}
                <span className="dropdown-iconheart">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceheart">
                ₹399 <span className="original-priceheart">₹960</span>
              </div>
            </div>
            <div className="test-list-cardheart">
              <p className="test-namesheart">
                It measures cholesterol & triglycerides in the blood & screens
                your risk fo<span className="more-linkheart">...More</span>
              </p>
            </div>

            <div className="card-footerheart">
              <span className="reports-labelheart">Reports in</span>
              <span className="terms-tooltipheart">
                (T&C)
                <span className="tooltip-textheart">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoheart">
                <div className="timing-badgeheart">10 Hours</div>
                <div className="vertical-lineheart"></div>
                <span className="test-countheart">
                  Tests <span>9</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnheart"
                    onClick={handleViewCartheart}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnheart"
                    onClick={() => handleAddToCartheart("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerheart1">
            <div className="title-rowheart1">
              <div className="card-titleheart1">
                Homocysteine Test{" "}
                <span className="dropdown-iconheart1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceheart1">
                ₹899 <span className="original-priceheart1">₹3000</span>
              </div>
            </div>
            <div className="test-list-cardheart1">
              <p className="test-namesheart1">
                The test measures homocysteine levels & diagnoses vitamin B6,
                B9, or B12 de<span className="more-linkheart1">...More</span>
              </p>
            </div>

            <div className="card-footerheart1">
              <span className="reports-labelheart1">Reports in</span>
              <span className="terms-tooltipheart1">
                (T&C)
                <span className="tooltip-textheart1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoheart1">
                <div className="timing-badgeheart1">36 Hours</div>
                <div className="vertical-lineheart1"></div>
                <span className="test-countheart1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnheart1"
                    onClick={handleViewCartheart}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnheart1"
                    onClick={() => handleAddToCartheart("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containerheart">
            <div className="title-rowheart">
              <div className="card-titleheart">
                High-Sensitivity C-Reactive Protein (hsCRP ) Test{" "}
                <span className="dropdown-iconheart">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceheart">
                ₹699 <span className="original-priceheart">₹1520</span>
              </div>
            </div>
            <div className="test-list-cardheart">
              <p className="test-namesheart">
                The test is a marker of inflammation that diagnose one's chances
                of coronar<span className="more-linkheart">...More</span>
              </p>
            </div>

            <div className="card-footerheart">
              <span className="reports-labelheart">Reports in</span>
              <span className="terms-tooltipheart">
                (T&C)
                <span className="tooltip-textheart">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoheart">
                <div className="timing-badgeheart">10 Hours</div>
                <div className="vertical-lineheart"></div>
                <span className="test-countheart">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnheart"
                    onClick={handleViewCartheart}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnheart"
                    onClick={() => handleAddToCartheart("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerheart1">
            <div className="title-rowheart1">
              <div className="card-titleheart1">
                N-Terminal Pro B Type Natriuretic Peptide Test (NT-Pro BNP){" "}
                <span className="dropdown-iconheart1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceheart1">
                ₹3000 <span className="original-priceheart1">₹4999</span>
              </div>
            </div>
            <div className="test-list-cardheart1">
              <p className="test-namesheart1">
                The test measures BNP or NT-proBNP levels in the blood & helps
                diagnose hea<span className="more-linkheart1">...More</span>
              </p>
            </div>

            <div className="card-footerheart1">
              <span className="reports-labelheart1">Reports in</span>
              <span className="terms-tooltipheart1">
                (T&C)
                <span className="tooltip-textheart1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoheart1">
                <div className="timing-badgeheart1">36 Hours</div>
                <div className="vertical-lineheart1"></div>
                <span className="test-countheart1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnheart1"
                    onClick={handleViewCartheart}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnheart1"
                    onClick={() => handleAddToCartheart("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containerheart">
            <button className="show-more-btnheart" onClick={toggleShowMoreTests}>
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermain1">
              <div className="card-containerheart">
                <div className="title-rowheart">
                  <div className="card-titleheart">
                    Lipid Profile Direct{" "}
                    <span className="dropdown-iconheart">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceheart">
                    ₹450 <span className="original-priceheart">₹1920</span>
                  </div>
                </div>
                <div className="test-list-cardheart">
                  <p className="test-namesheart">
                    It measures lipid levels and is used to monitor & screen
                    your risk for hear
                    <span className="more-linkheart">...More</span>
                  </p>
                </div>

                <div className="card-footerheart">
                  <span className="reports-labelheart">Reports in</span>
                  <span className="terms-tooltipheart">
                    (T&C)
                    <span className="tooltip-textheart">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoheart">
                    <div className="timing-badgeheart">12 Hours</div>
                    <div className="vertical-lineheart"></div>
                    <span className="test-countheart">
                      Tests <span>8</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnheart"
                        onClick={handleViewCartheart}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnheart"
                        onClick={() => handleAddToCartheart("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerheart1">
                <div className="title-rowheart1">
                  <div className="card-titleheart1">
                    ECG (Electrocardiogram) Test at Home{" "}
                    <span className="dropdown-iconheart1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceheart1">
                    ₹799 <span className="original-priceheart1">₹1000</span>
                  </div>
                </div>
                <div className="test-list-cardheart1">
                  <p className="test-namesheart1">
                    It monitors your heart's electrical activity & rhythm to
                    diagnose heart dis
                    <span className="more-linkheart1">...More</span>
                  </p>
                </div>

                <div className="card-footerheart1">
                  <span className="reports-labelheart1">Reports in</span>
                  <span className="terms-tooltipheart1">
                    (T&C)
                    <span className="tooltip-textheart1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoheart1">
                    <div className="timing-badgeheart1">12 Hours</div>
                    <div className="vertical-lineheart1"></div>
                    <span className="test-countfull">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnheart1"
                        onClick={handleViewCartheart}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnheart1"
                        onClick={() => handleAddToCartheart("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermain1">
              <div className="card-containerheart">
                <div className="title-rowheart">
                  <div className="card-titleheart">
                    High Sensitivity Troponin I Test{" "}
                    <span className="dropdown-iconheart">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceheart">
                    ₹1499 <span className="original-priceheart">₹3500</span>
                  </div>
                </div>
                <div className="test-list-cardheart">
                  <p className="test-namesheart">
                    While measuring troponin levels, the test diagnoses a heart
                    attack & monito
                    <span className="more-linkheart">...More</span>
                  </p>
                </div>

                <div className="card-footerheart">
                  <span className="reports-labelheart">Reports in</span>
                  <span className="terms-tooltipheart">
                    (T&C)
                    <span className="tooltip-textheart">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoheart">
                    <div className="timing-badgeheart">36 Hours</div>
                    <div className="vertical-lineheart"></div>
                    <span className="test-countheart">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnheart"
                        onClick={handleViewCartheart}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnheart"
                        onClick={() => handleAddToCartheart("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerheart1">
                <div className="title-rowheart1">
                  <div className="card-titleheart1">
                    Adenosine Deaminase (ADA) Test Fluid{" "}
                    <span className="dropdown-iconheart1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceheart1">
                    ₹750 <span className="original-priceheart1">₹1875</span>
                  </div>
                </div>
                <div className="test-list-cardheart1">
                  <p className="test-namesheart1">
                    The Adenosine Deaminase (ADA) test is primarily used to
                    diagnose tuberculos
                    <span className="more-linkheart1">...More</span>
                  </p>
                </div>

                <div className="card-footerheart1">
                  <span className="reports-labelheart1">Reports in</span>
                  <span className="terms-tooltipheart1">
                    (T&C)
                    <span className="tooltip-textheart1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoheart1">
                    <div className="timing-badgeheart1">24 Hours</div>
                    <div className="vertical-lineheart1"></div>
                    <span className="test-countheart1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnheart1"
                        onClick={handleViewCartheart}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnheart1"
                        onClick={() => handleAddToCartheart("card8")}
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



      <div className="mainheart">
        <h1>Showing results for "Heart" package</h1>
        <div className="card-containermain1">
          <div className="card-containerheart">
            <div className="title-rowheart">
              <div className="card-titleheart">
              Cardiac Profile - Essential {" "}
                <span className="dropdown-iconheart">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceheart">
                ₹1999 <span className="original-priceheart">₹3759</span>
              </div>
            </div>
            <div className="test-list-cardheart">
              <p className="test-namesheart">
              To check the heart's health by testing for Lipoprotein, Apolipoprotein (Apo<span className="more-linkheart">...More</span>
              </p>
            </div>

            <div className="card-footerheart">
              <span className="reports-labelheart">Reports in</span>
              <span className="terms-tooltipheart">
                (T&C)
                <span className="tooltip-textheart">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoheart">
                <div className="timing-badgeheart">48 Hours</div>
                <div className="vertical-lineheart"></div>
                <span className="test-countheart">
                  Tests <span>15</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnheart"
                    onClick={handleViewCartheart}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnheart"
                    onClick={() => handleAddToCartheart("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerheart1">
            <div className="title-rowheart1">
              <div className="card-titleheart1">
              Cardiac Profile - Advance {" "}
                <span className="dropdown-iconheart1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceheart1">
                ₹2599 <span className="original-priceheart1">₹6455</span>
              </div>
            </div>
            <div className="test-list-cardheart1">
              <p className="test-namesheart1">
              To check cardiac health by diagnosing the concentration of fats, enzymes, a<span className="more-linkheart1">...More</span>
              </p>
            </div>

            <div className="card-footerheart1">
              <span className="reports-labelheart1">Reports in</span>
              <span className="terms-tooltipheart1">
                (T&C)
                <span className="tooltip-textheart1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoheart1">
                <div className="timing-badgeheart1">48 Hours</div>
                <div className="vertical-lineheart1"></div>
                <span className="test-countfull">
                  Tests <span>75</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnheart1"
                    onClick={handleViewCartheart}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnheart1"
                    onClick={() => handleAddToCartheart("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containerheart">
            <div className="title-rowheart">
              <div className="card-titleheart">
              Cardiac Profile - Comprehensive {" "}
                <span className="dropdown-iconheart">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceheart">
                ₹2999 <span className="original-priceheart">₹7533</span>
              </div>
            </div>
            <div className="test-list-cardheart">
              <p className="test-namesheart">
              The package involves varied tests to check cardiac functioning & assess car<span className="more-linkheart">...More</span>
              </p>
            </div>

            <div className="card-footerheart">
              <span className="reports-labelheart">Reports in</span>
              <span className="terms-tooltipheart">
                (T&C)
                <span className="tooltip-textheart">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoheart">
                <div className="timing-badgeheart">48 Hours</div>
                <div className="vertical-lineheart"></div>
                <span className="test-countheart">
                  Tests <span>101</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnheart"
                    onClick={handleViewCartheart}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnheart"
                    onClick={() => handleAddToCartheart("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerheart1">
            <div className="title-rowheart1">
              <div className="card-titleheart1">
              Winter Special offer with Free Cardiac Screening{" "}
                <span className="dropdown-iconheart1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceheart1">
                ₹1999 <span className="original-priceheart1">₹7320</span>
              </div>
            </div>
            <div className="test-list-cardheart1">
              <p className="test-namesheart1">
              This package offers free cardiac screening with parameters including CBC, E<span className="more-linkheart1">...More</span>
              </p>
            </div>

            <div className="card-footerheart1">
              <span className="reports-labelheart1">Reports in</span>
              <span className="terms-tooltipheart1">
                (T&C)
                <span className="tooltip-textheart1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoheart1">
                <div className="timing-badgeheart1">15 Hours</div>
                <div className="vertical-lineheart1"></div>
                <span className="test-countheart1">
                  Tests <span>92</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnheart1"
                    onClick={handleViewCartheart}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnheart1"
                    onClick={() => handleAddToCartheart("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containerheart">
            <button className="show-more-btnheart" onClick={toggleShowMorePackages}>
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermain1">
              <div className="card-containerheart">
                <div className="title-rowheart">
                  <div className="card-titleheart">
                  Annual Health Checkup- Advance Plus with Free HsCRP{" "}
                    <span className="dropdown-iconheart">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceheart">
                    ₹2199 <span className="original-priceheart">₹10280</span>
                  </div>
                </div>
                <div className="test-list-cardheart">
                  <p className="test-namesheart">
                  The package covers 98 parameters of tests including CBC, ESR, BSF, HbA1c, L
                    <span className="more-linkheart">...More</span>
                  </p>
                </div>

                <div className="card-footerheart">
                  <span className="reports-labelheart">Reports in</span>
                  <span className="terms-tooltipheart">
                    (T&C)
                    <span className="tooltip-textheart">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoheart">
                    <div className="timing-badgeheart">15 Hours</div>
                    <div className="vertical-lineheart"></div>
                    <span className="test-countheart">
                      Tests <span>98</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnheart"
                        onClick={handleViewCartheart}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnheart"
                        onClick={() => handleAddToCartheart("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerheart1">
                <div className="title-rowheart1">
                  <div className="card-titleheart1">
                  Cardiac Risk Markers- Advanced {" "}
                    <span className="dropdown-iconheart1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceheart1">
                    ₹1799 <span className="original-priceheart1">₹3509</span>
                  </div>
                </div>
                <div className="test-list-cardheart1">
                  <p className="test-namesheart1">
                  This evaluates your risk of coronary heart disease, like heart failure, myo
                    <span className="more-linkheart1">...More</span>
                  </p>
                </div>

                <div className="card-footerheart1">
                  <span className="reports-labelheart1">Reports in</span>
                  <span className="terms-tooltipheart1">
                    (T&C)
                    <span className="tooltip-textheart1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoheart1">
                    <div className="timing-badgeheart1">48 Hours</div>
                    <div className="vertical-lineheart1"></div>
                    <span className="test-countfull">
                      Tests <span>6</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnheart1"
                        onClick={handleViewCartheart}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnheart1"
                        onClick={() => handleAddToCartheart("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermain1">
              <div className="card-containerheart">
                <div className="title-rowheart">
                  <div className="card-titleheart">
                  Cardiac Risk Markers- Essential {" "}
                    <span className="dropdown-iconheart">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceheart">
                    ₹1199 <span className="original-priceheart">₹2459</span>
                  </div>
                </div>
                <div className="test-list-cardheart">
                  <p className="test-namesheart">
                  It monitors heart functioning & helps diagnose cardiac abnormalities (if an
                    <span className="more-linkheart">...More</span>
                  </p>
                </div>

                <div className="card-footerheart">
                  <span className="reports-labelheart">Reports in</span>
                  <span className="terms-tooltipheart">
                    (T&C)
                    <span className="tooltip-textheart">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoheart">
                    <div className="timing-badgeheart">48 Hours</div>
                    <div className="vertical-lineheart"></div>
                    <span className="test-countheart">
                      Tests <span>5</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btnheart"
                        onClick={handleViewCartheart}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnheart"
                        onClick={() => handleAddToCartheart("card15")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerheart1">
                <div className="title-rowheart1">
                  <div className="card-titleheart1">
                  Advance Plus Full Body Checkup with Free HsCRP {" "}
                    <span className="dropdown-iconheart1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceheart1">
                    ₹2199 <span className="original-priceheart1">₹8260</span>
                  </div>
                </div>
                <div className="test-list-cardheart1">
                  <p className="test-namesheart1">
                  CBC, ESR, BSF, HbA1c, Lipid Profile, LFT, KFT, Iron Studies, Rheumatoid Fac
                    <span className="more-linkheart1">...More</span>
                  </p>
                </div>

                <div className="card-footerheart1">
                  <span className="reports-labelheart1">Reports in</span>
                  <span className="terms-tooltipheart1">
                    (T&C)
                    <span className="tooltip-textheart1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoheart1">
                    <div className="timing-badgeheart1">15 Hours</div>
                    <div className="vertical-lineheart1"></div>
                    <span className="test-countheart1">
                      Tests <span>98</span>
                    </span>

                    {addedCards.card16 ? (
                      <button
                        className="view-cart-btnheart1"
                        onClick={handleViewCartheart}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnheart1"
                        onClick={() => handleAddToCartheart("card16")}
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
