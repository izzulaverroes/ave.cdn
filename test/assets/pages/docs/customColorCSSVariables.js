import { setupPage } from "../setupPage.js";

export function customCSSVariablesPage() {
  const title = "Customize";
  const sub = "CSS Variables"
  const id ="toCustomCSSVariablesPage"
  const content = `
  <div class="card">
  <div class="card-body">
    <div class="bd-content ps-lg-2">
      <p>
        Avee includes many
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
          >CSS custom properties (variables)</a
        >
        in its compiled CSS for real-time customization without the
        need to recompile Sass. These provide easy access to
        commonly used values like our theme colors, breakpoints, and
        primary font stacks when working in your browser’s
        inspector, a code sandbox, or general prototyping.
      </p>
      <p>
        <strong
          >All our custom properties are prefixed with
          <code>bs-</code></strong
        >
        to avoid conflicts with third party CSS.
      </p>
      <h2 id="root-variables">
        Root variables
        <a
          class="anchor-link"
          href="#root-variables"
          aria-label="Link to this section: Root variables"
        ></a>
      </h2>
      <p>
        Here are the variables we include (note that the
        <code>:root</code> is required) that can be accessed
        anywhere Avee’s CSS is loaded. They’re located in our
        <code>_root.scss</code> file and included in our compiled
        dist files.
      </p>
      <h3 id="default">
        Default
        <a
          class="anchor-link"
          href="#default"
          aria-label="Link to this section: Default"
        ></a>
      </h3>
      <p>
        These CSS variables are available everywhere, regardless of
        color mode.
      </p>
      <div class="bd-code-snippet">
        <div class="bd-clipboard">
          <button type="button" class="btn-clipboard">
            <svg class="bi" role="img" aria-label="Copy">
              <use xlink:href="#clipboard"></use>
            </svg>
          </button>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-css" data-lang="css"><span class="line"><span class="cl"><span class="nt">:root,
[data-bs-theme=light] {
--bs-blue: #0d6efd;
--bs-indigo: #6610f2;
--bs-purple: #6f42c1;
--bs-pink: #d63384;
--bs-red: #dc3545;
--bs-orange: #fd7e14;
--bs-yellow: #ffc107;
--bs-green: #198754;
--bs-teal: #20c997;
--bs-cyan: #0dcaf0;
--bs-black: #000;
--bs-white: #fff;
--bs-gray: #6c757d;
--bs-gray-dark: #343a40;
--bs-gray-100: #f8f9fa;
--bs-gray-200: #e9ecef;
--bs-gray-300: #dee2e6;
--bs-gray-400: #ced4da;
--bs-gray-500: #adb5bd;
--bs-gray-600: #6c757d;
--bs-gray-700: #495057;
--bs-gray-800: #343a40;
--bs-gray-900: #212529;
--bs-primary: #0d6efd;
--bs-secondary: #6c757d;
--bs-success: #198754;
--bs-info: #0dcaf0;
--bs-warning: #ffc107;
--bs-danger: #dc3545;
--bs-light: #f8f9fa;
--bs-dark: #212529;
--bs-primary-rgb: 13, 110, 253;
--bs-secondary-rgb: 108, 117, 125;
--bs-success-rgb: 25, 135, 84;
--bs-info-rgb: 13, 202, 240;
--bs-warning-rgb: 255, 193, 7;
--bs-danger-rgb: 220, 53, 69;
--bs-light-rgb: 248, 249, 250;
--bs-dark-rgb: 33, 37, 41;
--bs-primary-text-emphasis: #052c65;
--bs-secondary-text-emphasis: #2b2f32;
--bs-success-text-emphasis: #0a3622;
--bs-info-text-emphasis: #055160;
--bs-warning-text-emphasis: #664d03;
--bs-danger-text-emphasis: #58151c;
--bs-light-text-emphasis: #495057;
--bs-dark-text-emphasis: #495057;
--bs-primary-bg-subtle: #cfe2ff;
--bs-secondary-bg-subtle: #e2e3e5;
--bs-success-bg-subtle: #d1e7dd;
--bs-info-bg-subtle: #cff4fc;
--bs-warning-bg-subtle: #fff3cd;
--bs-danger-bg-subtle: #f8d7da;
--bs-light-bg-subtle: #fcfcfd;
--bs-dark-bg-subtle: #ced4da;
--bs-primary-border-subtle: #9ec5fe;
--bs-secondary-border-subtle: #c4c8cb;
--bs-success-border-subtle: #a3cfbb;
--bs-info-border-subtle: #9eeaf9;
--bs-warning-border-subtle: #ffe69c;
--bs-danger-border-subtle: #f1aeb5;
--bs-light-border-subtle: #e9ecef;
--bs-dark-border-subtle: #adb5bd;
--bs-white-rgb: 255, 255, 255;
--bs-black-rgb: 0, 0, 0;
--bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
--bs-body-font-family: var(--bs-font-sans-serif);
--bs-body-font-size: 1rem;
--bs-body-font-weight: 400;
--bs-body-line-height: 1.5;
--bs-body-color: #212529;
--bs-body-color-rgb: 33, 37, 41;
--bs-body-bg: #fff;
--bs-body-bg-rgb: 255, 255, 255;
--bs-emphasis-color: #000;
--bs-emphasis-color-rgb: 0, 0, 0;
--bs-secondary-color: rgba(33, 37, 41, 0.75);
--bs-secondary-color-rgb: 33, 37, 41;
--bs-secondary-bg: #e9ecef;
--bs-secondary-bg-rgb: 233, 236, 239;
--bs-tertiary-color: rgba(33, 37, 41, 0.5);
--bs-tertiary-color-rgb: 33, 37, 41;
--bs-tertiary-bg: #f8f9fa;
--bs-tertiary-bg-rgb: 248, 249, 250;
--bs-heading-color: inherit;
--bs-link-color: #0d6efd;
--bs-link-color-rgb: 13, 110, 253;
--bs-link-decoration: underline;
--bs-link-hover-color: #0a58ca;
--bs-link-hover-color-rgb: 10, 88, 202;
--bs-code-color: #d63384;
--bs-highlight-color: #212529;
--bs-highlight-bg: #fff3cd;
--bs-border-width: 1px;
--bs-border-style: solid;
--bs-border-color: #dee2e6;
--bs-border-color-translucent: rgba(0, 0, 0, 0.175);
--bs-border-radius: 0.375rem;
--bs-border-radius-sm: 0.25rem;
--bs-border-radius-lg: 0.5rem;
--bs-border-radius-xl: 1rem;
--bs-border-radius-xxl: 2rem;
--bs-border-radius-2xl: var(--bs-border-radius-xxl);
--bs-border-radius-pill: 50rem;
--bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
--bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
--bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
--bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
--bs-focus-ring-width: 0.25rem;
--bs-focus-ring-opacity: 0.25;
--bs-focus-ring-color: rgba(13, 110, 253, 0.25);
--bs-form-valid-color: #198754;
--bs-form-valid-border-color: #198754;
--bs-form-invalid-color: #dc3545;
--bs-form-invalid-border-color: #dc3545;
}</span>
</span></span></code></pre>
        </div>
      </div>
      <h3 id="dark-mode">
        Dark mode
        <a
          class="anchor-link"
          href="#dark-mode"
          aria-label="Link to this section: Dark mode"
        ></a>
      </h3>
      <p>These variables are scoped to our built-in dark mode.</p>
      <div class="bd-code-snippet">
        <div class="bd-clipboard">
          <button type="button" class="btn-clipboard">
            <svg class="bi" role="img" aria-label="Copy">
              <use xlink:href="#clipboard"></use>
            </svg>
          </button>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-css" data-lang="css"><span class="line"><span class="cl"><span class="nt">[data-bs-theme=dark] {
color-scheme: dark;
--bs-body-color: #dee2e6;
--bs-body-color-rgb: 222, 226, 230;
--bs-body-bg: #212529;
--bs-body-bg-rgb: 33, 37, 41;
--bs-emphasis-color: #fff;
--bs-emphasis-color-rgb: 255, 255, 255;
--bs-secondary-color: rgba(222, 226, 230, 0.75);
--bs-secondary-color-rgb: 222, 226, 230;
--bs-secondary-bg: #343a40;
--bs-secondary-bg-rgb: 52, 58, 64;
--bs-tertiary-color: rgba(222, 226, 230, 0.5);
--bs-tertiary-color-rgb: 222, 226, 230;
--bs-tertiary-bg: #2b3035;
--bs-tertiary-bg-rgb: 43, 48, 53;
--bs-primary-text-emphasis: #6ea8fe;
--bs-secondary-text-emphasis: #a7acb1;
--bs-success-text-emphasis: #75b798;
--bs-info-text-emphasis: #6edff6;
--bs-warning-text-emphasis: #ffda6a;
--bs-danger-text-emphasis: #ea868f;
--bs-light-text-emphasis: #f8f9fa;
--bs-dark-text-emphasis: #dee2e6;
--bs-primary-bg-subtle: #031633;
--bs-secondary-bg-subtle: #161719;
--bs-success-bg-subtle: #051b11;
--bs-info-bg-subtle: #032830;
--bs-warning-bg-subtle: #332701;
--bs-danger-bg-subtle: #2c0b0e;
--bs-light-bg-subtle: #343a40;
--bs-dark-bg-subtle: #1a1d20;
--bs-primary-border-subtle: #084298;
--bs-secondary-border-subtle: #41464b;
--bs-success-border-subtle: #0f5132;
--bs-info-border-subtle: #087990;
--bs-warning-border-subtle: #997404;
--bs-danger-border-subtle: #842029;
--bs-light-border-subtle: #495057;
--bs-dark-border-subtle: #343a40;
--bs-heading-color: inherit;
--bs-link-color: #6ea8fe;
--bs-link-hover-color: #8bb9fe;
--bs-link-color-rgb: 110, 168, 254;
--bs-link-hover-color-rgb: 139, 185, 254;
--bs-code-color: #e685b5;
--bs-highlight-color: #dee2e6;
--bs-highlight-bg: #664d03;
--bs-border-color: #495057;
--bs-border-color-translucent: rgba(255, 255, 255, 0.15);
--bs-form-valid-color: #75b798;
--bs-form-valid-border-color: #75b798;
--bs-form-invalid-color: #ea868f;
--bs-form-invalid-border-color: #ea868f;
}</span>
</span></span></code></pre>
        </div>
      </div>
      <h2 id="component-variables">
        Component variables
        <a
          class="anchor-link"
          href="#component-variables"
          aria-label="Link to this section: Component variables"
        ></a>
      </h2>
      <p>
        Avee 5 is increasingly making use of custom properties
        as local variables for various components. This way we
        reduce our compiled CSS, ensure styles aren’t inherited in
        places like nested tables, and allow some basic restyling
        and extending of Avee components after Sass
        compilation.
      </p>
      <p>
        Have a look at our table documentation for some
        <a
          href="/docs/5.3/content/tables/#how-do-the-variants-and-accented-tables-work"
          >insight into how we’re using CSS variables</a
        >. Our
        <a href="/docs/5.3/components/navbar/#css"
          >navbars also use CSS variables</a
        >
        as of v5.2.0. We’re also using CSS variables across our
        grids—primarily for gutters the
        <a href="/docs/5.3/layout/css-grid/">new opt-in CSS grid</a
        >—with more component usage coming in the future.
      </p>
      <p>
        Whenever possible, we’ll assign CSS variables at the base
        component level (e.g., <code>.navbar</code> for navbar and
        its sub-components). This reduces guessing on where and how
        to customize, and allows for easy modifications by our team
        in future updates.
      </p>
      <h2 id="prefix">
        Prefix
        <a
          class="anchor-link"
          href="#prefix"
          aria-label="Link to this section: Prefix"
        ></a>
      </h2>
      <p>
        Most CSS variables use a prefix to avoid collisions with
        your own codebase. This prefix is in addition to the
        <code>--</code> that’s required on every CSS variable.
      </p>
      <p>
        Customize the prefix via the <code>$prefix</code> Sass
        variable. By default, it’s set to <code>bs-</code> (note the
        trailing dash).
      </p>
      <h2 id="examples">
        Examples
        <a
          class="anchor-link"
          href="#examples"
          aria-label="Link to this section: Examples"
        ></a>
      </h2>
      <p>
        CSS variables offer similar flexibility to Sass’s variables,
        but without the need for compilation before being served to
        the browser. For example, here we’re resetting our page’s
        font and link styles with CSS variables.
      </p>
      <div class="bd-code-snippet">
        <div class="bd-clipboard">
          <button type="button" class="btn-clipboard">
            <svg class="bi" role="img" aria-label="Copy">
              <use xlink:href="#clipboard"></use>
            </svg>
          </button>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-css" data-lang="css"><span class="line"><span class="cl"><span class="nt">body</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="k">font</span><span class="p">:</span> <span class="mi">1</span><span class="kt">rem</span><span class="o">/</span><span class="mf">1.5</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs</span><span class="o">-</span><span class="n">font</span><span class="o">-</span><span class="kc">sans-serif</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="nt">a</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="k">color</span><span class="p">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs</span><span class="o">-</span><span class="kc">blue</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <h2 id="focus-variables">
        Focus variables
        <a
          class="anchor-link"
          href="#focus-variables"
          aria-label="Link to this section: Focus variables"
        ></a>
      </h2>
      <small
        class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"
        >Added in v1.0.0</small
      >

      <p>
        Avee provides custom <code>:focus</code> styles using a
        combination of Sass and CSS variables that can be optionally
        added to specific components and elements. We do not yet
        globally override all <code>:focus</code> styles.
      </p>
      <p>
        In our Sass, we set default values that can be customized
        before compiling.
      </p>
      <div class="bd-example-snippet bd-code-snippet bd-file-ref">
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom"
        >
          <a
            class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
            href="https://github.com/twbs/bootstrap/blob/v1.0.0/scss/_variables.scss"
            >scss/_variables.scss</a
          >
          <div class="d-flex ms-auto">
            <button
              type="button"
              class="btn-clipboard mt-0 me-0"
              aria-label="Copy to clipboard"
              data-bs-original-title="Copy to clipboard"
            >
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#clipboard"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$focus-ring-width</span><span class="o">:</span>      <span class="mf">.25</span><span class="kt">rem</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$focus-ring-opacity</span><span class="o">:</span>    <span class="mf">.25</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$focus-ring-color</span><span class="o">:</span>      <span class="nf">rgba</span><span class="p">(</span><span class="nv">$primary</span><span class="o">,</span> <span class="nv">$focus-ring-opacity</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$focus-ring-blur</span><span class="o">:</span>       <span class="mi">0</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$focus-ring-box-shadow</span><span class="o">:</span> <span class="mi">0</span> <span class="mi">0</span> <span class="nv">$focus-ring-blur</span> <span class="nv">$focus-ring-width</span> <span class="nv">$focus-ring-color</span><span class="p">;</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        Those variables are then reassigned to
        <code>:root</code> level CSS variables that can be
        customized in real-time, including with options for
        <code>x</code> and <code>y</code> offsets (which default to
        their fallback value of <code>0</code>).
      </p>
      <div class="bd-example-snippet bd-code-snippet bd-file-ref">
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom"
        >
          <a
            class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
            href="https://github.com/twbs/bootstrap/blob/v1.0.0/scss/_root.scss"
            >scss/_root.scss</a
          >
          <div class="d-flex ms-auto">
            <button
              type="button"
              class="btn-clipboard mt-0 me-0"
              aria-label="Copy to clipboard"
              data-bs-original-title="Copy to clipboard"
            >
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#clipboard"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="na">--#{$prefix}focus-ring-width</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$focus-ring-width</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}focus-ring-opacity</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$focus-ring-opacity</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}focus-ring-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$focus-ring-color</span><span class="si">}</span><span class="p">;</span></span></span></code></pre>
        </div>
      </div>
      <h2 id="grid-breakpoints">
        Grid breakpoints
        <a
          class="anchor-link"
          href="#grid-breakpoints"
          aria-label="Link to this section: Grid breakpoints"
        ></a>
      </h2>
      <p>
        While we include our grid breakpoints as CSS variables
        (except for <code>xs</code>), be aware that
        <strong>CSS variables do not work in media queries</strong>.
        This is by design in the CSS spec for variables, but may
        change in coming years with support for
        <code>env()</code> variables. Check out
        <a href="https://stackoverflow.com/a/47212942"
          >this Stack Overflow answer</a
        >
        for some helpful links. In the meantime, you can use these
        variables in other CSS situations, as well as in your
        JavaScript.
      </p>
    </div>
  </div>
</div>
  `;
  setupPage(title, sub, content, id);
}

