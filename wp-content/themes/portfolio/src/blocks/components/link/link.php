<?php
/**
 * Template for the Link Component.
 *
 * @package Portfolio\Blocks.
 */

namespace Portfolio\Blocks;

$link = $attributes['link'] ?? [];

if ( ! $link ) {
  return;
}

$url   = $link['url'] ?? '';
$title = $button['title'] ?? '';

if ( ! $url || ! $title  ) {
  return;
}

$id        = $link['id'] ?? '';
$is_anchor = $link['isAnchor'] ?? false;

$component_class = 'link';
$block_class     = $attributes['blockClass'] ?? '';
$style_color     = isset( $link['styleColor'] ) ? "{$component_class}__color--{$link['styleColor']}" : '';
$is_anchor       = $is_anchor ? 'js-scroll-to-anchor' : '';

$link_class = "
  {$component_class}
  {$style_color}
  {$is_anchor}
  {$block_class}__link
";
?>

<a
  href="<?php echo esc_url( $url ); ?>"
  class="<?php echo esc_attr( $link_class ); ?>"
  title="<?php echo esc_attr( $title ); ?>"
  id="<?php echo esc_attr( $id ); ?>"
>
  <?php echo esc_html( $title ); ?>
</a>
