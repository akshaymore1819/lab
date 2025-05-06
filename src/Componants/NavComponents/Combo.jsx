import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Combo.css";

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
  });

  const [showAllTests, setShowAllTests] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const toggleShowMoreTests = () => {
    setShowAllTests(!showAllTests);
  };

  const toggleShowMorePackages = () => {
    setShowAllPackages(!showAllPackages);
  };

  const handleAddToCartcombo = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartcombo = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="maincombo">
        <h1>Showing results for "Combo" test</h1>
        <div className="card-containermain1">
          <div className="card-containercombo">
            <div className="title-rowcombo">
              <div className="card-titlecombo">
                p24 antigen with HIV 1&2 Antibody Test{" "}
                <span className="dropdown-iconcombo">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecombo">
                ₹900 <span className="original-pricecombo">₹1600</span>
              </div>
            </div>
            <div className="test-list-cardcombo">
              <p className="test-namescombo">
                The HIV p24 antigen is the most abundant HIV protein and is
                essential for a<span className="more-linkcombo">...More</span>
              </p>
            </div>

            <div className="card-footercombo">
              <span className="reports-labelcombo">Reports in</span>
              <span className="terms-tooltipcombo">
                (T&C)
                <span className="tooltip-textcombo">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocombo">
                <div className="timing-badgecombo">48 Hours</div>
                <div className="vertical-linecombo"></div>
                <span className="test-countcombo">
                  Tests <span>1</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btncombo"
                    onClick={handleViewCartcombo}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncombo"
                    onClick={() => handleAddToCartcombo("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containercombo1">
            <div className="title-rowcombo1">
              <div className="card-titlecombo1">
                VDRL Test{" "}
                <span className="dropdown-iconcombo1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecombo1">
                ₹229 <span className="original-pricecombo1">₹999</span>
              </div>
            </div>
            <div className="test-list-cardcombo1">
              <p className="test-namescombo1">
                This test identifies antibodies your body may produce in
                response to the ba
                <span className="more-linkcombo1">...More</span>
              </p>
            </div>

            <div className="card-footercombo1">
              <span className="reports-labelcombo1">Reports in</span>
              <span className="terms-tooltipcombo1">
                (T&C)
                <span className="tooltip-textcombo1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocombo1">
                <div className="timing-badgecombo1">10 Hours</div>
                <div className="vertical-linecombo1"></div>
                <span className="test-countcombo1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btncombo1"
                    onClick={handleViewCartcombo}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncombo1"
                    onClick={() => handleAddToCartcombo("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containercombo">
            <div className="title-rowcombo">
              <div className="card-titlecombo">
                Hepatitis C (HCV) Viral Load Test By RT PCR{" "}
                <span className="dropdown-iconcombo">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecombo">
                ₹4800 <span className="original-pricecombo">₹12000</span>
              </div>
            </div>
            <div className="test-list-cardcombo">
              <p className="test-namescombo">
                The test shows the presence of HCV to diagnose the HCV
                infection.<span className="more-linkcombo">...More</span>
              </p>
            </div>

            <div className="card-footercombo">
              <span className="reports-labelcombo">Reports in</span>
              <span className="terms-tooltipcombo">
                (T&C)
                <span className="tooltip-textcombo">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocombo">
                <div className="timing-badgecombo">48 Hours</div>
                <div className="vertical-linecombo"></div>
                <span className="test-countcombo">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btncombo"
                    onClick={handleViewCartcombo}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncombo"
                    onClick={() => handleAddToCartcombo("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containercombo1">
            <div className="title-rowcombo1">
              <div className="card-titlecombo1">
                Hepatitis B (HBV) Viral Load Test By RT PCR{" "}
                <span className="dropdown-iconcombo1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecombo1">
                ₹5200 <span className="original-pricecombo1">₹13000</span>
              </div>
            </div>
            <div className="test-list-cardcombo1">
              <p className="test-namescombo1">
                This test diagnoses the chronic Hepatitis B virus (HBV)
                infection.
              </p>
            </div>

            <div className="card-footercombo1">
              <span className="reports-labelcombo1">Reports in</span>
              <span className="terms-tooltipcombo1">
                (T&C)
                <span className="tooltip-textcombo1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocombo1">
                <div className="timing-badgecombo1">48 Hours</div>
                <div className="vertical-linecombo1"></div>
                <span className="test-countcombo1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btncombo1"
                    onClick={handleViewCartcombo}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncombo1"
                    onClick={() => handleAddToCartcombo("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containercombo">
            <button
              className="show-more-btncombo"
              onClick={toggleShowMoreTests}
            >
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermain1">
              <div className="card-containercombo">
                <div className="title-rowcombo">
                  <div className="card-titlecombo">
                    Herpes Simplex Virus (HSV) Types 1 & 2 IgG & IgM Antibodies
                    (Combined){" "}
                    <span className="dropdown-iconcombo">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecombo">
                    ₹1149 <span className="original-pricecombo">₹2280</span>
                  </div>
                </div>
                <div className="test-list-cardcombo">
                  <p className="test-namescombo">
                    This test checks for antibodies against either HSV-1 or
                    HSV-2 to diagnose h
                    <span className="more-linkcombo">...More</span>
                  </p>
                </div>

                <div className="card-footercombo">
                  <span className="reports-labelcombo">Reports in</span>
                  <span className="terms-tooltipcombo">
                    (T&C)
                    <span className="tooltip-textcombo">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocombo">
                    <div className="timing-badgecombo">4 Days</div>
                    <div className="vertical-linecombo"></div>
                    <span className="test-countcombo">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btncombo"
                        onClick={handleViewCartcombo}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncombo"
                        onClick={() => handleAddToCartcombo("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containercombo1">
                <div className="title-rowcombo1">
                  <div className="card-titlecombo1">
                    Chlamydia Trachomatis IgM Antibodies Test{" "}
                    <span className="dropdown-iconcombo1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecombo1">
                    ₹900 <span className="original-pricecombo1">₹1560</span>
                  </div>
                </div>
                <div className="test-list-cardcombo1">
                  <p className="test-namescombo1">
                    This test checks the Chlamydia trachomatis-specific AB, to
                    detects infectio
                    <span className="more-linkcombo1">...More</span>
                  </p>
                </div>

                <div className="card-footercombo1">
                  <span className="reports-labelcombo1">Reports in</span>
                  <span className="terms-tooltipcombo1">
                    (T&C)
                    <span className="tooltip-textcombo1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocombo1">
                    <div className="timing-badgecombo1">4 Days</div>
                    <div className="vertical-linecombo1"></div>
                    <span className="test-countfull">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btncombo1"
                        onClick={handleViewCartcombo}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncombo1"
                        onClick={() => handleAddToCartcombo("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermain1">
              <div className="card-containercombo">
                <div className="title-rowcombo">
                  <div className="card-titlecombo">
                    Human Papillomavirus (HPV) DNA Detector Test{" "}
                    <span className="dropdown-iconcombo">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecombo">
                    ₹1450<span className="original-pricecombo">₹2750</span>
                  </div>
                </div>
                <div className="test-list-cardcombo">
                  <p className="test-namescombo">
                    The test detects the presence of HPV DNA to screen the
                    high-risk HPV types
                    <span className="more-linkcombo">...More</span>
                  </p>
                </div>

                <div className="card-footercombo">
                  <span className="reports-labelcombo">Reports in</span>
                  <span className="terms-tooltipcombo">
                    (T&C)
                    <span className="tooltip-textcombo">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocombo">
                    <div className="timing-badgecombo">6 Days</div>
                    <div className="vertical-linecombo"></div>
                    <span className="test-countcombo">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btncombo"
                        onClick={handleViewCartcombo}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncombo"
                        onClick={() => handleAddToCartcombo("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containercombo1">
                <div className="title-rowcombo1">
                  <div className="card-titlecombo1">
                    Hepatitis B Virus (HBV) DNA Detector, Qualitative Test{" "}
                    <span className="dropdown-iconcombo1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecombo1">
                    ₹4300 <span className="original-pricecombo1">₹10750</span>
                  </div>
                </div>
                <div className="test-list-cardcombo1">
                  <p className="test-namescombo1">
                    HBV PCR has immense diagnostic utility in patients who have
                    inconclusive se
                    <span className="more-linkcombo1">...More</span>
                  </p>
                </div>

                <div className="card-footercombo1">
                  <span className="reports-labelcombo1">Reports in</span>
                  <span className="terms-tooltipcombo1">
                    (T&C)
                    <span className="tooltip-textcombo1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocombo1">
                    <div className="timing-badgecombo1">48 Hours</div>
                    <div className="vertical-linecombo1"></div>
                    <span className="test-countcombo1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btncombo1"
                        onClick={handleViewCartcombo}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncombo1"
                        onClick={() => handleAddToCartcombo("card8")}
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

      <div className="maincombo">
        <h1>Showing results for "Combo" package</h1>
        <div className="card-containermain1">
          <div className="card-containercombo">
            <div className="title-rowcombo">
              <div className="card-titlecombo">
                STD Panel Essential{" "}
                <span className="dropdown-iconcombo">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecombo">
                ₹849 <span className="original-pricecombo">₹1358</span>
              </div>
            </div>
            <div className="test-list-cardcombo">
              <p className="test-namescombo">
                The STD Panel Essential package detects common sexually
                transmitted infecti
                <span className="more-linkcombo">...More</span>
              </p>
            </div>

            <div className="card-footercombo">
              <span className="reports-labelcombo">Reports in</span>
              <span className="terms-tooltipcombo">
                (T&C)
                <span className="tooltip-textcombo">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocombo">
                <div className="timing-badgecombo">15 Hours</div>
                <div className="vertical-linecombo"></div>
                <span className="test-countcombo">
                  Tests <span>4</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btncombo"
                    onClick={handleViewCartcombo}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncombo"
                    onClick={() => handleAddToCartcombo("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containercombo1">
            <div className="title-rowcombo1">
              <div className="card-titlecombo1">
                STD Panel Essential Plus{" "}
                <span className="dropdown-iconcombo1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecombo1">
                ₹2200 <span className="original-pricecombo1">₹2660</span>
              </div>
            </div>
            <div className="test-list-cardcombo1">
              <p className="test-namescombo1">
                This helps find an STD infection to prevent the spread & help
                initiate time<span className="more-linkcombo1">...More</span>
              </p>
            </div>

            <div className="card-footercombo1">
              <span className="reports-labelcombo1">Reports in</span>
              <span className="terms-tooltipcombo1">
                (T&C)
                <span className="tooltip-textcombo1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocombo1">
                <div className="timing-badgecombo1">5 Days</div>
                <div className="vertical-linecombo1"></div>
                <span className="test-countfull">
                  Tests <span>5</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btncombo1"
                    onClick={handleViewCartcombo}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncombo1"
                    onClick={() => handleAddToCartcombo("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermain1">
          <div className="card-containercombo">
            <div className="title-rowcombo">
              <div className="card-titlecombo">
                Viral Markers Rapid Test{" "}
                <span className="dropdown-iconcombo">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecombo">
                ₹799 <span className="original-pricecombo">₹1350</span>
              </div>
            </div>
            <div className="test-list-cardcombo">
              <p className="test-namescombo">
                This blood test detects the presence of antibodies to three
                infectious viru<span className="more-linkcombo">...More</span>
              </p>
            </div>

            <div className="card-footercombo">
              <span className="reports-labelcombo">Reports in</span>
              <span className="terms-tooltipcombo">
                (T&C)
                <span className="tooltip-textcombo">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocombo">
                <div className="timing-badgecombo">12 Hours</div>
                <div className="vertical-linecombo"></div>
                <span className="test-countcombo">
                  Tests <span>3</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btncombo"
                    onClick={handleViewCartcombo}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncombo"
                    onClick={() => handleAddToCartcombo("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containercombo1">
            <div className="title-rowcombo1">
              <div className="card-titlecombo1">
                Advance Full Body Checkup with STD Panel Comprehensive{" "}
                <span className="dropdown-iconcombo1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricecombo1">
                ₹5199 <span className="original-pricecombo1">₹12500</span>
              </div>
            </div>
            <div className="test-list-cardcombo1">
              <p className="test-namescombo1">
                A package looks for HIV, syphilis, herpes, HCV, VDR, HBsAg and
                other STDs w<span className="more-linkcombo1">...More</span>
              </p>
            </div>

            <div className="card-footercombo1">
              <span className="reports-labelcombo1">Reports in</span>
              <span className="terms-tooltipcombo1">
                (T&C)
                <span className="tooltip-textcombo1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infocombo1">
                <div className="timing-badgecombo1">9 Days</div>
                <div className="vertical-linecombo1"></div>
                <span className="test-countcombo1">
                  Tests <span>107</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btncombo1"
                    onClick={handleViewCartcombo}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btncombo1"
                    onClick={() => handleAddToCartcombo("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containercombo">
            <button
              className="show-more-btncombo"
              onClick={toggleShowMorePackages}
            >
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermain1">
              <div className="card-containercombo">
                <div className="title-rowcombo">
                  <div className="card-titlecombo">
                    Premarital Screening Package - Female{" "}
                    <span className="dropdown-iconcombo">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecombo">
                    ₹1799 <span className="original-pricecombo">₹3550</span>
                  </div>
                </div>
                <div className="test-list-cardcombo">
                  <p className="test-namescombo">
                    CBC, ESR, Blood Group, HB HPLC, BSR, LFT, KFT, TSH, Viral
                    Markers (Rapid),
                    <span className="more-linkcombo">...More</span>
                  </p>
                </div>

                <div className="card-footercombo">
                  <span className="reports-labelcombo">Reports in</span>
                  <span className="terms-tooltipcombo">
                    (T&C)
                    <span className="tooltip-textcombo">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocombo">
                    <div className="timing-badgecombo">48 Hours</div>
                    <div className="vertical-linecombo"></div>
                    <span className="test-countcombo">
                      Tests <span>89</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btncombo"
                        onClick={handleViewCartcombo}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncombo"
                        onClick={() => handleAddToCartcombo("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containercombo1">
                <div className="title-rowcombo1">
                  <div className="card-titlecombo1">
                    STD Panel Advance{" "}
                    <span className="dropdown-iconcombo1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricecombo1">
                    ₹3199 <span className="original-pricecombo1">₹7000</span>
                  </div>
                </div>
                <div className="test-list-cardcombo1">
                  <p className="test-namescombo1">
                    Comprehensive screening of STDs like HIV, HCV, Herpes, and
                    Chlamydia for ea
                    <span className="more-linkcombo1">...More</span>
                  </p>
                </div>

                <div className="card-footercombo1">
                  <span className="reports-labelcombo1">Reports in</span>
                  <span className="terms-tooltipcombo1">
                    (T&C)
                    <span className="tooltip-textcombo1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infocombo1">
                    <div className="timing-badgecombo1">4 Days</div>
                    <div className="vertical-linecombo1"></div>
                    <span className="test-countfull">
                      Tests <span>9</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btncombo1"
                        onClick={handleViewCartcombo}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btncombo1"
                        onClick={() => handleAddToCartcombo("card14")}
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
