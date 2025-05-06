import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Antental.css";

function Antental() {
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
  });

  const [showAllTests, setShowAllTests] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const toggleShowMoreTests = () => {
    setShowAllTests(!showAllTests);
  };

  const toggleShowMorePackages = () => {
    setShowAllPackages(!showAllPackages);
  };

  const handleAddToCartantental = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartantental = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="mainantental">
        <h1>Showing results for "Antental" test</h1>
        <div className="card-containermain1">
          <div className="card-containerantental">
            <div className="title-rowantental">
              <div className="card-titleantental">
                Double Marker Test{" "}
                <span className="dropdown-iconantental">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceantental">
                ₹2100<span className="original-priceantental">₹3000</span>
              </div>
            </div>
            <div className="test-list-cardantental">
              <p className="test-namesantental">
                It monitors fetus development & detects its risk of developing
                chromosomal<span className="more-linkantental">...More</span>
              </p>
            </div>

            <div className="card-footerantental">
              <span className="reports-labelantental">Reports in</span>
              <span className="terms-tooltipantental">
                (T&C)
                <span className="tooltip-textantental">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoantental">
                <div className="timing-badgeantental">4 Days</div>
                <div className="vertical-lineantental"></div>
                <span className="test-countantental">
                  Tests <span>2</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnantental"
                    onClick={handleViewCartantental}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnantental"
                    onClick={() => handleAddToCartantental("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerantental1">
            <div className="title-rowantental1">
              <div className="card-titleantental1">
                Quadruple Marker Test- Beckman (Benetech){" "}
                <span className="dropdown-iconantental1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceantental1">
                ₹3299 <span className="original-priceantental1">₹5500</span>
              </div>
            </div>
            <div className="test-list-cardantental1">
              <p className="test-namesantental1">
                Quadruple test is used for Prenatal Screening of Down Syndrome
                (Trisomy 21)<span className="more-linkantental1">...More</span>
              </p>
            </div>

            <div className="card-footerantental1">
              <span className="reports-labelantental1">Reports in</span>
              <span className="terms-tooltipantental1">
                (T&C)
                <span className="tooltip-textantental1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoantental1">
                <div className="timing-badgeantental1">4 Days</div>
                <div className="vertical-lineantental1"></div>
                <span className="test-countantental1">
                  Tests <span>4</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnantental1"
                    onClick={handleViewCartantental}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnantental1"
                    onClick={() => handleAddToCartantental("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containerantental">
            <div className="title-rowantental">
              <div className="card-titleantental">
                Triple Marker Test- Beckman (Benetech){" "}
                <span className="dropdown-iconantental">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceantental">
                ₹2799 <span className="original-priceantental">₹3500</span>
              </div>
            </div>
            <div className="test-list-cardantental">
              <p className="test-namesantental">
                During pregnancy AFP, hCG, and estriol levels are measured to
                find genetic<span className="more-linkantental">...More</span>
              </p>
            </div>

            <div className="card-footerantental">
              <span className="reports-labelantental">Reports in</span>
              <span className="terms-tooltipantental">
                (T&C)
                <span className="tooltip-textantental">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoantental">
                <div className="timing-badgeantental">4 Days</div>
                <div className="vertical-lineantental"></div>
                <span className="test-countantental">
                  Tests <span>3</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnantental"
                    onClick={handleViewCartantental}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnantental"
                    onClick={() => handleAddToCartantental("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerantental1">
            <div className="title-rowantental1">
              <div className="card-titleantental1">
                Torch Panel IgG & IgM Test (10 Parameters) ){" "}
                <span className="dropdown-iconantental1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceantental1">
                ₹3000 <span className="original-priceantental1">₹5000</span>
              </div>
            </div>
            <div className="test-list-cardantental1">
              <p className="test-namesantental1">
                To detect toxoplasmosis, rubella, cytomegalovirus infection, and
                herpes inf<span className="more-linkantental1">...More</span>
              </p>
            </div>

            <div className="card-footerantental1">
              <span className="reports-labelantental1">Reports in</span>
              <span className="terms-tooltipantental1">
                (T&C)
                <span className="tooltip-textantental1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoantental1">
                <div className="timing-badgeantental1">48 hrs</div>
                <div className="vertical-lineantental1"></div>
                <span className="test-countantental1">
                  Tests <span>10</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnantental1"
                    onClick={handleViewCartantental}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnantental1"
                    onClick={() => handleAddToCartantental("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containerantental">
            <button
              className="show-more-btnantental"
              onClick={toggleShowMoreTests}
            >
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermain1">
              <div className="card-containerantental">
                <div className="title-rowantental">
                  <div className="card-titleantental">
                    Maternal Marker Alpha Fetoprotein (AFP){" "}
                    <span className="dropdown-iconantental">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceantental">
                    ₹900 <span className="original-priceantental">₹1600</span>
                  </div>
                </div>
                <div className="test-list-cardantental">
                  <p className="test-namesantental">
                    The helps determine baby's risk of being born with birth
                    defects or genetic
                    <span className="more-linkantental">...More</span>
                  </p>
                </div>

                <div className="card-footerantental">
                  <span className="reports-labelantental">Reports in</span>
                  <span className="terms-tooltipantental">
                    (T&C)
                    <span className="tooltip-textantental">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoantental">
                    <div className="timing-badgeantental">24 Hours</div>
                    <div className="vertical-lineantental"></div>
                    <span className="test-countantental">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnantental"
                        onClick={handleViewCartantental}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnantental"
                        onClick={() => handleAddToCartantental("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerantental1">
                <div className="title-rowantental1">
                  <div className="card-titleantental1">
                    NIPT- All Chromosome Test{" "}
                    <span className="dropdown-iconantental1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceantental1">
                    ₹12999
                    <span className="original-priceantental1">₹30500</span>
                  </div>
                </div>
                <div className="test-list-cardantental1">
                  <p className="test-namesantental1">
                    The test screens for fetal chromosomal abnormalities during
                    pregnancy to de
                    <span className="more-linkantental1">...More</span>
                  </p>
                </div>

                <div className="card-footerantental1">
                  <span className="reports-labelantental1">Reports in</span>
                  <span className="terms-tooltipantental1">
                    (T&C)
                    <span className="tooltip-textantental1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoantental1">
                    <div className="timing-badgeantental1">10 Hours</div>
                    <div className="vertical-lineantental1"></div>
                    <span className="test-countfull">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnantental1"
                        onClick={handleViewCartantental}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnantental1"
                        onClick={() => handleAddToCartantental("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermain1">
              <div className="card-containerantental">
                <div className="title-rowantental">
                  <div className="card-titleantental">
                    Double Marker Test- Auto-Delfia{" "}
                    <span className="dropdown-iconantental">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceantental">
                    ₹2500 <span className="original-priceantental">₹4250</span>
                  </div>
                </div>
                <div className="test-list-cardantental">
                  <p className="test-namesantental">
                    The double marker test in early pregnancy is a blood
                    screening done in the
                    <span className="more-linkantental">...More</span>
                  </p>
                </div>

                <div className="card-footerantental">
                  <span className="reports-labelantental">Reports in</span>
                  <span className="terms-tooltipantental">
                    (T&C)
                    <span className="tooltip-textantental">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoantental">
                    <div className="timing-badgeantental">4 days</div>
                    <div className="vertical-lineantental"></div>
                    <span className="test-countantental">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnantental"
                        onClick={handleViewCartantental}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnantental"
                        onClick={() => handleAddToCartantental("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerantental1">
                <div className="title-rowantental1">
                  <div className="card-titleantental1">
                    Double Marker Test + PLGF- Roche Test{" "}
                    <span className="dropdown-iconantental1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceantental1">
                    ₹3200 <span className="original-priceantental1">₹5750</span>
                  </div>
                </div>
                <div className="test-list-cardantental1">
                  <p className="test-namesantental1">
                    The double marker test in early pregnancy is a blood
                    screening done in the
                    <span className="more-linkantental1">...More</span>
                  </p>
                </div>

                <div className="card-footerantental1">
                  <span className="reports-labelantental1">Reports in</span>
                  <span className="terms-tooltipantental1">
                    (T&C)
                    <span className="tooltip-textantental1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoantental1">
                    <div className="timing-badgeantental1">4 days</div>
                    <div className="vertical-lineantental1"></div>
                    <span className="test-countantental1">
                      Tests <span>3</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnantental1"
                        onClick={handleViewCartantental}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnantental1"
                        onClick={() => handleAddToCartantental("card8")}
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

      <div className="mainantental">
        <h1>Showing results for "Antental" package</h1>
        <div className="card-containermain1">
          <div className="card-containerantental">
            <div className="title-rowantental">
              <div className="card-titleantental">
                Hemoglobin Variant Analysis Test (HPLC Test){" "}
                <span className="dropdown-iconantental">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceantental">
                ₹949 <span className="original-priceantental">₹2200</span>
              </div>
            </div>
            <div className="test-list-cardantental">
              <p className="test-namesantental">
                This measures abnormal hemoglobin variants to diagnose or
                monitor specific
                <span className="more-linkantental">...More</span>
              </p>
            </div>

            <div className="card-footerantental">
              <span className="reports-labelantental">Reports in</span>
              <span className="terms-tooltipantental">
                (T&C)
                <span className="tooltip-textantental">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoantental">
                <div className="timing-badgeantental">48 Hours</div>
                <div className="vertical-lineantental"></div>
                <span className="test-countantental">
                  Tests <span>15</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnantental"
                    onClick={handleViewCartantental}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnantental"
                    onClick={() => handleAddToCartantental("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerantental1">
            <div className="title-rowantental1">
              <div className="card-titleantental1">
                Antenatal Care Profile (ANC)- Essential{" "}
                <span className="dropdown-iconantental1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceantental1">
                ₹1499<span className="original-priceantental1">₹2499</span>
              </div>
            </div>
            <div className="test-list-cardantental1">
              <p className="test-namesantental1">
                This diagnoses or monitors diseases affecting fetal growth &
                find troubles<span className="more-linkantental1">...More</span>
              </p>
            </div>

            <div className="card-footerantental1">
              <span className="reports-labelantental1">Reports in</span>
              <span className="terms-tooltipantental1">
                (T&C)
                <span className="tooltip-textantental1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoantental1">
                <div className="timing-badgeantental1">15 Hours</div>
                <div className="vertical-lineantental1"></div>
                <span className="test-countfull">
                  Tests <span>60</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnantental1"
                    onClick={handleViewCartantental}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnantental1"
                    onClick={() => handleAddToCartantental("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containerantental">
            <div className="title-rowantental">
              <div className="card-titleantental">
                Antenatal Care Profile (ANC)- Advance{" "}
                <span className="dropdown-iconantental">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceantental">
                ₹1899 <span className="original-priceantental">₹3650</span>
              </div>
            </div>
            <div className="test-list-cardantental">
              <p className="test-namesantental">
                The test checks the mother & baby's health and diagnoses
                gestational diabet
                <span className="more-linkantental">...More</span>
              </p>
            </div>

            <div className="card-footerantental">
              <span className="reports-labelantental">Reports in</span>
              <span className="terms-tooltipantental">
                (T&C)
                <span className="tooltip-textantental">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoantental">
                <div className="timing-badgeantental">72 Hours</div>
                <div className="vertical-lineantental"></div>
                <span className="test-countantental">
                  Tests <span>67</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnantental"
                    onClick={handleViewCartantental}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnantental"
                    onClick={() => handleAddToCartantental("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerantental1">
            <div className="title-rowantental1">
              <div className="card-titleantental1">
                Bad Obstetric History (BOH) Profile- Advance{" "}
                <span className="dropdown-iconantental1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="priceantental1">
                ₹6799 <span className="original-priceantental1">₹15000</span>
              </div>
            </div>
            <div className="test-list-cardantental1">
              <p className="test-namesantental1">
                This Panel assesses various factors contributing to recurrent
                pregnancy los<span className="more-linkantental1">...More</span>
              </p>
            </div>

            <div className="card-footerantental1">
              <span className="reports-labelantental1">Reports in</span>
              <span className="terms-tooltipantental1">
                (T&C)
                <span className="tooltip-textantental1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoantental1">
                <div className="timing-badgeantental1">5 Days</div>
                <div className="vertical-lineantental1"></div>
                <span className="test-countantental1">
                  Tests <span>21</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnantental1"
                    onClick={handleViewCartantental}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnantental1"
                    onClick={() => handleAddToCartantental("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containerantental">
            <button
              className="show-more-btnantental"
              onClick={toggleShowMorePackages}
            >
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermain1">
              <div className="card-containerantental">
                <div className="title-rowantental">
                  <div className="card-titleantental">
                    Antenatal Care Profile (ANC) - Comprehensive{" "}
                    <span className="dropdown-iconantental">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="priceantental">
                    ₹2299 <span className="original-priceantental">₹5500</span>
                  </div>
                </div>
                <div className="test-list-cardantental">
                  <p className="test-namesantental">
                    CBC, ESR, Blood Group, HB HPLC, Glucose Random, LFT, KFT,
                    Thyroid Profile T
                    <span className="more-linkantental">...More</span>
                  </p>
                </div>

                <div className="card-footerantental">
                  <span className="reports-labelantental">Reports in</span>
                  <span className="terms-tooltipantental">
                    (T&C)
                    <span className="tooltip-textantental">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoantental">
                    <div className="timing-badgeantental">72 Hours</div>
                    <div className="vertical-lineantental"></div>
                    <span className="test-countantental">
                      Tests <span>93</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnantental"
                        onClick={handleViewCartantental}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnantental"
                        onClick={() => handleAddToCartantental("card13")}
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

export default Antental;
