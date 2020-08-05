import React from 'react'; // eslint-disable-line no-unused-vars
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { URLInput } from '@wordpress/block-editor';
import { ColorPaletteCustom } from '@eightshift/frontend-libs/scripts/components';
import { SelectControl, TextControl, Icon, ToggleControl } from '@wordpress/components';
import { getPaletteColors, icons } from '@eightshift/frontend-libs/scripts/editor';

export const buttonSizes = [
  { label: __('Default', 'portfolio'), value: 'default' },
  { label: __('Big', 'portfolio'), value: 'big' },
];

export const buttonSizeWidths = [
  { label: __('Default', 'portfolio'), value: 'default' },
  { label: __('Block', 'portfolio'), value: 'block' },
];

export const buttonColors = () => {
  const {
    primary,
    black,
  } = getPaletteColors();

  return [
    primary,
    black,
  ];
};

export const ButtonOptions = (props) => {
  const {
    button: {
      url,
      styleSize,
      styleColor,
      styleSizeWidth,
      id,
      isAnchor,
    },
    onChangeUrl,
    onChangeStyleSize,
    onChangeStyleColor,
    onChangeStyleSizeWidth,
    onChangeId,
    onChangeIsAnchor,
  } = props;

  return (
    <Fragment>

      {onChangeUrl &&
        <URLInput
          label={__('Button Url', 'portfolio')}
          value={url}
          onChange={onChangeUrl}
        />
      }

      {onChangeStyleColor &&
        <ColorPaletteCustom
          label={
            <Fragment>
              <Icon icon={icons.color} />
              {__('Button Color', 'portfolio')}
            </Fragment>
          }
          help={__('Change Button Background color.', 'portfolio')}
          value={styleColor}
          colors={buttonColors()}
          onChange={onChangeStyleColor}
        />
      }

      {onChangeStyleSize &&
        <SelectControl
          label={__('Button Size', 'portfolio')}
          value={styleSize}
          options={buttonSizes}
          onChange={onChangeStyleSize}
        />
      }

      {onChangeStyleSizeWidth &&
        <SelectControl
          label={__('Button Size Width', 'portfolio')}
          value={styleSizeWidth}
          options={buttonSizeWidths}
          onChange={onChangeStyleSizeWidth}
        />
      }

      {onChangeIsAnchor &&
        <ToggleControl
          label={__('Anchor', 'portfolio')}
          checked={isAnchor}
          onChange={onChangeIsAnchor}
          help={__('Using anchor option will add JavaScript selector to the button. You must provide anchor destination inside Button Url field. Example: #super-block.', 'portfolio')}
        />
      }

      {onChangeId &&
        <TextControl
          label={__('Button ID', 'portfolio')}
          value={id}
          onChange={onChangeId}
        />
      }

    </Fragment>
  );
};
