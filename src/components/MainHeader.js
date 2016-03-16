import React, {PropTypes} from 'react';
import cx from 'classnames';

export default function MainHeader({className, brand, brandHref}) {
    return (
        <header className={cx('main-header', className)}>
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <a href={brandHref} className="navbar-brand">{brand}</a>
                </div>
            </nav>
        </header>
    );
}

MainHeader.propTypes = {
    className: PropTypes.string,
    brand: PropTypes.string.isRequired,
    brandHref: PropTypes.string
};

MainHeader.defaultProps = {
    brandHref: '#'
};
