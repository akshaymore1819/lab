import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Pregnancy.css";

function Pregnancy() {
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

  const handleAddToCartpregnancy = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartpregnancy = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="mainpregnancy">
        <h1>Showing results for "Pregnancy" test</h1>
        <div className="card-containermainpregnancy">
          <div className="card-containerpregnancy">
            <div className="title-rowpregnancy">
              <div className="card-titlepregnancy">
              HCG Maternal Marker (Pregnancy) Test {" "}
                <span className="dropdown-iconpregnancy">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricepregnancy">
                ₹499 <span className="original-pricepregnancy">₹899</span>
              </div>
            </div>
            <div className="test-list-cardpregnancy">
              <p className="test-namespregnancy">
              The HCG Maternal Marker (Pregnancy) Test detects the hormone HCG in the blo
              <span className="more-linkpregnancy">...More</span>
              </p>
            </div>

            <div className="card-footerpregnancy">
              <span className="reports-labelpregnancy">Reports in</span>
              <span className="terms-tooltippregnancy">
                (T&C)
                <span className="tooltip-textpregnancy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infopregnancy">
                <div className="timing-badgepregnancy">12 Hours</div>
                <div className="vertical-linepregnancy"></div>
                <span className="test-countpregnancy">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnpregnancy"
                    onClick={handleViewCartpregnancy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnpregnancy"
                    onClick={() => handleAddToCartpregnancy("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerpregnancy1">
            <div className="title-rowpregnancy1">
              <div className="card-titlepregnancy1">
              Double Marker Test {" "}
                <span className="dropdown-iconpregnancy1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricepregnancy1">
                ₹2100 <span className="original-pricepregnancy1">₹3000</span>
              </div>
            </div>
            <div className="test-list-cardpregnancy1">
              <p className="test-namespregnancy1">
              It monitors fetus development & detects its risk of developing chromosomal
                <span className="more-linkpregnancy1">...More</span>
              </p>
            </div>

            <div className="card-footerpregnancy1">
              <span className="reports-labelpregnancy1">Reports in</span>
              <span className="terms-tooltippregnancy1">
                (T&C)
                <span className="tooltip-textpregnancy1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infopregnancy">
                <div className="timing-badgepregnancy1">4 Hours</div>
                <div className="vertical-linepregnancy1"></div>
                <span className="test-countpregnancy1">
                  Tests <span>2</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnpregnancy1"
                    onClick={handleViewCartpregnancy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnpregnancy1"
                    onClick={() => handleAddToCartpregnancy("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainpregnancy">
          <div className="card-containerpregnancy">
            <div className="title-rowpregnancy">
              <div className="card-titlepregnancy">
              Quadruple Marker Test- Beckman (Benetech) {" "}
                <span className="dropdown-iconpregnancy">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricepregnancy">
                ₹3299 <span className="original-pricepregnancy">₹5500</span>
              </div>
            </div>
            <div className="test-list-cardpregnancy">
              <p className="test-namespregnancy">
              Quadruple test is used for Prenatal Screening of Down Syndrome (Trisomy 21)
                <span className="more-linkpregnancy">...More</span>
              </p>
            </div>

            <div className="card-footerpregnancy">
              <span className="reports-labelpregnancy">Reports in</span>
              <span className="terms-tooltippregnancy">
                (T&C)
                <span className="tooltip-textpregnancy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infopregnancy">
                <div className="timing-badgepregnancy">4 Hours</div>
                <div className="vertical-linepregnancy"></div>
                <span className="test-countpregnancy">
                  Tests <span>4</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnpregnancy"
                    onClick={handleViewCartpregnancy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnpregnancy"
                    onClick={() => handleAddToCartpregnancy("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerpregnancy1">
            <div className="title-rowpregnancy1">
              <div className="card-titlepregnancy1">
              Triple Marker Test- Beckman (Benetech) {" "}
                <span className="dropdown-iconpregnancy1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricepregnancy1">
                ₹2799 <span className="original-pricepregnancy1">₹3500</span>
              </div>
            </div>
            <div className="test-list-cardpregnancy1">
              <p className="test-namespregnancy1">
              During pregnancy AFP, hCG, and estriol levels are measured to find genetic <span className="more-linkpregnancy1">...More</span>
              </p>
            </div>

            <div className="card-footerpregnancy1">
              <span className="reports-labelpregnancy1">Reports in</span>
              <span className="terms-tooltippregnancy1">
                (T&C)
                <span className="tooltip-textpregnancy1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infopregnancy">
                <div className="timing-badgepregnancy1">4 Hours</div>
                <div className="vertical-linepregnancy1"></div>
                <span className="test-countpregnancy1">
                  Tests <span>3</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnpregnancy1"
                    onClick={handleViewCartpregnancy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnpregnancy1"
                    onClick={() => handleAddToCartpregnancy("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containerpregnancy">
            <button
              className="show-more-btnpregnancy"
              onClick={toggleShowMoreTests}
            >
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermainpregnancy">
              <div className="card-containerpregnancy">
                <div className="title-rowpregnancy">
                  <div className="card-titlepregnancy">
                  Maternal Marker Alpha Fetoprotein (AFP) {" "}
                    <span className="dropdown-iconpregnancy">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricepregnancy">
                    ₹900 <span className="original-pricepregnancy">₹1600</span>
                  </div>
                </div>
                <div className="test-list-cardpregnancy">
                  <p className="test-namesheart">
                  The helps determine baby's risk of being born with birth defects or genetic
                    <span className="more-linkpregnancy">...More</span>
                  </p>
                </div>

                <div className="card-footerpregnancy">
                  <span className="reports-labelpregnancy">Reports in</span>
                  <span className="terms-tooltippregnancy">
                    (T&C)
                    <span className="tooltip-textpregnancy">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infopregnancy">
                    <div className="timing-badgepregnancy">24 Hours</div>
                    <div className="vertical-linepregnancy"></div>
                    <span className="test-countpregnancy">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnpregnancy"
                        onClick={handleViewCartpregnancy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnpregnancy"
                        onClick={() => handleAddToCartpregnancy("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerpregnancy1">
                <div className="title-rowpregnancy1">
                  <div className="card-titlepregnancy1">
                  Urine Pregnancy Test (UPT) {" "}
                    <span className="dropdown-iconpregnancy1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricepregnancy1">
                    ₹90 <span className="original-pricepregnancy1">₹360</span>
                  </div>
                </div>
                <div className="test-list-cardpregnancy1">
                  <p className="test-namespregnancy1">
                  It looks for specific hormones in your urine to check if you are pregnant o
                    <span className="more-linkpregnancy1">...More</span>
                  </p>
                </div>

                <div className="card-footerpregnancy1">
                  <span className="reports-labelpregnancy1">Reports in</span>
                  <span className="terms-tooltippregnancy1">
                    (T&C)
                    <span className="tooltip-textpregnancy1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infopregnancy1">
                    <div className="timing-badgepregnancy1">12 Hours</div>
                    <div className="vertical-linepregnancy1"></div>
                    <span className="test-countpregnancy1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnpregnancy1"
                        onClick={handleViewCartpregnancy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnpregnancy1"
                        onClick={() => handleAddToCartpregnancy("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainpregnancy">
              <div className="card-containerpregnancy">
                <div className="title-rowpregnancy">
                  <div className="card-titlepregnancy">
                  Pregnancy Associated Plasma Protein-A(PAPP-A) Test{" "}
                    <span className="dropdown-iconpregnancy">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricepregnancy">
                    ₹1000 <span className="original-pricepregnancy">₹1980</span>
                  </div>
                </div>
                <div className="test-list-cardpregnancy">
                  <p className="test-namespregnancy">
                  PAPP-A test can detect if the female is having a high-risk pregnancy. It is
                    <span className="more-linkpregnancy">...More</span>
                  </p>
                </div>

                <div className="card-footerpregnancy">
                  <span className="reports-labelpregnancy">Reports in</span>
                  <span className="terms-tooltippregnancy">
                    (T&C)
                    <span className="tooltip-textpregnancy">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infopregnancy">
                    <div className="timing-badgepregnancy">4 Hours</div>
                    <div className="vertical-linepregnancy"></div>
                    <span className="test-countpregnancy">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnpregnancy"
                        onClick={handleViewCartpregnancy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnpregnancy"
                        onClick={() => handleAddToCartpregnancy("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerpregnancy1">
                <div className="title-rowpregnancy1">
                  <div className="card-titlepregnancy1">
                  Inhibin A (Dimeric) Test {" "}
                    <span className="dropdown-iconpregnancy1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricepregnancy1">
                    ₹800
                    <span className="original-pricepregnancy1">₹1650</span>
                  </div>
                </div>
                <div className="test-list-cardpregnancy1">
                  <p className="test-namespregnancy1">
                  The inhibin-a-dimeric test detects Down’s syndrome in the unborn baby in pr
                    <span className="more-linkpregnancy1">...More</span>
                  </p>
                </div>

                <div className="card-footerpregnancy1">
                  <span className="reports-labelpregnancy1">Reports in</span>
                  <span className="terms-tooltippregnancy1">
                    (T&C)
                    <span className="tooltip-textpregnancy1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infopregnancy1">
                    <div className="timing-badgepregnancy1">48 Hours</div>
                    <div className="vertical-linepregnancy1"></div>
                    <span className="test-countpregnancy1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnpregnancy1"
                        onClick={handleViewCartpregnancy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnpregnancy1"
                        onClick={() => handleAddToCartpregnancy("card8")}
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

      <div className="mainpregnancy">
        <h1>Showing results for "Pregnancy" package</h1>
        <div className="card-containermainpregnancy">
          <div className="card-containerpregnancy">
            <div className="title-rowpregnancy">
              <div className="card-titlepregnancy">
              Antenatal Care Profile (ANC)- Advance {" "}
                <span className="dropdown-iconpregnancy">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricepregnancy">
                ₹1899 <span className="original-pricepregnancy">₹3650</span>
              </div>
            </div>
            <div className="test-list-cardpregnancy">
              <p className="test-namespregnancy">
              The test checks the mother & baby's health and diagnoses gestational diabet
                <span className="more-linkpregnancy">...More</span>
              </p>
            </div>

            <div className="card-footerpregnancy">
              <span className="reports-labelpregnancy">Reports in</span>
              <span className="terms-tooltippregnancy">
                (T&C)
                <span className="tooltip-textpregnancy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infopregnancy">
                <div className="timing-badgepregnancy">72 Hours</div>
                <div className="vertical-linepregnancy"></div>
                <span className="test-countpregnancy">
                  Tests <span>67</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnpregnancy"
                    onClick={handleViewCartpregnancy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnpregnancy"
                    onClick={() => handleAddToCartpregnancy("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerpregnancy1">
            <div className="title-rowpregnancy1">
              <div className="card-titlepregnancy1">
              Antenatal Care Profile (ANC)- Essential {" "}
                <span className="dropdown-iconpregnancy1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricepregnancy1">
                ₹1499 <span className="original-pricepregnancy1">₹2499</span>
              </div>
            </div>
            <div className="test-list-cardpregnancy1">
              <p className="test-namespregnancy1">
              This diagnoses or monitors diseases affecting fetal growth & find troubles 
                <span className="more-linkpregnancy1">...More</span>
              </p>
            </div>

            <div className="card-footerpregnancy1">
              <span className="reports-labelpregnancy1">Reports in</span>
              <span className="terms-tooltippregnancy1">
                (T&C)
                <span className="tooltip-textpregnancy1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infopregnancy1">
                <div className="timing-badgepregnancy1">15 Hours</div>
                <div className="vertical-linepregnancy1"></div>
                <span className="test-countpregnancy1">
                  Tests <span>60</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnpregnancy1"
                    onClick={handleViewCartpregnancy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnpregnancy1"
                    onClick={() => handleAddToCartpregnancy("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainpregnancy">
          <div className="card-containerpregnancy">
            <div className="title-rowpregnancy">
              <div className="card-titlepregnancy">
              MotherHealth Gold Package {" "}
                <span className="dropdown-iconpregnancy">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricepregnancy">
                ₹1350 <span className="original-pricepregnancy">₹3375</span>
              </div>
            </div>
            <div className="test-list-cardpregnancy">
              <p className="test-namespregnancy">
              It helps track the mother's health & check illnesses common in lactating or
              </p>
            </div>

            <div className="card-footerpregnancy">
              <span className="reports-labelpregnancy">Reports in</span>
              <span className="terms-tooltippregnancy">
                (T&C)
                <span className="tooltip-textpregnancy">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infopregnancy">
                <div className="timing-badgepregnancy">72 Hours</div>
                <div className="vertical-linepregnancy"></div>
                <span className="test-countpregnancy">
                  Tests <span>64</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnpregnancy"
                    onClick={handleViewCartpregnancy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnpregnancy"
                    onClick={() => handleAddToCartpregnancy("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerpregnancy1">
            <div className="title-rowpregnancy1">
              <div className="card-titlepregnancy1">
              MotherHealth Package - Essential {" "}
                <span className="dropdown-iconpregnancy1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricepregnancy1">
                ₹750 <span className="original-pricepregnancy1">₹1875</span>
              </div>
            </div>
            <div className="test-list-cardpregnancy1">
              <p className="test-namespregnancy1">
              A basic health screening panel for mothers to check CBC, Glucose, cholester
                <span className="more-linkpregnancy1">...More</span>
              </p>
            </div>

            <div className="card-footerpregnancy1">
              <span className="reports-labelpregnancy1">Reports in</span>
              <span className="terms-tooltippregnancy1">
                (T&C)
                <span className="tooltip-textpregnancy1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infopregnancy1">
                <div className="timing-badgepregnancy1">15 Hours</div>
                <div className="vertical-linepregnancy1"></div>
                <span className="test-countpregnancy1">
                  Tests <span>54</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnpregnancy1"
                    onClick={handleViewCartpregnancy}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnpregnancy1"
                    onClick={() => handleAddToCartpregnancy("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containerpregnancy">
            <button
              className="show-more-btnpregnancy"
              onClick={toggleShowMorePackages}
            >
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermainpregnancy">
              <div className="card-containerpregnancy">
                <div className="title-rowpregnancy">
                  <div className="card-titlepregnancy">
                  MotherHealth Silver Package{" "}
                    <span className="dropdown-iconpregnancy">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricepregnancy">
                    ₹925 <span className="original-pricepregnancy">₹2312.5</span>
                  </div>
                </div>
                <div className="test-list-cardpregnancy">
                  <p className="test-namespregnancy">
                  This helps diagnose problems associated with motherhood & take treatment to
                    <span className="more-linkpregnancy">...More</span>
                  </p>
                </div>

                <div className="card-footerpregnancy">
                  <span className="reports-labelpregnancy">Reports in</span>
                  <span className="terms-tooltippregnancy">
                    (T&C)
                    <span className="tooltip-textpregnancy">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infopregnancy">
                    <div className="timing-badgepregnancy">15 Hours</div>
                    <div className="vertical-linepregnancy"></div>
                    <span className="test-countpregnancy">
                      Tests <span>55</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnpregnancy"
                        onClick={handleViewCartpregnancy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnpregnancy"
                        onClick={() => handleAddToCartpregnancy("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerpregnancy1">
                <div className="title-rowpregnancy1">
                  <div className="card-titlepregnancy1">
                  MotherHealth Platinum Package {" "}
                    <span className="dropdown-iconpregnancy1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricepregnancy1">
                    ₹3750
                    <span className="original-pricepregnancy1">₹9375</span>
                  </div>
                </div>
                <div className="test-list-cardpregnancy1">
                  <p className="test-namespregnancy1">
                  To screen the health condition of mother and baby to identify health risk
                    <span className="more-linkpregnancy1">...More</span>
                  </p>
                </div>

                <div className="card-footerpregnancy1">
                  <span className="reports-labelpregnancy1">Reports in</span>
                  <span className="terms-tooltippregnancy1">
                    (T&C)
                    <span className="tooltip-textpregnancy1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infopregnancy1">
                    <div className="timing-badgepregnancy1">72 Hours</div>
                    <div className="vertical-linepregnancy1"></div>
                    <span className="test-countpregnancy1">
                      Tests <span>76</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnpregnancy1"
                        onClick={handleViewCartpregnancy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnpregnancy1"
                        onClick={() => handleAddToCartpregnancy("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainpregnancynew">
              <div className="card-containerpregnancy">
                <div className="title-rowpregnancy">
                  <div className="card-titlepregnancy">
                  Antenatal Care Profile (ANC) - Comprehensive {" "}
                    <span className="dropdown-iconpregnancy">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricepregnancy">
                    ₹2299<span className="original-pricepregnancy">₹5500</span>
                  </div>
                </div>
                <div className="test-list-cardpregnancy">
                  <p className="test-namespregnancy">
                  CBC, ESR, Blood Group, HB HPLC, Glucose Random, LFT, KFT, Thyroid Profile T
                  <span className="more-linkpregnancy1">...More</span>
                  </p>
                </div>

                <div className="card-footerpregnancy">
                  <span className="reports-labelpregnancy">Reports in</span>
                  <span className="terms-tooltippregnancy">
                    (T&C)
                    <span className="tooltip-textpregnancy">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infopregnancy">
                    <div className="timing-badgepregnancy">72 Hours</div>
                    <div className="vertical-linepregnancy"></div>
                    <span className="test-countpregnancy">
                      Tests <span>93</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btnpregnancy"
                        onClick={handleViewCartpregnancy}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnpregnancy"
                        onClick={() => handleAddToCartpregnancy("card15")}
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

export default Pregnancy;
