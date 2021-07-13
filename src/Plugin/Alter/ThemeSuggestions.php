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

      // html
      case 'html':
        $node = \Drupal::routeMatch()->getParameter('node');
        if (is_object($node)) {
          $suggestions[] = 'html__node__' . $node->bundle();
        }
        break;

      // page
      case 'page':
        $node = \Drupal::routeMatch()->getParameter('node');
        if (is_object($node)) {
          $suggestions[] = 'page__' . $node->bundle();
        }
        break;

      // region
      case 'region':
        $node = \Drupal::routeMatch()->getParameter('node');
        $region = $variables['elements']['#region'];
        if (is_object($node)) {
          $suggestions[] = 'region__' . $region;
          $suggestions[] = 'region__' . $region . '__' . $node->bundle();
        }
        break;

      // views
      case 'views_view':
        $view = $variables['view'];
        if (is_object($view)) {
          $suggestions[] = 'view_view__' . $view->id();
          $suggestions[] = 'view_view__' . $view->id() . '__' . $view->current_display;
        }
        break;

      // view fields
      case 'views_view_field':
        $field = $variables['field'];
        if (is_object($field)) {
          $suggestions[] = 'view_view__field__' . $field->field;
        }
        break;
    }

    parent::alter($suggestions, $context1, $hook);
  }

}
