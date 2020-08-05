<?php
/**
 * The Menu specific functionality.
 *
 * @since   1.0.0
 * @package Portfolio\Menu
 */

declare( strict_types=1 );

namespace Portfolio\Menu;

use Eightshift_Libs\Core\Service;
use Eightshift_Libs\Menu\Menu as Libs_Menu;

/**
 * Class Menu
 *
 * @since 1.0.0
 */
class Menu extends Libs_Menu {

  /**
   * Return all menu poistions
   *
   * @return array Menu positions with slug => name structure.
   *
   * @since 1.0.0
   */
  public function get_menu_positions() : array {
    return [
      'header_main_nav' => esc_html__( 'Main Menu', 'portfolio' ),
      'footer_main_nav' => esc_html__( 'Footer Menu', 'portfolio' ),
    ];
  }
}
