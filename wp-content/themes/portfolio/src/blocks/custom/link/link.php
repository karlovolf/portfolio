<?php
/**
 * Template for the Link Block view.
 *
 * @package Portfolio\Blocks.
 */

namespace Portfolio\Blocks;

$this->render_block_view(
  '/components/link/link.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'link'       => $attributes['link'] ?? [],
  ]
);
