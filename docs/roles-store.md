# RolesStore

The `RolesStore` is a typescript class that contains [async signals](https://www.npmjs.com/package/async-signals), which you can watch to get reactive updates in your elements.

```js
import { RolesStore, RolesClient } from "@holochain-open-dev/roles";
const store = new RolesStore(new RolesClient(appClient, 'my-role-name'));
```

> Learn how to setup the `AppClient` object [here](https://www.npmjs.com/package/@holochain/client).

Learn more about the stores and how to integrate them in different frameworks [here](https://holochain-open-dev.github.io/reusable-modules/frontend/using/#stores).
