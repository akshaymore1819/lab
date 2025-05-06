import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import "./Lifestyle.css";

function Lifestyle() {
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

  const handleAddToCartlifestyle = (cardId) => {
    setAddedCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));
  };

  const handleViewCartlifestyle = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <div className="mainlifestyle">
        <h1>Showing results for "Lifestyle" test</h1>
        <div className="card-containermainlifestyle">
          <div className="card-containerlifestyle">
            <div className="title-rowlifestyle">
              <div className="card-titlelifestyle">
              Quantiferon TB IGRA Test{" "}
                <span className="dropdown-iconlifestyle">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricelifestyle">
                ₹2399 <span className="original-pricelifestyle">₹5100</span>
              </div>
            </div>
            <div className="test-list-cardlifestyle">
              <p className="test-nameslifestyle">
              This detects Mycobacterium tuberculosis bacterium to diagnose TB & get trea
                <span className="more-linklifestyle">...More</span>
              </p>
            </div>

            <div className="card-footerlifestyle">
              <span className="reports-labellifestyle">Reports in</span>
              <span className="terms-tooltiplifestyle">
                (T&C)
                <span className="tooltip-textlifestyle">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infolifestyle">
                <div className="timing-badgelifestyle">72 Hours</div>
                <div className="vertical-linelifestyle"></div>
                <span className="test-countlifestyle">
                  Tests <span>4</span>
                </span>

                {addedCards.card1 ? (
                  <button
                    className="view-cart-btnlifestyle"
                    onClick={handleViewCartlifestyle}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnlifestyle"
                    onClick={() => handleAddToCartlifestyle("card1")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerlifestyle1">
            <div className="title-rowlifestyle1">
              <div className="card-titlelifestyle1">
              HIV Early Screen Test {" "}
                <span className="dropdown-iconlifestyle1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricelifestyle1">
                ₹900 <span className="original-pricelifestyle1">₹1000</span>
              </div>
            </div>
            <div className="test-list-cardlifestyle1">
              <p className="test-nameslifestyle1">
              This finds HIV infection to help you avoid transmission & start treatment t
                <span className="more-linklifestyle1">...More</span>
              </p>
            </div>

            <div className="card-footerlifestyle1">
              <span className="reports-labellifestyle1">Reports in</span>
              <span className="terms-tooltiplifestyle1">
                (T&C)
                <span className="tooltip-textlifestyle1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infolifestyle1">
                <div className="timing-badgelifestyle1">24 Hours</div>
                <div className="vertical-linelifestyle1"></div>
                <span className="test-countlifestyle1">
                  Tests <span>1</span>
                </span>

                {addedCards.card2 ? (
                  <button
                    className="view-cart-btnlifestyle1"
                    onClick={handleViewCartlifestyle}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnlifestyle1"
                    onClick={() => handleAddToCartlifestyle("card2")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainlifestyle">
          <div className="card-containerlifestyle">
            <div className="title-rowlifestyle">
              <div className="card-titlelifestyle">
              Drugs Of Abuse: Benzodiazepines Test {" "}
                <span className="dropdown-iconlifestyle">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricelifestyle">
                ₹700 <span className="original-pricelifestyle">₹1540</span>
              </div>
            </div>
            <div className="test-list-cardlifestyle">
              <p className="test-nameslifestyle">
              The drugs-of-abuse-benzodiazepines test detects the benzodiazepine levels i
                <span className="more-linklifestyle">...More</span>
              </p>
            </div>

            <div className="card-footerlifestyle">
              <span className="reports-labellifestyle">Reports in</span>
              <span className="terms-tooltiplifestyle">
                (T&C)
                <span className="tooltip-textlifestyle">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infolifestyle">
                <div className="timing-badgelifestyle">48 Hours</div>
                <div className="vertical-linelifestyle"></div>
                <span className="test-countlifestyle">
                  Tests <span>1</span>
                </span>

                {addedCards.card3 ? (
                  <button
                    className="view-cart-btnlifestyle"
                    onClick={handleViewCartlifestyle}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnlifestyle"
                    onClick={() => handleAddToCartlifestyle("card3")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerlifestyle1">
            <div className="title-rowlifestyle1">
              <div className="card-titlelifestyle1">
              Drugs Of Abuse - Urine: Methadone Test {" "}
                <span className="dropdown-iconlifestyle1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricelifestyle1">
                ₹800 <span className="original-pricelifestyle1">₹1540</span>
              </div>
            </div>
            <div className="test-list-cardlifestyle1">
              <p className="test-nameslifestyle1">
              This test detects methadone traces in urine to ensure appropriate use of do
                <span className="more-linklifestyle1">...More</span>
              </p>
            </div>

            <div className="card-footerlifestyle1">
              <span className="reports-labellifestyle1">Reports in</span>
              <span className="terms-tooltiplifestyle1">
                (T&C)
                <span className="tooltip-textlifestyle1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infolifestyle1">
                <div className="timing-badgelifestyle1">48 Hours</div>
                <div className="vertical-linelifestyle1"></div>
                <span className="test-countlifestyle1">
                  Tests <span>1</span>
                </span>

                {addedCards.card4 ? (
                  <button
                    className="view-cart-btnlifestyle1"
                    onClick={handleViewCartlifestyle}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnlifestyle1"
                    onClick={() => handleAddToCartlifestyle("card4")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllTests && (
          <div className="show-more-containerlifestyle">
            <button
              className="show-more-btnlifestyle"
              onClick={toggleShowMoreTests}
            >
              Show More
            </button>
          </div>
        )}

        {showAllTests && (
          <>
            <div className="card-containermainlifestyle">
              <div className="card-containerlifestyle">
                <div className="title-rowlifestyle">
                  <div className="card-titlelifestyle">
                  ANA Profile - Qualitative Test {" "}
                    <span className="dropdown-iconlifestyle">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricelifestyle">
                    ₹3299 <span className="original-pricelifestyle">₹10600</span>
                  </div>
                </div>
                <div className="test-list-cardlifestyle">
                  <p className="test-namesheart">
                  This measure ANA in the blood to diagnose & determine the type of an autoim
                    <span className="more-linklifestyle">...More</span>
                  </p>
                </div>

                <div className="card-footerlifestyle">
                  <span className="reports-labellifestyle">Reports in</span>
                  <span className="terms-tooltiplifestyle">
                    (T&C)
                    <span className="tooltip-textlifestyle">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infolifestyle">
                    <div className="timing-badgelifestyle">5 Hours</div>
                    <div className="vertical-linelifestyle"></div>
                    <span className="test-countlifestyle">
                      Tests <span>17</span>
                    </span>

                    {addedCards.card5 ? (
                      <button
                        className="view-cart-btnlifestyle"
                        onClick={handleViewCartlifestyle}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnlifestyle"
                        onClick={() => handleAddToCartlifestyle("card5")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerlifestyle1">
                <div className="title-rowlifestyle1">
                  <div className="card-titlelifestyle1">
                  Beta 2 Glycoprotein IgM Test{" "}
                    <span className="dropdown-iconlifestyle1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricelifestyle1">
                    ₹1000<span className="original-pricelifestyle1">₹2000</span>
                  </div>
                </div>
                <div className="test-list-cardlifestyle1">
                  <p className="test-nameslifestyle1">
                  This detects IgM antibodies against Beta-2 Glycoprotein to determine the ca
                    <span className="more-linklifestyle1">...More</span>
                  </p>
                </div>

                <div className="card-footerlifestyle1">
                  <span className="reports-labellifestyle1">Reports in</span>
                  <span className="terms-tooltiplifestyle1">
                    (T&C)
                    <span className="tooltip-textlifestyle1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infolifestyle1">
                    <div className="timing-badgelifestyle1">4 Hours</div>
                    <div className="vertical-linelifestyle1"></div>
                    <span className="test-countlifestyle1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card6 ? (
                      <button
                        className="view-cart-btnlifestyle1"
                        onClick={handleViewCartlifestyle}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnlifestyle1"
                        onClick={() => handleAddToCartlifestyle("card6")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainlifestyle">
              <div className="card-containerlifestyle">
                <div className="title-rowlifestyle">
                  <div className="card-titlelifestyle">
                  Manganese 24Hrs Urine Test  {" "}
                    <span className="dropdown-iconlifestyle">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricelifestyle">
                    ₹2100<span className="original-pricelifestyle">₹5498</span>
                  </div>
                </div>
                <div className="test-list-cardlifestyle">
                  <p className="test-nameslifestyle">
                  To detect Manganese toxicity or deficiency that may alter growth, skeletal,
                    <span className="more-linklifestyle">...More</span>
                  </p>
                </div>

                <div className="card-footerlifestyle">
                  <span className="reports-labellifestyle">Reports in</span>
                  <span className="terms-tooltiplifestyle">
                    (T&C)
                    <span className="tooltip-textlifestyle">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infolifestyle">
                    <div className="timing-badgelifestyle">6 Hours</div>
                    <div className="vertical-linelifestyle"></div>
                    <span className="test-countlifestyle">
                      Tests <span>2</span>
                    </span>

                    {addedCards.card7 ? (
                      <button
                        className="view-cart-btnlifestyle"
                        onClick={handleViewCartlifestyle}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnlifestyle"
                        onClick={() => handleAddToCartlifestyle("card7")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerlifestyle1">
                <div className="title-rowlifestyle1">
                  <div className="card-titlelifestyle1">
                  Hepatitis B Surface Antigen (HBsAg), Quantitative Test {" "}
                    <span className="dropdown-iconlifestyle1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricelifestyle1">
                    ₹999
                    <span className="original-pricelifestyle1">₹3100</span>
                  </div>
                </div>
                <div className="test-list-cardlifestyle1">
                  <p className="test-nameslifestyle1">
                  It measures HBsAg levels in the blood to help diagnose or monitor HBV infec
                    <span className="more-linklifestyle1">...More</span>
                  </p>
                </div>

                <div className="card-footerlifestyle1">
                  <span className="reports-labellifestyle1">Reports in</span>
                  <span className="terms-tooltiplifestyle1">
                    (T&C)
                    <span className="tooltip-textlifestyle1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infolifestyle1">
                    <div className="timing-badgelifestyle1">48 Hours</div>
                    <div className="vertical-linelifestyle1"></div>
                    <span className="test-countlifestyle1">
                      Tests <span>1</span>
                    </span>

                    {addedCards.card8 ? (
                      <button
                        className="view-cart-btnlifestyle1"
                        onClick={handleViewCartlifestyle}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnlifestyle1"
                        onClick={() => handleAddToCartlifestyle("card8")}
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

      <div className="mainlifestyle">
        <h1>Showing results for "Lifestyle" package</h1>
        <div className="card-containermainlifestyle">
          <div className="card-containerlifestyle">
            <div className="title-rowlifestyle">
              <div className="card-titlelifestyle">
              Weight Management Screening {" "}
                <span className="dropdown-iconlifestyle">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricelifestyle">
                ₹399 <span className="original-pricelifestyle">₹980</span>
              </div>
            </div>
            <div className="test-list-cardlifestyle">
              <p className="test-nameslifestyle">
              The test helps diagnose obesity and aids doctors suggest improvements for g
                <span className="more-linklifestyle">...More</span>
              </p>
            </div>

            <div className="card-footerlifestyle">
              <span className="reports-labellifestyle">Reports in</span>
              <span className="terms-tooltiplifestyle">
                (T&C)
                <span className="tooltip-textlifestyle">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infolifestyle">
                <div className="timing-badgelifestyle">15 Hours</div>
                <div className="vertical-linelifestyle"></div>
                <span className="test-countlifestyle">
                  Tests <span>13</span>
                </span>

                {addedCards.card9 ? (
                  <button
                    className="view-cart-btnlifestyle"
                    onClick={handleViewCartlifestyle}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnlifestyle"
                    onClick={() => handleAddToCartlifestyle("card9")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerlifestyle1">
            <div className="title-rowlifestyle1">
              <div className="card-titlelifestyle1">
              BP Monitoring Package- Essential {" "}
                <span className="dropdown-iconlifestyle1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricelifestyle1">
                ₹499 <span className="original-pricelifestyle1">₹1400</span>
              </div>
            </div>
            <div className="test-list-cardlifestyle1">
              <p className="test-nameslifestyle1">
              It tracks BP levels over time to diagnose and manage hypertension & related
                <span className="more-linklifestyle1">...More</span>
              </p>
            </div>

            <div className="card-footerlifestyle1">
              <span className="reports-labellifestyle1">Reports in</span>
              <span className="terms-tooltiplifestyle1">
                (T&C)
                <span className="tooltip-textlifestyle1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infolifestyle1">
                <div className="timing-badgelifestyle1">15 Hours</div>
                <div className="vertical-linelifestyle1"></div>
                <span className="test-countlifestyle1">
                  Tests <span>49</span>
                </span>

                {addedCards.card10 ? (
                  <button
                    className="view-cart-btnlifestyle1"
                    onClick={handleViewCartlifestyle}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnlifestyle1"
                    onClick={() => handleAddToCartlifestyle("card10")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-containermainlifestyle">
          <div className="card-containerlifestyle">
            <div className="title-rowlifestyle">
              <div className="card-titlelifestyle">
              Liver Kidney Function Profile {" "}
                <span className="dropdown-iconlifestyle">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricelifestyle">
                ₹999 <span className="original-pricelifestyle">₹1510</span>
              </div>
            </div>
            <div className="test-list-cardlifestyle">
              <p className="test-nameslifestyle">
              The test determines the health of your liver to identify the risk of liver
              </p>
            </div>

            <div className="card-footerlifestyle">
              <span className="reports-labellifestyle">Reports in</span>
              <span className="terms-tooltiplifestyle">
                (T&C)
                <span className="tooltip-textlifestyle">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infolifestyle">
                <div className="timing-badgelifestyle">12 Hours</div>
                <div className="vertical-linelifestyle"></div>
                <span className="test-countlifestyle">
                  Tests <span>48</span>
                </span>

                {addedCards.card11 ? (
                  <button
                    className="view-cart-btnlifestyle"
                    onClick={handleViewCartlifestyle}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnlifestyle"
                    onClick={() => handleAddToCartlifestyle("card11")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card-containerlifestyle1">
            <div className="title-rowlifestyle1">
              <div className="card-titlelifestyle1">
              Low Energy Screening Package {" "}
                <span className="dropdown-iconlifestyle1">
                  <FiChevronDown />
                </span>
              </div>
              <div className="pricelifestyle1">
                ₹399 <span className="original-pricelifestyle1">₹1380</span>
              </div>
            </div>
            <div className="test-list-cardlifestyle1">
              <p className="test-nameslifestyle1">
              The test helps diagnose the root cause of constant fatigue or other low-ene
                <span className="more-linklifestyle1">...More</span>
              </p>
            </div>

            <div className="card-footerlifestyle1">
              <span className="reports-labellifestyle1">Reports in</span>
              <span className="terms-tooltiplifestyle1">
                (T&C)
                <span className="tooltip-textlifestyle1">
                  <strong>Terms & Conditions</strong>
                  <br />
                  Report time varies with time of sample collection.
                </span>
              </span>

              <div className="timing-infolifestyle1">
                <div className="timing-badgelifestyle1">15 Hours</div>
                <div className="vertical-linelifestyle1"></div>
                <span className="test-countlifestyle1">
                  Tests <span>34</span>
                </span>

                {addedCards.card12 ? (
                  <button
                    className="view-cart-btnlifestyle1"
                    onClick={handleViewCartlifestyle}
                  >
                    View Cart <Minus size={14} />
                  </button>
                ) : (
                  <button
                    className="add-btnlifestyle1"
                    onClick={() => handleAddToCartlifestyle("card12")}
                  >
                    Add <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showAllPackages && (
          <div className="show-more-containerlifestyle">
            <button
              className="show-more-btnlifestyle"
              onClick={toggleShowMorePackages}
            >
              Show More
            </button>
          </div>
        )}

        {showAllPackages && (
          <>
            <div className="card-containermainlifestyle">
              <div className="card-containerlifestyle">
                <div className="title-rowlifestyle">
                  <div className="card-titlelifestyle">
                  Fatigue Syndrome Test{" "}
                    <span className="dropdown-iconlifestyle">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricelifestyle">
                    ₹1499 <span className="original-pricelifestyle">₹5420</span>
                  </div>
                </div>
                <div className="test-list-cardlifestyle">
                  <p className="test-nameslifestyle">
                  It helps diagnose the cause behind chronic fatigue & help a doctor guide tr
                    <span className="more-linklifestyle">...More</span>
                  </p>
                </div>

                <div className="card-footerlifestyle">
                  <span className="reports-labellifestyle">Reports in</span>
                  <span className="terms-tooltiplifestyle">
                    (T&C)
                    <span className="tooltip-textlifestyle">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infolifestyle">
                    <div className="timing-badgelifestyle">15 Hours</div>
                    <div className="vertical-linelifestyle"></div>
                    <span className="test-countlifestyle">
                      Tests <span>62</span>
                    </span>

                    {addedCards.card13 ? (
                      <button
                        className="view-cart-btnlifestyle"
                        onClick={handleViewCartlifestyle}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnlifestyle"
                        onClick={() => handleAddToCartlifestyle("card13")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerlifestyle1">
                <div className="title-rowlifestyle1">
                  <div className="card-titlelifestyle1">
                  Hypertension Profile Advance {" "}
                    <span className="dropdown-iconlifestyle1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricelifestyle1">
                    ₹1299
                    <span className="original-pricelifestyle1">₹3000</span>
                  </div>
                </div>
                <div className="test-list-cardlifestyle1">
                  <p className="test-nameslifestyle1">
                  This finds the cause of hypertension, evaluates overall health, & monitors
                    <span className="more-linklifestyle1">...More</span>
                  </p>
                </div>

                <div className="card-footerlifestyle1">
                  <span className="reports-labellifestyle1">Reports in</span>
                  <span className="terms-tooltiplifestyle1">
                    (T&C)
                    <span className="tooltip-textlifestyle1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infolifestyle1">
                    <div className="timing-badgelifestyle1">48 Hours</div>
                    <div className="vertical-linelifestyle1"></div>
                    <span className="test-countlifestyle1">
                      Tests <span>52</span>
                    </span>

                    {addedCards.card14 ? (
                      <button
                        className="view-cart-btnlifestyle1"
                        onClick={handleViewCartlifestyle}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnlifestyle1"
                        onClick={() => handleAddToCartlifestyle("card14")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-containermainlifestyle">
              <div className="card-containerlifestyle">
                <div className="title-rowlifestyle">
                  <div className="card-titlelifestyle">
                  Fitness Check package {" "}
                    <span className="dropdown-iconlifestyle">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricelifestyle">
                    ₹1599 <span className="original-pricelifestyle">₹3997</span>
                  </div>
                </div>
                <div className="test-list-cardlifestyle">
                  <p className="test-nameslifestyle">
                  The package covers different parameters to detect abnormalities (if any) an
                  </p>
                </div>

                <div className="card-footerlifestyle">
                  <span className="reports-labellifestyle">Reports in</span>
                  <span className="terms-tooltiplifestyle">
                    (T&C)
                    <span className="tooltip-textlifestyle">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infolifestyle">
                    <div className="timing-badgelifestyle">15 Hours</div>
                    <div className="vertical-linelifestyle"></div>
                    <span className="test-countlifestyle">
                      Tests <span>63</span>
                    </span>

                    {addedCards.card15 ? (
                      <button
                        className="view-cart-btnlifestyle"
                        onClick={handleViewCartlifestyle}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnlifestyle"
                        onClick={() => handleAddToCartlifestyle("card15")}
                      >
                        Add <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-containerlifestyle1">
                <div className="title-rowlifestyle1">
                  <div className="card-titlelifestyle1">
                  Acne (Pimples) Panel {" "}
                    <span className="dropdown-iconlifestyle1">
                      <FiChevronDown />
                    </span>
                  </div>
                  <div className="pricelifestyle1">
                    ₹2499
                    <span className="original-pricelifestyle1">₹4180</span>
                  </div>
                </div>
                <div className="test-list-cardlifestyle1">
                  <p className="test-nameslifestyle1">
                  Acne Panel, which typically includes tests like Lipid Profile, FSH, Prolact
                    <span className="more-linklifestyle1">...More</span>
                  </p>
                </div>

                <div className="card-footerlifestyle1">
                  <span className="reports-labellifestyle1">Reports in</span>
                  <span className="terms-tooltiplifestyle1">
                    (T&C)
                    <span className="tooltip-textlifestyle1">
                      <strong>Terms & Conditions</strong>
                      <br />
                      Report time varies with time of sample collection.
                    </span>
                  </span>

                  <div className="timing-infolifestyle1">
                    <div className="timing-badgelifestyle1">15 Hours</div>
                    <div className="vertical-linelifestyle1"></div>
                    <span className="test-countlifestyle1">
                      Tests <span>15</span>
                    </span>

                    {addedCards.card16 ? (
                      <button
                        className="view-cart-btnlifestyle1"
                        onClick={handleViewCartlifestyle}
                      >
                        View Cart <Minus size={14} />
                      </button>
                    ) : (
                      <button
                        className="add-btnlifestyle1"
                        onClick={() => handleAddToCartlifestyle("card16")}
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

export default Lifestyle;
