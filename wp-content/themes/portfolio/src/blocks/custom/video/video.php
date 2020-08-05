<?php
/**
 * Template for the Video Block view.
 *
 * @package Portfolio\Blocks.
 */

namespace Portfolio\Blocks;

$this->render_block_view(
  '/components/video/video.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'media'      => $attributes['media'] ?? [],
  ]
);
