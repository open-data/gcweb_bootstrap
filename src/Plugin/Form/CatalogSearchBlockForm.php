<?php

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
      '#title' => $this->t('Enter keywords to search'),
      '#title_display' => 'invisible',
      '#size' => '50%',
      '#maxlength' => 256,
      '#default_value' => '',
      '#placeholder' => '',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Find'),
      '#id' => 'search_submit',
      '#name' => $this->t('Find'),
      '#button_type' => 'primary',
      '#icon' => Bootstrap::glyphicon('search'),
      '#prefix' => '<span class="input-group-btn">',
      '#suffix' => '</span>',
    ];

    return $form;
  }
  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // redirect to the url link
    $url = $form_state->getValue('url') . urlencode($form_state->getValue('query'));
    $response = new TrustedRedirectResponse($url);
    $response->send();
  }
}
