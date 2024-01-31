<template>
  <div class="p-2 flex flex-col gap-2">
    Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an
    action, or performing a delete operation.

    There is some predefined button styles, each serving its own semantic purpose.
    <ui-segment title="Basic Buttons" class="flex flex-wrap gap-2">

      <ui-button>Normal</ui-button>
      <ui-button class="primary">Primary</ui-button>
      <ui-button class="secondary">Secondary</ui-button>
      <ui-button class="info">Info</ui-button>
      <ui-button class="success">Success</ui-button>
      <ui-button class="warning">Warning</ui-button>
      <ui-button class="error">Error</ui-button>
      <ui-button class="danger">Danger</ui-button>
    </ui-segment>

    And it also has some modifiers like <code>outline</code>.
    <ui-segment title="Outline Buttons" class="flex flex-wrap gap-2">
      <ui-button class="outline">Normal</ui-button>
      <ui-button class="outline primary">Primary</ui-button>
      <ui-button class="outline secondary">Secondary</ui-button>
      <ui-button class="outline info">Info</ui-button>
      <ui-button class="outline success">Success</ui-button>
      <ui-button class="outline warning">Warning</ui-button>
      <ui-button class="outline error">Error</ui-button>
      <ui-button class="outline danger">Danger</ui-button>
    </ui-segment>

    Different from the original html5 button, the <code>ui-button</code> component can have `href` or `to` attribute to
    make it a link.

    If it has linkable attribute, it will be rendered as an `&lt;a>` tag, otherwise it will be rendered as a `&lt;button>`
  </div>
</template>