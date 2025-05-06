import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Cancer.css";

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

  const handleAddToCartcancer = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartcancer = () => {
    window.location.href = "/cart";
  };


  return (
    <>
      <div className="maincancer">
        <h1>Showing results for "Cancer" test</h1>
        <div className="card-containermaincancer">
          <div className="card-containercancer">
            <div className="title-rowcancer">
              <div className="card-titlecancer">
              PSA Test {" "}
                <span className="dropdown-iconcancer">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecancer">
                ₹800 <span className="original-pricecancer">₹1500</span>
              </div>
            </div>
            <div className="test-list-cardcancer">
              <p className="test-namescancer">
              This looks for prostate-specific antigens (PSA) in the blood to help diagno<span className="more-linkcancer">...More</span>
              </p>
            </div>

            <div className="card-footercancer">
              <span className="reports-labelcancer">Reports in</span>
              <span className="terms-tooltipcancer">
                (T&C)
                <span className="tooltip-textcancer">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocancer">
                <div className="timing-badgecancer">24 Hours</div>
                <div className="vertical-linecancer"></div>
                <span className="test-countcancer">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btncancer"
                    onClick={handleViewCartcancer}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncancer"
                    onClick={() => handleAddToCartcancer("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containercancer1">
            <div className="title-rowcancer1">
              <div className="card-titlecancer1">
              Medium Tissue Biopsy Test Histopathology  {" "}
                <span className="dropdown-iconcancer1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecancer1">
                ₹900 <span className="original-pricecancer1">₹2200</span>
              </div>
            </div>
            <div className="test-list-cardcancer1">
              <p className="test-namescancer1">
              The test diagnoses cellular and structural abnormalities, to diagnose vario<span className="more-linkcancer1">...More</span>
              </p>
            </div>

            <div className="card-footercancer1">
              <span className="reports-labelcancer1">Reports in</span>
              <span className="terms-tooltipcancer1">
                (T&C)
                <span className="tooltip-textcancer">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocancer">
                <div className="timing-badgecancer1">5 Hours</div>
                <div className="vertical-linecancer1"></div>
                <span className="test-countcancer1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btncancer1"
                    onClick={handleViewCartcancer}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncancer1"
                    onClick={() => handleAddToCartcancer("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermaincancer">
          <div className="card-containercancer">
            <div className="title-rowcancer">
              <div className="card-titlecancer">
              Typhoid Test IGM Test{" "}
                <span className="dropdown-iconcancer">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecancer">
                ₹1500 <span className="original-pricecancer">₹3000</span>
              </div>
            </div>
            <div className="test-list-cardcancer">
              <p className="test-namescancer">
              The test analyses large tissue samples for cellular and structural abnormal<span className="more-linkcancer">...More</span>
              </p>
            </div>

            <div className="card-footercancer">
              <span className="reports-labelcancer">Reports in</span>
              <span className="terms-tooltipcancer">
                (T&C)
                <span className="tooltip-textcancer">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocancer">
                <div className="timing-badgecancer">8 Hours</div>
                <div className="vertical-linecancer"></div>
                <span className="test-countcancer">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btncancer"
                    onClick={handleViewCartcancer}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncancer"
                    onClick={() => handleAddToCartcancer("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containercancer1">
            <div className="title-rowcancer1">
              <div className="card-titlecancer1">
              CA 125 Test {" "}
                <span className="dropdown-iconcancer1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecancer1">
                ₹1199 <span className="original-pricecancer1">₹2400</span>
              </div>
            </div>
            <div className="test-list-cardcancer1">
              <p className="test-namescancer1">
              The test helps monitor ovarian cancer treatment response & check if the can<span className="more-linkcancer1">...More</span>
              </p>
            </div>

            <div className="card-footercancer1">
              <span className="reports-labelcancer1">Reports in</span>
              <span className="terms-tooltipcancer1">
                (T&C)
                <span className="tooltip-textcancer1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocancer1">
                <div className="timing-badgecancer1">24 Hours</div>
                <div className="vertical-linecancer1"></div>
                <span className="test-countcancer1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btncancer1"
                    onClick={handleViewCartcancer}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncancer1"
                    onClick={() => handleAddToCartcancer("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containercancer">
            <button className="show-more-btncancer" onClick={toggleShowMoreTests}>
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermaincancer">
              <div className="card-containercancer">
                <div className="title-rowcancer">
                  <div className="card-titlecancer">
                  Vanillylmandelic Acid (VMA), 24 Hrs Urine Test  {" "}
                    <span className="dropdown-iconcancer">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecancer">
                    ₹3800 <span className="original-pricecancer">₹9625</span>
                  </div>
                </div>
                <div className="test-list-cardcancer">
                  <p className="test-namesheart">
                  This test measures VMA levels in urine to diagnose neuroblastoma tumor, phe
                    <span className="more-linkcancer">...More</span>
                  </p>
                </div>

                <div className="card-footercancer">
                  <span className="reports-labelcancer">Reports in</span>
                  <span className="terms-tooltipcancer">
                    (T&C)
                    <span className="tooltip-textcancer">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocancer">
                    <div className="timing-badgecancer">10 Hours</div>
                    <div className="vertical-linecancer"></div>
                    <span className="test-countcancer">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btncancer"
                        onClick={handleViewCartcancer}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncancer"
                        onClick={() => handleAddToCartcancer("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containercancer1">
                <div className="title-rowcancer1">
                  <div className="card-titlecancer1">
                  Prostate Specific Antigen (PSA) Free Test {" "}
                    <span className="dropdown-iconcancer1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecancer1">
                    ₹850 <span className="original-pricecancer1">₹1700</span>
                  </div>
                </div>
                <div className="test-list-cardcancer1">
                  <p className="test-namescancer1">
                  This measure PSA levels, aid detect prostate cancer & monitor ongoing treat
                    <span className="more-linkcancer1">...More</span>
                  </p>
                </div>

                <div className="card-footercancer1">
                  <span className="reports-labelcancer1">Reports in</span>
                  <span className="terms-tooltipcancer1">
                    (T&C)
                    <span className="tooltip-textcancer1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocancer1">
                    <div className="timing-badgecancer1">36 Hours</div>
                    <div className="vertical-linecancer1"></div>
                    <span className="test-countcancer1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btncancer1"
                        onClick={handleViewCartcancer}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncancer1"
                        onClick={() => handleAddToCartcancer("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermaincancer">
              <div className="card-containercancer">
                <div className="title-rowcancer">
                  <div className="card-titlecancer">
                  CA 19.9 Test   {" "}
                    <span className="dropdown-iconcancer">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecancer">
                    ₹1349 <span className="original-pricecancer">₹2970</span>
                  </div>
                </div>
                <div className="test-list-cardcancer">
                  <p className="test-namescancer">
                  The test is used to diagnose the level of Cancer antigen 19-9 (CA 19-9) cau
                    <span className="more-linkcancer">...More</span>
                  </p>
                </div>

                <div className="card-footercancer">
                  <span className="reports-labelcancer">Reports in</span>
                  <span className="terms-tooltipcancer">
                    (T&C)
                    <span className="tooltip-textcancer">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocancer">
                    <div className="timing-badgecancer">36 Hours</div>
                    <div className="vertical-linecancer"></div>
                    <span className="test-countcancer">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btncancer"
                        onClick={handleViewCartcancer}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncancer"
                        onClick={() => handleAddToCartcancer("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containercancer1">
                <div className="title-rowcancer1">
                  <div className="card-titlecancer1">
                  CA 15.3 Test {" "}
                    <span className="dropdown-iconcancer1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecancer1">
                    ₹1550 <span className="original-pricecancer1">₹1800</span>
                  </div>
                </div>
                <div className="test-list-cardcancer1">
                  <p className="test-namescancer1">
                  This tumor markers test monitors metastatic breast cancer and its response
                    <span className="more-linkcancer1">...More</span>
                  </p>
                </div>

                <div className="card-footercancer1">
                  <span className="reports-labelcancer1">Reports in</span>
                  <span className="terms-tooltipcancer1">
                    (T&C)
                    <span className="tooltip-textcancer1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocancer1">
                    <div className="timing-badgecancer1">24 Hours</div>
                    <div className="vertical-linecancer1"></div>
                    <span className="test-countcancer1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btncancer1"
                        onClick={handleViewCartcancer}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncancer1"
                        onClick={() => handleAddToCartcancer("card8")}
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



      <div className="maincancer">
        <h1>Showing results for "Cancer" package</h1>
        <div className="card-containermaincancer">
          <div className="card-containercancer">
            <div className="title-rowcancer">
              <div className="card-titlecancer">
              Cancer Screening Package Essential - Female {" "}
                <span className="dropdown-iconcancer">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecancer">
                ₹1299 <span className="original-pricecancer">₹3555</span>
              </div>
            </div>
            <div className="test-list-cardcancer">
              <p className="test-namescancer">
              It checks the risk for cancer even before symptoms appear & helps doctors p<span className="more-linkcancer">...More</span>
              </p>
            </div>

            <div className="card-footercancer">
              <span className="reports-labelcancer">Reports in</span>
              <span className="terms-tooltipcancer">
                (T&C)
                <span className="tooltip-textcancer">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocancer">
                <div className="timing-badgecancer">24 Hours</div>
                <div className="vertical-linecancer"></div>
                <span className="test-countcancer">
                  Tests <span>35</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btncancer"
                    onClick={handleViewCartcancer}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncancer"
                    onClick={() => handleAddToCartcancer("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containercancer1">
            <div className="title-rowcancer1">
              <div className="card-titlecancer1">
              Cancer Screening Package Essential - Male  {" "}
                <span className="dropdown-iconcancer1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecancer1">
                ₹1099 <span className="original-pricecancer1">₹3235</span>
              </div>
            </div>
            <div className="test-list-cardcancer1">
              <p className="test-namescancer1">
              It helps screen for cancers common in males to start treatment & prevent se<span className="more-linkcancer1">...More</span>
              </p>
            </div>

            <div className="card-footercancer1">
              <span className="reports-labelcancer1">Reports in</span>
              <span className="terms-tooltipcancer1">
                (T&C)
                <span className="tooltip-textcancer1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocancer1">
                <div className="timing-badgecancer1">48 Hours</div>
                <div className="vertical-linecancer1"></div>
                <span className="test-countcancer1">
                  Tests <span>3</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btncancer1"
                    onClick={handleViewCartcancer}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncancer1"
                    onClick={() => handleAddToCartcancer("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermaincancer">
          <div className="card-containercancer">
            <div className="title-rowcancer">
              <div className="card-titlecancer">
              Protein Electrophoresis Reflex immunofixation (Qualitative) Test {" "}
                <span className="dropdown-iconcancer">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecancer">
                ₹2000 <span className="original-pricecancer">₹4500</span>
              </div>
            </div>
            <div className="test-list-cardcancer">
              <p className="test-namescancer">
              Protein Electrophoresis Reflex immunofixation (Qualitative)
              </p>
            </div>

            <div className="card-footercancer">
              <span className="reports-labelcancer">Reports in</span>
              <span className="terms-tooltipcancer">
                (T&C)
                <span className="tooltip-textcancer">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocancer">
                <div className="timing-badgecancer">6 Hours</div>
                <div className="vertical-linecancer"></div>
                <span className="test-countcancer">
                  Tests <span>1</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btncancer"
                    onClick={handleViewCartcancer}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncancer"
                    onClick={() => handleAddToCartcancer("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containercancer1">
            <div className="title-rowcancer1">
              <div className="card-titlecancer1">
              Cancer Screening Package Advance - Female {" "}
                <span className="dropdown-iconcancer1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecancer1">
                ₹799 <span className="original-pricecancer1">₹1500</span>
              </div>
            </div>
            <div className="test-list-cardcancer1">
              <p className="test-namescancer1">
              This helps assess health & check cancers common in women even before the sy<span className="more-linkcancer1">...More</span>
              </p>
            </div>

            <div className="card-footercancer1">
              <span className="reports-labelcancer1">Reports in</span>
              <span className="terms-tooltipcancer1">
                (T&C)
                <span className="tooltip-textcancer1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocancer1">
                <div className="timing-badgecancer1">48 Hours</div>
                <div className="vertical-linecancer1"></div>
                <span className="test-countcancer1">
                  Tests <span>30</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btncancer1"
                    onClick={handleViewCartcancer}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncancer1"
                    onClick={() => handleAddToCartcancer("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containercancer">
            <button className="show-more-btncancer" onClick={toggleShowMorePackages}>
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermaincancer">
              <div className="card-containercancer">
                <div className="title-rowcancer">
                  <div className="card-titlecancer">
                  Cancer Screening Package Advance - Male {" "}
                    <span className="dropdown-iconcancer">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecancer">
                    ₹1599 <span className="original-pricecancer">₹3449</span>
                  </div>
                </div>
                <div className="test-list-cardcancer">
                  <p className="test-namescancer">
                  It tests that look for cancers common in men to initiate treatment & contro
                    <span className="more-linkcancer">...More</span>
                  </p>
                </div>

                <div className="card-footercancer">
                  <span className="reports-labelcancer">Reports in</span>
                  <span className="terms-tooltipcancer">
                    (T&C)
                    <span className="tooltip-textcancer">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocancer">
                    <div className="timing-badgecancer">48 Hours</div>
                    <div className="vertical-linecancer"></div>
                    <span className="test-countcancer">
                      Tests <span>31</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btncancer"
                        onClick={handleViewCartcancer}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncancer"
                        onClick={() => handleAddToCartcancer("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containercancer1">
                <div className="title-rowcancer1">
                  <div className="card-titlecancer1">
                  Multiple Myeloma Panel  {" "}
                    <span className="dropdown-iconcancer1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecancer1">
                    ₹8600 <span className="original-pricecancer1">₹17600</span>
                  </div>
                </div>
                <div className="test-list-cardcancer1">
                  <p className="test-namescancer1">
                  (Protein electrophoresis, Immunofixation, IgG, IgM, IgA, Free Light Chains
                    <span className="more-linkcancer1">...More</span>
                  </p>
                </div>

                <div className="card-footercancer1">
                  <span className="reports-labelcancer1">Reports in</span>
                  <span className="terms-tooltipcancer1">
                    (T&C)
                    <span className="tooltip-textcancer1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocancer1">
                    <div className="timing-badgecancer1">6 Hours</div>
                    <div className="vertical-linecancer1"></div>
                    <span className="test-countcancer1">
                      Tests <span>8</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btncancer1"
                        onClick={handleViewCartcancer}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncancer1"
                        onClick={() => handleAddToCartcancer("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermaincancer">
              <div className="card-containercancer">
                <div className="title-rowcancer">
                  <div className="card-titlecancer">
                  Breast Cancer Test - Essential {" "}
                    <span className="dropdown-iconcancer">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecancer">
                    ₹2200 <span className="original-pricecancer">₹4000</span>
                  </div>
                </div>
                <div className="test-list-cardcancer">
                  <p className="test-namescancer">
                  The breast cancer test is performed to detect the signs of breast cancer.
                  </p>
                </div>

                <div className="card-footercancer">
                  <span className="reports-labelcancer">Reports in</span>
                  <span className="terms-tooltipcancer">
                    (T&C)
                    <span className="tooltip-textcancer">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocancer">
                    <div className="timing-badgecancer">48 Hours</div>
                    <div className="vertical-linecancer"></div>
                    <span className="test-countcancer">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btncancer"
                        onClick={handleViewCartcancer}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncancer"
                        onClick={() => handleAddToCartcancer("card15")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containercancer1">
                <div className="title-rowcancer1">
                  <div className="card-titlecancer1">
                  Testicular Cancer Monitor Test {" "}
                    <span className="dropdown-iconcancer1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecancer1">
                    ₹1000 <span className="original-pricecancer1">₹2500</span>
                  </div>
                </div>
                <div className="test-list-cardcancer1">
                  <p className="test-namescancer1">
                  The testicular cancer monitoring test is used to screen the presence of tes.
                    <span className="more-linkcancer1">...More</span>
                  </p>
                </div>

                <div className="card-footercancer1">
                  <span className="reports-labelcancer1">Reports in</span>
                  <span className="terms-tooltipcancer1">
                    (T&C)
                    <span className="tooltip-textcancer1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocancer1">
                    <div className="timing-badgecancer1">48 Hours</div>
                    <div className="vertical-linecancer1"></div>
                    <span className="test-countcancer1">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card16 ? (
                      <button
                        className="view-cart-btncancer1"
                        onClick={handleViewCartcancer}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncancer1"
                        onClick={() => handleAddToCartcancer("card16")}
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
