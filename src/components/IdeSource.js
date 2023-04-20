import CodeBlock from '../components/CodeBlock';
import React from 'react';

export default function IdeSource({ type }) {
  if (type === 'config/_config.scss') {
    return (<CodeBlock className="scss">
{`@use 'dark-colors' as dark;

@use 'sprucecss/scss/spruce' with (
  $colors: (
    'footer': (
      'background': hsl(215deg 100% 98%),
    )
  ),
  $dark-colors: dark.$colors,
  $typography: (
    'font-family-base': #{'Open Sans', sans-serif},
    'font-family-heading': #{'Manrope', sans-serif},
  ),
);`}
    </CodeBlock>);
  }

  if (type === 'config/_dark-colors.scss') {
    return (<CodeBlock className="scss">
{`@use 'sass:color';

$color-black: hsl(206deg 100% 7%);
$color-danger: hsl(0deg 71% 51%);
$color-gray-dark: hsl(0deg 0% 100% / 8%);
$color-gray: hsl(0deg 0% 97%);
$color-primary: hsl(261deg 54% 70%);
$color-secondary: hsl(227deg 92% 55%);
$color-success: hsl(150deg 100% 33%);
$color-white: hsl(0deg 0% 95%);

$colors: (
  'base': (
    'background': $color-black,
    'blockquote-border': $color-primary,
    'border': $color-gray-dark,
    'code-background': hsl(207deg 64% 18%),
    'code-foreground': $color-white,
    'heading': $color-white,
    'link': $color-primary,
    'link-hover': color.scale($color-primary, $lightness: -20%),
    'mark-background': hsl(50 100% 80%),
    'mark-foreground': $color-black,
    'marker': $color-primary,
    'primary': $color-primary,
    'secondary': $color-secondary,
    'text': $color-gray,
  ),
  'btn': (
    'primary-background': hsl(261 52% 59%),
    'primary-background-hover': hsl(261 52% 65%),
    'primary-foreground': $color-white,
    'secondary-background': $color-secondary,
    'secondary-background-hover': color.adjust($color-secondary, $lightness: 5%),
    'secondary-foreground': $color-white,
  ),
  'footer': (
    'background': hsl(206deg 100% 5%),
  ),
  'form': (
    'background': color.scale($color-black, $lightness: 5%),
    'background-disabled': $color-black,
    'border': $color-gray-dark,
    'border-disabled': $color-gray-dark,
    'border-focus': $color-primary,
    'check-background': $color-primary,
    'check-focus-ring': $color-primary,
    'check-foreground': $color-black,
    'invalid': $color-danger,
    'invalid-focus-ring': color.adjust($color-danger, $alpha: -0.75),
    'label': $color-white,
    'legend': $color-white,
    'placeholder': hsl(0deg 0% 60%),
    'range-thumb-background': $color-primary,
    'range-thumb-focus-ring': $color-primary,
    'range-track-background': $color-gray-dark,
    'ring-focus': color.adjust($color-primary, $alpha: -0.75),
    'select-foreground': hsl(0deg 0% 100%),
    'text': $color-gray,
    'valid': $color-success,
    'valid-focus-ring': color.adjust($color-success, $alpha: -0.75),
  ),
  'selection': (
    'background': $color-primary,
    'foreground': $color-white,
  ),
  'scrollbar': (
    'thumb-background': hsl(0deg 0% 100% / 15%),
    'thumb-background-hover':	hsl(0deg 0% 100% / 25%),
    'track-background':	hsl(0deg 0% 100% / 5%),
  ),
  'table': (
    'border': $color-gray-dark,
    'caption': $color-gray,
    'heading': $color-white,
    'hover': hsl(0deg 0% 100% / 5%),
    'text': $color-gray,
    'stripe': hsl(0deg 0% 100% / 2.5%),
  )
);`}
    </CodeBlock>);
  }

  if (type === 'config/_dark-mode.scss') {
    return (<CodeBlock className="scss">
{`@use 'sprucecss/scss/spruce' as *;

@include generate-color-variables(
  $dark-colors,
  ':root[data-theme-mode="dark"]'
);

[data-theme-mode='dark'] {
  color-scheme: dark;
}`}
    </CodeBlock>);
  }

  if (type === 'config/_fonts.scss') {
    return (<CodeBlock className="scss">
{`@use 'sprucecss/scss/spruce' as *;

@include font-face(
  'Manrope',
  '../../font/manrope-v13-latin_latin-ext-regular.woff2'
);

@include font-face(
  'Manrope',
  '../../font/manrope-v13-latin_latin-ext-300.woff2',
  300
);

@include font-face(
  'Manrope',
  '../../font/manrope-v13-latin_latin-ext-600.woff2',
  600
);

@include font-face(
  'Manrope',
  '../../font/manrope-v13-latin_latin-ext-700.woff2',
  700
);

@include font-face(
  'Manrope',
  '../../font/manrope-v13-latin_latin-ext-800.woff2',
  800
);

@include font-face(
  'Open Sans',
  '../../font/open-sans-v34-latin_latin-ext-regular.woff2'
);

@include font-face(
  'Open Sans',
  '../../font/open-sans-v34-latin_latin-ext-700.woff2',
  700
);`}
    </CodeBlock>);
  }

  if (type === 'config/_index.scss') {
    return (<CodeBlock className="scss">
{`@forward 'config';
@forward 'font';
@forward 'styles';
@forward 'dark-mode';`}
    </CodeBlock>);
  }

  if (type === 'config/_styles.scss') {
    return (<CodeBlock className="scss">
{`@use 'sprucecss/scss/spruce' as *;

@include generate-styles;`}
    </CodeBlock>);
  }

  if (type === 'component/_index.scss') {
    return (<CodeBlock className="scss">
{`@forward 'skip-link';
@forward 'header';
@forward 'footer';`}
    </CodeBlock>);
  }

  if (type === 'component/_footer.scss') {
    return (<CodeBlock className="scss">
{`@use 'sprucecss/scss/spruce' as *;

.site-footer {
  background-color: color('background', 'footer');
  padding-block: spacer-clamp('xl', 'xxl');

  &__top {
    @include layout-grid(spacer('l'), 14rem);
  }

  &__logo {
    --dimension: 4rem;
    display: inline-flex;
    height: var(--dimension);
    width: var(--dimension);
  }

  &__title {
    font-size: font-size('h4');
    margin-block: 0 spacer('m');
  }

  &__navigation {
    @include clear-list;
    @include layout-stack(spacer('xs'));

    a {
      color: color(text);
      text-decoration: none;

      &:hover,
      &:focus,
      &:active,
      &[aria-current='page'] {
        color: color('primary');
      }

      &[aria-current='page'] {
        font-weight: 700;
      }
    }
  }

  &__bottom {
    padding-block-start: spacer('l');

    @include breakpoint('md') {
      align-items: center;
      display: flex;
      gap: spacer('s');
      justify-content: space-between;
    }
  }

  &__copyright {
    margin-block: 0;
  }
}`}
    </CodeBlock>);
  }

  if (type === 'component/_header.scss') {
    return (<CodeBlock className="scss">
{`@use 'sprucecss/scss/spruce' as *;

.site-header {
  position: relative;

  &__inner {
    --height: 6rem;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: spacer-clamp('s', 'l');
    height: var(--height);
    justify-content: space-between;
  }

  &__column {
    align-items: center;
    display: flex;
    flex-grow: 1;
    gap: spacer-clamp('s', 'l');
  }

  &__actions {
    align-items: center;
    display: flex;
    gap: spacer-clamp('s', 'm');
  }

  &__logo {
    --dimension: 4rem;
    display: inline-flex;
    height: var(--dimension);
    width: var(--dimension);
  }

  &__email {
    display: none;
    text-decoration: none;

    @include breakpoint('sm') {
      display: inline-block;
    }
  }

  &__navigation {
    margin-inline-start: auto;

    @include breakpoint('md') {
      margin-inline-start: 0;
    }

    ul {
      border-block-start: 1px solid color('border');

      @include breakpoint('sm') {
        border-block: none;
      }
    }
  }
}`}
    </CodeBlock>);
  }

  if (type === 'main.scss') {
    return (<CodeBlock className="scss">
{`@forward 'config';
@forward 'component';`}
    </CodeBlock>);
  }
}
