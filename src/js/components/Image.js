import classNames from 'classnames/dedupe';
import React from 'react';

import Util from '../utils/Util';

const METHODS_TO_BIND = ['onImageError'];

class Image extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      imageErrorCount: 0
    };

    METHODS_TO_BIND.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    let {src, fallbackSrc} = this.props;
    let newSrc;
    if (src !== nextProps.src) {
      newSrc = nextProps.src;
    }

    if (src === nextProps.src && fallbackSrc !== nextProps.fallbackSrc) {
      newSrc = nextProps.fallbackSrc;
    }

    // Try again if a new url was provided
    if (newSrc) {
      this.image.src = newSrc;
      this.setState({imageErrorCount: 0});
    }
  }

  onImageError(event) {
    let {props: {fallbackSrc}, state: {imageErrorCount}} = this;

    if (imageErrorCount === 0) {
      event.target.src = fallbackSrc;
    }

    // Both src and fallback failed
    this.setState({imageErrorCount: imageErrorCount + 1});
  }

  render() {
    let {props, state: {imageErrorCount}} = this;
    let classes = classNames(
      {'hidden': imageErrorCount > 1},
      props.className
    );

    return (
      <img
        ref={(ref) => { this.image = ref; }}
        className={classes}
        onError={this.onImageError}
        {...Util.omit(props, ['className'])} />
    );
  }
}

Image.propTypes = {
  src: React.PropTypes.string,
  fallbackSrc: React.PropTypes.string,

  // Classes
  className: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.string
  ])
};

module.exports = Image;
