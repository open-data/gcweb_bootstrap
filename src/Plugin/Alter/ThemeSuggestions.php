<?php

namespace Drupal\gcweb\Plugin\Alter;

use Drupal\bootstrap\Plugin\Alter\ThemeSuggestions as BootstrapThemeSuggestions;
use Drupal\bootstrap\Utility\Variables;

/**
 * Implements hook_theme_suggestions_alter().
 *
 * @ingroup plugins_alter
 *
 * @BootstrapAlter("theme_suggestions")
 */
class ThemeSuggestions extends BootstrapThemeSuggestions {

  /**
   * {@inheritdoc}
   */
  public function alter(&$suggestions, &$context1 = NULL, &$hook = NULL) {
    $variables = Variables::create($context1);

    switch ($hook) {

      // custom block
      case 'block':
        if (isset($variables['elements']['content']['#block_content'])) {
          $bundle = $variables['elements']['content']['#block_content']->bundle();
          $suggestions[] = 'block__' . $bundle;
        }
        break;

      // custom form
      case 'form':
        $form_id = $variables['element']['#id'];
        $suggestions[] = 'form__' . str_replace('-','_',$form_id);
        break;

      // page
      case 'page':
        $node = \Drupal::routeMatch()->getParameter('node');
        if (is_object($node)) {
          $suggestions[] = 'page__' . $node->bundle();
        }
        break;
    }

    parent::alter($suggestions, $context1, $hook);
  }

}
