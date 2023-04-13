import CodeBlock from '../components/CodeBlock';
import React from 'react';

export default function IdeSource({ type }) {
  if (type === '_config.scss') {
    return (<CodeBlock>
{`@use 'sass:color';
@use 'dark-colors' as dark;

$color-primary: hsl(238deg 100% 50%);
$color-secondary: hsl(186deg 100% 60%);

@use 'sprucecss/scss/spruce' with (
  $btn: (
    'font-family': #{'Manrope', sans - serif},
    'font-weight': 700,
    'icon-padding-sm': 0.6em,
    'padding-lg': 1em 2em,
    'padding-sm': 0.6em,
    'padding': 0.75em 1.5em,
  ),
  $color-primary: $color-primary,
  $color-secondary: $color-secondary,
  $colors: (
    'base': (
      'background': hsl(270deg 100% 99%),
      'border': hsl(0deg 0% 0% / 5%),
      'code-background': hsl(224deg 94% 97%),
      'heading': hsl(232deg 68% 11%),
      'text': hsl(208deg 22% 34%)
    ),
    'breadcrumb': (
      'separator': hsl(0deg 0% 80%)
    ),
    'card': (
      'background': hsl(0deg 0% 100%)
    ),
    'search': (
      'icon': hsl(229deg 26% 48% / 25%)
    ),
    'scrollbar': (
      'thumb-background': hsl(229deg 26% 48% / 15%),
      'thumb-background-hover':	hsl(0deg 0% 0% / 25%),
      'track-background':	hsl(226deg 100% 87% / 15%)
    )
  ),
  $dark-colors: dark.$colors,
  $typography: (
    'font-family-base': #{'Open Sans', sans - serif},
    'font-family-heading': #{'Manrope', sans - serif},
    'font-weight-heading': 800,
  ),
  $settings: (
    'css-custom-properties': true,
  )
);`}
    </CodeBlock>);
  }

  if (type === '_dark-colors.scss') {
    return (<CodeBlock>
{`@use 'sass:color';

$dark-color-primary: hsl(186 100% 60%);
$dark-color-secondary: hsl(227 92% 55%);

$dark-color-black: hsl(245 38% 11%);
$dark-color-white: hsl(0 0% 95%);

$dark-color-gray: hsl(0 0% 97%);
$dark-color-gray-dark: hsl(0 0% 100% / 8%);

$dark-color-danger: hsl(0 71% 51%);
$dark-color-success: hsl(150 100% 33%);

$colors: (
  base: (
    card-border: hsl(207 90% 13%),
    primary: $dark-color-primary,
    secondary: $dark-color-secondary,
    background: $dark-color-black,
    heading: $dark-color-white,
    text: $dark-color-gray,
    link: $dark-color-primary,
    link-hover: color.scale($dark-color-primary, $lightness: 10%),
    border: $dark-color-gray-dark,
    mark-background: hsl(50 100% 80%),
    mark-foreground: $dark-color-black,
    marker: $dark-color-primary,
    code-background: hsl(207 64% 21%),
    code-foreground: $dark-color-white,
    blockquote-border: $dark-color-primary,
    footer-background: hsl(0 0% 0% / 0.15)
  ),
  breadcrumb: (
    arrow: hsl(0 0% 100% / 0.1)
  ),
  btn: (
    primary-background: $dark-color-primary,
    primary-background-hover: hsl(186 100% 45%),
    primary-foreground: hsl(186 100% 5%),
    secondary-background: $dark-color-secondary,
    secondary-background-hover: color.adjust($dark-color-secondary, $lightness: 5%),
    secondary-foreground: $dark-color-white
  ),
  card: (
    background: $dark-color-black
  ),
  container: (
    background: hsl(207 92% 12%)
  ),
  form: (
    background: color.scale($dark-color-black, $lightness: 5%),
    background-disabled: $dark-color-black,
    border: $dark-color-gray-dark,
    border-disabled: $dark-color-gray-dark,
    border-focus: $dark-color-primary,
    shadow-focus: color.adjust($dark-color-primary, $alpha: -0.75),
    check-foreground: $dark-color-black,
    check-background: $dark-color-primary,
    invalid: $dark-color-danger,
    invalid-shadow: color.adjust($dark-color-danger, $alpha: -0.75),
    label: $dark-color-white,
    legend: $dark-color-white,
    placeholder: hsl(0 0% 60%),
    text: $dark-color-gray,
    select-foreground: hsl(0 0% 100%),
    valid: $dark-color-success,
    valid-shadow: color.adjust($dark-color-success, $alpha: -0.75)
  ),
  footer: (
    background: hsl(207 97% 6%)
  ),
  invoice: (
    background: hsl(234 49% 6%)
  ),
  tab: (
    background: hsl(207 84% 10%)
  ),
  table: (
    border: $dark-color-gray-dark,
    caption: $dark-color-gray,
    heading: $dark-color-white,
    hover: hsl(0 0% 100% / 0.05),
    text: $dark-color-gray,
    stripe: hsl(0 0% 100% / 0.025)
  ),
  selection: (
    foreground: $dark-color-white,
    background: $dark-color-primary
  ),
  search: (
    icon: hsla(0, 0%, 100%, 0.25)
  ),
  scrollbar: (
    thumb-background: hsl(0 0% 100% / 0.15),
    thumb-background-hover:	hsl(0 0% 100% / 0.25),
    track-background:	hsl(0 0% 100% / 0.05)
  )
);`}
    </CodeBlock>);
  }

  if (type === '_dark-mode.scss') {
    return (<CodeBlock>
{`@use 'sprucecss/scss/spruce' as *;

@include generate-color-variables(
  $dark-colors,
  ':root[data-theme-mode="dark"]'
);

[data-theme-mode='dark'] {
  @include selection(primary);

  color-scheme: dark;

  body::before { display: none; }
  .card { border: 1px solid color(border); }

  select.form-control:not([multiple]):not([size]) {
    @include field-icon(
      config('select', $form-icon, false),
      color(select-foreground, form, true, $dark-colors)
    );
  }
}`}
    </CodeBlock>);
  }

  if (type === '_fonts.scss') {
    return (<CodeBlock>
{`@use 'sprucecss/scss/spruce' as *;

@include font-face(
  'Manrope',
  '../font/manrope-v13-latin-ext_latin-regular.woff2'
);

@include font-face(
  'Manrope',
  '../font/manrope-v13-latin-ext_latin-300.woff2',
  300
);

@include font-face(
  'Manrope',
  '../font/manrope-v13-latin-ext_latin-600.woff2',
  600
);

@include font-face(
  'Manrope',
  '../font/manrope-v13-latin-ext_latin-700.woff2',
  700
);

@include font-face(
  'Manrope',
  '../font/manrope-v13-latin-ext_latin-800.woff2',
  800
);

@include font-face(
  'Open Sans',
  '../font/open-sans-v34-latin-regular.woff2'
);

@include font-face(
  'Open Sans',
  '../font/open-sans-v34-latin-700.woff2',
  700
);`}
    </CodeBlock>);
  }

  if (type === '_index.scss') {
    return (<CodeBlock>
{`@forward 'config';
@forward 'font';
@forward 'styles';
@forward 'dark-colors';
@forward 'dark-mode';
`}
    </CodeBlock>);
  }

  if (type === '_styles.scss') {
    return (<CodeBlock>
{`@use 'sprucecss/scss/spruce' as *;

@include generate-content;
@include generate-btn('.btn');

.btn--primary { @include btn-variant(primary); }
.btn--outline-primary { @include btn-variant-outline(primary); }

@include generate-form-control(
  '.form-control',
  true,
  true,
  true
);

`}
    </CodeBlock>);
  }
}
