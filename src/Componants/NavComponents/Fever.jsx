import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Fever.css";

function Feverpage() {
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

  const handleAddToCartfever = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartfever = () => {
    window.location.href = "/cart";
  };


  return (
    <>
      <div className="mainfever">
        <h1>Showing results for "Fever" test</h1>
        <div className="card-containermainfever">
          <div className="card-containerfever">
            <div className="title-rowfever">
              <div className="card-titlefever">
              Dengue NS1 Antigen Test by ELISA {" "}
                <span className="dropdown-iconfever">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefever">
                ₹588 <span className="original-pricefever">₹600</span>
              </div>
            </div>
            <div className="test-list-cardfever">
              <p className="test-namesfever">
              This helps find the presence of dengue NS1 antigen in the blood to diagnose<span className="more-linkfever">...More</span>
              </p>
            </div>

            <div className="card-footerfever">
              <span className="reports-labelfever">Reports in</span>
              <span className="terms-tooltipfever">
                (T&C)
                <span className="tooltip-textfever">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofever">
                <div className="timing-badgefever">15 Hours</div>
                <div className="vertical-linefever"></div>
                <span className="test-countfever">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnfever"
                    onClick={handleViewCartfever}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfever"
                    onClick={() => handleAddToCartfever("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerfever1">
            <div className="title-rowfever1">
              <div className="card-titlefever1">
              Complete Blood Count (CBC) Test {" "}
                <span className="dropdown-iconfever1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefever1">
                ₹299 <span className="original-pricefever1">₹450</span>
              </div>
            </div>
            <div className="test-list-cardfever1">
              <p className="test-namesfever1">
              This test measures blood components to diagnose various disorders.<span className="more-linkfever1">...More</span>
              </p>
            </div>

            <div className="card-footerfever1">
              <span className="reports-labelfever1">Reports in</span>
              <span className="terms-tooltipfever1">
                (T&C)
                <span className="tooltip-textfever1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofever1">
                <div className="timing-badgefever1">10 Hours</div>
                <div className="vertical-linefever1"></div>
                <span className="test-countfever1">
                  Tests <span>26</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnfever1"
                    onClick={handleViewCartfever}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfever1"
                    onClick={() => handleAddToCartfever("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainfever">
          <div className="card-containerfever">
            <div className="title-rowfever">
              <div className="card-titlefever">
              Typhoid Test IGM Test{" "}
                <span className="dropdown-iconfever">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefever">
                ₹400 <span className="original-pricefever">₹1000</span>
              </div>
            </div>
            <div className="test-list-cardfever">
              <p className="test-namesfever">
              The test measures IgM antibodies against Salmonella typhi to diagnose thyro<span className="more-linkfever">...More</span>
              </p>
            </div>

            <div className="card-footerfever">
              <span className="reports-labelfever">Reports in</span>
              <span className="terms-tooltipfever">
                (T&C)
                <span className="tooltip-textfever">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofever">
                <div className="timing-badgefever">10 Hours</div>
                <div className="vertical-linefever"></div>
                <span className="test-countfever">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnfever"
                    onClick={handleViewCartfever}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfever"
                    onClick={() => handleAddToCartfever("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerfever1">
            <div className="title-rowfever1">
              <div className="card-titlefever1">
              Malaria Antigen Detection Test (Rapid) {" "}
                <span className="dropdown-iconfever1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefever1">
                ₹580 <span className="original-pricefever1">₹650</span>
              </div>
            </div>
            <div className="test-list-cardfever1">
              <p className="test-namesfever1">
              This test identifies specific malaria antigens in blood to diagnose malaria<span className="more-linkfever1">...More</span>
              </p>
            </div>

            <div className="card-footerfever1">
              <span className="reports-labelfever1">Reports in</span>
              <span className="terms-tooltipfever1">
                (T&C)
                <span className="tooltip-textfever1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofever1">
                <div className="timing-badgefever1">10 Hours</div>
                <div className="vertical-linefever1"></div>
                <span className="test-countfever1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnfever1"
                    onClick={handleViewCartfever}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfever1"
                    onClick={() => handleAddToCartfever("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containerfever">
            <button className="show-more-btnfever" onClick={toggleShowMoreTests}>
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermainfever">
              <div className="card-containerfever">
                <div className="title-rowfever">
                  <div className="card-titlefever">
                  WIDAL Test By Slide Agglutination {" "}
                    <span className="dropdown-iconfever">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefever">
                    ₹130 <span className="original-pricefever">₹200</span>
                  </div>
                </div>
                <div className="test-list-cardfever">
                  <p className="test-namesfever">
                  Widal test is used to diagnose Typhoid and Paratyphoid fevers. A 4 fold ris
                    <span className="more-linkfever">...More</span>
                  </p>
                </div>

                <div className="card-footerfever">
                  <span className="reports-labelfever">Reports in</span>
                  <span className="terms-tooltipfever">
                    (T&C)
                    <span className="tooltip-textfever">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofever">
                    <div className="timing-badgefever">10 Hours</div>
                    <div className="vertical-linefever"></div>
                    <span className="test-countfever">
                      Tests <span>4</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnfever"
                        onClick={handleViewCartfever}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfever"
                        onClick={() => handleAddToCartfever("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerfever1">
                <div className="title-rowfever1">
                  <div className="card-titlefever1">
                  Malaria Parasite Test (MP) Smear {" "}
                    <span className="dropdown-iconfever1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefever1">
                    ₹120 <span className="original-pricefever1">₹250</span>
                  </div>
                </div>
                <div className="test-list-cardfever1">
                  <p className="test-namesfever1">
                  This test looks for malarial parasites in the blood to confirm if you have
                    <span className="more-linkfever1">...More</span>
                  </p>
                </div>

                <div className="card-footerfever1">
                  <span className="reports-labelfever1">Reports in</span>
                  <span className="terms-tooltipfever1">
                    (T&C)
                    <span className="tooltip-textfever1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofever1">
                    <div className="timing-badgefever1">10 Hours</div>
                    <div className="vertical-linefever1"></div>
                    <span className="test-countfever1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnfever1"
                        onClick={handleViewCartfever}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfever1"
                        onClick={() => handleAddToCartfever("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainfever">
              <div className="card-containerfever">
                <div className="title-rowfever">
                  <div className="card-titlefever">
                  CBC with PS Test  {" "}
                    <span className="dropdown-iconfever">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefever">
                    ₹299 <span className="original-pricefever">₹940</span>
                  </div>
                </div>
                <div className="test-list-cardfever">
                  <p className="test-namesfever">
                  This test helps evaluate RBCs, WBCs & Platelets to detect abnormalities and
                    <span className="more-linkfever">...More</span>
                  </p>
                </div>

                <div className="card-footerfever">
                  <span className="reports-labelfever">Reports in</span>
                  <span className="terms-tooltipfever">
                    (T&C)
                    <span className="tooltip-textfever">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofever">
                    <div className="timing-badgefever">12 Hours</div>
                    <div className="vertical-linefever"></div>
                    <span className="test-countfever">
                      Tests <span>29</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnfever"
                        onClick={handleViewCartfever}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfever"
                        onClick={() => handleAddToCartfever("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerfever1">
                <div className="title-rowfever1">
                  <div className="card-titlefever1">
                  Typhoid Test IGG & IGM {" "}
                    <span className="dropdown-iconfever1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefever1">
                    ₹450 <span className="original-pricefever1">₹1125</span>
                  </div>
                </div>
                <div className="test-list-cardfever1">
                  <p className="test-namesfever1">
                  It helps identify IgG & IgM antibodies against Salmonella typhi that causes
                    <span className="more-linkfever1">...More</span>
                  </p>
                </div>

                <div className="card-footerfever1">
                  <span className="reports-labelfever1">Reports in</span>
                  <span className="terms-tooltipfever1">
                    (T&C)
                    <span className="tooltip-textfever1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofever1">
                    <div className="timing-badgefever1">12 Hours</div>
                    <div className="vertical-linefever1"></div>
                    <span className="test-countfever1">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnfever1"
                        onClick={handleViewCartfever}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfever1"
                        onClick={() => handleAddToCartfever("card8")}
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



      <div className="mainfever">
        <h1>Showing results for "Fever" package</h1>
        <div className="card-containermainfever">
          <div className="card-containerfever">
            <div className="title-rowfever">
              <div className="card-titlefever">
              Fever Package Advance Plus  {" "}
                <span className="dropdown-iconfever">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefever">
                ₹1599 <span className="original-pricefever">₹3600</span>
              </div>
            </div>
            <div className="test-list-cardfever">
              <p className="test-namesfever">
              This package consists of 65 tests to thoroughly analyze health and confirm<span className="more-linkfever">...More</span>
              </p>
            </div>

            <div className="card-footerfever">
              <span className="reports-labelfever">Reports in</span>
              <span className="terms-tooltipfever">
                (T&C)
                <span className="tooltip-textfever">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofever">
                <div className="timing-badgefever">15 Hours</div>
                <div className="vertical-linefever"></div>
                <span className="test-countfever">
                  Tests <span>65</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnfever"
                    onClick={handleViewCartfever}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfever"
                    onClick={() => handleAddToCartfever("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerfever1">
            <div className="title-rowfever1">
              <div className="card-titlefever1">
              Fever Package - Comprehensive (Includes Dengue, Chikungunya, Malaria, Typhoid Tests) {" "}
                <span className="dropdown-iconfever1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefever1">
                ₹2499 <span className="original-pricefever1">₹4000</span>
              </div>
            </div>
            <div className="test-list-cardfever1">
              <p className="test-namesfever1">
              It includes dengue, malaria, typhoid, and chikungunya tests, which help det<span className="more-linkfever1">...More</span>
              </p>
            </div>

            <div className="card-footerfever1">
              <span className="reports-labelfever1">Reports in</span>
              <span className="terms-tooltipfever1">
                (T&C)
                <span className="tooltip-textfever1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofever1">
                <div className="timing-badgefever1">15 Hours</div>
                <div className="vertical-linefever1"></div>
                <span className="test-countfever1">
                  Tests <span>80</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnfever1"
                    onClick={handleViewCartfever}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfever1"
                    onClick={() => handleAddToCartfever("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainfever">
          <div className="card-containerfever">
            <div className="title-rowfever">
              <div className="card-titlefever">
              Fever Package - Advance {" "}
                <span className="dropdown-iconfever">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefever">
                ₹1199 <span className="original-pricefever">₹2600</span>
              </div>
            </div>
            <div className="test-list-cardfever">
              <p className="test-namesfever">
              Fever packages are a collection of diagnostic tests designed to help identi<span className="more-linkfever">...More</span>
              </p>
            </div>

            <div className="card-footerfever">
              <span className="reports-labelfever">Reports in</span>
              <span className="terms-tooltipfever">
                (T&C)
                <span className="tooltip-textfever">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofever">
                <div className="timing-badgefever">15 Hours</div>
                <div className="vertical-linefever"></div>
                <span className="test-countfever">
                  Tests <span>65</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnfever"
                    onClick={handleViewCartfever}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfever"
                    onClick={() => handleAddToCartfever("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerfever1">
            <div className="title-rowfever1">
              <div className="card-titlefever1">
              Fever Package - Essential {" "}
                <span className="dropdown-iconfever1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefever1">
                ₹799 <span className="original-pricefever1">₹1500</span>
              </div>
            </div>
            <div className="test-list-cardfever1">
              <p className="test-namesfever1">
              CBC assesses overall blood health, ESR measures inflammation, MP Smear and<span className="more-linkfever1">...More</span>
              </p>
            </div>

            <div className="card-footerfever1">
              <span className="reports-labelfever1">Reports in</span>
              <span className="terms-tooltipfever1">
                (T&C)
                <span className="tooltip-textfever1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofever1">
                <div className="timing-badgefever1">15 Hours</div>
                <div className="vertical-linefever1"></div>
                <span className="test-countfever1">
                  Tests <span>59</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnfever1"
                    onClick={handleViewCartfever}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfever1"
                    onClick={() => handleAddToCartfever("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containerfever">
            <button className="show-more-btnfever" onClick={toggleShowMorePackages}>
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermainfever">
              <div className="card-containerfever">
                <div className="title-rowfever">
                  <div className="card-titlefever">
                  Dengue Fever Panel - Advance{" "}
                    <span className="dropdown-iconfever">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefever">
                    ₹1699 <span className="original-pricefever">₹3450</span>
                  </div>
                </div>
                <div className="test-list-cardfever">
                  <p className="test-namesfever">
                  It is an advanced testing for diagnosing dengue fever. It includes the fol
                    <span className="more-linkfever">...More</span>
                  </p>
                </div>

                <div className="card-footerfever">
                  <span className="reports-labelfever">Reports in</span>
                  <span className="terms-tooltipfever">
                    (T&C)
                    <span className="tooltip-textfever">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofever">
                    <div className="timing-badgefever">15 Hours</div>
                    <div className="vertical-linefever"></div>
                    <span className="test-countfever">
                      Tests <span>46</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnfever"
                        onClick={handleViewCartfever}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfever"
                        onClick={() => handleAddToCartfever("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerfever1">
                <div className="title-rowfever1">
                  <div className="card-titlefever1">
                  Dengue Fever Panel  {" "}
                    <span className="dropdown-iconfever1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefever1">
                    ₹1299 <span className="original-pricefever1">₹2350</span>
                  </div>
                </div>
                <div className="test-list-cardfever1">
                  <p className="test-namesfever1">
                  Dengue Fever Panel, including CBC, ESR, Dengue NS1 EIA, Dengue IgG EIA, and
                    <span className="more-linkfever1">...More</span>
                  </p>
                </div>

                <div className="card-footerfever1">
                  <span className="reports-labelfever1">Reports in</span>
                  <span className="terms-tooltipfever1">
                    (T&C)
                    <span className="tooltip-textfever1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofever1">
                    <div className="timing-badgefever1">15 Hours</div>
                    <div className="vertical-linefever1"></div>
                    <span className="test-countfever1">
                      Tests <span>30</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnfever1"
                        onClick={handleViewCartfever}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfever1"
                        onClick={() => handleAddToCartfever("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainfever">
              <div className="card-containerfever">
                <div className="title-rowfever">
                  <div className="card-titlefever">
                  Dengue Fever Panel - Comprehensive {" "}
                    <span className="dropdown-iconfever">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefever">
                    ₹1999 <span className="original-pricefever">₹4250</span>
                  </div>
                </div>
                <div className="test-list-cardfever">
                  <p className="test-namesfever">
                  Comprehensive Dengue Fever Panel provides a detailed assessment of the body
                    <span className="more-linkfever">...More</span>
                  </p>
                </div>

                <div className="card-footerfever">
                  <span className="reports-labelfever">Reports in</span>
                  <span className="terms-tooltipfever">
                    (T&C)
                    <span className="tooltip-textfever">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofever">
                    <div className="timing-badgefever">15 Hours</div>
                    <div className="vertical-linefever"></div>
                    <span className="test-countfever">
                      Tests <span>75</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btnfever"
                        onClick={handleViewCartfever}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfever"
                        onClick={() => handleAddToCartfever("card15")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerfever1">
                <div className="title-rowfever1">
                  <div className="card-titlefever1">
                  Hemogram (CBC+ESR) {" "}
                    <span className="dropdown-iconfever1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefever1">
                    ₹399 <span className="original-pricefever1">₹840</span>
                  </div>
                </div>
                <div className="test-list-cardfever1">
                  <p className="test-namesfever1">
                  CBC measures RBCs, WBCs, & platelets, & ESR Test identifies diseases relate
                    <span className="more-linkfever1">...More</span>
                  </p>
                </div>

                <div className="card-footerfever1">
                  <span className="reports-labelfever1">Reports in</span>
                  <span className="terms-tooltipfever1">
                    (T&C)
                    <span className="tooltip-textfever1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofever1">
                    <div className="timing-badgefever1">12 Hours</div>
                    <div className="vertical-linefever1"></div>
                    <span className="test-countfever1">
                      Tests <span>27</span>
                    </span>

                    {addedCards.card16 ? (
                      <button
                        className="view-cart-btnfever1"
                        onClick={handleViewCartfever}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfever1"
                        onClick={() => handleAddToCartfever("card16")}
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

export default Feverpage;
