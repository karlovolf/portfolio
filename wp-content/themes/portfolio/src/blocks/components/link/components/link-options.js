import React from 'react'; // eslint-disable-line no-unused-vars
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { URLInput } from '@wordpress/block-editor';
import { ColorPaletteCustom } from '@eightshift/frontend-libs/scripts/components';
import { ToggleControl, Icon, TextControl } from '@wordpress/components';
import { getPaletteColors, icons } from '@eightshift/frontend-libs/scripts/editor';

export const linkColors = () => {
  const {
    primary,
    black,
  } = getPaletteColors();

  return [
    primary,
    black,
  ];
};

export const LinkOptions = (props) => {
  const {
    link: {
      url,
      styleColor,
      isAnchor,
      id,
    },
    onChangeUrl,
    onChangeStyleColor,
    onChangeIsAnchor,
    onChangeId,
  } = props;

  return (
    <Fragment>

      {onChangeStyleColor &&
        <ColorPaletteCustom
          label={
            <Fragment>
              <Icon icon={icons.color} />
              {__('Link Color', 'portfolio')}
            </Fragment>
          }
          help={__('Change Link color.', 'portfolio')}
          value={styleColor}
          colors={linkColors()}
          onChange={onChangeStyleColor}
        />
      }

      {onChangeUrl &&
        <URLInput
          label={__('Link Url', 'portfolio')}
          value={url}
          onChange={onChangeUrl}
        />
      }

      {onChangeIsAnchor &&
        <ToggleControl
          label={__('Anchor', 'portfolio')}
          checked={isAnchor}
          onChange={onChangeIsAnchor}
          help={__('Using anchor option will add JavaScript selector to the link. You must provide anchor destination inside Link Url field. Example: #super-block.', 'portfolio')}
        />
      }

      {onChangeId &&
        <TextControl
          label={__('Link ID', 'portfolio')}
          value={id}
          onChange={onChangeId}
        />
      }

    </Fragment>
  );
};
