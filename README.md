# E-Com Plus Admin Helpers

[![Publish](https://github.com/ecomplus/admin-helpers/workflows/Publish/badge.svg)](https://github.com/ecomplus/admin-helpers/actions?workflow=Publish) [![CodeFactor](https://www.codefactor.io/repository/github/ecomplus/admin-helpers/badge)](https://www.codefactor.io/repository/github/ecomplus/admin-helpers) [![npm version](https://img.shields.io/npm/v/@ecomplus/admin-helpers.svg)](https://www.npmjs.org/@ecomplus/admin-helpers) [![License AGPL](https://img.shields.io/badge/License-AGPL-orange.svg)](https://opensource.org/licenses/AGPL-3.0)

DOM utils for E-Com Plus admin and related frontend apps

[CHANGELOG](https://github.com/ecomplus/admin-helpers/blob/master/CHANGELOG.md)

## Usage

```console
npm i @ecomplus/admin-helpers
```

### Example

```js
import { i19savedWithSuccess } from '@ecomplus/i18n'
import { i18n } from '@ecomplus/utils'
import ecomAuth from '@ecomplus/auth'
import { toast, handleApiError } from '@ecomplus/admin-helpers'

ecomAuth.login(localStorage.getItem('username'), localStorage.getItem('password'))

ecomAuth.on('login', () => {
  ecomAuth.requestApi('stores/me', 'patch', {
    domain: 'www.mystoredomain.com'
  })
    .then(() => toast(i18n(i19savedWithSuccess)))
    .catch(handleApiError)
})
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@ecomplus/admin-helpers/dist/admin-helpers.var.min.js"></script>
```

```js
window.toast('Hello!')
```
