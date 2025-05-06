import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Fertility.css";

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
  });

  const [showAllTests, setShowAllTests] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const toggleShowMoreTests = () => {
    setShowAllTests(!showAllTests);
  };

  const toggleShowMorePackages = () => {
    setShowAllPackages(!showAllPackages);
  };

  const handleAddToCartfertility = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartfertility = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="mainfertility">
        <h1>Showing results for "Fertility" test</h1>
        <div className="card-containermainfertility">
          <div className="card-containerfertility">
            <div className="title-rowfertility">
              <div className="card-titlefertility">
                HCG Maternal Marker (Pregnancy) Test{" "}
                <span className="dropdown-iconfertility">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefertility">
                ₹499 <span className="original-pricefertility">₹899</span>
              </div>
            </div>
            <div className="test-list-cardfertility">
              <p className="test-namesfertility">
                The HCG Maternal Marker (Pregnancy) Test detects the hormone HCG
                in the blo
                <span className="more-linkfertility">...More</span>
              </p>
            </div>

            <div className="card-footerfertility">
              <span className="reports-labelfertility">Reports in</span>
              <span className="terms-tooltipfertility">
                (T&C)
                <span className="tooltip-textfertility">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofertility">
                <div className="timing-badgefertility">12 Hours</div>
                <div className="vertical-linefertility"></div>
                <span className="test-countfertility">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnfertility"
                    onClick={handleViewCartfertility}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfertility"
                    onClick={() => handleAddToCartfertility("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerfertility1">
            <div className="title-rowfertility1">
              <div className="card-titlefertility1">
                Estradiol Test (E2){" "}
                <span className="dropdown-iconfertility1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefertility1">
                ₹550 <span className="original-pricefertility1">₹620</span>
              </div>
            </div>
            <div className="test-list-cardfertility1">
              <p className="test-namesfertility1">
                It measures estradiol levels & aid detect fertility problems,
                menstrual irr
                <span className="more-linkfertility1">...More</span>
              </p>
            </div>

            <div className="card-footerfertility1">
              <span className="reports-labelfertility1">Reports in</span>
              <span className="terms-tooltipfertility1">
                (T&C)
                <span className="tooltip-textfertility1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofertility">
                <div className="timing-badgefertility1">12 Hours</div>
                <div className="vertical-linefertility1"></div>
                <span className="test-countfertility1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnfertility1"
                    onClick={handleViewCartfertility}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfertility1"
                    onClick={() => handleAddToCartfertility("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainfertility">
          <div className="card-containerfertility">
            <div className="title-rowfertility">
              <div className="card-titlefertility">
                Progesterone Test{" "}
                <span className="dropdown-iconfertility">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefertility">
                ₹500 <span className="original-pricefertility">₹550</span>
              </div>
            </div>
            <div className="test-list-cardfertility">
              <p className="test-namesfertility">
                This assay is useful for ascertaining whether ovulation occured
                in a menstr
                <span className="more-linkfertility">...More</span>
              </p>
            </div>

            <div className="card-footerfertility">
              <span className="reports-labelfertility">Reports in</span>
              <span className="terms-tooltipfertility">
                (T&C)
                <span className="tooltip-textfertility">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofertility">
                <div className="timing-badgefertility">24 Hours</div>
                <div className="vertical-linefertility"></div>
                <span className="test-countfertility">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnfertility"
                    onClick={handleViewCartfertility}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfertility"
                    onClick={() => handleAddToCartfertility("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerfertility1">
            <div className="title-rowfertility1">
              <div className="card-titlefertility1">
                Karyotyping: Blood Lympho Culture Single Test{" "}
                <span className="dropdown-iconfertility1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefertility1">
                ₹3200 <span className="original-pricefertility1">₹5250</span>
              </div>
            </div>
            <div className="test-list-cardfertility1">
              <p className="test-namesfertility1">
                Chromosome analysis helps in the diagnosis of a wide variety of
                congenita
                <span className="more-linkfertility1">...More</span>
              </p>
            </div>

            <div className="card-footerfertility1">
              <span className="reports-labelfertility1">Reports in</span>
              <span className="terms-tooltipfertility1">
                (T&C)
                <span className="tooltip-textfertility1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofertility">
                <div className="timing-badgefertility1">13 Hours</div>
                <div className="vertical-linefertility1"></div>
                <span className="test-countfertility1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnfertility1"
                    onClick={handleViewCartfertility}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfertility1"
                    onClick={() => handleAddToCartfertility("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containerfertility">
            <button
              className="show-more-btnfertility"
              onClick={toggleShowMoreTests}
            >
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermainfertility">
              <div className="card-containerfertility">
                <div className="title-rowfertility">
                  <div className="card-titlefertility">
                    Karyotyping: Blood Lympho Culture, Couple Test{" "}
                    <span className="dropdown-iconfertility">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefertility">
                    ₹6200<span className="original-pricefertility">₹8500</span>
                  </div>
                </div>
                <div className="test-list-cardfertility">
                  <p className="test-namesheart">
                    The test detects the abnormal chromosome to diagnose genetic
                    disease and re
                    <span className="more-linkfertility">...More</span>
                  </p>
                </div>

                <div className="card-footerfertility">
                  <span className="reports-labelfertility">Reports in</span>
                  <span className="terms-tooltipfertility">
                    (T&C)
                    <span className="tooltip-textfertility">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofertility">
                    <div className="timing-badgefertility">13 Hours</div>
                    <div className="vertical-linefertility"></div>
                    <span className="test-countfertility">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnfertility"
                        onClick={handleViewCartfertility}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfertility"
                        onClick={() => handleAddToCartfertility("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerfertility1">
                <div className="title-rowfertility1">
                  <div className="card-titlefertility1">
                    Cardiolipin IgA Antibodies Test{" "}
                    <span className="dropdown-iconfertility1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefertility1">
                    ₹900 <span className="original-pricefertility1">₹1800</span>
                  </div>
                </div>
                <div className="test-list-cardfertility1">
                  <p className="test-namesfertility1">
                    This test evaluates antiphospholipid syndrome, identify
                    blood clot & cause
                    <span className="more-linkfertility1">...More</span>
                  </p>
                </div>

                <div className="card-footerfertility1">
                  <span className="reports-labelfertility1">Reports in</span>
                  <span className="terms-tooltipfertility1">
                    (T&C)
                    <span className="tooltip-textfertility1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofertility1">
                    <div className="timing-badgefertility1">4 Hours</div>
                    <div className="vertical-linefertility1"></div>
                    <span className="test-countfertility1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnfertility1"
                        onClick={handleViewCartfertility}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfertility1"
                        onClick={() => handleAddToCartfertility("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainfertility">
              <div className="card-containerfertility">
                <div className="title-rowfertility">
                  <div className="card-titlefertility">
                    Anti Sperm Antibodies Testt{" "}
                    <span className="dropdown-iconfertility">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefertility">
                    ₹1100 <span className="original-pricefertility">₹1760</span>
                  </div>
                </div>
                <div className="test-list-cardfertility">
                  <p className="test-namesfertility">
                    To detect antibodies against sperm in semen or vaginal
                    fluids to identify f
                    <span className="more-linkfertility">...More</span>
                  </p>
                </div>

                <div className="card-footerfertility">
                  <span className="reports-labelfertility">Reports in</span>
                  <span className="terms-tooltipfertility">
                    (T&C)
                    <span className="tooltip-textfertility">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofertility">
                    <div className="timing-badgefertility">7 Hours</div>
                    <div className="vertical-linefertility"></div>
                    <span className="test-countfertility">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnfertility"
                        onClick={handleViewCartfertility}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfertility"
                        onClick={() => handleAddToCartfertility("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerfertility1">
                <div className="title-rowfertility1">
                  <div className="card-titlefertility1">
                    Karyotyping (KT)- Prenatal test{" "}
                    <span className="dropdown-iconfertility1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefertility1">
                    ₹4800
                    <span className="original-pricefertility1">₹12000</span>
                  </div>
                </div>
                <div className="test-list-cardfertility1">
                  <p className="test-namesfertility1">
                    To examine fetal chromosomes to detect genetic abnormalities
                    and chromosoma
                    <span className="more-linkfertility1">...More</span>
                  </p>
                </div>

                <div className="card-footerfertility1">
                  <span className="reports-labelfertility1">Reports in</span>
                  <span className="terms-tooltipfertility1">
                    (T&C)
                    <span className="tooltip-textfertility1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofertility1">
                    <div className="timing-badgefertility1">21 Hours</div>
                    <div className="vertical-linefertility1"></div>
                    <span className="test-countfertility1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnfertility1"
                        onClick={handleViewCartfertility}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfertility1"
                        onClick={() => handleAddToCartfertility("card8")}
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

      <div className="mainfertility">
        <h1>Showing results for "Fertility" package</h1>
        <div className="card-containermainfertility">
          <div className="card-containerfertility">
            <div className="title-rowfertility">
              <div className="card-titlefertility">
                AMH Profile (Female){" "}
                <span className="dropdown-iconfertility">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefertility">
                ₹2199 <span className="original-pricefertility">₹4000</span>
              </div>
            </div>
            <div className="test-list-cardfertility">
              <p className="test-namesfertility">
                It checks AMH levels & female reproductive system function &
                helps diagnose
                <span className="more-linkfertility">...More</span>
              </p>
            </div>

            <div className="card-footerfertility">
              <span className="reports-labelfertility">Reports in</span>
              <span className="terms-tooltipfertility">
                (T&C)
                <span className="tooltip-textfertility">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofertility">
                <div className="timing-badgefertility">24 Hours</div>
                <div className="vertical-linefertility"></div>
                <span className="test-countfertility">
                  Tests <span>5</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnfertility"
                    onClick={handleViewCartfertility}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfertility"
                    onClick={() => handleAddToCartfertility("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerfertility1">
            <div className="title-rowfertility1">
              <div className="card-titlefertility1">
                Fertility Panel - Female{" "}
                <span className="dropdown-iconfertility1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefertility1">
                ₹2699 <span className="original-pricefertility1">₹3999</span>
              </div>
            </div>
            <div className="test-list-cardfertility1">
              <p className="test-namesfertility1">
                It includes a couple of tests to check hormones & helps diagnose
                infertilit
                <span className="more-linkfertility1">...More</span>
              </p>
            </div>

            <div className="card-footerfertility1">
              <span className="reports-labelfertility1">Reports in</span>
              <span className="terms-tooltipfertility1">
                (T&C)
                <span className="tooltip-textfertility1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofertility1">
                <div className="timing-badgefertility1">48 Hours</div>
                <div className="vertical-linefertility1"></div>
                <span className="test-countfertility1">
                  Tests <span>7</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnfertility1"
                    onClick={handleViewCartfertility}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfertility1"
                    onClick={() => handleAddToCartfertility("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainfertility">
          <div className="card-containerfertility">
            <div className="title-rowfertility">
              <div className="card-titlefertility">
                Fertility Panel - Male{" "}
                <span className="dropdown-iconfertility">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefertility">
                ₹999 <span className="original-pricefertility">₹2830</span>
              </div>
            </div>
            <div className="test-list-cardfertility">
              <p className="test-namesfertility">
                It screens male reproductive health to confirm infertility & aid
                in plannin
              </p>
            </div>

            <div className="card-footerfertility">
              <span className="reports-labelfertility">Reports in</span>
              <span className="terms-tooltipfertility">
                (T&C)
                <span className="tooltip-textfertility">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofertility">
                <div className="timing-badgefertility">15 Hours</div>
                <div className="vertical-linefertility"></div>
                <span className="test-countfertility">
                  Tests <span>7</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnfertility"
                    onClick={handleViewCartfertility}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfertility"
                    onClick={() => handleAddToCartfertility("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerfertility1">
            <div className="title-rowfertility1">
              <div className="card-titlefertility1">
                Anti Phospholipid Antibody (APLA) Panel{" "}
                <span className="dropdown-iconfertility1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricefertility1">
                ₹6000<span className="original-pricefertility1">₹9900</span>
              </div>
            </div>
            <div className="test-list-cardfertility1">
              <p className="test-namesfertility1">
                The test detects and measures B2GP antibodies that may increase
                the risk of
                <span className="more-linkfertility1">...More</span>
              </p>
            </div>

            <div className="card-footerfertility1">
              <span className="reports-labelfertility1">Reports in</span>
              <span className="terms-tooltipfertility1">
                (T&C)
                <span className="tooltip-textfertility1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infofertility1">
                <div className="timing-badgefertility1">5 Hours</div>
                <div className="vertical-linefertility1"></div>
                <span className="test-countfertility1">
                  Tests <span>12</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnfertility1"
                    onClick={handleViewCartfertility}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnfertility1"
                    onClick={() => handleAddToCartfertility("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containerfertility">
            <button
              className="show-more-btnfertility"
              onClick={toggleShowMorePackages}
            >
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermainfertility">
              <div className="card-containerfertility">
                <div className="title-rowfertility">
                  <div className="card-titlefertility">
                    Bad Obstetric History (BOH) Profile- Basic{" "}
                    <span className="dropdown-iconfertility">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefertility">
                    ₹5799
                    <span className="original-pricefertility">₹12100</span>
                  </div>
                </div>
                <div className="test-list-cardfertility">
                  <p className="test-namesfertility">
                    A BOH profile is a set of tests for women with recurrent
                    pregnancy losses o
                    <span className="more-linkfertility">...More</span>
                  </p>
                </div>

                <div className="card-footerfertility">
                  <span className="reports-labelfertility">Reports in</span>
                  <span className="terms-tooltipfertility">
                    (T&C)
                    <span className="tooltip-textfertility">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofertility">
                    <div className="timing-badgefertility">5 Hours</div>
                    <div className="vertical-linefertility"></div>
                    <span className="test-countfertility">
                      Tests <span>11</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnfertility"
                        onClick={handleViewCartfertility}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfertility"
                        onClick={() => handleAddToCartfertility("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerfertility1">
                <div className="title-rowfertility1">
                  <div className="card-titlefertility1">
                    Bad Obstetric History (BOH) Profile- Comprehensive{" "}
                    <span className="dropdown-iconfertility1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricefertility1">
                    ₹10999
                    <span className="original-pricefertility1">₹28600</span>
                  </div>
                </div>
                <div className="test-list-cardfertility1">
                  <p className="test-namesfertility1">
                    Lupus Anticoagulant, APTT, TSH, Phospholipid IgG & IgM,
                    Cardiolipin IgA, Ig
                    <span className="more-linkfertility1">...More</span>
                  </p>
                </div>

                <div className="card-footerfertility1">
                  <span className="reports-labelfertility1">Reports in</span>
                  <span className="terms-tooltipfertility1">
                    (T&C)
                    <span className="tooltip-textfertility1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infofertility1">
                    <div className="timing-badgefertility1">12 Hours</div>
                    <div className="vertical-linefertility1"></div>
                    <span className="test-countfertility1">
                      Tests <span>25</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnfertility1"
                        onClick={handleViewCartfertility}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnfertility1"
                        onClick={() => handleAddToCartfertility("card14")}
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
