import React from 'react'; // eslint-disable-line no-unused-vars
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { ColorPaletteCustom } from '@eightshift/frontend-libs/scripts/components';
import { icons } from '@eightshift/frontend-libs/scripts/editor';
import { SelectControl, Icon } from '@wordpress/components';

export const headingSizes = [
  { label: __('Default (115px)', 'portfolio'), value: 'default' },
  { label: __('Big (90px)', 'portfolio'), value: 'big' },
];

export const HeadingOptions = (props) => {
  const {
    heading: {
      styleColor,
      styleSize,
    },
    onChangeStyleColor,
    onChangeStyleSize,
  } = props;

  return (
    <Fragment>

      {onChangeStyleColor &&
        <ColorPaletteCustom
          label={
            <Fragment>
              <Icon icon={icons.color} />
              {__('Heading Color', 'portfolio')}
            </Fragment>
          }
          help={__('Change Heading color', 'portfolio')}
          value={styleColor}
          onChange={onChangeStyleColor}
        />
      }

      {onChangeStyleSize &&
        <SelectControl
          label={__('Heading Size', 'portfolio')}
          value={styleSize}
          options={headingSizes}
          onChange={onChangeStyleSize}
        />
      }

    </Fragment>
  );
};
