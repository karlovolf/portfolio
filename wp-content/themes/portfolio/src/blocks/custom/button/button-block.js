import React from 'react'; // eslint-disable-line no-unused-vars
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { getActions } from '@eightshift/frontend-libs/scripts/editor';
import manifest from './manifest.json';
import { ButtonEditor } from './components/button-editor';
import { ButtonOptions } from './components/button-options';

export const Button = (props) => {

  const {
    attributes,
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Fragment>
      <InspectorControls>
        <ButtonOptions
          attributes={attributes}
          actions={actions}
        />
      </InspectorControls>
      <ButtonEditor
        attributes={attributes}
        actions={actions}
      />
    </Fragment>
  );
};
