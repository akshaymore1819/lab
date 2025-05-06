import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Arthritis.css";

function Arthritis() {
  const [addedCards, setAddedCards] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
    card8: false,
  });

  const [showAllTests, setShowAllTests] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const toggleShowMoreTests = () => {
    setShowAllTests(!showAllTests);
  };

  const toggleShowMorePackages = () => {
    setShowAllPackages(!showAllPackages);
  };

  const handleAddToCartarthritis = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartarthritis = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="mainarthritis">
        <h1>Showing results for "Arthritis" test</h1>
        <div className="card-containermain1">
          <div className="card-containerarthritis">
            <div className="title-rowarthritis">
              <div className="card-titlearthritis">
                Rheumatoid Factor (RA) Quantitative Test{" "}
                <span className="dropdown-iconarthritis">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricearthritis">
                ₹400 <span className="original-pricearthritis">₹840</span>
              </div>
            </div>
            <div className="test-list-cardarthritis">
              <p className="test-namesarthritis">
                This test looks for the level of RA factor in the blood to
                confirm rheumato
                <span className="more-linkarthritis">...More</span>
              </p>
            </div>

            <div className="card-footerarthritis">
              <span className="reports-labelarthritis">Reports in</span>
              <span className="terms-tooltiparthritis">
                (T&C)
                <span className="tooltip-textarthritis">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoarthritis">
                <div className="timing-badgearthritis">10 Hours</div>
                <div className="vertical-linearthritis"></div>
                <span className="test-countarthritis">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnarthritis"
                    onClick={handleViewCartarthritis}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnarthritis"
                    onClick={() => handleAddToCartarthritis("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerarthritis1">
            <div className="title-rowarthritis1">
              <div className="card-titlearthritis1">
                Anti Centromere Antibodies Test{" "}
                <span className="dropdown-iconarthritis1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricearthritis1">
                ₹1500 <span className="original-pricearthritis1">₹2900</span>
              </div>
            </div>
            <div className="test-list-cardarthritis1">
              <p className="test-namesarthritis1">
                To diagnose autoimmune disorders like systemic scleroderma and
                CREST syndro
                <span className="more-linkarthritis1">...More</span>
              </p>
            </div>

            <div className="card-footerarthritis1">
              <span className="reports-labelarthritis1">Reports in</span>
              <span className="terms-tooltiparthritis1">
                (T&C)
                <span className="tooltip-textarthritis1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoarthritis1">
                <div className="timing-badgearthritis1">6 Hours</div>
                <div className="vertical-linearthritis1"></div>
                <span className="test-countarthritis1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnarthritis1"
                    onClick={handleViewCartarthritis}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnarthritis1"
                    onClick={() => handleAddToCartarthritis("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containerarthritis">
            <div className="title-rowarthritis">
              <div className="card-titlearthritis">
                DsDNA Anti Double Stranded DNA IgG Test By EIA{" "}
                <span className="dropdown-iconarthritis">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricearthritis">
                ₹1300 <span className="original-pricearthritis">₹3875</span>
              </div>
            </div>
            <div className="test-list-cardarthritis">
              <p className="test-namesarthritis">
                Ds-DNA (Double Strand) Antibody Quantitative
              </p>
            </div>

            <div className="card-footerarthritis">
              <span className="reports-labelarthritis">Reports in</span>
              <span className="terms-tooltiparthritis">
                (T&C)
                <span className="tooltip-textarthritis">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoarthritis">
                <div className="timing-badgearthritis">4 Hours</div>
                <div className="vertical-linearthritis"></div>
                <span className="test-countarthritis">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnarthritis"
                    onClick={handleViewCartarthritis}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnarthritis"
                    onClick={() => handleAddToCartarthritis("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerarthritis1">
            <div className="title-rowarthritis1">
              <div className="card-titlearthritis1">
                SS-A (Ro) IgG Antibodies Test{" "}
                <span className="dropdown-iconarthritis1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricearthritis1">
                ₹1600 <span className="original-pricearthritis1">₹3200</span>
              </div>
            </div>
            <div className="test-list-cardarthritis1">
              <p className="test-namesarthritis1">
                SS-A and SS-B antibodies IgG tests evaluate signs of connective
                tissue diso<span className="more-linkarthritis1">...More</span>
              </p>
            </div>

            <div className="card-footerarthritis1">
              <span className="reports-labelarthritis1">Reports in</span>
              <span className="terms-tooltiparthritis1">
                (T&C)
                <span className="tooltip-textarthritis1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infoarthritis1">
                <div className="timing-badgearthritis1">6 Hours</div>
                <div className="vertical-linearthritis1"></div>
                <span className="test-countarthritis1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnarthritis1"
                    onClick={handleViewCartarthritis}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnarthritis1"
                    onClick={() => handleAddToCartarthritis("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containerarthritis">
            <button
              className="show-more-btnarthritis"
              onClick={toggleShowMoreTests}
            >
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermain1">
              <div className="card-containerarthritis">
                <div className="title-rowarthritis">
                  <div className="card-titlearthritis">
                    SCL-70 IgG Antibodies Test{" "}
                    <span className="dropdown-iconarthritis">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricearthritis">
                    ₹1300 <span className="original-pricearthritis">₹2500</span>
                  </div>
                </div>
                <div className="test-list-cardarthritis">
                  <p className="test-namesarthritis">
                    The Scl 70 antibody test detects the presence of scleroderma
                    (a disease inv
                    <span className="more-linkarthritis">...More</span>
                  </p>
                </div>

                <div className="card-footerarthritis">
                  <span className="reports-labelarthritis">Reports in</span>
                  <span className="terms-tooltiparthritis">
                    (T&C)
                    <span className="tooltip-textarthritis">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoarthritis">
                    <div className="timing-badgearthritis">6 Hours</div>
                    <div className="vertical-linearthritis"></div>
                    <span className="test-countarthritis">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnarthritis"
                        onClick={handleViewCartarthritis}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnarthritis"
                        onClick={() => handleAddToCartarthritis("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerarthritis1">
                <div className="title-rowarthritis1">
                  <div className="card-titlearthritis1">
                    SS-B (La) IgG Antibodies Test{" "}
                    <span className="dropdown-iconarthritis1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricearthritis1">
                    ₹1600{" "}
                    <span className="original-pricearthritis1">₹3200</span>
                  </div>
                </div>
                <div className="test-list-cardarthritis1">
                  <p className="test-namesarthritis1">
                    SS-B/La antibodies test detects lupus erythematosus and
                    Sjogren syndrome in
                    <span className="more-linkarthritis1">...More</span>
                  </p>
                </div>

                <div className="card-footerarthritis1">
                  <span className="reports-labelarthritis1">Reports in</span>
                  <span className="terms-tooltiparthritis1">
                    (T&C)
                    <span className="tooltip-textarthritis1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoarthritis1">
                    <div className="timing-badgearthritis1">6 Hours</div>
                    <div className="vertical-linearthritis1"></div>
                    <span className="test-countfull">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnarthritis1"
                        onClick={handleViewCartarthritis}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnarthritis1"
                        onClick={() => handleAddToCartarthritis("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermain1">
              <div className="card-containerarthritis">
                <div className="title-rowarthritis">
                  <div className="card-titlearthritis">
                    Smith (Sm) IgG Antibodies Test{" "}
                    <span className="dropdown-iconarthritis">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricearthritis">
                    ₹1100 <span className="original-pricearthritis">₹2000</span>
                  </div>
                </div>
                <div className="test-list-cardarthritis">
                  <p className="test-namesarthritis">
                    The Smith SM IgG antibody test screen the presence of
                    systemic lupus erythe
                    <span className="more-linkarthritis">...More</span>
                  </p>
                </div>

                <div className="card-footerarthritis">
                  <span className="reports-labelarthritis">Reports in</span>
                  <span className="terms-tooltiparthritis">
                    (T&C)
                    <span className="tooltip-textarthritis">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoarthritis">
                    <div className="timing-badgearthritis">6 Hours</div>
                    <div className="vertical-linearthritis"></div>
                    <span className="test-countarthritis">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnarthritis"
                        onClick={handleViewCartarthritis}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnarthritis"
                        onClick={() => handleAddToCartarthritis("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerarthritis1">
                <div className="title-rowarthritis1">
                  <div className="card-titlearthritis1">
                    Beta Crosslaps (Beta CTX) (CTX-1) Test{" "}
                    <span className="dropdown-iconarthritis1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricearthritis1">
                    ₹1800{" "}
                    <span className="original-pricearthritis1">₹3520</span>
                  </div>
                </div>
                <div className="test-list-cardarthritis1">
                  <p className="test-namesarthritis1">
                    The beta-crosslaps-beta-ctx-ctx1 test reports enhanced bone
                    resorption with
                    <span className="more-linkarthritis1">...More</span>
                  </p>
                </div>

                <div className="card-footerarthritis1">
                  <span className="reports-labelarthritis1">Reports in</span>
                  <span className="terms-tooltiparthritis1">
                    (T&C)
                    <span className="tooltip-textarthritis1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infoarthritis1">
                    <div className="timing-badgearthritis1">6 Hours</div>
                    <div className="vertical-linearthritis1"></div>
                    <span className="test-countarthritis1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnarthritis1"
                        onClick={handleViewCartarthritis}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnarthritis1"
                        onClick={() => handleAddToCartarthritis("card8")}
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

export default Arthritis;
