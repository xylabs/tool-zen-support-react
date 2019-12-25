# COIN Zendesk Support Widget

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
<!-- [![Greenkeeper badge](https://badges.greenkeeper.io/xylabs/tool-zen-support-react.svg)](https://greenkeeper.io/) -->
[![Travis](https://img.shields.io/travis/xylabs/tool-zen-support-react.svg)](https://travis-ci.org/xylabs/tool-zen-support-react)
<!-- [![Coveralls](https://img.shields.io/coveralls/xylabs/tool-zen-support-react.svg)](https://coveralls.io/github/xylabs/tool-zen-support-react) -->
[![Dev Dependencies](https://david-dm.org/xylabs/tool-zen-support-react/dev-status.svg)](https://david-dm.org/xylabs/tool-zen-support-react?type=dev)

A support step form built with material design and react to submit tickets to Zendesk support.

[DEMO](https://xylabs.github.io/tool-zen-support-react/example)

![](/screenshot.png)

### Usage React

```bash
yarn add @xyo-network/tool-zen-support-react
```

```js
import { CoinSupportForm } from '@xyo-network/tool-zen-support-react'

<CoinSupportForm open={open} onClose={handleClose} onSuccess={handleSuccess}>
```

### Usage

```html
<script src="https://unpkg.com/react@16.12.0/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@xyo-network/tool-zen-support-react@latest/dist/support.js"></script>
<script>
  var supportRoot = document.getElementById('support-root')
  var supportBtn = document.getElementById('support-btn')

  ZenSupport.renderCoinSupportForm(supportRoot, function (form) {
    function openForm () {
      form.setOpen(true)
    }
    
    function closeForm () {
      form.setOpen(false)
    }

    supportBtn.addEventListener('click', openForm)

    return function () {
      supportBtn.removeEventListener('click', openForm)
    }
  }, { 
    open: true // INITIALLY SET TO OPEN
  })
  
</script>
```

### Features

 - Submit Ticket To Zendesk

### TODO

 - Attach Files