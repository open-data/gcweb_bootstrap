<?php
/**
 * @file
 * Contains Drupal\gcweb\Plugin\Form\SearchBlockForm.
 */

namespace Drupal\gcweb\Plugin\Form;

use Drupal\bootstrap\Bootstrap;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Routing\TrustedRedirectResponse;

class CatalogSearchBlockForm extends FormBase {
  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'catalog_search_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['#attributes']['class'][] = 'form-inline';
    $form['#method'] = 'post';

    $form['query'] = [
      '#id' => 'query',
      '#type' => 'textfield',
      '#title' => '',
      '#size' => 60,
      '#maxlength' => 256,
      '#default_value' => '',
      '#placeholder' => '',
    ];

    $form['url'] = [
      '#id' => 'url',
      '#type' => 'hidden',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Find'),
      '#id' => 'search_submit',
      '#button_type' => 'primary',
      '#icon' => Bootstrap::glyphicon('search'),
//      '#label' => '<span class="visible-lg-inline">Find</span>',
//      '#prefix' => '<span class="input-group-btn">',
//      '#suffix' => '</span>',
    ];

    return $form;
  }
  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // redirect to the url link
    $url = $form_state->getValue('url') . $form_state->getValue('query');
    $response = new TrustedRedirectResponse($url);
    $response->send();
  }
}
