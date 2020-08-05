<?php
/**
 * Template for the Button Block view.
 *
 * @package Portfolio\Blocks.
 */

namespace Portfolio\Blocks;

$this->render_block_view(
  '/components/button/button.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'button'     => $attributes['button'] ?? [],
  ]
);
