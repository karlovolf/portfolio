<?php
/**
 * Global Environment variable
 *
 * Define global environment variable, and define certain
 * settings based on it.
 *
 * @package portfolio
 *
 */

if ( ! defined( 'POR_ENV' ) ) {
  return false;
}

// Multisite.
define( 'WP_ALLOW_MULTISITE', false );
define( 'MULTISITE', false );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

// Limit revisions for better optimizations.
define( 'WP_POST_REVISIONS', 3 );

// Optimize assets in admin.
define( 'COMPRESS_CSS', true );
define( 'COMPRESS_SCRIPTS', true );
define( 'CONCATENATE_SCRIPTS', true );
define( 'ENFORCE_GZIP', true );

// Disable editing theme from admin.
define( 'DISALLOW_FILE_EDIT', true );

// Auto save interval higher to optimize admin.
define( 'AUTOSAVE_INTERVAL', 240 );

// Disable automatic updating of plugins.
define( 'AUTOMATIC_UPDATER_DISABLED', true );

// Enable caching.
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );

if ( POR_ENV === 'develop' ) {
  // Enable direct upload from admin.
  define( 'FS_METHOD', 'direct' );

  // Enable debug and error loging.
  define( 'WP_DEBUG_DISPLAY', true );

  if ( ! defined( 'WP_CLI' ) ) {
    define( 'COOKIE_DOMAIN', $_SERVER['HTTP_HOST'] );
  }
} else {

  // Disable plugins / themes updates from admin.
  define( 'DISALLOW_FILE_MODS', true );

  // Force login to admin with ssl.
  define( 'FORCE_SSL_LOGIN', true );

  // Enable debug and error loging.
  define( 'WP_DEBUG_DISPLAY', false );

  if ( ! defined( 'WP_CLI' ) ) {
    define( 'COOKIE_DOMAIN', $_SERVER['HTTPS_HOST'] );
  }
}
