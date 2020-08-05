import React from "react";
import CookieOption from "./CookieOption";
import bannerStyle from "./bannerStyle";

export default (props = {}) => {
  const {
    styles = {},
    className = "",
    headline = "No headline",
    message = "No text",
    policyLink = "/#",
    privacyPolicyLinkText = "Privacy Policy",
    necessaryOptionText = "Necessary",
    preferencesOptionText = "Preferences",
    statisticsOptionText = "Statistics",
    marketingOptionText = "Marketing",
    showDeclineButton = false,
    acceptButtonText = "Accept",
    declineButtonText = "Decline",
    showPreferencesOption = true,
    showStatisticsOption = true,
    showMarketingOption = true,
    onTogglePreferencesCookies = Function,
    onToggleStatisticsCookies = Function,
    onToggleMarketingCookies = Function,
    onDecline = Function,
    onConfirm = Function
  } = props;

  const {
    dialog: dialogStyle,
    container: containerStyle,
    headline: headlineStyle,
    message: messageStyle,
    policy: policyStyle,
    selectPane: selectPaneStyle,
    optionWrapper: optionWrapperStyle,
    optionLabel: optionLabelStyle,
    checkbox: checkboxStyle,
    buttonWrapper: buttonWrapperStyle,
    button: buttonStyle
  } = { ...bannerStyle, ...styles };

  const cookieOptionStyle = {
    optionWrapperStyle,
    optionLabelStyle,
    checkboxStyle
  };

  return (
    <div className="react-cookie-law-container-outer">
      <div
        className={`react-cookie-law-dialog ${className}`}
        style={dialogStyle}
      >
        <div class="react-cookie-law-picture-container">
          <svg
            class="react-cookie-law-picture"
            viewBox="0 0 571 571"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
          >
            <g transform="matrix(1,0,0,1,-374.506,-289.571)">
              <g transform="matrix(1.27786,0,0,1.27786,-178.697,-243.623)">
                <path
                  d="M605.353,431.157C621.677,427.181 638.724,425.083 656.256,425.083C775.203,425.083 871.772,521.652 871.772,640.598C871.772,759.544 775.203,856.114 656.256,856.114C537.31,856.114 440.741,759.544 440.741,640.598C440.741,620.306 443.551,600.665 448.805,582.058C455.594,587.183 464.047,590.195 473.197,590.195C495.763,590.195 514.084,571.874 514.084,549.308L513.95,546.663C518.407,548.389 523.248,549.308 528.303,549.308C550.869,549.308 569.19,530.987 569.19,508.421C569.19,502.137 567.769,496.181 565.189,490.882L569.19,491.084C591.756,491.084 610.077,472.763 610.077,450.197C610.077,443.319 608.375,436.835 605.353,431.157Z"
                  style="fill:rgb(194,146,79);"
                />
                <clipPath id="_clip1">
                  <path d="M605.353,431.157C621.677,427.181 638.724,425.083 656.256,425.083C775.203,425.083 871.772,521.652 871.772,640.598C871.772,759.544 775.203,856.114 656.256,856.114C537.31,856.114 440.741,759.544 440.741,640.598C440.741,620.306 443.551,600.665 448.805,582.058C455.594,587.183 464.047,590.195 473.197,590.195C495.763,590.195 514.084,571.874 514.084,549.308L513.95,546.663C518.407,548.389 523.248,549.308 528.303,549.308C550.869,549.308 569.19,530.987 569.19,508.421C569.19,502.137 567.769,496.181 565.189,490.882L569.19,491.084C591.756,491.084 610.077,472.763 610.077,450.197C610.077,443.319 608.375,436.835 605.353,431.157Z" />
                </clipPath>
                <g clip-path="url(#_clip1)">
                  <g transform="matrix(0.987412,-0.138682,0.158645,1.12955,254.256,226.533)">
                    <path
                      d="M314.339,162.492C425.599,162.492 520.404,257.831 520.404,369.091C520.404,480.351 425.788,560.677 314.528,560.677C203.268,560.677 112.75,475.341 112.75,364.081C112.75,252.821 203.079,162.492 314.339,162.492Z"
                      style="fill:rgb(214,157,77);"
                    />
                  </g>
                  <g transform="matrix(0.805728,0,0,0.805728,285.516,218.413)">
                    <circle
                      cx="314.339"
                      cy="364.081"
                      r="201.589"
                      style="fill:rgb(225,167,94);"
                    />
                  </g>
                </g>
                <path
                  d="M605.353,431.157C621.677,427.181 638.724,425.083 656.256,425.083C775.203,425.083 871.772,521.652 871.772,640.598C871.772,759.544 775.203,856.114 656.256,856.114C537.31,856.114 440.741,759.544 440.741,640.598C440.741,620.306 443.551,600.665 448.805,582.058C455.594,587.183 464.047,590.195 473.197,590.195C495.763,590.195 514.084,571.874 514.084,549.308L513.95,546.663C518.407,548.389 523.248,549.308 528.303,549.308C550.869,549.308 569.19,530.987 569.19,508.421C569.19,502.137 567.769,496.181 565.189,490.882L569.19,491.084C591.756,491.084 610.077,472.763 610.077,450.197C610.077,443.319 608.375,436.835 605.353,431.157Z"
                  style="fill:none;stroke:rgb(93,73,67);stroke-width:15.65px;"
                />
              </g>
              <g>
                <g transform="matrix(1.29481,0,0,1.29481,-170.254,-207.896)">
                  <circle
                    cx="601.255"
                    cy="732.453"
                    r="37.737"
                    style="fill:rgb(192,137,68);"
                  />
                </g>
                <g transform="matrix(1.19649,0,0,1.19649,-119.204,-161.531)">
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:rgb(126,79,46);"
                  />
                  <clipPath id="_clip2">
                    <circle cx="614.827" cy="759.061" r="39.215" />
                  </clipPath>
                  <g clip-path="url(#_clip2)">
                    <g transform="matrix(0.835776,0,0,0.835776,146.676,118.827)">
                      <circle
                        cx="542.363"
                        cy="746.68"
                        r="46.92"
                        style="fill:rgb(139,88,57);"
                      />
                    </g>
                    <g transform="matrix(0.835776,0,0,0.835776,85.6397,123.997)">
                      <circle
                        cx="611.826"
                        cy="740.494"
                        r="13.17"
                        style="fill:rgb(158,113,83);"
                      />
                    </g>
                  </g>
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:none;stroke:rgb(97,73,62);stroke-width:11.7px;"
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,61.6252,-142.138)">
                <g transform="matrix(1.29481,0,0,1.29481,-170.254,-207.896)">
                  <circle
                    cx="601.255"
                    cy="732.453"
                    r="37.737"
                    style="fill:rgb(192,137,68);"
                  />
                </g>
                <g transform="matrix(1.19649,0,0,1.19649,-119.204,-161.531)">
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:rgb(126,79,46);"
                  />
                  <clipPath id="_clip3">
                    <circle cx="614.827" cy="759.061" r="39.215" />
                  </clipPath>
                  <g clip-path="url(#_clip3)">
                    <g transform="matrix(0.835776,0,0,0.835776,146.676,118.827)">
                      <circle
                        cx="542.363"
                        cy="746.68"
                        r="46.92"
                        style="fill:rgb(139,88,57);"
                      />
                    </g>
                    <g transform="matrix(0.835776,0,0,0.835776,85.6397,123.997)">
                      <circle
                        cx="611.826"
                        cy="740.494"
                        r="13.17"
                        style="fill:rgb(158,113,83);"
                      />
                    </g>
                  </g>
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:none;stroke:rgb(97,73,62);stroke-width:11.7px;"
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,190.078,-61.1653)">
                <g transform="matrix(1.29481,0,0,1.29481,-170.254,-207.896)">
                  <circle
                    cx="601.255"
                    cy="732.453"
                    r="37.737"
                    style="fill:rgb(192,137,68);"
                  />
                </g>
                <g transform="matrix(1.19649,0,0,1.19649,-119.204,-161.531)">
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:rgb(126,79,46);"
                  />
                  <clipPath id="_clip4">
                    <circle cx="614.827" cy="759.061" r="39.215" />
                  </clipPath>
                  <g clip-path="url(#_clip4)">
                    <g transform="matrix(0.835776,0,0,0.835776,146.676,118.827)">
                      <circle
                        cx="542.363"
                        cy="746.68"
                        r="46.92"
                        style="fill:rgb(139,88,57);"
                      />
                    </g>
                    <g transform="matrix(0.835776,0,0,0.835776,85.6397,123.997)">
                      <circle
                        cx="611.826"
                        cy="740.494"
                        r="13.17"
                        style="fill:rgb(158,113,83);"
                      />
                    </g>
                  </g>
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:none;stroke:rgb(97,73,62);stroke-width:11.7px;"
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,190.078,-238.241)">
                <g transform="matrix(1.29481,0,0,1.29481,-170.254,-207.896)">
                  <circle
                    cx="601.255"
                    cy="732.453"
                    r="37.737"
                    style="fill:rgb(192,137,68);"
                  />
                </g>
                <g transform="matrix(1.19649,0,0,1.19649,-119.204,-161.531)">
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:rgb(126,79,46);"
                  />
                  <clipPath id="_clip5">
                    <circle cx="614.827" cy="759.061" r="39.215" />
                  </clipPath>
                  <g clip-path="url(#_clip5)">
                    <g transform="matrix(0.835776,0,0,0.835776,146.676,118.827)">
                      <circle
                        cx="542.363"
                        cy="746.68"
                        r="46.92"
                        style="fill:rgb(139,88,57);"
                      />
                    </g>
                    <g transform="matrix(0.835776,0,0,0.835776,85.6397,123.997)">
                      <circle
                        cx="611.826"
                        cy="740.494"
                        r="13.17"
                        style="fill:rgb(158,113,83);"
                      />
                    </g>
                  </g>
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:none;stroke:rgb(97,73,62);stroke-width:11.7px;"
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,18.3294,-289.225)">
                <g transform="matrix(1.29481,0,0,1.29481,-170.254,-207.896)">
                  <circle
                    cx="601.255"
                    cy="732.453"
                    r="37.737"
                    style="fill:rgb(192,137,68);"
                  />
                </g>
                <g transform="matrix(1.19649,0,0,1.19649,-119.204,-161.531)">
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:rgb(126,79,46);"
                  />
                  <clipPath id="_clip6">
                    <circle cx="614.827" cy="759.061" r="39.215" />
                  </clipPath>
                  <g clip-path="url(#_clip6)">
                    <g transform="matrix(0.835776,0,0,0.835776,146.676,118.827)">
                      <circle
                        cx="542.363"
                        cy="746.68"
                        r="46.92"
                        style="fill:rgb(139,88,57);"
                      />
                    </g>
                    <g transform="matrix(0.835776,0,0,0.835776,85.6397,123.997)">
                      <circle
                        cx="611.826"
                        cy="740.494"
                        r="13.17"
                        style="fill:rgb(158,113,83);"
                      />
                    </g>
                  </g>
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:none;stroke:rgb(97,73,62);stroke-width:11.7px;"
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,-127.151,-163.134)">
                <g transform="matrix(1.29481,0,0,1.29481,-170.254,-207.896)">
                  <circle
                    cx="601.255"
                    cy="732.453"
                    r="37.737"
                    style="fill:rgb(192,137,68);"
                  />
                </g>
                <g transform="matrix(1.19649,0,0,1.19649,-119.204,-161.531)">
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:rgb(126,79,46);"
                  />
                  <clipPath id="_clip7">
                    <circle cx="614.827" cy="759.061" r="39.215" />
                  </clipPath>
                  <g clip-path="url(#_clip7)">
                    <g transform="matrix(0.835776,0,0,0.835776,146.676,118.827)">
                      <circle
                        cx="542.363"
                        cy="746.68"
                        r="46.92"
                        style="fill:rgb(139,88,57);"
                      />
                    </g>
                    <g transform="matrix(0.835776,0,0,0.835776,85.6397,123.997)">
                      <circle
                        cx="611.826"
                        cy="740.494"
                        r="13.17"
                        style="fill:rgb(158,113,83);"
                      />
                    </g>
                  </g>
                  <circle
                    cx="614.827"
                    cy="759.061"
                    r="39.215"
                    style="fill:none;stroke:rgb(97,73,62);stroke-width:11.7px;"
                  />
                </g>
              </g>
              <g>
                <g transform="matrix(1,0,0,1,0,-3.53336)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,-49.3369,-58.7791)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,73.223,-77.6323)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,155.231,-70.0711)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,155.231,-3.53336)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,200.942,-32.9362)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,193.38,-183.54)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,245.363,-144.878)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,296.392,-162.879)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,311.514,-296.493)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,245.363,-348.763)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,152.075,-363.886)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
                <g transform="matrix(1,0,0,1,49.6273,-212.149)">
                  <circle
                    cx="543.763"
                    cy="752.879"
                    r="7.561"
                    style="fill:rgb(97,73,62);"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="react-cookie-law-container" style={containerStyle}>
          <div className="react-cookie-law-headline" style={headlineStyle}>
            {headline}
          </div>
          <div className="react-cookie-law-msg" style={messageStyle}>
            {message}
          </div>

          <div className="react-cookie-law-select-pane" style={selectPaneStyle}>
            <CookieOption
              id="check-required-cookies"
              text={necessaryOptionText}
              styles={cookieOptionStyle}
              disabled
              checked
            />

            {showPreferencesOption && (
              <CookieOption
                id="check-preferences-cookies"
                text={preferencesOptionText}
                styles={cookieOptionStyle}
                onChange={onTogglePreferencesCookies}
                checked
              />
            )}

            {showStatisticsOption && (
              <CookieOption
                id="check-statistics-cookies"
                text={statisticsOptionText}
                styles={cookieOptionStyle}
                onChange={onToggleStatisticsCookies}
                checked
              />
            )}

            {showMarketingOption && (
              <CookieOption
                id="check-marketing-cookies"
                text={marketingOptionText}
                styles={cookieOptionStyle}
                onChange={onToggleMarketingCookies}
              />
            )}
          </div>

          <a
            href={policyLink}
            className="react-cookie-law-policy"
            style={policyStyle}
          >
            {privacyPolicyLinkText}
          </a>

          <div
            className="react-cookie-law-button-wrapper"
            style={buttonWrapperStyle}
          >
            {showDeclineButton && (
              <button
                type="button"
                className="react-cookie-law-decline-btn"
                style={buttonStyle}
                onClick={() => onDecline()}
              >
                <span>{declineButtonText}</span>
              </button>
            )}

            <button
              type="button"
              className="react-cookie-law-accept-btn"
              style={buttonStyle}
              onClick={() => onConfirm()}
            >
              <span>{acceptButtonText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
