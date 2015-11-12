/*eslint-disable no-unused-vars*/
import React from "react";
/*eslint-enable no-unused-vars*/

function isTopFrame() {
  try {
    return window.self === window.top;
  } catch (e) {
    return true;
  }
}

const BannerPlugin = {

  configuration: {
    backgroundColor: "#1E232F",
    foregroundColor: "#FFFFFF",
    headerTitle: null,
    headerContent: null,
    footerContent: null,
    imagePath: null,
    dismissible: null
  },

  enabled: false,

  /**
   * @param  {Object} Plugins The Plugins API
   */
  initialize: function (Plugins) {
    Plugins.addAction("applicationIsMounted",
      this.applicationIsMounted.bind(this)
    );
    Plugins.addFilter("applicationContents",
      this.applicationContents.bind(this)
    );
    Plugins.addFilter(
      "renderOverlayNewWindowButton",
      this.renderOverlayNewWindowButton.bind(this)
    );
  },

  configure: function (configuration) {
    // Only merge keys that have a non-null value
    Object.keys(configuration).forEach((key) => {
      if (configuration[key] != null) {
        this.configuration[key] = configuration[key];
      }
    });
  },

  isEnabled: function () {
    let configuration = this.configuration;

    return configuration.headerTitle ||
      configuration.headerContent ||
      configuration.footerContent ||
      configuration.imagePath;
  },

  applicationIsMounted: function () {
    if (this.isEnabled() === false || !isTopFrame()) {
      return;
    }

    let frame = document.getElementById("banner-plugin-iframe");
    if (frame == null) {
      return;
    }

    if (this.historyListenerAdded) {
      return;
    }

    this.historyListenerAdded = true;
    let frameWindow = frame.contentWindow;
    let topWindow = window;

    frameWindow.addEventListener("popstate", function () {
      topWindow.location.hash = frameWindow.location.hash;
    });
  },

  applicationContents: function () {
    if (this.isEnabled() === false || !isTopFrame()) {
      return null;
    }

    return (
      <div className="banner-plugin-wrapper">
        {this.getHeader()}

        <iframe
          frameBorder="0"
          id="banner-plugin-iframe"
          src={window.location.href} />

        {this.getFooter()}
      </div>
    );
  },

  renderOverlayNewWindowButton: function (button) {
    if (this.isEnabled()) {
      return null;
    }

    return button;
  },

  getColorStyles: function () {
    return {
      color: this.configuration.foregroundColor,
      backgroundColor: this.configuration.backgroundColor
    };
  },

  getIcon: function () {
    let imagePath = this.configuration.imagePath;

    if (imagePath == null || imagePath === "") {
      return null;
    }

    return (
      <span className="
        icon
        icon-small
        icon-image-container
        icon-app-container">
        <img src={imagePath} />
      </span>
    );
  },

  getTitle: function () {
    let title = this.configuration.headerTitle;

    if (title == null || title === "") {
      return null;
    }

    return (
      <h5
        className="title flush-top flush-bottom"
        style={{color: this.configuration.foregroundColor}}>
        {title}
      </h5>
    );
  },

  getHeaderContent: function () {
    let content = this.configuration.headerContent;

    if (content == null || content === "") {
      return null;
    }

    return (
      <span className="content" title={content}>
        {content}
      </span>
    );
  },

  getHeader: function () {
    let icon = this.getIcon();
    let title = this.getTitle();
    let content = this.getHeaderContent();

    if (icon == null && title == null && content == null) {
      return null;
    }

    return (
      <header style={this.getColorStyles()}>
        <span>
          {icon}
          {title}
        </span>
        {content}
      </header>
    );
  },

  getFooter: function () {
    let content = this.configuration.footerContent;

    if (content == null || content === "") {
      return null;
    }

    return (
      <footer style={this.getColorStyles()}>
        <span className="content" title={content}>
          {content}
        </span>
      </footer>
    );
  }

};

export default BannerPlugin;
