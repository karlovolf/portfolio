<?php
/**
 * Template for the Carousel Image Block.
 *
 * @package Portfolio\Blocks.
 */

namespace Portfolio\Blocks;

$media = $attributes['media'] ?? [];

if ( ! $media ) {
  return;
}

$block_class = $attributes['blockClass'] ?? '';

$component_class = "
  {$block_class}
  swiper-slide
";

?>

<div class="<?php echo esc_attr( $component_class ); ?>">
  <?php $this->render_block_view(
    '/components/image/image.php',
    [
      'blockClass' => $attributes['blockClass'] ?? '',
      'media' => $media,
    ]
  );
  ?>
</div>
