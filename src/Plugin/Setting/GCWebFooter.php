<?php

namespace Drupal\gcweb\Plugin\Setting;

use Drupal\bootstrap\Plugin\Setting\SettingBase;

/**
 * The "gcweb_footer" theme setting.
 *
 * @ingroup plugins_setting
 *
 * @BootstrapSetting(
 *   id = "gcweb_footer",
 *   type = "checkbox",
 *   title = @Translation("Use custom footer"),
 *   defaultValue = 0,
 *   description = @Translation("If checked the GCWeb theme will render custom footer"),
 *   groups = {
 *     "gcweb" = @Translation("GCWeb"),
 *     "cdn" = @Translation("CDN"),
 *   }
 * )
 */
class GCWebFooter extends SettingBase {}
